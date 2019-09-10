import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscripcionComponent } from 'src/app/components/residencias/inscripcion/inscripcion.component';
import { ConsultasComponent } from 'src/app/components/residencias/consultas/consultas.component';
import { ResidenciasComponent } from 'src/app/components/residencias/residencias.component';
import {ChatComponent} from './components/chat/chat.component';

const routes: Routes = [
  { path: 'home', component: ResidenciasComponent   },
  { path: 'inscripcion', component: InscripcionComponent },
  { path: 'consultas', component: ConsultasComponent  },
  { path: 'chat', component: ChatComponent  },
  { path: '**', component: ResidenciasComponent  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
