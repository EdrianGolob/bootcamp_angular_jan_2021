import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  PoBreadcrumb,
  PoPageAction,
  PoTableAction,
  PoTableColumn,
} from '@po-ui/ng-components';
import { Observable, Subscription } from 'rxjs';
import { CidadesService } from '../shared/servicos/cidades.service';
import { EstadosService } from '../shared/servicos/estados.service';
import { ClientesService } from './clientes.service';
import { Cliente, Clientes } from './models/clientes';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
})


export class ClientesComponent implements OnInit {
  actions: Array<PoPageAction> = [
    {
      label: 'Incluir',
      url: 'home/clientes/new',
    },
  ];

  breadcrumb: PoBreadcrumb = {
    items: [
      {label:'Home',link: '/home'},{label: 'Cliente'}
    ],
  };


  items$: Observable<Clientes>;

  colunas: Array<PoTableColumn> = [
    {property: 'id', label: 'ID', type: 'string'},
    {property: 'nome', label: 'Nome', type: 'string'},
    {property: 'endereco', label: 'Endereço', type: 'string'},
    {property: 'dataNascimento', label: 'Data de Nascimento', type: 'date'},
  ];

  tableActions: Array<PoTableAction> = [
    {action: this.visualizar.bind(this) , label: 'Visualizar'},
    {action: this.editar.bind(this) , label: 'Editar'},
  ];

  constructor(private ClientesService: ClientesService, private router:Router
    ) { }

  ngOnInit(): void {
    this.items$ = this.ClientesService.retornaClientes();
  }
// linhas abaixo foram substituidas pela Linha de cima usando $ na declaracao de items
/*
  ngOnInit(): void {
    this.subscriptions.add(this.ClientesService.retornaClientes().subscribe(
      (items) => {
        this.items = items;
      }, (error) => {
        console.log(error)
      })
    );
  }

  ngOnDestroy(): void{
    this.subscriptions.unsubscribe();
  }
*/


  visualizar(cliente: Cliente){
    this.router.navigate(['home/clientes/view', cliente.id]);
  }

  editar() {
    //this.router.navigate(['home/clientes/edit', cliente.id]);
  }

}
