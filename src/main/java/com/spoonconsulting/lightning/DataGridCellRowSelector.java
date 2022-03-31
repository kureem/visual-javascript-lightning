package com.spoonconsulting.lightning;

import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;

public class DataGridCellRowSelector extends DataGridCell{

	
	private CheckBox checkbox = new CheckBox("checkbox");
	public DataGridCellRowSelector(String name) {
		super(name);
		getContent().clearChildren();
		getContent().addChild(checkbox);
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
	
	public DataGridCellRowSelector setChecked(boolean b) {
		checkbox.setValue(b);
		return this;
	}

}
