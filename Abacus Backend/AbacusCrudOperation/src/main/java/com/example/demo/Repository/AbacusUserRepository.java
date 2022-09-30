package com.example.demo.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Model.AbacusUser;

public interface AbacusUserRepository extends JpaRepository<AbacusUser,Integer>{

	

	List<AbacusUser> findByusername(String username);


	


	List<AbacusUser> findByuserId(Integer userId);

}
