package com.spoonconsulting.lightning.enums;

public enum MenuAlignment{
	
	LEFT("top"),
	RIGHT("right"),
	CENTER("center"),
	BOTTOM_LEFT("bottom-left"),
	BOTTOM_RIGHT("bottom-right"),
	BOTTOM_CENTER("bottom-center"),
	AUTO("auto");
	
	private String value;
	
	private MenuAlignment(String val) {
		this.value = val;
	}
	
	public String getValue() {
		return this.value;
	}
}