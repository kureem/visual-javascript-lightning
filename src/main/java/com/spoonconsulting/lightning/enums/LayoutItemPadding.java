package com.spoonconsulting.lightning.enums;

public enum LayoutItemPadding {

	HORIZONTAL_SMALL("horizontal_small"), HORIZONTAL_MEDIUM("horizontal_medium"),
	HORIZONTAL_LARGE("horizontal_large"), AROUND_SMALL("around_small"), AROUND_MEDIUM("around_medium"),
	AROUND_LARGE("around_large");

	String value;

	private LayoutItemPadding(String val) {
		value = val;
	}
	
	public String getValue() {
		return value;
	}

}