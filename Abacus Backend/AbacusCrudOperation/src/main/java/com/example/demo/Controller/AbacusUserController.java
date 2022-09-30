package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.AbacusUser;
import com.example.demo.Repository.AbacusUserRepository;


@RestController
@RequestMapping("/user")
public class AbacusUserController {
	
	
	@Autowired
	AbacusUserRepository abacususerRepository;
	
	@PostMapping("/addadmission")
	public AbacusUser saveAbacusUser(@RequestBody AbacusUser abacususer) {
		return abacususerRepository.save(abacususer);
		
	}
	@GetMapping("/byusername")
	public List<AbacusUser> getAbacusUsersByusername(@RequestParam String username) {
		return abacususerRepository.findByusername(username);
		
		
}
	@GetMapping("/byuserId")
	public List<AbacusUser> getAbacusUsersByuserId(@RequestParam Integer userId) {
		return abacususerRepository.findByuserId(userId);
		
	}
	
	@PutMapping("/editadmission")
	public AbacusUser updateAbacusUser(@RequestBody AbacusUser abacususer) {
		return abacususerRepository.save(abacususer);
	
	}
	@DeleteMapping("/deleteadmission")
	public String deleteAbacusUsers(@RequestParam Integer userId) {
		 abacususerRepository.deleteById(userId);
		 return "deleted sucessfully";
	}
	
	@GetMapping("/viewadmission")
	public List<AbacusUser> getAllAbacusUser(@RequestBody AbacusUser abacususer) {
		return abacususerRepository.findAll();
		
}
}
