package com.sawysthaSeva.doctorServer.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sawysthaSeva.doctorServer.Entity.Doctor;
import com.sawysthaSeva.doctorServer.Model.DoctoPatientAppoint;
import com.sawysthaSeva.doctorServer.Model.Ipd;
import com.sawysthaSeva.doctorServer.Model.Patient;
import com.sawysthaSeva.doctorServer.Repository.DoctorRepository;

@Component
public class DoctorService {
	
	@Autowired
	private DoctorRepository doctorRepo;
	
	@Autowired
	private RestTemplate restTemplate;
	
	ObjectMapper mapper = new ObjectMapper();
	
	public Doctor addDoctor(Doctor doctor) {
		return doctorRepo.save(doctor);
	}
	
	public List<Doctor> findAllDoctors(){
		return doctorRepo.findAll();
	}
	
	public Doctor findDoctorWithEmail(String email){
		return doctorRepo.findByEmail(email).get(0);
	}
	
	public List<Patient> findAppointments(int doctorId){
		JsonNode lis = restTemplate.getForObject("http://PATIENT-SERVER/patients/all", JsonNode.class);
		
		List<Patient> list = mapper.convertValue(lis, new TypeReference<List<Patient>>() {
		});
		
		List<Patient> patients = new ArrayList<>();
		
		for(Patient p : list) {
			if(p.getDoctor_id() == doctorId && !p.isServed())
				patients.add(p);
		}
		return patients;
	}
	
	public List<Patient> findServedPatients(int doctorId){
		JsonNode lis = restTemplate.getForObject("http://PATIENT-SERVER/patients/all", JsonNode.class);
		
		List<Patient> list = mapper.convertValue(lis, new TypeReference<List<Patient>>() {
		});	
		
		List<Patient> patients = new ArrayList<>();
		
		for(Patient p : list) {
			if(p.getDoctor_id() == doctorId && p.isServed())
				patients.add(p);
		}
		return patients;
	}
	
	public List<DoctoPatientAppoint> findAllAppointments(){
		List<DoctoPatientAppoint> list = new ArrayList<>();
		
		List<Doctor> doctors = doctorRepo.findAll();
		
		for(Doctor d : doctors) {
			
			JsonNode lis = restTemplate.getForObject("http://PATIENT-SERVER/patients/all", JsonNode.class);
			
			List<Patient> l = mapper.convertValue(lis, new TypeReference<List<Patient>>() {
			});
						
			for(Patient p : l) {
				if(p.getDoctor_id() == d.getId() && !p.isServed()) {
					list.add(new DoctoPatientAppoint(d,p));
				}
			}
		}
		return list;
	}
	
	public List<Doctor> findDoctorWithSpecialization(String specialization){
		List<Doctor> allDoctors = doctorRepo.findAll();
		
		List<Doctor> doctors = new ArrayList<>();
		
		for(Doctor d : allDoctors) {
			if(d.getSpecialization().contains(specialization.toUpperCase()))
				doctors.add(d);
		}
		
		return doctors;
	}
	
	public Doctor findDoctorWithId(int id) {
		return doctorRepo.findById(id).get();
	}
	
	public List<Doctor> findDoctorWithName(String name) {
		List<Doctor> allDoctors = doctorRepo.findAll();
		
		List<Doctor> doctors = new ArrayList<>();
		
		for(Doctor d : allDoctors) {
			if(d.getName().contains(name.toUpperCase()))
				doctors.add(d);
		}
		
		return doctors;
	}
	
	public List<Ipd> findIpds(int doctorId){
		JsonNode lis = restTemplate.getForObject("http://IPD-SERVER/ipd/all", JsonNode.class);
		
		List<Ipd> list = mapper.convertValue(lis, new TypeReference<List<Ipd>>() {
		});
		
		List<Ipd> ipds = new ArrayList<>();
		
		for(Ipd p : list) {
			if(p.getDoctorId() == doctorId && !p.isServed())
				ipds.add(p);
		}
		return ipds;
	}

}
