package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;

public class Section extends JSContainer{

	private JSContainer sectionTitle = new JSContainer("sectionTitle", "h3");
	
	private Button icon = new Button("arrow");
	
	private JSContainer content = new JSContainer("content", "div");
	
	public Section(String name) {
		super(name, "div");
		addClass("slds-section");
		addChild(sectionTitle);
		sectionTitle.addClass("slds-section__title");
		icon.addClass("slds-section__title-action");
		icon.removeClass("slds-button_icon");
		icon.setIconName("utility:switch");
		icon.getIcon().addClass("slds-section__title-action-icon");
		icon.setIconPosition(ButtonIcon.ICON_POSITION_LEFT);
		sectionTitle.addChild(icon);
		
		addChild(content);
		content.addClass("slds-section__content");
		
		addClass("slds-is-open");
		
		icon.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				toggle();
				fireListener("change", evt);
			}
		}, "click");
		setLabel(name);
	}
	
	public Section toggle() {
		return setOpen(!isOpen());
	}
	
	public Section setOpen(boolean b) {
		if(b && !isOpen()) {
			addClass("slds-is-open");
		}else {
			removeClass("slds-is-open");
		}
		return this;
	}
	
	public Boolean isOpen() {
		return hasClass("slds-is-open");
	}
	
	public String getTitle() {
		return this.icon.getLabel();
	}
	
	public Section setTitle(String title) {
		this.icon.setLabel(title);
		this.icon.setAttribute("title", title);
		return this;
	}
	
	public Section setLabel(String label) {
		return setTitle(label);
	}
	
	public String getLabel() {
		return getTitle();
	}
	
	public Button getIcon() {
		return icon;
	}
	
	public JSContainer getContent() {
		return this.content;
	}

}
