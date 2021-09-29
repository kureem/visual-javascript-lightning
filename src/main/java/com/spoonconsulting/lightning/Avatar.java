package com.spoonconsulting.lightning;

import framework.components.JSContainer;

public class Avatar extends JSContainer{
	
	private JSContainer img = new JSContainer("image", "img");
	
	private Icon fallbackIcon = new Icon("fallback-icon","standard:user");
	
	private JSContainer iconContainer = new JSContainer("iconContainer", "span");
	
	private JSContainer initial =new JSContainer("initial","abbr");
	
	public final static String TYPE_IMAGE = "image";
	public final static String TYPE_INITIAL = "initial";
	public final static String TYPE_ICON = "icon";
	
	public final static String VARIANT_SQUARE = "square";
	public final static String VARIANT_CIRCLE = "circle";
	private String type;
	public Avatar(String name) {
		super(name, "span");
		addClass("slds-avatar");
		initial.addClass("slds-avatar__initials").addClass("slds-icon-standard-user");
		iconContainer.addClass("slds-icon_container").addClass("slds-icon-standard-account");
		iconContainer.addChild(fallbackIcon);
		setType(TYPE_IMAGE);
		
	}
	
	public Avatar setType(String type) {
		this.clearChildren();
		if(type == TYPE_IMAGE) {
			addChild(img);
		}else if(type == TYPE_ICON) {
			addChild(iconContainer);
		}else if(type == TYPE_INITIAL) {
			addChild(initial);
		}
		setRendered(false);
		return this;
	}
	
	public String getType() {
		return this.type;
	}
	
	public Avatar setVariant(String type) {
		removeClass("slds-avatar_" +VARIANT_CIRCLE).removeClass("slds-avatar_" +VARIANT_SQUARE).addClass("slds-avatar_" +type);
		return this;
		
	}
	
	public String getVariant() {
		if(hasClass("slds-avatar_" + VARIANT_CIRCLE)) {
			return VARIANT_CIRCLE;
		}else {
			return VARIANT_SQUARE;
		}
	}
	
	public Avatar setSize(Size size) {
		for(Size s : Size.values()) {
			removeClass("slds-avatar_" + s.getValue());
		}
		
		addClass("slds-avatar_" + size.getValue());
		return this;
	}
	
	public Avatar setTitle(String title) {
		img.setAttribute("title", title);
		initial.setAttribute("title", title);
		fallbackIcon.setAttribute("title", title);
		return this;
	}

	public String getInitials() {
		return this.initial.getHtml();
	}

	public Avatar setInitials(String initials) {
		this.initial.setHtml(initials);
		return this;
	}

	public String getFallbackIconName() {
		return this.fallbackIcon.getIconName();
	}

	public Avatar setFallbackIconName(String fallbackIconName) {
		this.fallbackIcon.setIconName(fallbackIconName);
		return this;
	}
	
	public Avatar setSrc(String src) {
		this.img.setAttribute("src", src);
		return this;
	}
	
	public String getSrc() {
		return this.img.getAttribute("src");
	}

	public JSContainer getImg() {
		return img;
	}
	
	public Icon getFallbackIcon() {
		return this.fallbackIcon;
	}
	
	public JSContainer getInitial() {
		return this.initial;
	}
	
	public Avatar setAlternativeText(String altText) {
		this.img.setAttribute("alt", altText);
		this.img.setAttribute("title", altText);
		return this;
	}
	
	public String getAlternativeText() {
		return this.img.getAttribute("alt");
	}
	
	

}
