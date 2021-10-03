package com.spoonconsulting.lightning;


import com.spoonconsulting.lightning.TabSet.TabSetVariant;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.dom.Option;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class Boot {

	public static void main(String[] args) {

		JSContainer app = new JSContainer("app", "div");
		app.addClass("slds-card");
		
				
		app.addChild(getVerticalMenu());
		
		app.render();
		
	}

	
	
	private static TabSet getExampleTab(JSContainer example) {
		TabSet ts = new TabSet("ts");
		
		Tab tab = new Tab("example");
		tab.setLabel("Example");
		TabPanel content = new TabPanel("content");
		content.addChild(example);
		
		Tab source = new Tab("source");
		source.setLabel("Source");
		TabPanel pnSource = new TabPanel("source");
		pnSource.addChild(new JSContainer("ss", "h3").setHtml("Source comes here"));
		
		ts.addTab(tab, content).addTab(source, pnSource);
		
		return ts;
	}
	
	private static JSContainer getAccordionSample() {
		Accordion accordion = new Accordion("acc");
		AccordionSection section1 = new AccordionSection("section1");
		AccordionSection section2 = new AccordionSection("section2");
		accordion.addSections(section1,section2);
		section1.setTitle("Section 1");
		section2.setTitle("Section 2");
		
		
		section1.getContent().addChild(new JSContainer("h1").setHtml("Section 1 in accordion"));
		section2.getContent().addChild(new JSContainer("h1").setHtml("Section 2 in accordion"));
		
		accordion.setAllowMultipleSectionOpen(true);
		accordion.setActiveSectionName("section2");
		return accordion;
	}
	
	
	private static JSContainer getSampleCOmbo() {
		JSContainer card = new JSContainer("card", "div").addClass("slds-card").setStyle("height", "300px");
		
		ComboBox box = new ComboBox("cb");
		Array<Object> options = new Array<Object>();
		for(int i =0; i < 5; i++) {
			Object opt = new Option();
			opt.$set("value", i + "");
			opt.$set("label", "Label " + i);
			options.push(opt);
		}
		box.setOptions(options);
		box.setLabel("This is a label");
		box.setHelp("This is a help");
		card.addChild(box);
		return card;
	}
	
	
	private static JSContainer getPathSample() {
		JSContainer app = new JSContainer("div");
		
		ProgressIndicator indicator = new ProgressIndicator("pi");
		
		
		indicator.setType("base");
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
		return app;
	
	}
	
	
	private static void addVerticalTab(String title, JSContainer sample, TabSet verticalMenu) {
		Tab tab = new Tab(title);
		tab.setLabel(title);
		
		TabPanel panel = new TabPanel("panel");
		panel.setStyle("width", "100%");
		panel.addChild(getExampleTab(sample));
		
		verticalMenu.addTab(tab, panel);
	}
	
	public static TabSet getVerticalMenu() {
		TabSet set = new TabSet("menu");
		set.setVariant(TabSetVariant.VERTICAL);
		
		addVerticalTab("Accordion", getAccordionSample(), set);
		addVerticalTab("Paths", getPathSample(), set);
		addVerticalTab("Combo box", getSampleCOmbo(), set);
		return set;
	}
}
