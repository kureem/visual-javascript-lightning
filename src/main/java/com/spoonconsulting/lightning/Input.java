package com.spoonconsulting.lightning;

import framework.components.input.JSDateInput;
import framework.components.input.JSNumberInput;
import framework.components.input.JSTextInput;
import framework.components.input.JSTimeInput;

public class Input extends FormElement{

	private JSTextInput textInput = new JSTextInput("input");
	
	private JSDateInput dateInput = new JSDateInput("input");
	
	private JSTimeInput timeInput = new JSTimeInput("input");
	
	
	private JSNumberInput numberInput = new JSNumberInput("input");
	
			
			
	public Input(String name) {
		super(name);
		setInput(textInput);
	}

}
