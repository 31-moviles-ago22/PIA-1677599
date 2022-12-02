import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { identity, Subscription } from 'rxjs';
import { Clientes, Pedido, ProductoPedido, Productos } from '../models';
import { FirebaseauthService } from './firebaseauth.service';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

   pedido: Pedido;
   path = 'carrito/';
   uid = ''; 
   cliente: Clientes;
   clienteSuscriber: Subscription;
   carritoSuscriber: Subscription;
   productoPedido: ProductoPedido;

  constructor(public firebaseauthservice: FirebaseauthService,
              public firestoreservice: FirestoreService,
              public router: Router) { 


            this.firebaseauthservice.stateAuth().subscribe(res => {
              if (res !== null) {
                this.uid = res.uid;
                this.loadCliente();
              }
        });
  }


  loadCarrito(){
    const path = 'Clientes/' + this.uid + '/' + this.path;
    if (this.carritoSuscriber) {
      this.carritoSuscriber.unsubscribe();
    }
    this.carritoSuscriber = this.firestoreservice.getDoc<Pedido>(this.path, this.uid).subscribe( res => {
      if (res){
        this.pedido = res;
      } else {
        this.initCarrito();
                
      }

    });
  }


  initCarrito(){
    
    this.pedido = {
      id: this.uid,
      cliente: this.cliente,
      productos: [],
      precioTotal: null!,
      fecha: new Date(),
    }

  }

  loadCliente(){

    const path = 'Clientes';
    this.clienteSuscriber = this.firestoreservice.getDoc<Clientes>(path, this.uid).subscribe( res => {
      
            this.cliente = res!;
            this.loadCarrito();
            this.clienteSuscriber.unsubscribe
            
    });
  }

  addProducto(producto: Productos){


    if(this.uid.length) {


      const item = this.pedido.productos.find( algo => {
        return(algo.producto?.Id === producto?.Id)
      });
      
      if (item !== undefined) {
          item.cantidad ++;
          
      } else{
        const add: ProductoPedido = {
          cantidad: 1,
          producto: undefined!
        }; 
        this.pedido.productos.push(add);
        };
    } else{
      this.router.navigate(['/perfil']);
      return;
    }

    console.log('en add pedido', this.pedido);

  }

  removeProducto(producto: Productos){

  }

  realizarPedidos(){

  }

  clearCarrito(){

  }


 


}
