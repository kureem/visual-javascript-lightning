package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;

public class VerticalNavigation extends JSContainer {

	private boolean compact = false;
	
	private String selectedItem = null;
	
	private String selectedSection = null;
	
	private boolean shaded = false;
	
	public VerticalNavigation(String name) {
		super(name, "nav");
		addClass("slds-nav-vertical__section");
	}

	public boolean isCompact() {
		return compact;
	}

	public VerticalNavigation setCompact(boolean compact) {
		this.compact = compact;
		removeClass("slds-nav-vertical_compact");
		if(compact) {
			addClass("slds-nav-vertical_compact");
		}
		return this;
	}
	
	public VerticalNavigation addSection(VerticalNavigationSection section) {
		addChild(section);
		section.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				Renderable selected = (Renderable)evt.$get("selectedItem");
				setSelectedItem(source.getName(), selected.getName());
				evt.$set("selectedSection", source);
				fireListener("selected", evt);
			}
		}, "selected");
		return this;
	}
	
	public VerticalNavigationSection addSection(String name, String label) {
		VerticalNavigationSection section = new VerticalNavigationSection(name);
		section.setLabel(label);
		addSection(section);
		return section;
	}
	
	public VerticalNavigationSection getSection(String name) {
		for(VerticalNavigationSection section : getSections()) {
			if(section.getName() == name) {
				return section;
			}
		}
		return null;
	}
	
	public VerticalNavigationItem getItem(String name) {
		for(VerticalNavigationItem item : getItems()) {
			if(item.getName() == name) {
				return item;
			}
		}
		return null;
	}
	
	
	public VerticalNavigationItem getItem(String sectionName, String itemName) {
		VerticalNavigationSection section = getSection(sectionName);
		if(section != null) {
			return section.getItem(itemName);
		}
		return null;
	}
	
	public VerticalNavigation addSections(VerticalNavigationSection...sections) {
		for(VerticalNavigationSection section : sections) {
			addSection(section);
		}
		return this;
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Array<VerticalNavigationSection> getSections(){
		Array result = getChildren();
		return result;
	}

	public String getSelectedItem() {
		return selectedItem;
	}

	public VerticalNavigation setSelectedItem(String selectedSection, String selectedItem) {
		this.selectedItem = selectedItem;
		this.selectedSection = selectedSection;
		for(VerticalNavigationSection section : getSections()) {
			if(section.getName() != selectedSection) {
				section.setSelectedItem(null);
			}
		}
		return this;
	}
	
	public Array<VerticalNavigationItem> getItems(){
		Array<VerticalNavigationItem> result = new Array<VerticalNavigationItem>();
		for(VerticalNavigationSection section : getSections()) {
			for(VerticalNavigationItem item : section.getItems()) {
				result.push(item);
			}
		}
		return result;
	}
	
	public String getSelectedSection() {
		return this.selectedSection;
	}
	
	public VerticalNavigation setSelectedItem(String selectedItem) {
		this.selectedItem = selectedItem;
		for(VerticalNavigationItem item : getItems()) {
			item.setSelected(item.getName() == selectedItem);
			if(item.getName() == selectedItem) {
				this.selectedSection = item.getSection().getName();
			}
		}
		return this;
	}

	public boolean isShaded() {
		return shaded;
	}

	public VerticalNavigation setShaded(boolean shaded) {
		this.shaded = shaded;
		removeClass("slds-nav-vertical_shade");
		if(shaded) {
			addClass("slds-nav-vertical_shade");
		}
		return this;
	}
}
