package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import framework.components.api.Renderable;
import jsweet.dom.CustomEvent;
import jsweet.lang.Array;

public class Accordion extends BaseLightning{

	private boolean allowMultipleSectionOpen = false;
	public Accordion(String name) {
		super(name, "ul");
		addClass("slds-accordion");
	}
	
	public Accordion addSection(AccordionSection section) {
		JSContainer li = new JSContainer("li");
		li.addClass("slds-accordion__list-item");
		addChild(li);
		li.addChild(section);
		return this;
	}
	
	public Accordion addSections(AccordionSection...accordionSections) {
		for(AccordionSection section : accordionSections) {
			addSection(section);
		}
		return this;
	}
	
	
	public Accordion setActiveSectionName(String name) {
		for(Renderable r : getChildren()) {
			AccordionSection section = (AccordionSection)r.getChildren().$get(0);
			if(section.getName() == name) {
				section.setOpen(true);
			}else {
				section.setOpen(false);
			}
		}
		return this;
	}
	
	public Accordion setOpen(String name) {
		for(Renderable r : getChildren()) {
			AccordionSection section = (AccordionSection)r.getChildren().$get(0);
			if(section.getName() == name) {
				if(!section.isOpen()) {
					section.setOpen(true);
					fireSectionToggle();
				}
			}else {
				if(!allowMultipleSectionOpen) {
					if(section.isOpen()) {
						section.setOpen(false);
						fireSectionToggle();
					}
				}
			}
		}
		return this;
	}
	
	public void fireSectionToggle() {
		CustomEvent sectionToggle = new CustomEvent("onsectiontoggle");
		Array<String> openSections = new Array<String>();
		for(AccordionSection sect : getSections()) {
			if(sect.isOpen()) {
				openSections.push(sect.getName());
			}
		}
		jsweet.lang.Object detail = new jsweet.lang.Object();
		detail.$set("openSections", openSections);
		sectionToggle.$set("details", detail);
		fireListener("onsectiontoggle", sectionToggle);
	}
	
	public Accordion setClose(String name) {
		for(Renderable r : getChildren()) {
			AccordionSection section = (AccordionSection)r.getChildren().$get(0);
			if(section.getName() == name) {
				section.setOpen(false);
			}
		}
		return this;
	}

	public boolean isAllowMultipleSectionOpen() {
		return allowMultipleSectionOpen;
	}

	public void setAllowMultipleSectionOpen(boolean allowMultipleSectionOpen) {
		this.allowMultipleSectionOpen = allowMultipleSectionOpen;
	}
	
	public Array<AccordionSection> getSections(){
		Array<AccordionSection> sections = new Array<AccordionSection>();
		for(Renderable r : getChildren()) {
			sections.push((AccordionSection)r.getChildren().$get(0));
		}
		return sections;
	}
	
	public AccordionSection getSection(String name) {
		for(Renderable r : getChildren()) {
			AccordionSection section = (AccordionSection)r.getChildren().$get(0);
			if(section.getName() == name) {
				return section;
			}
		}
		return null;
	}

}
