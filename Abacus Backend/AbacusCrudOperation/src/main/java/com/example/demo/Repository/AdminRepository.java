package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.AdminModel;

public interface AdminRepository extends JpaRepository<AdminModel,Integer>{

	
	List<AdminModel> findByemail(String email);
	

	List<AdminModel> findBymobilenumber(String mobilenumber);



	
}
