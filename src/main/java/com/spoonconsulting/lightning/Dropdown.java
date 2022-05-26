package com.spoonconsulting.lightning;

import com.spoonconsulting.lightning.enums.Size;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;

public class Dropdown extends JSContainer {

	private Menu menu = new Menu("menu");

	private JSContainer spinnerContainer = new JSContainer("div");

	private Spinner spinner = new Spinner("spinner");

	private Boolean isLoading = false;

	public Dropdown(String name) {
		super(name, "div");
		addClass("slds-dropdown");
		addClass("slds-dropdown_left");
		addChild(menu);
		spinnerContainer.addClass("slds-spinner_container");
		spinnerContainer.addChild(spinner.setSize(Size.SMALL));
		menu.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				fireListener("select", evt);
			}
		}, "select");
	}

	public Boolean getIsLoading() {
		return isLoading;
	}
	
	public void clearMenu() {
		menu.clearMenu();
	}

	public Dropdown setIsLoading(Boolean isLoading) {
		this.isLoading = isLoading;
		if (isLoading) {
			clearChildren();
			addChild(spinnerContainer);
		} else {
			clearChildren();
			addChild(menu);
		}
		setRendered(false);
		return this;
	}

	public Dropdown addItem(MenuItem item) {

		menu.addMenuItem(item);
		return this;
	}
	
	public MenuItem getItem(String name) {
		return menu.getMenuItem(name);
	}

	public Dropdown addMenuDivider() {
		menu.addMenuDivider();
		return this;
	}

	public Spinner getSpinner() {
		return spinner;
	}

	public Menu getMenu() {
		return menu;
	}

	
	
}
