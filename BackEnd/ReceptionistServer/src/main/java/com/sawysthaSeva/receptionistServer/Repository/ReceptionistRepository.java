package com.sawysthaSeva.receptionistServer.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sawysthaSeva.receptionistServer.Entity.Receptionist;

@Repository
public interface ReceptionistRepository extends JpaRepository<Receptionist, Integer>{
	
	public List<Receptionist> findByEmail(String email);

}
