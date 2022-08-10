import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { param } from 'jquery';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service'; 
import { HistorialComentarios } from '../../models/historialComentarios';
declare var window: any;
@Component({
  selector: 'app-view-hitori-com',
  templateUrl: './view-hitori-com.component.html',
  styleUrls: ['./view-hitori-com.component.css']
})
export class ViewHitoriComComponent implements OnInit {
  formModal: any;//1
  solicitud:Solicitud = new Solicitud();
  //public editForm: FormGroup;
  postRef:any;
  datatable:any=[];
  datatablecomen:any=[];
  //arreglo
 Serv:HistorialComentarios={
  id_solicitud: 0,
  id_comentarios:0 ,
   fecha:'',
   mensajeHistorial:''   
 };
 
  constructor( 
    public solicitudService:SolicitudService,
    //public formBuilder:FormBuilder,
    public route: ActivatedRoute,
    private router: Router,
    
    private _CargarScripts:CargarScriptsService) {_CargarScripts.carga(["pruebasS"]) }

  
  
  saveSomeThingSA() {
    // confirm or save something
    this.formModal.hide();
  }//4
  ngOnInit(): void {
   
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id')
    
        if(id){
          this.solicitudService.getByIdHistorial(id)
          .subscribe({
    next:response => {
    this.datatablecomen=response;
   
    
    }
          });
        }
      }
      
    })


    this.route.paramMap.subscribe({
      next:(params)=>{
       const id = params.get('id')
       if(id){
        this.solicitudService.getByIdHistorial(id)
        .subscribe({
          next: (response)=>{
           this.Serv=response;
          }
        })
       }
      }
    })

}


onDataTableComen() {
  this.solicitudService.getComentarios().subscribe((res) => {
    this.datatablecomen = res
    console.log('a', res, this.solicitud.status2)
  })
}

onDataTable()
{
this.solicitudService.getComentarios().subscribe(res=>{
  this.datatablecomen=res;
  console.log(res);
});

}

onSetData1(select:any){
  
  this.solicitud.id_solicitud=select.id_solicitud
  this.solicitud.solicitante=select.solicitante
  this.solicitud.fechaSolicitud=select.fechaSolicitud
  this.solicitud.motivo=select.motivo
  this.solicitud.tipoTicket=select.tipoTicket
  this.solicitud.area=select.area
  this.solicitud.descripcion=select.descripcion
  this.solicitud.observaciones=select.observaciones
  this.solicitud.autorizador=select.autorizador
  this.solicitud.statusAprobacion="Aprobada"
  this.solicitud.comentariosAutorizador=select.comentariosAutorizador
  this.solicitud.fechaSalida=select.fechaSalida
  this.solicitud.nombreProvedor=select.nombreProvedor//
  this.solicitud.comentariosCompras=select.comentariosCompras
  this.solicitud.fechaRegreso=select.fechaRegreso
  this.solicitud.status2="Autorizado"
  this.solicitud.validarSalida=select.validarSalida
  this.solicitud.fechaCompromiso=select.fechaCompromiso
  this.solicitud.comentariosRegreso=select.comentariosRegreso
  this.solicitud.correoSolicitante=select.correoSolicitante
  this.solicitud.emailSent=select.emailSent
  
 
}
onSetData2(select:any){
  this.solicitud.id_solicitud=select.id_solicitud
  this.solicitud.solicitante=select.solicitante
  this.solicitud.fechaSolicitud=select.fechaSolicitud
  this.solicitud.motivo=select.motivo
  this.solicitud.tipoTicket=select.tipoTicket
  this.solicitud.area=select.area
  this.solicitud.descripcion=select.descripcion
  this.solicitud.observaciones=select.observaciones
  this.solicitud.autorizador=select.autorizador
  this.solicitud.statusAprobacion="Rechazada"
  this.solicitud.comentariosAutorizador=select.comentariosAutorizador
  this.solicitud.fechaSalida=select.fechaSalida
  this.solicitud.nombreProvedor=select.nombreProvedor//
  this.solicitud.comentariosCompras=select.comentariosCompras
  this.solicitud.fechaRegreso=select.fechaRegreso
  this.solicitud.status2="No se autorizo"
  this.solicitud.validarSalida=select.validarSalida
  this.solicitud.fechaCompromiso=select.fechaCompromiso
  this.solicitud.comentariosRegreso=select.comentariosRegreso
  this.solicitud.correoSolicitante=select.correoSolicitante
  this.solicitud.emailSent=select.emailSent

}
onUpdateSalida(solicitud:Solicitud):void{
  
  this.solicitudService.updateSolicitud(solicitud.id_solicitud, solicitud).subscribe(res => {
  
    if(res){
      location.reload()
      alert('Datos guardados!, los datos han sido guardados con exito.')
  
     
      //this.onDataTable();
    } else {
      alert('Error! :(')
    }
  });
}

}
