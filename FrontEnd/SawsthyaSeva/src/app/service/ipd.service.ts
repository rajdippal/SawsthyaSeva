import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomIpd } from '../model/custom-ipd';
import { Ipd } from '../model/ipd';
import { DoctorService } from './doctor.service';

@Injectable({
  providedIn: 'root'
})
export class IpdService {

  currentIpd !: Ipd;

  private addIpdUrl = "http://localhost:8087/ipd/add";
  private getAllIpdUrl = "http://localhost:8087/ipd/all-ipds";
  private getDoctorIpdUrl = "http://localhost:8087/ipd/get/doctor";
  private updateIpdUrl = "http://localhost:8087/ipd/update";
  private ipdHistoryUrl = "http://localhost:8087/ipd/history";

  constructor(private httpClient: HttpClient, private doctorService: DoctorService) { }

  addIpd(ipd : Ipd): Observable<Object>{
    return this.httpClient.post(`${this.addIpdUrl}`,ipd);
  }

  getAllIpds(): Observable<CustomIpd[]>{
    return this.httpClient.get<CustomIpd[]>(`${this.getAllIpdUrl}`);
  }

  getDoctorIpds(): Observable<Ipd[]>{
    return this.httpClient.get<Ipd[]>(`${this.getDoctorIpdUrl}/${this.doctorService.currentDoctor.id}`);
  }

  update(ipd : Ipd): Observable<Object>{
    return this.httpClient.put(`${this.updateIpdUrl}`,ipd);
  }

  getHistory(): Observable<CustomIpd[]>{
    return this.httpClient.get<CustomIpd[]>(`${this.ipdHistoryUrl}`);
  }

}
