package com.spoonconsulting.lightning;

import com.spoonconsulting.lightning.enums.Size;

import framework.components.JSContainer;

/**
 * <p>This class represents an {@link Avatar}.</p>
 *<p><b><u>Types of {@link Avatar}</u></b></p>
 *<p>An {@link Avatar} comes in 3 types:</p>
 *<ol>
 *	<li>Initials</li>
 *	<li>Icon</li>
 *	<li>Image</li>
 *</ol>
 *<p>
 *	Use the {@link Avatar#setType(String)} method to set the type of the {@link Avatar}. Possible values are initial, image, icon. <br>
 *	Or use static attributes {@link Avatar#TYPE_IMAGE},  {@link Avatar#TYPE_ICON}, {@link Avatar#TYPE_INITIAL}
 *</p>
 *<p><b>The Icon type</b></p>
 *<ul>
 *	<li>The icon type will take as parameter the usual icon notation of salesforce, e.g. utility:settings.</li>
 *	<li>Use the method <span>{@link Avatar#setFallbackIconName(String)} to set the name of the icon</li>
 *	<li>You would usually use this type when the image is not accessible</li>
 *</ul>
 *<div><b>The initials type</b></div>
 *<p>
 *<ul>
 *	<li>The initials type will display 3 characters as initials.</li>
 *	<li>Use the method {@link Avatar#setInitials(String)} to set the initials</li>
 *</ul>
 *<div><b>The image type</b></div>
 *<ul>
 *	<li>The image type will take the url or an image or base64 encoded image as parameter.</li>
 *	<li>use the method {@link Avatar#setSrc(String)} to set the src of the image to display in the avatar</li>
 *</ul>
 *<p><b><u>Variants of the {@link Avatar}</u></b></p>
 *The avatar comes with 2 variants which are circle and square</p>
 *<p>Use method {@link Avatar#setVariant(String)} to set the variant of the avatar. Possible values are circle and square</p>
 *<p><b><u>Sizes of the {@link Avatar}</u></b></p>
 *<p>The size of the {@link Avatar} can be set using the method {@link Avatar#setSize(String)}.</p>
 *<ul>
 *	<li>x-small</li>
 *	<li>small</li>
 *	<li>medium</li>
 *	<li>large</li>
 *</ul>
 *<p>This value defaults to medium.<br />
 *</p>
 *
 * 
 * @author Kureem Rossaye
 *  <a href="mailto:kureem.rossaye@spoonconsulting.com">kureem.rossaye@spoonconsulting.com</a>
 *
 */
public class Avatar extends JSContainer{
	
	private JSContainer img = new JSContainer("image", "img");
	
	private Icon fallbackIcon = new Icon("fallback-icon","standard:user");
	
	private JSContainer iconContainer = new JSContainer("iconContainer", "span");
	
	private JSContainer initial =new JSContainer("initial","abbr");
	
	/**
	 * Static variable for image type of avatar.
	 */
	public final static String TYPE_IMAGE = "image";
	
	/**
	 * Static variable for initial image type of avatar.
	 */
	public final static String TYPE_INITIAL = "initial";
	
	/**
	 * Static variable for icon type of avatar.
	 */
	public final static String TYPE_ICON = "icon";
	
	/**
	 * Static variable for square variant of avatar
	 */
	public final static String VARIANT_SQUARE = "square";
	
	/**
	 * static variable for circle variant of avatar
	 */
	public final static String VARIANT_CIRCLE = "circle";
	
	
	private String type;
	
	private String size = Size.MEDIUM.getValue();
	
	/**
	 * Constructs an avatar with the given name
	 * @param name - The name of the avatar
	 */
	public Avatar(String name) {
		super(name, "span");
		addClass("slds-avatar");
		initial.addClass("slds-avatar__initials")
			.addClass("slds-icon-standard-user");
		
		iconContainer.addClass("slds-icon_container")
			.addClass("slds-icon-standard-account");
		iconContainer.addChild(fallbackIcon);
		setType(TYPE_IMAGE);
	}
	
