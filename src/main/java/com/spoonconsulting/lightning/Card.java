package com.spoonconsulting.lightning;

import com.spoonconsulting.lightning.enums.Size;
import com.spoonconsulting.lightning.enums.Variants;

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
	
	/**
	 * This method returns the body of the container<br />
	 * <br>
	 * 
	 * <code>
	 *  Card.getBody().addChild(component) to add a child in the body of the card.
	 * </code>
	 * 
	 * @return The body of the Card
	 */
	public JSContainer getBody() {
		return body;
	}
	
	/**
	 * This method returns the header of the Card<br />
	 * <code>Card.getHeader().addChild(comp) <br /> </code><br />
	 * to add a component in the header of the Card
	 * 
	 * @return The container that will hold the header components of the card
	 */
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
	
	/**
	 * Sets the title of the Card
	 * 
	 * @param title The title of the Card
	 * 
	 * @return Updated instance of this Card
	 */
	public Card setTitle(String title) {
		this.title.setHtml(title);
		return this;
	}
	
	/**
	 * @return The title of the Card
	 */
	public String getTitle() {
		return this.title.getHtml();
	}

	public Card setVariant(String variant) {
		removeClass("slds-card_narrow");
		if(variant == Variants.CardVariant.NARROW.getValue()) {
			addClass("slds-card_narrow");
		}
		return this;
	}
	
	public Card setVariant(Variants.CardVariant variant) {
		return setVariant(variant != null?variant.getValue(): (String)null);
	}
	
	public String getVariant() {
		if(hasClass("slds-card_narrow")) {
			return Variants.CardVariant.NARROW.getValue();
		}else {
			return Variants.CardVariant.BASE.getValue();
		}
	}
}
