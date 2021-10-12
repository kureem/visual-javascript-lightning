package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;

/**
 * This class represents a section of an {@link Accordion}<br>
 * Sections can be added to an Accordion using the {@link Accordion#addSection(AccordionSection)} or {@link Accordion#addSections(AccordionSection...)} methods<br>
 * <h2>The action slot</h2>
 *<p>
 *<ul>
 *	<li>The buttons in the action slot will appear in the far right of the header of the section.&nbsp;</li>
 *	<li>To get the action slot : {@link AccordionSection#getActionsSlot(String)} or   {@link {@link AccordionSection#getSlot(String)})}&nbsp;</li>
 *	<li>Once you get the {@link JSContainer} of the action slot, you can add {@link ButtonIcon} or actually anything in the container</li>
 * </ul>
 *<h2>The content slot</h2>
 *<p>
 *<ul>
 *	<li>The content slot can be accessed {@link AccordionSection#getSlot("content")} or {@link AccordionSection#getContent()}</li>
 *	<li>Once you get the content slot, you can add anything it it. The components added will appear in the body of the accordion section</li>
 *</ul>
 *</p>
 * 
 * @author Kureem Rossaye<br> 
 * <a href="mailto:kureem.rossaye@spoonconsulting.com">kureem.rossaye@spoonconsulting.com</a>
 * 
 *
 */
public class AccordionSection extends BaseLightning {

	private JSContainer summary = new JSContainer("summary", "div");

	private JSContainer content = new JSContainer("content", "div");

	private JSContainer summaryHeading = new JSContainer("summary-heading", "h2");
	
	private Button summaryHeadingAction = new Button("summary-heading-action");

	private JSContainer summaryAction = new JSContainer("summary-action", "button");

	private Icon summaryActionIcon = new Icon("summary-action-icon","utility:switch");

	private JSContainer actionsSlot = new JSContainer("actions","span");

	/**
	 * Constructs a new {@link AccordionSection} with the given name
	 * @param name
	 */
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

	/**
	 * Sets the title of the {@link AccordionSection}
	 */
	@Override
	public void setTitle(String title) {
		super.setTitle(title);
		summaryAction.setAttribute("title", title);
		summaryHeadingAction.setLabel(title)
			.setAttribute("title", title);
	}
	
	/**
	 * Toggles the {@link AccordionSection}. Closes it if it is open, and opens it if it is closed.
	 */
	public void toggle() {
		setOpen(!isOpen());
	}
	
	/**
	 * Whether the {@link AccordionSection} is open
	 * @return - True if the {@link AccordionSection} is open and false if closed
	 */
	public boolean isOpen() {
		return hasClass("slds-is-open");
	}

	/**
	 * Whether to open or close this {@link AccordionSection}
	 * @param b - Opens it if true, closes it if false
	 * @return - The updated {@link AccordionSection}
	 */
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

	/**
	 * 
	 * @return - The summary container of the accordion section.
	 */
	public JSContainer getSummary() {
		return summary;
	}

	/**
	 * The content slot of the {@link AccordionSection}
	 * @return - The content slot of the {@link AccordionSection}
	 */
	public JSContainer getContent() {
		return content;
	}

	/**
	 * The summary heading of the {@link AccordionSection}
	 * @return - The summary heading of the {@link AccordionSection}
	 */
	public JSContainer getSummaryHeading() {
		return summaryHeading;
	}

	/**
	 * The summary action of the {@link AccordionSection}
	 * @return - The summary action of the {@link AccordionSection}
	 */
	public JSContainer getSummaryAction() {
		return summaryAction;
	}

	/**
	 * The summary action icon of the {@link AccordionSection}
	 * @return - The summary action icon of the {@link AccordionSection}
	 */
	public Icon getSummaryActionIcon() {
		return summaryActionIcon;
	}
	
	/**
	 * The slot with the specified name
	 *	<ul>
	 *		<li>actions - the actions slot where action button can be added (ButtonIcon)</li>
	 *		<li>content - Will return the content slot which is the body of the</li>
     *	</ul>
	 * @param name - The name of the slot. Possible values are: actions, &nbsp;content
	 * @return
	 */
	public JSContainer getSlot(String name) {
		if(name == "actions") {
			return actionsSlot;
		}else {
			return content;
		}
	}
	
	/**
	 * The action slot where {@link ButtonIcon} can be added
	 * @return - The {@link JSContainer} of the action slot
	 */
	public JSContainer geActionsSlot() {
		return actionsSlot;
	}

}
