package com.spoonconsulting.lightning;

import jsweet.lang.Array;
import jsweet.lang.Object;

public class ComboBox extends FormElement<String>{

	private BaseComboBox combo;
	
	private String messageWhenValueMissing = "This field is required";
	
	public ComboBox(String name) {
		super(name, new BaseComboBox("combo"));
		this.combo = (BaseComboBox)getInput();
		this.combo.removeClass("slds-input");
	}
	
	
	public ComboBox setDisabled(boolean b) {
		combo.setDisabled(b);
		return this;
	}
	
	public boolean isDisabled() {
		return combo.isDisabled();
	}
	
	public ComboBox setDropdownAlignment(String alignment) {
		combo.setDropdownAlignment(alignment);
		return this;
		
	}
	
	public String getDropdownAlignment() {
		return combo.getDropdownAlignment();
	}


	public String getMessageWhenValueMissing() {
		return messageWhenValueMissing;
	}


	public void setMessageWhenValueMissing(String messageWhenValueMissing) {
		this.messageWhenValueMissing = messageWhenValueMissing;
	}
	
	
	
	public ComboBox setOptions(Array<Object> options) {
		combo.setOptions(options);
		return this;
	}
	
	
	public void blur() {
		combo.blur();
	}
	
	public Boolean checkValidity() {
		return combo.checkValidity();
	}
	
	public void setCustomValidity(String message, String type, String description) {
		combo.setCustomValidity(message, type, description);
	}
	
	

}
