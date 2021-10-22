
package com.spoonconsulting.lightning.enums;

public enum Theme {
	
	DEFAULT("default"),
	SHADE("shade"),
	INVERSE("inverse"),
	ALT_INVERSE("alt-inverse"),
	SUCCESS("success"),
	INFO("info"),
	WARNING("warning"),
	ERROR("error"),
	OFFLINE("offline"),
	ALERT_TEXTURE("alert-texture");
	
	
	private String value;
	
	private Theme(String value) {
		this.value = value;
	}
	
	public String getValue() {
		return this.value;
	}

}
