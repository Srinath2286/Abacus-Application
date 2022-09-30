package com.example.demo.Controller;

import java.util.List;
import java.util.Optional;

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

import com.example.demo.Model.AbacusUser;
import com.example.demo.Model.AddAcademy;
import com.example.demo.Repository.AddAcademyRepository;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class AddAcademyController {
	
	@Autowired
	AddAcademyRepository addacademyRepository;
	
	@PostMapping("/academy/addacademy")
	public AddAcademy saveAddAcademy(@RequestBody AddAcademy addacademy) {
		return addacademyRepository.save(addacademy);
	}
	
	
	@GetMapping("/getacademy")
	@CrossOrigin(origins="http://localhost:3000")
	public List<AddAcademy> getAllAddAcademy() {
		return addacademyRepository.findAll();
	}
	
	@PutMapping("/editacademy")
	public AddAcademy updateAddAcademy(@RequestBody AddAcademy addacademy ) {
		return addacademyRepository.save(addacademy);
	}
	
	@DeleteMapping("/deleteacademy")
	public String deleteAddAcademy(@RequestParam Integer academyId ) {
		 addacademyRepository.deleteById(academyId);
		 return "deleted successfully";
	}
	
	
}
