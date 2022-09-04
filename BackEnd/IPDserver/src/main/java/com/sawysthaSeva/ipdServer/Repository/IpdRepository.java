package com.sawysthaSeva.ipdServer.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sawysthaSeva.ipdServer.Entity.Ipd;

@Repository
public interface IpdRepository extends JpaRepository<Ipd, Integer>{
	
	public List<Ipd> findByName(String name);

}
