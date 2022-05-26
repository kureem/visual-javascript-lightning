package com.spoonconsulting.lightning;

import com.spoonconsulting.lightning.enums.Size;

import framework.components.JSContainer;
import jsweet.dom.HTMLElement;

public class MenuItem extends BaseLightning{
	
	private Icon checked_ = new Icon("checked", "utility:check");
	
	private Icon prefixIcon_ = new Icon("prefix-icon", "utility:table");

	private JSContainer label = new JSContainer("label", "span");
	
	private JSContainer span = new JSContainer("span");
	
	private Icon icon_ = new Icon("icon", "utility:table");
	private JSContainer draft_ = new JSContainer("draft", "abbr");
	
	private String draftAlternativeText = null;
	
	private boolean checked = false;
	
	private String prefixIconName = null;
	
	private String iconName = null;
	
	private Object value;
	
	private Boolean draft= false;
	
	public MenuItem(String name) {
		super(name, "a");
		addChild(label);
		setAttribute("role", "menuitem");
		label.addChild(checked_);
		label.addChild(span);
		checked_.setSize(Size.EXTRA_SMALL)
			.addClass("slds-icon-text-default")
			.addClass( "slds-m-right_x-small")
			.setAttribute("aria-hidden", "true")
			.setAttribute("data-key", "check")
			.setAttribute("focusable", "false");
		
		span.addClass("slds-truncate");
		
		icon_.setSize(Size.EXTRA_SMALL);
		icon_.addClass("slds-icon-text-default")
			.addClass("slds-m-left_small")
			.addClass("slds-shrink-none")
			.setAttribute("aria-hidden", "true");
		
		prefixIcon_.setSize(Size.EXTRA_SMALL);
		prefixIcon_.addClass("slds-icon-text-default")
			.addClass("slds-m-left_small")
			.addClass("slds-shrink-none")
			.setAttribute("aria-hidden", "true")
			.setAttribute("focusable", "false");
	
		draft_.addClass("slds-indicator_unsaved").setHtml("*");
	}
	
	
	public MenuItem setLabel(String label) {
		this.span.setHtml(label);
		this.label.setAttribute("title", label);
		return this;
	}
	
	public String getLabel() {
		return span.getHtml();
	}
	
	public MenuItem setChecked(boolean b) {
		this.checked = b;
		return refresh();
	}
	
	
	
	public String getDraftAlternativeText() {
		return draftAlternativeText;
	}


	public MenuItem setDraftAlternativeText(String draftAlternativeText) {
		this.draftAlternativeText = draftAlternativeText;
		return this.refresh();
	}


	public MenuItem refresh() {
		clearChildren();
		label.clearChildren();
		addChild(label);
		if(checked) {
			label.addChild(checked_);
		}
		if(prefixIconName != null) {
			prefixIcon_.setIconName(prefixIconName);
			label.addChild(prefixIcon_);
			prefixIcon_.removeClass("slds-m-right_small").removeClass("slds-m-left_small");
			if(!checked) {
				prefixIcon_.addClass("slds-m-right_small");
			}else {
				prefixIcon_.addClass("slds-m-left_small");
			}
		}
		if(draft) {
			label.addChild(draft_);
			draft_.setAttribute("title", draftAlternativeText);
		}
		label.addChild(span);
		if(iconName != null && iconName != "") {
			addChild(icon_);
			icon_.setSize(Size.EXTRA_SMALL);
			icon_.setIconName(iconName);
		}
		setRendered(false);
		return this;
	}
	
	
	
	public Boolean getDraft() {
		return draft;
	}


	public MenuItem setDraft(Boolean draft) {
		this.draft = draft;
		return refresh();
	}


	public Boolean isChecked() {
		return checked;
	}


	@Override
	public void setTitle(String title) {
		setLabel(title);
	}
	
	public MenuItem setDisabled(boolean b) {
		if(b) {
			setAttribute("aria-disabled", "true");
		}else {
			setAttribute("aria-disabled", null);
		}
		return this;
	}
	
	public Boolean isDisabled() {
		return "true" == getAttribute("aria-disabled");
	}
	
	public MenuItem setDownload(String download) {
		setAttribute("download", download);
		return this;
	}
	public String getDownload() {
		return getAttribute("download");
	}
	
	public MenuItem setHref(String href) {
		setAttribute("href", href);
		return this;
	}
	
	public String getHref() {
		return getAttribute("href");
	}
	
	public MenuItem setIconName(String iconName) {
		this.iconName = iconName;
		return refresh();
		
	}

	public String getIconName() {
		return this.iconName;
	}


	public String getPrefixIconName() {
		return prefixIconName;
	}


	public MenuItem setPrefixIconName(String prefixIconName) {
		this.prefixIconName = prefixIconName;
		return refresh();
	}
	
	public MenuItem setTabIndex(int index) {
		setAttribute("tabindex", index + "");
		return this;
	}
	
	public Integer getTabIndex() {
		if(getAttribute("tabindex") != null)
			return Integer.parseInt(getAttribute("tabindex"));
		return null;
	}
	
	public MenuItem setTarget(String target) {
		setAttribute("target", target);
		return this;
	}
	
	public String getTarget() {
		return getAttribute("target");
	}
	
	public MenuItem setValue(Object value) {
		this.value = value;
		return this;
	}
	
	public Object getValue() {
		return this.value;
	}

	
	public void click() {
		HTMLElement elem = getElement();
		if(elem != null) {
			elem.click();
		}
	}
	
	
	public void focus() {
		HTMLElement elm = getElement();
		if(elm != null) {
			elm.focus();
		}
	}
	
	public void blur() {
		HTMLElement elm = getElement();
		if(elm != null) {
			elm.blur();
		}
	}
}
