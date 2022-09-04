package com.sawysthaSeva.patientServer.Entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Patient {
	
	@Id
	@GeneratedValue
	private Integer id;
	
	private String name;
	private String adhar;
	private int age;
	private String gender;
	private String address;
	private String bloodGroup;
	private String phone;
	private String email;
	private Date registrationDate;
	private boolean isServed;
	private int doctor_id;

	public Patient() {
		
	}

	public Patient(Integer id, String name, String adhar, int age, String gender, String address, String bloodGroup,
			String phone, String email, Date registrationDate, boolean isServed, int doctor_id) {
		super();
		this.id = id;
		this.name = name;
		this.adhar = adhar;
		this.age = age;
		this.gender = gender;
		this.address = address;
		this.bloodGroup = bloodGroup;
		this.phone = phone;
		this.email = email;
		this.registrationDate = registrationDate;
		this.isServed = isServed;
		this.doctor_id = doctor_id;
	}

	public Patient(String name, String adhar, int age, String gender, String address, String bloodGroup,
			String phone, String email, boolean isServed, int doctor_id) {
		super();
		this.name = name;
		this.adhar = adhar;
		this.age = age;
		this.gender = gender;
		this.address = address;
		this.bloodGroup = bloodGroup;
		this.phone = phone;
		this.email = email;
		this.isServed = isServed;
		this.doctor_id = doctor_id;
	}

	public Patient(String name, String adhar, int age, String gender, String address, String bloodGroup, String phone,
			String email, Date registrationDate, boolean isServed, int doctor_id) {
		super();
		this.name = name;
		this.adhar = adhar;
		this.age = age;
		this.gender = gender;
		this.address = address;
		this.bloodGroup = bloodGroup;
		this.phone = phone;
		this.email = email;
		this.registrationDate = registrationDate;
		this.isServed = isServed;
		this.doctor_id = doctor_id;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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

	public Date getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(Date registrationDate) {
		this.registrationDate = registrationDate;
	}

	public boolean isServed() {
		return isServed;
	}

	public void setServed(boolean isServed) {
		this.isServed = isServed;
	}

	public int getDoctor_id() {
		return doctor_id;
	}

	public void setDoctor_id(int doctor_id) {
		this.doctor_id = doctor_id;
	}

	@Override
	public String toString() {
		return "Patient [name=" + name + ", adhar=" + adhar + ", age=" + age + ", gender=" + gender + ", address="
				+ address + ", bloodGroup=" + bloodGroup + ", phone=" + phone + ", email=" + email + ", isServed="
				+ isServed + ", doctor_id=" + doctor_id + "]";
	}

}
