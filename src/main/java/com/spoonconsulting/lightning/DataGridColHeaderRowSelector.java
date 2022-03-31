package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;

public class DataGridColHeaderRowSelector extends JSContainer implements DataGridIColHeader{

	private CheckBox checkbox = new CheckBox("checkbox");
	public DataGridColHeaderRowSelector(String name) {
		super(name, "div");
		//setAttribute("scope", "col");
		setStyle("width", "32px");
		JSContainer wrapper = addChild("wrapper", "div");
		wrapper.setStyle("width", "32px");
		
		JSContainer cbwrapper = wrapper.addChild("cb-wrapper", "div", "slds-th__action slds-th__action_form slds-cell-fixed");
		cbwrapper.setStyle("width", "32px").setStyle("outline", "none");
		cbwrapper.addChild(checkbox);
		checkbox.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				fireListener("change", evt);
			}
		}, "change");
	}
	
	
	public Boolean isChecked() {
		return checkbox.getValue();
	}
	
	public DataGridColHeaderRowSelector setChecked(Boolean b) {
		checkbox.setValue(b);
		return this;
	}
	
	public DataGridColHeaderRowSelector setWidth(String width) {
		setStyle("width", width);
		getChild("wrapper").setStyle("width", width).getChild("cb-wrapper").setStyle("width", width);
		return this;
	}
	
	public String getWidth() {
		return getStyle("width");
	}
	

	
}
