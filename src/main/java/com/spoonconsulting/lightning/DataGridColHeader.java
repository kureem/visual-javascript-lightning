package com.spoonconsulting.lightning;

import com.spoonconsulting.lightning.enums.IconName;
import com.spoonconsulting.lightning.enums.Size;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.dom.HTMLElement;
import jsweet.dom.MutationCallback;
import jsweet.dom.MutationObserver;
import jsweet.dom.MutationObserverInit;
import jsweet.dom.MutationRecord;
import jsweet.lang.Object;

public class DataGridColHeader extends JSContainer implements DataGridIColHeader{
	
	private JSContainer resizable = new JSContainer("resizable", "div");
	
	private JSContainer cellFixed = new JSContainer("cell-fixed", "div");
	
	private JSContainer action = new JSContainer("action", "a");

	private JSContainer label = new JSContainer("label", "span");
	
	private JSContainer arrowTrigger = new JSContainer("arrow-trigger", "div");
	
	private ButtonIcon arrow = new ButtonIcon("arrow", IconName.UTILITY_CHEVRONDOWN.getValue());
	
	//private JSContainer range = new JSContainer("range", "input");
	
	//private JSContainer resizeHandle = new JSContainer("resize-handle", "span");
	
	private boolean keyField = false;
	
	private JSContainer visual = new JSContainer("visual", "div");
	
	private IconContainer icon = new IconContainer("icon", "div");
	
	private IconContainer sortIcon = new IconContainer("sortIcon", "div");
	
	private boolean sortable = false;
	
	private String defaultSortDirection = "asc";
	
	private String sortDirection = defaultSortDirection;
	
	private Object column;
	
	
	
	
	public DataGridColHeader(String name, String label) {
		super(name, "div");
		//setAttribute("scope", "col");
		//setAttribute("tabindex", "0");
	//	addChild(resizable);
	//	resizable.addClass("slds-is-resizable");
	//	resizable.addChild(cellFixed);
		addChild(cellFixed);
		cellFixed.addClass("slds-cell-fixed").addClass("slds-has-button-menu");

		
		MutationObserverInit configs = new MutationObserverInit() {
			
		};
		configs.attributes = true;
		
		//configs.$set("attributes", true);
	//	configs.$set("styles", true);
		
		MutationObserver observer = new MutationObserver(new MutationCallback() {
			
			@Override
			public void apply(MutationRecord[] mutations, MutationObserver observer) {
				for(MutationRecord mutation : mutations) {
					setWidth( ((HTMLElement)mutation.target).clientWidth + "px");
					render();
					System.out.println("Mutation: " + mutation.oldValue);
					
				}
			}
		});
		
		//observer.observe(document, configs);
		
		cellFixed.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				
				observer.observe(source.getElement(),configs);
				//setWidth(source.getElement().style.width);
			}
		}, "click");
		cellFixed.addChild(action);
		action.addClass("slds-th__action");
		action.addClass("slds-text-link_reset");
		action.setAttribute("href", "javascript:void(0);")
		.setAttribute("role", "button")
		.setAttribute("tabindex", "-1")
		.setAttribute("data-navigation", "enable")
		.setAttribute("data-action-triggers", "enter");
	
