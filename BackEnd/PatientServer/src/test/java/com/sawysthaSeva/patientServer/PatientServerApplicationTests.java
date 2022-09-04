package com.sawysthaSeva.patientServer;

import static org.junit.jupiter.api.Assertions.assertEquals;

import javax.transaction.Transactional;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sawysthaSeva.patientServer.Entity.Patient;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
class PatientServerApplicationTests {
	
	@Autowired
	private RestTemplate restTemplate;
	
	ObjectMapper mapper = new ObjectMapper();

	@Test
	@Transactional
	@DisplayName("Testing for adding a patient")
	public void testAddPatient() {
		
		Patient patient = new Patient("patient", "00000000", 40, "male", "kolkata", "A+", "12345",
				"patient@email.com", false, 20001);
		
		JsonNode node = restTemplate.postForObject("http://PATIENT-SERVER/patients/add", patient, JsonNode.class);
		
		Patient response = mapper.convertValue(node, new TypeReference<Patient>() {
		});
		
		assertEquals(patient.toString(), response.toString());
		
	}
}
