package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.CustomEvent;
import jsweet.dom.Event;

public class VerticalNavigationItem extends JSContainer{

	private JSContainer action = new JSContainer("action", "a");
	
	private JSContainer label = new JSContainer("label", "span");
	
	private boolean selected = false;
	
	public VerticalNavigationItem(String name) {
		super(name, "div");
		addClass("slds-nav-vertical__item")
			.setAttribute("role", "listitem");
		
		addChild(action);
		action.addClass("slds-nav-vertical__action")
			.setAttribute("href", "javascript:void(0);");
		
		action.addChild(label);
		
		action.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				setSelected(true);
				CustomEvent event = new CustomEvent("selected");
				event.$set("source", source.getParent() );
				fireListener("selected", event);
			}
		}, "click");
	}
	
	public VerticalNavigationSection getSection() {
		return getAncestorWithClass("slds-nav-vertical__section");
	}
	
	public VerticalNavigationItem setSelected(boolean b) {
		this.selected = b;
		removeClass("slds-is-active");
		if(b) {
			addClass("slds-is-active");
			setAttribute("aria-current", "page");
		}else {
			setAttribute("aria-current", null);
		}
		
		return this;
	}
	
	public boolean isSelected() {
		return selected;
	}
	
	protected JSContainer getAction() {
		return this.action;
	}
	
	
	public VerticalNavigationItem setLabel(String label) {
		this.label.setHtml(label);
		return this;
	}
	
	public String getLabel() {
		return this.label.getHtml();
	}
	
	public VerticalNavigationItem setHref(String href) {
		this.action.setAttribute("href", href);
		return this;
	}
	
	public String getHref() {
		return this.action.getAttribute("href");
	}
}
