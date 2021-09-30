package com.spoonconsulting.lightning;

import framework.components.JSContainer;

public class Layout extends JSContainer{

	public static String HORIZONTAL_ALIGN_CENTER = "center";
	public static String HORIZONTAL_ALIGN_SPACE = "space";
	public static String HORIZONTAL_ALIGN_SPREAD = "spread";
	public static String HORIZONTAL_ALIGN_END = "end";
	
	public final static String VERTICAL_ALIGN_START = "start";
	public final static String VERTICAL_ALIGN_CENTER = "center";
	public final static String VERTICAL_ALIGN_END = "end";
	public final static String VERTICAL_ALIGN_STRETCH = "stretch";
	
	
	public final static String PULL_TO_BOUNDARY_SMALL = "small";
	public final static String PULL_TO_BOUNDARY_MEDIUM = "medium";
	public final static String PULL_TO_BOUNDARY_LARGE = "large";
	
	
	private boolean multipleRows = false;
	private String horizontalAlign = null;
	private String pullToBoundary = null;
	private String verticalAlign = null;
	
	public Layout(String name, String tag) {
		super(name, tag);
		addClass("slds-grid");
	}

	public boolean isMultipleRows() {
		return multipleRows;
	}

	public Layout setMultipleRows(boolean multipleRows) {
		this.multipleRows = multipleRows;
		return refresh();
	}

	public String getHorizontalAlign() {
		return horizontalAlign;
	}

	public Layout setHorizontalAlign(String horizontalAlign) {
		this.horizontalAlign = horizontalAlign;
		return refresh();
	}

	public String getPullToBoundary() {
		return pullToBoundary;
	}

	public Layout setPullToBoundary(String pullToBoundary) {
		this.pullToBoundary = pullToBoundary;
		return refresh();
	}

	public String getVerticalAlign() {
		return verticalAlign;
	}

	public Layout setVerticalAlign(String verticalAlign) {
		this.verticalAlign = verticalAlign;
		return refresh();
	}
	
	public Layout refresh() {
		removeClass("slds-wrap");
		removeClass("slds-grid_align-" + HORIZONTAL_ALIGN_SPACE);
		removeClass("slds-grid_align-" + HORIZONTAL_ALIGN_CENTER);
		removeClass("slds-grid_align-" + HORIZONTAL_ALIGN_END);
		removeClass("slds-grid_align-" + HORIZONTAL_ALIGN_SPREAD);
		
		removeClass("slds-grid_pull-padded-" + PULL_TO_BOUNDARY_LARGE);
		removeClass("slds-grid_pull-padded-" + PULL_TO_BOUNDARY_MEDIUM);
		removeClass("slds-grid_pull-padded-" + PULL_TO_BOUNDARY_SMALL);
		
		removeClass("slds-grid_vertical-" + VERTICAL_ALIGN_CENTER);
		removeClass("slds-grid_vertical-" + VERTICAL_ALIGN_END);
		removeClass("slds-grid_vertical-" + VERTICAL_ALIGN_START);
		removeClass("slds-grid_vertical-" + VERTICAL_ALIGN_STRETCH);
		
		if(multipleRows) {
			addClass("slds-wrap");
		}
		
		if(horizontalAlign != null) {
			addClass("slds-grid_align-" + horizontalAlign);
		}
		
		if(pullToBoundary != null) {
			addClass("slds-grid_pull-padded-" + pullToBoundary);
		}
		
		if(verticalAlign != null) {
			addClass("slds-grid_vertical-" + verticalAlign);
		}
		return this;
	}

}
