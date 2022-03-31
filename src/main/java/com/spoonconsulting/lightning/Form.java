package com.spoonconsulting.lightning;

import com.spoonconsulting.lightning.enums.InputType;
import com.spoonconsulting.lightning.enums.Variants.FormElementVariant;

import framework.components.JSContainer;
import jsweet.lang.Object;

public class Form extends JSContainer {

	private Object fields = new Object();

	public Form(String name) {
		super(name, "div");
		addClass("slds-form");
		setAttribute("role", "list");
	}

	public FormElement<?> getFormElement(String name) {
		return (FormElement<?>) fields.$get(name);
	}

	public FormRow addRow() {
		FormRow row = new FormRow("row_" + getChildren().length);
		addChild(row);
		return row;
	}

	// l = 5, index = 7
	public FormRow row(int index) {
		if (index >= getChildren().length) {
			for (double i = getChildren().length; i <= index; i++) {
				addRow();
			}
		}
		return (FormRow) getChildren().$get(index);
	}

	public Object getFields() {
		return fields;
	}

	public class FormRow extends JSContainer {

		public FormRow(String name) {
			super(name, "div");
			addClass("slds-form__row");
		}

		public FormItem addItem() {
			FormItem item = new FormItem("item_" + getChildren().length);
			addChild(item);
			return item;
		}
		
		public FormItem addCol() {
			return addItem();
		}

		public FormItem col(int index) {
			return item(index);
		}
		
		public FormItem item(int index) {
			if (index >= getChildren().length) {
				for (double i = getChildren().length; i <= index; i++) {
					addItem();
				}
			}
			return (FormItem) getChildren().$get(index);
		}

		public Form getForm() {
			return (Form) getParent();
		}

		public Form form() {
			return (Form) getParent();
		}

		public class FormItem extends JSContainer {

			public FormItem(String name) {
				super(name, "div");
				addClass("slds-form__item");
				setAttribute("role", "listitem");
			}

			public FormItem addElement(String name, String label, String type) {
				Input input = new Input(name);
				input.setType(type);
				input.setLabel(label);
				input.setVariant(FormElementVariant.LABEL_INLINE);
				addChild(input);
				fields.$set(name, input);
				return this;
			}

			public FormItem addElement(String name, String label) {
				return addElement(name, label, InputType.TEXT.getValue());
			}

			public FormItem addElement(String name) {
				return addElement(name, Utils.camelCaseToLabel(name));
			}

			public FormItem addElement(FormElement<?> element) {
				addChild(element);
				return this;
			}

			public FormRow row() {
				return (FormRow) getParent();
			}

			public FormRow getRow() {
				return (FormRow) getParent();
			}

			public Form getForm() {
				return getRow().getForm();
			}

			public Form form() {
				return getForm();
			}

		}
	}
}
