import { NgModule } from '@angular/core';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { SharedModule } from '../shared/shared.module';
import { ClienteDetalheComponent } from './cliente-detalhe/cliente-detalhe.component';
import { FormularioClienteComponent } from './formulario-cliente/formulario-cliente.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ClientesComponent,
    ClienteDetalheComponent,
    FormularioClienteComponent,
  ],
  imports: [CommonModule, ClientesRoutingModule, SharedModule, ReactiveFormsModule],
})
export class ClientesModule {}
