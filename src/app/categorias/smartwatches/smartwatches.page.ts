import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models';
import { CarritoService } from 'src/app/services/carrito.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-smartwatches',
  templateUrl: './smartwatches.page.html',
  styleUrls: ['./smartwatches.page.scss'],
})
export class SmartwatchesPage implements OnInit {
  


  private path = 'productos/'
  productos: Productos[] = [];

  constructor(public firestoreservice: FirestoreService,
              public carritoservice: CarritoService,) { 

   
              this.loadProductos();
     
    }
  ngOnInit() {
  }

  addCarrito(){
    
    console.log('add carrito');
}

  loadProductos() {

      this.firestoreservice.getCollection<Productos>(this.path).subscribe( res => {

          console.log(res);
          this.productos = res; 

      });
      

  }

}
