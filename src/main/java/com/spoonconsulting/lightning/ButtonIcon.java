package com.spoonconsulting.lightning;

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
			icon.removeClass("slds-button__icon_" + s.getValue());
		}
		if(size != null)
			icon.addClass("slds-button__icon_" + size);
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



	public enum ButtonIconVariant{
		
		
		BARE("bare"),
		CONTAINER("container"),
		BRAND("brand"),
		BORDER("border"),
		BORDER_FILLED("border-filled"),
		BARE_INVERSE("bare-inverse"),
		BORDER_INVERSE("border-inverse");
		
		private ButtonIconVariant(String value) {
			this.value = value;
		}
		private String value;
		public String getValue() {
			return this.value;
		}
	}

}
