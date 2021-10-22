package com.spoonconsulting.lightning;

import com.spoonconsulting.lightning.enums.Size;

import framework.components.JSContainer;

public class IconContainer extends BaseLightning{

	private Icon icon = new Icon("icon", "utility:moneybag");
	
	private JSContainer assistiveText = new JSContainer("assistive-text", "span");
	
	public IconContainer(String name, String tag) {
		super(name, tag);
		addClass("slds-icon_container");
		addChild(icon);
		addChild(assistiveText);
		assistiveText.addClass("slds-assistive-text");
	}
	
	
	public IconContainer setAssistiveText(String txt) {
		this.assistiveText.setHtml(txt);
		return this;
	}
	
	public String getAssistiveText() {
		return this.assistiveText.getHtml();
	}
	
	public IconContainer setIconName(String iconName) {
		icon.setIconName(iconName);
		String[] parts = iconName.split(":");
		setAttribute("class", "slds-icon_container " + "slds-icon-$0-$1".replace("$0", parts[0]).replace("$1", parts[1]));
		return this;
	}
	
	public Icon getIcon() {
		return icon;
	}
	
	public IconContainer setSize(Size size) {
		icon.setSize(size);
		return this;
	}

}
