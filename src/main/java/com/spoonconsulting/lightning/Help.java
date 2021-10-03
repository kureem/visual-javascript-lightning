package com.spoonconsulting.lightning;

import framework.components.JSContainer;

public class Help extends JSContainer{

	private ButtonIcon icon = new ButtonIcon("icon", "utility:info");
	public Help(String name) {
		super(name, "div");
		addChild(icon);
	}
	
	public Help setContent(String content) {
		setAttribute("title", content);
		return this;
	}
	
	

}
