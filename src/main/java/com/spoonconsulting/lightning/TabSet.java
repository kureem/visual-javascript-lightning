package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;

public class TabSet extends JSContainer {

	private JSContainer tablist = new JSContainer("tablist", "ul");
	private JSContainer tabs = new JSContainer("tabs", "div");

	public TabSet(String name) {
		super(name, "div");
		addClass("TabSet");
		addClass("slds-tabs_default");
		addChild(tablist);
		tablist.addClass("slds-tabs_default__nav");
		addChild(tabs);
	}

	public void setActiveTabValue(String val) {
		for (Renderable r : tablist.getChildren()) {
			TabItem item = (TabItem) r;
			if (item.tab.getValue() == val) {
				item.setActive(true);
			} else {
				item.setActive(false);
			}
		}
	}

	public void setActiveTabItem(TabItem item) {
		for (Renderable r : tablist.getChildren()) {
			TabItem titem = (TabItem) r;
			if (titem.getId() == item.getId()) {
				titem.setActive(true);
			} else {
				titem.setActive(false);
			}
		}
	}
	
	public TabItem getActiveTabItem() {
		for(TabItem item : getTabItems()) {
			if(item.isActive()) {
				return item;
			}
		}
		return null;
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Array<TabItem> getTabItems(){
		Array result = tablist.getChildren();
		return result;
	}

	public TabSet addTab(Tab tab, TabPanel content) {
		String name = (tablist.getChildren().length + 1) + "";
		TabItem item = new TabItem(name, tab, content);
		tablist.addChild(item);
		content.setAttribute("aria-labelledby", "tab-" + name + "__item");
		addChild(content);
		TabItem titem = getActiveTabItem();
		if(titem == null) {
			TabItem first = (TabItem)tablist.getChildren().$get(0);
			setActiveTabItem(first);
		}
		return this;
	}

	public TabPanel getPanel(String name) {
		for (Renderable r : getChildren()) {
			if (r.getId() != tablist.getId()) {
				if (r.getName() == name) {
					return (TabPanel) r;
				}
			}
		}
		return null;
	}
	
	public TabSet setVariant(TabSetVariant variant) {
		return setVariant(variant != null? variant.value : "standard");
	}
	
	public TabSet setVariant(String variant) {
		
		removeClass("slds-vertical-tabs");
		removeClass("slds-tabs_scoped");
		removeClass("slds-tabs_default");
		
		tablist.removeClass("slds-vertical-tabs__nav");
		tablist.removeClass("slds-tabs_scoped__nav");
		tablist.removeClass("slds-tabs_default__nav");
		tablist.setAttribute("aria-orientation", null);
		
		if(variant == "vertical") {
			addClass("slds-vertical-tabs");
			tablist.setAttribute("aria-orientation", "vertical");
			tablist.addClass("slds-vertical-tabs__nav");
		}else if(variant == "scoped") {
			addClass("slds-tabs_scoped");
			tablist.addClass("slds-tabs_scoped__nav");
		}else {
			addClass("slds-tabs_default");
			tablist.addClass("slds-tabs_default__nav");
		}
		
		
		for(TabSetVariant va : TabSetVariant.values()) {
			removeClass("slds-tabs_" + va.value);
		}
		
		if(variant == null) {
			variant = "standard";
		}
		
		addClass("slds-tabs_" + variant);
		return this;
	}
	
	
	public enum TabSetVariant{
		
		STANDARD("default"),
		SCOPED("scoped"),
		VERTICAL("vertical");
		
		private TabSetVariant(String value) {
			this.value = value;
		}
		
		private String value;
	}

	public class TabItem extends JSContainer {

		private Tab tab;

		private TabPanel panel;

		public TabItem(String name, Tab tab, TabPanel panel) {
			super(name, "li");
			addClass("TabItem");
			this.tab = tab;
			this.panel = panel;
			setAttribute("role", "presentation").setAttribute("data-tab", "true");
			addClass("slds-tabs_default__item");
			setAttribute("title", tab.getTitle());
			setAttribute("data-label", tab.getTitle());
			setAttribute("data-tab-value", name);

			tab.addEventListener(new EventListener() {

				@Override
				public void performAction(Renderable source, Event evt) {
					TabItem titem = source.getAncestorWithClass("TabItem");
					TabSet tabSet = source.getAncestorWithClass("TabSet");
					tabSet.setActiveTabItem(titem);
				}
			}, "click");
			addChild(tab);

		}

		public void setActive(boolean b) {
			tab.setActive(b);
			panel.setActive(b);
		}

		public Boolean isActive() {
			return tab.isActive() && panel.isActive();
		}

	}

}
