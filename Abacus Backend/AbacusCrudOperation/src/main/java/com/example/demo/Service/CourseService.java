package com.example.demo.Service;

import java.util.List;

import com.example.demo.Model.CourseModel;

public interface CourseService {

	public CourseModel saveCourseModel(CourseModel coursemodel);
	public List<CourseModel> getListCourse();

}
