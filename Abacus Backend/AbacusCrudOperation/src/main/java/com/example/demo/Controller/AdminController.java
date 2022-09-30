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

import com.example.demo.Model.AdminModel;
import com.example.demo.Repository.AdminRepository;

@RestController
@RequestMapping("/admin")
public class AdminController {
	
	
	@Autowired
	AdminRepository adminRepository;
	
	@PostMapping
	public AdminModel saveAdminModel(@RequestBody AdminModel adminmodel ) {
		return adminRepository.save(adminmodel);
	}
	@GetMapping("/byemail")
	public List<AdminModel> getAdminModelByemail(@RequestParam String email ) {
		return adminRepository.findByemail(email);
	}
	
	@GetMapping("/bymobilenumber")
	public List<AdminModel> getAdminModelBymobilenumber(@RequestParam String mobilenumber ) {
		return adminRepository.findBymobilenumber(mobilenumber);
	}
	@GetMapping
	public List<AdminModel> getAllAdminModel(@RequestBody AdminModel AdminModel ) {
		return adminRepository.findAll();
	}
	
	@PutMapping("editacademy")
	public AdminModel updateAdminModel(@RequestBody AdminModel AdminModel ) {
		return adminRepository.save(AdminModel);
	}
	
	@DeleteMapping
	public String DeleteAdminModel(@RequestParam Integer adminId ) {
		 adminRepository.deleteById(adminId);
		 return "deleted successfully";
	}
	
	
	


}
