package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import jsweet.dom.HTMLElement;

public class Button extends BaseLightning {

	protected Icon icon = new Icon("icon", "utility:down");
	
	private Icon prefixIcon = new Icon("prefix-icon", "utility:down");

	protected JSContainer label = new JSContainer("label", "span");

	private JSContainer draft = new JSContainer("draft", "abbr");

	public static String ICON_POSITION_LEFT = "left";
	public static String ICON_POSITION_RIGHT = "right";

	public static String TYPE_BUTTON = "button";
	public static String TYPE_SUBMIT = "submit";
	public static String TYPE_RESET = "reset";

	private String iconName = null;

	private String iconPosition = null;

	private Boolean isDraft = false;

	private String draftAlternativeText = null;
	
	private String prefixIconName = null;

	public Button(String name) {
		super(name, "button");
		addClass("slds-button");
		addChild(label);
		icon.removeClass("slds-icon");
		icon.addClass("slds-button__icon");
		icon.setAttribute("aria-hidden", "true");
		icon.setAttribute("focusabled", "false");
		
		prefixIcon.removeClass("slds-icon");
		prefixIcon.addClass("slds-button__icon");
		prefixIcon.setAttribute("aria-hidden", "true");
		prefixIcon.setAttribute("focusabled", "false");
		
		
		draft.addClass("slds-indicator_unsaved").addClass("slds-p-right_xx-small");
		draft.setHtml("*");
	}
	
	
	

	public Button refresh() {
		clearChildren();
		if(prefixIconName != null && prefixIconName != "") {
			addChild(prefixIcon);
			prefixIcon.setIconName(prefixIconName);
			icon.addClass("slds-button__icon_x-small").addClass("slds-m-left_xx-small");
		}else {
			icon.removeClass("slds-button__icon_x-small").removeClass("slds-m-left_xx-small");
		}
		
		if (iconName != null && iconName != "") {
			
			icon.removeClass("slds-button__icon_right").removeClass("slds-button__icon_left");
			if (iconPosition == ICON_POSITION_LEFT || iconPosition == null) {
				addChild(icon);
				icon.addClass("slds-button__icon_left");
				
			}
			if (isDraft) {
				addChild(draft);
			}
			addChild(label);
			if (iconPosition == ICON_POSITION_RIGHT) {
				addChild(icon);
				icon.addClass("slds-button__icon_right");
			}
			icon.setIconName(iconName);
		} else {
			if (isDraft) {
				addChild(draft);
			}
			addChild(label);
		}
		if (isDraft) {
			draft.setAttribute("title", draftAlternativeText);
		}

		setRendered(false);
		return this;
	}
	
	

	public String getPrefixIconName() {
		return prefixIconName;
	}

	public Button setPrefixIconName(String prefixIconName) {
		this.prefixIconName = prefixIconName;
		return this.refresh();
	}

	public Button setDisabled(boolean b) {
		if (b) {
			setAttribute("disabled", "true");
		} else {
			setAttribute("disabled", null);
		}
		return this;
	}

	public Boolean isDisabled() {
		return "true" == getAttribute("disabled");
	}

	public Button setIconName(String iconName) {
		this.iconName = iconName;
		return refresh();
	}

	public String getIconName() {
		return iconName;
	}

	public Button setIconPosition(String position) {
		this.iconPosition = position;
		return this.refresh();
	}

	public String getIconPosition() {
		return iconPosition;
	}

	public Boolean getIsDraft() {
		return isDraft;
	}

	public Button setIsDraft(Boolean isDraft) {
		this.isDraft = isDraft;
		return refresh();
	}

	public String getDraftAlternativeText() {
		return draftAlternativeText;
	}

	public Button setDraftAlternativeText(String draftAlternativeText) {
		this.draftAlternativeText = draftAlternativeText;
		return refresh();
	}

	public Button setLabel(String label) {
		this.label.setHtml(label);
		if(label != null && iconPosition == null ) {
			setIconPosition(ICON_POSITION_LEFT);
		}
		return this;
	}
	
	public String getLabel() {
		return this.label.getHtml();
	}

	public Button setType(String type) {

		setAttribute("type", type);

		return this;
	}

	public Button setValue(String value) {
		setAttribute("value", value);
		return this;
	}

	public String getValue() {
		return getAttribute("value");
	}

	public Button setVariant(Variant variant) {
		return setVariant(variant.getValue());
	}

	public Button setVariant(String variant) {
		for (Variant v : Variant.values()) {
			removeClass("slds-button_" + v.getValue());
		}

		addClass("slds-button_" + variant);
		return this;
	}
	
	

	public Icon getPrefixIcon() {
		return prefixIcon;
	}

	public void click() {
		HTMLElement btn = getElement();
		if (btn != null)
			btn.click();
	}

	public void blur() {
		HTMLElement btn = getElement();
		if (btn != null) {
			btn.blur();
		}
	}

	public JSContainer getUILabel() {
		return this.label;
	}
	
	public Icon getIcon() {
		return icon;
	}

}
