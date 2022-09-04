package com.sawysthaSeva.ipdServer.Controller;

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

import com.sawysthaSeva.ipdServer.Entity.Ipd;
import com.sawysthaSeva.ipdServer.Model.CustomIpd;
import com.sawysthaSeva.ipdServer.Service.IpdService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/ipd")
public class IpdController {
	
	@Autowired
	private IpdService ipdService;

	@PostMapping("/add")
	public Ipd add(@RequestBody Ipd ipd) {
		return ipdService.addIpd(ipd);
	}
	
	@GetMapping("/get/{name}")
	public List<CustomIpd> getDetailsOfIpd(@PathVariable String name){
		return ipdService.getIpdOfPatient(name);
	}
	
	@GetMapping("/all")
	public List<Ipd> getAllIpds(){
		return ipdService.allIpds();
	}
	
	@PutMapping("/update")
	public Ipd update(@RequestBody Ipd ipd) {
		ipd.setServed(true);
		return ipdService.update(ipd);
	}
	
	@GetMapping("/all-ipds")
	public List<CustomIpd> getAll(){
		return ipdService.getAllIpds();
	}
	
	@GetMapping("/get/doctor/{id}")
	public List<Ipd> getDoctorIpds(@PathVariable int id){
		return ipdService.getIpdsOfDoctor(id);
	}
	
	@GetMapping("/history")
	public List<CustomIpd> getIpdHistory(){
		return ipdService.ipdHistory();
	}
}
