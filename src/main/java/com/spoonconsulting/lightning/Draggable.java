package com.spoonconsulting.lightning;

import static jsweet.dom.Globals.cancelAnimationFrame;
import static jsweet.dom.Globals.requestAnimationFrame;
import static jsweet.lang.Globals.eval;

import java.util.function.Function;

import framework.components.JSContainer;
import jsweet.dom.ClientRect;
import jsweet.dom.EventListener;
import jsweet.dom.FrameRequestCallback;
import jsweet.dom.HTMLElement;
import jsweet.dom.MouseEvent;

public class Draggable extends JSContainer {
	
	
	private HTMLElement element;
	
	private ClientRect bbox;
	
	private double startX;
	
	private double startY;
	
	private double deltaX;
	
	private double deltaY;
	
	
	private String axis;
	
	
	private HTMLElement container;
	
	double raf =-1;
	
	private EventListener userMoved= (e)->{
		MouseEvent event = (MouseEvent)e;
		deltaX = event.clientX - startX;
		deltaY = event.clientY - startY;
		
		raf = requestAnimationFrame(new FrameRequestCallback() {
			
			@Override
			public void apply(double time) {
				if(axis == "x") {
					element.style.transform = "translateX("+deltaX+"px)";
				}else if(axis == "y") {
					element.style.transform = "translateY("+deltaY+"px)";
				}else {
					element.style.transform = "translate3d("+deltaX+"px,"+deltaY+"px, 0px)";
				}
				raf = -1;
			}
		});
	};


	private  EventListener userReleased = (event)->{
		container.removeEventListener("pointermove", userMoved);
		eval("this.fn('d')");
		if(raf > -1) {
			cancelAnimationFrame(raf);
			raf = -1;
		}
		if(axis == "x") {
			element.style.left = bbox.left + deltaX + "px";
			element.style.transform = "translateX(0px)";
		}else if(axis == "y") {
			 element.style.top = bbox.top + deltaY + "px";
			 element.style.transform = "translateY(0px)";
		}else {
			element.style.left = bbox.left + deltaX + "px";
			element.style.top = bbox.top + deltaY + "px";
			element.style.transform = "translate3d(0px,0px,0px)";
		}
		  // added based on Daniel Faure's feedback:
		  deltaX = deltaY = -1;
		//fn.apply("");
	};
	
	
	@SuppressWarnings("unused")
	private Function<String, Void> fn = (s)->{
		container.removeEventListener("pointerup", userReleased);
		container.removeEventListener("pointercancel", userReleased);
		
		return null;
	};

	
	private framework.components.api.EventListener userPressed = (source,e)->{
		MouseEvent event = (MouseEvent)e;
		element = (HTMLElement)event.target;
		if(container == null) 
			container = source.getElement();
		
		if(element.classList.contains("draggable")) {
			startX = event.clientX;
			startY = event.clientY;
			bbox = element.getBoundingClientRect();
			jsweet.lang.Object o = new jsweet.lang.Object();
			o.$set("passive", true);
			eval("this.container.addEventListener('pointermove', this.userMoved, o);");
			eval("this.container.addEventListener('pointerup', this.userReleased, o);");
			eval("this.container.addEventListener('pointercancel', this.userReleased, o);");
			//container.addEventListener("pointermove", userMoved, true);
			//container.addEventListener("pointerup", userReleased, true);
			//container.addEventListener("pointercancel", userReleased, true);
			
		}
		//if(element.cl)
	};
	
		
	

	public Draggable(String name, String tag) {
		super(name, tag);
		addClass("draggable");
		addEventListener(userPressed, "pointerdown");
		
	}




	/**
	 * @return the axis
	 */
	public String getAxis() {
		return axis;
	}




	/**
	 * @param axis the axis to set
	 */
	public void setAxis(String axis) {
		this.axis = axis;
	}
	
	
	

}
