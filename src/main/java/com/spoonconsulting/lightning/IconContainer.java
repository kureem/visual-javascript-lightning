package com.spoonconsulting.lightning;

public class IconContainer extends BaseLightning{

	private Icon icon = new Icon("icon", "utility:moneybag");
	
	public IconContainer(String name, String tag) {
		super(name, tag);
		addClass("slds-icon_container");
		addChild(icon);
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
