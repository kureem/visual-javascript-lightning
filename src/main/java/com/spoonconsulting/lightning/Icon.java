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
		String html = "<use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"$base-assets/icons/"+group+"-sprite/svg/symbols.svg#"+name+"\"></use>";
		html = html.replace("$base-assets", GlobalConfigs.BASE_ASSETS);
		//setHtml("<use xlink:href=\"/assets/icons/"+group+"-sprite/svg/symbols.svg#"+name+"\"></use>");
		setHtml(html);
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
