package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.InputField;
import framework.components.api.Renderable;
import framework.components.api.ValidationException;
import framework.components.input.JSRadio;
import jsweet.dom.Event;

public class Radio extends JSContainer implements InputField<Boolean> {

	private JSRadio radio = new JSRadio("input");

	private JSContainer radioLabel = new JSContainer("radio-label", "label");

	private JSContainer label = new JSContainer("label", "span");

	public Radio(String name) {
		super(name, "span");
		addClass("slds-radio");
		addChild(radio);
		addChild(radioLabel);
		radioLabel.addClass("slds-radio__label");
		radioLabel.addChild("faux", "span", "slds-radio_faux");
		label.addClass("slds-form-element__label");
		radioLabel.addChild(label);
		radioLabel.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				radio.getElement().click();
			}
		}, "click");
	}
	
	protected JSContainer getRadioLabel() {
		return this.radioLabel;
	}
	
	public String getLabel() {
		return this.label.getHtml();
	}
	
	public Radio setLabel(String label) {
		this.label.setHtml(label);
		return this;
	}
	
	public JSRadio getCheckBox() {
		return this.radio;
	}

	@Override
	public Boolean getValue() {
		return this.radio.getValue();
	}

	@Override
	public void setValue(Boolean val) {
		this.radio.setValue(val);
	}

	@Override
	public void validate() throws ValidationException {
		this.radio.validate();
	}

	@Override
	public String getBinding() {
		return this.radio.getBinding();
	}

	@Override
	public InputField<Boolean> setBinding(String binding) {
		 this.radio.setBinding(binding);
		 return this;
	}

	@Override
	public InputField<Boolean> setRequired(boolean b) {
		this.radio.setRequired(b);
		return this;
	}
}
