package com.spoonconsulting.lightning.enums;

public enum Size {

	EXTRA_EXTRA_EXTRA_SMALL("xxx-small"),EXTRA_EXTRA_SMALL("xx-small"), EXTRA_SMALL("x-small"), SMALL("small"), MEDIUM("medium"), LARGE("large"), EXTRA_LARGE("x-large"),
	EXTRA_EXTRA_LARGE("xx-large"), NONE("none");

	private String value;

	private Size(String value) {
		this.value = value;  
	}

	public String getValue() {
		return value;
	}

}
