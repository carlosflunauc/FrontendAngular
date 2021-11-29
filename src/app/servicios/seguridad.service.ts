import {ModeloIdentificar} from './../modelos/identificar.modelo';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url='http://127.0.0.1:3000';

  constructor(private http: HttpClient) { 

  }

Identificar(usuario: string, clave: string):Observable<ModeloIdentificar>{
  return this.http.post<ModeloIdentificar>(`${this.url}/identificarUsuario`,{
    usuario : usuario,
    clave : clave
  },{
    headers: new HttpHeaders({
  })
  })
}

AlmacenarSesion(datos: ModeloIdentificar){
  let stringDatos = JSON.stringify(datos);
  localStorage.setItem("datosSesion",stringDatos);
}

ObtenerInformacionSesion(){
  let datosString = localStorage.getItem("datosSesion");
  if(datosString){
    let datos = JSON.parse(datosString);
    return datos;

  }else{
    return null;
  }
}

EliminarInformacionSesion(){
  localStorage.removeItem("datosSesion");
}
}
