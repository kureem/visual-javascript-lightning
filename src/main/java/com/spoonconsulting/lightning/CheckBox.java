package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.InputField;
import framework.components.api.Renderable;
import framework.components.api.ValidationException;
import framework.components.input.JSCheckBox;
import jsweet.dom.Event;

public class CheckBox extends JSContainer implements InputField<Boolean> {

	private JSCheckBox checkbox = new JSCheckBox("input");
	
	private JSContainer checkBoxLabel = new JSContainer("checkbox-label", "label");
	
	private JSContainer label = new JSContainer("label", "span");
	
	public CheckBox(String name) {
		super(name, "span");
		addClass("slds-checkbox");
		addChild(checkbox);
		addChild(checkBoxLabel);
		checkBoxLabel.addClass("slds-checkbox__label");
		checkBoxLabel.addChild("faux", "span", "slds-checkbox_faux");
		label.addClass("slds-form-element__label");
		checkBoxLabel.addChild(label);
		checkBoxLabel.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				checkbox.getElement().click();
			}
		}, "click");
		
		checkbox.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {

				setValue(checkbox.isChecked());
			}
		}, "click");
	}
	
	
	protected JSContainer getCheckBoxLabel() {
		return this.checkBoxLabel;
	}
	
	public String getLabel() {
		return this.label.getHtml();
	}
	
	public CheckBox setLabel(String label) {
		this.label.setHtml(label);
		return this;
	}
	
	public JSCheckBox getCheckBox() {
		return this.checkbox;
	}

	@Override
	public Boolean getValue() {
		return this.checkbox.getValue();
	}

	@Override
	public void setValue(Boolean val) {
		this.checkbox.setValue(val);
	}

	@Override
	public void validate() throws ValidationException {
		this.checkbox.validate();
	}

	@Override
	public String getBinding() {
		return this.checkbox.getBinding();
	}

	@Override
	public InputField<Boolean> setBinding(String binding) {
		 this.checkbox.setBinding(binding);
		 return this;
	}

	@Override
	public InputField<Boolean> setRequired(boolean b) {
		this.checkbox.setRequired(b);
		return this;
	}
}
