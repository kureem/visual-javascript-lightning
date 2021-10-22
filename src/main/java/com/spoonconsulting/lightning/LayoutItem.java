package com.spoonconsulting.lightning;

import com.spoonconsulting.lightning.enums.Direction;
import com.spoonconsulting.lightning.enums.Flexibility;
import com.spoonconsulting.lightning.enums.LayoutItemPadding;

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

	public String getAlignmentBump() {
		return alignmentBumb;
	}
	
	public LayoutItem setAlignmentBump(Direction al) {
		return setAlignmentBump(al != null ? al.getValue() : (String)null);
	}

	public LayoutItem setAlignmentBump(String alignmentBumb) {
		this.alignmentBumb = alignmentBumb;
		for (Direction a : Direction.values()) {
			removeClass("slds-col_bump-" + a.getValue());
		}
		if (alignmentBumb != null)
			addClass("slds-col_bump-" + alignmentBumb);
		
		return this;
	}

	public String getFlexibility() {
		return flexibility;
	}
	
	public LayoutItem setFlexibility(Flexibility flexi) {
		return setFlexibility(flexi != null? flexi.getValue() : (String)null);
	}

	public LayoutItem setFlexibility(String flexibility) {
		this.flexibility = flexibility;
		for (Flexibility f : Flexibility.values()) {
			removeClass("slds-" + f.getValue());
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
	
	public LayoutItem setPadding(LayoutItemPadding pading) {
		return setPadding(pading != null? pading.getValue() : (String)null);
	}

	public LayoutItem setPadding(String padding) {
		this.padding = padding;
		for(LayoutItemPadding p : LayoutItemPadding.values()) {
			removeClass("slds-p-" + p.getValue());
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

}
