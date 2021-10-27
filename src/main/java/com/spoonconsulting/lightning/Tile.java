package com.spoonconsulting.lightning;

import com.spoonconsulting.lightning.enums.IconName;
import com.spoonconsulting.lightning.enums.MenuAlignment;
import com.spoonconsulting.lightning.enums.Size;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;

public class Tile extends JSContainer{

	private JSContainer media = new JSContainer("media", "div");
	
	private JSContainer body = new JSContainer("body", "div");
	
	private JSContainer bodyHeader = new JSContainer("bodyHeader", "div");
	
	private JSContainer title = new JSContainer("title", "h3");
	
	private JSContainer link = new JSContainer("link", "a");
	
	private JSContainer menuSlot = new JSContainer("menuSlot", "div");
	
	private JSContainer detail = new JSContainer("detail", "div");
	private ButtonMenu menu = new ButtonMenu("menu", "div");
	
	private IconContainer icon = new IconContainer("icon", "div");
	
	private Avatar avatar = new Avatar("avatar");
	
	
	public static final String TYPE_MEDIA = "media";
	public final static String TYPE_STANDARD = "standard";
	
	public Tile(String name) {
		super(name, "div");
		addClass("slds-tile");
		addChild(media);
		addChild(body);
		
		media.addClass("slds-media__figure");
		body.addClass("slds-media__body");
		
		body.addChild(bodyHeader);
		bodyHeader.addClass("slds-grid").addClass("slds-grid_align-spread").addClass("slds-has-flexi-truncate");
		bodyHeader.addChild(title);
		title.addChild(link);
		title.addClass("slds-tile__title").addClass("slds-truncate");
		
		bodyHeader.addChild(menuSlot);
		menuSlot.addClass("slds-shrink-none");

		body.addChild(detail);
		detail.addClass("slds-tile__detail");
		menu.addEventListener(new EventListener() {
			
			@Override
			public void performAction(Renderable source, Event evt) {
				fireListener("actiontriggered", evt);
			}
		}, "select");
		media.addChild(icon);
		icon.setIconName(IconName.STANDARD_ACCOUNT.getValue());
		icon.setSize(Size.SMALL);
	}
	
	
	public Tile setIconName(String iconName) {
		getFiguresSlot().clearChildren();
		media.addChild(icon);
		media.setRendered(false);
		icon.setIconName(iconName);
		icon.setSize(Size.SMALL);
		return this;
	}
	
	
	public Tile setAvatarSrc(String src) {
		media.clearChildren();
		media.addChild(avatar);
		media.setRendered(false);
		avatar.setSize(Size.SMALL);
		avatar.setSrc(src);
		return this;
	}
	
	
	
	public JSContainer getBodySlot() {
		return this.detail;
	}
	
	public JSContainer getActionSlot() {
		return menuSlot;
	}
	
	public JSContainer getMenuSlot() {
		return menuSlot;
	}
	
	
	public JSContainer getFiguresSlot() {
		return this.media;
	}
	
	public Tile setType(String type) {
		setAttribute("type", type);
		if(type == "media") {
			addClass("slds-media");
			this.media.setStyle("display", null);
		}else {
			removeClass("slds-media");
			this.media.setStyle("display","none");
		}
		return this;
	}
	
	public String getType() {
		return getAttribute("type");
	}
	
	public Tile setLabel(String label) {
		this.title.setAttribute("title", label);
		link.setHtml(label);
		return this;
	}
	
	public String getLabel() {
		return link.getHtml();
	}
	
	public Tile setHref(String href) {
		this.link.setAttribute("href", href);
		return this;
	}
	
	public String getHref() {
		return link.getAttribute("href");
	}
	
	public Tile setActions(Array<jsweet.lang.Object> options) {
		menuSlot.clearChildren();
		menuSlot.addChild(menu);
		menu.setMenuAlignment(MenuAlignment.RIGHT);
		menuSlot.setRendered(false);
		menu.setOptions(options);
		return this;
	}

}
