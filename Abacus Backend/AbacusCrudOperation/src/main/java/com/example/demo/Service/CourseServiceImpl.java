package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Model.CourseModel;
import com.example.demo.Repository.CourseRepository;

@Service
public class CourseServiceImpl implements CourseService{
	
	@Autowired
	CourseRepository courseRepository;
	
	@Override
	public CourseModel saveCourseModel(CourseModel coursemodel) {
		return courseRepository.save(coursemodel);
	}

	@Override
	public List<CourseModel> getListCourse() {
		return courseRepository.findAll();
	}

}
