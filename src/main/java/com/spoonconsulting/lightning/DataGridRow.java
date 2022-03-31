package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;
import jsweet.util.function.Function4;

public class DataGridRow extends JSContainer{

	private DataGrid grid;
	
	private DataGridCell rowNumber = null;
	
	private DataGridCellRowSelector checkbox =null;
	
	private Object line = null;
	
	private int index = -1;
	
	private boolean selected = false;
	
	public DataGridRow( DataGrid grid, Object line, int index) {
		super(index + "", "tr");
		this.grid = grid;
		this.line = line;
		this.index = index;
		addClass("slds-hint-parent");
		
	}
	
	
	@SuppressWarnings("unchecked")
	public void refresh() {
		clearChildren();
		setRendered(false);
		if(grid.isShowRowNumberColumn()) {
			JSContainer td = new JSContainer("rowNumber", "td");
			td.setAttribute("tabindex", "-1");
			td.setAttribute("role", "gridcell");
			 rowNumber = new DataGridCell("rowNumber");
			 rowNumber.setLabel((index + 1) + "");
			 rowNumber.setAlignment(DataGridCell.ALIGNMENT_CENTER);
			td.addChild(rowNumber);
			addChild(td);
		}
		
		if(!grid.isHideCheckboxColumn()) {
			checkbox = new DataGridCellRowSelector("checkbox");
			JSContainer td = new JSContainer("checkbox", "td");
			td.setAttribute("role", "gridcell");
			td.setAttribute("tabindex", "-1");
			td.addChild(checkbox);
			addChild(td);
			checkbox.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					selected = checkbox.isChecked();
				}
			}, "change");
		}
		Array<Object> columns = grid.getColumns();
		for(Object col : columns) {
			
			String fieldName = (String)col.$get("fieldName");
			String label = (String)col.$get("label");
			boolean editable = (Boolean)col.$get("editable");
			JSContainer td = new JSContainer(fieldName, "td");
			td.setAttribute("tabindex", "-1");
			td.setAttribute("data-label", label);
			if(columns.indexOf(col)==0) {
				td.setTag("th");
				td.setAttribute("scope", "row");
				
			}
			java.lang.Object val = line.$get(fieldName);
			String type = (String)col.$get("type");
			DataGridCell cell = new DataGridCell(fieldName);
			cell.setAttribute("data-label", label);
			td.addChild(cell);
			addChild(td);
			if(val != null)
				cell.setLabel(val.toString());
			
			if(editable) {
				cell.setEditable(editable);
				td.addClass("slds-cell-edit");
				cell.setAlignment(DataGridCell.ALIGNMENT_SPREAD);
			}
			
			//apply type level cell renderer
			if(grid.getCellRenderers().hasOwnProperty(type)) {
				Array<Function4<DataGridCell, Object, Object, String, Void>> renderes = (Array<Function4<DataGridCell, Object, Object, String, Void>>)grid.getCellRenderers().$get(type);
				for(Function4<DataGridCell, Object, Object, String, Void> r : renderes) {
					r.apply(cell, col, line, fieldName);
				}
			}
			
			//apply column level cellrenderer.
			if(col.$get("cellRenderer") != null) {
				Function4<DataGridCell, Object, Object, String, Void> renderer = (Function4<DataGridCell, Object, Object, String, Void>)col.$get("cellRenderer");
				if(renderer != null) {
					renderer.apply(cell, col, line, fieldName);
				}
			}
		}
	}


	/**
	 * @return the grid
	 */
	public DataGrid getGrid() {
		return grid;
	}


	/**
	 * @param grid the grid to set
	 */
	public void setGrid(DataGrid grid) {
		this.grid = grid;
	}


	/**
	 * @return the line
	 */
	public Object getLine() {
		return line;
	}


	/**
	 * @param line the line to set
	 */
	public void setLine(Object line) {
		this.line = line;
	}


	/**
	 * @return the index
	 */
	public int getIndex() {
		return index;
	}


	/**
	 * @param index the index to set
	 */
	public void setIndex(int index) {
		this.index = index;
	}


	/**
	 * @return the rowNumber
	 */
	public DataGridCell getRowNumber() {
		return rowNumber;
	}


	/**
	 * @return the checkbox
	 */
	public DataGridCellRowSelector getCheckbox() {
		return checkbox;
	}
	
	
	public DataGridRow setSelected(boolean b) {
		this.selected = b;
		if(checkbox != null) {
			checkbox.setChecked(b);
		}
		return this;
	}
	
	public boolean isSelected() {
		return this.selected;
	}

}
