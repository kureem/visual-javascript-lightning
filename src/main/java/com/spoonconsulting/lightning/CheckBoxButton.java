package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import framework.components.api.InputField;
import framework.components.api.ValidationException;
import framework.components.input.JSCheckBox;

public class CheckBoxButton extends JSContainer implements InputField<Boolean> {

	private JSCheckBox checkBox = new JSCheckBox("input");

	private JSContainer faux = new JSContainer("faux", "label");

	private JSContainer label = new JSContainer("label", "span");

	public CheckBoxButton(String name) {
		super(name, "div");
		addChild(checkBox);
		addClass("slds-checkbox_add-button");
		checkBox.addClass("slds-assistive-text");
		addChild(faux);
		faux.addChild(label);
		label.addClass("slds-assistive-text");
	}

	public String getLabel() {
		return this.label.getHtml();
	}

	public CheckBoxButton setLabel(String label) {
		this.label.setHtml(label);
		return this;
	}

	public JSCheckBox getCheckBox() {
		return this.checkBox;
	}

	@Override
	public Boolean getValue() {
		return this.checkBox.getValue();
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
		return this.checkBox.getBinding();
	}

	@Override
	public InputField<Boolean> setBinding(String binding) {
		this.checkBox.setBinding(binding);
		return this;
	}

	@Override
	public InputField<Boolean> setRequired(boolean b) {
		this.checkBox.setRequired(b);
		return this;
	}
}
