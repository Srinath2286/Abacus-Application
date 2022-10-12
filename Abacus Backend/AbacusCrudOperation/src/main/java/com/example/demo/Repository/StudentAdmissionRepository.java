package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.StudentAdmissionModel;

public interface StudentAdmissionRepository extends JpaRepository<StudentAdmissionModel,Integer> {

	StudentAdmissionModel save(StudentAdmissionModel studentadmissionmodel);
	
	

}
