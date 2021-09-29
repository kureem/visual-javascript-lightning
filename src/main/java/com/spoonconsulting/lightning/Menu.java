package com.spoonconsulting.lightning;

import framework.components.JSContainer;

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
	
	public Menu addMenuItem(MenuItem item) {
		JSContainer li = new JSContainer("", "li");
		li.addClass("slds-dropdown__item").setAttribute("role", "presentation");
		addChild(li);
		li.addChild(item);
		return this;
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
