import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service'; 

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje : String;
  infoPaginaBase: string[] = [
    '',
    'CHAT RESIDENCIAS',
    'reg_residencias',
    'reg_residencias',
    'Para información sobre los distintos concursos de residencias consulte la web del <a href="http://www.msal.gov.ar/residencias" target="_blank">Ministerio de Salud de la Nación</a>'
  ];

  elemento:any;

  constructor(public servicioChat:ChatService) 
  {
    this.servicioChat.cargarMensajes().subscribe(()=>
    {
      setTimeout(() => {this.elemento.scrollTop = this.elemento.scrollHeight;},20);
      
    }); 
    //onsole.log("Los chats:",this.servicioChat.chats);
  }

  ngOnInit() 
  {
    this.elemento = document.getElementById('app-mensajes');
  }

  login(provedor: String)
  {
    //this.servicioChat.login(provedor)
    this.servicioChat.login(provedor);
  }

  logOut()
  {
    this.servicioChat.logout();
  }

  verMensajes()
  {
    console.log("Los chats:",this.servicioChat.chats);
    this.servicioChat.verEstadoUsuario();
  }

  enviarMensaje()
  {
    console.log(this.mensaje);

    this.servicioChat.agregarMensaje(this.mensaje).then(() => {console.log("EXITO");}).catch((err) => { console.log('ERROR MENSAJE',err)})
    this.mensaje = "";
  }


}
