import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { PersonasComponent } from './personas/personas.component';
import { ProductosComponent } from './productos/productos.component';


@NgModule({
  declarations: [
    PersonasComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule
  ]
})
export class AdministracionModule { }
