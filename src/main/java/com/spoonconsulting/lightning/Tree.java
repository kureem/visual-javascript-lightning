package com.spoonconsulting.lightning;

import framework.components.JSContainer;
import framework.components.api.EventListener;
import framework.components.api.Renderable;
import jsweet.dom.Event;
import jsweet.lang.Array;
import jsweet.lang.Object;
import jsweet.util.function.TriFunction;

public class Tree extends JSContainer{

	private JSContainer heading = new JSContainer("heading", "h4");

	private Array<Object> items = null;
	
	private UITree tree = null;
	
	
	private TriFunction<Tree, Object, UITreeItem, Void> nodeRenderer;
	
	
	public Tree(String name) {
		super(name, "div");
		addClass("slds-tree_container");
		addChild(heading);
		heading.addClass("slds-tree__group-header");
	}
	
	
	public Tree setHeading(String heading) {
		this.heading.setHtml(heading);
		return this;
	}
	
	public String getHeading() {
		return this.heading.getHtml();
	}
	
	public Tree setItems(Array<Object> items) {
		this.clearChildren();
		addChild(heading);
		 tree = new UITree("heading",1, this);
		addChild(tree);
		tree.setData(items);
		this.items = items;
		return this;
	}
	
	
	/**
	 * @return the nodeRenderer
	 */
	public TriFunction<Tree, Object, UITreeItem, Void> getNodeRenderer() {
		return nodeRenderer;
	}


	/**
	 * @param nodeRenderer the nodeRenderer to set
	 */
	public void setNodeRenderer(TriFunction<Tree, Object, UITreeItem, Void> nodeRenderer) {
		this.nodeRenderer = nodeRenderer;
	}


	private void unselect(UITreeItem except) {
		if(tree != null) {
			tree.unselect(except);
		}
	}
	
	public Array<Object> getItems(){
		return this.items;
	}
	
	public class UITree extends JSContainer{
		
		private int level =1;
		
		private Tree tree_;

		public UITree(String name, int level, Tree tree) {
			super(name, "ul");
			this.level = level;
			setAttribute("role", "group");
			addClass("slds-tree");
			this.tree_ = tree;
		}
		
		public UITree setData(Array<Object> data) {
			clearChildren();
			setRendered(false);
			for(Object obj : data) {
				UITreeItem item = new UITreeItem((String)obj.$get("name"), level, tree_);
				addChild(item);
				item.setData(obj);
				if(nodeRenderer != null) {
					nodeRenderer.apply(tree_, obj, item);
				}
			}
			return this;
		}
		
		public Tree getTree() {
			return tree_;
		}
		
		public void unselect(UITreeItem except) {
			for(Renderable c : getChildren()) {
				UITreeItem item = (UITreeItem)c;
				item.unSelect(except);
			}
		}
	}
	
	
	public class UITreeItem extends JSContainer{

		private ButtonIcon icon = new ButtonIcon("icon", "utility:chevronright");
		private JSContainer label = new JSContainer("label", "span");
		
		private Object data = null;
		
		private UITree children = null;
		
		private int level = -1;
		
		private Tree tree;
		public UITreeItem(String name, int level, Tree tree) {
			super(name, "li");
			this.tree = tree;
			this.level = level;
			setAttribute("aria-level", level + "");
			JSContainer wrapper = addChild("wrapper", "div", "slds-tree__item");
			addClass("UITreeItem");
			setAttribute("role", "treeitem");
			wrapper.addChild(icon);
			icon.addClass("slds-m-right_x-small");
			
			JSContainer labelWrapper = wrapper.addChild("label-wrapper", "span", "slds-has-flexi-truncate");
			labelWrapper.addChild(label);
			label.addClass("slds-tree__item-label").addClass("slds-truncate");
			icon.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					Boolean expanded = (Boolean)data.$get("expanded");
					if(expanded) {
						setExpanded(false);
						data.$set("expanded", false);
					}else {
						UITreeItem item = source.getAncestorWithClass("UITreeItem");
						evt.$set("source",item );
						evt.$set("item", data);
						evt.$set("node", data);
						
						setExpanded(true);
						data.$set("expanded", true);
						tree.fireListener("expand", evt);
					}
				}
			}, "click");
			
			label.addEventListener(new EventListener() {
				
				@Override
				public void performAction(Renderable source, Event evt) {
					Boolean selected = (Boolean)data.$get("selected");
					if(!selected) {
						
						setSelected(true);
						data.$set("selected", true);
						Tree tree = source.getAncestorWithClass("slds-tree_container");
						evt.$set("item", data);
						evt.$set("node", data);
						evt.$set("source", source.getAncestorWithClass("UITreeItem"));
						tree.fireListener("select", evt);
					}
					
				}
			}, "click");
			
		}
		
		@SuppressWarnings("unchecked")
		public void setExpanded(boolean b) {
			Array<Object> children = (Array<Object>)data.$get("items");
			if(children == null || children.length <=0) {
				icon.setStyle("visibility", "hidden");
			}else {
				icon.setStyle("visibility", null);
			}
			if(b) {
				setAttribute("aria-expanded", "true");
				
				if(children != null && children.length > 0) {
					if(this.children == null) {
						this.children = new UITree("tr", level + 1, tree);
						addChild(this.children);
					}
					this.children.setData(children);
					this.children.setStyle("display", null);
				}
				
			}else {
				setAttribute("aria-expanded", "false");
				if(this.children != null) {
					this.children.setStyle("display", "none");
				}
			}
		}
		
		public void setSelected(boolean b) {
			if(b) {
				setAttribute("aria-selected", "true");
				Tree tr = getAncestorWithClass("slds-tree_container");
				tr.unselect(this);
				data.$set("selected", true);
			}else {
				setAttribute("aria-selected", "false");
				data.$set("selected", false);
			}
		}
		
		public void unSelect( UITreeItem except) {
			if(getId() != except.getId()) {
				data.$set("selected", false);
				setAttribute("aria-selected", "false");
				
			}
			
			if(this.children != null) {
				this.children.unselect(except);
			}
		}
		
		public void setData(Object data) {
			this.data = data;
			String label = (String)data.$get("label");
			String name = (String)data.$get("name");
			Boolean expanded = (Boolean)data.$get("expanded");
			Boolean selected = (Boolean)data.$get("selected");
			this.label.setHtml(label);
			setName(name);
			setExpanded(expanded);
			setSelected(selected);
		}
		
		public Object getData() {
			return this.data;
		}
	}

}
