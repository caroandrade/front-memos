import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

import { Memo } from '../interfaces/interface';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private apiUrl: string = 'http://localhost:4000';
 

  constructor( private http: HttpClient) { }

   getMemos():Observable<Memo[]>{
  
    const respuesta = this.http.get<Memo[]>(`${this.apiUrl}/memos`);
     
     return respuesta 

  }
//terminar de armar la busqueda por palabra
 buscarPalabra(termino:string):Observable<Memo[]>{

  const respuesta = this.http.get<Memo[]>(`${this.apiUrl}/texto/${termino}`);

    

  return respuesta
     
 }

//terminar de armar la busqueda por palabra
buscarNum(numero:number):Observable<Memo[]>{

  const respuesta = this.http.get<Memo[]>(`${this.apiUrl}/numero/${numero}`);

     

  return respuesta
     
 }


}
