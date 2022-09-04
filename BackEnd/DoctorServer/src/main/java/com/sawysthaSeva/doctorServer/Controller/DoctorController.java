package com.sawysthaSeva.doctorServer.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sawysthaSeva.doctorServer.Entity.Doctor;
import com.sawysthaSeva.doctorServer.Model.DoctoPatientAppoint;
import com.sawysthaSeva.doctorServer.Model.Patient;
import com.sawysthaSeva.doctorServer.Service.DoctorService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/doctors")
public class DoctorController {
	
	@Autowired
	private DoctorService doctorService;
	
	@GetMapping("/all")
	public List<Doctor> getDoctors(){
		return doctorService.findAllDoctors();
	}
	
	@PostMapping("/add")
	public Doctor add(@RequestBody Doctor doctor) {
		return doctorService.addDoctor(doctor);
	}
	
	@GetMapping("/get/email/{email}")
	public Doctor findDoctor(@PathVariable String email) {
		return doctorService.findDoctorWithEmail(email);
	}
	
	@GetMapping("/appointments/{id}")
	public List<Patient> showAppointments(@PathVariable int id){
		return doctorService.findAppointments(id);
	}
	
	@GetMapping("/served/{id}")
	public List<Patient> showServedPatients(@PathVariable int id){
		return doctorService.findServedPatients(id);
	}
	
	@GetMapping("/appointments/all")
	public List<DoctoPatientAppoint> getAllAppoints(){
		return doctorService.findAllAppointments();
	}
	
	@GetMapping("/get/specialization/{specialization}")
	public List<Doctor> findSpecializedDoctor(@PathVariable String specialization){
		return doctorService.findDoctorWithSpecialization(specialization);
	}
	
	@GetMapping("/get/id/{id}")
	public Doctor findDoctorById(@PathVariable int id){
		return doctorService.findDoctorWithId(id);
	}
	
	@GetMapping("/get/name/{name}")
	public List<Doctor> findDoctorByName(@PathVariable String name){
		return doctorService.findDoctorWithName(name);
	}

}
