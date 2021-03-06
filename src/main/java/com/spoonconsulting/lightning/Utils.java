package com.spoonconsulting.lightning;

import com.spoonconsulting.lightning.enums.Color;
import com.spoonconsulting.lightning.enums.Direction;
import com.spoonconsulting.lightning.enums.Position;
import com.spoonconsulting.lightning.enums.Size;
import com.spoonconsulting.lightning.enums.Theme;

import framework.components.JSContainer;
import framework.components.api.Renderable;
import jsweet.lang.Array;
import jsweet.lang.Date;
import jsweet.lang.Object;

public class Utils {
	
	public final static String[] MONTHS = new String[] {"January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"};
	
	public final static String[] DAYS =  new String[] {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
//dd-MM-MMM-MMMM-yyyy EE-EEE-EEEE
//03-11-Nov-November-2021 Wed-Wed-Wednesday
	
	public final static String formatDate(Date dt, String format) {
		double date = dt.getDate();
		double day = dt.getDay();
		double month = dt.getMonth();
		double year = dt.getFullYear();
		
		String EEEE = DAYS[(int)day];
		String EEE = EEEE.substring(0, 3);
		String EE = EEE;
		String MMMM = MONTHS[(int)month];
		String MMM = MMMM.substring(0,3);
		String MM = month < 10? "0" + month: month + "";
		String dd = date < 10? "0" + date: date + "";
		String yyyy = year + "";
		String yy = yyyy.substring(2);
		
		
		format = format.replace("EEEE", EEEE);
		format = format.replace("EEE", EEE);
		format = format.replace("EE", EE);
		format = format.replace("MMMM", MMMM);
		format = format.replace("MMM", MMM);
		format = format.replace("MM", MM);
		format = format.replace("dd", dd);
		format = format.replace("yyyy", yyyy);
		format = format.replace("yy", yy);
		///
		return format;
		
	}
	
	public static String camelCaseToLabel(String sname) {
		String result = "";
		jsweet.lang.String name = new jsweet.lang.String(sname);
		for(double i = 0; i < name.length; i++) {
			String s = name.charAt(i);
			if(i == 0) {
				result = s.toUpperCase();
			}else {
				if(s.toLowerCase() != s) {
					result = result + " " + s.toUpperCase();
				}else {
					result = result + s;
				}
			}
		}
		return result;
	}
	
	public static void setPadding(Renderable r, Direction direction) {
		setStyle(r,"slds-p", direction,null);
	}
	public static void setPadding(Renderable r, Direction direction,Size size) {
		setStyle(r,"slds-p", direction,size);
	}
	
	public static void setMargin(Renderable r, Direction direction,Size size) {
		setStyle(r,"slds-m", direction,size);
	}
	
	private static void setStyle(Renderable r, String prefix,Direction direction,Size size) {
		for(Direction dir :Direction.values()) {
			String css = prefix + "-" + dir.getValue();
			r.removeClass(css);
			for(Size s : Size.values()) {
				String scss = css + "_" + s.getValue();
				r.removeClass(scss);
			}
		}
		
		if(direction != null) {
			String css = prefix + "-" + direction.getValue();
			if(size != null) {
				css = css +"_" + size.getValue(); 
			}
			r.addClass(css);
		}
	}
	
	public static void setAbsoluteCenter(Renderable r) {
		r.addClass("slds-align_absolute-center");
	}

	public static void setBorders(Renderable r,Direction dir) {
		if(dir == Direction.AROUND) {
			setBorders(r,Direction.VERTICAL);
			setBorders(r,Direction.HORIZONTAL);
		}else if(dir == Direction.VERTICAL) {
			setBorders(r,Direction.TOP);
			setBorders(r,Direction.BOTTOM);
		}else if(dir == Direction.HORIZONTAL) {
			setBorders(r,Direction.LEFT);
			setBorders(r,Direction.RIGHT);
		}else {
			r.addClass("slds-border_" + dir.getValue());
		}
	}
	
	public static void setBox(Renderable r, Size size) {
		r.addClass("slds-box");
		if(size != null)
			r.addClass("slds-box_" + size.getValue());
	}
	
	public static void setBox(Renderable r) {
		setBox(r, null);
	}
	
	
	public Renderable getDescriptionList(String... strings) {
		JSContainer app = new JSContainer("list", "dl");
		boolean isdt = true;
		for(String s : strings) {
			if(isdt) {
				JSContainer dt = new JSContainer("", "dt");
				app.addChild(dt);
				dt.setHtml(s);
				isdt = false;
			}else {
				JSContainer dd = new JSContainer("","dd");
				dd.setHtml(s);
				app.addChild(dd);
				isdt = true;
			}
			
		}
		return app;
	}
	
	public Renderable getNameValueList(String... strings) {
		JSContainer app = new JSContainer("list", "dl");
		app.addClass("slds-list_horizontal").addClass("slds-wrap");
		boolean isdt = true;
		for(String s : strings) {
			if(isdt) {
				JSContainer dt = new JSContainer("", "dt");
				dt.setHtml(s);
				dt.addClass("slds-item_label").addClass("slds-text-color_weak").addClass("slds-truncate");
				app.addChild(dt);
				isdt = false;
			}else {
				JSContainer dd = new JSContainer("","dd");
				app.addChild(dd);
				dd.setHtml(s);
				dd.addClass("slds-item_detail").addClass("slds-truncate");
				isdt = true;
			}
			
		}
		return app;
	}
	
	public static void setHorizontalList(Renderable ul) {
		setHorizontalList(ul,false);
	}
	
	public static void setHorizontalList(Renderable ul, boolean hasBlock) {
		setHorizontalList(ul, hasBlock, false);
	}
	
	public static void setHorizontalList(Renderable ul, boolean hasBlock, boolean hasLink) {
		setHorizontalList(ul, hasBlock, hasLink,false);
	}
	
	public static void setHorizontalList(Renderable ul, boolean hasBlock, boolean hasLink, boolean hasSpace) {
		setHorizontalList(ul, hasBlock, hasLink, hasSpace,false);
	}
	
	public static void setHorizontalList(Renderable ul, boolean hasBlock, boolean hasLink, boolean hasSpace, boolean isInline) {
		setHorizontalList(ul, hasBlock, hasLink, hasSpace,isInline,false);
	}
	
	public static void setHorizontalList(Renderable ul, boolean hasBlock, boolean hasLink, boolean hasSpace, boolean isInline, boolean hasLeftDivider) {
		setHorizontalList(ul, hasBlock, hasLink, hasSpace,isInline,hasLeftDivider,false);
	}
	
	public static void setHorizontalList(Renderable ul, boolean hasBlock, boolean hasLink, boolean hasSpace, boolean isInline, boolean hasLeftDivider, boolean hasRightDivider) {
		ul.addClass("slds-list_horizontal");
		String css = "";
		if(hasBlock) {
			css = "slds-has-block";
		}
		if(hasLink) {
			css = css + "-links";
		}
		if(hasSpace) {
			css = css + "_space";
		}
		if(isInline) {
			css = css.replace("slds-has-", "slds-has-inline-");
		}
		
		if(css != "") {
			ul.addClass(css);
		}
		
		if(hasLeftDivider) {
			ul.addClass("slds-has-dividers_left");
		}
		
		if(hasRightDivider) {
			ul.addClass("slds-has-dividers_right");
		}
		
	}
	
	
	public static void hyphenate(Renderable r) {
		r.addClass("slds-hyphenate");
	}

	public static void setResetLink(Renderable r) {
		r.addClass("slds--text-link_reset");
	}
	
	public static void setFauxLink(Renderable r) {
		r.addClass("slds-text-link_faux");
	}
	
	public static void setLink(Renderable r) {
		r.addClass("slds-text-link");
	}
	
	public static void setHasBlurFocus(Renderable r) {
		r.addClass("slds-has-blur-focus");
	}
	
	public static void setLineClamp(Renderable r, Size s) {
		String cls = "slds-line-clamp";
		if(s != null) {
			cls = cls + "_" + s.getValue();
			
		r.addClass(cls);
		}
	}
	public static void setLineClamp(Renderable r) {
		setLineClamp(r,null);
	}
	
	public static void setPosition(Renderable r, Position position) {
		for(Position p : Position.values()) {
			r.removeClass("slds-is-" + p.getValue());
		}
		
		if(position != null) {
			r.addClass("slds-is-" + position.getValue());
		}
	}
	
	
	public static void setNoPrint(Renderable r) {
		r.addClass("slds-no-print");
	}
	
	
	public static void setScrollable(Renderable r, boolean x, boolean y) {
		if(x && y) {
			r.addClass("slds-scrollable");
		}else if(x) {
			r.addClass("slds-scrollable_x");
		}else if(y) {
			r.addClass("slds-scrollable_y");
		}else {
			r.removeClass("slds-scrollable_x");
			r.removeClass("slds-scrollable_y");
			r.removeClass("slds-scrollable");
		}
	}
	
	public static void setTextBodyRegular(Renderable r) {
		r.addClass("slds-text-body_regular");
	}
	
	public static void setTextBodySmall(Renderable r) {
		r.addClass("slds-text-body_small");
	}
	
	public static void setTextHeadingLarge(Renderable r) {
		r.addClass("slds-text-heading_large");
	}
	
	public static void setTextHeadingMedium(Renderable r) {
		r.addClass("slds-text-heading_medium");
	}
	
	public static void setTextHeadingSmall(Renderable r) {
		r.addClass("slds-text-heading_small");
	}
	
	public static void setTextTitle(Renderable r) {
		r.addClass("slds-text-title");
	}
	
	public static void setTextTitleCaps(Renderable r) {
		r.addClass("slds-text-title_caps");
	}
	
	public static void setTextLongform(Renderable r) {
		r.addClass("slds-text-longform");
	}
	
	public static void setTextAlignLeft(Renderable r) {
		r.addClass("slds-text-align_left");
	}
	
	public static void setTextAlignRight(Renderable r) {
		r.addClass("slds-text-align_right");
	}
	
	public static void setTextAlignCenter(Renderable r) {
		r.addClass("slds-text-align_center");
	}
	
	public static void setTextColor(Renderable r, Color color) {
		for(Color c : Color.values()) {
			r.removeClass("slds-text-color_" + c.getValue());
		}
		
		if(color != null) {
			r.addClass("slds-text-color_" +color.getValue());
		}
		
	}
	
	public static void setTextFontMonospace(Renderable r) {
		r.addClass("slds-text-font_monospace");
	}	
	
	
	public static void setTheme(Renderable r, Theme theme) {
		for(Theme c :Theme.values()) {
			r.removeClass("slds-theme_" + c.getValue());
		}
		
		if(theme != null)
			r.addClass("slds-theme_" + theme.getValue());
	}
	
	
	public static void setTextTruncate(Renderable r) {
		r.addClass("slds-truncate");
	}
	
	public static void setHasFlexiTruncate(Renderable r, boolean hasFlexiTruncate) {
		if(hasFlexiTruncate) {
			r.addClass("slds-has-flexi-truncate");
		}else {
			r.removeClass("slds-has-flexi-truncate");
		}
	}
	
	@SuppressWarnings("rawtypes")
	public static boolean isEmpty(java.lang.Object val) {
		if(val == null) {
			return true;
		}
		
		if(val + "" == "") {
			return true;
		}
		
		if(Array.isArray(val)) {
			if(((Array)val).length <=0){
				return true;
			}
		}
		
		if(jsweet.lang.Globals.isNaN((Double)val)) {
			return true;
		}
		
		return false;
	}
	
	public static class ObjectBuilder{
		Object obj = new Object();
		
		public static ObjectBuilder create() {
			return new ObjectBuilder();
		}
		
		public ObjectBuilder set(String key, java.lang.Object value) {
			obj.$set(key, value);
			return this;
		}
		
		public ObjectBuilder set(String...strings) {
			for(int i = 0; i < strings.length-1;i=i+2) {
				set(strings[i], strings[i+1]);
			}
			return this;
		}
		
		public Object get() {
			return obj;
		}
	}
	
	public static class ArrayBuilder{
		Array<Object> result = new Array<Object>();
		
		public static ArrayBuilder create() {
			return new ArrayBuilder();
		}
		
		public ArrayBuilder add(Object...val) {
			for(Object o : val) {
				result.push(o);
			}
			return this;
		}
		
		public Array<Object> get(){
			return result;
		}
	}
	
	public static class OptionsBuilder{

		private Array<Object> options = new Array<Object>();
		
		
		public static OptionsBuilder create() {
			return new OptionsBuilder();
		}
		
		public OptionsBuilder add(String value, String label) {
			Object opt = new Object();
			opt.$set("value", value);
			opt.$set("label", label);
			options.push(opt);
			return this;
		}
		
		public OptionsBuilder addValuesLabels(String...strings) {
			for(int i = 0; i < strings.length-1;i=i+2) {
				add(strings[i], strings[i+1]);
			}
			return this;
		}
		
		public OptionsBuilder add(String...strings) {
			for(String s : strings) {
				add(s,s);
			}
			return this;
		}
		
		public Array<Object> get(){
			return options;
		}
		
	}
}
