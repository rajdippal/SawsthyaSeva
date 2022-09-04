package com.sawysthaSeva.patientServer.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sawysthaSeva.patientServer.Entity.Patient;
import com.sawysthaSeva.patientServer.Repository.PatientRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/patients")
public class PatientController {
	
	@Autowired
	private PatientRepository patientRepo;
	
	@GetMapping("/all")
	public List<Patient> getAllPatients(){
		return patientRepo.findAll();
	}
	
	@PostMapping("/add")
	public Patient addPatient(@RequestBody Patient patient) {
		return patientRepo.save(patient);
	}
	
	@GetMapping("/get/{name}")
	public List<Patient> findPatientByName(@PathVariable String name){
		return patientRepo.findByName(name);
	}
	
	@PutMapping("/update")
	public Patient updatePatient(@RequestBody Patient patient) {
		patient.setServed(true);
		return patientRepo.saveAndFlush(patient);
	}
	
	@PutMapping("/update/{doctorId}")
	public Patient updatePatient1(@RequestBody Patient patient, @PathVariable int doctorId) {
		patient.setServed(false);
		patient.setDoctor_id(doctorId);
//		Date d = new SimpleDateFormat("yyyy-mm-dd").parse(date);
//		patient.setRegistrationDate(d);
		return patientRepo.saveAndFlush(patient);
	}
	
	@PutMapping("/update/{id}/{served}")
	public Patient updatePatientServed(@PathVariable int id, @PathVariable boolean served) {
		Patient patient = patientRepo.findById(id).get();
		patient.setServed(served);
		return patientRepo.saveAndFlush(patient);
	}
	
	@PutMapping("/update/{id}/{doctorId}")
	public Patient updatePatientNewAppointment(@PathVariable int id, @PathVariable int doctorId) {
		Patient patient = patientRepo.findById(id).get();
		patient.setDoctor_id(doctorId);
		patient.setServed(false);
		return patientRepo.saveAndFlush(patient);
	}

}
