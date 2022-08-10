import { Component, OnInit } from '@angular/core'
import { CargarScriptsService } from 'src/app/cargar-scripts.service'
import { Solicitud } from 'src/app/models/solicitud'
import { SolicitudService } from 'src/app/services/solicitud.service'
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  solicitud: Solicitud = new Solicitud()
  datatable: any = []
  title: any = ''
  discounted = document.getElementById('isDiscounted')
  no_discounted = document.getElementById('isNotDiscounted')
  discount_percentage = document.getElementById('discountPercentage')

  discount_percentage1 = document.getElementById('Motivo')

  constructor(
    private solicitudService: SolicitudService,
    private _CargarScripts: CargarScriptsService,
  ) {
    _CargarScripts.carga(['validaciones'])
  }

  ngOnInit(): void {
    this.onDataTable()
  }
  onDataTable() {
    this.solicitudService.getSolicitud().subscribe((res) => {
      this.datatable = res
    })
  }

  onAddSolicitud(solicitud: Solicitud): void {
   
      if (
        ((document.getElementById('txtName') as HTMLInputElement).value === '' ||
        (document.getElementById('txtmail') as HTMLInputElement).value === ''||
        (document.getElementById('txtArea') as HTMLInputElement).value === ''||
        (document.getElementById('datFecha') as HTMLInputElement).value === ''||
        (document.getElementById('txtproveedor') as HTMLInputElement).value === ''||
        (document.getElementById('txtDescripcion') as HTMLInputElement).value === ''
        
        )||
        ((document.getElementById('Motivo') as HTMLInputElement).disabled ===
          true &&
          (document.getElementById('discountPercentage') as HTMLInputElement)
            .disabled === true) ||
        ((document.getElementById('Motivo') as HTMLInputElement).disabled ===
          true &&
          (document.getElementById('discountPercentage') as HTMLInputElement)
            .value === '') ||
        ((document.getElementById('discountPercentage') as HTMLInputElement)
          .disabled === true &&
          (document.getElementById('Motivo') as HTMLInputElement).value === '')
      ) {
      
        if (
          (document.getElementById('radioSi') as HTMLInputElement).checked ===
            false &&
          (document.getElementById('radioNo') as HTMLInputElement).checked ===
            false
        ) {
          alert(`Un momento!!!!..,  se debe marcar si el activo regresa o no :[`)
        }
  
        alert(`llene toda la informació e intente de nuevo :'(`)
      } 
      
      else {
        if (
          (document.getElementById('discountPercentage') as HTMLInputElement)
            .disabled === true
        ) {
          solicitud.motivo = (document.getElementById(
            'Motivo',
          ) as HTMLInputElement).value
        } else {
          solicitud.motivo = (document.getElementById(
            'discountPercentage',
          ) as HTMLInputElement).value
        }
        if (
          (document.getElementById('radioSi') as HTMLInputElement).checked ===
          true
        ) {
          solicitud.regresa = 'Regresar'
        } else {
          solicitud.regresa = 'No regresar'
        }
        solicitud.tipoTicket = (document.getElementById(
          'ticket',
        ) as HTMLInputElement).value
        this.solicitudService.addSolicitud(solicitud).subscribe((res) => {
          if (res) {
            
            alert('la solicitud ha sido registrada!!,  Notificación enviada.')
            this.clear()
            this.onDataTable()
            window.location.reload()
          } else {
            alert('Error! :(')
            console.log('hola3')
          }
        })
      }
    
   



  }


  //

  onSetData() {
    this.solicitud.status2 = 'Autorización pendiente'
  }

  clear() {
    this.solicitud.solicitante = ''
    this.solicitud.fechaSolicitud = ''
    this.solicitud.motivo = ''
    this.solicitud.tipoTicket = ''
    this.solicitud.area = ''
    this.solicitud.descripcion = ''
    this.solicitud.observaciones = ''
    this.solicitud.autorizador = ''
    this.solicitud.fechaSalida = ''
    this.solicitud.nombreProvedor = ''
    this.solicitud.comentariosCompras = ''
    this.solicitud.fechaRegreso = ''
    this.solicitud.status2 = ''
  }
}




