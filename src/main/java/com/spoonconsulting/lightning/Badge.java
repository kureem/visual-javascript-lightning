package com.spoonconsulting.lightning;

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
 *{@link #POSITION_START}
 *{@link #POSITION_END}
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
	public static String POSITION_START = "start";
	
	/**
	 * static variable to set the icon position to end
	 * @see {@link #setIconPosition(String)
	 */
	public static String POSITION_END = "end";
	
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
	 *{@link #POSITION_START}
	 *{@link #POSITION_END}
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

		rightBadgeIcon.addClass("slds-badge__icon")
			.addClass("slds-badge__icon_right")
			.addChild(rightIconContainer);
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
				setIconPosition(POSITION_START);
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
	 * @see {@link #POSITION_START}
	 * @see {@link #POSITION_END}
	 * @return - The icon position of the badge
	 */
	public String getIconPosition() {
		return this.iconPosition;
	}
	
	/**
	 * sets the icon position of the badge
	 * @param position - The icon position of the badge
	 * @return  The current instance of the badge
	 * @see {@link #POSITION_START}
	 * @see {@link #POSITION_END}
	
	 */
	public Badge setIconPosition(String position) {
		clearChildren();
		this.iconPosition = position;
		if(position == POSITION_START) {
			addChild(leftBadgeIcon);
		}
		addChild(label);
		addChild(assistiveText);
		
		if(position == POSITION_END) {
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
}
