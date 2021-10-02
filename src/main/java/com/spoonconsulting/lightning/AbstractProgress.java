package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import framework.components.api.Renderable;

public abstract class AbstractProgress extends JSContainer implements IProgress{

	public AbstractProgress(String name, String tag) {
		super(name, tag);
	}
	
	 
	
	@Override
	public IStep getStep(String value) {
		for(IStep step : getSteps()) {
			if(step.getValue() == value) {
				return step;
			}
		}
		return null;
	}

	@Override
	public IProgress setCurrentStep(String value) {
		boolean passedCurrent = false;
		for(IStep step : getSteps()) {
			if(step.getValue() == value) {
				step.setCurrent(true);
				passedCurrent = true;
				
			}else {
				step.setComplete(!passedCurrent);
			}
		}
		return this;
	}

	@Override
	public IStep getCurrentStep() {
		for(IStep step : getSteps()) {
			if(step.isCurrent()) {
				return step;
			}
		}
		return null;
	}

	@Override
	public IProgress setHasError(boolean b) {
		IStep step = getCurrentStep();
		step.setHasError(b);
		return this;
	}

	@Override
	public Boolean getHasError() {
		for(IStep step : getSteps()) {
			if(step.getHasError()) {
				return true;
			}
		}
		return false;
	}
	
	@Override
	public IProgress setVariant(String variant) {
		setAttribute("variant", variant);
		return this;
	}

	@Override
	public String getVariant() {
		return getAttribute("variant");
	}
	
	@Override
	public IProgress removeStep(IStep step) {
		Renderable parent = step.getParent();
		parent.removeChild(step);
		parent.setRendered(false);
		return this;
	}
	
	@Override
	public IProgress setValue(String value) {
		setCurrentStep(value);
		return this;
	}
	
	@Override
	public String getValue() {
		IStep current = getCurrentStep();
		if(current != null) {
			return current.getValue();
		}else {
			return null;
		}
	}

}
