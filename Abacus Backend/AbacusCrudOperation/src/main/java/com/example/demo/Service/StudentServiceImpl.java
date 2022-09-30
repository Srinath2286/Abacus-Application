package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.StudentModel;
import com.example.demo.Repository.StudentRepository;

@Service
public class StudentServiceImpl implements StudentService {
	
	@Autowired
	StudentRepository studentRepository; 
	
	@Override
	public StudentModel saveStudentModel(StudentModel studentmodel) {
		return studentRepository.save(studentmodel);
		
	}

}
