package com.example.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.InstituteModel;

public interface InstituteRepository extends JpaRepository<InstituteModel,Integer> {

	List<InstituteModel> findByinstituteId(Integer instituteId);

	

	

	

	

	

}
