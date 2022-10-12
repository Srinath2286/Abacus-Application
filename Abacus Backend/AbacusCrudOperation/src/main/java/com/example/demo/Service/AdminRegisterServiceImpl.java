package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.AdminRegisterModel;
import com.example.demo.Model.RegisterModel;
import com.example.demo.Repository.AdminRegisterRepository;
import com.example.demo.Repository.RegisterRepository;

@Service
public class AdminRegisterServiceImpl implements AdminRegisterService {
	
	

	@Autowired
	AdminRegisterRepository adminregisterRepository;
	
	@Override
	public AdminRegisterModel saveAdminRegisterModel(AdminRegisterModel adminregistermodel) {
		
		return adminregisterRepository.save(adminregistermodel);
	}
	

}
