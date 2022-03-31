package com.spoonconsulting.lightning;

import framework.components.api.ValidationException;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class DualListBox extends FormElement<Array<String>> {

	private DualingList input = new DualingList("input");

	public DualListBox(String name) {
		super(name);
		setInput(input);
		input.removeClass("slds-input");
		
		//Select at least 3 options
		//Select at most 2 options
	}
	
	

	@Override
	protected void handleValidationException(ValidationException e) {
		Integer max = getMax();
		Integer min = getMin();
		if(max == null && min != null) {
			setMessageWhenRangeUnderflow("Select at least {0} options".replace("{0}", min + ""));
		}else if(min == null && max != null) {
			setMessageWhenRangeOverflow("Select at most {0} options".replace("{0}", max + ""));
		}else if(min != null && max != null) {
			setMessageWhenRangeOverflow("Select at least {0} options [and a maximum of {1}]".replace("{0}", min + "").replace("{1}", max + ""));
			setMessageWhenRangeUnderflow("Select at least {0} options [and a maximum of {1}]".replace("{0}", min + "").replace("{1}", max + ""));
		}
		super.handleValidationException(e);
	}



	public DualListBox setOptions(Array<Object> options) {
		input.setOptions(options);
		return this;
	}

	public Array<Object> getOptions() {
		return input.getOptions();
	}

	public DualListBox setAddButtonLabel(String label) {
		input.setAddButtonLabel(label);
		return this;
	}

	public String getAddButtonLabel() {
		return input.getAddButtonLabel();
	}

	public DualListBox setDisableReordering(boolean b) {
		input.setDisableReordering(b);
		return this;
	}

	public Boolean isDisableReordering() {
		return input.isDisableReordering();
	}

	public DualListBox setDownButtonLabel(String label) {
		input.setDownButtonLabel(label);
		return this;
	}

	public String getDownButtonLabel() {
		return input.getDownButtonLabel();
	}

	public DualListBox setMax(int max) {
		input.setMax(max);
		return this;
	}

	public Integer getMax() {
		return input.getMax();
	}

	public DualListBox setMin(int min) {
		input.setMin(min);
		return this;
	}

	public Integer getMin() {
		return input.getMin();
	}

	public DualListBox setRemoveButtonLabel(String label) {
		input.setRemoveButtonLabel(label);
		return this;
	}

	public String getRemoveButtonLabel() {
		return input.getRemoveButtonLabel();
	}

	public Array<String> getRequiredOptions() {
		return input.getRequiredOptions();
	}

	public DualListBox setRequiredOptions(Array<String> requiredOptions) {
		input.setRequiredOptions(requiredOptions);
		return this;
	}

	public DualListBox setSourceLabel(String label) {
		input.setSourceLabel(label);
		return this;
	}

	public String getSourceLabel() {
		return input.getSourceLabel();
	}

	public DualListBox setUpButtonLabel(String label) {
		input.setUpButtonLabel(label);
		return this;
	}

	public String getUpButtonLabel() {
		return input.getUpButtonLabel();
	}

	@Override
	public FormElement<Array<String>> setRequired(boolean b) {
		if(input != null)
			input.setRequired(b);
		return super.setRequired(b);
	}

	@Override
	public FormElement<Array<String>> setDisabled(boolean b) {
		if(input != null)
			input.setDisabled(b);

		return super.setDisabled(b);
	}

	public Boolean isRequired() {
		if(input != null)
			return input.isRequired();
		return false;
	}

	public Boolean isDisabled() {
		if(input != null)
			return input.isDisabled();
		return false;
		
	}

	
	public DualListBox setSelectedLabel(String label) {
		this.input.setSelectedLabel(label);
		return this;
	}
	
	public String getSelectedLabel() {
		return this.input.getSelectedLabel();
	}
}
