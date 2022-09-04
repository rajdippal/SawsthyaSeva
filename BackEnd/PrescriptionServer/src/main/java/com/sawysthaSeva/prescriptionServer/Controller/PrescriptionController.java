package com.sawysthaSeva.prescriptionServer.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sawysthaSeva.prescriptionServer.Entity.Prescription;
import com.sawysthaSeva.prescriptionServer.Model.CustomPrescription;
import com.sawysthaSeva.prescriptionServer.Service.PrescriptionService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/prescriptions")
public class PrescriptionController {
	
	@Autowired
	private PrescriptionService prescriptionService;
	
	@PostMapping("/add")
	public Prescription addPres(@RequestBody Prescription pres) {
		return prescriptionService.addPres(pres);
	}
	
	@GetMapping("/get/patient/{name}")
	public List<CustomPrescription> getPrescriptionOfPatient(@PathVariable String name){
		return prescriptionService.getPrescriptionOfPatient(name);
	}

}
