import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
//import { pathToFileURL } from 'url';
import { HomeComponent } from './pages/home/home.component'
import { FormularioComponent } from './components/formulario/formulario.component'
import { AutorizarComponent } from './components/autorizar/autorizar.component'
import { VigilanciaComponent } from './components/vigilancia/vigilancia.component'
import { MonitoreoComprasComponent } from './components/monitoreo-compras/monitoreo-compras.component'
import { ManagerComponent } from './components/manager/manager.component'
import { MonitoreoAlmacenComponent } from './components/monitoreo-almacen/monitoreo-almacen.component'
import { MostrarDatosComponent } from './components/mostrar-datos/mostrar-datos.component'
import { VistaGeneralComponent } from './components/vista-general/vista-general.component'
import { ViewHitoriComComponent } from './components/view-hitori-com/view-hitori-com.component';
import { BloquearAcesoGuard } from './components/guards/bloquear-aceso.guard'
import { CompraGuardGuard } from './components/guards/compra-guard.guard';
import { AlmacenGuardGuard } from './components/guards/almacen-guard.guard';
import { VigilanciaGuard } from './components/guards/vigilancia-guard';
import { AutorizaGuard } from './components/guards/Autoriza-guard'

const routes: Routes = [

 //canActivate: [BloquearAcesoGuard] 
 { path: 'form', component: FormularioComponent, },
  {
    path: '',component: HomeComponent
  },
  
  { path: 'Administrador/autorizar/:id', component: AutorizarComponent },
  { path: 'vigilancia', component: VigilanciaComponent,canActivate: [VigilanciaGuard] },
  { path: 'monitoreo-Compras', component: MonitoreoComprasComponent,canActivate:[CompraGuardGuard]},
  { path: 'Administrador', component: ManagerComponent,canActivate: [BloquearAcesoGuard]},
  { path: 'monitoreo-Almacen', component: MonitoreoAlmacenComponent,canActivate: [AlmacenGuardGuard]},
  { path: 'general', component: VistaGeneralComponent },
  { path: 'general/verInfo/:id', component: MostrarDatosComponent },
  { path: 'monitoreo-Compras/Historial-Comentario/:id', component: ViewHitoriComComponent,canActivate:[CompraGuardGuard]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
