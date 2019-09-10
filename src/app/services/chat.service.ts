import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"; 
import { Mensaje } from '../interface/mensaje.interface';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
//import 'rxjs/observable/ma';

@Injectable({
  providedIn: 'root'
})
export class ChatService 
{
  private itemsCollection: AngularFirestoreCollection<Mensaje>;
  chats: Mensaje[] = [];
  public usuario:any = {};
  constructor(private afs: AngularFirestore,public afAuth: AngularFireAuth) 
  {

    this.afAuth.authState.subscribe((userGoogle) => 
    {
      console.log("Estado del usuario logeado: ",userGoogle);

      if (!userGoogle) 
      {
        return;  
      }

      this.usuario.nombre = userGoogle.displayName;
      this.usuario.uid = userGoogle.uid;
    });

  }

  verEstadoUsuario()
  {
    this.afAuth.authState.subscribe(data => {console.log(data);});
  }

  cargarMensajes()
  {
    this.itemsCollection = this.afs.collection<Mensaje>('chats',ref => ref.orderBy('fecha','desc').limit(10));
    //this.itemsCollection.valueChanges().pipe(data:Mensaje[] => console.log('ss');)
    //return this.itemsCollection.valueChanges();

    return this.itemsCollection.valueChanges().pipe(
      map((data:Mensaje[])  => 
      {
        console.log(data);
        this.chats = [];
        for (let item of data) {
         this.chats.unshift(item);
          //return this.chats;
        }
      }
       ));

  }

  login(proveedor: String) {
    this.afAuth.auth.signOut();
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  loginFace(proveedor: String) {
    this.afAuth.auth.signOut();
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  agregarMensaje(texto: String)
  {
    let mensaje: Mensaje = 
    {
      nombre : this.usuario.nombre,
      mensaje : texto,
      fecha : new Date().getTime(), 
      uid : this.usuario.uid
    }

    return this.itemsCollection.add(mensaje);

  }


}
