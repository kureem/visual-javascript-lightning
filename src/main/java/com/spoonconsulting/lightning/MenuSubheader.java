package com.spoonconsulting.lightning;

import framework.components.JSContainer;

public class MenuSubheader extends JSContainer{

	private JSContainer span = new JSContainer("span");
	
	public MenuSubheader(String name) {
		super(name, "li");
		addClass("slds-dropdown__header");
		addChild(span.addClass("slds-truncate"));

	}
	
	
	public MenuSubheader setLabel(String label) {
		this.span.setHtml(label);
		return this;
	}
	
	public String getLabel() {
		return this.span.getHtml();
	}
	

}