	/**
	 * Sets the type of the {@link Avatar}.
	 * <p>An {@link Avatar} comes in 3 types:</p>
	 *<ol>
	 *	<li>Initials - {@link Avatar#TYPE_INITIAL}</li>
	 *	<li>Icon - {@link Avatar#TYPE_ICON}</li>
	 *	<li>Image - {@link Avatar#TYPE_IMAGE}</li>
	 *</ol>
	 *<p><b>The Icon type</b></p>
	 *<ul>
	 *	<li>The icon type will take as parameter the usual icon notation of salesforce, e.g. utility:settings.</li>
	 *	<li>Use the method <span>{@link Avatar#setFallbackIconName(String)} to set the name of the icon</li>
	 *	<li>You would usually use this type when the image is not accessible</li>
	 *</ul>
	 *<div><b>The initials type</b></div>
	 *<p>
	 *<ul>
	 *	<li>The initials type will display 3 characters as initials.</li>
	 *	<li>Use the method {@link Avatar#setInitials(String)} to set the initials</li>
	 *</ul>
	 *<div><b>The image type</b></div>
	 *<ul>
	 *	<li>The image type will take the url or an image or base64 encoded image as parameter.</li>
	 *	<li>use the method {@link Avatar#setSrc(String)} to set the src of the image to display in the avatar</li>
	 *</ul>

	 * @param type - The type of the the {@link Avatar} (initials, image, icon)
	 * @return -The current {@link Avatar}
	 * @see {@link Avatar#setSrc(String)}
	 * @see {@link Avatar#setInitials(String)}
	 * @see {@link Avatar#setFallbackIconName(String)}
	 */
	public Avatar setType(String type) {
		this.clearChildren();
		if(type == TYPE_IMAGE) {
			addChild(img);
		}else if(type == TYPE_ICON) {
			addChild(iconContainer);
		}else if(type == TYPE_INITIAL) {
			addChild(initial);
		}
		setRendered(false);
		return this;
	}
	
	/**
	 * The type of the {@link Avatar}
	 *<p>An {@link Avatar} comes in 3 types:</p>
	 *<ol>
	 *	<li>Initials - {@link Avatar#TYPE_INITIAL}</li>
	 *	<li>Icon - {@link Avatar#TYPE_ICON}</li>
	 *	<li>Image - {@link Avatar#TYPE_IMAGE}</li>
	 *</ol>
	 * @return - The type of the {@link Avatar}
	 * @see {@link Avatar#setType(String)}
	 */
	public String getType() {
		return this.type;
	}
	
	/**
	 * Sets the variant of the {@link Avatar}<br>
	 * The {@link Avatar} comes with 2 variants which are circle and square</br>
	 * @param variant - The variant, possible values
	 * <ul>
	 *	<li>{@link Avatar#VARIANT_CIRCLE}</li>
	 *	<li>{@link Avatar#VARIANT_SQUARE}</li>
	 *</ul>
	
	 * @return - The current {@link Avatar}
	 */
	public Avatar setVariant(String variant) {
		removeClass("slds-avatar_" +VARIANT_CIRCLE)
			.removeClass("slds-avatar_" +VARIANT_SQUARE)
			.addClass("slds-avatar_" +type);
		return this;
	}
	
	/**
	 * The variant of the {@link Avatar}. Possible value are circle and square
	 * <ul>
	 *	<li>{@link Avatar#VARIANT_CIRCLE}</li>
	 *	<li>{@link Avatar#VARIANT_SQUARE}</li>
	 *</ul>
	 * @return - The variant of the {@link Avatar}
	 */
	public String getVariant() {
		if(hasClass("slds-avatar_" + VARIANT_CIRCLE)) {
			return VARIANT_CIRCLE;
		}else {
			return VARIANT_SQUARE;
		}
	}
	
	/**
	 * Sets the size of the {@link Avatar}. Possible values are<br>
	 * <ul>
	 *	<li>{@link Size#X_SMALL}</li>
	 *	<li>{@link Size#SMALL}</li>
	 *	<li>{@link Size#MEDIUM}</li>
	 *	<li>{@link Size#LARGE}</li>
	 *</ul>
	 * @param size - The size of the {@link Avatar}
	 * @return The current {@link Avatar}
	 */
	public Avatar setSize(Size size) {
		return setSize(size != null? size.getValue(): Size.MEDIUM.getValue());
	}
	
	/**
	 * The size of the {@link Avatar}
	 * @return The size of the {@link Avatar}
	 */
	public String getSize() {
		return size;
	}
	
	/**
	 * Sets The size of the {@link Avatar}<br>
	 * Possible values:<br>
	 * <ul>
	 *	<li>x-small</li>
	 *	<li>small</li>
	 *	<li>medium</li>
	 *	<li>large</li>
	 *</ul>
	 * @param size - The size of the {@link Avatar}
	 * @return This current {@link Avatar}
	 */
	public Avatar setSize(String size) {
		for(Size s : Size.values()) {
			removeClass("slds-avatar_" + s.getValue());
		}
		
		if(size != null) {
			addClass("slds-avatar_" + size);
			this.size = size;
		}else {
			this.size = Size.MEDIUM.getValue();
		}
		return this;
	}
	
