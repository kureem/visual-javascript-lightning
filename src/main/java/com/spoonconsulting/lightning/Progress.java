package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import jsweet.lang.Array;

public class Progress extends AbstractProgress implements IProgress {

	private JSContainer progressList = new JSContainer("progress-list", "ol");

	private ProgressBar progressBar = new ProgressBar("progressBar");

	public Progress(String name) {
		super(name, "div");  
		addClass("slds-progress");
		addChild(progressList);
		addChild(progressBar);
		progressBar.setSize(Size.EXTRA_SMALL);
		progressList.addClass("slds-progress__list");
		setVariant("base");
	}

	public Progress addStep(IStep step) {
		progressList.addChild(step);
		return this;
	}

	@SuppressWarnings({ "rawtypes", "unchecked" })
	public Array<IStep> getSteps() {
		Array result = progressList.getChildren();
		return result;
	}

	@Override
	public IProgress clearSteps() {
		progressList.clearChildren();
		progressList.setRendered(false);
		return this;
	}

	@Override
	public IProgress addStep(String label, String value) {
		ProgressStep step = new ProgressStep(label);
		step.setLabel(label);
		step.setValue(value);
		progressList.addChild(step);
		return this;
	}

	

}
