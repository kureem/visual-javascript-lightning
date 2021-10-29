package com.spoonconsulting.lightning;

import com.spoonconsulting.lightning.enums.Size;

import framework.components.JSContainer;

/**
 * <p>The badge is a component to display a small amount of information.</p>
 *<p>The badge can contain :</p>
 *<p>
 *<ul>
 *	<li>label - {@link #setLabel(String)}, {@link #getLabel()}</li>
 *	<li>icon - {@link #setIconName(String)}, {@link #getIconName()}</li>
 *	<li>assistive text - {@link #setAssistiveText(String)}, {@link #getAssistiveText()}</li>
 *	<li>icon alternative text - {@link #setIconAlternativeText(String)} {@link #getIconAlternativeText()}</li>
 *</ul>
 *<div>the icon can be positioned at start or end of the badge. i.e before or after the label.</div>
 *<p>The icon is the standard salesforce icon</p>
 * {@link #setIconPosition(String)}
 *{@link #ICON_POSITION_START}
 *{@link #ICON_POSITION_END}
 *</p>
 *
 * @author Kureem Rossaye<br>
 *    <a href="mailto:kureem.rossaye@spoonconsulting.com">kureem.rossaye@spoonconsulting.com</a>
 *
 */
public class Badge extends BaseLightning{
	
	private JSContainer label = new JSContainer("label", "span");
	private IconContainer leftIconContainer = new IconContainer("left-icon", "span");
	private JSContainer leftBadgeIcon = new JSContainer("left-badge-icon", "span");

	private IconContainer rightIconContainer = new IconContainer("right-icon", "span");
	private JSContainer rightBadgeIcon = new JSContainer("right-badge-icon", "span");
	
	private JSContainer assistiveText = new JSContainer("assistive-text", "span");
	
	/**
	 * static variable to set the icon position to start
	 * @see {@link #setIconPosition(String)
	 */
	public final static String ICON_POSITION_START = "start";
	
	/**
	 * static variable to set the icon position to end
	 * @see {@link #setIconPosition(String)
	 */
	public final static String ICON_POSITION_END = "end";
	
	/**
	 * static variable to set the variant of the badge as inverse
	 * @see Badge#setVariant(String)
	 */
	public final static String VARIANT_INVERSE = "inverse";
	
	/**
	 * static variable to set the variant of the badge as standard
	 * @see Badge#setVariant(String)
	 */
	public final static String VARIANT_STANDARD = "standard";
	
	
	private String iconPosition = null;

	/**
	 * <p>The badge is a component to display a small amount of information.</p>
	 *<p>The badge can contain :</p>
	 *<p>
	 *<ul>
	 *	<li>label - {@link #setLabel(String)}, {@link #getLabel()}</li>
	 *	<li>icon - {@link #setIconName(String)}, {@link #getIconName()}</li>
	 *	<li>assistive text - {@link #setAssistiveText(String)}, {@link #getAssistiveText()}</li>
	 *	<li>icon alternative text - {@link #setIconAlternativeText(String)} {@link #getIconAlternativeText()}</li>
	 *</ul>
	 *<div>the icon can be positioned at start or end of the badge. i.e before or after the label.</div>
	 *<p>The icon is the standard salesforce icon</p>
	 * {@link #setIconPosition(String)}
	 *{@link #ICON_POSITION_START}
	 *{@link #ICON_POSITION_END}
	 *</p>
	 *Constructs a Badge with the specified name
	 * @param name - The name of the badge
	 */
	public Badge(String name) {
		super(name, "span");
		addClass("slds-badge");
		leftBadgeIcon.addClass("slds-badge__icon")
			.addClass("slds-badge__icon_left")
			.addChild(leftIconContainer);

		addChild(label);
		addChild(assistiveText);
		assistiveText.addClass("slds-assistive-text");

		rightBadgeIcon.addClass("slds-badge__icon")
			.addClass("slds-badge__icon_right")
			.addChild(rightIconContainer);
		
		leftIconContainer.setSize(Size.EXTRA_EXTRA_SMALL).getIcon().addClass("slds-icon-text-default");
		rightIconContainer.setSize(Size.EXTRA_EXTRA_SMALL).getIcon().addClass("slds-icon-text-default");
	}
	
