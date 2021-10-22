package com.spoonconsulting.lightning.enums;

public enum Flexibility {

	AUTO("auto"), SHRINK("shrink"), NO_SHRINK("no-shrink"), GROW("grow"), NO_GROW("no-grow"), NO_FLEX("no-flex");

	private String value;

	private Flexibility(String val) {
		value = val;
	}
	
	public String getValue() {
		return value;
	}
	
}