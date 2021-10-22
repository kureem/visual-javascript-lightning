package com.spoonconsulting.lightning;

import com.spoonconsulting.lightning.enums.Size;

import framework.components.JSContainer;

public class PathItem extends JSContainer implements IStep{

	private JSContainer link = new JSContainer("link", "a");
	
	private JSContainer stage = new JSContainer("stage", "span");
	
	private Icon icon = new Icon("icon", "utility:check");
	
	private JSContainer title = new JSContainer("title", "span");
	
	public PathItem(String name) {
		super(name, "li");
		addClass("slds-path__item");
		setAttribute("role", "presentation");
		addChild(link);
		link.addChild(stage);
		stage.addChild(icon);
		link.addChild(title);
		
		link.addClass("slds-path__link")
			.setAttribute("href", "javascript:void(0);")
			.setAttribute("role", "option")
			.setAttribute("tabindex", "-1");
		
		
		stage.addClass("slds-path__stage");
		icon.setSize(Size.EXTRA_SMALL);
		title.addClass("slds-path__title");
		
	}
	
	public PathItem setLabel(String label) {
		setAttribute("title", label);
		title.setHtml(label);
		return this;
	}
	
	public String getLabel() {
		return getAttribute("title");
	}
	
	public PathItem setActive(boolean b) {
		removeClass("slds-has-error");
		removeClass("slds-is-complete");
		removeClass("slds-is-active");
		if(b) {
			setAttribute("aria-selected", "true");
			setAttribute("tabindex", "0");
			addClass("slds-is-active");
		}else {
			setAttribute("tabindex", "-1");
			setAttribute("aria-selected", "false");
			removeClass("slds-is-active");
		}
		return this;
	}
	
	public PathItem setCurrent(boolean b) {
		if(b) {
			addClass("slds-is-current");
		}else {
			removeClass("slds-is-current");
		}
		return this;
	}
	
	public PathItem setComplete(boolean b) {
		removeClass("slds-has-error");
		removeClass("slds-is-complete");
		removeClass("slds-is-active");
		if(b) {
			setAttribute("tabindex", "-1");
			setAttribute("aria-selected", "false");
			addClass("slds-is-complete");
		}else {
			removeClass("slds-is-complete");
		}
		return this;
	}
	
	public PathItem setHasError(boolean b) {
		removeClass("slds-has-error");
		if(b) {
			addClass("slds-has-error");
		}
		return this;
	}
	
	public Boolean getHasError() {
		return hasClass("slds-has-error");
	}
	
	public Boolean isComplete() {
		return hasClass("slds-is-complete");
	}
	
	public Boolean isCurrent() {
		return hasClass("slds-is-current");
	}
	
	public Boolean isActive() {
		return hasClass("slds-is-active");
	}
	
	public PathItem setValue(String value) {
		setAttribute("value", value);
		return this;
	}
	
	public String getValue() {
		return getAttribute("value");
	}
	

}
