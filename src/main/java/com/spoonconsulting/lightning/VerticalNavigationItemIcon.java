package com.spoonconsulting.lightning;

public class VerticalNavigationItemIcon extends VerticalNavigationItem{

	private IconContainer icon = new IconContainer("icon", "div");
	
	public VerticalNavigationItemIcon(String name) {
		super(name);
		getAction().addChild(icon);
		
		icon.addClass("slds-m-right_x-small")
		.addClass("slds-line-height_reset");
	}
	
	public VerticalNavigationItemIcon setIconName(String iconName) {
		icon.setIconName(iconName);
		return this;
	}
	
	public String getIconName() {
		return this.icon.getIcon().getIconName();
	}
}
