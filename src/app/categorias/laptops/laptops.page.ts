import { Component, Input, OnInit } from '@angular/core';
import { Productos } from 'src/app/models';
import { CarritoService } from 'src/app/services/carrito.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-laptops',
  templateUrl: './laptops.page.html',
  styleUrls: ['./laptops.page.scss'],
})
export class LaptopsPage implements OnInit {

  private path = 'productos/'
  productos: Productos[] = [];
  @Input() producto: Productos;


  constructor(public firestoreservice: FirestoreService,
               public carritoservice: CarritoService,) { 

                this.loadProductos();

               }

  ngOnInit() {

  }
  
    
  addCarrito(){
    
      console.log('add carrito');
      this.carritoservice.addProducto(this.producto);
  }
    
  loadProductos() {
    this.firestoreservice.getCollection<Productos>(this.path).subscribe( res => {
        console.log(res);
        this.productos = res;  
     });
  }


    
}

