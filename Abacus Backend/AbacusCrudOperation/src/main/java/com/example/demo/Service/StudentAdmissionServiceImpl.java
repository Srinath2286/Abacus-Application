package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.StudentAdmissionModel;
import com.example.demo.Repository.StudentAdmissionRepository;

@Service
public class StudentAdmissionServiceImpl implements StudentAdmissionService {
	
	@Autowired
	StudentAdmissionRepository studentadmissionRepository;
	
	@Override
	public StudentAdmissionModel saveStudentAdmissionModel(StudentAdmissionModel studentadmissionmodel) {
		return studentadmissionRepository.save(studentadmissionmodel);
	}

}
