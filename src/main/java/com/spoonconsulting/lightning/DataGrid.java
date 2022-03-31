package com.spoonconsulting.lightning;

import com.spoonconsulting.lightning.enums.MenuAlignment;
import com.spoonconsulting.lightning.enums.Size;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Date;
import jsweet.lang.Object;
import jsweet.util.function.Function4;

public class DataGrid extends JSContainer{

	private JSContainer thead = new JSContainer("thead", "thead");
	
	private JSContainer theadRow = new JSContainer("thead-row", "tr");

	private JSContainer tbody = new JSContainer("tbody", "tbody");

	private Array<Object> data = new Array<Object>();

	private String columnWidthsMode = "fixed";

	private Array<Object> columns = new Array<Object>();

	private String defaultSortDirection = "asc";

	private boolean enableInfiniteLoading = true;

	private Array<Object> errors = new Array<Object>();

	private boolean hideCheckboxColumn = false;

	private boolean hideTableHeader = false;

	private boolean isLoading = false;

	private String keyField = "";

	private String loadMoreOffset = "20px";

	private String maxColumnWidth = "1000px";

	private int maxRowSelection = -1;

	private String minColumnWidth = "20px";

	private boolean resizeColumnDisabled = false;

	private int resizeStep = 5;

	private String rowNumberOffset = "32px";

	private boolean showRowNumberColumn = false;

	private String sortedBy = "";

	private String sortDirection = defaultSortDirection;

	private boolean suppressBottomBar = false;

	private int wrapTextMaxLines = 1;
	
	private Object columns_ = new Object();
	
	private DataGridColHeader rowNumber = null;
	
	private DataGridColHeaderRowSelector checkbox = null;
	
	public Function4<DataGridColHeader,Object,Array<Object>,String, Void> colHeaderRenderer;
	
	private Object cellRenderers = new Object();
	
	public final static String WIDTH_MODE_FIXED = "fixed";
	public final static String WIDTH_MODE_AUTO = "auto";
	
	private JSContainer table = new JSContainer("table", "table");
	
	private JSContainer scrollableY = new JSContainer("scrollable-y", "div");
	
	private JSContainer scrollableX = new JSContainer("scrollable-x", "div");
	
	

