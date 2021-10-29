package com.spoonconsulting.lightning;

import jsweet.lang.Array;
import jsweet.lang.Object;

public class DualListBox extends FormElement<Array<String>>{

	private DualingList input = new DualingList("input");
	
	public DualListBox(String name) {
		super(name);
		setInput(input);
	}
	
	public DualListBox setOptions(Array<Object> options) {
		input.setOptions(options);
		return this;
	}
	
	public Array<Object> getOptions(){
		return input.getOptions();
	}

}
