package com.sawysthaSeva.prescriptionServer.Entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Prescription {
	
	@Id
	@GeneratedValue
	private Integer id;
	
	private Date date;
	private String medicines;
	private String tests;
	private int doctorId;
	private int patientId;
	
	public Prescription() {
		
	}

	public Prescription(Integer id, Date date, String medicines, String tests, int doctorId, int patientId) {
		super();
		this.id = id;
		this.date = date;
		this.medicines = medicines;
		this.tests = tests;
		this.doctorId = doctorId;
		this.patientId = patientId;
	}

	public Prescription(Date date, String medicines, String tests, int doctorId, int patientId) {
		super();
		this.date = date;
		this.medicines = medicines;
		this.tests = tests;
		this.doctorId = doctorId;
		this.patientId = patientId;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public String getMedicines() {
		return medicines;
	}

	public void setMedicines(String medicines) {
		this.medicines = medicines;
	}

	public String getTests() {
		return tests;
	}

	public void setTests(String tests) {
		this.tests = tests;
	}

	public int getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(int doctorId) {
		this.doctorId = doctorId;
	}

	public int getPatientId() {
		return patientId;
	}

	public void setPatientId(int patientId) {
		this.patientId = patientId;
	}

	@Override
	public String toString() {
		return "Prescription [date=" + date + ", medicines=" + medicines + ", tests=" + tests + ", doctorId=" + doctorId
				+ ", patientId=" + patientId + "]";
	}

}
