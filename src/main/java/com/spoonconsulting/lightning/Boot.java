package com.spoonconsulting.lightning;


import static jsweet.dom.Globals.alert;

import com.spoonconsulting.lightning.Modal.BackDrop;
import com.spoonconsulting.lightning.Utils.OptionsBuilder;
import com.spoonconsulting.lightning.enums.Direction;
import com.spoonconsulting.lightning.enums.IconName;
import com.spoonconsulting.lightning.enums.InputType;
import com.spoonconsulting.lightning.enums.LayoutItemPadding;
import com.spoonconsulting.lightning.enums.MenuAlignment;
import com.spoonconsulting.lightning.enums.ModalSize;
import com.spoonconsulting.lightning.enums.Size;
import com.spoonconsulting.lightning.enums.Variants.ButtonIconVariant;
import com.spoonconsulting.lightning.enums.Variants.FormElementVariant;
import com.spoonconsulting.lightning.enums.Variants.TabSetVariant;
import com.spoonconsulting.lightning.enums.Variants.Variant;

import def.js.JSON;
import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.dom.Option;
import jsweet.lang.Array;
import jsweet.lang.Object;
public class Boot {

	public static void main_(String[] args) {

		Draggable d = new Draggable("drag", "div");
		d.setStyle("width", "100px").setStyle("height", "100px").setStyle("background", "red").setStyle("position", "relative");
		d.setAxis("x");
		
		
		JSContainer app = new JSContainer("app", "div");
		app.addClass("slds-card");
		app.setStyle("height", "100vh");
		
		///app.addChild(d);	
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
	
	private static JSContainer getDualListBox() {
		DualListBox lb = new DualListBox("dl");
		lb.setLabel("Selected Options");
		lb.setHelp("Wonder what will happe");
		lb.setShowHelp(true);
		lb.setOptions(OptionsBuilder.create().add("Option 1", "Option 2", "Option 3", "Option 4", "Option 5").get());
		Array<String> value = new Array<String>();
		value.push("Option 2");
		lb.setValue(value);
		
		lb.setMin(2);
		lb.setMax(4);
		lb.setRequired(true);
		lb.setRequiredOptions(value);
		lb.setStyle("width", "100%");
		return lb;
		
		
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
	
	@SuppressWarnings("unchecked")
	public static JSContainer getTable() {
		String sdata = "[{\"name\":\"Brent Frami\",\"email\":\"Justen_Stoltenberg48@gmail.com\",\"website\":\"https://orland.biz\",\"amount\":\"793.29\",\"phone\":\"1-218-432-4309 x498\",\"closeAt\":\"2022-07-01T09:58:46.962Z\",\"id\":\"e6623cd9-47fd-423a-b33d-27d940e8b7c9\"},{\"name\":\"Fae Greenfelder\",\"email\":\"Wendy25@gmail.com\",\"website\":\"http://laura.biz\",\"amount\":\"853.67\",\"phone\":\"1-039-080-4407\",\"closeAt\":\"2022-01-21T05:48:25.871Z\",\"id\":\"b3f7892d-bbef-46de-84d9-136b12a3e883\"},{\"name\":\"Kory Muller\",\"email\":\"Carolyne40@yahoo.com\",\"website\":\"http://alfonso.info\",\"amount\":\"958.23\",\"phone\":\"1-200-140-1219 x04828\",\"closeAt\":\"2021-12-25T19:24:23.350Z\",\"id\":\"68ea8f33-f748-4a4e-bd62-1efacf04a97a\"},{\"name\":\"Imelda Balistreri\",\"email\":\"Caesar.Brekke67@yahoo.com\",\"website\":\"http://gust.info\",\"amount\":\"63.29\",\"phone\":\"436.925.4903\",\"closeAt\":\"2022-05-29T05:56:30.283Z\",\"id\":\"0caf56e1-1c1b-4f26-b369-96783d2804ad\"},{\"name\":\"Mauricio Larkin\",\"email\":\"Earline_Grant@hotmail.com\",\"website\":\"http://salvatore.org\",\"amount\":\"678.68\",\"phone\":\"746.480.0915 x215\",\"closeAt\":\"2022-09-23T16:09:57.978Z\",\"id\":\"abd64232-23f6-4403-b9f4-0e8e92107e43\"},{\"name\":\"Magali Balistreri\",\"email\":\"Ryann.Kuhlman82@gmail.com\",\"website\":\"https://dolly.biz\",\"amount\":\"417.90\",\"phone\":\"(474) 967-3177\",\"closeAt\":\"2022-07-14T11:28:19.872Z\",\"id\":\"4e58d6b9-0880-4c70-a8b3-8793d664e717\"},{\"name\":\"Jovany Kuhic\",\"email\":\"Sabina_Luettgen@yahoo.com\",\"website\":\"https://octavia.com\",\"amount\":\"625.17\",\"phone\":\"1-061-441-5029 x80858\",\"closeAt\":\"2022-08-31T21:30:49.375Z\",\"id\":\"9b73b143-8a43-49a1-8b3f-18f15db438b1\"},{\"name\":\"Jayne Welch\",\"email\":\"Shawna.Hessel@gmail.com\",\"website\":\"http://jordan.net\",\"amount\":\"267.89\",\"phone\":\"1-124-101-9545 x335\",\"closeAt\":\"2021-12-17T12:11:57.150Z\",\"id\":\"22427ecb-28d7-4a85-b342-084bf6ea9558\"},{\"name\":\"Jay Collins\",\"email\":\"Marjory.Bailey63@gmail.com\",\"website\":\"http://jamir.biz\",\"amount\":\"532.84\",\"phone\":\"(182) 981-5646 x0556\",\"closeAt\":\"2022-01-29T08:46:18.766Z\",\"id\":\"c5d0cf6a-7e01-4635-a99b-1f96ef3f126c\"},{\"name\":\"Iva Green\",\"email\":\"Herminio.Hodkiewicz86@hotmail.com\",\"website\":\"http://lacy.biz\",\"amount\":\"170.27\",\"phone\":\"320-536-5340\",\"closeAt\":\"2022-03-05T06:57:47.879Z\",\"id\":\"72877874-2b4f-4e04-a92e-148b24a87e78\"},{\"name\":\"Harry O'Keefe\",\"email\":\"Cleve.Kemmer43@yahoo.com\",\"website\":\"http://jacinthe.net\",\"amount\":\"197.30\",\"phone\":\"1-838-831-2098 x32327\",\"closeAt\":\"2022-09-30T04:48:00.590Z\",\"id\":\"9f6a4894-a440-4a74-b76f-8d44840d4d7a\"},{\"name\":\"Hillary Willms\",\"email\":\"Maia_Pfannerstill25@yahoo.com\",\"website\":\"http://kimberly.com\",\"amount\":\"843.21\",\"phone\":\"1-079-601-6278\",\"closeAt\":\"2022-04-18T06:11:55.146Z\",\"id\":\"894b8230-6251-4fc8-a373-2a9206ac991b\"},{\"name\":\"Michele Rogahn\",\"email\":\"Carlie.Hackett59@gmail.com\",\"website\":\"http://abby.name\",\"amount\":\"675.45\",\"phone\":\"1-906-428-6405\",\"closeAt\":\"2022-09-09T17:34:59.542Z\",\"id\":\"f630bc0c-40ea-4d3f-a828-e79c06b689c2\"},{\"name\":\"Lorena Lubowitz\",\"email\":\"Vernice.Gibson@gmail.com\",\"website\":\"https://carole.com\",\"amount\":\"485.16\",\"phone\":\"339-970-1997 x5168\",\"closeAt\":\"2022-08-21T18:48:41.849Z\",\"id\":\"80e83d73-b1b3-4315-b5af-57f4b778d18d\"},{\"name\":\"Meggie Davis\",\"email\":\"Caterina_Weimann92@yahoo.com\",\"website\":\"https://jimmie.info\",\"amount\":\"170.37\",\"phone\":\"321-691-3631\",\"closeAt\":\"2022-03-02T10:32:21.098Z\",\"id\":\"2fb5cae6-5e54-450d-8573-87cdf0ac2b1b\"},{\"name\":\"Derick Walsh\",\"email\":\"Carmela.Quitzon8@hotmail.com\",\"website\":\"https://estefania.org\",\"amount\":\"717.65\",\"phone\":\"1-144-225-7586\",\"closeAt\":\"2022-09-28T08:28:27.601Z\",\"id\":\"3261711b-2b43-4353-be53-b5ec72a7e99a\"},{\"name\":\"Madeline Wisozk\",\"email\":\"Annamarie_Brakus99@yahoo.com\",\"website\":\"https://reva.biz\",\"amount\":\"644.55\",\"phone\":\"(379) 200-5653\",\"closeAt\":\"2022-10-11T20:02:31.805Z\",\"id\":\"0dd69cc1-ab07-4935-9414-8c8b73aa86c0\"},{\"name\":\"Jordi Hoppe\",\"email\":\"Amy_Morissette60@yahoo.com\",\"website\":\"https://kaya.com\",\"amount\":\"452.10\",\"phone\":\"(324) 216-9859 x26110\",\"closeAt\":\"2021-11-11T22:26:21.553Z\",\"id\":\"4541163a-60a0-4b66-9c36-b7f0cf1aa28e\"},{\"name\":\"Corrine Brekke\",\"email\":\"Osvaldo.Hermiston@gmail.com\",\"website\":\"https://raheem.org\",\"amount\":\"750.43\",\"phone\":\"1-630-235-4694 x02611\",\"closeAt\":\"2021-12-01T11:24:31.141Z\",\"id\":\"c6b1befc-1730-4579-8bdc-4df8b05c81fa\"},{\"name\":\"Aliza Harris\",\"email\":\"Jazmin88@hotmail.com\",\"website\":\"http://justice.com\",\"amount\":\"285.05\",\"phone\":\"1-823-417-3608 x940\",\"closeAt\":\"2022-05-31T17:01:36.305Z\",\"id\":\"dc4b4bc3-61fb-4316-803e-bde84c26d3ab\"},{\"name\":\"Lauren Collier\",\"email\":\"Jewell_Greenfelder17@yahoo.com\",\"website\":\"https://arlie.org\",\"amount\":\"405.69\",\"phone\":\"765.166.5665\",\"closeAt\":\"2022-01-30T14:42:32.854Z\",\"id\":\"c00bd962-53bd-4080-8240-63ff7d5bbd0e\"},{\"name\":\"Chyna Carter\",\"email\":\"Demarco68@yahoo.com\",\"website\":\"http://eddie.net\",\"amount\":\"562.60\",\"phone\":\"473.691.2593 x05455\",\"closeAt\":\"2022-08-16T23:13:30.249Z\",\"id\":\"2f8bdad8-4c41-4223-91dd-1f0d407448e9\"},{\"name\":\"Arvid Simonis\",\"email\":\"Barry81@yahoo.com\",\"website\":\"https://bethany.info\",\"amount\":\"891.37\",\"phone\":\"1-796-722-6813 x50521\",\"closeAt\":\"2022-02-10T18:35:34.233Z\",\"id\":\"3a3a6e75-a92c-40c4-aa55-d5dc517ead0d\"},{\"name\":\"Jayde Larson\",\"email\":\"Shaun_Collins@hotmail.com\",\"website\":\"https://khalil.net\",\"amount\":\"260.27\",\"phone\":\"137.174.4794 x22494\",\"closeAt\":\"2021-12-24T10:54:07.162Z\",\"id\":\"c070bb12-1fbe-460e-9e26-342abd656fa7\"},{\"name\":\"Mekhi Parisian\",\"email\":\"Sarah_Reinger@gmail.com\",\"website\":\"https://zachery.com\",\"amount\":\"350.77\",\"phone\":\"(864) 279-9946 x8413\",\"closeAt\":\"2022-08-14T22:40:48.321Z\",\"id\":\"0cecf4a1-4eaf-49c8-bb60-2de380c95261\"},{\"name\":\"Pat Bergstrom\",\"email\":\"Trycia.Kris19@yahoo.com\",\"website\":\"https://jannie.name\",\"amount\":\"18.80\",\"phone\":\"(896) 280-3435\",\"closeAt\":\"2022-05-19T05:14:48.645Z\",\"id\":\"f98693d3-a898-4b16-9a0c-a65be239dc99\"},{\"name\":\"Reginald Russel\",\"email\":\"Glen16@hotmail.com\",\"website\":\"https://trisha.net\",\"amount\":\"934.99\",\"phone\":\"(548) 272-9617\",\"closeAt\":\"2022-09-03T09:20:02.144Z\",\"id\":\"a236573c-a778-4920-b130-6faa527e0f8b\"},{\"name\":\"Sunny Feest\",\"email\":\"Aisha.Runolfsdottir59@yahoo.com\",\"website\":\"https://annetta.com\",\"amount\":\"77.62\",\"phone\":\"(287) 935-9921 x4304\",\"closeAt\":\"2022-06-09T15:26:04.371Z\",\"id\":\"11fca3eb-9658-4779-90d8-78bfb387d9e1\"},{\"name\":\"Felipa Prosacco\",\"email\":\"Rosalind16@gmail.com\",\"website\":\"https://jamaal.name\",\"amount\":\"886.26\",\"phone\":\"635.998.7672 x4318\",\"closeAt\":\"2022-03-05T00:51:09.623Z\",\"id\":\"18c982e5-7b31-4d3c-b3cc-00f5be4e9aa5\"},{\"name\":\"Milton O'Kon\",\"email\":\"Alfonso_Doyle@gmail.com\",\"website\":\"https://aniyah.net\",\"amount\":\"407.49\",\"phone\":\"(946) 711-0660\",\"closeAt\":\"2022-08-16T09:48:52.790Z\",\"id\":\"5ca25cd5-6150-4164-ae9a-90067b368533\"},{\"name\":\"Leslie Hirthe\",\"email\":\"Angelica51@yahoo.com\",\"website\":\"http://demarco.org\",\"amount\":\"15.50\",\"phone\":\"1-692-687-8026 x91582\",\"closeAt\":\"2022-04-30T03:06:48.217Z\",\"id\":\"b25fd907-064a-4012-b07d-8b1a1381fe95\"},{\"name\":\"Kristina Hackett\",\"email\":\"Jalyn_Hand42@hotmail.com\",\"website\":\"https://rory.org\",\"amount\":\"854.07\",\"phone\":\"(052) 308-5688\",\"closeAt\":\"2022-06-09T12:44:23.487Z\",\"id\":\"24c7f60e-72b5-46f6-997a-203dcec34d09\"},{\"name\":\"Vida Kihn\",\"email\":\"Barbara17@yahoo.com\",\"website\":\"http://magnolia.net\",\"amount\":\"144.07\",\"phone\":\"780-619-5426 x151\",\"closeAt\":\"2022-04-23T13:41:27.815Z\",\"id\":\"d77569ab-b745-49df-a8c0-929615c8b42f\"},{\"name\":\"Monica Robel\",\"email\":\"Assunta29@yahoo.com\",\"website\":\"http://dudley.name\",\"amount\":\"237.05\",\"phone\":\"699.588.3282 x637\",\"closeAt\":\"2022-09-13T13:31:18.658Z\",\"id\":\"e5d9b8be-17ca-4c3a-be13-69b13927a31e\"},{\"name\":\"Reese Torphy\",\"email\":\"Frederique_Lemke@gmail.com\",\"website\":\"http://madelynn.org\",\"amount\":\"25.92\",\"phone\":\"1-249-121-5685 x079\",\"closeAt\":\"2022-04-29T07:23:20.385Z\",\"id\":\"5055c431-32f1-4447-8c70-84fc1be4c4f9\"},{\"name\":\"Florencio Heller\",\"email\":\"Delpha_Donnelly@gmail.com\",\"website\":\"https://jerod.name\",\"amount\":\"358.33\",\"phone\":\"273-650-8736 x491\",\"closeAt\":\"2022-05-07T12:11:48.453Z\",\"id\":\"adaa9ef6-9998-4d88-bd9c-46d90d85431a\"},{\"name\":\"Keyon Kris\",\"email\":\"Jazmin.Stark@hotmail.com\",\"website\":\"https://kevin.biz\",\"amount\":\"724.77\",\"phone\":\"(448) 133-4673\",\"closeAt\":\"2021-12-08T11:05:25.540Z\",\"id\":\"244320f9-3a5e-4929-8ec2-19a3b8aefa6d\"},{\"name\":\"Joshuah Hodkiewicz\",\"email\":\"Ottis38@gmail.com\",\"website\":\"http://juston.biz\",\"amount\":\"288.59\",\"phone\":\"147.419.0719 x213\",\"closeAt\":\"2022-07-17T03:18:15.945Z\",\"id\":\"d5913b3c-d2de-419a-881e-d9b5fe1209ea\"},{\"name\":\"Carmine Kerluke\",\"email\":\"Nakia14@yahoo.com\",\"website\":\"https://bettye.info\",\"amount\":\"382.89\",\"phone\":\"1-418-931-2184 x9739\",\"closeAt\":\"2022-04-11T14:23:00.776Z\",\"id\":\"99dec1f4-efbe-450a-91a7-58b60970ede2\"},{\"name\":\"Coby Labadie\",\"email\":\"Jaydon.Hyatt@gmail.com\",\"website\":\"http://camron.net\",\"amount\":\"90.43\",\"phone\":\"187-849-1363 x887\",\"closeAt\":\"2022-09-25T21:58:50.229Z\",\"id\":\"2f6c542d-92fd-4ac6-a016-beb19e7a167d\"},{\"name\":\"Annabel Goodwin\",\"email\":\"Granville87@hotmail.com\",\"website\":\"https://dion.info\",\"amount\":\"843.13\",\"phone\":\"669-308-3909 x987\",\"closeAt\":\"2022-01-20T23:37:04.877Z\",\"id\":\"3e8d1fc7-c97f-4ec2-95bb-b3a7750ccb0c\"},{\"name\":\"Marcelle Maggio\",\"email\":\"Marielle_Kulas@hotmail.com\",\"website\":\"http://bryce.biz\",\"amount\":\"260.69\",\"phone\":\"(599) 298-8652\",\"closeAt\":\"2022-01-24T17:13:42.144Z\",\"id\":\"a535f4e3-c3bd-489c-9916-7aafc8358b84\"},{\"name\":\"Mayra Jenkins\",\"email\":\"Samson_Hermann8@hotmail.com\",\"website\":\"https://watson.com\",\"amount\":\"799.43\",\"phone\":\"094-221-3795 x0119\",\"closeAt\":\"2021-11-17T17:44:09.925Z\",\"id\":\"fccfaf8b-021e-4344-a79e-34198d4ca7bd\"},{\"name\":\"Barney Langosh\",\"email\":\"Adonis_Koelpin39@hotmail.com\",\"website\":\"http://clint.name\",\"amount\":\"141.99\",\"phone\":\"1-001-173-6157\",\"closeAt\":\"2022-08-26T08:52:14.009Z\",\"id\":\"3250dcb6-90ed-4569-b88c-b0b73f7db72d\"},{\"name\":\"Sierra Fritsch\",\"email\":\"Alvera_Cartwright29@gmail.com\",\"website\":\"https://john.org\",\"amount\":\"808.91\",\"phone\":\"236-852-8873 x61634\",\"closeAt\":\"2022-10-19T16:19:49.703Z\",\"id\":\"64fc536b-330a-4ea1-a897-3c3b21a161a5\"},{\"name\":\"Ashley Mertz\",\"email\":\"Michele.Mann@yahoo.com\",\"website\":\"http://ludie.org\",\"amount\":\"396.88\",\"phone\":\"1-714-143-5049 x4572\",\"closeAt\":\"2022-06-21T00:11:50.225Z\",\"id\":\"e0684008-c792-4910-a0a5-be910823fe7f\"},{\"name\":\"Caroline Abshire\",\"email\":\"Adelbert.Beahan@gmail.com\",\"website\":\"https://shania.com\",\"amount\":\"418.18\",\"phone\":\"938.978.1193\",\"closeAt\":\"2022-09-22T14:18:14.190Z\",\"id\":\"113bc52b-a270-43fc-b989-291aaca8e665\"},{\"name\":\"Murray Reynolds\",\"email\":\"Louvenia86@yahoo.com\",\"website\":\"https://pansy.net\",\"amount\":\"104.09\",\"phone\":\"524-138-7545 x21035\",\"closeAt\":\"2021-12-15T13:33:00.363Z\",\"id\":\"83535142-a073-4027-9742-66e4dbaf48c2\"},{\"name\":\"Odessa Hettinger\",\"email\":\"Ova44@gmail.com\",\"website\":\"https://makenna.biz\",\"amount\":\"509.27\",\"phone\":\"1-423-056-6489\",\"closeAt\":\"2022-07-09T23:03:46.997Z\",\"id\":\"e8aba4fb-d5f4-480b-9916-ee3ddcabecd9\"},{\"name\":\"Eugene Dickinson\",\"email\":\"Aurore60@gmail.com\",\"website\":\"http://dameon.net\",\"amount\":\"998.38\",\"phone\":\"1-706-676-3298 x964\",\"closeAt\":\"2022-06-12T00:14:59.300Z\",\"id\":\"e88da794-e5ac-434a-baa4-309469a8c4d5\"},{\"name\":\"Athena Hegmann\",\"email\":\"Ewald.Kub25@gmail.com\",\"website\":\"https://robyn.com\",\"amount\":\"607.39\",\"phone\":\"535.257.2178\",\"closeAt\":\"2022-09-28T08:10:08.709Z\",\"id\":\"2ebf8f62-d7de-45a4-923b-a155c439e770\"},{\"name\":\"Randal Doyle\",\"email\":\"Hermann_Durgan@yahoo.com\",\"website\":\"https://herbert.net\",\"amount\":\"969.92\",\"phone\":\"872-621-3655 x2570\",\"closeAt\":\"2022-07-24T00:45:56.600Z\",\"id\":\"9668319c-6402-41b6-b445-7dc189d6ce94\"},{\"name\":\"Misael Osinski\",\"email\":\"Ricardo.Mertz@yahoo.com\",\"website\":\"https://therese.net\",\"amount\":\"366.75\",\"phone\":\"1-527-857-8403\",\"closeAt\":\"2022-07-12T08:06:47.448Z\",\"id\":\"a4fec4af-d7c0-4572-95c5-d492dba6e667\"},{\"name\":\"Merl Stanton\",\"email\":\"Nico_McGlynn46@yahoo.com\",\"website\":\"http://marcelino.org\",\"amount\":\"726.91\",\"phone\":\"(195) 053-5066 x3329\",\"closeAt\":\"2021-12-08T14:21:25.481Z\",\"id\":\"a417bab9-5450-4a58-bf8c-1f0e673f6675\"},{\"name\":\"Lesly Williamson\",\"email\":\"Freda.White@hotmail.com\",\"website\":\"https://lorena.com\",\"amount\":\"391.89\",\"phone\":\"744-203-8952 x8235\",\"closeAt\":\"2022-09-10T23:14:43.539Z\",\"id\":\"1ed05d96-896b-4eac-9e01-005483021768\"},{\"name\":\"Ayla Metz\",\"email\":\"Lukas_Schimmel68@hotmail.com\",\"website\":\"http://travis.net\",\"amount\":\"500.03\",\"phone\":\"1-406-720-7540 x74309\",\"closeAt\":\"2022-10-28T00:36:36.945Z\",\"id\":\"59527d8b-be43-4cb1-8328-99baa4222406\"},{\"name\":\"Hailie Jast\",\"email\":\"Cristian.Boyer11@gmail.com\",\"website\":\"https://maynard.com\",\"amount\":\"423.67\",\"phone\":\"929.006.6659 x7049\",\"closeAt\":\"2022-02-26T16:02:59.025Z\",\"id\":\"50c2c768-33ae-42db-a4b4-fde6fe6d7d4d\"},{\"name\":\"Jairo Jakubowski\",\"email\":\"Dianna_Murazik@yahoo.com\",\"website\":\"http://jovanny.com\",\"amount\":\"415.86\",\"phone\":\"190-067-1311 x4613\",\"closeAt\":\"2022-03-31T02:10:17.472Z\",\"id\":\"1c2e3dc6-b7b4-498d-8f76-411279a530c3\"},{\"name\":\"Issac Medhurst\",\"email\":\"Malcolm_Wisoky47@hotmail.com\",\"website\":\"http://marlee.biz\",\"amount\":\"451.41\",\"phone\":\"500.632.8744\",\"closeAt\":\"2022-02-03T15:39:57.682Z\",\"id\":\"cf0d6ba4-97f8-4752-a7f5-0e34a57b5274\"},{\"name\":\"Claude Jast\",\"email\":\"Virgil.Wilderman34@gmail.com\",\"website\":\"https://genevieve.name\",\"amount\":\"758.85\",\"phone\":\"1-567-089-0359 x900\",\"closeAt\":\"2022-02-26T09:32:42.432Z\",\"id\":\"ece8c7ad-c83b-47ee-b24e-7154f71ccd03\"},{\"name\":\"Grayce Runolfsson\",\"email\":\"Kailyn_Fritsch@hotmail.com\",\"website\":\"http://florencio.org\",\"amount\":\"455.58\",\"phone\":\"1-753-696-6523\",\"closeAt\":\"2022-04-05T11:37:26.592Z\",\"id\":\"3763bd94-8cbf-4f16-824f-6757aa9e0a38\"},{\"name\":\"Wiley Rogahn\",\"email\":\"Nicklaus.Rempel1@hotmail.com\",\"website\":\"http://rene.biz\",\"amount\":\"561.07\",\"phone\":\"009.529.6444 x0856\",\"closeAt\":\"2022-01-27T02:04:58.804Z\",\"id\":\"f7101928-2f3d-4ed2-abad-6e9175699f77\"},{\"name\":\"Clair Dietrich\",\"email\":\"Michelle_Dare@hotmail.com\",\"website\":\"https://eliseo.info\",\"amount\":\"104.44\",\"phone\":\"1-366-357-6210 x742\",\"closeAt\":\"2021-12-24T23:07:25.305Z\",\"id\":\"4bf7173a-2271-4cb0-b847-7bf12c39cacf\"},{\"name\":\"Meagan Labadie\",\"email\":\"Bradley.Ward50@yahoo.com\",\"website\":\"https://dorian.info\",\"amount\":\"975.02\",\"phone\":\"394-885-9796\",\"closeAt\":\"2022-03-08T09:23:09.187Z\",\"id\":\"b82b8906-e152-4925-bc48-23df4fd34857\"},{\"name\":\"Audra Quigley\",\"email\":\"Eldridge_Satterfield@gmail.com\",\"website\":\"https://mikayla.name\",\"amount\":\"858.74\",\"phone\":\"(691) 697-4428 x220\",\"closeAt\":\"2022-01-13T20:29:01.698Z\",\"id\":\"f04ab9d0-2d5f-4a1e-9ab8-b837cb0e8791\"},{\"name\":\"Humberto Abshire\",\"email\":\"Ally.Dibbert65@yahoo.com\",\"website\":\"http://morris.biz\",\"amount\":\"76.29\",\"phone\":\"(297) 230-4976\",\"closeAt\":\"2022-10-31T12:58:51.790Z\",\"id\":\"e818990f-2efe-4bb6-843d-2057df765f37\"},{\"name\":\"Percy Grimes\",\"email\":\"Lizeth_Stamm@yahoo.com\",\"website\":\"https://giovanna.com\",\"amount\":\"199.36\",\"phone\":\"1-985-792-4149 x82815\",\"closeAt\":\"2022-07-13T14:01:18.931Z\",\"id\":\"d25a5622-822b-4ada-a10c-5447c7361821\"},{\"name\":\"Rhett Balistreri\",\"email\":\"Everardo.Huels@gmail.com\",\"website\":\"https://travis.name\",\"amount\":\"173.78\",\"phone\":\"1-661-111-1618\",\"closeAt\":\"2021-11-26T02:37:46.811Z\",\"id\":\"7ed143d2-d620-4d32-bc69-621a18bd852f\"},{\"name\":\"Edyth Flatley\",\"email\":\"Orland.Rath2@gmail.com\",\"website\":\"https://delmer.org\",\"amount\":\"107.13\",\"phone\":\"1-042-845-5534 x97184\",\"closeAt\":\"2022-07-11T04:46:09.548Z\",\"id\":\"302f504b-f66d-4a4d-9d17-88cd33858033\"},{\"name\":\"Tiffany Schaden\",\"email\":\"Mauricio.Streich97@hotmail.com\",\"website\":\"https://antonio.info\",\"amount\":\"664.35\",\"phone\":\"1-488-649-7466 x31964\",\"closeAt\":\"2022-02-01T20:18:41.127Z\",\"id\":\"25921893-a39c-47f0-84a5-24cb43dcf067\"},{\"name\":\"Romaine Dare\",\"email\":\"Katherine.Witting@hotmail.com\",\"website\":\"http://jayce.info\",\"amount\":\"116.39\",\"phone\":\"521.373.4501 x9019\",\"closeAt\":\"2022-05-06T04:26:56.203Z\",\"id\":\"4345d854-1853-478a-b54b-8e6085a2694b\"},{\"name\":\"Magdalen Goodwin\",\"email\":\"Suzanne.Reinger@yahoo.com\",\"website\":\"https://melvin.net\",\"amount\":\"475.70\",\"phone\":\"814-308-3126 x5667\",\"closeAt\":\"2022-04-24T14:07:23.774Z\",\"id\":\"e3e9a48c-7dba-4b74-b691-7b05f5c87f04\"},{\"name\":\"Leif Koepp\",\"email\":\"Magdalen_Rau@yahoo.com\",\"website\":\"http://ludie.name\",\"amount\":\"623.27\",\"phone\":\"1-915-710-3805 x797\",\"closeAt\":\"2022-07-02T23:00:58.885Z\",\"id\":\"405640ee-675d-4101-a395-a440fb3ec081\"},{\"name\":\"Marty Hermiston\",\"email\":\"Kaya.Murazik75@yahoo.com\",\"website\":\"http://jordyn.biz\",\"amount\":\"697.74\",\"phone\":\"1-614-946-5749 x798\",\"closeAt\":\"2022-03-04T20:47:00.848Z\",\"id\":\"d5ef4c00-aa7d-47df-94ff-5fe082e4176a\"},{\"name\":\"General Botsford\",\"email\":\"Harry.Jacobi81@gmail.com\",\"website\":\"http://ryder.info\",\"amount\":\"356.88\",\"phone\":\"855.394.1547 x77193\",\"closeAt\":\"2022-05-28T04:14:30.133Z\",\"id\":\"5c2486f1-9d06-4678-b705-f61e594d9fa0\"},{\"name\":\"Jazmyne Erdman\",\"email\":\"Uriah_Ernser96@gmail.com\",\"website\":\"https://merlin.biz\",\"amount\":\"329.86\",\"phone\":\"963-990-4856 x9779\",\"closeAt\":\"2021-12-23T04:34:38.161Z\",\"id\":\"5892d89e-90d8-4f4d-b163-c522aad7901f\"},{\"name\":\"Myrtie Pfeffer\",\"email\":\"Jewell_Wisoky59@yahoo.com\",\"website\":\"https://noah.name\",\"amount\":\"170.84\",\"phone\":\"1-057-226-6401 x92471\",\"closeAt\":\"2022-04-26T00:24:32.554Z\",\"id\":\"4b6ad740-d270-43c2-84ac-2ffdb19275f9\"},{\"name\":\"Reta Harvey\",\"email\":\"Anna62@hotmail.com\",\"website\":\"https://bryce.name\",\"amount\":\"922.16\",\"phone\":\"586-545-0879\",\"closeAt\":\"2022-09-28T03:11:23.630Z\",\"id\":\"5f13f21c-f6d6-4c8e-b24c-d1eedbdd2141\"},{\"name\":\"Jayson Stark\",\"email\":\"Kadin_Wiegand13@hotmail.com\",\"website\":\"http://otha.name\",\"amount\":\"260.42\",\"phone\":\"986.130.7495\",\"closeAt\":\"2022-08-16T17:54:32.879Z\",\"id\":\"566afa0c-dfa9-4073-bd93-2a0b6f18a181\"},{\"name\":\"Rahsaan Hartmann\",\"email\":\"Ricardo_Greenfelder@hotmail.com\",\"website\":\"https://holden.net\",\"amount\":\"550.59\",\"phone\":\"1-543-375-7456\",\"closeAt\":\"2022-08-23T12:23:08.231Z\",\"id\":\"da99ca8e-0aef-4f37-86a2-27ef5db5e275\"},{\"name\":\"Joannie Waters\",\"email\":\"Raheem_Pacocha25@yahoo.com\",\"website\":\"http://kaylie.name\",\"amount\":\"311.93\",\"phone\":\"(781) 730-5556 x1852\",\"closeAt\":\"2022-04-30T03:26:58.660Z\",\"id\":\"e8b50acb-fc76-477d-8f6d-3c8b37ca900c\"},{\"name\":\"Garnet Hoppe\",\"email\":\"Odell.Wehner@gmail.com\",\"website\":\"http://taya.com\",\"amount\":\"452.02\",\"phone\":\"(065) 414-6639 x9375\",\"closeAt\":\"2022-08-15T02:42:46.918Z\",\"id\":\"608db525-14d7-4634-a514-8f54dc2db1c0\"},{\"name\":\"June Powlowski\",\"email\":\"Brisa_Murazik74@hotmail.com\",\"website\":\"http://yolanda.info\",\"amount\":\"118.78\",\"phone\":\"986-465-1266\",\"closeAt\":\"2022-03-16T05:30:15.767Z\",\"id\":\"5080ae70-4fdb-43a4-a7c6-485bd230f3da\"},{\"name\":\"Zoey Rath\",\"email\":\"Orion.West@gmail.com\",\"website\":\"http://margarete.name\",\"amount\":\"336.75\",\"phone\":\"426-057-6009\",\"closeAt\":\"2022-09-04T08:18:27.074Z\",\"id\":\"8c0bf5cf-462d-4507-a4da-dbd77927967c\"},{\"name\":\"Carmine Wiza\",\"email\":\"Jamar.Balistreri52@gmail.com\",\"website\":\"http://jensen.org\",\"amount\":\"881.92\",\"phone\":\"(801) 395-1019\",\"closeAt\":\"2022-05-10T09:32:22.568Z\",\"id\":\"ed1a579f-aa7e-4379-a10d-c250c4ef6ecc\"},{\"name\":\"Melvin Powlowski\",\"email\":\"Isom_Bahringer@hotmail.com\",\"website\":\"https://gaylord.net\",\"amount\":\"824.86\",\"phone\":\"1-571-917-8984\",\"closeAt\":\"2021-12-22T09:18:58.246Z\",\"id\":\"459e0125-48ed-4b9a-a00e-6a288532892d\"},{\"name\":\"Jannie Rau\",\"email\":\"Filomena.Kub33@hotmail.com\",\"website\":\"https://anastasia.org\",\"amount\":\"655.96\",\"phone\":\"(909) 115-2830 x170\",\"closeAt\":\"2021-11-01T22:52:58.777Z\",\"id\":\"1aced5a5-40b8-47a2-9eb2-8eb5e8ba9b61\"},{\"name\":\"Rigoberto Harris\",\"email\":\"Candelario_Lakin@hotmail.com\",\"website\":\"http://margarett.net\",\"amount\":\"927.32\",\"phone\":\"651.908.6991 x116\",\"closeAt\":\"2021-11-11T20:47:03.240Z\",\"id\":\"9f960bc4-7e42-479f-b813-aa591f5e2c9d\"},{\"name\":\"Hosea Schaefer\",\"email\":\"Colin_Sipes@yahoo.com\",\"website\":\"https://geovany.biz\",\"amount\":\"500.26\",\"phone\":\"451.301.3607\",\"closeAt\":\"2022-06-07T06:48:28.470Z\",\"id\":\"3026b56f-6b2c-42e5-8847-c8b7bc17b1df\"},{\"name\":\"Adan Kilback\",\"email\":\"Efren.Bauch@yahoo.com\",\"website\":\"https://eunice.info\",\"amount\":\"192.09\",\"phone\":\"318.201.9017 x4793\",\"closeAt\":\"2022-03-19T04:23:08.746Z\",\"id\":\"3c11b03e-8bfd-4c92-b53f-b4f7aec443e5\"},{\"name\":\"Jordan Borer\",\"email\":\"Rosetta76@gmail.com\",\"website\":\"http://raleigh.org\",\"amount\":\"947.45\",\"phone\":\"1-607-627-4368 x47042\",\"closeAt\":\"2022-10-21T17:09:39.038Z\",\"id\":\"354d8993-403b-4084-8e27-24f4bad92168\"},{\"name\":\"Kareem Swaniawski\",\"email\":\"Lelah98@yahoo.com\",\"website\":\"https://emily.org\",\"amount\":\"803.59\",\"phone\":\"579-031-1315 x414\",\"closeAt\":\"2022-03-23T14:03:33.049Z\",\"id\":\"eee15af7-eb05-42d8-9efe-dcb91a593e5b\"},{\"name\":\"Margaretta Terry\",\"email\":\"Daisha.Morissette@gmail.com\",\"website\":\"https://richard.name\",\"amount\":\"439.00\",\"phone\":\"959.527.1733\",\"closeAt\":\"2022-05-05T06:18:31.836Z\",\"id\":\"82462d0a-6985-4f66-b40a-cc075cd48d35\"},{\"name\":\"Ryleigh Nienow\",\"email\":\"Kathryn_Macejkovic25@yahoo.com\",\"website\":\"http://summer.name\",\"amount\":\"429.51\",\"phone\":\"914-581-0319 x5998\",\"closeAt\":\"2022-02-01T08:09:01.258Z\",\"id\":\"cc775ab1-d527-4fa4-a279-450c17de7def\"},{\"name\":\"Carmen Hyatt\",\"email\":\"Desmond67@gmail.com\",\"website\":\"https://daisha.name\",\"amount\":\"184.06\",\"phone\":\"245-588-9748\",\"closeAt\":\"2022-08-07T19:51:29.325Z\",\"id\":\"cfbc834c-33c2-4a79-98d8-729c5c681202\"},{\"name\":\"Fausto Raynor\",\"email\":\"Van86@yahoo.com\",\"website\":\"https://sydni.name\",\"amount\":\"885.88\",\"phone\":\"083-726-0622\",\"closeAt\":\"2021-12-26T20:29:19.300Z\",\"id\":\"fc0d74dd-f44e-4d90-a08a-1c8fdd0d6796\"},{\"name\":\"Alfreda Cruickshank\",\"email\":\"Rosalia_Senger@hotmail.com\",\"website\":\"https://lenny.biz\",\"amount\":\"85.70\",\"phone\":\"100.644.2518\",\"closeAt\":\"2022-04-01T19:30:16.162Z\",\"id\":\"6361db39-14bc-4ffb-b8f8-f74df88a3657\"},{\"name\":\"Rozella O'Hara\",\"email\":\"Kelvin_Harris13@hotmail.com\",\"website\":\"http://myrtis.com\",\"amount\":\"867.33\",\"phone\":\"1-122-597-1416 x893\",\"closeAt\":\"2021-11-22T21:28:49.125Z\",\"id\":\"c793b774-76d8-4b4c-8569-5ebc710ffaa4\"},{\"name\":\"Korbin Bradtke\",\"email\":\"Vincenza4@gmail.com\",\"website\":\"https://wellington.net\",\"amount\":\"918.25\",\"phone\":\"1-004-287-6378 x18815\",\"closeAt\":\"2022-04-25T16:18:31.037Z\",\"id\":\"d010f8b7-3761-4afb-ad87-88c1b3ad9f1f\"},{\"name\":\"Prince McClure\",\"email\":\"Terrill4@gmail.com\",\"website\":\"http://rosalia.net\",\"amount\":\"42.60\",\"phone\":\"1-270-301-0548\",\"closeAt\":\"2022-03-18T11:26:52.913Z\",\"id\":\"851d184c-fdfa-4ce5-b328-6548c0b6d138\"}]";
		Array<Object> data = (Array<Object>)JSON.parse(sdata);
		String scols = "[{\"label\":\"Name\",\"fieldName\":\"name\"},{\"label\":\"Website\",\"fieldName\":\"website\",\"type\":\"url\"},{\"label\":\"Phone\",\"fieldName\":\"phone\",\"type\":\"phone\"},{\"label\":\"Balance\",\"fieldName\":\"amount\",\"type\":\"currency\"},{\"label\":\"Close At\",\"fieldName\":\"closeAt\",\"type\":\"date\"},{\"type\":\"action\",\"typeAttributes\":{\"rowActions\":[{\"label\":\"Show details\",\"name\":\"show_details\"},{\"label\":\"Delete\",\"name\":\"delete\"}]}}]";
		Array<Object> columns = (Array<Object>)JSON.parse(scols);
		columns.$get(0).$set("editable", true);
		DataGrid grid = new DataGrid("grid");
		grid.setColumns(columns);
		grid.setData(data);
		grid.refresh();
		grid.setStyle("width", "1187px");
		return grid;
		
		
	}
	
	
	private static JSContainer getModal() {
		
		JSContainer container = new JSContainer("ctn", "div");
		Button button = new Button("open");
		button.setVariant(Variant.BRAND);
		button.setLabel("Open");
		container.addChild(button);
		
		Modal modal = new Modal("modal");
		modal.setSize(ModalSize.LARGE);
		
		Section personalInfo = new Section("Personal Information");
		personalInfo.setLabel("Personal Information");
		Form frmPersonalInfo = new Form("");
		frmPersonalInfo.row(0).item(0).addChild(new Input("salutation").setLabel("Salutation").setVariant(FormElementVariant.LABEL_STACKED));
		frmPersonalInfo.row(0).item(1).addChild(new Input("firstName").setLabel("First Name").setRequired(true).setVariant(FormElementVariant.LABEL_STACKED));
		frmPersonalInfo.row(1).item(0).addChild(new Input("lasttName").setLabel("Last Name").setRequired(true).setVariant(FormElementVariant.LABEL_STACKED));
		frmPersonalInfo.row(1).item(1).addChild(new Input("email").setLabel("Email").setRequired(true).setVariant(FormElementVariant.LABEL_STACKED));
		frmPersonalInfo.row(2).item(0).addChild(new Input("phone").setLabel("Phone").setRequired(true).setVariant(FormElementVariant.LABEL_STACKED));
		frmPersonalInfo.row(2).item(1).addChild(new Input("mobile").setLabel("Mobile Phone").setRequired(true).setVariant(FormElementVariant.LABEL_STACKED));
		frmPersonalInfo.row(3).item(0).addChild(new Input("addressLine1").setLabel("Addr Line 1").setRequired(true).setVariant(FormElementVariant.LABEL_STACKED));
		frmPersonalInfo.row(3).item(1).addChild(new Input("addressLine2").setLabel("Addr Line2").setRequired(true).setVariant(FormElementVariant.LABEL_STACKED));
		frmPersonalInfo.row(4).item(0).addChild(new Input("city").setLabel("City").setRequired(true).setVariant(FormElementVariant.LABEL_STACKED));
		frmPersonalInfo.row(4).item(1).addChild(new Input("postalCode").setLabel("Posttal Code").setRequired(true).setVariant(FormElementVariant.LABEL_STACKED));
		frmPersonalInfo.row(5).item(0).addChild(new Input("province").setLabel("Province").setRequired(true).setVariant(FormElementVariant.LABEL_STACKED));
		frmPersonalInfo.row(5).item(1).addChild(new Input("country").setLabel("Addr Line2").setRequired(true).setVariant(FormElementVariant.LABEL_STACKED));
		frmPersonalInfo.row(6).item(0).addChild(new Input("age").setMin(10).setType(InputType.NUMBER).setLabel("Age").setRequired(true).setVariant(FormElementVariant.LABEL_STACKED));
		

		personalInfo.getContent().addChild(frmPersonalInfo);
		
		
		Section otherInfo = new Section("Other info");
		otherInfo.setLabel("Other info");
		Form frm = new Form("otdf");
		
		RadioGroup cbg = new RadioGroup("maritalStatus");
		cbg.setStyle("width", "100%");
		cbg.setLabel("Marital Status");
		cbg.setOptions(OptionsBuilder.create().add("Single","Married", "Divorced" ).get());
		frm.row(0).item(0).addChild(cbg);
		otherInfo.getContent().addChild(frm);
		
		frm.row(0).item(1).addChild(
				new CheckBoxGroup("educationLevel")
					.setOptions(OptionsBuilder.create().add("SC","HSC", "BA", "MA", "Phd").get())
					.setLabel("Education Level")
					.setStyle("width", "100%"));
		
		
		Section options = new Section("it").setLabel("Options");
		Form fmo = new Form("fme");
		fmo.row(0).item(0).addChild(getDualListBox());
		options.getContent().addChild(fmo);
		//JSForm form = new JSForm("form");
		///form.setStyle("padding", "0.5rem");
		modal.setTitle("User Registration");
		
		//form.addChild(firstName);
		//form.addChild(lastName);
		//form.addChild(email);
		
		modal.getContent().addChild(personalInfo);
		modal.getContent().addChild(otherInfo);
		modal.getContent().addChild(options);
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
	
	
	@SuppressWarnings("unchecked")
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
		addVerticalTab("DataGrid", getTable(), set);
		return set;
	}
}
