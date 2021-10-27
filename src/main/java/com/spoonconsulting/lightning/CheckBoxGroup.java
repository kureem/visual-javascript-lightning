package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import framework.components.api.InputField;
import framework.components.api.Renderable;
import framework.components.api.ValidationException;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class CheckBoxGroup extends FormElement<Array<String>>{

	private InnerList list;
	
	public CheckBoxGroup(String name) {
		super(name);
		list = new InnerList(name, true);
		setInput(list);
	}
	
	protected CheckBoxGroup(String name, boolean ismulti) {
		super(name);
		list = new InnerList(name, ismulti);
		setInput(list);
	}
	
	public CheckBoxGroup setOptions(Array<Object> options) {
		list.setOptions(options);
		return this;
	}
	
	public Array<Object> getOptions(){
		return list.options;
	}
	
	
	public class InnerList extends JSContainer implements InputField<Array<String>>{

		private Array<jsweet.lang.Object> options = new Array<jsweet.lang.Object>();
		
		private boolean required = false;
		
		private boolean ismulti = true;
		
		public InnerList(String name, boolean ismulti) {
			super(name, "div");
			this.ismulti = ismulti;
		}
		
		
		public void setOptions(Array<jsweet.lang.Object> options) {
			this.options = options;
			this.clearChildren();
			for(jsweet.lang.Object option : options) {
				String value = (String) option.$get("value");
				String label = (String) option.$get("label");
				if(ismulti) {
					CheckBox cb = new CheckBox(value);
					cb.setAttribute("val", value);
					cb.setLabel(label);
					addChild(cb);
				}else {
					String name = getParent().getName() + "_radio";
					Radio cb = new Radio(name);
					cb.setAttribute("val", value);
					cb.setLabel(label);
					addChild(cb);
				}
			}
		}

		@Override
		public Array<String> getValue() {
			Array<String> result= new Array<String>();
			for(Renderable r : getChildren()) {
				InputField<Boolean> cb =(InputField<Boolean>)r;
				if(cb.getValue()) {
					result.push(cb.getAttribute("val"));
				}
			}
			return result;
		}

		@Override
		public void setValue(Array<String> val) {
			for(Renderable r : getChildren()) {
				String name = r.getAttribute("val");
				InputField<Boolean> cb = (InputField<Boolean>)r;
				cb.setValue(val.indexOf(name)>=0);
			}
		}

		@Override
		public void validate() throws ValidationException {
			if(required) {
				if(getValue().length <= 0) {
					ValidationException ve = new ValidationException(ValidationException.valueMissing);
					throw ve;
				}
			}
		}

		@Override
		public String getBinding() {
			return getName();
		}

		@Override
		public InputField<Array<String>> setBinding(String binding) {
			setName(binding);
			return this;
		}

		@Override
		public InputField<Array<String>> setRequired(boolean b) {
			this.required = b;
			return this;
		}
	}
}
