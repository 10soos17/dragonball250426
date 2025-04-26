package com.example.demo.model;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Hello {
	private String name;

	@Builder
	public Hello(String name) {
		this.name = name;
	}

}
