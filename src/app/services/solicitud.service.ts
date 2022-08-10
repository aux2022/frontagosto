import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Solicitud } from '../models/solicitud'
import{HistorialComentarios}from'../models/historialComentarios'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  constructor(private http: HttpClient) {}

  urlServices:string="http://172.16.10.239:8081/api/";
  //172.16.200.95:8083  

  //metodos manejo de CRUD
  getSolicitud() {
    return this.http.get(this.urlServices+'Solicitud')
  }
  addSolicitud(solicitud: Solicitud): Observable<Solicitud> {
    return this.http.post<Solicitud>(this.urlServices +'Solicitud', solicitud)
  }

  updateSolicitud( id_Solicitud: number, solicitud: Solicitud,): Observable<Solicitud> {
    return this.http.put<Solicitud>(this.urlServices +'Solicitud'+ `/${id_Solicitud}`, solicitud)
  }
  deleteSolicitud(id_Solicitud: number) {
    return this.http.delete(this.urlServices +'Solicitud'+ `/${id_Solicitud}`)
  }
  getByIdSolicitud(id_Solicitud: string): Observable<Solicitud> {
    return this.http.get<Solicitud>(this.urlServices +'Solicitud'+ `/${id_Solicitud}`)
  }

  //metodos para los comentarios coompras
  getComentarios() {
    return this.http.get(this.urlServices +'historial')
  }
  
  getByIdHistorial(id_Solicitud: string): Observable<HistorialComentarios> {
    return this.http.get<HistorialComentarios>(this.urlServices +'historial'+ `/${id_Solicitud}`)
  }
  //metodos para vigilancia
  GetVigilance() {
    return this.http.get(this.urlServices+'Vigilance')
  }
  GetVigilanceRegreso() {
    return this.http.get(this.urlServices+'VigilanciaRegresos')
  }
  //metos usados para almacen
  GetSolicitudAceptInProcess() {
    return this.http.get(this.urlServices+'AceptadasInProcess')
  }
  GetSolicitudRechazadas() {
    return this.http.get(this.urlServices+'SolicitudRechazada')
  }
  GetSolicitudTerminadas() {
    return this.http.get(this.urlServices+'SolicitudFinalizada')
  }

}

