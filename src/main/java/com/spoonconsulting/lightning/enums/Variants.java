package com.spoonconsulting.lightning.enums;

public class Variants {
	
	public static enum CardVariant {
		
		BASE("base"),
		NARROW("narrow");
		
		private String value;
		
		private CardVariant(String value) {
			this.value = value;
		}
		
		public String getValue() {
			return this.value;
		}
	}
	
	public static enum ButtonIconVariant{
		
		BARE("bare"),
		CONTAINER("container"),
		BRAND("brand"),
		BORDER("border"),
		BORDER_FILLED("border-filled"),
		BARE_INVERSE("bare-inverse"),
		BORDER_INVERSE("border-inverse");
		
		private String value;
		
		private ButtonIconVariant(String value) {
			this.value = value;
		}

		public String getValue() {
			return this.value;
		}
	}
	
	public static enum FormElementVariant{
		
		STANDARD("standard"),
		LABEL_HIDDEN("label-hidden"),
		LABEL_INLINE("label-inline"),
		LABEL_STACKED("label-stacked");
		private String value;
		
		private FormElementVariant(String value) {
			this.value = value;
		}
		
		public String getValue() {
			return this.value;
		}
	}
	
	public static enum TabSetVariant{
		
		STANDARD("default"),
		SCOPED("scoped"),
		VERTICAL("vertical");
		
		private TabSetVariant(String value) {
			this.value = value;
		}
		
		public String getValue() {
			return this.value;
		}
		
		private String value;
	}
	
	
	public static enum Variant {

		BASE(""),NEUTRAL("neutral"), BRAND("brand"), OUTLINE_BRAND("outline-brand"), DESTRUCTIVE("destructive"),
		TEXT_DESTRUCTIVE("text-destructive"), SUCCESS("success"), INVERSE("inverse");

		private String value;

		private Variant(String value) {
			this.value = value;
		}

		public String getValue() {
			return value;
		}

	}

}
