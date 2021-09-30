package com.spoonconsulting.lightning;

import framework.components.JSContainer;

public class TabPanel extends BaseLightning{

	public TabPanel(String name) {
		super(name, "div");
		addClass("slds-tabs_default__content");
		setAttribute("role", "tabpanel");
		addClass("slds-hide");
	}
	
	
	public TabPanel setActive(boolean b) {
		if(b && !isActive()) {
			removeClass("slds-hide");
			addClass("slds-show");
		}else if(isActive()) {
			removeClass("slds-show");
			addClass("slds-hide");
		}
		return this;
	}
	
	public Boolean isActive() {
		return hasClass("slds-show") && !hasClass("slds-hide");
	}
	

}
