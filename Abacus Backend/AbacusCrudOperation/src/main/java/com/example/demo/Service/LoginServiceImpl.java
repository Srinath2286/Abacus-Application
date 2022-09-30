package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.LoginModel;

import com.example.demo.Repository.LoginRepository;

@Service
public class LoginServiceImpl implements LoginService{
	
	@Autowired
	LoginRepository loginRepository;

	@Override
	public LoginModel saveLogintModel(LoginModel loginmodel) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	
		
	

}
