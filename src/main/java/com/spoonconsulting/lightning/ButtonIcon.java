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
	
	public ButtonIcon setSize(Size size) {
		for(Size s : Size.values()) {
			removeClass("slds-button_icon-" + s.getValue());
		}
		addClass("slds-button_icon-" + size.getValue());
		return this;
	}
	
	public ButtonIcon setTooltip(String tooltip) {
		setTitle(tooltip);
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
		BORDER_INVERSE("borde-inverse");
		
		private ButtonIconVariant(String value) {
			this.value = value;
		}
		private String value;
		public String getValue() {
			return this.value;
		}
	}

}
