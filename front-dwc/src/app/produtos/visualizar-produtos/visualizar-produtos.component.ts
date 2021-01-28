import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PoPageDynamicDetailActions, PoPageDynamicDetailComponent, PoPageDynamicDetailField } from '@po-ui/ng-templates';

@Component({
  selector: 'app-visualizar-produtos',
  templateUrl: './visualizar-produtos.component.html',
  styleUrls: ['./visualizar-produtos.component.css']
})
export class VisualizarProdutosComponent implements OnInit {

  titulo = 'Visualizando';
  actions:PoPageDynamicDetailActions = {
    back: 'home/produtos',
    edit: 'home/produtos/edit/:id',
  };
  fields: Array<PoPageDynamicDetailField> = [
    {property: 'id', key:true},
    {property: 'descricao', label: 'Descrição'},
    {property: 'preco', label: 'Preço do Produto', type: 'currency'}
  ]

  constructor(
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      this.titulo = params.id ? `Visualizando produto ${params.id}`
      : 'Visualizando'
    })

  }

}
