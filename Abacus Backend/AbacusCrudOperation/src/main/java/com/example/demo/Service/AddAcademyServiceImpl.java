package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.Model.AddAcademy;
import com.example.demo.Repository.AddAcademyRepository;

@Service
public class AddAcademyServiceImpl implements AddAcademyService{
	
	
	@Autowired
	private AddAcademyRepository addacademyRepository;
	
	
	@Override
	public AddAcademy saveAddAcademy(AddAcademy addacademy) {
		return addacademyRepository.save(addacademy);
	}
	

}
