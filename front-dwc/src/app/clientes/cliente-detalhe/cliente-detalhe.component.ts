import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoDialogService, PoNotificationService } from '@po-ui/ng-components';
import { switchMap } from 'rxjs/operators';
import { CidadesService } from 'src/app/shared/servicos/cidades.service';
import { EstadosService } from 'src/app/shared/servicos/estados.service';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../models/clientes';

@Component({
  selector: 'app-cliente-detalhe',
  templateUrl: './cliente-detalhe.component.html',
  styleUrls: ['./cliente-detalhe.component.css']
})
export class ClienteDetalheComponent implements OnInit {

  cliente: Cliente;
  titulo: string;


  constructor(private ClientesService: ClientesService,
    private route:ActivatedRoute,
    private CidadesService: CidadesService,
    private EstadoService: EstadosService,
    private poAlert: PoDialogService,
    private poNotification: PoNotificationService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((params) => this.ClientesService.retornaClienteComEnderecoCompleto(params.id))
    )
    .subscribe(
      (cliente) => {this.cliente = cliente}
    )
    /*this.route.params.subscribe((params) => {
      const {id} = params;
      if(id){
        this.ClientesService.retornaCliente(id).subscribe((cliente) => {
          this.cliente = cliente;
        });
      }
    });*/
  }

  get sexo(): string{
    const sexoOpt = {
      M: 'Masculino',
      F: 'Feminino',
      P: 'Prefiro não informar',
    }

    return sexoOpt[this.cliente?.sexo] ?? sexoOpt.P;
  }

  voltar(){
    window.history.back();

  }
  remover(){
    this.poAlert.confirm({
      title: 'Confirmação de exclusão',
      message: ` Você tem certeza de que quer apagar o cliente ${this.cliente.nome} ?`,
      confirm: () => {this.excluirCliente(this.cliente.id)},
    });

  }
  private excluirCliente(id: string) {
    this.ClientesService.apagaCliente(id).subscribe((_) => {
      this.poNotification.success('Cliente excluido');
      this.router.navigate(['home/clientes']);
    },
    (error) => {
      console.log(error)
    });

  }
  editar(){
    this.router.navigate(['home/clientes/edit', this.cliente.id])

  }

}
