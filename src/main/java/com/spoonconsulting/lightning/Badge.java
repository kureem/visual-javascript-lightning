package com.spoonconsulting.lightning;

import framework.components.JSContainer;

public class Badge extends BaseLightning{
	
	private JSContainer label = new JSContainer("label", "span");
	private IconContainer leftIconContainer = new IconContainer("left-icon", "span");
	private JSContainer leftBadgeIcon = new JSContainer("left-badge-icon", "span");

	private IconContainer rightIconContainer = new IconContainer("right-icon", "span");
	private JSContainer rightBadgeIcon = new JSContainer("right-badge-icon", "span");
	
	public static String POSITION_START = "start";
	public static String POSITION_END = "end";

	public Badge(String name, String tag) {
		super(name, "span");
		addClass("slds-badge");
//		addChild(leftBadgeIcon);
		leftBadgeIcon.addClass("slds-badge__icon").addClass("slds-badge__icon_left");
		leftBadgeIcon.addChild(leftIconContainer);
		addChild(label);
//		addChild(rightBadgeIcon);
		rightBadgeIcon.addClass("slds-badge__icon").addClass("slds-badge__icon_right");
		rightBadgeIcon.addChild(rightIconContainer);
	}
	
	public Badge setIconAlternativeText(String altText) {
		leftIconContainer.setTitle(altText);
		rightIconContainer.setTitle(altText);
		return this;
	}
	
	public Badge setIconName(String iconName) {
		if(iconName != null && iconName.length() > 0) {
			leftIconContainer.setIconName(iconName);
			rightIconContainer.setIconName(iconName);
			if(getChildren().length ==1) {
				setIconPosition(POSITION_START);
			}
		}else {
			setIconPosition("none");
		}
		return this;
	}
	
	public Badge setIconPosition(String position) {
		
		clearChildren();
		
		if(position == POSITION_START) {
			addChild(leftBadgeIcon);
		}
		addChild(label);
		
		if(position == POSITION_END) {
			addChild(rightBadgeIcon);
		}
		setRendered(false);
		return this;
	}
	
	public Badge setLabel(String label) {
		this.label.setHtml(label);
		return this;
	}

}
