package com.spoonconsulting.lightning;

public enum Size {

	EXTRA_EXTRA_SMALL("xx_small"), EXTRA_SMALL("x_small"), SMALL("small"), MEDIUM("medium"), LARGE("large");

	private String value;

	private Size(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

}
