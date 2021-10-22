package com.spoonconsulting.lightning.enums;

public enum Color {
	
	DEFAULT("default"),
	SUCCESS("success"),
	WEAK("weak"),
	ERROR("error"),
	DESTRUCTIVE("destructive"),
	INVERSE("inverse"),
	INVERSE_WEAK("inverse-weak");
	
	private String value;
	
	private Color(String value) {
		this.value = value;
	}
	
	public String getValue() {
		return this.value;
	}

}
