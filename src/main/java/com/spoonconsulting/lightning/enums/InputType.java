package com.spoonconsulting.lightning.enums;

public enum InputType {
	
	CHECKBOX("checkbox", "boolean"),
	CHECKBOX_BUTTON("checkbox-button", "boolean"),
	DATE("date", "date"),
	DATETIME("datetime", "date"),
	TIME("time", "date"),
	EMAIL("email"),
	FILE("file", "file"),
	PASSWORD("password"),
	SEARCH("search"),
	TEL("tel"),
	URL("url"),
	NUMBER("number", "number"),
	TEXT("text"),
	TOGGLE("toggle", "boolean");
	
	
	private String value;
	
	private String group = "text";

	private InputType(String value) {
		this.value = value;
	}
	
	private InputType(String value, String group) {
		this(value);
		this.group = group;
	}
	
	public String getValue() {
		return this.value;
	}
	
	public String getGroup() {
		return this.group;
	}
	
}
