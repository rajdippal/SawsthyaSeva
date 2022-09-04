package com.sawysthaSeva.patientServer.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sawysthaSeva.patientServer.Entity.Patient;


@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer>{
	
	public List<Patient> findByName(String name);
}
