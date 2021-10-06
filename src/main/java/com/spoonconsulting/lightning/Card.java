package com.spoonconsulting.lightning;

import framework.components.JSContainer;

public class Card extends JSContainer{

	private JSContainer header = new JSContainer("header", "div");
	
	private JSContainer media = new JSContainer("media", "header");
	
	private JSContainer mediaFigure = new JSContainer("media-figure", "div");
	
	private IconContainer icon = new IconContainer("icon", "standard:account");
	
	private JSContainer mediaBody = new JSContainer("media-body", "div");
	
	private JSContainer mediaBodyTitle = new JSContainer("title", "h2");
	
	private JSContainer title = new JSContainer("title", "span");
	
	private JSContainer mediaAction = new JSContainer("actions", "div");
	
	private JSContainer body = new JSContainer("body", "div");
	
	private JSContainer footer = new JSContainer("footer", "div");
	
	public Card(String name, String tag) {
		super(name, tag);
		addClass("slds-card");
		addChild(header
					.addChild(media
								.addChild(mediaFigure)
								.addChild(mediaBody
										.addChild(mediaBodyTitle
												.addChild(title)))
								.addChild(mediaAction)))
		.addChild(body)
		.addChild(footer);
		
		header.addClass("slds-card__header");
		
		media.addClass("slds-media")
			.addClass("slds-media_center")
			.addClass("slds-has-flexi-truncate");
		
		mediaFigure.addClass("slds-media__figure");
		
		icon.setSize(Size.SMALL);
		
		mediaBody.addClass("slds-media__body");
		
		mediaBodyTitle.addClass("slds-card__header-title");
		
		title.addClass("slds-text-heading_small")
			.addClass("slds-truncate");
		
		mediaAction.addClass("slds-no-flex");
		
		body.addClass("slds-card__body");
		
		footer.addClass("slds-card__footer");
		
	}
	
	public JSContainer getSlot(String name) {
		if(name == "title") {
			return mediaBodyTitle;
		}else if(name == "actions") {
			return mediaAction;
		}else if(name == "footer") {
			return footer;
		}else {
			return body;
		}
	}
	
	public JSContainer getBody() {
		return body;
	}
	
	public JSContainer getHeader() {
		return header;
	}
	
	public JSContainer getActions() {
		return mediaAction;
	}
	
	public JSContainer getFooter() {
		return footer;
	}
	
	public Card setIconName(String iconName) {
		mediaFigure.clearChildren();
		if(iconName != null) {
			this.icon.setIconName(iconName);
			mediaFigure.addChild(icon);
		}
		return this;
	}
	
	public String getIconName() {
		if(mediaFigure.getChildren().indexOf(icon)>=0) {
			return this.icon.getIcon().getIconName();
		}else {
			return null;
		}
	}
	
	public Card setTitle(String title) {
		this.title.setHtml(title);
		return this;
	}
	
	public String getTitle() {
		return this.title.getHtml();
	}

	public Card setVariant(String variant) {
		removeClass("slds-card_narrow");
		if(variant == CardVariant.NARROW.value) {
			addClass("slds-card_narrow");
		}
		return this;
	}
	
	public Card setVariant(CardVariant variant) {
		return setVariant(variant != null?variant.value: (String)null);
	}
	
	public String getVariant() {
		if(hasClass("slds-card_narrow")) {
			return CardVariant.NARROW.value;
		}else {
			return CardVariant.BASE.value;
		}
	}
	
	public enum CardVariant {
		
		BASE("base"),
		NARROW("narrow");
		
		private String value;
		
		private CardVariant(String value) {
			this.value = value;
		}
		
		public String getValue() {
			return this.value;
		}
	}
}
