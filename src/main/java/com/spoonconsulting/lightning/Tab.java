package com.spoonconsulting.lightning;

import framework.components.JSContainer;

public class Tab extends BaseLightning{


	private String endIconAlternariveText = null;
	
	private String endIconName = null;
	
	private String iconAssistiveText = null;
	
	private String iconName = null;
	
	private Boolean showErrorIndicator = false;
	
	private String value;
	
	
	private IconContainer leftIconContainer = new IconContainer("left-icon-container", "div");
	
	private JSContainer tabLeftIcon = new JSContainer("tab-left-icon", "span");
	
	private IconContainer rightIconContainer = new IconContainer("right-icon-container", "div");
	
	private JSContainer tabRightIcon = new JSContainer("tab-right-icon", "span");
	
	private IconContainer errorIconContainer = new IconContainer("error-icon-container","div");
	
	private JSContainer tabErrorIcon = new JSContainer("tab-error-icon", "span");
	
	private JSContainer label = new JSContainer("label", "span");
	
	private boolean active = false;
	
	public Tab(String name) {
		super(name, "a");
		addClass("slds-tabs_default__link");
		setAttribute("role", "tab");
		setAttribute("href", "javascript:void(0);");
		addChild(label);
		tabLeftIcon.addChild(leftIconContainer);
		tabLeftIcon.addClass("slds-tabs__left-icon");
		tabErrorIcon.addChild(errorIconContainer);
		errorIconContainer.setIconName("utility:error");
		
		tabErrorIcon.addClass("slds-tabs__right-icon");
		tabRightIcon.addClass("slds-tabs__right-icon");
		tabRightIcon.addChild(rightIconContainer);
	}

	public String getEndIconAlternariveText() {
		return endIconAlternariveText;
	}

	public Tab setEndIconAlternariveText(String endIconAlternariveText) {
		this.endIconAlternariveText = endIconAlternariveText;
		return refresh();
	}

	public String getEndIconName() {
		return endIconName;
	}

	public Tab setEndIconName(String endIconName) {
		this.endIconName = endIconName;
		return refresh();
	}

	public String getIconAssistiveText() {
		return iconAssistiveText;
	}

	public Tab setIconAssistiveText(String iconAssistiveText) {
		this.iconAssistiveText = iconAssistiveText;
		return refresh();
	}

	public String getIconName() {
		return iconName;
	}

	public Tab setIconName(String iconName) {
		this.iconName = iconName;
		return refresh();
	}

	public Boolean getShowErrorIndicator() {
		return showErrorIndicator;
	}

	public Tab setShowErrorIndicator(Boolean showErrorIndicator) {
		this.showErrorIndicator = showErrorIndicator;
		return refresh();
	}

	public String getValue() {
		return value;
	}

	public Tab setValue(String value) {
		this.value = value;
		return this;
	}

	
	public String getLabel() {
		return label.getHtml();
	}

	public Tab setLabel(String label) {
		this.label.setHtml(label);
		setAttribute("data-label", label);
		return this;
	}
	
	
	
	
	public boolean isActive() {
		return active;
	}

	public void setActive(boolean active) {
		if(this.active != active) {
			this.active = active;
			if(active) {
				if(getParent() != null) {
					if(!getParent().hasClass("slds-is-active"))
						getParent().addClass("slds-is-active");
				}
				if(getAttribute("aria-selected") != "true") {
					setAttribute("aria-selected", "true");
				}
			}else {
				if(getParent() != null) {
					if(getParent().hasClass("slds-is-active")) {
						getParent().removeClass("slds-is-active");
					}
				}
				if(getAttribute("aria-selected") != "false") {
					setAttribute("aria-selected", "false");
				}
			}
		}
	}

	public Tab refresh() {
		clearChildren();
		if(iconName != null && iconName != "") {
			addChild(this.tabLeftIcon);
			leftIconContainer.setIconName(iconName);
		}
		addChild(label);
		
		if(endIconName != null) {
			addChild(this.tabRightIcon);
			rightIconContainer.setIconName(endIconName);
		}
		
		if(showErrorIndicator) {
			addChild(this.tabErrorIcon);
		}
		
		this.leftIconContainer.setAssistiveText(iconAssistiveText);
		this.rightIconContainer.setAssistiveText(endIconAlternariveText);
		
		
		return this;
	}
	
	
	
}
