import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { Solicitud } from 'src/app/models/solicitud';
import { AuthService } from 'src/app/services/auth.service';
import { SolicitudService } from 'src/app/services/solicitud.service'; 
declare var window: any;
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-monitoreo-compras',
  templateUrl: './monitoreo-compras.component.html',
  styleUrls: ['./monitoreo-compras.component.css']
})
export class MonitoreoComprasComponent implements OnInit {
  solicitud:Solicitud = new Solicitud();
  datatable:any=[];
  datatableterminadas:any=[];
  datatablerechazadas:any=[];
  datatableProceso:any=[];
  title:any="";
  formModal: any;//1
  constructor(private authService: AuthService,private solicitudService:SolicitudService,private _CargarScripts:CargarScriptsService) {_CargarScripts.carga(["pruebasS"]) }

  ngOnInit(): void {
   this.reload()
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('myModal')
    );//2
    this.onDataTable();
    this.onDataTableProceso();
    this.onDataTableRechazadas();
    this.onDataTableTerminadas();
  }
  
reload(){
  if (window.performance.navigation.type == 1) {
  
      this.authService.logout()
      //location.href ="login";
  
 
 }else{
}
}
  openFormModal() {
    this.formModal.show();
  }//3
  saveSomeThing() {
    // confirm or save something
    this.formModal.hide();
  }//4
  onDataTable()
{
this.solicitudService.getSolicitud().subscribe(res=>{
  this.datatable=res;
});

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


onUpdateMonitoreoC(solicitud:Solicitud):void{
  this.solicitudService.updateSolicitud(solicitud.id_solicitud, solicitud).subscribe(res => {
    if(res){
      // this.toastr.info(`La persona número ${solicitud.id} se ha modificado con exito!`);
  
    
      this.onDataTable();
      this.onDataTableTerminadas();
      this.onDataTableRechazadas();
      this.onDataTableProceso();
    } else {
      alert('Error! :(')
    }
  });
}
onSetData(select:any){

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
  this.solicitud.status2 = select.status2
  this.solicitud.emailSent = select.emailSent
  this.solicitud.historialCompras = 'true'

 
}

name = 'DATA.xlsx';
  exportToExcel(): void {
    let element = document.getElementById('season-tble');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }

}


