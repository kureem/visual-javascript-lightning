package com.spoonconsulting.lightning;

import com.spoonconsulting.lightning.enums.IconName;

import framework.components.JSContainer;

public class DataGridCell extends JSContainer{

	private JSContainer label = new JSContainer("label", "span");
	
	private JSContainer content = new JSContainer("content", "div");
	
	private JSContainer factory = new JSContainer("factory", "div");

	private ButtonIcon edit = new ButtonIcon("edit", IconName.UTILITY_EDIT.getValue());
	
	public static String ALIGNMENT_END = "end";
	
	public static String ALIGNMENT_START = "start";
	
	public static String ALIGNMENT_CENTER = "center";
	
	public static String ALIGNMENT_SPREAD = "spread";
	
	public DataGridCell(String name) {
		super(name, "div");
		setAttribute("role", "gridcell");

		addChild(factory);
		
		
		factory.addClass("slds-grid");
	
		content.addClass("slds-truncate");
		factory.addChild(content);
		
		content.addChild(label);
		edit.setAttribute("data-navigation", "enable");
		edit.addClass("slds-cell-edit__button").addClass("slds-m-left_x-small");
		edit.getIcon().setAttribute("class", "slds-button__icon slds-button__icon_hint slds-button__icon_lock slds-button__icon_small slds-button__icon_edit slds-icon slds-icon-text-default slds-icon_xx-small");
		factory.addChild(edit);
		edit.setStyle("display", "none");
	}
	
	public DataGridCell setEditable(boolean b) {
		if(b) {
			edit.setStyle("display", null);
		}else {
			edit.setStyle("display", "none");
		}
		return this;
	}
	
	public Boolean isEditable() {
		return edit.getStyle("display") != "none";
	}
	
	public DataGridCell setLabel(String label) {
		setAttribute("data-label", label);
		this.label.setHtml(label);
		return this;
	}
	
	public String getLabel() {
		return this.label.getHtml();
	}
	
	public JSContainer getContent() {
		return this.content;
	}
	
	public DataGridCell setAlignment(String alignment) {
		factory.removeClass("slds-grid_align-center");
		factory.removeClass("slds-grid_align-start");
		factory.removeClass("slds-grid_align-end");
		factory.removeClass("slds-grid_align-spread");
		factory.addClass("slds-grid_align-" + alignment);
		return this;
		
	}

}
