package com.spoonconsulting.lightning;

import com.spoonconsulting.lightning.enums.Variants.Variant;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.dom.HTMLElement;

public class ButtonStateful extends BaseLightning {

	private innerBtn btnNotSelected = new innerBtn("not-selected");

	private innerBtn btnSelected = new innerBtn("selected");

	private innerBtn btnSelectedFocus = new innerBtn("selected-focus");

	private boolean selected = false;

	public ButtonStateful(String name) {
		super(name, "button");
		addClass("slds-button")
		.addClass("slds-button_stateful")
		.addChild(btnNotSelected)
		.addChild(btnSelected)
		.addChild(btnSelectedFocus);
		
		addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				setSelected(!isSelected());
			}
		}, "click");
		
		setSelected(false);
	}

	public String getIconNameWhenHover() {
		return this.btnSelectedFocus.icon.getIconName();
	}

	public ButtonStateful setIconNameWhenHover(String iconNameWhenHover) {
		this.btnSelectedFocus.setIconName(iconNameWhenHover);
		return this;
	}

	public String getIconNameWhenOff() {
		return this.btnNotSelected.icon.getIconName();
	}

	public ButtonStateful setIconNameWhenOff(String iconNameWhenOff) {
		this.btnNotSelected.setIconName(iconNameWhenOff);
		return this;
	}

	public String getIconNameWhenOn() {
		return this.btnSelected.icon.getIconName();
	}

	public ButtonStateful setIconNameWhenOn(String iconNameWhenOn) {
		this.btnSelected.setIconName(iconNameWhenOn);
		return this;
	}

	public String getLabelWhenHover() {
		return this.btnSelectedFocus.label.getHtml();
	}

	public ButtonStateful setLabelWhenHover(String labelWhenHover) {
		this.btnSelectedFocus.setLabel(labelWhenHover);
		return this;
	}

	public String getLabelWhenOff() {
		return this.btnNotSelected.label.getHtml();
	}

	public ButtonStateful setLabelWhenOff(String labelWhenOff) {
		this.btnNotSelected.setLabel(labelWhenOff);
		return this;
	}

	public String getLabelWhenOn() {
		return this.btnSelected.label.getHtml();
	}

	public ButtonStateful setLabelWhenOn(String labelWhenOn) {
		this.btnSelected.setLabel(labelWhenOn);
		return this;
	}

	public ButtonStateful setVariant(String variant) {
		for (Variant v : Variant.values()) {
			removeClass("slds-button_" + v.getValue());
		}
		if (variant != null && variant != "")
			addClass("slds-button_" + variant);
		return this;
	}

	public ButtonStateful setVariant(Variant variant) {
		return setVariant(variant != null ? variant.getValue() : (String) null);
	}

	public ButtonStateful setSelected(boolean selected) {
		this.selected = selected;
		if (selected) {
			addClass("slds-is-selected");
			removeClass("slds-not-selected");
		} else {
			addClass("slds-not-selected");
			removeClass("slds-is-selected");
		}
		return this;
	}

	public boolean isSelected() {
		return selected;
	}

	public innerBtn getBtnNotSelected() {
		return btnNotSelected;
	}

	public innerBtn getBtnSelected() {
		return btnSelected;
	}

	public innerBtn getSelectedFocus() {
		return btnSelectedFocus;
	}

	private class innerBtn extends JSContainer {

		private Icon icon = new Icon("icon", "utility:add");

		private JSContainer label = new JSContainer("label", "span");

		public innerBtn(String name) {
			super(name, "span");
			addClass("slds-text-" + name);
			icon.removeClass("slds-icon");
			addChild(label);
			icon.addClass("slds-button__icon_stateful").addClass("slds-button__icon_left");
		}

		public void setLabel(String label) {
			this.label.setHtml(label);
		}

		public void setIconName(String iconName) {
			clearChildren();
			if (iconName != null) {
				addChild(icon.setIconName(iconName));
			}
			addChild(label);
			setRendered(false);
		}
	}
	
	public void focus() {
		HTMLElement elm = getElement();
		if(elm != null) {
			elm.focus();
		}
	}
}
