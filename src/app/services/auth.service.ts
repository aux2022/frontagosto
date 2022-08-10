import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  readonly ISLOGGEDKEY = 'islogged';
  public urlUsuarioIntentaAcceder = '';

  public changeLoginStatusSubject = new Subject<boolean>();
  public changeLoginStatus$ = this.changeLoginStatusSubject.asObservable();




  login() {
    localStorage.setItem(this.ISLOGGEDKEY, 'true');
    this.changeLoginStatusSubject.next(true);
  }

  logout() {
    localStorage.removeItem(this.ISLOGGEDKEY);
    this.changeLoginStatusSubject.next(false);
  }

  isLoggedIn(url: string) {
    const isLogged = localStorage.getItem(this.ISLOGGEDKEY);
    if (!isLogged) {
      this.urlUsuarioIntentaAcceder = url;
      return false;
    }
    return true;
  }

///compras

readonly ISLOGGEDKEYcom = 'isloggedcom';
public urlUsuarioIntentaAccedercom = '';

public changeLoginStatusSubjectcom = new Subject<boolean>();
public changeLoginStatuscom$ = this.changeLoginStatusSubjectcom.asObservable();


  logincom() {
    localStorage.setItem(this.ISLOGGEDKEYcom, 'true');
    this.changeLoginStatusSubjectcom.next(true);
  }

  logoutcom() {
    localStorage.removeItem(this.ISLOGGEDKEYcom);
    this.changeLoginStatusSubjectcom.next(false);
  }

  isLoggedIncom(url: string) {
    const isloggedcom = localStorage.getItem(this.ISLOGGEDKEYcom);
    if (!isloggedcom) {
      this.urlUsuarioIntentaAccedercom = url;
      return false;
    }
    return true;
  }

////almacen

readonly ISLOGGEDKEYAlma = 'isloggedAlma';
public urlUsuarioIntentaAccederAlma = '';

public changeLoginStatusSubjectAlma = new Subject<boolean>();
public changeLoginStatusAlma$ = this.changeLoginStatusSubjectAlma.asObservable();


  loginAlma() {
    localStorage.setItem(this.ISLOGGEDKEYAlma, 'true');
    this.changeLoginStatusSubjectAlma.next(true);
  }

  logoutAlma() {
    localStorage.removeItem(this.ISLOGGEDKEYAlma);
    this.changeLoginStatusSubjectAlma.next(false);
  }

  isLoggedInAlma(url: string) {
    const isloggedAlma = localStorage.getItem(this.ISLOGGEDKEYAlma);
    if (!isloggedAlma) {
      this.urlUsuarioIntentaAccederAlma = url;
      return false;
    }
    return true;
  }

  
////Vigilancia

readonly ISLOGGEDKEYVigila = 'isloggedVigila';
public urlUsuarioIntentaAccederVigila = '';

public changeLoginStatusSubjectVigila = new Subject<boolean>();
public changeLoginStatusVigila$ = this.changeLoginStatusSubjectVigila.asObservable();


  loginVigila() {
    localStorage.setItem(this.ISLOGGEDKEYVigila, 'true');
    this.changeLoginStatusSubjectVigila.next(true);
  }

  logoutVigila() {
    localStorage.removeItem(this.ISLOGGEDKEYVigila);
    this.changeLoginStatusSubjectVigila.next(false);
  }

  isLoggedInVigila(url: string) {
    const isloggedVigila = localStorage.getItem(this.ISLOGGEDKEYVigila);
    if (!isloggedVigila) {
      this.urlUsuarioIntentaAccederVigila = url;
      return false;
    }
    return true;
  }

////Autorizar

readonly ISLOGGEDKEYAutoriza = 'isloggedAutoriza';
public urlUsuarioIntentaAccederAutoriza = '';

public changeLoginStatusSubjectAutoriza= new Subject<boolean>();
public changeLoginStatusAutoriza$ = this.changeLoginStatusSubjectAutoriza.asObservable();


  loginAutoriza() {
    localStorage.setItem(this.ISLOGGEDKEYAutoriza, 'true');
    this.changeLoginStatusSubjectAutoriza.next(true);
  }

  logoutAutoriza() {
    localStorage.removeItem(this.ISLOGGEDKEYAutoriza);
    this.changeLoginStatusSubjectAutoriza.next(false);
  }

  isLoggedInAutoriza(url: string) {
    const isloggedAutoriza = localStorage.getItem(this.ISLOGGEDKEYAutoriza);
    if (!isloggedAutoriza) {
      this.urlUsuarioIntentaAccederAutoriza = url;
      return false;
    }
    return true;
  }

}
