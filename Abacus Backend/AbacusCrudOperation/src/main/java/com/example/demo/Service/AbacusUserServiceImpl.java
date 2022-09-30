package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.AbacusUser;
import com.example.demo.Repository.AbacusUserRepository;

@Service
public class AbacusUserServiceImpl implements AbacusUserService{
	
	
	@Autowired
	private AbacusUserRepository abacususerRepository;
	
	@Override
	public AbacusUser saveAbacusUser(AbacusUser abacususer) {
		return abacususerRepository.save(abacususer);
	}

}
