package com.example.demo.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class AddAcademy {
	
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer academyId;
	private String academyName;
	private String academyImageurl;
	private Long mobileNumber;
	private String email;
	private String location;
	private String description;
	public Integer getAcademyId() {
		return academyId;
	}
	public void setAcademyId(Integer academyId) {
		this.academyId = academyId;
	}
	public String getAcademyName() {
		return academyName;
	}
	public void setAcademyName(String academyName) {
		this.academyName = academyName;
	}
	public String getAcademyImageurl() {
		return academyImageurl;
	}
	public void setAcademyImageurl(String academyImageurl) {
		this.academyImageurl = academyImageurl;
	}
	public Long getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(Long mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
}