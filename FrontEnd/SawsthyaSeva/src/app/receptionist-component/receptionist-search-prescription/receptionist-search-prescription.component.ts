import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomPrescription } from 'src/app/model/custom-prescription';
import { PrescriptionService } from 'src/app/service/prescription.service';

@Component({
  selector: 'app-receptionist-search-prescription',
  templateUrl: './receptionist-search-prescription.component.html',
  styleUrls: ['./receptionist-search-prescription.component.css']
})
export class ReceptionistSearchPrescriptionComponent implements OnInit {

  prescriptions : CustomPrescription[] = [];
  name !: string;

  constructor(private presService : PrescriptionService, private route: Router) { }

  ngOnInit(): void {
  }

  onSearch(){
    this.presService.searchPrescription(this.name).subscribe(data =>{
      this.prescriptions = data;
    });
  }

  onClick(pres : CustomPrescription){
    this.presService.currentPrescription = pres;
    this.route.navigate(['/receptionist/prescription']);
  }
}
