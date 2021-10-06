package com.spoonconsulting.lightning;

import com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant;

import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;

public class ButtonMenu extends BaseLightning{

	private ButtonIcon button = new ButtonIcon("button", "utility:down");
	
	private Dropdown dropdown = new Dropdown("dropdown");

	private String menuAlignment = MenuAlignment.LEFT.value;
	
	private boolean nubbin= false;
	
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
	
	public ButtonMenu setExpanded(boolean b) {
		if(b) {
			button.setAttribute("aria-expanded", "true");
			addClass("slds-is-open");
		}else {
			button.setAttribute("aria-expanded", "false");
			removeClass("slds-is-open");
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
		return setMenuAlignment(alignment != null? alignment.value : MenuAlignment.AUTO.value);
	}
	
	public ButtonMenu setMenuAlignment(String alignment) {
		this.menuAlignment = alignment;
		
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
		
		
		if(menuAlignment == MenuAlignment.BOTTOM_CENTER.value) {
			dropdown.addClass("slds-dropdown_bottom");
			if(nubbin) {
				dropdown.addClass("slds-nubbin_bottom");
			}
		}else if(menuAlignment == MenuAlignment.BOTTOM_RIGHT.value) {
			dropdown.addClass("slds-dropdown_right")
				.addClass("slds-dropdown_bottom-right");
			if(nubbin) {
				dropdown.addClass("slds-nubbin_bottom-right");
			}
		}else if(menuAlignment == MenuAlignment.BOTTOM_LEFT.value) {
			dropdown.addClass("slds-dropdown_left")
				.addClass("slds-dropdown_bottom-left");
			if(nubbin) {
				dropdown.addClass("slds-nubbin_bottom-left");
			}
		}else if(menuAlignment == MenuAlignment.CENTER.value) {
			dropdown.addClass("slds-dropdown_center");
			if(nubbin) {
				dropdown.addClass("slds-nubbin_top");
			}
		}else if(menuAlignment == MenuAlignment.RIGHT.value) {
			dropdown.addClass("slds-dropdown_right");
			if(nubbin) {
				dropdown.addClass("slds-nubbin_top-right");
			}
		}else if(menuAlignment == MenuAlignment.LEFT.value) {
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

	public enum MenuAlignment{
		
		LEFT("top"),
		RIGHT("right"),
		CENTER("center"),
		BOTTOM_LEFT("bottom-left"),
		BOTTOM_RIGHT("bottom-right"),
		BOTTOM_CENTER("bottom-center"),
		AUTO("auto");
		
		private String value;
		
		private MenuAlignment(String val) {
			this.value = val;
		}
	}
}
