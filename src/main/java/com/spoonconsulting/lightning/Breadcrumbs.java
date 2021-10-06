package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import framework.components.api.Renderable;
import jsweet.lang.Array;

public class Breadcrumbs extends JSContainer{

	public Breadcrumbs(String name) {
		super(name, "ol");
		addClass("slds-breadcrumb")
		.addClass("slds-list_horizontal")
		.addClass("slds-wrap");
	}
	
	public Breadcrumbs addBreadcrumb(Breadcrumb breadcrumb) {
		JSContainer li = new JSContainer("li");
		li.addClass("slds-breadcrumb__item");
		addChild(li);
		li.addChild(breadcrumb);
		return this;
	}
	
	public Array<Breadcrumb> getBreadcrumbs(){
		Array<Breadcrumb> result = new Array<Breadcrumb>();
		for(Renderable r : getChildren()) {
			Breadcrumb bc = (Breadcrumb)r.getChildren().$get(0);
			result.push(bc);
		}
		return result;
	}
	
	public Breadcrumb getBreadcrumb(String name) {
		for(Renderable r : getChildren()) {
			Breadcrumb bc = (Breadcrumb)r.getChildren().$get(0);
			if(bc.getName() == name) {
				return bc;
			}
		}
		return null;
	}
}
