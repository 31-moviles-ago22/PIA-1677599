import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { promises, resolve } from 'dns';
import { finalize } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor(public angularfirestorage: AngularFireStorage) { }

  uploadimage(file: any, path: string, nombre: string ): Promise<string> {
    return new Promise (resolve =>{

      const filePath = path + '/' + nombre;
      const ref = this.angularfirestorage.ref(filePath);
      const task = ref.put(file);
      task.snapshotChanges().pipe(
        finalize( () => {
            ref.getDownloadURL().subscribe(res => {
              const downloadURL = res;
              resolve (downloadURL);
              return;
            });
        })
      )
      .subscribe();


    });
  }
}
