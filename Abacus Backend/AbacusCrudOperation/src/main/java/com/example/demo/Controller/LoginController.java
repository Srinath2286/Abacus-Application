package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.LoginModel;
import com.example.demo.Repository.LoginRepository;
 
@RestController
@RequestMapping("/login")
@CrossOrigin(origins="http://localhost:3000")
public class LoginController {
	
	@Autowired
	LoginRepository loginRepository;
	
	
	@PostMapping("/login")
	public LoginModel saveLoginModel(@RequestBody LoginModel loginmodel) {
		return loginRepository.save(loginmodel);
	}


}
