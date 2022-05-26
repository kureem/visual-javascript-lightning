package com.spoonconsulting.lightning;

import com.spoonconsulting.lightning.enums.MenuAlignment;
import com.spoonconsulting.lightning.enums.Size;
import com.spoonconsulting.lightning.enums.Variants.ButtonIconVariant;

import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;

public class ButtonMenu extends BaseLightning{

	private ButtonIcon button = new ButtonIcon("button", "utility:down");
	
	private Dropdown dropdown = new Dropdown("dropdown");

	private String menuAlignment = MenuAlignment.LEFT.getValue();
	
	private boolean nubbin= false;
	
	private boolean sticky = false;
	
	public ButtonMenu(String name, String tag) {
		super(name, tag);
		addClass("slds-dropdown-trigger")
		.addClass("slds-dropdown-trigger_click")
		.addChild(button)
		.addChild(dropdown);
		
		button.setVariant(ButtonIconVariant.BORDER_FILLED)
			.setAttribute("aria-haspopup", "true")
			.setAttribute("aria-expanded", "true")
			.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					toggle();
				}
			}, "click");
		
		setExpanded(false);
		dropdown.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				if(!sticky)
					setExpanded(false);
				fireListener("select", evt);
			}
		}, "select");
	}
	
	public void toggle() {
		setExpanded(!isExpanded());
	}
	
	public void open() {
		setExpanded(true);
	}
	
	public void close() {
		setExpanded(false);
	}
	
	public ButtonMenu setButtonSize(Size size) {
		this.button.setSize(size);
		return this;
	}
	
	
	
	public ButtonMenu setExpanded(boolean b) {
		if(b) {
			button.setAttribute("aria-expanded", "true");
			addClass("slds-is-open");
			getDropdown().setStyle("display", "block");
		}else {
			button.setAttribute("aria-expanded", "false");
			removeClass("slds-is-open");
			getDropdown().setStyle("display", "none");
		}
		return this;
	}
	
	public Boolean isExpanded() {
		return "true" == button.getAttribute("aria-expanded");
	}

	public Boolean getIsDraft() {
		return button.getIsDraft();
	}

	public ButtonMenu setIsDraft(Boolean isDraft) {
		this.button.setIsDraft(isDraft);
		return this;
	}

	public String getDraftAlternativeText() {
		return button.getDraftAlternativeText();
	}

	public ButtonMenu setDraftAlternativeText(String draftAlternativeText) {
		button.setDraftAlternativeText(draftAlternativeText);
		return this;
	}
	
	public ButtonMenu setIconName(String iconName) {
		if(iconName == "utility:down" || iconName == "utility:chevrondown") {
			button.setPrefixIconName(null)
				.setIconName(iconName);
		}else {
			button.setPrefixIconName(iconName)
				.setIconName("utility:down");
		}
		return this;
	}
	
	public String getIconName() {
		if(button.getPrefixIconName() != null) {
			return button.getPrefixIconName();
		}else {
			return button.getIconName();
		}
	}
	
	public ButtonMenu setDisabled(boolean b) {
		button.setDisabled(b);
		if(!b) {
			setExpanded(false);
		}
		return this;
	}
	
	public ButtonMenu setLabel(String label) {
		button.setLabel(label);
		return this;
	}
	
	public String getLabel() {
		return button.getLabel();
	}
	
	public ButtonMenu setIconSize(Size size) {
		return setIconSize(size != null?size.getValue():(String)null);
	}
	
	public ButtonMenu setIconSize(String size) {
		if(button.getPrefixIconName() != null) {
			button.getPrefixIcon().setSize(size);
		}else {
			button.getIcon().setSize(size);
		}
		return this;
	}
	
	public ButtonMenu setIsLoading(boolean b) {
		dropdown.setIsLoading(b);
		return this;
	}
	
	public Boolean getIsLoading() {
		return dropdown.getIsLoading();
	}
	
	public ButtonMenu setLoadingStateAlternativeText(String txt) {
		dropdown.getSpinner().setAlternativeText(txt);
		return this;
	}
	
	public ButtonMenu setMenuAlignment(MenuAlignment alignment) {
		return setMenuAlignment(alignment != null? alignment.getValue() : MenuAlignment.AUTO.getValue());
	}
	
	public ButtonMenu setMenuAlignment(String alignment) {
		this.menuAlignment = alignment;
		refresh();
		return this;
	}
	
	public String getMenuAlignment() {
		return this.menuAlignment;
	}
	
	public boolean isNubbin() {
		return nubbin;
	}

	public ButtonMenu setNubbin(boolean nubbin) {
		this.nubbin = nubbin;
		refresh();
		return this;
	}
	
	public ButtonMenu setValue(String val) {
		this.button.setValue(val);
		return this;
	}
	
	public String getValue() {
		return this.button.getValue();
	}
	
	public ButtonMenu setVariant(ButtonIconVariant variant) {
		this.button.setVariant(variant);
		return this;
	}
	
	public ButtonMenu setVariant(String variant) {
		this.button.setVariant(variant);
		return this;
	}

	public void refresh() {
		
		String[] suffixes = new String[] {
					"bottom", 
					"left",
					"right",
					"center",
					"bottom-right",
					"bottom-left",
					"top",
					"top-right", 
					"top-left"
					};
		
		for(String suffix : suffixes) {
			dropdown.removeClass("slds-dropdown_" + suffix)
				.removeClass("slds-nubbin_" + suffix);
		}
		
		
		if(menuAlignment == MenuAlignment.BOTTOM_CENTER.getValue()) {
			dropdown.addClass("slds-dropdown_bottom");
			if(nubbin) {
				dropdown.addClass("slds-nubbin_bottom");
			}
		}else if(menuAlignment == MenuAlignment.BOTTOM_RIGHT.getValue()) {
			dropdown.addClass("slds-dropdown_right")
				.addClass("slds-dropdown_bottom-right");
			if(nubbin) {
				dropdown.addClass("slds-nubbin_bottom-right");
			}
		}else if(menuAlignment == MenuAlignment.BOTTOM_LEFT.getValue()) {
			dropdown.addClass("slds-dropdown_left")
				.addClass("slds-dropdown_bottom-left");
			if(nubbin) {
				dropdown.addClass("slds-nubbin_bottom-left");
			}
		}else if(menuAlignment == MenuAlignment.CENTER.getValue()) {
			dropdown.addClass("slds-dropdown_center");
			if(nubbin) {
				dropdown.addClass("slds-nubbin_top");
			}
		}else if(menuAlignment == MenuAlignment.RIGHT.getValue()) {
			dropdown.addClass("slds-dropdown_right");
			if(nubbin) {
				dropdown.addClass("slds-nubbin_top-right");
			}
		}else if(menuAlignment == MenuAlignment.LEFT.getValue()) {
			dropdown.addClass("slds-dropdown_left");
			if(nubbin) {
				dropdown.addClass("slds-nubbin_top-left");
			}
		}else {
			dropdown.addClass("slds-dropdown_left");
			if(nubbin) {
				dropdown.addClass("slds-nubbin_top-left");
			}
		}
	}
	
	public ButtonMenu clearMenu() {
		this.dropdown.clearMenu();
		return this;
	}
	
	public ButtonMenu addItem(String value, String label, String iconName) {
		MenuItem menuItem = new MenuItem(value);
		menuItem.setLabel(label);
		menuItem.setIconName(iconName);
		menuItem.setValue(value);
		addItem(menuItem);
		return this;
	}
	
	public ButtonMenu setOptions(Array<Object> options) {
		clearMenu();
		for(Object option : options) {
			String value = (String) option.$get("value");
			if(value == null) {
				value = (String)option.$get("name");
			}
			String label = (String) option.$get("label");
			String iconName = (String) option.$get("iconName");
			addItem( value, label, iconName);
		}
		return this;
	}
	
	public ButtonMenu addItem(MenuItem item) {
		dropdown.addItem(item);
		
		return this;
	}
	
	public MenuItem getMenuItem(String name) {
		return dropdown.getItem(name);
	}
	public ButtonIcon getButton() {
		return button;
	}

	public Dropdown getDropdown() {
		return dropdown;
	}

	public boolean isSticky() {
		return sticky;
	}

	public void setSticky(boolean sticky) {
		this.sticky = sticky;
	}
	
	
}
