import { Component, OnInit } from '@angular/core';
import { CustomPrescription } from 'src/app/model/custom-prescription';
import { PrescriptionService } from 'src/app/service/prescription.service';

@Component({
  selector: 'app-doctor-view-prescription',
  templateUrl: './doctor-view-prescription.component.html',
  styleUrls: ['./doctor-view-prescription.component.css']
})
export class DoctorViewPrescriptionComponent implements OnInit {

  pres !: CustomPrescription;

  constructor(private presService : PrescriptionService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    this.pres = this.presService.currentPrescription;
  }

}
