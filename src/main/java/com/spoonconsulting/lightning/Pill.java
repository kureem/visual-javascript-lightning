package com.spoonconsulting.lightning;

import com.spoonconsulting.lightning.enums.Size;

import framework.components.JSContainer;

public class Pill extends JSContainer{

	private JSContainer pillIconContainer = new JSContainer("pill-icon-container", "div");
	
	private JSContainer pillAction = new JSContainer("pill-action", "a");
	
	private JSContainer pillLabel = new JSContainer("label","span");
	
	private ButtonIcon closeButton = new ButtonIcon("closeButton", "utility:close");
	
	public final static String VARIANT_PLAIN_LINK = "plainLink";
	
	public final static String VARIANT_LINK = "link";
	
	public final static String VARIANT_PLAIN = "plain";
	
	public Pill(String name) {
		super(name, "div");
		addClass("slds-pill");
		addClass("slds-pill_link");
		pillIconContainer.addClass("slds-pill__icon_container");
		
		addChild(pillAction);
		pillAction.setAttribute("href", "javascript:void(0);");
		
		pillAction.addClass("slds-pill__action");
		pillLabel.addClass("slds-pill__label");
		pillAction.addChild(pillLabel);
		addChild(closeButton);

		setVariant(VARIANT_PLAIN_LINK);
	}
	
	
	public Pill addAvatar(Avatar avatar) {
		clearChildren();
		pillIconContainer.clearChildren();
		pillIconContainer.addChild(avatar);
		avatar.setSize(Size.MEDIUM);
		addChild(pillIconContainer).addChild(pillAction).addChild(closeButton);
		setRendered(false);
		return this;
	}
	
	public Pill addIcon(IconContainer ctn) {
		clearChildren();
		pillIconContainer.clearChildren();
		
		pillIconContainer.addChild(ctn);
		
		addChild(pillIconContainer).addChild(pillAction).addChild(closeButton);
		setRendered(false);
		return this;
	}
	
	public Pill setAriaSelected(String s) {
		setAttribute("aria-selected", s);
		return this;
	}
	
	public String getAriaSelected() {
		return getAttribute("aria-selected");
	}
	
	public Pill setHasError(boolean b) {
		if(b) {
			addClass("slds-has-error");
		}else {
			removeClass("slds-has-error");
		}
		return this;
	}
	
	public Pill setHref(String href) {
		setVariant("plainLink");
		pillAction.setAttribute("href", href);
		return this;
	}
	
	public String getHref() {
		return pillAction.getAttribute("href");
	}
	
	
	public Boolean getHasError() {
		return hasClass("slds-has-error");
	}
	
	public Pill setLabel(String label) {
		this.pillLabel.setHtml(label);
		return this;
	}
	
	public String getLabel() {
		return this.pillLabel.getHtml();
	}
	
	public Pill setRole(String role) {
		setAttribute("role", role);
		return this;
	}
	
	public String getRole() {
		return this.getAttribute("role");
	}
	
	public Pill setTabIndex(int index) {
		setAttribute("tabindex", index + "");
		return this;
	}
	public int getTabIndex() {
		String sindex= getAttribute("tabindex");
		if(sindex != null) {
			return Integer.parseInt(sindex);
		}else {
			return -1;
		}
	}
	
	public Pill setVariant(String variant) {
		setAttribute("variant", variant);
		if(variant == "plainLink") {
			addClass("slds-pill_link");
			pillAction.setTag("a");
			pillAction.addClass("slds-pill__action");
			
		}else {
			removeClass("slds-pill_link");
			pillAction.setTag("div");
			pillAction.setAttribute("class", null);
		}
		return this;
	}
	
	public String getVariant() {
		return getAttribute("variant");
	}

}
