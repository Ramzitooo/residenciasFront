import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ChatService } from './services/chat.service'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: Observable<any[]>;
  title = 'ResidenciasSisaV3';

  constructor( servicioChat:ChatService)
  {
    //servicioChat.cargarMensajes().subscribe();
  }
}
