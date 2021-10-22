package com.spoonconsulting.lightning.enums;

public enum Direction {
	
	TOP("top"),
	RIGHT("right"),
	BOTTOM("bottom"),
	LEFT("left"),
	HORIZONTAL("horizontal"),
	VERTICAL("vertical"),
	AROUND("around");
	
	
	private String value;
	
	private Direction(String value) {
		this.value = value;
	}
	
	public String getValue() {
		return this.value;
	}

}
