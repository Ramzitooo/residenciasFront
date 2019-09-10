import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-residencias',
  templateUrl: './residencias.component.html',
  styleUrls: ['./residencias.component.css']
})



export class ResidenciasComponent implements OnInit {

  infoPaginaBase: string[] = [
    '',
    'Exámenes para residencias',
    'reg_residencias',
    'reg_residencias',
    'Para información sobre los distintos concursos de residencias consulte la web del <a href="http://www.msal.gov.ar/residencias" target="_blank">Ministerio de Salud de la Nación</a>'
  ];
  loading : boolean = true;
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private snak:MatSnackBar) { }

  ngOnInit() {
    this.Fuc1();
  }

  open()
  {
    this.snak.open("📧 Codigo alfanumerico enviado a gpereyra@gmail.com !" ,'Undo', {
      duration: 3000
    });
  }

  Fuc1():any
  {setTimeout(() => 
    {
      console.log("hola");
      this.loading = false;
    },2000);
  }

}
