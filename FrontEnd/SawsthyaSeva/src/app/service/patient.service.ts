import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewPatient } from '../model/new-patient';
import { Patient } from '../model/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  d !: string;
  updatedPatient = new Patient();

  private getPatientUrl = "http://localhost:8083/patients/get";
  private updatePatientUrl = "http://localhost:8083/patients/update";
  private addPatientUrl = "http://localhost:8083/patients/add";

  constructor(private httpClient: HttpClient) { }

  searchPatient(name: string): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.getPatientUrl}/${name}`);
  }

  updatePatientToNewDocotor(patient: Patient, id: number, date: Date): Observable<Object>{
    this.updatedPatient.id = patient.id;
    this.updatedPatient.name = patient.name;
    this.updatedPatient.adhar = patient.adhar;
    this.updatedPatient.age = patient.age;
    this.updatedPatient.gender = patient.gender;
    this.updatedPatient.address = patient.address;
    this.updatedPatient.phone = patient.phone;
    this.updatedPatient.email = patient.email;
    this.updatedPatient.bloodGroup = patient.bloodGroup;
    this.updatedPatient.registrationDate = date;
    this.updatedPatient.isServed = patient.isServed;
    this.updatedPatient.doctorId = patient.doctorId;

    return this.httpClient.put(`${this.updatePatientUrl}/${id}`,this.updatedPatient);
  }

  addPatient(patient: NewPatient): Observable<Object>{
    return this.httpClient.post(`${this.addPatientUrl}`,patient);
  }
}
