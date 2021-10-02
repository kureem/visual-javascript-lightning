package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import jsweet.lang.Array;

public class Path extends AbstractProgress implements IProgress {

	private JSContainer track = new JSContainer("track", "div");
	private JSContainer scrollerContainer = new JSContainer("scroller-container", "div");

	private JSContainer scroller = new JSContainer("scroller", "div");

	private JSContainer scrollerInner = new JSContainer("scroller-inner", "div");

	private JSContainer nav = new JSContainer("nav", "ul");

	public Path(String name) {
		super(name, "div");
		addClass("slds-path");
		addChild(track.addChild(scrollerContainer.addChild(scroller.addChild(scrollerInner.addChild(nav)))));

		track.addClass("slds-grid").addClass("slds-path__track");
		scrollerContainer.addClass("slds-grid").addClass("slds-path__scroller-container");
		scroller.addClass("slds-path__scroller");
		scrollerInner.addClass("slds-path__scroller_inner");
		nav.addClass("slds-path__nav");
		nav.setAttribute("role", "listbox").setAttribute("aria-orientation", "horizontal");
		scroller.setAttribute("role", "application");

	}



	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Array<IStep> getSteps() {
		Array result = nav.getChildren();
		return result;
	}

	@Override
	public IProgress clearSteps() {
		nav.clearChildren();
		nav.setRendered(false);
		return this;
	}

	@Override
	public IProgress addStep(String label, String value) {
		PathItem item = new PathItem(label);
		item.setValue(value);
		item.setLabel(label);
		nav.addChild(item);
		return this;
	}

}
