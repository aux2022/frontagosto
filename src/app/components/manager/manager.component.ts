import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CargarScriptsService } from 'src/app/cargar-scripts.service';
import { Solicitud } from 'src/app/models/solicitud';
import { AuthService } from 'src/app/services/auth.service';
import { SolicitudService } from 'src/app/services/solicitud.service'; 


@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  solicitud:Solicitud = new Solicitud();
  datatable:any=[];
  title:any="";
  crack:string="";
  solicitudesDetails:Solicitud={
    id_solicitud: 0,
    solicitante: "",
    fechaSolicitud: "",
    provedor: "",
    motivo: "",
    tipoTicket: "",
    area: "",
    descripcion: "",
    observaciones: "",
    autorizador: "",
    comentariosAutorizador: "",
    fechaSalida: "",
    nombreProvedor: "",
    comentariosCompras: "",
    historialCompras:"",
    fechaRegreso: "",
    status2: "",
    regresa: '',
    validarSalida: '',
    fechaCompromiso: '',
    correoSolicitante: '',
    comentariosRegreso: '',
    emailSent: '',
    statusAprobacion:'' 
  }
  constructor(private authService: AuthService,private route:ActivatedRoute,private solicitudService:SolicitudService,private _CargarScripts:CargarScriptsService) { _CargarScripts.carga(["pruebasS"])}
  
  ngOnInit(): void {
   this.authService.logout()
    this.onDataTable();
  }
  onDataTable()
{
this.solicitudService.getSolicitud().subscribe(res=>{
  this.datatable=res;
  console.log(res);
});

}
onDeleteServ(id_Solicitud:number):void{
 
  this.solicitudService.deleteSolicitud(id_Solicitud).subscribe(res => {
    if(res){
      this.onDataTable();
    } else {
      alert('Error! :(')
    }
  });
}


onUpdateMonitoreoC(solicitud:Solicitud):void{
  this.solicitudService.updateSolicitud(solicitud.id_solicitud, solicitud).subscribe(res => {
    if(res){
      // this.toastr.info(`La persona número ${solicitud.id} se ha modificado con exito!`);
  
      
      this.onDataTable();
    } else {
      alert('Error! :(')
    }
  });
}


reload(){
  if (window.performance.navigation.type == 1) {
  
      this.authService.logout()
      //location.href ="login";
  
 
 }else{
}
}


}

