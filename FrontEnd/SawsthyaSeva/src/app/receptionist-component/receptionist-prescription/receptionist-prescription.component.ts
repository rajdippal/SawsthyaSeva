import { Component, OnInit } from '@angular/core';
import { CustomPrescription } from 'src/app/model/custom-prescription';
import { PrescriptionService } from 'src/app/service/prescription.service';

@Component({
  selector: 'app-receptionist-prescription',
  templateUrl: './receptionist-prescription.component.html',
  styleUrls: ['./receptionist-prescription.component.css']
})
export class ReceptionistPrescriptionComponent implements OnInit {

  pres !: CustomPrescription;

  constructor(private presService : PrescriptionService) { }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    this.pres = this.presService.currentPrescription;
  }

}
