import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { RealizarPedidoComponent } from './realizar-pedido/realizar-pedido.component';
import { AsignarPedidoComponent } from './asignar-pedido/asignar-pedido.component';


@NgModule({
  declarations: [
    RealizarPedidoComponent,
    AsignarPedidoComponent
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule
  ]
})
export class PedidosModule { }
