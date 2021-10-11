package com.spoonconsulting.lightning;


import com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant;
import com.spoonconsulting.lightning.LayoutItem.Padding;
import com.spoonconsulting.lightning.Modal.BackDrop;
import com.spoonconsulting.lightning.TabSet.TabSetVariant;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import framework.components.input.JSForm;
import framework.components.input.JSTextInput;
import jsweet.dom.Event;
import jsweet.dom.Option;
import jsweet.lang.Array;
import jsweet.lang.Object;
import jsweet.util.StringTypes.button;

import static jsweet.dom.Globals.alert;

import jsweet.lang.JSON;
public class Boot {

	public static void main(String[] args) {

		JSContainer app = new JSContainer("app", "div");
		app.addClass("slds-card");
		app.setStyle("height", "100vh");
		
				
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
	
	private static JSContainer getButtons() {
		Layout layout = new Layout("l", "div");
		layout.setMultipleRows(true);
		
		LayoutItem head = new LayoutItem("head", "div").setPadding(LayoutItem.Padding.AROUND_MEDIUM);
		head.setSize(12);
		
		layout.addChild(head);
		
		ComboBox box= new ComboBox("variants");
		Array<Object> variants = new Array<Object>();
		for(Variant var : Variant.values()) {
			Object variant = new Object();
			variant.$set("value", var.getValue());
			variant.$set("label", var.getValue());
			variants.push(variant);
		}
		box.setOptions(variants);
		box.setLabel("Variants");
		
		
		ComboBox cbsize = new ComboBox("cbsize");
		cbsize.setLabel("Change Size:");
		Array<Object> sizes = new Array<Object>();
		for(Size size : Size.values()) {
			Option opt = new Option();
			opt.$set("value", size.getValue());
			opt.$set("label", size.getValue());
			sizes.push(opt);
		}
		cbsize.setOptions(sizes);
		
		LayoutItem itemsize = new LayoutItem("ss", "div").setSize(12).setPadding(Padding.AROUND_MEDIUM);
		layout.addChild(itemsize);
		
		
		head.addChild(box);
		
		Button button = new Button("btn").setLabel("Button");
		Button iconButton = new Button("btnIcon").setLabel("Button");
		iconButton.setIconName("utility:check");
		
		Button iconButtonRight = new Button("iconBtnRight").setLabel("Button");
		iconButtonRight.setIconName("utility:check");
		iconButtonRight.setIconPosition(Button.ICON_POSITION_RIGHT);
		
		
		LayoutItem item = new LayoutItem("btns", "div").setPadding(LayoutItem.Padding.AROUND_MEDIUM);
		item.setSize(12);
		layout.addChild(item);
		
		Layout btns = new Layout("btns", "div");
		LayoutItem item1 = new LayoutItem("item1", "div").setPadding(LayoutItem.Padding.AROUND_MEDIUM).setSize(12/6);
		LayoutItem item2 = new LayoutItem("item1", "div").setPadding(LayoutItem.Padding.AROUND_MEDIUM).setSize(12/6);
		LayoutItem item3 = new LayoutItem("item1", "div").setPadding(LayoutItem.Padding.AROUND_MEDIUM).setSize(12/6);
		LayoutItem item4 = new LayoutItem("item1", "div").setPadding(LayoutItem.Padding.AROUND_MEDIUM).setSize(12/6);
		LayoutItem item5 = new LayoutItem("item1", "div").setPadding(LayoutItem.Padding.AROUND_MEDIUM).setSize(12/6);
		LayoutItem item6 = new LayoutItem("item1", "div").setPadding(LayoutItem.Padding.AROUND_MEDIUM).setSize(12/6);
		
		Button diablebtn = new Button("dis").setLabel("Click to disable");
		diablebtn.setVariant(Variant.BRAND);
		diablebtn.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				diablebtn.setDisabled(!diablebtn.isDisabled());
			//	diablebtn.setIconName("utility:download");
			//	diablebtn.setIconPosition(Button.ICON_POSITION_RIGHT);
				diablebtn.setLabel("Disabled");
			//	diablebtn.setPrefixIconName("utility:settings");
				
			}
		}, "click");
		
		ButtonStateful stf = new ButtonStateful("stf");
		stf.setIconNameWhenHover("utility:download");
		stf.setLabelWhenHover("Hover");
		stf.setIconNameWhenOff("utility:delete");
		stf.setLabelWhenOff("Not selected");
		stf.setIconNameWhenOn("utility:down");
		stf.setLabelWhenOn("Selected");
		stf.setVariant(Variant.DESTRUCTIVE);
		
		ButtonIcon btni = new ButtonIcon("btni", "utility:settings");
		btni.setVariant(ButtonIconVariant.BORDER_FILLED);
		btni.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				btni.setVariant(ButtonIconVariant.BRAND);
			}
		}, "click");
		
		item1.addChild(button);
		item2.addChild(iconButton);
		item3.addChild(iconButtonRight);
		item4.addChild(diablebtn);
		item5.addChild(stf);
		item6.addChild(btni);
		item.addChild(btns.addChild(item1).addChild(item2).addChild(item3).addChild(item4).addChild(item5).addChild(item6));
		
		
		box.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				String variant = box.getValue();
				button.setVariant(variant);
				iconButton.setVariant(variant);
				iconButtonRight.setVariant(variant);
				
			}
		}, "change");
		
		
		cbsize.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				String size = cbsize.getValue();
				btni.setSize(size);
			}
		}, "change");
		
		itemsize.addChild(cbsize);
		
		return layout;
		
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
	
	
	private static JSContainer getModal() {
		
		JSContainer container = new JSContainer("ctn", "div");
		Button button = new Button("open");
		button.setVariant(Variant.BRAND);
		button.setLabel("Open");
		container.addChild(button);
		
		Modal modal = new Modal("modal");
		FormElement<String> firstName = new FormElement<String>("firstName", new JSTextInput("firstName"));
		FormElement<String> lastName = new FormElement<String>("lastName", new JSTextInput("lastName"));
		FormElement<String> email = new FormElement<String>("email",new JSTextInput("email"));
		firstName.setLabel("First Name");
		lastName.setLabel("Last Name");
		email.setLabel("Email");
		
		
		JSForm form = new JSForm("form");
		form.setStyle("padding", "0.5rem");
		modal.setTitle("User Registration");
		
		form.addChild(firstName);
		form.addChild(lastName);
		form.addChild(email);
		
		modal.getContent().addChild(form);
		
		Button save = new Button("save");
		save.setLabel("Save");
		save.setVariant(Variant.BRAND);
		
		Button cancel = new Button("cancel");
		cancel.setLabel("Cancel");
		cancel.setVariant(Variant.NEUTRAL);
		 
		cancel.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				modal.close();
			}
		}, "click");
		
		
		save.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				form.submit();
			}
		}, "click");
		
		form.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				Object data = form.getData();
				alert(JSON.stringify(data));
			}
		},"onSubmit");
		
		
		modal.getFooter().addChild(save);
		modal.getFooter().addChild(cancel);
		
		
		container.addChild(modal);
		BackDrop bd = new BackDrop("bd");
		container.addChild(bd);
		modal.setBackdrop(bd);
		
		button.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				modal.open();
			}
		}, "click");
		return container;
		
	}
	
	public static TabSet getVerticalMenu() {
		
		TabSet set = new TabSet("menu");
		set.setVariant(TabSetVariant.VERTICAL).setStyle("height", "100vh");
		
		addVerticalTab("Accordion", getAccordionSample(), set);
		addVerticalTab("Paths", getPathSample(), set);
		addVerticalTab("Combo box", getSampleCOmbo(), set);
		addVerticalTab("Buttons", getButtons(), set);
		addVerticalTab("Modals", getModal(), set);
		return set;
	}
}
