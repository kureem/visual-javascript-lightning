package com.spoonconsulting.lightning;

public enum Size {

	EXTRA_EXTRA_SMALL("xx-small"), EXTRA_SMALL("x-small"), SMALL("small"), MEDIUM("medium"), LARGE("large");

	private String value;

	private Size(String value) {
		this.value = value; 
	}

	public String getValue() {
		return value;
	}

}
