package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.Model.AdminModel;
import com.example.demo.Repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService{
	
	@Autowired
	AdminRepository adminRepository;
	
	
	@Override
	public AdminModel saveAdminModel(AdminModel adminmodel ) {
		return adminRepository.save(adminmodel);
		
	}

}
