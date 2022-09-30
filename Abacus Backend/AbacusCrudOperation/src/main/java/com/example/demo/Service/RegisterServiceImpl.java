package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.RegisterModel;
import com.example.demo.Repository.RegisterRepository;

@Service
public class RegisterServiceImpl implements RegisterService{
	
	
	@Autowired
	RegisterRepository registerRepository;
	
	@Override
	public RegisterModel saveRegisterModel(RegisterModel registermodel) {
		
		return registerRepository.save(registermodel);
	}
	

}
