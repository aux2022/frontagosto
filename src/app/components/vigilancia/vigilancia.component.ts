import { Component, OnInit, TemplateRef } from '@angular/core'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { CargarScriptsService } from 'src/app/cargar-scripts.service'
import { Solicitud } from 'src/app/models/solicitud'
import { SolicitudService } from 'src/app/services/solicitud.service'
@Component({
  selector: 'app-vigilancia',
  templateUrl: './vigilancia.component.html',
  styleUrls: ['./vigilancia.component.css'],
})
export class VigilanciaComponent implements OnInit {
  solicitud: Solicitud = new Solicitud()
  datatable: any = []
  datatableRegre: any = []
  title: any = ''
  public titles = ''
  bsModalRef: BsModalRef = new BsModalRef()
  constructor(
    private modalService: BsModalService,
    private solicitudService: SolicitudService,
    private _CargarScripts: CargarScriptsService,
  ) {
    _CargarScripts.carga(['pruebasS'])
  }

  ngOnInit(): void {
    this.onDataTable()
    this.onDataTableRegre()
  }
  onDataTable() {
    this.solicitudService.GetVigilance().subscribe((res) => {
      this.datatable = res
      console.log(res)
    })
  }
  onDataTableRegre() {
    this.solicitudService.GetVigilanceRegreso().subscribe((res) => {
      this.datatableRegre = res
      console.log(res)
    })
  }

  openModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template)
  }
  openModal12(template1: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template1)
  }
  saveSomeThing() {
    // confirm or save something
    this.bsModalRef.hide()
  } //4
  onSetData1(select: any) {
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
    this.solicitud.validarSalida = 'true'
    this.solicitud.fechaCompromiso = select.fechaCompromiso
    this.solicitud.comentariosCompras = select.comentariosCompras
    this.solicitud.fechaRegreso = select.fechaRegreso
    this.solicitud.comentariosRegreso = select.comentariosRegreso
    this.solicitud.status2 = select.status2
    this.solicitud.emailSent = select.emailSent
    this.solicitud.historialCompras = select.historialCompras
  }
  onSetData3(select: any) {
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
    this.solicitud.validarSalida = 'true2'
    this.solicitud.fechaCompromiso = select.fechaCompromiso
    this.solicitud.comentariosCompras = select.comentariosCompras
    this.solicitud.fechaRegreso = select.fechaRegreso
    this.solicitud.comentariosRegreso = select.comentariosRegreso
    this.solicitud.status2 = select.status2
    this.solicitud.emailSent = select.emailSent
    this.solicitud.historialCompras = select.historialCompras
  }

  onUpdateSalida(solicitud: Solicitud): void {

      this.solicitudService
      .updateSolicitud(solicitud.id_solicitud, solicitud)
      .subscribe((res) => {
        if (res) {
        

          this.onDataTable()
          this. onDataTableRegre() 
        } else {
          alert('Error! :(')
        }
      })
    
   
  }


  login() {
   
   
  }
}
