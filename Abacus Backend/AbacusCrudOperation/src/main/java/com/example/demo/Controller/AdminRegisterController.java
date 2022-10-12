package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.AdminRegisterModel;

import com.example.demo.Repository.AdminRegisterRepository;


@RestController
@CrossOrigin(origins="http://localhost:3000")
public class AdminRegisterController {
	
	@Autowired
	AdminRegisterRepository adminregisterRepository;
	
	@PostMapping("/adminregister")
	public AdminRegisterModel saveAdminRegisterModel(@RequestBody AdminRegisterModel adminregistermodel) {
		return adminregisterRepository.save(adminregistermodel);
	}
	
	

}
