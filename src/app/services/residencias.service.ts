import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//  Modelos
import { ResidenciasResidenteModel } from '../models/residencias_residente';

@Injectable({
  providedIn: 'root'
})
export class ResidenciasService {

  constructor(private http: HttpClient) { }

  residentesObtieneTodos(): Observable<ResidenciasResidenteModel[]> {
    return this.http.get<ResidenciasResidenteModel[]>('http://localhost:8080/residentes/all');
  }

  TraerResidentes():Observable<any>
  {
    //return this.http.get("http://localhost/api/index.php/usuarios")
    return this.http.get("http://localhost:8080/residentes/all");
  }

  private extractData(res: Response) {
    let body = res.json();    
    
    return body || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error( errMsg );
    console.error( 'CATCH' );
    return Observable.throw(errMsg);
  }

}
