package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.InstituteModel;
import com.example.demo.Model.StudentAdmissionModel;
import com.example.demo.Repository.StudentAdmissionRepository;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class StudentAdmissionController {
	
	
	@Autowired
	StudentAdmissionRepository studentadmissionRepository;
	
	@PostMapping("/addadmission")
	public StudentAdmissionModel saveStudentAdmissionModel(@RequestBody StudentAdmissionModel studentadmissionmodel) {
		
		return studentadmissionRepository.save(studentadmissionmodel);
	}
	
	@GetMapping("/viewadmission")
	public List<StudentAdmissionModel> getAllStudentAdmissionModel(){
		return studentadmissionRepository.findAll();
	}
	@PutMapping("/editadmission")
	public  StudentAdmissionModel updateStudentAdmissionModel(@RequestBody StudentAdmissionModel studentadmissionmodel ) {
		return studentadmissionRepository.save(studentadmissionmodel);
	}
	
	@DeleteMapping("/deleteadmission/{id}")
		public String DeleteStudentAdmissionModel(@PathVariable Integer id) {
		 studentadmissionRepository.deleteById(id);
		 return "deleted successfully";
	}
	
	
	
	

}
