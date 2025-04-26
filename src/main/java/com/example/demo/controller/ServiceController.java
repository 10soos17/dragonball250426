package com.example.demo.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

//@CrossOrigin(origins = "http://127.0.0.1:8081/")  // 컨트롤러 클래스의 상단
@Slf4j
@RestController
@RequestMapping("/mv")
public class ServiceController {

	
	@RequestMapping(method = RequestMethod.GET, value = "/getSrc")
	public String getMV() {
		log.info("mv_getSrc");
		/*File file = new File("/Users/soos/Desktop/250402_mv/demo/test.mp4");
        
		String fileName = file.getName();
		
		System.out.println("fileName:" + fileName);
		String path = file.getPath();
		System.out.println("파일경로:" + path);
		System.out.println("파일의 절대경로:" + file.getAbsolutePath());
		*/
		String path = "http://127.0.0.1:8081/static/dragonball/dragonball.m3u8";//samplefile0.ts";//samplefile.m3u8";//file.getPath();
		log.info("mv_getSrc___{}_____");
		return path;
	}
	/*
	@RequestMapping(method = RequestMethod.POST, value = "/hello")
	public String getMV(@RequestBody Hello hello) {
		log.info("mv{}", hello.getName());
		return "test";// "/static/mvRoom.html";

	}*/
}
