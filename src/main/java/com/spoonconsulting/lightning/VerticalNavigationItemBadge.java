package com.spoonconsulting.lightning;

public class VerticalNavigationItemBadge extends VerticalNavigationItem{

	private Badge badge = new Badge("badge");
	
	public VerticalNavigationItemBadge(String name) {
		super(name);
		getAction().addChild(badge);
		badge.addClass("slds-col_bump-left");
		setBadgeCount(0);
	}
	
	public VerticalNavigationItemBadge setAssistiveText(String txt) {
		this.badge.setAssistiveText(txt);
		return this;
	}
	
	public String getAssistiveText() {
		return this.badge.getAssistiveText();
	}
	
	public VerticalNavigationItemBadge setBadgeCount(int count) {
		this.badge.setLabel(count + "");
		return this;
	}
	
	public int getBadgeCount() {
		return Integer.parseInt(this.badge.getLabel());
	}
}
