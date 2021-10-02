package com.spoonconsulting.lightning;

import framework.components.api.Renderable;

public interface IStep extends Renderable{

	public IStep setLabel(String label);
	
	public String getLabel();
	
	public IStep setActive(boolean b);
	
	public IStep setComplete(boolean b) ;
	
	public IStep setCurrent(boolean b);
	
	public Boolean isCurrent();
	
	public IStep setHasError(boolean b);
	
	public Boolean getHasError();
	
	public Boolean isComplete();
	
	public Boolean isActive();
	
	public IStep setValue(String value) ;
	
	public String getValue();
	
}
