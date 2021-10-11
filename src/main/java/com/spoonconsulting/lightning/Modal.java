package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;

public class Modal extends JSContainer {

	private JSContainer container = new JSContainer("container", "div");
	private JSContainer header = new JSContainer("header", "div");
	private JSContainer content = new JSContainer("content", "div");
	private JSContainer footer = new JSContainer("footer", "div");
	private ButtonIcon close = new ButtonIcon("close", "utility:close");
	private JSContainer title = new JSContainer("title", "h2");
	private JSContainer tagLine = new JSContainer("tagLine", "p");

	private BackDrop backdrop = null;

	public Modal(String name) {
		super(name, "section");
		setAttribute("role", "dialog");
		setAttribute("tabindex", "-1");
		setAttribute("aria-modal", "true");
		addClass("slds-modal");

		addChild(container);
		container.addChild(header);
		container.addChild(content);
		container.addChild(footer);

		container.addClass("slds-modal__container");
		header.addClass("slds-modal__header");
		content.addClass("slds-modal__content");
		footer.addClass("slds-modal__footer");

		close.setSize(Size.LARGE);
		close.setVariant(Variant.INVERSE);
		close.addClass("slds-modal__close");

		header.addChild(close);

		title.addClass("slds-modal__title");
		title.addClass("slds-hyphenate");

		header.addChild(title);
		tagLine.addClass("slds-m-top_x-small");
		tagLine.setStyle("display", "none");

		header.addChild(tagLine);
		close.addEventListener(new EventListener() {

			@Override
			public void performAction(Renderable source, Event evt) {
				close();
			}
		}, "click");
	}

	public void close() {
		removeClass("slds-fade-in-open");
		if(backdrop != null) {
			backdrop.removeClass("slds-backdrop_open");
		}
	}

	public void open() {
		addClass("slds-fade-in-open");
		if(backdrop != null) { 
			backdrop.addClass("slds-backdrop_open");
		}
	}

	public JSContainer getContainer() {
		return container;
	}

	public JSContainer getHeader() {
		return header;
	}

	public JSContainer getContent() {
		return content;
	}

	public JSContainer getFooter() {
		return footer;
	}

	public ButtonIcon getClose() {
		return close;
	}

	public String getTitle() {
		return this.title.getHtml();
	}

	public Modal setTitle(String title) {
		this.title.setHtml(title);
		return this;
	}

	public String getTagLine() {
		return this.tagLine.getHtml();
	}

	public Modal setTagLine(String tagLine) {
		this.tagLine.setHtml(tagLine);
		return this;
	}

	public BackDrop getBackdrop() {
		return backdrop;
	}

	public void setBackdrop(BackDrop backdrop) {
		this.backdrop = backdrop;
	}

	public static class BackDrop extends JSContainer {

		public BackDrop(String name) {
			super(name, "div");
			addClass("slds-backdrop");
		}

	}

}