//		action.addChild(this.label);
		visual.addClass("slds-grid").addClass("slds-grid_vertical-align-center").addClass("slds-has-flexi-truncate");
		action.addChild(visual);
		icon.setSize(Size.EXTRA_EXTRA_SMALL);
		//icon.setStyle("display", "none");
		visual.addChild(icon);
		
		visual.addChild(this.label);
		this.label.addClass("slds-truncate");
	
		sortIcon.setIconName("utility:arrowdown");
		sortIcon.setSize(Size.EXTRA_EXTRA_SMALL);
		visual.addChild(sortIcon);
		sortIcon.setStyle("display", "none");
		
		JSContainer navigation = new JSContainer("nav1", "div").setAttribute("data-navigation", "enable").setAttribute("tabindex", "-1");
		action.addChild(navigation);
		
		arrowTrigger.addClass("slds-th__action-button").addClass("slds-dropdown-trigger").addClass("slds-dropdown-trigger_click");
		navigation.addChild(arrowTrigger);
		
		
		arrow.removeClass("slds-button_icon");
		arrow.addClass("slds-button_icon-bare");
		arrowTrigger.addChild(arrow);
		arrow.setAlternativeText("Show Actions");
		
	/*	range.setAttribute("type", "range").setAttribute("min", "50").setAttribute("max", "1000").setAttribute("aria-label", "Label column width");
		range.addClass("slds-resizable__input").addClass("slds-assistive-text");
		
		JSContainer navigation1 = new JSContainer("nav1", "div").setAttribute("data-navigation", "enable").setAttribute("tabindex", "-1");
		action.addChild(navigation1);
		
		navigation1.addChild(range);
	
		//resizeHandle.setAxis("x");
		resizeHandle.addClass("slds-resizable__handle").setStyle("will-change", "transform");
		navigation1.addChild(resizeHandle);
		
		Draggable divider = new Draggable("divider", "div");
		divider.addClass("slds-resizable__divider");
		divider.setAxis("x");
		resizeHandle.addChild(divider);*/
		
		setLabel(label);
		
		
				
	}
	
	public DataGridColHeader setLabel(String label) {
		this.label.setHtml(label);
		this.label.setAttribute("title", label);
		setAttribute("aria-label", label);
		return this;
	}
	
	public DataGridColHeader setWidth(String width) {
		setStyle("width", width);
		resizable.setStyle("width", width);
		cellFixed.setStyle("width", width);
		return this;
	}
	
	public String getWidth() {
		return getStyle("width");
	}
	
	public DataGridColHeader setResizable(boolean b) {
		/*if(b) {
			if(!resizable.hasClass("slds-is-resizable")) {
				resizable.addClass("slds-is-resizable");
			}
			range.getParent().setStyle("display", null);
		}else {
			resizable.removeClass("slds-is-resizable");
			range.getParent().setStyle("display", "none");
		}*/
		return this;
	}
	
	public boolean isResizable() {
		return resizable.hasClass("slds-is-resizable");
	}
	
	public DataGridColHeader setHideDefaultActions(boolean b) {
		if(!b) {
			arrowTrigger.getParent().setStyle("display", null);
		}else {
			arrowTrigger.getParent().setStyle("display", "none");
		}
		return this;
	}
	
	
	public boolean isHideDefaultActions() {
		return arrowTrigger.getParent().getStyle("display") != "none";
	}

	/**
	 * @return the primaryField
	 */
	public boolean isKeyField() {
		return keyField;
	}

	/**
	 * @param primaryField the primaryField to set
	 */
	public DataGridColHeader setKeyField(boolean primaryField) {
		this.keyField = primaryField;
		return this;
	}
	
	
	public DataGridColHeader setIconName(String iconName) {
		if(iconName != null) {
			this.icon.setStyle("display", null);
			this.icon.setIconName(iconName);
		}else {
			this.icon.setStyle("display", "none");
		}
		return this;
	}
	
	public String getIconName() {
		return this.icon.getIcon().getIconName();
	}

	/**
	 * @return the sortable
	 */
	public boolean isSortable() {
		return sortable;
	}

	/**
	 * @param sortable the sortable to set
	 */
	public DataGridColHeader setSortable(boolean sortable) {
		this.sortable = sortable;
		if(sortable) {
			resizable.addClass("slds-is-sortable");
		}else {
			resizable.removeClass("slds-is-sortable");
		}
		return this;
	}

	/**
	 * @return the defaultSortDirection
	 */
	public String getDefaultSortDirection() {
		return defaultSortDirection;
	}

	/**
	 * @param defaultSortDirection the defaultSortDirection to set
	 */
	public DataGridColHeader setDefaultSortDirection(String defaultSortDirection) {
		this.defaultSortDirection = defaultSortDirection;
		this.action.removeClass("slds-is-sorted_desc");
		this.action.removeClass("slds-is-sorted_asc");
		this.action.addClass("slds-is-sorted_" + defaultSortDirection);
		return this;
	}
	
	public DataGridColHeader setSortDirection(String direction) {
		this.sortDirection = direction;
		this.action.removeClass("slds-is-sorted_desc");
		this.action.removeClass("slds-is-sorted_asc");
		this.action.addClass("slds-is-sorted_" + direction);
		return this;
	}
	
	public String getSortDirection() {
		return this.sortDirection;
	}

	/**
	 * @return the column
	 */
	public Object getColumn() {
		return column;
	}

	/**
	 * @param column the column to set
	 */
	public void setColumn(Object column) {
		this.column = column;
	}
	
	
	
	

}
