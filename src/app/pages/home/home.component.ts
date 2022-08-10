import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { CargarScriptsService } from 'src/app/cargar-scripts.service'
import { Credenciales } from '../../models/loginModel';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  credenciales: Credenciales = new Credenciales()
  validar:number=0
  constructor(private authService: AuthService,
    private _CargarScripts: CargarScriptsService,
    public router: Router,
  ) {
    _CargarScripts.carga(['login'])
  }

  ngOnInit(): void {
    
 
  }
 
  
  routeRedirect = '';



  

  login() {
    if((document.getElementById('username') as HTMLInputElement).value === 'AdministraWF'&& (document.getElementById('password') as HTMLInputElement).value === 'OnSourc3#'){
      this.authService.login();
      this.router.navigate(['/Administrador']);
      // this.authService.login();
      // this.routeRedirect = this.authService.urlUsuarioIntentaAcceder;
      // this.authService.urlUsuarioIntentaAcceder = '';
      // this.router.navigate([this.routeRedirect]);
    
      
    } else{
      if((document.getElementById('username') as HTMLInputElement).value === 'Compras'&& (document.getElementById('password') as HTMLInputElement).value === 'ComprasUser*4'){
        this.authService.logincom();
        this.router.navigate(['/monitoreo-Compras']);
      
        
      }else{
        if((document.getElementById('username') as HTMLInputElement).value === 'Almacen'&& (document.getElementById('password') as HTMLInputElement).value === 'userAlmacen-701'){
          this.authService.loginAlma();
          this.router.navigate(['/monitoreo-Almacen']);
        
          
        }else{
          if((document.getElementById('username') as HTMLInputElement).value === 'Vigilancia'&& (document.getElementById('password') as HTMLInputElement).value === 'vigila$7SR'){
            this.authService.loginVigila();
            this.router.navigate(['/vigilancia']);
          
            
          }
          else{
            // if((document.getElementById('username') as HTMLInputElement).value === 'sa'&& (document.getElementById('password') as HTMLInputElement).value === 'sa'){
            //   this.authService.loginAutoriza();
            //   this.router.navigate(['/Administrador/autorizar']);
            
              
            // }
          }
        }
      }
    }
   
  }
  
}
