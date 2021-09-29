package com.spoonconsulting.lightning;

import framework.components.JSContainer;

public class MenuDivider extends JSContainer{

	public MenuDivider() {
		super("divider", "li");
		addClass("slds-has-divider_top-space");
		setAttribute("role", "separator");
	}

}