	@SuppressWarnings("unchecked")
	public DataGrid(String name) {
		super(name, "div");
		
		scrollableX.addClass("slds-table_header-fixed_container")
			.addClass("slds-scrollable_x")
			.setStyle("height", "100%");
		addChild(scrollableX);
		
		scrollableY.addClass("slds-scrollable_y").setStyle("width", "100%");
		scrollableX.addChild(scrollableY);
		
		
		scrollableY.addChild(table);
		
		table.addClass("slds-table");
		table.addClass("slds-table_header-fixed");
		table.addClass("slds-table_bordered");
		table.addClass("slds-table_edit");
		table.addClass("slds-table_resizable-cols");

		
		table.addChild(thead);
		table.addChild(tbody);
		
		theadRow.addClass("slds-line-height_reset");
		thead.addChild(theadRow);
		
		addCellRenderer((cell,column,data, fieldName)->{
			
			String sdate = (String)data.$get(fieldName);
			if(sdate != null) {
				Date dt = new Date(Date.parse(sdate));
				String fdate = Utils.formatDate(dt, "MMM dd, yyyy");
				cell.setLabel(fdate);
			}
			
			return null;
		},"date");
		
		addCellRenderer((cell,column,data, fieldName)->{
			
			String scur = (String)data.$get(fieldName);
			cell.setAlignment(DataGridCell.ALIGNMENT_END);
			cell.setLabel("$" + scur);
			
			return null;
		},"currency");
		
		addCellRenderer((cell,column,data, fieldName)->{
			
			
			
			String scur = (String)data.$get(fieldName);
			JSContainer link = new JSContainer("a");
			link.setAttribute("href", "tel:" + scur);
			link.setHtml(scur);
			cell.getContent().clearChildren();
			cell.getContent().setRendered(false);
			cell.getContent().addChild(link);
			
			return null;
		},"phone");
		
		
		addCellRenderer((cell,column,data, fieldName)->{
			
			
			
			String scur = (String)data.$get(fieldName);
			JSContainer link = new JSContainer("a");
			link.setAttribute("href", "mailto:" + scur);
			link.setHtml(scur);
			cell.getContent().clearChildren();
			cell.getContent().setRendered(false);
			cell.getContent().addChild(link);
			
			return null;
		},"email");
		
		addCellRenderer((cell,column,data, fieldName)->{
			
			
			
			String url = (String)data.$get(fieldName);
			JSContainer link = new JSContainer("a");
			link.setAttribute("href", url);
			link.setHtml(url);
			cell.getContent().clearChildren();
			cell.getContent().setRendered(false);
			cell.getContent().addChild(link);
			
			return null;
		},"url");
		
		
		addCellRenderer((cell,column,data,fieldName)->{
			Object typeAttributes = (Object)column.$get("typeAttributes");
			Array<Object> rowActions = (Array<Object>)typeAttributes.$get("rowActions");
			ButtonMenu menu = new ButtonMenu("menu", "div");
			menu.setButtonSize(Size.EXTRA_SMALL);
			menu.setStyle("position", "absolute");
			menu.setOptions(rowActions);
			cell.getContent().addChild(menu);
			cell.getContent().addClass("slds-grid slds-align_absolute-center slds-grid_align-spread");
			menu.setMenuAlignment(MenuAlignment.RIGHT);
			menu.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {

					evt.$set("column", column);
					evt.$set("cell", cell);
					evt.$set("row",data);
					evt.$set("value", data.$get(fieldName));
					fireListener("rowaction", evt);
				}
			}, "select");
			return null;
		}, "action");
	}
	
	@SuppressWarnings("unchecked")
	public DataGrid addCellRenderer(Function4<DataGridCell, Object, Object, String, Void> renderer, String type) {
		if(cellRenderers.hasOwnProperty(type)) {
			Array<Function4<DataGridCell, Object, Object, String, Void>> renderes = (Array<Function4<DataGridCell, Object, Object, String, Void>>)cellRenderers.$get(type);
			renderes.push(renderer);
		}else {
			Array<Function4<DataGridCell, Object, Object, String, Void>> renderes = new Array<Function4<DataGridCell,Object,Object,String,Void>>();
			renderes.push(renderer);
			cellRenderers.$set(type, renderes);
		}
		return this;
	}
	
	@SuppressWarnings("unchecked")
	public DataGrid refreshHeader() {
		theadRow.clearChildren();
		theadRow.setRendered(false);
		if(this.hideTableHeader) {
			this.thead.setStyle("display", "none");
		}else {
			this.thead.setStyle("display", null);
		}

		if(this.showRowNumberColumn) {
			JSContainer th = new JSContainer("th");
			th.setAttribute("scope", "col");
			th.setAttribute("tabindex", "0");
			rowNumber = new DataGridColHeader("rowNumber", "");
			theadRow.addChild(th.addChild(rowNumber));
			th.setStyle("width", "62px");
			rowNumber.setWidth("62px");
			//columns_.$set("rowNumber", rowNumber);
		}
		
		if(!this.hideCheckboxColumn) {
			JSContainer th = new JSContainer("th");
			th.setAttribute("scope", "col");
			th.setAttribute("tabindex", "0");
			th.setStyle("width", "32px");
			checkbox = new DataGridColHeaderRowSelector("checkbox");
			checkbox.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					setSelectAll(checkbox.isChecked());
				}
			}, "change");
			theadRow.addChild(th.addChild(checkbox));
			//columns_.$set("checkbox", checkbox);
		}
		
		for(Object column : columns) {
		
			String name = (String)column.$get("fieldName");
			String label = (String)column.$get("label");
			String type = (String)column.$get("type");
			if(name == null) {
				name = "field" + (columns.indexOf(column)+1);
				column.$set("fieldName", name);
			}
			
			if(label ==  null) {
				if(type != null) {
					if(type == "action") {
						label = "";
					}else {
						label = type;
					}
				}else {
					type = name;
				}
				column.$set("label", label);
			}
			Integer fixedWidth = (Integer)column.$get("fixedWidth");
			Integer initialWidth = (Integer)column.$get("initialWidth");
			boolean hideDefaultActions = (boolean)column.$get("hideDefaultActions");
			String iconName = (String)column.$get("iconName");
			Boolean sortable = (Boolean)column.$get("sortable");
			String keyField = (String)column.$get("keyField");
			DataGridColHeader header = new DataGridColHeader(name, label);
			if(fixedWidth != null && fixedWidth > -1) {
				header.setWidth(fixedWidth + "px");
				header.setResizable(false);
			}else {
				if(initialWidth != null)
					header.setWidth(initialWidth + "px");
				else {
					if(type != "action") {
						header.setWidth("221px");
					}else {
						header.setWidth("50px");
					}
				}
			}
			header.setHideDefaultActions(hideDefaultActions);
			header.setIconName(iconName);
			
			if(sortable != null) {
				header.setSortable(sortable);
			}
			if(name == sortedBy) {
				header.setSortable(true);
				header.setDefaultSortDirection(defaultSortDirection);
				header.setSortDirection(sortDirection);
			}
			header.setKeyField(name == keyField);
			JSContainer th = new JSContainer("th");
			th.setAttribute("scope", "col");
			th.setAttribute("tabindex", "0");
			theadRow.addChild(th.addChild(header));
			header.setColumn(column);
			if(colHeaderRenderer != null) {
				colHeaderRenderer.apply(header, column,columns,name);
			}
			columns_.$set(name, header);
			
			if(column.$get("headerRenderer") != null) {
			
				Function4<DataGridColHeader,Object,Array<Object>, String, Void> renderer = (Function4<DataGridColHeader,Object,Array<Object>, String, Void>)column.$get("headerRenderer");
				renderer.apply(header,column,columns,name);
			}
		}
		
		return this;
	}
	
	
	
	public Object getColumn(String name) {
		for(Object col : columns) {
			String fieldName = (String)col.$get("fieldName");
			if(fieldName == name) {
				return col;
			}
		}
		return null;
	}
	
	public DataGrid refreshBody() {
		tbody.clearChildren();
		tbody.setRendered(false);
		int index = 0;
		for(Object line : data) {
			DataGridRow row = new DataGridRow( this, line, index);
			tbody.addChild(row);
			row.refresh();
			index++;
		}
		return this;
	}
	
	
	public DataGrid setSelectAll(boolean b) {
		for(DataGridRow row : getRows()) {
			row.setSelected(b);
		}
		return this;
	}
	
	public Array<Object> getSelectedItems(){
		Array<Object> result = new Array<Object>();
		for(DataGridRow row : getRows()) {
			if(row.isSelected()) {
				result.push(row.getLine());
			}
		}
		return result;
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	public Array<DataGridRow> getRows(){
		Array result = tbody.getChildren();
		return result;
	}
	
	/**
	 * @return the cellRenderers
	 */
	public Object getCellRenderers() {
		return cellRenderers;
	}

	public DataGrid refresh() {
		this.refreshHeader();
		this.refreshBody();
		return this;
	}

	public JSContainer getHead() {
		return this.thead;
	}

	public JSContainer getBody() {
		return this.tbody;
	}

	public DataGrid setData(Array<Object> data) {
		this.data = data;
		return this;
	}

	public Array<Object> getSelectedRows() {
		return null;
	}

	public DataGrid setSelectedRows(Array<Object> rows) {
		return this;
	}

	public DataGrid openInlineEdit() {
		return this;
	}

	/**
	 * @return the columnWidthsMode
	 */
	public String getColumnWidthsMode() {
		return columnWidthsMode;
	}

	/**
	 * @param columnWidthsMode the columnWidthsMode to set
	 */
	public DataGrid setColumnWidthsMode(String columnWidthsMode) {
		this.columnWidthsMode = columnWidthsMode;
		return this;
	}

	/**
	 * @return the columns
	 */
	public Array<Object> getColumns() {
		return columns;
	}

	/**
	 * @param columns the columns to set
	 */
	public DataGrid setColumns(Array<Object> columns) {
		this.columns = columns;
		return this;
	}

	/**
	 * @return the defaultSortDirection
	 */
	public String getDefaultSortDirection() {
		return defaultSortDirection;
	}

	/**
	 * @param defaultSortDirection the defaultSortDirection to set
	 */
	public DataGrid setDefaultSortDirection(String defaultSortDirection) {
		this.defaultSortDirection = defaultSortDirection;
		return this;
	}

	/**
	 * @return the enableInfiniteLoading
	 */
	public boolean isEnableInfiniteLoading() {
		return enableInfiniteLoading;
	}

	/**
	 * @param enableInfiniteLoading the enableInfiniteLoading to set
	 */
	public DataGrid setEnableInfiniteLoading(boolean enableInfiniteLoading) {
		this.enableInfiniteLoading = enableInfiniteLoading;
		return this;
	}

	/**
	 * @return the errors
	 */
	public Array<Object> getErrors() {
		return errors;
	}

	/**
	 * @param errors the errors to set
	 */
	public DataGrid setErrors(Array<Object> errors) {
		this.errors = errors;
		return this;
	}

	/**
	 * @return the hideCheckboxColumn
	 */
	public boolean isHideCheckboxColumn() {
		return hideCheckboxColumn;
	}

	/**
	 * @param hideCheckboxColumn the hideCheckboxColumn to set
	 */
	public DataGrid setHideCheckboxColumn(boolean hideCheckboxColumn) {
		this.hideCheckboxColumn = hideCheckboxColumn;
		return this;
	}

	/**
	 * @return the hideTableHeader
	 */
	public boolean isHideTableHeader() {
		return hideTableHeader;
	}

	/**
	 * @param hideTableHeader the hideTableHeader to set
	 */
	public DataGrid setHideTableHeader(boolean hideTableHeader) {
		this.hideTableHeader = hideTableHeader;
		return this;
	}

	/**
	 * @return the isLoading
	 */
	public boolean isLoading() {
		return isLoading;
	}

	/**
	 * @param isLoading the isLoading to set
	 */
	public DataGrid setLoading(boolean isLoading) {
		this.isLoading = isLoading;
		return this;
	}

	/**
	 * @return the keyField
	 */
	public String getKeyField() {
		return keyField;
	}

	/**
	 * @param keyField the keyField to set
	 */
	public DataGrid setKeyField(String keyField) {
		this.keyField = keyField;
		return this;
	}

	/**
	 * @return the loadMoreOffset
	 */
	public String getLoadMoreOffset() {
		return loadMoreOffset;
	}

	/**
	 * @param loadMoreOffset the loadMoreOffset to set
	 */
	public DataGrid setLoadMoreOffset(String loadMoreOffset) {
		this.loadMoreOffset = loadMoreOffset;
		return this;
	}

	/**
	 * @return the maxColumnWidth
	 */
	public String getMaxColumnWidth() {
		return maxColumnWidth;
	}

	/**
	 * @param maxColumnWidth the maxColumnWidth to set
	 */
	public DataGrid setMaxColumnWidth(String maxColumnWidth) {
		this.maxColumnWidth = maxColumnWidth;
		return this;
	}

	/**
	 * @return the maxRowSelection
	 */
	public int getMaxRowSelection() {
		return maxRowSelection;
	}

	/**
	 * @param maxRowSelection the maxRowSelection to set
	 */
	public DataGrid setMaxRowSelection(int maxRowSelection) {
		this.maxRowSelection = maxRowSelection;
		return this;
	}

	/**
	 * @return the minxColumnWidth
	 */
	public String getMinColumnWidth() {
		return minColumnWidth;
	}

	/**
	 * @param minxColumnWidth the minxColumnWidth to set
	 */
	public DataGrid setMinColumnWidth(String minxColumnWidth) {
		this.minColumnWidth = minxColumnWidth;
		return this;
	}

	/**
	 * @return the resizeColumnDisabled
	 */
	public boolean isResizeColumnDisabled() {
		return resizeColumnDisabled;
	}

	/**
	 * @param resizeColumnDisabled the resizeColumnDisabled to set
	 */
	public DataGrid setResizeColumnDisabled(boolean resizeColumnDisabled) {
		this.resizeColumnDisabled = resizeColumnDisabled;
		return this;
	}

	/**
	 * @return the resizeStep
	 */
	public int getResizeStep() {
		return resizeStep;
	}

	/**
	 * @param resizeStep the resizeStep to set
	 */
	public DataGrid setResizeStep(int resizeStep) {
		this.resizeStep = resizeStep;
		return this;
	}

	/**
	 * @return the rowNumberOffset
	 */
	public String getRowNumberOffset() {
		return rowNumberOffset;
	}

	/**
	 * @param rowNumberOffset the rowNumberOffset to set
	 */
	public DataGrid setRowNumberOffset(String rowNumberOffset) {
		this.rowNumberOffset = rowNumberOffset;
		return this;
	}

	/**
	 * @return the showRowNumberColumn
	 */
	public boolean isShowRowNumberColumn() {
		return showRowNumberColumn;
	}

	/**
	 * @param showRowNumberColumn the showRowNumberColumn to set
	 */
	public DataGrid setShowRowNumberColumn(boolean showRowNumberColumn) {
		this.showRowNumberColumn = showRowNumberColumn;
		return this;
	}

	/**
	 * @return the sortedBy
	 */
	public String getSortedBy() {
		return sortedBy;
	}

	/**
	 * @param sortedBy the sortedBy to set
	 */
	public DataGrid setSortedBy(String sortedBy) {
		this.sortedBy = sortedBy;
		return this;
	}

	/**
	 * @return the sortDirection
	 */
	public String getSortDirection() {
		return sortDirection;
	}

	/**
	 * @param sortDirection the sortDirection to set
	 */
	public DataGrid setSortDirection(String sortDirection) {
		this.sortDirection = sortDirection;
		return this;
	}

	/**
	 * @return the suppressBottomBar
	 */
	public boolean isSuppressBottomBar() {
		return suppressBottomBar;
	}

	/**
	 * @param suppressBottomBar the suppressBottomBar to set
	 */
	public DataGrid setSuppressBottomBar(boolean suppressBottomBar) {
		this.suppressBottomBar = suppressBottomBar;
		return this;
	}

	/**
	 * @return the wrapTextMaxLines
	 */
	public int getWrapTextMaxLines() {
		return wrapTextMaxLines;
	}

	/**
	 * @param wrapTextMaxLines the wrapTextMaxLines to set
	 */
	public DataGrid setWrapTextMaxLines(int wrapTextMaxLines) {
		this.wrapTextMaxLines = wrapTextMaxLines;
		return this;
	}

	/**
	 * @return the data
	 */
	public Array<Object> getData() {
		return data;
	}

}
