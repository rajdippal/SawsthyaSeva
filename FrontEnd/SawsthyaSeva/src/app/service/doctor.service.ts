import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../model/doctor';
import { DoctorPatient } from '../model/doctor-patient';
import { Patient } from '../model/patient';
import { Prescription } from '../model/prescription';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  currentDoctor !: Doctor;
  prescribedPatient !: Patient;
  viewPatient !: Patient;

  private getDoctorUrl = "http://localhost:8082/doctors/get/email";
  private getDoctorWithIdUrl = "http://localhost:8082/doctors/get/id";
  private appointmentUrl = "http://localhost:8082/doctors/appointments";
  private makePresUrl = "http://localhost:8084/prescriptions/add";
  private updatePatientUrl = "http://localhost:8083/patients/update";
  private getDoctorWithSpecUrl = "http://localhost:8082/doctors/get/specialization";
  private getDoctorWithNameUrl = "http://localhost:8082/doctors/get/name";
  private allAppointmentUrl = "http://localhost:8082/doctors/appointments/all";
  private getAllDoctorsUrl = "http://localhost:8082/doctors/all";
  private addDoctorUrl = "http://localhost:8082/doctors/add";

  constructor(private httpClient: HttpClient) { }

  getDoctorWithEmail(email: string): Observable<Doctor>{
    return this.httpClient.get<Doctor>(`${this.getDoctorUrl}/${email}`);
  }

  getDoctorWithId(id: number):Observable<Doctor>{
    return this.httpClient.get<Doctor>(`${this.getDoctorWithIdUrl}/${id}`);
  }

  getDoctorAppointments(): Observable<Patient[]>{
    return this.httpClient.get<Patient[]>(`${this.appointmentUrl}/${this.currentDoctor.id}`);
  }

  makePrescription(pres: Prescription): Observable<Object>{
    return this.httpClient.post(`${this.makePresUrl}`,pres);
  }

  updatePatient(patient: Patient): Observable<Object>{
    return this.httpClient.put(`${this.updatePatientUrl}`,patient);
  }

  getDoctorsWithSpec(spec : string): Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.getDoctorWithSpecUrl}/${spec}`);
  }

  getAllAppointments(): Observable<DoctorPatient[]>{
    return this.httpClient.get<DoctorPatient[]>(`${this.allAppointmentUrl}`);
  }

  getAllDoctors(): Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.getAllDoctorsUrl}`);
  }

  addDoctor(doctor: Doctor): Observable<Object>{
    return this.httpClient.post(`${this.addDoctorUrl}`,doctor);
  }

  getDoctorsWithName(name : string): Observable<Doctor[]>{
    return this.httpClient.get<Doctor[]>(`${this.getDoctorWithNameUrl}/${name}`);
  }

}
