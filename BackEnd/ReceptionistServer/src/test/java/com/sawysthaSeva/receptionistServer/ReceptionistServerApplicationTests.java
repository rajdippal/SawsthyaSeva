package com.sawysthaSeva.receptionistServer;

import static org.junit.jupiter.api.Assertions.assertEquals;

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
import com.sawysthaSeva.receptionistServer.Entity.Receptionist;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
class ReceptionistServerApplicationTests {

	@Autowired
	private RestTemplate restTemplate;
	
	ObjectMapper mapper = new ObjectMapper();
	
	@Test
	@DisplayName("Testing for adding a receptionist")
	public void testAddReceptionist() {
		Receptionist recep = new Receptionist("receptionist", "3902902", 27, "female", "kolkata", "320200", "receptionist@email.com");
		
		JsonNode node = restTemplate.postForObject("http://RECEPTIONIST-SERVER/receptionists/add", recep, JsonNode.class);

		Receptionist response = mapper.convertValue(node, new TypeReference<Receptionist>() {
		});
		
		assertEquals(recep.toString(), response.toString());
	}
	
	@Test
	@DisplayName("Testing for getting a receptionist by email")
	public void testGetReceptionist() {
		JsonNode node = restTemplate.getForObject("http://RECEPTIONIST-SERVER/receptionists/get/email/receptionist@email.com", JsonNode.class);
		
		Receptionist recep = mapper.convertValue(node, new TypeReference<Receptionist>() {
		});
		
		Receptionist expected = new Receptionist("receptionist", "3902902", 27, "female", "kolkata", "320200", "receptionist@email.com");
		
		assertEquals(expected.toString(), recep.toString());
		
	}

}
