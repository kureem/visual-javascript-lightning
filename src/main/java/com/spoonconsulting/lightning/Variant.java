package com.spoonconsulting.lightning;

public enum Variant {

	BASE(""),NEUTRAL("neutral"), BRAND("brand"), OUTLINE_BRAND("outline-brand"), DESTRUCTIVE("destructive"),
	TEXT_DESTRUCTIVE("text-destructive"), SUCCESS("success"), INVERSE("inverse");

	private String value;

	private Variant(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

}
