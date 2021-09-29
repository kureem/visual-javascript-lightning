package com.spoonconsulting.lightning;

import framework.components.JSContainer;

public class Icon extends JSContainer{

	private String iconName;
	
	public Icon(String name,String iconName) {
		super(iconName, "svg");
		addClass("slds-icon");
		//this(iconName.split(":")[0], iconName.split(":")[1]);
		setAttribute("focusable", "false");
		setAttribute("aria-hidden", "true");
		setIconName(iconName);
	}
	
	
	private Icon setIcon(String group, String name) {
		setHtml("<use xlink:href=\"/assets/icons/"+group+"-sprite/svg/symbols.svg#"+name+"\"></use>");
		return this;
	}
	
	public Icon setIconName(String iconName) {
		this.iconName = iconName;
		this.setIcon(iconName.split(":")[0], iconName.split(":")[1]);
		return this;
	}
	
	public String getIconName() {
		return this.iconName;
	}
	
	public Icon setSize(String size) {
		for(Size s : Size.values()) {
			removeClass("slds-icon_" + s.getValue());
		}
		if(size != null)
			addClass("slds-icon_" + size);
		return this;
	}
	
	public Icon setSize(Size size) {
		if(size != null)
			return setSize(size.getValue());
		else
			return setSize((String)null);
	}

}
