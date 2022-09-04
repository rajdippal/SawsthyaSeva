package com.sawysthaSeva.receptionistServer.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sawysthaSeva.receptionistServer.Entity.Receptionist;
import com.sawysthaSeva.receptionistServer.Repository.ReceptionistRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/receptionists")
public class ReceptionistController {
	
	@Autowired
	private ReceptionistRepository recepRepo;
	
	@PostMapping("/add")
	public Receptionist add(@RequestBody Receptionist recep) {
		return recepRepo.save(recep);
	}
	
	@GetMapping("/all")
	public List<Receptionist> getAllReceptionists(){
		return recepRepo.findAll();
	}
	
	@GetMapping("/get/email/{email}")
	public Receptionist getReceptionist(@PathVariable String email) {
		return recepRepo.findByEmail(email).get(0);
	}

}
