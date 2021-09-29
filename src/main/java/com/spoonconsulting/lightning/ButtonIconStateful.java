package com.spoonconsulting.lightning;

public class ButtonIconStateful extends ButtonIcon {

	public ButtonIconStateful(String name, String iconName) {
		super(name, iconName);
	}
	
	
	public ButtonIconStateful setSelected(boolean b) {
		if(b) {
			addClass("slds-is-selected");
		}else {
			removeClass("slds-is-selected");
		}
		
		return this;
	}
	
	public Boolean isSelected() {
		return hasClass("slds-is-selected");
	}
	
	
	public enum ButtonIconStatefulVariant{
		
		
		BORDER("border"),
		BORDER_FILLED("border-filled"),
		BORDER_INVERSE("borde-inverse");
		
		private ButtonIconStatefulVariant(String value) {
			this.value = value;
		}
		private String value;
		public String getValue() {
			return this.value;
		}
	}

}
