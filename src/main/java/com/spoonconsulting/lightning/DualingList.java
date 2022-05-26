package com.spoonconsulting.lightning;

import com.spoonconsulting.lightning.ListBox.ListBoxOption;
import com.spoonconsulting.lightning.enums.IconName;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.InputField;
import framework.components.api.Renderable;
import framework.components.api.ValidationException;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class DualingList extends JSContainer implements EventListener, InputField<Array<String>>{

	private JSContainer labelAvailable = new JSContainer("label-available", "span");
	private JSContainer labelSelected = new JSContainer("label-selected", "span");
	
	private ListBox available = new ListBox("available");
	
	private ListBox selected = new ListBox("selected");
	
	
	private ButtonIcon right = new ButtonIcon("right", IconName.UTILITY_RIGHT.getValue());
	private ButtonIcon left = new ButtonIcon("left", IconName.UTILITY_LEFT.getValue());
	private ButtonIcon up = new ButtonIcon("up", IconName.UTILITY_UP.getValue());
	private ButtonIcon down = new ButtonIcon("down", IconName.UTILITY_DOWN.getValue());
	
	
	
	private Array<Object> options = new Array<Object>();
	
	private Array<String> requiredOptions = new Array<String>();
	
	private boolean required = false;
	public DualingList(String name) {
		super(name, "div");
		addClass("slds-dueling-list");
		addChild("slds-assistive-text", "div", "slds-assistive-text").setAttribute("aria-live", "assertive");
		addChild("keyboard-interacton-2", "div", "slds-assistive-text").setHtml("Press Ctrl (Cmd on Mac) + Left Arrow or Ctrl (Cmd on Mac) + Right Arrow to move items between lists.");
		addChild("col1", "div", "slds-dueling-list__column slds-dueling-list__column_responsive")
			.addChild(labelAvailable.addClass("slds-form-element__label"))
			.addChild(new JSContainer("list-options", "div").addClass("slds-dueling-list__options").addChild(available));
		addChild("col1.1", "div", "slds-dueling-list__column")
		.addChild(right).addChild(left);
		addChild("col2", "div", "slds-dueling-list__column slds-dueling-list__column_responsive")
			.addChild(labelSelected.addClass("slds-form-element__label"))
			.addChild(new JSContainer("list-options", "div").addClass("slds-dueling-list__options").addChild(selected));
		addChild("col2.1", "div", "slds-dueling-list__column")
		.addChild(up).addChild(down);
	
		available.setCheckable(false);
		selected.setCheckable(false);
		available.setAttribute("data-source-list", "true").setAttribute("aria-multiselectable", "true").setAttribute("aria-disabled", "false").setAttribute("data-dropdown-element", null);
		selected.setAttribute("data-source-list", "true").setAttribute("aria-multiselectable", "true").setAttribute("aria-disabled", "false").setAttribute("data-dropdown-element", null);
		
		right.addEventListener(this, "click").addClass("slds-button_icon-container");
		left.addEventListener(this, "click").addClass("slds-button_icon-container");
		up.addEventListener(this, "click").addClass("slds-button_icon-container");
		down.addEventListener(this, "click").addClass("slds-button_icon-container");
		
		setSourceLabel("Available");
		setSelectedLabel("Selected");
		setAddButtonLabel("Move selection to Selected");
		setRemoveButtonLabel("Move selection to Available");
		setUpButtonLabel("Move selection up");
		setDownButtonLabel("Move selection down");
		available.removeClass("slds-dropdown").removeClass("slds-dropdown_fluid").removeClass("slds-dropdown_left");
		selected.removeClass("slds-dropdown").removeClass("slds-dropdown_fluid").removeClass("slds-dropdown_left");
		
	}
	
	public DualingList setOptions(Array<Object> options) {
		available.setOptions(options);
		this.options = options;
		return this;
	}
	
	public Array<Object> getOptions(){
		return options;
	}
	
	public void moveUp() {
		this.selected.moveUp();
	}
	
	public void moveDown() {
		this.selected.moveDown();
	}
	
	public void addSelected() {
		Integer max = getMax();
		if(max == null || selected.getUIOptions().length < max) {
			ListBoxOption sel = available.getSelectedOption();
			double index =  available.getChildren().indexOf(sel);
			if(sel != null) {
				sel.setChecked(false);
				sel.setRendered(false);
				available.removeChild(sel);
				if(available.getChildren().length > 0) {
					if(index >= available.getChildren().length) {
						index = available.getChildren().length -1;
					}
						
					ListBoxOption newSel = available.getUIOptions().$get(index);
					String newVal = newSel.getValue();
					available.setValue(newVal);
				}
				
				selected.addChild(sel);
				available.setRendered(false);
			}
		}
	}
	
	public void removeSelected() {
		Integer min = getMin();
		
		if(min == null || selected.getUIOptions().length > min) {
			ListBoxOption sel = selected.getSelectedOption();
			double index =  selected.getChildren().indexOf(sel);
			if(sel != null) {
				sel.setChecked(false);
				sel.setRendered(false);
				selected.removeChild(sel);
				
				if(selected.getChildren().length > 0) {
					if(index >= selected.getChildren().length) {
						index = selected.getChildren().length -1;
					}
						
					ListBoxOption newSel = selected.getUIOptions().$get(index);
					String newVal = newSel.getValue();
					selected.setValue(newVal);
				}
				
				available.addChild(sel);
				selected.setRendered(false);
			}
		}
	}
	
	@Override
	public void performAction(Renderable source, Event evt) {
		if(source.getName() == "up") {
			moveUp();
		}else if(source.getName() == "down") {
			moveDown();
		}else if(source.getName() == "right") {
			addSelected();
		}else if(source.getName() == "left"){
			removeSelected();
		}
	}

	@Override
	public Array<String> getValue() {
		Array<String> result = new Array<String>();
		for(Object o : selected.getOptions()) {
			String val = (String)o.$get("value");
			result.push(val);
		}
		return result;
	}
	

	@Override
	public void setValue(Array<String> val) {
		Array<Object> result = new Array<Object>();
		Array<Object> tmp = new Array<Object>();
		for(Object o : options) {
			String sval = (String)o.$get("value");
			if(val.indexOf(sval)>=0) {
				result.push(o);
			}else {
				tmp.push(o);
			}
			
		}
		
		selected.setOptions(result);
		available.setOptions(tmp);
		this.options = tmp;
	}

	@Override
	public void validate() throws ValidationException {
		Array<String> value = getValue();
		
		if(isRequired()) {
			if(value.length == 0) {
				throw new ValidationException(ValidationException.valueMissing);
			}
		}
		
		int max = getMax();
		int min = getMin();
		if(value.length > max) {
			throw new ValidationException(ValidationException.rangeOverflow);
		}
		if(value.length < min) {
			throw new ValidationException(ValidationException.rangeOverflow);
		}
		Array<String> requiredOpts = getRequiredOptions();
		for(String s : requiredOpts) {
			if(value.indexOf(s)< 0) {
				throw new ValidationException(ValidationException.valueMissing);
			}
		}
	}

	@Override
	public String getBinding() {
		return getName();
	}

	@Override
	public InputField<Array<String>> setBinding(String binding) {
		setName(binding);;
		return this;
	}

	@Override
	public InputField<Array<String>> setRequired(boolean b) {
		this.required = b;
		return this;
	}
	
	public DualingList setAddButtonLabel(String label) {
		this.right.setTitle(label);
		return this;
	}
	
	public String getAddButtonLabel() {
		return this.right.getTitle();
	}
	
	public DualingList setDisableReordering(boolean b) {
		getChild("col2.1").setStyle("display", b?"none":null);
		return this;
	}
	
	public Boolean isDisableReordering() {
		return getChild("col2.1").getStyle("display") == "none";
	}
	
	public DualingList setDisabled(boolean b) {
		left.setDisabled(b);
		right.setDisabled(b);
		up.setDisabled(b);
		down.setDisabled(b);
		selected.setAttribute("aria-disabled", b?"true":"false");
		available.setAttribute("aria-disabled",b?"true":"false");

		if(b) {
			getChild("col1").getChild("list-options").addClass("slds-is-disabled");
			getChild("col2").getChild("list-options").addClass("slds-is-disabled");
		}else {
			getChild("col1").getChild("list-options").removeClass("slds-is-disabled");
			getChild("col2").getChild("list-options").removeClass("slds-is-disabled");
		}
		return this;
	}
	
	public Boolean isDisabled() {
		return left.isDisabled();
	}
	
	public DualingList setDownButtonLabel(String label) {
		down.setTitle(label);
		return this;
	}
	
	public String getDownButtonLabel() {
		return down.getTitle();
	}
	
	public DualingList setMax(int max) {
		setAttribute("max", max + "");
		return this;
	}
	
	public Integer getMax() {
		String smax = getAttribute("max");
		if(smax != null) {
			return Integer.parseInt(smax);
		}else {
			return null;
		}
	}
	
	public DualingList setMin(int min) {
		setAttribute("min", min + "");
		return this;
	}
	
	public Integer getMin() {
		String smin = getAttribute("min");
		if(smin != null) {
			return Integer.parseInt(smin);
		}else {
			return null;
		}
	}

	
		
	public DualingList setRemoveButtonLabel(String label) {
		this.left.setTitle(label);
		return this;
	}
	
	public String getRemoveButtonLabel() {
		return this.left.getTitle();
	}

	public Array<String> getRequiredOptions() {
		return requiredOptions;
	}

	public DualingList setRequiredOptions(Array<String> requiredOptions) {
		this.requiredOptions = requiredOptions;
		return this;
	}

	public boolean isRequired() {
		return required;
	}

	public DualingList setSourceLabel(String label) {
		this.labelAvailable.setHtml(label);
		return this;
	}
	
	public String getSourceLabel() {
		return this.labelAvailable.getHtml();
	}
	
	public DualingList setUpButtonLabel(String label) {
		this.up.setTitle(label);
		return this;
	}
	
	public String getUpButtonLabel() {
		return this.up.getTitle();
	}
	
	
	public DualingList setSelectedLabel(String label) {
		this.labelSelected.setHtml(label);
		return this;
	}
	
	public String getSelectedLabel() {
		return this.labelSelected.getHtml();
	}
	

}
