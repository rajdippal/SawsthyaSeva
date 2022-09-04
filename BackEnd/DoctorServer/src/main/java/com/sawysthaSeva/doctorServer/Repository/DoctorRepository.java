package com.sawysthaSeva.doctorServer.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sawysthaSeva.doctorServer.Entity.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor, Integer>{
	
	public List<Doctor> findByEmail(String email);

}
