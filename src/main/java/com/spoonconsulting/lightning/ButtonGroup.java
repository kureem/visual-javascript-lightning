package com.spoonconsulting.lightning;

import framework.components.JSContainer;

public class ButtonGroup extends BaseLightning{

	public ButtonGroup(String name) {
		super(name, "div");
		setAttribute("role", "group")
		.addClass("slds-button-group");
	}
	
	public ButtonGroup addButton(JSContainer btn) {
		addChild(btn);
		if(!btn.hasClass("slds-button")) {
			btn.addClass("slds-button");
		}
		
		if(!btn.hasClass("slds-button_last")) {
			btn.addClass("slds-button_last");
		}
		
		double numch = getChildren().length;
		if(numch > 1) {
			getChildren().$get(numch-2).removeClass("slds-button_last");
		}
		return this;
	}
}
