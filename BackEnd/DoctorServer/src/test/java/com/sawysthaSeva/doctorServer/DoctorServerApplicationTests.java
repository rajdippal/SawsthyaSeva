package com.sawysthaSeva.doctorServer;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import javax.transaction.Transactional;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sawysthaSeva.doctorServer.Entity.Doctor;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
class DoctorServerApplicationTests {
		
	@Autowired
	private RestTemplate restTemplate;
	
	ObjectMapper mapper = new ObjectMapper();

	
	@Test
	@DisplayName("Testing for getting a doctor by id")
	public void testGetDoctor() {
		JsonNode node = restTemplate.getForObject("http://DOCTOR-SERVER/doctors/get/id/10001", JsonNode.class);
		
		Doctor doctor = mapper.convertValue(node, new TypeReference<Doctor>() {
		});
				
		Doctor expected = new Doctor(10001, "DR. MANISH MUKUL GHOSH", "789456123078", 40, 
					"MALE", "KOLKATA", "8654512487", "manishghosh@gmail.com", "GENERAL SURGERY");
		assertEquals(expected.toString(), doctor.toString());
	}
	
	@Test
	@DisplayName("Testing for getting a doctor by email")
	public void testGetDoctorWithEmail() {
		JsonNode node = restTemplate.getForObject("http://DOCTOR-SERVER/doctors/get/email/manishghosh@gmail.com", JsonNode.class);
		
		Doctor doctor = mapper.convertValue(node, new TypeReference<Doctor>() {
		});
		
		Doctor expected = new Doctor(10001, "DR. MANISH MUKUL GHOSH", "789456123078", 40, 
				"MALE", "KOLKATA", "8654512487", "manishghosh@gmail.com", "GENERAL SURGERY");
		assertEquals(expected.toString(), doctor.toString());
	}
	
	@Test
	@DisplayName("Testing for getting a doctor by specialization")
	public void testGetDoctorWithSpec() {
		JsonNode node = restTemplate.getForObject("http://DOCTOR-SERVER/doctors/get/specialization/GENERAL SURGERY", JsonNode.class);
		
		List<Doctor> doctors = mapper.convertValue(node, new TypeReference<List<Doctor>>() {
		});
		
		Doctor doctor = doctors.get(0);
		
		Doctor expected = new Doctor(10001, "DR. MANISH MUKUL GHOSH", "789456123078", 40, 
				"MALE", "KOLKATA", "8654512487", "manishghosh@gmail.com", "GENERAL SURGERY");
		assertEquals(expected.toString(), doctor.toString());
	}
	
	@Test
	@Transactional
	@Rollback(true)
	@DisplayName("Testing for adding a doctor")
	public void testAddDoctor() {
		Doctor doctor = new Doctor("DR. DUMMY", "DUMMY", 0, 
				"DUMMY", "DUMMY", "DUMMY", "DUMMY@gmail.com", "DUMMY");
		
		JsonNode node = restTemplate.postForObject("http://DOCTOR-SERVER/doctors/add", doctor, JsonNode.class);
		
		Doctor response = mapper.convertValue(node, new TypeReference<Doctor>() {
		});
		
		assertEquals(doctor.toString(), response.toString());
	}

}
