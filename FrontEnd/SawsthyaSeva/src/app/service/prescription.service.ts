import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomPrescription } from '../model/custom-prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  private getPresUrl = 'http://localhost:8084/prescriptions/get/patient';

  currentPrescription !: CustomPrescription;

  constructor(private httpClient: HttpClient) { }

  searchPrescription(name: string): Observable<CustomPrescription[]>{
    return this.httpClient.get<CustomPrescription[]>(`${this.getPresUrl}/${name}`);
  }
}
