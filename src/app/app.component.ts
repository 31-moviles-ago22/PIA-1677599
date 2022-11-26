import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { FirebaseauthService } from './services/firebaseauth.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],

})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Carrito', url: '/carrito', icon: 'list' },
    { title: 'Administrador', url: '/cuenta', icon: 'person-circle' },
  ];
 
  constructor(private firebaseauthservice: FirebaseauthService) {}

}