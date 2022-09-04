package com.sawysthaSeva.prescriptionServer.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sawysthaSeva.prescriptionServer.Entity.Prescription;

@Repository
public interface PrescriptionRepository extends JpaRepository<Prescription, Integer>{
	
	public List<Prescription> findByPatientId(int id);

}
