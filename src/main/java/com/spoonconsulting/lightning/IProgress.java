package com.spoonconsulting.lightning;

import framework.components.api.Renderable;
import jsweet.lang.Array;

public interface IProgress extends Renderable {

	public IProgress setCurrentStep(String value);

	public IStep getCurrentStep();

	public IProgress setHasError(boolean b);

	public Boolean getHasError();

	public IProgress setVariant(String variant);

	public String getVariant();

	public IProgress addStep(String label, String value);


	public Array<IStep> getSteps();
	
	public IStep getStep(String value);
	
	public IProgress clearSteps();
	
	public IProgress removeStep(IStep step);
	
	public IProgress setValue(String value);
	
	public String getValue();

}
