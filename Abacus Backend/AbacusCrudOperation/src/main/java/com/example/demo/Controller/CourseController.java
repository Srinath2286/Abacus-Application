package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.AddAcademy;
import com.example.demo.Model.CourseModel;
import com.example.demo.Repository.CourseRepository;
import com.example.demo.Service.CourseService;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class CourseController {
	@Autowired
	CourseRepository courseRepository;
	
	@PostMapping("course/addcourse")
	public  CourseModel saveCourseModel(@RequestBody CourseModel coursemodel) {
		return courseRepository.save(coursemodel);
	}
	
	
	@GetMapping("/viewcourse")
	@CrossOrigin(origins="http://localhost:3000")
	public List<CourseModel> getAllCourseModel (){
		return courseRepository.findAll();
	}
	
	@PutMapping("/edit/{courseId}")
	public CourseModel updateCourseModel(@RequestBody CourseModel coursemodel ) {
		return courseRepository.save(coursemodel);
	}
	
	@DeleteMapping("/deletecourse")
	@CrossOrigin(origins="http://localhost:3000")
	public String deleteCourseModel(@PathVariable Integer academyId ) {
		 courseRepository.deleteById(academyId);
		 return "deleted successfully";
	}
	
	

}
