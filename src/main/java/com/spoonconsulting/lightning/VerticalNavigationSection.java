package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;

public class VerticalNavigationSection extends JSContainer{

	private JSContainer label = new JSContainer("label", "h2");
	
	private JSContainer list = new JSContainer("list", "div");
	
	private String selectedItem = null;	
	
	public VerticalNavigationSection(String name) {
		super(name, "div");
		addClass("slds-nav-vertical__section");
		
		addChild(label);
		label.addClass("slds-nav-vertical__title");
		
		addChild(list);
		list.setAttribute("role", "list");
		list.setAttribute("aria-describedby", label.getId());
		
		addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				
			}
		}, "selected");
	}
	
	public VerticalNavigationSection addItem(VerticalNavigationItem item) {
		this.list.addChild(item);
		item.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				setSelectedItem(source.getName());
				evt.$set("selectedItem", source);
				fireListener("selected", evt);
			}
		}, "selected");
		return this;
	}
	
	public VerticalNavigationSection setSelectedItem(String name) {
		this.selectedItem = name;
		Array<VerticalNavigationItem> items = getItems();
		for(VerticalNavigationItem item : items) {
			item.setSelected(item.getName() == name);
		}
		return this;
	}
	
	public VerticalNavigationItem addItem(String name, String label) {
		VerticalNavigationItem item = new VerticalNavigationItem(name);
		item.setLabel(label);
		addItem(item);
		return item;
	}
	
	public VerticalNavigationItemBadge addItem(String name, String label, int badgeCount) {
		VerticalNavigationItemBadge item = new VerticalNavigationItemBadge(name);
		item.setLabel(label);
		item.setBadgeCount(badgeCount);
		addItem(item);
		return item;
	}
	
	public VerticalNavigationItemIcon addItem(String name, String label, String iconName) {
		VerticalNavigationItemIcon item = new VerticalNavigationItemIcon(name);
		item.setLabel(label);
		item.setIconName(iconName);
		addItem(item);
		return item;
	}
	
	public VerticalNavigationItem getItem(String name) {
		for(VerticalNavigationItem item : getItems()) {
			if(item.getName() == name) {
				return item;
			}
		}
		return null;
	}
	
	public String getSelectedItem() {
		return this.selectedItem;
	}
	
	public VerticalNavigationSection addItems(VerticalNavigationItem...items) {
		for(VerticalNavigationItem item : items) {
			addItem(item);
		}
		return this;
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Array<VerticalNavigationItem> getItems(){
		Array result = list.getChildren();
		return result;
	}
	
	public VerticalNavigationSection setLabel(String label) {
		this.label.setHtml(label);
		return this;
	}
	
	public String getLabel() {
		return this.label.getHtml();
	}
}
