package com.sawysthaSeva.prescriptionServer.Model;

import com.sawysthaSeva.prescriptionServer.Entity.Prescription;

public class CustomPrescription {
	
	private Prescription prescription;
	private Doctor doctor;
	private Patient patient;
	
	public CustomPrescription() {
		
	}

	public CustomPrescription(Prescription prescription, Doctor doctor, Patient patient) {
		super();
		this.prescription = prescription;
		this.doctor = doctor;
		this.patient = patient;
	}

	public Prescription getPrescription() {
		return prescription;
	}

	public void setPrescription(Prescription prescription) {
		this.prescription = prescription;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

}
