package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;

public class Boot {

	public static void main(String[] args) {

		JSContainer app = new JSContainer("app", "div");
		app.addClass("slds-card");
		
		ProgressIndicator indicator = new ProgressIndicator("pi");
		
	//	PathItem step1 = new PathItem("step1").setValue("1").setLabel("Step 1");
	//	PathItem step2 = new PathItem("step2").setValue("2").setLabel("Step 2");
	//	PathItem step3 = new PathItem("step3").setValue("3").setLabel("Step 3");
	//	PathItem step4 = new PathItem("step4").setValue("4").setLabel("Step 4");
		
		indicator.setType("base");
		//step3.setIsActive(true);
		//step2.setIsCompleted(true);
		//step4.setHasError(true);
		for(int i = 1; i <=4; i++) {
			indicator.addStep("Step " + i,  i + "");
		}
		
		indicator.setCurrentStep("3");
		indicator.setHasError(true);
		app.addChild(indicator);
		
		
		Button toggle = new Button("toggle").setLabel("Toggle");
		toggle.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				String type = indicator.getType();
				if(type == "base") {
					indicator.setType("path");
				}else {
					indicator.setType("base");
				}
			}
		}, "click");
		
		app.addChild(toggle);
		app.render();
		
	}

}
