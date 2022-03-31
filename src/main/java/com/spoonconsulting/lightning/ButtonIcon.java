package com.spoonconsulting.lightning;

import com.spoonconsulting.lightning.enums.Size;
import com.spoonconsulting.lightning.enums.Variants.ButtonIconVariant;

public class ButtonIcon extends Button{

	public ButtonIcon(String name, String iconName) {
		super(name);
		setIconName(iconName);
		super.label.addClass("slds-assistive-text");
		addClass("slds-button_icon");
	}
	
	public ButtonIcon setAlternativeText(String altText) {
		setLabel(altText);
		return this;
	}
	
	public ButtonIcon setIconClass(String iconClass) {
		icon.setAttribute("class", "slds-button__icon " + iconClass);
		return this;
	}
	
	public ButtonIcon setSize(String size) {
		for(Size s : Size.values()) {
			removeClass("slds-button_icon-" + s.getValue());
			icon.removeClass("slds-button__icon_" + s.getValue());
		}
		
		if(size != null) {
			addClass("slds-button_icon-" + size);
			icon.addClass("slds-button__icon_" + size);
		}
		return this;
	}
	
	public ButtonIcon setSize(Size size) {
		return setSize(size != null? size.getValue():(String)null);
	}
	
	public ButtonIcon setTooltip(String tooltip) {
		setTitle(tooltip);
		return this;
	}
	
	@Override
	public Button refresh() {
		 super.refresh();
		if(icon != null) {
			icon.removeClass("slds-button__icon_right").removeClass("slds-button__icon_left");
		}
		return this;
	}

	public ButtonIcon setVariant(String variant) {
		for(ButtonIconVariant v : ButtonIconVariant.values()) {
			removeClass("slds-button_icon-" + v.getValue());
		}
		addClass("slds-button_icon-" + variant);
		return this;
	}
	
	public ButtonIcon setVariant(ButtonIconVariant variant) {
		return setVariant(variant.getValue());
	}
	
	@Override
	public Button setLabel(String label) {
		getUILabel().setHtml(label);
		return this;
	}
}
