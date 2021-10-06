package com.spoonconsulting.lightning;

public class ButtonGroup extends BaseLightning{

	public ButtonGroup(String name) {
		super(name, "div");
		setAttribute("role", "group")
		.addClass("slds-button-group");
	}
	
	public ButtonGroup addButton(Button btn) {
		addChild(btn);
		return this;
	}
}
