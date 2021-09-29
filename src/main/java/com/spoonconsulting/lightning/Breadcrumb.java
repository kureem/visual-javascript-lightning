package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import jsweet.dom.HTMLElement;

public class Breadcrumb extends JSContainer{

	public Breadcrumb(String name) {
		super(name, "a");
	}
	
	public Breadcrumb setHref(String href) {
		setAttribute("href", href);
		return this;
	}
	
	public Breadcrumb setLabel(String label) {
		setHtml(label);
		return this;
	}
	
	public String getHref() {
		return getAttribute("href");
	}
	
	public String getLabel() {
		return getHtml();
	}

	public void focus() {
		HTMLElement a = getElement();
		if(a != null)
			a.focus();
	}
	
	public void blur() {
		HTMLElement elem = getElement();
		if(elem != null)
			elem.blur();
	}
}
