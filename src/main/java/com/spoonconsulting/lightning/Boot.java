package com.spoonconsulting.lightning;


import com.spoonconsulting.lightning.Modal.BackDrop;
import com.spoonconsulting.lightning.Utils.OptionsBuilder;
import com.spoonconsulting.lightning.enums.Direction;
import com.spoonconsulting.lightning.enums.IconName;
import com.spoonconsulting.lightning.enums.LayoutItemPadding;
import com.spoonconsulting.lightning.enums.MenuAlignment;
import com.spoonconsulting.lightning.enums.Size;
import com.spoonconsulting.lightning.enums.Variants.ButtonIconVariant;
import com.spoonconsulting.lightning.enums.Variants.TabSetVariant;
import com.spoonconsulting.lightning.enums.Variants.Variant;

import def.js.JSON;
import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import framework.components.input.JSTextInput;
import jsweet.dom.Event;
import jsweet.dom.Option;
import jsweet.lang.Array;
import jsweet.lang.Object;

import static jsweet.dom.Globals.alert;
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
		section2.getContent().addChild(getAvatars());
		
		accordion.setAllowMultipleSectionOpen(true);
		accordion.setActiveSectionName("section2");
		return accordion;
	}
	
	private static JSContainer getButtons() {
		Layout layout = new Layout("l", "div");
		layout.setMultipleRows(true);
		
		LayoutItem head = new LayoutItem("head", "div").setPadding(LayoutItemPadding.AROUND_MEDIUM);
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
		
		LayoutItem itemsize = new LayoutItem("ss", "div").setSize(12).setPadding(LayoutItemPadding.AROUND_MEDIUM);
		layout.addChild(itemsize);
		
		
		head.addChild(box);
		
		Button button = new Button("btn").setLabel("Button");
		Button iconButton = new Button("btnIcon").setLabel("Button");
		iconButton.setIconName("utility:check");
		
		Button iconButtonRight = new Button("iconBtnRight").setLabel("Button");
		iconButtonRight.setIconName("utility:check");
		iconButtonRight.setIconPosition(Button.ICON_POSITION_RIGHT);
		
		
		LayoutItem item = new LayoutItem("btns", "div").setPadding(LayoutItemPadding.AROUND_MEDIUM);
		item.setSize(12);
		layout.addChild(item);
		
		Layout btns = new Layout("btns", "div").setMultipleRows(true);
		LayoutItem item1 = new LayoutItem("item1", "div").setPadding(LayoutItemPadding.AROUND_MEDIUM).setSize(12/6);
		LayoutItem item2 = new LayoutItem("item1", "div").setPadding(LayoutItemPadding.AROUND_MEDIUM).setSize(12/6);
		LayoutItem item3 = new LayoutItem("item1", "div").setPadding(LayoutItemPadding.AROUND_MEDIUM).setSize(12/6);
		LayoutItem item4 = new LayoutItem("item1", "div").setPadding(LayoutItemPadding.AROUND_MEDIUM).setSize(12/6);
		LayoutItem item5 = new LayoutItem("item1", "div").setPadding(LayoutItemPadding.AROUND_MEDIUM).setSize(12/6);
		LayoutItem item6 = new LayoutItem("item1", "div").setPadding(LayoutItemPadding.AROUND_MEDIUM).setSize(12/6);
		
		
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
		
		btns.addChild(new LayoutItem("grp", "div").setSize(12).addChild(new ButtonGroup("gro")
				.addButton(new Button("save").setLabel("Save").setVariant(Variant.NEUTRAL))
				.addButton(new Button("edit").setLabel("Edit").setVariant(Variant.BRAND)) 
				.addButton(new ButtonMenu("menu", "div").setLabel("Events").setMenuAlignment(MenuAlignment.RIGHT)
						.setOptions(OptionsBuilder.create().addValuesLabels("clone", "Clone", "delete", "Delete", "assign", "Assign User").get()).addEventListener(new EventListener() {
							
							@Override
							public void performAction(Renderable source, Event evt) {
								MenuItem item = (MenuItem)evt.$get("source");
								
								alert(item.getValue());
							}
						}, "select"))
				));
		
		
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
		
		
		Breadcrumbs bcs = new Breadcrumbs("brd");
		bcs.addBreadcrumb(new Breadcrumb("home").setLabel("Home").setHref("#home"))
		.addBreadcrumb(new Breadcrumb("contacts").setLabel("Contacts").setHref("#contacts"))
		.addBreadcrumb(new Breadcrumb("internal").setLabel("Internal").setHref("#contacts/internal"));
		
		
		app.addChild(bcs);
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
		
		
		Section personalInfo = new Section("Personal Information");
		personalInfo.setLabel("Personal Information");
		Form frmPersonalInfo = new Form("");
		frmPersonalInfo.
			row(0).item(0).addElement("salutation").
			getRow().item(1).addElement("firstName")
			.form().addRow().item(0).addElement("lastName")
			.row().item(1).addElement("email")
			.form().addRow().item(0).addElement("addressLine1")
			.row().item(1).addElement("addressLine2")
			.form().addRow().item(0).addElement("city")
			.row().item(1).addElement("postalCode");
		personalInfo.getContent().addChild(frmPersonalInfo);
		
		
		Section otherInfo = new Section("Other info");
		otherInfo.setLabel("Other info");
		Form frm = new Form("otdf");
		
		RadioGroup cbg = new RadioGroup("maritalStatus");
		cbg.setLabel("Marital Status");
		cbg.setOptions(OptionsBuilder.create().add("Single","Married", "Divorced" ).get());
		frm.row(0).item(0).addChild(cbg);
		otherInfo.getContent().addChild(frm);
		
		frm.row(0).item(1).addChild(new CheckBoxGroup("educationLevel").setOptions(OptionsBuilder.create().add("SC","HSC", "BA", "MA", "Phd").get()).setLabel("Education Level"));
		
		//JSForm form = new JSForm("form");
		///form.setStyle("padding", "0.5rem");
		modal.setTitle("User Registration");
		
		//form.addChild(firstName);
		//form.addChild(lastName);
		//form.addChild(email);
		
		modal.getContent().addChild(personalInfo);
		modal.getContent().addChild(otherInfo);
		Utils.setPadding(modal.getContent(), Direction.HORIZONTAL, Size.MEDIUM);
		
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
				//personalInfo.submit();
			}
		}, "click");
		
		/*form.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				Object data = form.getData();
				alert(JSON.stringify(data));
			}
		},"onSubmit");*/
		
		
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
	
	
	public static JSContainer getBadge() {
		
		JSContainer ctn = new JSContainer("div");
		
		Badge badge1 = new Badge("badge1");
		badge1.setAssistiveText("Assistive text");
		badge1.setIconName(IconName.UTILITY_ADDUSER.getValue());
		badge1.setLabel("Users: 123");
		badge1.setIconPosition(Badge.ICON_POSITION_START);
		
		Badge badge2 = new Badge("bad").setLabel("New badge").setIconName(IconName.UTILITY_AGENT_HOME.getValue()).setIconPosition(Badge.ICON_POSITION_END);
		
		Badge b3 = new Badge("b3").setLabel("Hello badge").setIconName(IconName.UTILITY_AGGREGATION_POLICY.getValue()).setVariant(Badge.VARIANT_INVERSE);
		
		Badge b4 = new Badge("b4").setLabel("Simple badge");
		
		ctn.addChild(badge1).addChild(badge2).addChild(b3).addChild(b4);
		return ctn;
	}
	
	
	public static JSContainer getTree() {
		String json= "[{\"label\":\"Western Sales Director\",\"name\":\"1\",\"expanded\":true,\"items\":[{\"label\":\"Western Sales Manager\",\"name\":\"2\",\"expanded\":true,\"items\":[{\"label\":\"CA Sales Rep\",\"name\":\"3\",\"expanded\":true,\"items\":[]},{\"label\":\"OR Sales Rep\",\"name\":\"4\",\"expanded\":true,\"items\":[]}]}]},{\"label\":\"Eastern Sales Director\",\"name\":\"5\",\"expanded\":false,\"items\":[{\"label\":\"Easter Sales Manager\",\"name\":\"6\",\"expanded\":true,\"items\":[{\"label\":\"NY Sales Rep\",\"name\":\"7\",\"expanded\":true,\"items\":[]},{\"label\":\"MA Sales Rep\",\"name\":\"8\",\"expanded\":true,\"items\":[]}]}]},{\"label\":\"International Sales Director\",\"name\":\"9\",\"expanded\":true,\"items\":[{\"label\":\"Asia Sales Manager\",\"name\":\"10\",\"expanded\":true,\"items\":[{\"label\":\"Sales Rep1\",\"name\":\"11\",\"expanded\":true,\"items\":[]},{\"label\":\"Sales Rep2\",\"name\":\"12\",\"expanded\":true,\"items\":[]}]},{\"label\":\"Europe Sales Manager\",\"name\":\"13\",\"expanded\":false,\"items\":[{\"label\":\"Sales Rep1\",\"name\":\"14\",\"expanded\":true,\"items\":[]},{\"label\":\"Sales Rep2\",\"name\":\"15\",\"expanded\":true,\"items\":[]}]}]}]";
		
		Array<Object> items = (Array<Object>)JSON.parse(json);
		
		Tree tree = new Tree("name");
		tree.setItems(items);
		return tree;
	}
	
	
	public static JSContainer getTiles() {
		
		Layout layout = new Layout("ll", "div");
		layout.setMultipleRows(true);
		LayoutItem item1 = new LayoutItem("item1","div");
		item1.setSize(6);
		item1.setPadding(LayoutItemPadding.AROUND_MEDIUM);
		
		LayoutItem item2 = new LayoutItem("item1","div");
		item2.setSize(6);
		item2.setPadding(LayoutItemPadding.AROUND_MEDIUM);
		
		layout.addChild(item1).addChild(item2);
		
		
		Tile tile = new Tile("tile");
		tile.setType(Tile.TYPE_MEDIA);
		tile.setLabel("This is a tile");
		//tile.getFiguresSlot().addChild(new IconContainer("icon", "div").setIconName(IconName.ACTION_ADD_CONTACT.getValue()));
		tile.getBodySlot().addChild(getTree());
		
		Object add = new Object();
		add.$set("value", "add");
		add.$set("label", "Add New");
		add.$set("iconName", IconName.UTILITY_ADD.getValue());
		
		Object del = new Object();
		del.$set("value", "delete");
		del.$set("label", "Delete");
		del.$set("iconName", IconName.ACTION_DELETE.getValue());
		
		Array<Object> actions = new Array<Object>();
		actions.push(add,del);
		
		tile.setActions(actions);
		//tile.setStyle("width", "500px");
		
		tile.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				MenuItem item = (MenuItem)evt.$get("source");
				alert(item.getValue());
			}
		}, "actiontriggered");
		
		item1.addChild(tile);
		
		Tile av = new Tile("av");
		av.setLabel("Tile with avatar");
		av.setAvatarSrc("https://cevasfdc.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=10003&avatarId=10402");
		av.setType(Tile.TYPE_MEDIA);
		
		av.getBodySlot().addChild(getBadge());
		
		item2.addChild(av);
		return layout;
	}
	
	
	public static JSContainer getAvatars() {
		Avatar a1 = new Avatar("a1");
		a1.setInitials("AKR");
		a1.setType(Avatar.TYPE_INITIAL);
		
		Avatar a2 = new Avatar("a2");
		a2.setType(Avatar.TYPE_IMAGE);
		a2.setSrc("https://cevasfdc.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=10003&avatarId=10402");
		a2.setSize(Size.LARGE);
		
		Avatar a3 = new Avatar("a3");
		a3.setType(Avatar.TYPE_ICON);
		a3.setFallbackIconName(IconName.UTILITY_ATTACH.getValue());
		
		
		Avatar a4 = new Avatar("a4")
				.setType(Avatar.TYPE_ICON)
				.setFallbackIconName(IconName.ACTION_ADD_CONTACT.getValue())
				.setVariant(Avatar.VARIANT_CIRCLE);
		
		JSContainer c = new JSContainer("div");
		c.addChild(a1).addChild(a2).addChild(a3).addChild(a4);
		c.addChild(new Avatar("a5").setType(Avatar.TYPE_ICON).setFallbackIconName(IconName.CUSTOM_CUSTOM10.getValue()));
		return c;
	}
	
	public static TabSet getVerticalMenu() {
		
		TabSet set = new TabSet("menu");
		set.setVariant(TabSetVariant.VERTICAL).setStyle("height", "100vh");
		
		addVerticalTab("Accordion", getAccordionSample(), set);
		addVerticalTab("Paths", getPathSample(), set);
		addVerticalTab("Combo box", getSampleCOmbo(), set);
		addVerticalTab("Buttons", getButtons(), set);
		addVerticalTab("Modals", getModal(), set);
		addVerticalTab("Tree", getTree(), set);
		addVerticalTab("Tile", getTiles(), set);
		return set;
	}
}
