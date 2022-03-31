package com.spoonconsulting.lightning;

import com.spoonconsulting.lightning.enums.InputType;

import framework.components.input.JSDateInput;
import framework.components.input.JSNumberInput;
import framework.components.input.JSTextInput;

@SuppressWarnings("rawtypes")
public class Input extends FormElement{

	private JSTextInput textInput = new JSTextInput("input");
	
	private JSDateInput dateInput = new JSDateInput("input");
	
	private JSNumberInput numberInput = new JSNumberInput("input");
	
	private CheckBox checkBox = new CheckBox("input");
	
	private CheckBoxButton checkBoxButton = new CheckBoxButton("input");
			
	private Toggle toggle = new Toggle("input");
	
	private String type = InputType.TEXT.getValue();
	
	private int min = -1;

	private int max = -1;

	private int maxLength = -1;

	private int minLength = -1;

	private boolean multiple = false;

	private String placeholder = null;

	private String pattern = null;

	private int step = -1;

	private boolean checked;
			
	@SuppressWarnings("unchecked")
	public Input(String name) {
		super(name);
		setInput(textInput);
	}
	
	private InputType getInputType(String stype) {
		if(stype == null) {
			return InputType.TEXT;
		}
		for(InputType type : InputType.values()) {
			if(type.getValue() == stype) {
				return type;
			}
		}
		return InputType.TEXT;
	}
	
	public Input setType(String stype) {
		return setType(getInputType(stype));
	}
	
	@SuppressWarnings("unchecked")
	public Input setType(InputType type) {
		if(type == null) {
			type = InputType.TEXT;
		}
		this.type = type.getValue();

		getControlCtn().removeClass("slds-grow");
		getLabel().setStyle("display", null);
		
		if(type.getGroup() == "text") {
			setInput(textInput);	
		}else if(type == InputType.DATE) {
			setInput(dateInput);
			dateInput.setType(framework.components.api.InputType.DATE);
		}else if(type == InputType.NUMBER) {
			setInput(numberInput);
			dateInput.setType(framework.components.api.InputType.DATE);
		}else if(type == InputType.DATETIME) {
			setInput(dateInput);
			dateInput.setType(framework.components.api.InputType.DATETIME_LOCAL);
		}else if(type == InputType.TIME) {
			setInput(dateInput);
			dateInput.setType(framework.components.api.InputType.TIME);
		}else if(type == InputType.CHECKBOX) {
			setInput(checkBox);
			super.getControlCtn().addClass("slds-grow");
			getLabel().setStyle("display", "none");
		}else if(type == InputType.CHECKBOX_BUTTON) {
			setInput(checkBoxButton);
			super.getControlCtn().addClass("slds-grow");
			getLabel().setStyle("display", "none");
		}else if(type == InputType.TOGGLE) {
			setInput(toggle);
			getLabel().setStyle("display", "none");
		}
		setRendered(false);
		
		return this;
	}

	public Input setMessageToggleActive(String message) {
		toggle.setMessageToggleActive(message);
		return this;
	}
	
	public String getMessageToggleActive() {
		return toggle.getMessageToggleActive();
	}
	
	public Input setMessageToggleInActive(String message) {
		toggle.setMessageToggleInActive(message);
		return this;
	}
	
	public Input setAutoComplete(boolean b) {
		String val = b?"true":null;
		textInput.setAttribute("autocomplete", val);
		dateInput.setAttribute("autocomplete", val);
		numberInput.setAttribute("autocomplete", val);
		getInput().setAttribute("autocomplete", val);
		return this;
	}
	
	public Input setChecked(boolean b) {
		checkBox.setValue(b);
		checkBoxButton.setValue(b);
		toggle.setValue(b);
		return this;
	}
	
	public String getMessageToggleInActive() {
		return toggle.getMessageToggleInActive();
	}

	@Override
	public FormElement setLabel(String label) {
		super.setLabel(label);
		checkBox.setLabel(label);
		checkBoxButton.setLabel(label);
		toggle.setLabel(label);
		return this;
	}

	public int getMax() {
		return max;
	}

	public Input setMax(int max) {
		this.max = max;
		this.numberInput.setMax((double)max);
		return this;
	}

	public int getMaxLength() {
		return maxLength;
	}

	public Input setMaxLength(int maxLength) {
		textInput.setMaxLength((double)maxLength);
		this.maxLength = maxLength;
		return this;
	}

	public int getMinLength() {
		return minLength;
	}

	public Input setMinLength(int minLength) {
		textInput.setAttribute("min-length", minLength + "");
		this.minLength = minLength;
		return this;
	}

	public boolean isMultiple() {
		return multiple;
	}

	public Input setMultiple(boolean multiple) {
		this.multiple = multiple;
		return this;
	}

	public String getPlaceholder() {
		return placeholder;
	}

	public Input setPlaceholder(String placeholder) {
		textInput.setPlaceHolder(placeholder);
		numberInput.setPlaceHolder(placeholder);
		this.placeholder = placeholder;
		return this;
	}

	public String getPattern() {
		return pattern;
	}

	public Input setPattern(String pattern) {
		textInput.setPattern(pattern);
		numberInput.setPattern(pattern);
		this.pattern = pattern;
		return this;
	}

	public int getStep() {
		return step;
	}

	public Input setStep(int step) {
		numberInput.setPattern(pattern);
		this.step = step;
		return this;
	}

	public String getType() {
		return type;
	}

	public int getMin() {
		return min;
	}

	public boolean isChecked() {
		return checked;
	}

	public JSTextInput getTextInput() {
		return textInput;
	}

	public JSDateInput getDateInput() {
		return dateInput;
	}

	public JSNumberInput getNumberInput() {
		return numberInput;
	}

	public CheckBox getCheckBox() {
		return checkBox;
	}

	public CheckBoxButton getCheckBoxButton() {
		return checkBoxButton;
	}

	public Toggle getToggle() {
		return toggle;
	}

	public Input setMin(int min) {
		this.min = min;
		numberInput.setMin((double)min);
		return this;
	}

}
