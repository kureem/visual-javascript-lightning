package com.spoonconsulting.lightning;

import framework.components.JSContainer;

public class BaseLightning extends JSContainer {

	public BaseLightning(String name, String tag) {
		super(name, tag);
	}
	
	public void setTitle(String title) {
		setAttribute("title", title);
	}
	
	public String getTitle() {
		return getAttribute("title");
	}
}
