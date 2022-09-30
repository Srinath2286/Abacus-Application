package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.RegisterModel;
import com.example.demo.Repository.RegisterRepository;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class RegisterController {
	@Autowired
	RegisterRepository registerRepository;
	
	@PostMapping("/register")
	public RegisterModel saveRegisterModel(@RequestBody RegisterModel registermodel) {
		return registerRepository.save(registermodel);
	}
	@GetMapping("viewbyId")
	public List<RegisterModel> getRegisterModelByRegisterId(@RequestParam Integer registerId  ){
		return registerRepository.findByRegisterId(registerId);
	}
	

}
