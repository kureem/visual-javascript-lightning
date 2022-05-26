package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;

public class Menu extends BaseLightning{

	public Menu(String name) {
		super(name, "ul");
		addClass("slds-dropdown__list");
		setAttribute("role", "menu");
		
	}

	@Override
	public void setTitle(String title) {
		super.setTitle(title);
		setAttribute("aria-label", title);
	}
	
	public void clearMenu() {
		this.clearChildren();
	}
	
	public Menu addMenuItem(MenuItem item) {
		JSContainer li = new JSContainer("", "li");
		li.addClass("slds-dropdown__item").setAttribute("role", "presentation");
		addChild(li);
		li.addChild(item);
		item.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				evt.$set("source", source);
				fireListener("select", evt);
				
			}
		}, "click");
		return this;
	}
	
	public MenuItem getMenuItem(String name) {
		for(Renderable ctn : getChildren()) {
			if(ctn.getChildren().$get(0).getName() == name) {
				return (MenuItem)ctn.getChildren().$get(0);
			}
		}
		return null;
	}
	
	public Menu addMenuItems(MenuItem...items) {
		for(MenuItem item : items) {
			addMenuItem(item);
		}
		return this;
	}
	
	public Menu addMenuDivider() {
		addChild(new MenuDivider());
		return this;
	}
	
	
	
}
