package com.spoonconsulting.lightning;

import framework.components.JSContainer;

public class LayoutItem extends JSContainer {

	private String alignmentBumb = null;

	private String flexibility = null;

	private Integer largeDeviceSize = null;

	private Integer mediumDeviceSize = null;

	private String padding = null;

	private Integer size = null;

	private Integer smallDeviceSize = null;

	public LayoutItem(String name, String tag) {
		super(name, tag);
		addClass("slds-col");
	}

	public String getAlignmentBumb() {
		return alignmentBumb;
	}

	public LayoutItem setAlignmentBumb(String alignmentBumb) {
		this.alignmentBumb = alignmentBumb;
		for (AlignmentBump a : AlignmentBump.values()) {
			removeClass("slds-col_bump-" + a.value);
		}
		if (alignmentBumb != null)
			addClass("slds-col_bump-" + alignmentBumb);
		
		return this;
	}

	public String getFlexibility() {
		return flexibility;
	}

	public LayoutItem setFlexibility(String flexibility) {
		this.flexibility = flexibility;
		for (Flexibility f : Flexibility.values()) {
			removeClass("slds-" + f.value);
		}

		if (flexibility != null) {
			String[] fxs = flexibility.split(",");
			for (String fx : fxs) {
				addClass("slds-" + fx);
			}
		}
		
		return this;
	}

	public Integer getLargeDeviceSize() {
		return largeDeviceSize;
	}

	public LayoutItem setLargeDeviceSize(Integer largeDeviceSize) {
		this.largeDeviceSize = largeDeviceSize;
		for (int i = 1; i <= 12; i++) {
			removeClass("slds-large-size_" + i + "-of-12");
		}
		if (largeDeviceSize != null)
			addClass("slds-large-size_" + size + "-of-12");
		
		return this;
	}

	public Integer getMediumDeviceSize() {
		return mediumDeviceSize;
	}

	public LayoutItem setMediumDeviceSize(Integer mediumDeviceSize) {
		this.mediumDeviceSize = mediumDeviceSize;
		for (int i = 1; i <= 12; i++) {
			removeClass("slds-medium-size_" + i + "-of-12");
		}
		if (mediumDeviceSize != null)
			addClass("slds-medium-size_" + size + "-of-12");
		
		return this;
	}

	public String getPadding() {
		return padding;
	}

	public LayoutItem setPadding(String padding) {
		this.padding = padding;
		for(Padding p : Padding.values()) {
			removeClass("slds-p-" + p.value);
		}
		
		if(padding != null) {
			addClass("slds-p-" + padding);
		}
		
		return this;
	}

	public Integer getSize() {
		return size;
	}

	public LayoutItem setSize(Integer size) {
		this.size = size;

		for (int i = 1; i <= 12; i++) {
			removeClass("slds-size_" + i + "-of-12");
		}
		if (size != null)
			addClass("slds-size_" + size + "-of-12");
		
		return this;
	}

	public Integer getSmallDeviceSize() {
		return smallDeviceSize;
	}

	public LayoutItem setSmallDeviceSize(Integer smallDeviceSize) {
		this.smallDeviceSize = smallDeviceSize;
		
		for (int i = 1; i <= 12; i++) {
			removeClass("slds-small-size_" + i + "-of-12");
		}
		if (smallDeviceSize != null)
			addClass("slds-small-size_" + size + "-of-12");
		
		return this;
	}


	public enum AlignmentBump {

		TOP("top"), LEFT("left"), RIGHT("right"), BOTTOM("bottom");

		private String value;

		private AlignmentBump(String value) {
			this.value = value;
		}
	}

	public enum Flexibility {

		AUTO("auto"), SHRINK("shrink"), NO_SHRINK("no-shrink"), GROW("grow"), NO_GROW("no-grow"), NO_FLEX("no-flex");

		private String value;

		private Flexibility(String val) {
			value = val;
		}
	}

	public enum Padding {

		HORIZONTAL_SMALL("horizontal_small"), HORIZONTAL_MEDIUM("horizontal_medium"),
		HORIZONTAL_LARGE("horizontal_large"), AROUND_SMALL("around_small"), AROUND_MEDIUM("around_medium"),
		AROUND_LARGE("around_large");

		private String value;

		private Padding(String val) {
			value = val;
		}

	}

}
