package com.sawysthaSeva.prescriptionServer;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.Date;

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
import com.sawysthaSeva.prescriptionServer.Entity.Prescription;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
class PrescriptionServerApplicationTests {
	
	@Autowired
	private RestTemplate restTemplate;
	
	ObjectMapper mapper = new ObjectMapper();
	
	@Test
	@DisplayName("Testing for adding a prescription")
	public void testAddPrescription() {
		
		Prescription pres = new Prescription(new Date(),"paracetamol 2 per day","blood test",20001,12);
		
		JsonNode node = restTemplate.postForObject("http://PRESCRIPTION-SERVER/doctors/add", pres, JsonNode.class);
		
		Prescription response = mapper.convertValue(node, new TypeReference<Prescription>() {
		});
		
		assertEquals(pres.toString(), response.toString());
	}
}
