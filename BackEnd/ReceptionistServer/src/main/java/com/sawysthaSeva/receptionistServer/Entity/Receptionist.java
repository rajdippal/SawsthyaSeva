package com.sawysthaSeva.receptionistServer.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Receptionist {
	
	@Id
	@GeneratedValue
	private Integer id;
	
	private String name;
	private String adhar;
	private int age;
	private String gender;
	private String address;
	private String phone;
	private String email;

	public Receptionist() {
		
	}

	public Receptionist(Integer id, String name, String adhar, int age, String gender, String address, String phone,
			String email) {
		super();
		this.id = id;
		this.name = name;
		this.adhar = adhar;
		this.age = age;
		this.gender = gender;
		this.address = address;
		this.phone = phone;
		this.email = email;
	}

	public Receptionist(String name, String adhar, int age, String gender, String address, String phone, String email) {
		super();
		this.name = name;
		this.adhar = adhar;
		this.age = age;
		this.gender = gender;
		this.address = address;
		this.phone = phone;
		this.email = email;
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

	@Override
	public String toString() {
		return "Receptionist [name=" + name + ", adhar=" + adhar + ", age=" + age + ", gender=" + gender + ", address="
				+ address + ", phone=" + phone + ", email=" + email + "]";
	}

}
