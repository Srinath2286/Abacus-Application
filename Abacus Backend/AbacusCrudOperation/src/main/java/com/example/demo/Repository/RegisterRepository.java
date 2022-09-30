package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import com.example.demo.Model.RegisterModel;

public interface RegisterRepository extends JpaRepository<RegisterModel,Integer>{

	List<RegisterModel> findByRegisterId(Integer registerId);

	
	
	

	
}
