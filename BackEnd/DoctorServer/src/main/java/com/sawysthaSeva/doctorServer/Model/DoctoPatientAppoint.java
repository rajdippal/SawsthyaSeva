package com.sawysthaSeva.doctorServer.Model;

import com.sawysthaSeva.doctorServer.Entity.Doctor;

public class DoctoPatientAppoint {
	
	private Doctor doctor;
	private Patient patient;
	
	public DoctoPatientAppoint() {
		
	}
	
	public DoctoPatientAppoint(Doctor doctor, Patient patient) {
		super();
		this.doctor = doctor;
		this.patient = patient;
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
