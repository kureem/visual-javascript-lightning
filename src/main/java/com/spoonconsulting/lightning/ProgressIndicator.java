package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import jsweet.lang.Array;

public class ProgressIndicator extends JSContainer implements IProgress {

	private Progress progress = new Progress("base");

	private Path path = new Path("path");

	private IProgress usedType = progress;

	public ProgressIndicator(String name) {
		super(name, "div");
		addChild(progress);
	}

	@Override
	public IProgress setCurrentStep(String value) {
		progress.setCurrentStep(value);
		path.setCurrentStep(value);
		return this;
	}

	@Override
	public IStep getCurrentStep() {
		return usedType.getCurrentStep();
	}

	@Override
	public IProgress setHasError(boolean b) {
		progress.setHasError(b);
		path.setHasError(b);
		return this;
	}

	@Override
	public Boolean getHasError() {
		return usedType.getHasError();
	}

	@Override
	public IProgress setVariant(String variant) {
		path.setVariant(variant);
		progress.setVariant(variant);
		return this;
	}

	@Override
	public String getVariant() {
		return usedType.getVariant();
	}



	@Override
	public Array<IStep> getSteps() {
		return usedType.getSteps();
	}

	@Override
	public IStep getStep(String value) {
		return usedType.getStep(value);
	}

	@Override
	public IProgress clearSteps() {

		progress.clearChildren();
		path.clearChildren();
		return this;
	}

	@Override
	public IProgress removeStep(IStep step) {
		usedType.removeStep(step);
		return this;
	}
	
	public IProgress setType(String type) {
		if(type != getAttribute("type")) {
			setAttribute("type", type);
			clearChildren();
			if(type == "base") {
				addChild(this.progress);
				this.usedType = progress;
			}else {
				addChild(path);
				this.usedType = path;
			}
			setRendered(false);
		}
		return this;
	}
	
	public String getType() {
		return getAttribute("type");
	}

	@Override
	public IProgress setValue(String value) {
		this.path.setValue(value);
		this.progress.setValue(value);
		return this;
	}

	@Override
	public String getValue() {
		return this.usedType.getValue();
	}

	@Override
	public IProgress addStep(String label, String value) {
		this.path.addStep(label, value);
		this.progress.addStep(label,value);
		return this;
	}

}