	/**
	 * sets the assistive text for the badge<br>
	 * The text is hidden
	 * @param txt - The assistive text
	 * @return - The current instance of the badge
	 */
	public Badge setAssistiveText(String txt) {
		this.assistiveText.setHtml(txt);
		return this;
	}
	
	/**
	 * 
	 * @return - The assistive text
	 */
	public String getAssistiveText() {
		return this.assistiveText.getHtml();
	}
	
	/**
	 * The label for the badge<br>
	 * @return - The label for the badge
	 */
	public String getLabel() {
		return this.label.getHtml();
	}
	
	/**
	 * sets the icon alternative text when the icon is not rendered
	 * @param altText - The alternative text when the icon is not rendered
	 * @return - The current instance of the badge
	 */
	public Badge setIconAlternativeText(String altText) {
		leftIconContainer.setTitle(altText);
		rightIconContainer.setTitle(altText);
		return this;
	}
	
	/**
	 * 
	 * @return - The icon alternative text
	 */
	public String getIconAlternativeText() {
		return this.leftIconContainer.getTitle();
	}
	
	/**
	 * sets the icon name for the badge<br>
	 * takes the standard salesforce icon notation. e.g. utility:settings
	 * @param iconName - The icon name of the badge
	 * @return - The current instance of the badge
	 */
	public Badge setIconName(String iconName) {
		if(iconName != null && iconName.length() > 0) {
			leftIconContainer.setIconName(iconName);
			rightIconContainer.setIconName(iconName);
			if(getChildren().length ==1) {
				setIconPosition(ICON_POSITION_START);
			}
		}else {
			setIconPosition("none");
		}
		return this;
	}
	
	/**
	 * 
	 * @return - The icon name of the badge
	 */
	public String getIconName() {
		return this.leftIconContainer.getIcon().getIconName();
	}
	
	/**
	 * @see {@link #ICON_POSITION_START}
	 * @see {@link #ICON_POSITION_END}
	 * @return - The icon position of the badge
	 */
	public String getIconPosition() {
		return this.iconPosition;
	}
	
	/**
	 * sets the icon position of the badge
	 * @param position - The icon position of the badge
	 * @return  The current instance of the badge
	 * @see {@link #ICON_POSITION_START}
	 * @see {@link #ICON_POSITION_END}
	
	 */
	public Badge setIconPosition(String position) {
		clearChildren();
		this.iconPosition = position;
		if(position == ICON_POSITION_START) {
			addChild(leftBadgeIcon);
		}
		addChild(label);
		addChild(assistiveText);
		
		if(position == ICON_POSITION_END) {
			addChild(rightBadgeIcon);
		}
		setRendered(false);
		return this;
	}
	
	/**
	 * sets the label for the badge
	 * @param label - The label for the badge
	 * @return - The current instance of the badge
	 */
	public Badge setLabel(String label) {
		this.label.setHtml(label);
		return this;
	}
	
	
	/**
	 * sets the variant of the badge.
	 * @see #VARIANT_INVERSE
	 * @see #VARIANT_STANDARD
	 * @param variant - the variant of the badge
	 * @return - The current instance of the badge
	 */
	public Badge setVariant(String variant) {
		if(variant == VARIANT_INVERSE) {
			addClass("slds-badge_inverse");
		}else {
			removeClass("slds-badge_inverse");
		}
		
		return this;
	}
	
	/**
	 * The variant of the badge
	 * @see #VARIANT_INVERSE
	 * @see #VARIANT_STANDARD
	 * @return - The variant of the badge
	 */
	public String getVariant() {
		if(hasClass("slds-badge_inverse")) {
			return VARIANT_INVERSE;
		}else {
			return VARIANT_STANDARD;
		}
	}
}
