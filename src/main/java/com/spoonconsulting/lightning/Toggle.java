package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import framework.components.api.InputField;
import framework.components.api.ValidationException;
import framework.components.input.JSCheckBox;

public class Toggle extends JSContainer implements InputField<Boolean> {

	private JSContainer label = new JSContainer("label", "span");
	
	private JSCheckBox checkBox = new JSCheckBox("checkbox");
	
	private JSContainer fauxContainer = new JSContainer("fauxContainer", "span");
	
	private JSContainer faux = new JSContainer("faux", "span");
	
	private JSContainer on = new JSContainer("on", "span");
	
	private JSContainer off = new JSContainer("off", "span");
	
	public Toggle(String name) {
		super(name, "label");
		addClass("slds-checkbox_toggle").addClass("slds-grid");
		label.addClass("slds-form-element__label");
		addChild(label);
		addChild(checkBox);
		fauxContainer.addClass("slds-checkbox_faux_container");
		addChild(fauxContainer);
		
		faux.addClass("slds-checkbox_faux");
		on.addClass("slds-checkbox_on");
		off.addClass("slds-checkbox_off");
		fauxContainer.addChild(faux);
		fauxContainer.addChild(on);
		fauxContainer.addChild(off);
		checkBox.setAttribute("aria-describedby", fauxContainer.getId());
	}
	
	
	public Toggle setMessageToggleActive(String message) {
		on.setHtml(message);
		return this;
	}
	
	public String getMessageToggleActive() {
		return on.getHtml();
	}
	
	public Toggle setMessageToggleInActive(String message) {
		this.off.setHtml(message);
		return this;
	}
	
	public String getMessageToggleInActive() {
		return off.getHtml();
	}
	
	public Toggle setLabel(String label) {
		this.label.setHtml(label);
		return this;
	}
	
	public String getLabel() {
		return this.label.getHtml();
	}


	@Override
	public Boolean getValue() {
		return checkBox.getValue();
	}


	@Override
	public void setValue(Boolean val) {
		this.checkBox.setValue(val);
	}


	@Override
	public void validate() throws ValidationException {

		this.checkBox.validate();
	}


	@Override
	public String getBinding() {
		return getName();
	}


	@Override
	public InputField<Boolean> setBinding(String binding) {
		setName(binding);
		return this;
	}


	@Override
	public InputField<Boolean> setRequired(boolean b) {
		checkBox.setRequired(b);
		return this;
	}

}
