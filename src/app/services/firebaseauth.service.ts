import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { EmailValidator } from '@angular/forms';
import { Clientes } from '../models';
import { FirestoreService } from './firestore.service';


@Injectable({
  providedIn: 'root'
})
export class FirebaseauthService {

  datos: Clientes;

  constructor(public auth: AngularFireAuth,
              private firestoreservice: FirestoreService) { 

    this.stateUser();
  }

  stateUser() {
    this.stateAuth().subscribe( res => {
      // console.log(res);
      if (res !== null) {
         this.getInfoUser();

      }  
   });

  }

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.auth.signOut();
  }

  Registrar(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);


  }

  async getUID(){
    const user = await this.auth.currentUser;
    if (user === null) {
      return null;
    } else {
        return user.uid;
    }
  }

  stateAuth() {
    return this.auth.authState;
  }

  async getInfoUser() {
    const uid = await this.getUID();
    const path = 'Clientes';  
    this.firestoreservice.getDoc<Clientes>(path, uid!).subscribe( res => {
          if (res !== undefined) {
                this.datos = res;
          }
    });
}


}
