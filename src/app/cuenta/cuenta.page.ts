import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { Productos } from '../models';
import { FirestorageService } from '../services/firestorage.service';
import { FirestoreService } from '../services/firestore.service';


@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})

export class CuentaPage implements OnInit {

  productos: Productos[] = [];

 newProducto!: Productos;

 enableNewProducto = false; 

 private path =  'productos/';

 newimage = '';
 newFile = '';

  constructor(public firestoreservice: FirestoreService,
              public loadingController: LoadingController,
              public toastController: ToastController,
              public alertController: AlertController,
              public firestorageservice: FirestorageService) { }

  ngOnInit() {
    this.getProductos();
  }
  async guardarProducto(){

    this.showLoading();
    
    const path = 'productos';
    const name = this.newProducto.Nombre;
    const res = await this.firestorageservice.uploadimage(this.newFile, path, name);
    this.newProducto.Foto = res;

    this.firestoreservice.createDoc(this.newProducto, this.path, this.newProducto.Id).then( res => {
      this.showToast('¡Guardado con exito!');
    }).catch(error=> {
      this.showToast('Error en guardar')
    }) ;

  };

 

  getProductos(){
    this.firestoreservice.getCollection<Productos>(this.path).subscribe( res => {

      this.productos= res;
    });
  }

  async deleteProductos(producto: Productos){
    //this.firestoreservice.deleteDoc(this.path, producto.Id)
    const alert = await this.alertController.create({
      cssClass: 'normal',
      header: 'Advertencia',
      message: ' Seguro desea <strong>eliminar</strong> este producto',
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel',
          cssClass: 'normal',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            // this.alertController.dismiss();
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
            this.firestoreservice.deleteDoc(this.path, producto.Id).then( res => {
              this.showToast('eliminado con exito');
              this.alertController.dismiss();
            }).catch( error => {
                this.showToast('no se pude eliminar');
            });
          }
        }
      ]
    });
    await alert.present();
  }

  nuevo(){
    this.enableNewProducto = true;
    this.newProducto = {
      Nombre: '',
      Precio: null!,
      Foto: '',
      Id: this.firestoreservice.getId(),
      Fecha: new Date(),
      Categoria: '',
     }
     
  }

  async showLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'normal',
      message: 'Guardando...',
      duration: 700,

    });

    loading.present();
  }
  
  async showToast(msg: string){
    const toast =  await this.toastController.create({
      cssClass: 'normal',
      message: msg,
      duration: 500,
      color: 'light',
    })
    toast.present();
  }

  async newImage(event: any ){
      if (event.target.files && event.target.files[0]){
        this.newFile = event.target.files[0];
        const reader = new FileReader();
        reader.onload = ((image) => {
          this.newProducto.Foto = image.target?.result as string;

          
        });
        reader.readAsDataURL(event.target.files[0]);
      }

    }
}
