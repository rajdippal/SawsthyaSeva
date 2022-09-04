import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Receptionist } from '../model/receptionist';

@Injectable({
  providedIn: 'root'
})
export class ReceptionistService {

  currentReceptionist !: Receptionist;

  private getRecepUrl = 'http://localhost:8085/receptionists/get/email';
  private getAllRecepUrl = "http://localhost:8085/receptionists/all";
  private addRecepUrl = "http://localhost:8085/receptionists/add";

  constructor(private httpClient: HttpClient) { }

  getRecepWithEmail(email : string): Observable<Receptionist>{
    return this.httpClient.get<Receptionist>(`${this.getRecepUrl}/${email}`);
  }

  getAllRecep(): Observable<Receptionist[]>{
    return this.httpClient.get<Receptionist[]>(`${this.getAllRecepUrl}`);
  }

  addRecep(recep : Receptionist): Observable<Object>{
    return this.httpClient.post(`${this.addRecepUrl}`,recep);
  }
}
