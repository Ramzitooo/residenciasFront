import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



//  Componentes
import { SisaComponent } from './components/sisa/sisa.component';
import { ResidenciasComponent } from './components/residencias/residencias.component';
import { HeaderComponent } from './components/interface/header/header.component';
import { FooterComponent } from './components/interface/footer/footer.component';
import { InscripcionComponent } from './components/residencias/inscripcion/inscripcion.component';
import { ConsultasComponent } from './components/residencias/consultas/consultas.component';
import { PaginaBaseComponent } from './components/commons/pagina-base/pagina-base.component';
import { BotonCtextoeiconoComponent } from './components/commons/boton-ctextoeicono/boton-ctextoeicono.component';
import { ListaComponent } from './components/commons/lista/lista.component';
import { ContenidoComponent } from './components/commons/lista/contenido/contenido.component';

//SERVICIOS
import {ChatService} from './services/chat.service'

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { ChatComponent } from './components/chat/chat.component';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    SisaComponent,
    ResidenciasComponent,
    HeaderComponent,
    FooterComponent,
    InscripcionComponent,
    ConsultasComponent,
    PaginaBaseComponent,
    BotonCtextoeiconoComponent,
    ListaComponent,
    ContenidoComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule,
    BrowserAnimationsModule,MatTableModule,
    AngularFireAuthModule,
    MatCardModule,
    HttpClientModule,
    MatListModule,
    MatChipsModule,
    MatButtonModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebase),
    MatIconModule,
    AppRoutingModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
