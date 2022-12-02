import { Component, Input, OnInit } from '@angular/core';
import { Productos } from '../models';
import { CarritoService } from '../services/carrito.service';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  private path = 'productos/';
  productos: Productos[] = [];
  @Input() producto: Productos;


  constructor(public firestoreservice: FirestoreService,
              public carritoservice: CarritoService,
              ) { 

    

                this.loadProductos();

             
              }

  ngOnInit() {

  }

  addCarrito(){
    console.log('addCarrito');
  }

  loadProductos() {
    this.firestoreservice.getCollection<Productos>(this.path).subscribe( res => {
        console.log(res);
        this.productos = res;
    });
  }

}
