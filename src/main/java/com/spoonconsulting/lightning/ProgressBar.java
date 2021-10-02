package com.spoonconsulting.lightning;

import framework.components.JSContainer;

public class ProgressBar extends JSContainer {
	
	private JSContainer value = new JSContainer("value", "span");

	private JSContainer assistiveText = new JSContainer("assistiveText", "span");
	public ProgressBar(String name) {
		super(name, "div");
		setAttribute("aria-valuemin", "0");
		setAttribute("aria-valuemax", "100");
		setAttribute("aria-valuenow", "50");
		setAttribute("aria-busy", "true");
		setAttribute("role", "progressbar");
		addClass("slds-progress-bar");
		addChild(value.addClass("slds-progress-bar__value"));
		value.addChild(assistiveText);
	}
	
	
	
	public ProgressBar setSize(Size size) {
		return setSize(size != null ? size.getValue(): (String)null);
	}
	
	public ProgressBar setSize(String size) {
		for(Size s : Size.values()) {
			removeClass("slds-progress-bar_" + s.getValue());
		}
		
		if(size != null) {
			addClass("slds-progress-bar_" + size);
		}
		return this;
	}
	
	
	public ProgressBar setValue(int percent) {
		value.setStyle("width", percent + "%");
		setAttribute("aria-valuenow",percent + "");
		assistiveText.setHtml("Progress:" + percent + "%");
		return this;
	}
	
	public int getValue() {
		if(getAttribute("aria-valuenow") != null)
			return Integer.parseInt(getAttribute("aria-valuenow"));
		return 0;
	}
	
	
	public ProgressBar setVariant(String variant) {
		
		setAttribute("variant", variant);
		removeClass("slds-progress-bar_circular");
		
		if(variant == "circuler")
			addClass("slds-progress-bar_" + variant);
		
		return this;
	}
	
	public String getVariant() {
		return getAttribute("variant");
	}
	

}
