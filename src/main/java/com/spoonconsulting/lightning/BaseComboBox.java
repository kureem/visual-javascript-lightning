package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.InputField;
import framework.components.api.Renderable;
import framework.components.api.ValidationException;
import framework.components.input.JSTextInput;
import jsweet.dom.Event;
import jsweet.dom.HTMLInputElement;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class BaseComboBox extends JSContainer implements InputField<String>{

	private JSContainer combobox = new JSContainer("combobox", "div");
	private JSContainer formElement = new JSContainer("formElement", "div");
	private  JSTextInput input = new JSTextInput("input");
	
	private ListBox dropdown = new ListBox("dropdown");
	
	private JSContainer inputIconContainer = new JSContainer("input-icon-container", "div");
	
	private IconContainer inputIcon = new IconContainer("input-icon", "div");
	
	public final static String DROPDOWN_ALIGNMENT_BOTTOM_LEFT = "bottom-left";
	public final static String DROPDOWN_ALIGNMENT_TOP_LEFT = "top-left";
	
	public BaseComboBox(String name) {
		super(name, "div");
		addClass("slds-combobox_container");
		
		addChild(combobox);
		combobox.addClass("slds-combobox")
		.addClass("slds-dropdown-trigger")
		.addClass("slds-dropdown-trigger_click")
		.setAttribute("aria-expanded", "false")
		.setAttribute("aria-haspopup", "listbox")
		.setAttribute("role", "combobox");
		
		
		combobox.addChild(formElement);
		formElement.setAttribute("role", "none")
		.addClass("slds-combobox__form-element")
		.addClass("slds-input-has-icon")
		.addClass("slds-input-has-icon_right");
		
		input.addClass("slds-input")
		.addClass("slds-combobox__input")
		.setAttribute("role", "textbox")
		.setAttribute("autocomplete", "off")
		.setAttribute("aria-autocomplete", "none")
		.setAttribute("readonly", "true");
		
		formElement.addChild(input);
		
		inputIconContainer.addClass("slds-input__icon-group").addClass("slds-input__icon-group_right");
		inputIcon.setIconName("utility:down");
		inputIcon.addClass("slds-input__icon").addClass("slds-input__icon_right");
		inputIcon.setSize(Size.EXTRA_EXTRA_SMALL);
		inputIcon.getIcon().addClass("slds-icon-text-default");
		inputIconContainer.addChild(inputIcon);
		formElement.addChild(inputIconContainer);
		
		combobox.addChild(dropdown);
		//dropdown.addClass("effe");
		
		dropdown.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				String val = dropdown.getValue();
				input.setValue(val);
				setExpand(false);
				fireListener("change", evt);
				
			}
		}, "change");
		
		input.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {

				toggleDropdown();
			}
		}, "click");
		
	}
	
	public BaseComboBox setOptions(Array<Object> options) {
		this.dropdown.setOptions(options);
		return this;
	}
	
	public void toggleDropdown() {
		setExpand(!isExpanded());
	}
	
	public boolean isExpanded() {
		return combobox.getAttribute("aria-expanded") == "true";
	}
	
	public BaseComboBox setExpand(boolean b) {
		if(b) {
			combobox.setAttribute("aria-expanded", "true");
			combobox.addClass("slds-is-open");
			dropdown.addClass("slds-dropdown_length_with-icon-7");
		}else {
			combobox.setAttribute("aria-expanded", "false");
			combobox.removeClass("slds-is-open");
			dropdown.removeClass("slds-dropdown_length_with-icon-7");
		}
		return this;
	}

	@Override
	public String getValue() {
		return input.getValue();
	}

	@Override
	public void setValue(String val) {
		input.setValue(val);
		dropdown.setValue(val);
		
	}

	@Override
	public void validate() throws ValidationException {
		input.validate();
	}

	@Override
	public String getBinding() {
		return getAttribute("binding");
	}

	@Override
	public InputField<String> setBinding(String binding) {
		setAttribute("binding", binding);
		return this;
	}

	@Override
	public InputField<String> setRequired(boolean b) {
		input.setRequired(b);
		return this;
	}
	
	public BaseComboBox setDisabled(boolean b) {
		input.setDisabled(b);
		return this;
	}
	
	public Boolean isDisabled() {
		return input.getAttribute("disabled") == "true";
	}
	
	public BaseComboBox setDropdownAlignment(String alignment) {
		if(alignment == DROPDOWN_ALIGNMENT_BOTTOM_LEFT) {
			//slds-dropdown_bottom
			//slds-dropdown_bottom-left
			dropdown.addClass("slds-dropdown_bottom").addClass("slds-dropdown_bottom-left");
			
		}else {
			dropdown.removeClass("slds-dropdown_bottom").removeClass("slds-dropdown_bottom-left");
		}
		return this;
	}
	
	public String getDropdownAlignment() {
		return dropdown.hasClass("slds-dropdown_bottom")?DROPDOWN_ALIGNMENT_BOTTOM_LEFT: DROPDOWN_ALIGNMENT_TOP_LEFT;
	}
	
	public void blur() {
		HTMLInputElement in = (HTMLInputElement)input.getElement();
		if(in != null)
			in.blur();
	}
	
	public Boolean checkValidity() {
		HTMLInputElement in = (HTMLInputElement)input.getElement();
		if(in != null) {
			return in.checkValidity();
		}
		return null;
	}
	
	public BaseComboBox setCustomValidity(String message, String type, String description) {
		HTMLInputElement in = (HTMLInputElement)input.getElement();
		if(in != null)
			in.setCustomValidity(message);
		return this;
	}
	
	

}
