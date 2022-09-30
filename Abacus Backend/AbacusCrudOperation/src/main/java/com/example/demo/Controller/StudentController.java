package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.StudentModel;
import com.example.demo.Repository.StudentRepository;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class StudentController {
	
	@Autowired
	StudentRepository studentRepository;
	
	
	@PostMapping("/addstudent")
	public StudentModel saveStudentModel(@RequestBody StudentModel studentmodel) {
		return studentRepository.save(studentmodel);
	}
	
	@GetMapping("/bystudentId")
	public List<StudentModel> getStudentModelBystudentId(@RequestParam Integer studentId) {
		return studentRepository.findBystudentId(studentId);
	}
	
	@GetMapping("/viewstudent")
	public List<StudentModel> getAllStudentModel() {
		return studentRepository.findAll();
	}
	
	@PutMapping("/editstudent")
	public StudentModel updateStudentModel(@RequestBody StudentModel studentmodel) {
		return studentRepository.save(studentmodel);
	}
	
	@DeleteMapping("/deletestudent")
	public String deleteStudentModelBystudentId(@RequestParam Integer studentId) {
		 studentRepository.findBystudentId(studentId);
		 return "deleted successfully";
	}


}
