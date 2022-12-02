import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Clientes } from '../models';
import { FirebaseauthService } from '../services/firebaseauth.service';
import { FirestoreService } from '../services/firestore.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  cliente: Clientes = {
    uid: '',
    email: '',
    celular: '',
    referencia: '',
    nombre: '',
  };

  uid = '';

  suscriberUserInfo!: Subscription;

  IngresarEnable = false;

  constructor(public firebaseauthservice: FirebaseauthService,
              public firestoreservice: FirestoreService,
               ) {

                this.firebaseauthservice.stateAuth().subscribe(res => {

                  if (res != null) {
                     this.uid = res.uid;
                     this.getUserInfo(this.uid);
                  } else {
                      this.initCliente();
                  }
          });

  }


  async ngOnInit() {

    const uid = await this.firebaseauthservice.getUID();

  }

  initCliente() {
    this.uid = '';
    this.cliente = {
      uid: '',
      email: '',
      celular: '',
      referencia: '',
      nombre: '',
    };

  }

  async Registrarse() {
    const credenciales = {
      email: this.cliente.email,
      password: this.cliente.celular,
      
    };
    

    const res = await this.firebaseauthservice.Registrar(credenciales.email, credenciales.password).catch( err => {
      console.log( 'error ->', err);
    })
    const uid = await this.firebaseauthservice.getUID();
    this.cliente.uid = uid!;
    this.GuardarUser();
  }

  GuardarUser(){
    const path = 'Clientes';
    this.firestoreservice.createDoc(this.cliente, path, this.cliente.uid).then( res => {
      console.log('Guardado con exito');
    }).catch ( error => {
    });
  }
  
  getUserInfo(uid: string) {
    console.log('getUserInfo');
    const path = 'Clientes';
    this.suscriberUserInfo = this.firestoreservice.getDoc<Clientes>(path, uid).subscribe( res => {
           
             this.cliente = res!;
           
    });
 }

  async Salir(){

    this.firebaseauthservice.logout();
    this.suscriberUserInfo.unsubscribe();

  }

  Ingresar() {
    const credenciales = {
      email: this.cliente.email,
      password: this.cliente.celular,
    };
    this.firebaseauthservice.login(credenciales.email, credenciales.password).then( res => {
         console.log('Ingreso con exito');
    });
  }

}
