import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos.component';
import { FormularioProdutosComponent } from './formulario-produtos/formulario-produtos.component';
import { VisualizarProdutosComponent } from './visualizar-produtos/visualizar-produtos.component';
import { SharedModule } from '../shared/shared.module';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProdutosComponent, FormularioProdutosComponent, VisualizarProdutosComponent],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    SharedModule,
    FormsModule,
    PoTemplatesModule
  ]
})
export class ProdutosModule { }
