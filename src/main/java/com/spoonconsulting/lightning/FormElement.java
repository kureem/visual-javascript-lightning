package com.spoonconsulting.lightning;

import com.spoonconsulting.lightning.enums.Variants.FormElementVariant;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.InputField;
import framework.components.api.Renderable;
import framework.components.api.ValidationException;
import jsweet.dom.Event;

public class FormElement<T> extends JSContainer implements InputField<T>{
	
	private JSContainer labelCtn = new JSContainer("label-ctn", "label");
	private JSContainer required = new JSContainer("required", "abbr");
	private JSContainer label = new JSContainer("label", "span");
	private JSContainer controlCtn = new JSContainer("control-ctn", "div");
	private InputField<T> input;
	private T value;
	
	private JSContainer formElementIcon = new JSContainer("form-element-icon", "div");
	private Help fieldLevelHelp = new Help("fieldLevelHelp");

	private JSContainer help = new JSContainer("help", "div");
	
	private FormElementVariant variant = FormElementVariant.STANDARD;

	public FormElement(String name, InputField<T> input) {
		super(name, "div");
		addClass("slds-form-element");
		addChild(labelCtn);
		formElementIcon.addClass("slds-form-element__icon").setStyle("display", "none");
		formElementIcon.addChild(fieldLevelHelp);
		addChild(formElementIcon);
		labelCtn.addClass("slds-form-element__label");
		required.addClass("slds-required").setAttribute("title", "required");
		labelCtn.addChild(required);
		labelCtn.addChild(label);
		addChild(controlCtn);
		controlCtn.addClass("slds-form-element__control");
		setInput(input);
		addChild(help);
		help.addClass("slds-form-element__help");
		help.setStyle("display", "none");
		setRequired(false);
	}
	
	public FormElement(String name) {
		super(name, "div");
		addClass("slds-form-element");
		addChild(labelCtn);
		formElementIcon.addClass("slds-form-element__icon").setStyle("display", "none");
		formElementIcon.addChild(fieldLevelHelp);
		addChild(formElementIcon);
		labelCtn.addClass("slds-form-element__label");
		required.addClass("slds-required").setAttribute("title", "required");
		labelCtn.addChild(required);
		labelCtn.addChild(label);
		addChild(controlCtn);
		controlCtn.addClass("slds-form-element__control");
		addChild(help);
		help.addClass("slds-form-element__help");
		help.setStyle("display", "none");
		setRequired(false);
	}
	
	
	public FormElement<T> setRequired(boolean b) {
		required.setStyle("display", b?null:"none");
		return this;
	}
	
	
	public FormElement<T> setLabel(String label) {
		this.label.setHtml(label);
		return this;
	}
	
	public FormElement<T> setFieldLevelHelp(String help){
		if(help != null) {
			this.formElementIcon.setStyle("display", null);
			this.fieldLevelHelp.setContent(help);
		}else {
			this.formElementIcon.setStyle("display", "none");
		}
		return this;
	}
	
	public FormElement<T> setInput(InputField<T> input) {
		input.addClass("slds-input");
		controlCtn.clearChildren();
		controlCtn.setRendered(false);
		controlCtn.addChild(input);
		this.input = input;
		if(value != null) {
			setValue(value);
		}
		this.input.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				fireListener("change", evt);
			}
		}, "change");
		return this;
	}
	
	
	public JSContainer getControlCtn() {
		return this.controlCtn;
	}

	protected JSContainer getRequired() {
		return required;
	}


	public JSContainer getLabel() {
		return label;
	}


	protected InputField<T> getInput() {
		return input;
	}


	@Override
	public T getValue() {
		return input.getValue();
	}


	@Override
	public void setValue(T val) {
		this.value = val;
		input.setValue(val);
		
	}


	@Override
	public void validate() throws ValidationException {
		this.input.validate();
	}


	@Override
	public String getBinding() {
		return getName();
	}


	@Override
	public InputField<T> setBinding(String binding) {
		setName(binding);
		return this;
	}


	public FormElement<T> setDisabled(boolean b){
		input.setAttribute("disabled", b?"disabled":null);
		return this;
	}
	
	public FormElement<T> setError(String error){
		addClass("slds-has-error");
		help.setStyle("display", null).setHtml(error);
		return this;
	}
	
	public FormElement<T> clearError(){
		removeClass("slds-has-error");
		return this;
	}
	
	public FormElement<T> setHelp(String help){
		this.help.setStyle("display", null);
		this.help.setHtml(help);
		return this;
	}
	
	public FormElement<T> setShowHelp(boolean b){
		this.help.setStyle("display", b? null:"none");
		return this;
	}
	
	public FormElement<T> setVariant(FormElementVariant variant) {
		this.variant = variant;
		removeClass("slds-form-element_horizontal");
		removeClass("slds-form-element_stacked");
		labelCtn.removeClass("slds-assistive-text");
		
		if(variant == FormElementVariant.LABEL_INLINE) {
			addClass("slds-form-element_horizontal");
		}else if(variant == FormElementVariant.LABEL_STACKED) {
			addClass("slds-form-element_stacked");
		}else if(variant == FormElementVariant.LABEL_HIDDEN) {
			labelCtn.addClass("slds-assistive-text");
		}
		return this;
	}
	
	public FormElement<T> setVariant(String variant){
		if(variant != null) {
			if(variant == FormElementVariant.LABEL_HIDDEN.getValue()) {
				setVariant(FormElementVariant.LABEL_HIDDEN);
			}else if(variant == FormElementVariant.LABEL_INLINE.getValue()) {
				setVariant(FormElementVariant.LABEL_INLINE);
			}else if(variant == FormElementVariant.LABEL_STACKED.getValue()) {
				setVariant(FormElementVariant.LABEL_STACKED);
			}else {
				setVariant(FormElementVariant.STANDARD);
			}
		}else {
			setVariant(FormElementVariant.STANDARD);
		}
		return this;
	}
	
	public String getVariant() {
		if(variant != null)
			return this.variant.getValue();
		return FormElementVariant.STANDARD.getValue();
	}

}
