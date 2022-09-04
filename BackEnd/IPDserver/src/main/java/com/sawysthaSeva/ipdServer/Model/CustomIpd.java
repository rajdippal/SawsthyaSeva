package com.sawysthaSeva.ipdServer.Model;

import com.sawysthaSeva.ipdServer.Entity.Ipd;

public class CustomIpd {
	
	private Ipd ipd;
	private Doctor doctor;
	
	public CustomIpd() {
		
	}

	public CustomIpd(Ipd ipd, Doctor doctor) {
		super();
		this.ipd = ipd;
		this.doctor = doctor;
	}

	public Ipd getIpd() {
		return ipd;
	}

	public void setIpd(Ipd ipd) {
		this.ipd = ipd;
	}

	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

}
