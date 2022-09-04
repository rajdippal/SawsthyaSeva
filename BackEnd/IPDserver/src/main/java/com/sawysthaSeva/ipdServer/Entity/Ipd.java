package com.sawysthaSeva.ipdServer.Entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Ipd {

	@Id
	@GeneratedValue
	private Integer id;
	
	private String operation;
	private int doctorId;
	private String name;
	private String adhar;
	private int age;
	private String gender;
	private String address;
	private String bloodGroup;
	private String phone;
	private String email;
	private Date date;
	private boolean isServed;
	
	public Ipd() {
		
	}

	public Ipd(Integer id, String operation, int doctorId, String name, String adhar, int age, String gender,
			String address, String bloodGroup, String phone, String email, Date date, boolean isServed) {
		super();
		this.id = id;
		this.operation = operation;
		this.doctorId = doctorId;
		this.name = name;
		this.adhar = adhar;
		this.age = age;
		this.gender = gender;
		this.address = address;
		this.bloodGroup = bloodGroup;
		this.phone = phone;
		this.email = email;
		this.date = date;
		this.isServed = isServed;
	}

	public Ipd(String operation, int doctorId, String name, String adhar, int age, String gender, String address,
			String bloodGroup, String phone, String email, Date date, boolean isServed) {
		super();
		this.operation = operation;
		this.doctorId = doctorId;
		this.name = name;
		this.adhar = adhar;
		this.age = age;
		this.gender = gender;
		this.address = address;
		this.bloodGroup = bloodGroup;
		this.phone = phone;
		this.email = email;
		this.date = date;
		this.isServed = isServed;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getOperation() {
		return operation;
	}

	public void setOperation(String operation) {
		this.operation = operation;
	}

	public int getDoctorId() {
		return doctorId;
	}

	public void setDoctorId(int doctorId) {
		this.doctorId = doctorId;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAdhar() {
		return adhar;
	}

	public void setAdhar(String adhar) {
		this.adhar = adhar;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public boolean isServed() {
		return isServed;
	}

	public void setServed(boolean isServed) {
		this.isServed = isServed;
	}

}
