package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.InstituteModel;
import com.example.demo.Repository.InstituteRepository;

@Service
public class InstituteServiceImpl implements InstituteService{
	
	@Autowired
	InstituteRepository instituteRepository;
	
	@Override
	public InstituteModel  saveInstituteModel(InstituteModel institutemodel) {
		return instituteRepository.save(institutemodel);
			
	}
	
	

}
