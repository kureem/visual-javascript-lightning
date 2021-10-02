package com.spoonconsulting.lightning;

import framework.components.JSContainer;

public class ProgressStep extends JSContainer implements IStep{
	
	
	private Button incomplete = new Button("incomplete");

	private ButtonIcon complete = new ButtonIcon("complete", "utility:success");
	
	public ProgressStep(String name) {
		super(name, "li");
		addClass("slds-progress__item");
		incomplete.addClass("slds-progress__marker");
		incomplete.getUILabel().addClass("slds-assistive-text");
		complete.addClass("slds-progress__marker").addClass("slds-progress__marker_icon");
		
		addChild(incomplete);
		
	}
	
	@Override
	public IStep setLabel(String label) {
		setAttribute("title", label);
		incomplete.getUILabel().setHtml(label);
		complete.setLabel(label);
		return this;
	}
	
	@Override
	public String getLabel() {
		return getAttribute("title");
	}
	
	@Override
	public IStep setActive(boolean b) {
		removeClass("slds-has-error");
		removeClass("slds-is-completed");
		removeClass("slds-is-active");
		clearChildren();
		addChild(incomplete);
		if(b) {
			addClass("slds-is-active");
		}else {
			removeClass("slds-is-active");
		}
		setRendered(false);
		return this;
	}
	
	@Override
	public IStep setComplete(boolean b) {
		removeClass("slds-has-error");
		removeClass("slds-is-completed");
		removeClass("slds-is-active");
		if(b) {
			clearChildren();
			addClass("slds-is-completed");
			addChild(complete);
			setRendered(false);
		}else {
			removeClass("slds-is-completed");
			setActive(false);
		}
		return this;
	}
	
	@Override
	public IStep setHasError(boolean b) {
		removeClass("slds-has-error");
		if(b) {
			setComplete(true);
			complete.setIconName("utility:error");
			addClass("slds-has-error");
		}
		return this;
	}
	
	@Override
	public Boolean getHasError() {
		return hasClass("slds-has-error");
	}
	
	@Override
	public Boolean isComplete() {
		return hasClass("slds-is-completed");
	}
	
	@Override
	public Boolean isActive() {
		return hasClass("slds-is-active");
	}
	
	@Override
	public IStep setValue(String value) {
		setAttribute("value", value);
		return this;
	}
	
	@Override
	public String getValue() {
		return getAttribute("value");
	}

	@Override
	public IStep setCurrent(boolean b) {
		addClass("slds-is-current");
		return this;
	}

	@Override
	public Boolean isCurrent() {
		return hasClass("slds-is-current");
	}
	

}
