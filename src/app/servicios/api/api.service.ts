import { Injectable } from '@angular/core';

import { episodiosDatosI } from '../../modelos/jsonEpisodio.interface';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
 
  url:string = "http://localhost:8000/api"

  constructor(private http:HttpClient) { }
  
   getAllEpisodios(page:number):Observable<episodiosDatosI>{
    let direccion = this.url;
    return this.http.get<episodiosDatosI>(direccion);
   }

}
