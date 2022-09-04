package com.sawysthaSeva.prescriptionServer.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sawysthaSeva.prescriptionServer.Entity.Prescription;
import com.sawysthaSeva.prescriptionServer.Model.CustomPrescription;
import com.sawysthaSeva.prescriptionServer.Model.Doctor;
import com.sawysthaSeva.prescriptionServer.Model.Patient;
import com.sawysthaSeva.prescriptionServer.Repository.PrescriptionRepository;

@Component
public class PrescriptionService {
	
	@Autowired
	private PrescriptionRepository prescriptionRepo;
	
	@Autowired
	private RestTemplate restTemplate;
	
	ObjectMapper mapper = new ObjectMapper();
	
	public Prescription addPres(Prescription pres) {
		return prescriptionRepo.save(pres);
	}
	
	public List<CustomPrescription> getPrescriptionOfPatient(String name){
		List<CustomPrescription> list = new ArrayList<>();
		
		JsonNode node = restTemplate.getForObject("http://PATIENT-SERVER/patients/get/"+name, JsonNode.class);
		
		List<Patient> patients = mapper.convertValue(node, new TypeReference<List<Patient>>() {
		});
				
		for(Patient p : patients) {
			List<Prescription> prescriptions = prescriptionRepo.findByPatientId(p.getId());
			
			for(Prescription pres : prescriptions) {
				CustomPrescription cp = new CustomPrescription();
				cp.setPatient(p);
				cp.setPrescription(pres);
				
				JsonNode dNode = restTemplate.getForObject("http://DOCTOR-SERVER/doctors/get/id/"+pres.getDoctorId(), JsonNode.class);
				
				Doctor d = mapper.convertValue(dNode, new TypeReference<Doctor>() {
				});
				
				cp.setDoctor(d);
				list.add(cp);
			}
		}
		return list;
	}

}
