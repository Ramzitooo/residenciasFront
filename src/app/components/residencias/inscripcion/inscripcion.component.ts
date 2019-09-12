import { Component, OnInit ,ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class InscripcionComponent implements OnInit {

  usuario:any= 
  {
    nombre:'sss',
  };

  text:any;

  infoPaginaBase: string[] = [
    '',
    'Pre-inscripción a Concurso de Residencias',
    'reg_residencias',
    'reg_residencias',
    // tslint:disable-next-line:max-line-length
    'Para facilitar su proceso de inscripción antes de comenzar por favor lea la siguiente información: <a href="https://sisa.msal.gov.ar/sisadoc/index.jsp?id=resid_inscribir" target="_blank">instructivo de inscripción</a>.',
    'x', // tirandole verdura va al home
    'https://sisa.msal.gov.ar/sisadoc/index.jsp?id=resid_inscribir'
  ];

  constructor() { }

  ngOnInit() {
    this.text='sss';
  }

  changeUpperCase(textToUpper: string){
    ///console.log("textToUpper: "+ textToUpper); 
    this.usuario.nombre = textToUpper.toUpperCase();   
    this.text = textToUpper.toUpperCase();   

}


}
