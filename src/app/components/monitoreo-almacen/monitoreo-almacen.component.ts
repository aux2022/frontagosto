import { identifierName } from '@angular/compiler'
import { Component, OnInit, TemplateRef } from '@angular/core'
import { Observable } from 'rxjs'
import { Solicitud } from 'src/app/models/solicitud'
import { SolicitudService } from 'src/app/services/solicitud.service'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { CargarScriptsService } from 'src/app/cargar-scripts.service'
import { AuthService } from 'src/app/services/auth.service'
declare var window: any
@Component({
  selector: 'app-monitoreo-almacen',
  templateUrl: './monitoreo-almacen.component.html',
  styleUrls: ['./monitoreo-almacen.component.css'],
})
export class MonitoreoAlmacenComponent implements OnInit {
  solicitud: Solicitud = new Solicitud()
  datatable: any = []
  datatableterminadas:any=[];
  datatablerechazadas:any=[];
  datatableProceso:any=[];
  title: any = ''
  formModal: any //1
  public titles = ''
  bsModalRef: BsModalRef = new BsModalRef()
  bsModalRef1: BsModalRef = new BsModalRef()
  constructor(
     private authService: AuthService,
    private solicitudService: SolicitudService,
    private modalService: BsModalService,
    private _CargarScripts: CargarScriptsService,
  ) {
    _CargarScripts.carga(['pruebasS'])
  }

  ngOnInit(): void {

    this.authService.logoutAlma();
    this.reload();
    this.onDataTable();
    this.onDataTableProceso();
    this.onDataTableRechazadas();
    this.onDataTableTerminadas();
  }

  
onDataTableProceso()
{
this.solicitudService.GetSolicitudAceptInProcess().subscribe(res=>{
  this.datatableProceso=res;
  console.log(res);
});

}
onDataTableTerminadas()
{
this.solicitudService.GetSolicitudTerminadas().subscribe(res=>{
  this.datatableterminadas=res;
  console.log(res);
});

}
onDataTableRechazadas()
{
this.solicitudService.GetSolicitudRechazadas().subscribe(res=>{
  this.datatablerechazadas=res;
  console.log(res);
});

}


 

  onDataTable() {
    this.solicitudService.getSolicitud().subscribe((res) => {
      this.datatable = res
    })
  }
  onUpdateActivoR(solicitud: Solicitud): void {
    this.solicitudService
      .updateSolicitud(solicitud.id_solicitud, solicitud)
      .subscribe((res) => {
        if (res) {
          alert('La información ha sido guardada con exito!, la solicitud numero '+solicitud.id_solicitud+' ha terminado')
      

          this.onDataTable()
          this.onDataTableProceso();
    this.onDataTableRechazadas();
    this.onDataTableTerminadas();
        } else {
          alert('Error! :(')
        }
      })
  }

  onUpdateSalida(solicitud: Solicitud): void {
    if((document.getElementById('txtFecha') as HTMLInputElement).value === ''){
alert('Debes de agregar una fecha')
    }
else{
  this.solicitudService
  .updateSolicitud(solicitud.id_solicitud, solicitud)
  .subscribe((res) => {
    if (res) {
      alert('La información ha sido guardada con exito!, Esperando salida en vigilancia.')

      
      this.onDataTable()
      this.onDataTableProceso();
this.onDataTableRechazadas();
this.onDataTableTerminadas();
    } else {
      alert('Error! :(')
    }
  })
}



    
  }
  reload(){
    if (window.performance.navigation.type == 1) {
    
        this.authService.logout()
        //location.href ="login";
    
   
   }else{
  }
  }
  onSetData(select: any) {
    this.solicitud.id_solicitud = select.id_solicitud
  this.solicitud.solicitante = select.solicitante
  this.solicitud.correoSolicitante = select.correoSolicitante
  this.solicitud.fechaSolicitud = select.fechaSolicitud
  this.solicitud.tipoTicket = select.tipoTicket
  this.solicitud.provedor = select.provedor
  this.solicitud.motivo = select.motivo
  this.solicitud.area = select.area
  this.solicitud.descripcion = select.descripcion
  this.solicitud.observaciones = select.observaciones
  this.solicitud.regresa = select.regresa
  this.solicitud.autorizador = select.autorizador
  this.solicitud.statusAprobacion = select.statusAprobacion
  this.solicitud.comentariosAutorizador = select.comentariosAutorizador //
  this.solicitud.fechaSalida = select.fechaSalida
  this.solicitud.nombreProvedor = select.nombreProvedor
  this.solicitud.validarSalida = select.validarSalida
  this.solicitud.fechaCompromiso = select.fechaCompromiso
  this.solicitud.comentariosCompras = select.comentariosCompras
  this.solicitud.fechaRegreso = select.fechaRegreso
  this.solicitud.comentariosRegreso = select.comentariosRegreso
  this.solicitud.status2 = 'En reparación con'
  this.solicitud.emailSent = select.emailSent
  this.solicitud.historialCompras = select.historialCompras
  }
  onSetDataRegreso(select: any) {
    this.solicitud.id_solicitud = select.id_solicitud
    this.solicitud.solicitante = select.solicitante
    this.solicitud.correoSolicitante = select.correoSolicitante
    this.solicitud.fechaSolicitud = select.fechaSolicitud
    this.solicitud.tipoTicket = select.tipoTicket
    this.solicitud.provedor = select.provedor
    this.solicitud.motivo = select.motivo
    this.solicitud.area = select.area
    this.solicitud.descripcion = select.descripcion
    this.solicitud.observaciones = select.observaciones
    this.solicitud.regresa = select.regresa
    this.solicitud.autorizador = select.autorizador
    this.solicitud.statusAprobacion = select.statusAprobacion
    this.solicitud.comentariosAutorizador = select.comentariosAutorizador //
    this.solicitud.fechaSalida = select.fechaSalida
    this.solicitud.nombreProvedor = select.nombreProvedor
    this.solicitud.validarSalida = select.validarSalida
    this.solicitud.fechaCompromiso = select.fechaCompromiso
    this.solicitud.comentariosCompras = select.comentariosCompras
    this.solicitud.fechaRegreso = select.fechaRegreso
    this.solicitud.comentariosRegreso = select.comentariosRegreso
    this.solicitud.status2 = 'Recibido en almacén'
    this.solicitud.emailSent = select.emailSent
    this.solicitud.historialCompras = select.historialCompras
    
    
    
  }

  openModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template)
  }

  openModal1(template1: TemplateRef<any>) {
    this.bsModalRef1 = this.modalService.show(template1)
  }
  saveSomeThing() {
    // confirm or save something
    this.bsModalRef.hide()
  } //4
  saveSomeThing1() {
    // confirm or save something
    this.bsModalRef1.hide()
  } //4
  
}
