package com.spoonconsulting.lightning;

public class ButtonIconStateful extends ButtonIcon {

	public ButtonIconStateful(String name, String iconName) {
		super(name, iconName);
	}
	
	public ButtonIconStateful setSelected(boolean b) {
		if(b) {
			addClass("slds-is-selected");
		}else {
			removeClass("slds-is-selected");
		}
		return this;
	}
	
	public Boolean isSelected() {
		return hasClass("slds-is-selected");
	}
	
	
}
