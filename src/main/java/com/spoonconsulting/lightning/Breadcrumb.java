package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import jsweet.dom.HTMLElement;

/**
 * <p>A {@link Breadcrumb} component displays the path of a page relative to a parent page.&nbsp;</p>
 *<p>&nbsp;{@link Breadcrumb} are nested in a {@link Breadcrumbs} component.</p>
 *<p>Each {@link Breadcrumb} is actionable and separated by a greater-than sign.&nbsp;</p>
 *<p>&nbsp;The order the {@link Breadcrumb}s appear depends on the order they added in the {@link Breadcrumbs} component.<br />
 *</p>
 * @author Kureem Rossaye<br>
 *    <a href="mailto:kureem.rossaye@spoonconsulting.com">kureem.rossaye@spoonconsulting.com</a>
 *
 */
public class Breadcrumb extends JSContainer{

	public Breadcrumb(String name) {
		super(name, "a");
	}
	
	/**
	 * sets The URL of the page that the breadcrumb goes to.
	 * @param href - The URL of the page that the breadcrumb goes to.
	 * @return current instance of the Breadcrumb
	 */
	public Breadcrumb setHref(String href) {
		setAttribute("href", href);
		return this;
	}
	
	/**
	 * sets The text label for the breadcrumb.
	 * @param label - The text label for the breadcrumb.
	 * @return current instance of the Breadcrumb
	 */
	public Breadcrumb setLabel(String label) {
		setHtml(label);
		return this;
	}
	
	/**
	 * @return The URL of the page that the breadcrumb goes to
	 */
	public String getHref() {
		return getAttribute("href");
	}
	
	/**
	 * @return the text label for the breadcrumb.
	 */
	public String getLabel() {
		return getHtml();
	}

	/**
	 * sets focus to the Breadcrumb
	 */
	public void focus() {
		HTMLElement a = getElement();
		if(a != null)
			a.focus();
	}
	
	/**
	 * removes focus from the link
	 */
	public void blur() {
		HTMLElement elem = getElement();
		if(elem != null)
			elem.blur();
	}
}
