import { ModeloIdentificar } from './../../modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-banner-navegacion',
  templateUrl: './banner-navegacion.component.html',
  styleUrls: ['./banner-navegacion.component.css']
})
export class BannerNavegacionComponent implements OnInit {

  seInicioSesion: boolean= false;

  subs: Subscription= new Subscription();
  constructor(private SeguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    this.subs = this.SeguridadServicio.ObtenerDatosUsuarioEnSesion().subscribe((datos:ModeloIdentificar) => {
     this.seInicioSesion=datos.siestaIdentificado;
      /* if(datos.siestaIdentificado){
        this.seInicioSesion= true;
      }else {
        this.seInicioSesion= false;
      }*/
    })
  }

}
