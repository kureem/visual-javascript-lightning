package com.spoonconsulting.lightning.enums;

public enum Position {

	STATIC("static"),
	FIXED("fixed"),
	ABSOLUTE("absolute"),
	RELATIVE("relative");
	
	
	private String value;
	
	private Position(String value) {
		this.value = value;
	}
	
	public String getValue() {
		return this.value;
	}
	
}
