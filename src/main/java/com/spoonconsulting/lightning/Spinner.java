package com.spoonconsulting.lightning;

import framework.components.JSContainer;

public class Spinner extends JSContainer{
	
	private String alternativeText = "Loading";

	public Spinner(String name ) {
		super(name, "div");
		
		addClass("slds-spinner");
		
		setAttribute("role", "status");
		refresh();
		
	}
	
	public void refresh() {
		setHtml("<span class=\"slds-assistive-text\">"+this.alternativeText+"</span>\r\n"
				+ "        <div class=\"slds-spinner__dot-a\"></div>\r\n"
				+ "        <div class=\"slds-spinner__dot-b\"></div>");
	
	}
	
	
	
	public String getAlternativeText() {
		return alternativeText;
	}

	public void setAlternativeText(String alternativeText) {
		this.alternativeText = alternativeText;
		refresh();
	}

	public Spinner setSize(Size size) {
		return setSize(size != null ? size.getValue() : (String)null);
	}
	
	public Spinner setSize(String size) {
		for(Size s : Size.values()) {
			removeClass("slds-spinner_" + s.getValue());
		}
		if(size != null)
			addClass("slds-spinner_" + size);
		return this;
	}
	
	public Spinner setVariant(String variant) {
		for(Variant v : Variant.values()) {
			if(v != Variant.BASE)
				removeClass("slds-spinner_" + v.getValue());
		}
		if(variant != Variant.BASE.getValue() && variant != null)
			addClass("slds-spinner_" + variant);
		
		return this;
	}
	
	
	public Spinner setVariant(Variant variant) {
		return setVariant(variant != null ? variant.getValue() : (String)null);
	}
	
	public Spinner setInlined(boolean b) {
		if(b) {
			addClass("slds-spinner_inline");
		}else {
			removeClass("slds-spinner_inline");
		}
		return this;
	}
	
	
	
	public Spinner setDelayed(boolean b) {
		if(b) {
			addClass("slds-spinner_delayed");
		}else {
			removeClass("slds-spinner_delayed");
		}
		return this;
	}

}
