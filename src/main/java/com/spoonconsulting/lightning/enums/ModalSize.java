package com.spoonconsulting.lightning.enums;

public enum ModalSize {
	
	SMALL("small"),
	MEDIUM("medium"),
	LARGE("large");
	
	private String value;
	
	private ModalSize(String value) {
		this.value = value;
	}
	
	public String getValue() {
		return this.value;
	}

}
