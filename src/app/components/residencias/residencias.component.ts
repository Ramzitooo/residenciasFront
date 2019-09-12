import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormControl, Validators} from '@angular/forms';
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


  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private snak:MatSnackBar) { }

  ngOnInit() {
    this.Fuc1();
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  open()
  {
    //this.snak.open("📧 Codigo alfanumerico enviado a gpereyra@gmail.com !" ,'Undo', {
     // duration: 3000
    //});

    this.snak.open("📧 Codigo alfanumerico enviado a gpereyra@gmail.com !" ,'', {
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
