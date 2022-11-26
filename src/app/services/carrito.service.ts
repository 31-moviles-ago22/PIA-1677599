import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Clientes, Pedido, ProductoPedido, Productos } from '../models';
import { FirebaseauthService } from './firebaseauth.service';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

   private pedido: Pedido;
   path = 'carrito';
   uid = '';
   cliente: Clientes;
   clienteSuscriber: Subscription;
   carritoSuscriber: Subscription;
   productoPedido: ProductoPedido;

  constructor(public firebaseauthservice: FirebaseauthService,
              public firestoreservice: FirestoreService,
              public router: Router) { 

            this.initCarrito();
            this.firebaseauthservice.stateAuth().subscribe(res => {
              if (res !== null) {
                this.uid = res.uid;
                this.loadCliente();
              }
        });
  }


  loadCarrito(){
    const path = 'Clientes/' + this.uid + this.path;
    if (this.carritoSuscriber) {
      this.carritoSuscriber.unsubscribe();
    }
    this.carritoSuscriber = this.firestoreservice.getDoc<Pedido>(this.path, this.uid).subscribe( res => {
      console.log(res);
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

    console.log('add producto', this.uid);

    if(this.uid.length) {
      const item = this.pedido.productos.find( productoPedido =>  { (productoPedido.producto.Id === producto.Id) }); 
      
      if (item !== undefined ) {
          item.cantidad ++;
      } 
      else{
        const add: ProductoPedido = {
          cantidad: 1,
          producto,
          }; 
        this.pedido.productos.push(add);
        console.log('perro');
       };
    } else{
      this.router.navigate(['/perfil']);
      return;
    }

    console.log('en add pedido', this.pedido);
    const path = 'Clientes/' + this.uid + '/' + this.path;
     this.firestoreservice.createDoc(this.pedido, path, this.uid).then( () => {
          console.log('añdido con exito');
     });

  }

  removeProducto(producto: Productos){

  }

  realizarPedidos(){

  }

  clearCarrito(){

  }
}
