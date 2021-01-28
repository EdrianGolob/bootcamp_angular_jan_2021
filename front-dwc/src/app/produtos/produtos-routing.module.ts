import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioClienteComponent } from '../clientes/formulario-cliente/formulario-cliente.component';
import { FormularioProdutosComponent } from './formulario-produtos/formulario-produtos.component';
import { ProdutosComponent } from './produtos.component';
import { VisualizarProdutosComponent } from './visualizar-produtos/visualizar-produtos.component';

const routes: Routes = [
  {path: '',          component: ProdutosComponent},
  {path: 'view/:id',  component: VisualizarProdutosComponent},
  {path: 'edit/:id',  component: FormularioProdutosComponent },
  {path: 'new/:id',   component: FormularioClienteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