	/**
	 * Sets the title attribute. Message that appears when hovering with the mouse
	 * @param title - The message that appears when hovering with the mouse
	 * @return - This current instance
	 */
	public Avatar setTitle(String title) {
		img.setAttribute("title", title);
		initial.setAttribute("title", title);
		fallbackIcon.setAttribute("title", title);
		return this;
	}
	
	/**
	 * The title attribute. Message that appears when hovering with the mouse
	 * @return - The message that appears when hovering with the mouse
	 */
	public String getTitle() {
		return img.getAttribute("title");
	}

	/**
	 * The initials that appears when the type of the avatar is initials<br>
	 * This methods works only for initial type
	 * @see {@link Avatar#setType(String)}
	 * @see {@link Avatar#TYPE_INITIAL}
	 * @return - The initial type of the avatar is initials<br>
	 */
	public String getInitials() {
		return this.initial.getHtml();
	}

	/**
	 * Sets the initials that appears when the type of the avatar is initials<br>
	 * This methods works only for initial type
	 * @see {@link Avatar#setType(String)}
	 * @see {@link Avatar#TYPE_INITIAL}
	 * @param initials - The initials that appears when the type of the avatar is initials<br>
	 * @return - This current {@link Avatar} instance
	 */
	public Avatar setInitials(String initials) {
		this.initial.setHtml(initials);
		return this;
	}

	/**
	 * The icon name of the icon that appears when the type of the avatar is icon<br>
	 * This methods works only for icon type
	 * @see {@link Avatar#setType(String)}
	 * @see {@link Avatar#TYPE_ICON}
	 * @return - The icon that appears when the type of the avatar is icon<br>
	 */
	public String getFallbackIconName() {
		return this.fallbackIcon.getIconName();
	}

	/**
	 * Sets the icon name of the icon that appears when the type of the avatar is icon<br>
	 * This methods works only for icon type
	 * @see {@link Avatar#setType(String)}
	 * @see {@link Avatar#TYPE_ICON}
	 * @param fallbackIconName - The icon that appears when the type of the avatar is icon<br>
	 * @return - This current {@link Avatar}
	 */
	public Avatar setFallbackIconName(String fallbackIconName) {
		this.fallbackIcon.setIconName(fallbackIconName);
		return this;
	}
	
	/**
	 * Sets the image that appears when the type of the avatar is image<br>
	 * This methods works only for image type
	 * @see {@link Avatar#setType(String)}
	 * @see {@link Avatar#TYPE_IMAGE}
	 * @param src - The source of the image that appears when the type of the avatar is image<br>
	 * @return - This current {@link Avatar}
	 */
	public Avatar setSrc(String src) {
		this.img.setAttribute("src", src);
		return this;
	}
	
	/**
	 * The source of the image that appears when the type of the avatar is image<br>
	 * This methods works only for image type
	 * @see {@link Avatar#setType(String)}
	 * @see {@link Avatar#TYPE_IMAGE}
	 * @return The source of the image that appears when the type of the avatar is image<br>
	 */
	public String getSrc() {
		return this.img.getAttribute("src");
	}

	/**
	 * The image that appears when the type of the avatar is image<br>
	 * This methods works only for image type
	 * @see {@link Avatar#setType(String)}
	 * @see {@link Avatar#TYPE_IMAGE}
	 * @return - The image that appears when the type of the avatar is image<br>
	 */
	public JSContainer getImg() {
		return img;
	}
	
	/**
	 * * The icon that appears when the type of the avatar is icon<br>
	 * This methods works only for icon type
	 * @see {@link Avatar#setType(String)}
	 * @see {@link Avatar#TYPE_ICON}
	 * @return - The icon that appears when the type of the avatar is icon<br>
	 */
	public Icon getFallbackIcon() {
		return this.fallbackIcon;
	}
	
	/**
	 * The component containing the initials that appears when the type of the avatar is initials<br>
	 * This methods works only for initial type
	 * @see {@link Avatar#setType(String)}
	 * @see {@link Avatar#TYPE_INITIAL}
	 * @return - The component containing initial that appears when the type of the avatar is initials<br>
	 */
	public JSContainer getInitial() {
		return this.initial;
	}
	
	/**
	 * An alternative text that appears when the icon cannot be displayed
	 * @param altText - The text to appear when the icon cannot be displayed
	 * @return - This current {@link Avatar}
	 */
	public Avatar setAlternativeText(String altText) {
		this.img.setAttribute("alt", altText)
			.setAttribute("title", altText);
		return this;
	}
	
	/**
	 * The alternative text that appears when the icon cannot be displayed
	 * @return - The text that appears when the icon cannot be displayed
	 */
	public String getAlternativeText() {
		return this.img.getAttribute("alt");
	}

}
