import { Component, OnInit,TemplateRef } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service'; 
//importamos los modulos para formularios
//import { FormBuilder, FormGroup } from '@angular/forms';
declare var window: any;
@Component({
  selector: 'app-autorizar',
  templateUrl: './autorizar.component.html',
  styleUrls: ['./autorizar.component.css']
})
export class AutorizarComponent implements OnInit {
  formModal: any;//1
  solicitud:Solicitud = new Solicitud();
  //public editForm: FormGroup;
  postRef:any;
  datatable:any=[];
  //arreglo
  public titles = ''
  bsModalRef: BsModalRef = new BsModalRef()
 Serv:Solicitud={
   id_solicitud: 0,
   solicitante: '',
   fechaSolicitud: '',
   provedor: '',
   motivo: '',
   tipoTicket:'',
   area: '',
   descripcion: '',
   observaciones: '',
   autorizador: '',
   comentariosAutorizador: '',
   fechaSalida: '',
   nombreProvedor: '',
   comentariosCompras: '',
   historialCompras:'',
   fechaRegreso: '',
   status2: '',
   regresa: '',
   validarSalida: '',
   fechaCompromiso: '',
   comentariosRegreso: '',
   correoSolicitante: '',
   emailSent: '',
   statusAprobacion: ''
   
 };
 
  constructor( 
    public solicitudService:SolicitudService,
    //public formBuilder:FormBuilder,
    private modalService: BsModalService,
    public route: ActivatedRoute,
    private router: Router,
    
    
    ) { 
  
  }
  openModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template)
  }
  openModal2(template2: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template2)
  }
  saveSomeThing() {
    // confirm or save something
    this.bsModalRef.hide()
  } //4
  ngOnInit(): void {
    

    this.route.paramMap.subscribe({
      next:(params)=>{
        const id = params.get('id')
    
        if(id){
          this.solicitudService.getByIdSolicitud(id)
          .subscribe({
    next:response => {
    this.datatable=response;
   
    
    }
          });
        }
      }
      
    })


    this.route.paramMap.subscribe({
      next:(params)=>{
       const id = params.get('id')
       if(id){
        this.solicitudService.getByIdSolicitud(id)
        .subscribe({
          next: (response)=>{
this.Serv=response;
          }
        })
       }
      }
    })

}




onDataTable()
{
this.solicitudService.getSolicitud().subscribe(res=>{
  this.datatable=res;
  console.log(res);
});

}

onSetData1(select:any){
  
  this.solicitud.id_solicitud = select.id_solicitud
  this.solicitud.solicitante = select.solicitante
  this.solicitud.correoSolicitante = select.correoSolicitante
  this.solicitud.fechaSolicitud = select.fechaSolicitud
  this.solicitud.tipoTicket = select.tipoTicket
  this.solicitud.provedor = select.provedor
  this.solicitud.nombreProvedor = select.nombreProvedor
  this.solicitud.motivo = select.motivo
  this.solicitud.area = select.area
  this.solicitud.descripcion = select.descripcion
  this.solicitud.observaciones = select.observaciones
  this.solicitud.regresa = select.regresa
  this.solicitud.autorizador = select.autorizador
  this.solicitud.statusAprobacion="Aprobada"
  this.solicitud.comentariosAutorizador = select.comentariosAutorizador //
  this.solicitud.fechaSalida = select.fechaSalida
  this.solicitud.validarSalida = select.validarSalida
  this.solicitud.fechaCompromiso = select.fechaCompromiso
  this.solicitud.comentariosCompras = select.comentariosCompras
  this.solicitud.fechaRegreso = select.fechaRegreso
  this.solicitud.comentariosRegreso = select.comentariosRegreso
  this.solicitud.status2="Autorizado"
  this.solicitud.emailSent = select.emailSent
  this.solicitud.historialCompras = select.historialCompras}



  onSetData2(select:any){

    this.solicitud.id_solicitud = select.id_solicitud
    this.solicitud.solicitante = select.solicitante
    this.solicitud.correoSolicitante = select.correoSolicitante
    this.solicitud.fechaSolicitud = select.fechaSolicitud
    this.solicitud.tipoTicket = select.tipoTicket
    this.solicitud.provedor = select.provedor
    this.solicitud.nombreProvedor = select.nombreProvedor
    this.solicitud.motivo = select.motivo
    this.solicitud.area = select.area
    this.solicitud.descripcion = select.descripcion
    this.solicitud.observaciones = select.observaciones
    this.solicitud.regresa = select.regresa
    this.solicitud.autorizador = select.autorizador
    this.solicitud.statusAprobacion="Rechazada"
    this.solicitud.comentariosAutorizador = select.comentariosAutorizador //
    this.solicitud.fechaSalida = select.fechaSalida
    this.solicitud.validarSalida = select.validarSalida
    this.solicitud.fechaCompromiso = select.fechaCompromiso
    this.solicitud.comentariosCompras = select.comentariosCompras
    this.solicitud.fechaRegreso = select.fechaRegreso
    this.solicitud.comentariosRegreso = select.comentariosRegreso
    this.solicitud.status2="No se autorizo"
    this.solicitud.emailSent = select.emailSent
    this.solicitud.historialCompras = select.historialCompras}

onUpdateSalida(solicitud:Solicitud):void{
  if((document.getElementById('txtMotivo') as HTMLInputElement).value==='' ){
alert('Por favor, agrega un comentario para continuar')
  }else{
    this.solicitudService.updateSolicitud(solicitud.id_solicitud, solicitud).subscribe(res => {
  
      if(res){
        location.reload()
        alert('Se registro sú respuesta!!,  Notificando....')
    
       
        //this.onDataTable();
      } else {
        alert('Error! :(')
      }
    });
this.saveSomeThing();
  }
  
}


onUpdateSalida1(solicitud:Solicitud):void{


  {
    this.solicitudService.updateSolicitud(solicitud.id_solicitud, solicitud).subscribe(res => {
  
      if(res){
        location.reload()
        alert('Se registro sú respuesta!!,  Notificando....')
    
       
        //this.onDataTable();
      } else {
        alert('Error! :(')
      }
    });

  
}}


}