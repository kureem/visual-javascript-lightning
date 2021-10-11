package com.spoonconsulting.lightning;

import framework.components.JSContainer;

public class Badge extends BaseLightning{
	
	private JSContainer label = new JSContainer("label", "span");
	private IconContainer leftIconContainer = new IconContainer("left-icon", "span");
	private JSContainer leftBadgeIcon = new JSContainer("left-badge-icon", "span");

	private IconContainer rightIconContainer = new IconContainer("right-icon", "span");
	private JSContainer rightBadgeIcon = new JSContainer("right-badge-icon", "span");
	
	private JSContainer assistiveText = new JSContainer("assistive-text", "span");
	
	public static String POSITION_START = "start";
	public static String POSITION_END = "end";
	
	private String iconPosition = null;

	public Badge(String name) {
		super(name, "span");
		addClass("slds-badge");
		leftBadgeIcon.addClass("slds-badge__icon")
			.addClass("slds-badge__icon_left")
			.addChild(leftIconContainer);

		addChild(label);
		addChild(assistiveText);

		rightBadgeIcon.addClass("slds-badge__icon")
			.addClass("slds-badge__icon_right")
			.addChild(rightIconContainer);
	}
	
	public Badge setAssistiveText(String txt) {
		this.assistiveText.setHtml(txt);
		return this;
	}
	
	public String getAssistiveText() {
		return this.assistiveText.getHtml();
	}
	
	public String getLabel() {
		return this.label.getHtml();
	}
	
	public Badge setIconAlternativeText(String altText) {
		leftIconContainer.setTitle(altText);
		rightIconContainer.setTitle(altText);
		return this;
	}
	
	public String getIconAlternativeText() {
		return this.leftIconContainer.getTitle();
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
	
	public String getIconName() {
		return this.leftIconContainer.getIcon().getIconName();
	}
	
	public String getIconPosition() {
		return this.iconPosition;
	}
	public Badge setIconPosition(String position) {
		clearChildren();
		this.iconPosition = position;
		if(position == POSITION_START) {
			addChild(leftBadgeIcon);
		}
		addChild(label);
		addChild(assistiveText);
		
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
