import { Doctor } from "./doctor";
import { Patient } from "./patient";
import { Prescription } from "./prescription";

export class CustomPrescription {
    prescription !: Prescription;
    doctor !: Doctor;
    patient !: Patient;

    constructor(){}
}
