package com.spoonconsulting.lightning;

public enum InputType {
	
	CHECKBOX("checkbox"),
	CHECKBOX_BUTTON("checkbox-button"),
	DATE("date"),
	DATETIME("datetime"),
	TIME("time"),
	EMAIL("email"),
	FILE("file"),
	PASSWORD("password"),
	SEARCH("search"),
	TEL("tel"),
	URL("url"),
	NUMBER("number"),
	TEXT("text"),
	TOGGLE("toggle");
	
	
	private String value;

	private InputType(String value) {
		this.value = value;
	}
	
	public String getValue() {
		return this.value;
	}
	
	
}
