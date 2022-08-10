import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargarStylesService {

  constructor() { }
  carga(archivos: string[]) {
    for (let archivo of archivos) {
      let styles = document.createElement('script')
      styles.src = './assets/css/' + archivo + '.css'
      let body = document.getElementsByTagName('body')[0]
      body.appendChild(styles)
    }
  }
}
