import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearUsuarioComponent } from './personas/crear-usuario/crear-usuario.component';
import { BuscarUsuarioComponent } from './personas/buscar-usuario/buscar-usuario.component';
import { EditarUsuarioComponent } from './personas/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './personas/eliminar-usuario/eliminar-usuario.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearUsuarioComponent,
    BuscarUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    CrearProductoComponent,
    BuscarProductoComponent,
    EditarProductoComponent,
    EliminarProductoComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
