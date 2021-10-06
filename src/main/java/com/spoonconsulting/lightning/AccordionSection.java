package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;

public class AccordionSection extends BaseLightning {

	private JSContainer summary = new JSContainer("summary", "div");

	private JSContainer content = new JSContainer("content", "div");

	private JSContainer summaryHeading = new JSContainer("summary-heading", "h2");
	
	private Button summaryHeadingAction = new Button("summary-heading-action");

	private JSContainer summaryAction = new JSContainer("summary-action", "button");

	private Icon summaryActionIcon = new Icon("summary-action-icon","utility:switch");

	private JSContainer actionsSlot = new JSContainer("actions","span");

	public AccordionSection(String name) {
		super(name, "section");
		addClass("slds-accordion__section");
		addChild(summary.addClass("slds-accordion__summary"));
		addChild(content.addClass("slds-accordion__content"));

		summaryHeading.addClass("slds-accordion__summary-heading");
		summaryHeading.addChild(summaryHeadingAction);
		
		summary.addChild(summaryHeading);
		summary.addChild(actionsSlot);
		
		summaryHeadingAction.setIconName("utility:switch")
			.addClass("slds-button_reset")
			.addClass("slds-accordion__summary-action");
		summaryHeadingAction.getIcon().addClass("slds-accordion__summary-action-icon");
		summaryHeadingAction.label.addClass("slds-accordion__summary-content");
		
		
		summaryAction.addClass("slds-button")
			.addClass("slds-button_reset")
			.addClass("slds-accordion__summary-action");
		actionsSlot.addChild(summaryAction);

		summaryActionIcon.addClass("slds-accordion__summary-action-icon")
			.addClass("slds-button__icon")
			.addClass("slds-button__icon_left")
			.setAttribute("aria-hidden", "true");
		summaryAction.addChild(summaryActionIcon);

		setOpen(false);
		summary.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				toggle();
			}
		}, "click");
	}

	@Override
	public void setTitle(String title) {
		super.setTitle(title);
		summaryAction.setAttribute("title", title);
		summaryHeadingAction.setLabel(title)
			.setAttribute("title", title);
	}
	
	public void toggle() {
		setOpen(!isOpen());
	}
	
	public boolean isOpen() {
		return hasClass("slds-is-open");
	}

	public AccordionSection setOpen(boolean b) {
		Accordion accordion = getAncestorWithClass("slds-accordion");
		if (b && !isOpen()) {
			
			addClass("slds-is-open");
			summaryAction.setAttribute("aria-expanded", "true");
			if(accordion != null) {
				accordion.setOpen(getName());
			}
		} else if(isOpen()) {
			removeClass("slds-is-open");
			summaryAction.setAttribute("aria-expanded", "false");
		}
		return this;
	}

	public JSContainer getSummary() {
		return summary;
	}

	public JSContainer getContent() {
		return content;
	}

	public JSContainer getSummaryHeading() {
		return summaryHeading;
	}

	public JSContainer getSummaryAction() {
		return summaryAction;
	}

	public Icon getSummaryActionIcon() {
		return summaryActionIcon;
	}
	
	public JSContainer getSlot(String name) {
		if(name == "actions") {
			return actionsSlot;
		}else {
			return content;
		}
	}

}
