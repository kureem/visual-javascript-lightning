package com.spoonconsulting.lightning;

import com.spoonconsulting.lightning.enums.Size;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.CustomEvent;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class ListBox extends JSContainer{
	
	private boolean checkable = false;

	public ListBox(String name) {
		super(name, "div");
		setAttribute("data-dropdown-element", "true")
		.setAttribute("role", "listbox")
		.addClass("slds-listbox")
		.addClass("slds-listbox_vertical")
		.addClass("slds-dropdown")
		.addClass("slds-dropdown_fluid")
		.addClass("slds-dropdown_left");
		
	}
	
	public boolean isCheckable() {
		return checkable;
	}

	public void setCheckable(boolean checkable) {
		this.checkable = checkable;
		for(ListBoxOption opt : getUIOptions()) {
			opt.setCheckable(checkable);
		}
		
	}

	public ListBox addOption(String value, String label) {
		ListBoxOption opt = new ListBoxOption(value, label);
		opt.setCheckable(checkable);
		addChild(opt);
		return this;
	}
	
	public ListBox addOption(Object obj) {
		String label = (String)obj.$get("label");
		String value = (String)obj.$get("value");
		return addOption(value,label);
	}
	
	public ListBox setOptions(Array<Object> options) {
		clearChildren();
		for(Object option : options) {
			addOption(option);
		}
		return this;
	}
	
	public ListBox setValue(String value) {
		for(Renderable r : getChildren()) {
			ListBoxOption opt = (ListBoxOption)r;
			if(opt.getValue() == value) {
				opt.setChecked(true);
			}else {
				opt.setChecked(false);
			}
		}
		return this;
	}
	
	public void moveUp() {
		ListBoxOption opt = getSelectedOption();
		if(opt != null) {
			opt.moveUp();
		}
	}
	
	public void moveDown() {
		ListBoxOption opt = getSelectedOption();
		if(opt != null) {
			opt.moveDown();
		}
	}
	
	public ListBoxOption getSelectedOption() {
		for(Renderable r : getChildren()) {
			ListBoxOption opt = (ListBoxOption)r;
			if(opt.isChecked()) {
				return opt;
			}
		}
		return null;
	}
	
	public ListBoxOption getOption(String value) {
		for(Renderable r : getChildren()) {
			ListBoxOption opt = (ListBoxOption)r;
			if(opt.getValue() == value) {
				return opt;
			}
		}
		return null;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Array<ListBoxOption> getUIOptions(){
		Array childrne = getChildren();
		return childrne;
	}
	
	public Array<Object> getOptions(){
		Array<Object> result = new Array<Object>();
		for(Renderable r : getChildren()) {
			ListBoxOption opt = (ListBoxOption)r;
			Object o = new Object();
			o.$set("value", opt.getValue());
			o.$set("label", opt.getLabel());
			result.push(o);
		}
		return result;
	}
	
	public String getValue() {
		for(Renderable r : getChildren()) {
			ListBoxOption opt = (ListBoxOption)r;
			if(opt.isChecked()) {
				return opt.getValue();
			}
		}
		return null;
	}
	
	
	public class ListBoxOption extends JSContainer implements EventListener{
		
		private JSContainer figure = new JSContainer("figure", "span");
		private JSContainer body = new JSContainer("body", "span");
		
		private IconContainer icon = new IconContainer("icon", "div");
		
		private JSContainer label = new JSContainer("label", "span");
		
		private boolean checkable = true;

		public ListBoxOption(String value, String label) {
			super(value, "div");
			setAttribute("role", "option")
			.setAttribute("aria-checked", "false")
			.setAttribute("aria-selected", "false")
			.addClass("slds-media")
			.addClass("slds-listbox__option")
			.addClass("slds-media_center")
			.addClass("slds-media_small")
			.addClass("slds-listbox__option_plain");
			
			addChild(figure).addChild(body);
			
			figure.addClass("slds-media__figure").addClass("slds-listbox__option-icon");
			body.addClass("slds-media__body");
			
			body.addChild(this.label);
			this.label.addClass("slds-truncate");
			
			icon.setIconName("utility:check");
			//slds-icon slds-icon-text-default slds-icon_x-small
			icon.getIcon().setSize(Size.EXTRA_SMALL);
			icon.getIcon().addClass("slds-icon-text-default");
			setLabel(label);
			setValue(value);
			addEventListener(this, "click");
		}
		
		public void moveUp() {
			ListBox bl = (ListBox)getParent();
			double currentIndex = bl.getChildren().indexOf(this);
			if(currentIndex > 0) {
				bl.removeChild(this);
				bl.addChildAt(currentIndex-1, this);
				bl.setRendered(false);
			}
		}
		
		public void moveDown() {
			ListBox bl = (ListBox)getParent();
			double currentIndex = bl.getChildren().indexOf(this);
			if(currentIndex < bl.getChildren().length -1) {
				bl.removeChild(this);
				bl.addChildAt(currentIndex+1, this);
				bl.setRendered(false);
			}
		}
		
		public void setCheckable(boolean b) {
			this.checkable = b;
			if(!b) {
				figure.setStyle("display", "none");
			}else {
				figure.setStyle("display", null);
			}
		}
		
		public ListBoxOption setValue(String value) {
			setAttribute("data-value", value);
			return this;
		}
		
		public String getValue() {
			return getAttribute("data-value");
		}
		
		public ListBoxOption setLabel(String label) {
			this.label.setHtml(label);
			this.label.setAttribute("title", label);
			return this;
		}
		
		public String getLabel() {
			return this.label.getHtml();
		}
		
		public ListBoxOption setChecked(boolean b) {
			if(b) {
				setAttribute("aria-checked", "true");
				setAttribute("aria-selected", "true");
				if(checkable) {
					figure.clearChildren();
					figure.addChild(icon);
				}else {
					addClass("slds-is-selected");
				}
			}else {
				setAttribute("aria-checked", "false");
				setAttribute("aria-selected", "false");
				if(checkable) {
					figure.clearChildren();
				}else {
					removeClass("slds-is-selected");
				}
				
			}
			setRendered(false);
			return this;
		}
		
		public Boolean isChecked() {
			return getAttribute("aria-checked") == "true";
		}

		@Override
		public void performAction(Renderable source, Event evt) {
			if(!isChecked()) {
				
				ListBox lb = (ListBox)getParent();
				String oldValue = lb.getValue();
				lb.setValue(getValue());
				CustomEvent onchange = new CustomEvent("change");
				onchange.$set("source", this);
				onchange.$set("value", getValue());
				onchange.$set("oldValue", oldValue);
				lb.fireListener("change", evt);
			}else {
				ListBox lb = (ListBox)getParent();
				String oldValue = lb.getValue();
				lb.setValue(null);
				CustomEvent onchange = new CustomEvent("change");
				onchange.$set("source", this);
				onchange.$set("value", null);
				onchange.$set("oldValue", oldValue);
				lb.fireListener("change", evt);
			}
		}
		
	}
	

}
