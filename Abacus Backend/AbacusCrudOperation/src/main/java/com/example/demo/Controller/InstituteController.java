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

import com.example.demo.Model.InstituteModel;
import com.example.demo.Repository.InstituteRepository;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class InstituteController {
	
	@Autowired
	InstituteRepository instituteRepository;
	
	@PostMapping("/addinstitute")
	public InstituteModel saveInstituteModel(@RequestBody InstituteModel institutemodel ) {
		return instituteRepository.save(institutemodel);
	}
	
	@GetMapping("/byinstituteId")
	public List<InstituteModel> getInstituteModelByinstituteId(@RequestParam Integer instituteId ) {
		return instituteRepository.findByinstituteId(instituteId);
	}

	@GetMapping("/fetchinstitute")
	public List<InstituteModel> getAllInstituteModel() {
		return instituteRepository.findAll();
	}
	
	
	@PutMapping("/editinstitute")
	public  InstituteModel updateInstituteModel(@RequestBody InstituteModel institutemodel ) {
		return instituteRepository.save(institutemodel);
	}
	
	@DeleteMapping("/deleteinstitute")
	public String DeleteInstituteModel(@RequestParam Integer instituteId ) {
	    instituteRepository.deleteById(instituteId);
	    return "deleted successfully";
	}

}
