package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import framework.components.api.Renderable;
import jsweet.dom.CustomEvent;
import jsweet.lang.Array;

/**
*<p>
* An {@link Accordion} displays vertically stacked sections of content that you can expand and collapse. <br>
* Click a section's header to expand its content. Users can control how much content is visible at once, and don't need to scroll as much to see the content of a page.
*</p>
*
*<p>
*	To create an {@link AccordionSection}, add an instance of {@link AccordionSection} using the method {@link Accordion#addSection(AccordionSection)}.
*</p>
*
*<p>
*	By default, only one section can be open at a time. <br>
*You can close a section by opening another section. <br>
*You can configure the accordion to allow multiple sections to be open, and then the sections can be opened and closed by clicking section headers.
*<br> To allow multiple sections to be open use the method {@link Accordion#setAllowMultipleSectionOpen(boolean)}
*
*</p>
*
*<p>
*	Lazy initialization can be implemented by using the onsectiontoggle event. When a section is open for the first time, its content is constructed and added.
*</p>
*
*<p>
<div>Supported events:</div>
<p>
<ul>
	<li>onsectiontoggle&nbsp; &nbsp; This event is triggered whenever there is a change in the accordion. i.e any section is open or closed.</li>
</ul>
</p>
</p>
 * @author Kureem Rossaye
 * <a href="mailto:kureem.rossaye@spoonconsulting.com">kureem.rossaye@spoonconsulting.com</a>
 */
public class Accordion extends BaseLightning {

	private boolean allowMultipleSectionOpen = false;

	public Accordion(String name) {
		super(name, "ul");
		addClass("slds-accordion");
	}

	/**
	 * Add a {@link AccordionSection} to the {@link Accordion}.
	 * @param section - The {@link AccordionSection} to add
	 * @return - The current {@link Accordion}
	 */
	public Accordion addSection(AccordionSection section) {
		JSContainer li = new JSContainer("li");
		li.addClass("slds-accordion__list-item");
		addChild(li);
		li.addChild(section);
		return this;
	}

	/**
	 * Add {@link AccordionSection}s to the accordion
	 * @param accordionSections - The sections to add to the accordion
	 * @return - The current {@link Accordion}
	 */
	public Accordion addSections(AccordionSection... accordionSections) {
		for (AccordionSection section : accordionSections) {
			addSection(section);
		}
		return this;
	}

	/**
	 * Synonymous to {@link Accordion#setOpen(String)}
	 * @param name - the name of the {@link AccordionSection} to activate / open
	 * @return - The current {@link Accordion}
	 */
	public Accordion setActiveSectionName(String name) {
		return setOpen(name);
	}

	/**
	 * Opens the {@link AccordionSection} with the given name<br>
	 * Also close the other {@link AccordionSection}s if necessary.<Br>
	 * if the {@link Accordion#isAllowMultipleSectionOpen()} = false, then the other {@link AccordionSection}s will be closed.<br>
	 * On the other hand, if {@link Accordion#isAllowMultipleSection} = true, then the other {@link AccordionSection}s that are open, will remain open.<br>
	 * @param name - The name of the {@link AccordionSection} to open
	 * @return - The current {@link Accordion}
	 */
	public Accordion setOpen(String name) {
		for (Renderable r : getChildren()) {
			AccordionSection section = (AccordionSection) r.getChildren().$get(0);
			if (section.getName() == name) {
				if (!section.isOpen()) {
					section.setOpen(true);
					fireSectionToggle();
				}
			} else {
				if (!allowMultipleSectionOpen) {
					if (section.isOpen()) {
						section.setOpen(false);
						fireSectionToggle();
					}
				}
			}
		}
		return this;
	}

	private void fireSectionToggle() {
		CustomEvent sectionToggle = new CustomEvent("onsectiontoggle");
		Array<String> openSections = new Array<String>();
		for (AccordionSection sect : getSections()) {
			if (sect.isOpen()) {
				openSections.push(sect.getName());
			}
		}
		jsweet.lang.Object detail = new jsweet.lang.Object();
		detail.$set("openSections", openSections);
		sectionToggle.$set("details", detail);
		fireListener("onsectiontoggle", sectionToggle);
	}

	/**
	 * Close the {@link AccordionSection} with the specified name
	 * @param name - The name of the {@link AccordionSection} to close
	 * @return - The current {@link Accordion}
	 */
	public Accordion setClose(String name) {
		for (Renderable r : getChildren()) {
			AccordionSection section = (AccordionSection) r.getChildren().$get(0);
			if (section.getName() == name) {
				section.setOpen(false);
			}
		}
		return this;
	}

	/**
	 * If the {@link Accordion} allows multiple {@link AccordionSection} to be opened
	 * @return - Whether the {@link Accordion} allows multiple {@link AccordionSection} to be opened
	 */
	public boolean isAllowMultipleSectionOpen() {
		return allowMultipleSectionOpen;
	}

	/**
	 *  Configures the {@link Accordion}, to allow multiple {@link AccordionSection}s to be opened
	 * @param allowMultipleSectionOpen - if multiple {@link AccordionSection}s allowed to be opened
	 */
	public void setAllowMultipleSectionOpen(boolean allowMultipleSectionOpen) {
		this.allowMultipleSectionOpen = allowMultipleSectionOpen;
	}

	/**
	 * @return - The {@link AccordionSection}s in the {@link Accordion}
	 */
	public Array<AccordionSection> getSections() {
		Array<AccordionSection> sections = new Array<AccordionSection>();
		for (Renderable r : getChildren()) {
			sections.push((AccordionSection) r.getChildren().$get(0));
		}
		return sections;
	}

	/**
	 * Returns the accordion section with the given name.
	 * @param name - The name of the {@link AccordionSection} to return.
	 * @return - The accordion section with the given name
	 */
	public AccordionSection getSection(String name) {
		for (Renderable r : getChildren()) {
			AccordionSection section = (AccordionSection) r.getChildren().$get(0);
			if (section.getName() == name) {
				return section;
			}
		}
		return null;
	}

}
