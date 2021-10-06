/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
var com;
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class AbstractProgress extends JSContainer {
                constructor(name, tag) {
                    super(name, tag);
                }
                /**
                 *
                 * @param {string} value
                 * @return {*}
                 */
                getStep(value) {
                    {
                        let array122 = this.getSteps();
                        for (let index121 = 0; index121 < array122.length; index121++) {
                            let step = array122[index121];
                            {
                                if (step.getValue() === value) {
                                    return step;
                                }
                            }
                        }
                    }
                    return null;
                }
                /**
                 *
                 * @param {string} value
                 * @return {*}
                 */
                setCurrentStep(value) {
                    let passedCurrent = false;
                    {
                        let array124 = this.getSteps();
                        for (let index123 = 0; index123 < array124.length; index123++) {
                            let step = array124[index123];
                            {
                                if (step.getValue() === value) {
                                    step.setCurrent(true);
                                    passedCurrent = true;
                                }
                                else {
                                    step.setComplete(!passedCurrent);
                                }
                            }
                        }
                    }
                    return this;
                }
                /**
                 *
                 * @return {*}
                 */
                getCurrentStep() {
                    {
                        let array126 = this.getSteps();
                        for (let index125 = 0; index125 < array126.length; index125++) {
                            let step = array126[index125];
                            {
                                if (step.isCurrent()) {
                                    return step;
                                }
                            }
                        }
                    }
                    return null;
                }
                /**
                 *
                 * @param {boolean} b
                 * @return {*}
                 */
                setHasError(b) {
                    const step = this.getCurrentStep();
                    step.setHasError(b);
                    return this;
                }
                /**
                 *
                 * @return {boolean}
                 */
                getHasError() {
                    {
                        let array128 = this.getSteps();
                        for (let index127 = 0; index127 < array128.length; index127++) {
                            let step = array128[index127];
                            {
                                if (step.getHasError()) {
                                    return true;
                                }
                            }
                        }
                    }
                    return false;
                }
                /**
                 *
                 * @param {string} variant
                 * @return {*}
                 */
                setVariant(variant) {
                    this.setAttribute("variant", variant);
                    return this;
                }
                /**
                 *
                 * @return {string}
                 */
                getVariant() {
                    return this.getAttribute("variant");
                }
                /**
                 *
                 * @param {*} step
                 * @return {*}
                 */
                removeStep(step) {
                    const parent = step.getParent();
                    parent.removeChild(step);
                    parent.setRendered(false);
                    return this;
                }
                /**
                 *
                 * @param {string} value
                 * @return {*}
                 */
                setValue(value) {
                    this.setCurrentStep(value);
                    return this;
                }
                /**
                 *
                 * @return {string}
                 */
                getValue() {
                    const current = this.getCurrentStep();
                    if (current != null) {
                        return current.getValue();
                    }
                    else {
                        return null;
                    }
                }
            }
            lightning.AbstractProgress = AbstractProgress;
            AbstractProgress["__class"] = "com.spoonconsulting.lightning.AbstractProgress";
            AbstractProgress["__interfaces"] = ["framework.components.api.Renderable", "com.spoonconsulting.lightning.IProgress"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class Avatar extends JSContainer {
                constructor(name) {
                    super(name, "span");
                    this.img = new JSContainer("image", "img");
                    this.fallbackIcon = new com.spoonconsulting.lightning.Icon("fallback-icon", "standard:user");
                    this.iconContainer = new JSContainer("iconContainer", "span");
                    this.initial = new JSContainer("initial", "abbr");
                    if (this.type === undefined) {
                        this.type = null;
                    }
                    this.addClass("slds-avatar");
                    this.initial.addClass("slds-avatar__initials").addClass("slds-icon-standard-user");
                    this.iconContainer.addClass("slds-icon_container").addClass("slds-icon-standard-account");
                    this.iconContainer.addChild(this.fallbackIcon);
                    this.setType(Avatar.TYPE_IMAGE);
                }
                setType(type) {
                    this.clearChildren();
                    if (type === Avatar.TYPE_IMAGE) {
                        this.addChild(this.img);
                    }
                    else if (type === Avatar.TYPE_ICON) {
                        this.addChild(this.iconContainer);
                    }
                    else if (type === Avatar.TYPE_INITIAL) {
                        this.addChild(this.initial);
                    }
                    this.setRendered(false);
                    return this;
                }
                getType() {
                    return this.type;
                }
                setVariant(type) {
                    this.removeClass("slds-avatar_" + Avatar.VARIANT_CIRCLE).removeClass("slds-avatar_" + Avatar.VARIANT_SQUARE).addClass("slds-avatar_" + type);
                    return this;
                }
                getVariant() {
                    if (this.hasClass("slds-avatar_" + Avatar.VARIANT_CIRCLE)) {
                        return Avatar.VARIANT_CIRCLE;
                    }
                    else {
                        return Avatar.VARIANT_SQUARE;
                    }
                }
                setSize(size) {
                    {
                        let array130 = /* Enum.values */ function () { let result = []; for (let val in com.spoonconsulting.lightning.Size) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index129 = 0; index129 < array130.length; index129++) {
                            let s = array130[index129];
                            {
                                this.removeClass("slds-avatar_" + com.spoonconsulting.lightning.Size["_$wrappers"][s].getValue());
                            }
                        }
                    }
                    this.addClass("slds-avatar_" + com.spoonconsulting.lightning.Size["_$wrappers"][size].getValue());
                    return this;
                }
                setTitle(title) {
                    this.img.setAttribute("title", title);
                    this.initial.setAttribute("title", title);
                    this.fallbackIcon.setAttribute("title", title);
                    return this;
                }
                getInitials() {
                    return this.initial.getHtml();
                }
                setInitials(initials) {
                    this.initial.setHtml(initials);
                    return this;
                }
                getFallbackIconName() {
                    return this.fallbackIcon.getIconName();
                }
                setFallbackIconName(fallbackIconName) {
                    this.fallbackIcon.setIconName(fallbackIconName);
                    return this;
                }
                setSrc(src) {
                    this.img.setAttribute("src", src);
                    return this;
                }
                getSrc() {
                    return this.img.getAttribute("src");
                }
                getImg() {
                    return this.img;
                }
                getFallbackIcon() {
                    return this.fallbackIcon;
                }
                getInitial() {
                    return this.initial;
                }
                setAlternativeText(altText) {
                    this.img.setAttribute("alt", altText).setAttribute("title", altText);
                    return this;
                }
                getAlternativeText() {
                    return this.img.getAttribute("alt");
                }
            }
            Avatar.TYPE_IMAGE = "image";
            Avatar.TYPE_INITIAL = "initial";
            Avatar.TYPE_ICON = "icon";
            Avatar.VARIANT_SQUARE = "square";
            Avatar.VARIANT_CIRCLE = "circle";
            lightning.Avatar = Avatar;
            Avatar["__class"] = "com.spoonconsulting.lightning.Avatar";
            Avatar["__interfaces"] = ["framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class BaseComboBox extends JSContainer {
                constructor(name) {
                    super(name, "div");
                    this.combobox = new JSContainer("combobox", "div");
                    this.formElement = new JSContainer("formElement", "div");
                    this.input = new input.JSTextInput("input");
                    this.dropdown = new com.spoonconsulting.lightning.ListBox("dropdown");
                    this.inputIconContainer = new JSContainer("input-icon-container", "div");
                    this.inputIcon = new com.spoonconsulting.lightning.IconContainer("input-icon", "div");
                    this.addClass("slds-combobox_container").addChild(this.combobox);
                    this.combobox.addClass("slds-combobox").addClass("slds-dropdown-trigger").addClass("slds-dropdown-trigger_click").setAttribute("aria-expanded", "false").setAttribute("aria-haspopup", "listbox").setAttribute("role", "combobox").addChild(this.formElement).addChild(this.dropdown);
                    this.formElement.setAttribute("role", "none").addClass("slds-combobox__form-element").addClass("slds-input-has-icon").addClass("slds-input-has-icon_right").addChild(this.input).addChild(this.inputIconContainer);
                    this.input.addClass("slds-input").addClass("slds-combobox__input").setAttribute("role", "textbox").setAttribute("autocomplete", "off").setAttribute("aria-autocomplete", "none").setAttribute("readonly", "true").addEventListener(new BaseComboBox.BaseComboBox$0(this), "click");
                    this.inputIconContainer.addClass("slds-input__icon-group").addClass("slds-input__icon-group_right").addChild(this.inputIcon);
                    this.inputIcon.setIconName("utility:down").setSize(com.spoonconsulting.lightning.Size.EXTRA_EXTRA_SMALL).addClass("slds-input__icon").addClass("slds-input__icon_right");
                    this.inputIcon.getIcon().addClass("slds-icon-text-default");
                    this.dropdown.addEventListener(new BaseComboBox.BaseComboBox$1(this), "change");
                }
                setOptions(options) {
                    this.dropdown.setOptions(options);
                    return this;
                }
                toggleDropdown() {
                    this.setExpand(!this.isExpanded());
                }
                isExpanded() {
                    return this.combobox.getAttribute("aria-expanded") === "true";
                }
                setExpand(b) {
                    if (b) {
                        this.combobox.setAttribute("aria-expanded", "true").addClass("slds-is-open");
                        this.dropdown.addClass("slds-dropdown_length_with-icon-7");
                    }
                    else {
                        this.combobox.setAttribute("aria-expanded", "false").removeClass("slds-is-open");
                        this.dropdown.removeClass("slds-dropdown_length_with-icon-7");
                    }
                    return this;
                }
                /**
                 *
                 * @return {string}
                 */
                getValue() {
                    return this.input.getValue();
                }
                /**
                 *
                 * @param {string} val
                 */
                setValue(val) {
                    this.input.setValue(val);
                    this.dropdown.setValue(val);
                }
                /**
                 *
                 */
                validate() {
                    this.input.validate();
                }
                /**
                 *
                 * @return {string}
                 */
                getBinding() {
                    return this.getAttribute("binding");
                }
                /**
                 *
                 * @param {string} binding
                 * @return {*}
                 */
                setBinding(binding) {
                    this.setAttribute("binding", binding);
                    return this;
                }
                /**
                 *
                 * @param {boolean} b
                 * @return {*}
                 */
                setRequired(b) {
                    this.input.setRequired(b);
                    return this;
                }
                setDisabled(b) {
                    this.input.setDisabled(b);
                    return this;
                }
                isDisabled() {
                    return this.input.getAttribute("disabled") === "true";
                }
                setDropdownAlignment(alignment) {
                    if (alignment === BaseComboBox.DROPDOWN_ALIGNMENT_BOTTOM_LEFT) {
                        this.dropdown.addClass("slds-dropdown_bottom").addClass("slds-dropdown_bottom-left");
                    }
                    else {
                        this.dropdown.removeClass("slds-dropdown_bottom").removeClass("slds-dropdown_bottom-left");
                    }
                    return this;
                }
                getDropdownAlignment() {
                    return this.dropdown.hasClass("slds-dropdown_bottom") ? BaseComboBox.DROPDOWN_ALIGNMENT_BOTTOM_LEFT : BaseComboBox.DROPDOWN_ALIGNMENT_TOP_LEFT;
                }
                blur() {
                    const __in = this.input.getElement();
                    if (__in != null)
                        __in.blur();
                }
                checkValidity() {
                    const __in = this.input.getElement();
                    if (__in != null) {
                        return __in.checkValidity();
                    }
                    return null;
                }
                setCustomValidity(message, type, description) {
                    const __in = this.input.getElement();
                    if (__in != null)
                        __in.setCustomValidity(message);
                    return this;
                }
            }
            BaseComboBox.DROPDOWN_ALIGNMENT_BOTTOM_LEFT = "bottom-left";
            BaseComboBox.DROPDOWN_ALIGNMENT_TOP_LEFT = "top-left";
            lightning.BaseComboBox = BaseComboBox;
            BaseComboBox["__class"] = "com.spoonconsulting.lightning.BaseComboBox";
            BaseComboBox["__interfaces"] = ["framework.components.api.InputField", "framework.components.api.Renderable"];
            (function (BaseComboBox) {
                class BaseComboBox$0 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        this.__parent.toggleDropdown();
                    }
                }
                BaseComboBox.BaseComboBox$0 = BaseComboBox$0;
                BaseComboBox$0["__interfaces"] = ["framework.components.api.EventListener"];
                class BaseComboBox$1 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        const val = this.__parent.dropdown.getValue();
                        this.__parent.input.setValue(val);
                        this.__parent.setExpand(false);
                        this.__parent.fireListener("change", evt);
                    }
                }
                BaseComboBox.BaseComboBox$1 = BaseComboBox$1;
                BaseComboBox$1["__interfaces"] = ["framework.components.api.EventListener"];
            })(BaseComboBox = lightning.BaseComboBox || (lightning.BaseComboBox = {}));
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class BaseLightning extends JSContainer {
                constructor(name, tag) {
                    super(name, tag);
                }
                setTitle(title) {
                    this.setAttribute("title", title);
                }
                getTitle() {
                    return this.getAttribute("title");
                }
            }
            lightning.BaseLightning = BaseLightning;
            BaseLightning["__class"] = "com.spoonconsulting.lightning.BaseLightning";
            BaseLightning["__interfaces"] = ["framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class Boot {
                static main(args) {
                    const app = new JSContainer("app", "div");
                    app.addClass("slds-card");
                    app.setStyle("height", "100vh");
                    app.addChild(Boot.getVerticalMenu());
                    app.render();
                }
                /*private*/ static getExampleTab(example) {
                    const ts = new com.spoonconsulting.lightning.TabSet("ts");
                    const tab = new com.spoonconsulting.lightning.Tab("example");
                    tab.setLabel("Example");
                    const content = new com.spoonconsulting.lightning.TabPanel("content");
                    content.addChild(example);
                    const source = new com.spoonconsulting.lightning.Tab("source");
                    source.setLabel("Source");
                    const pnSource = new com.spoonconsulting.lightning.TabPanel("source");
                    pnSource.addChild(new JSContainer("ss", "h3").setHtml("Source comes here"));
                    ts.addTab(tab, content).addTab(source, pnSource);
                    return ts;
                }
                /*private*/ static getAccordionSample() {
                    const accordion = new com.spoonconsulting.lightning.Accordion("acc");
                    const section1 = new com.spoonconsulting.lightning.AccordionSection("section1");
                    const section2 = new com.spoonconsulting.lightning.AccordionSection("section2");
                    accordion.addSections(section1, section2);
                    section1.setTitle("Section 1");
                    section2.setTitle("Section 2");
                    section1.getContent().addChild(new JSContainer("h1").setHtml("Section 1 in accordion"));
                    section2.getContent().addChild(new JSContainer("h1").setHtml("Section 2 in accordion"));
                    accordion.setAllowMultipleSectionOpen(true);
                    accordion.setActiveSectionName("section2");
                    return accordion;
                }
                /*private*/ static getButtons() {
                    const layout = new com.spoonconsulting.lightning.Layout("l", "div");
                    layout.setMultipleRows(true);
                    const head = new com.spoonconsulting.lightning.LayoutItem("head", "div").setPadding$com_spoonconsulting_lightning_LayoutItem_Padding(com.spoonconsulting.lightning.LayoutItem.Padding.AROUND_MEDIUM);
                    head.setSize(12);
                    layout.addChild(head);
                    const box = new com.spoonconsulting.lightning.ComboBox("variants");
                    const variants = (new Array());
                    {
                        let array132 = /* Enum.values */ function () { let result = []; for (let val in com.spoonconsulting.lightning.Variant) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index131 = 0; index131 < array132.length; index131++) {
                            let __var = array132[index131];
                            {
                                const variant = new Object();
                                variant["value"] = com.spoonconsulting.lightning.Variant["_$wrappers"][__var].getValue();
                                variant["label"] = com.spoonconsulting.lightning.Variant["_$wrappers"][__var].getValue();
                                variants.push(variant);
                            }
                        }
                    }
                    box.setOptions(variants);
                    box.setLabel("Variants");
                    const cbsize = new com.spoonconsulting.lightning.ComboBox("cbsize");
                    cbsize.setLabel("Change Size:");
                    const sizes = (new Array());
                    {
                        let array134 = /* Enum.values */ function () { let result = []; for (let val in com.spoonconsulting.lightning.Size) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index133 = 0; index133 < array134.length; index133++) {
                            let size = array134[index133];
                            {
                                const opt = {};
                                opt["value"] = com.spoonconsulting.lightning.Size["_$wrappers"][size].getValue();
                                opt["label"] = com.spoonconsulting.lightning.Size["_$wrappers"][size].getValue();
                                sizes.push(opt);
                            }
                        }
                    }
                    cbsize.setOptions(sizes);
                    const itemsize = new com.spoonconsulting.lightning.LayoutItem("ss", "div").setSize(12).setPadding$com_spoonconsulting_lightning_LayoutItem_Padding(com.spoonconsulting.lightning.LayoutItem.Padding.AROUND_MEDIUM);
                    layout.addChild(itemsize);
                    head.addChild(box);
                    const button = new com.spoonconsulting.lightning.Button("btn").setLabel("Button");
                    const iconButton = new com.spoonconsulting.lightning.Button("btnIcon").setLabel("Button");
                    iconButton.setIconName("utility:check");
                    const iconButtonRight = new com.spoonconsulting.lightning.Button("iconBtnRight").setLabel("Button");
                    iconButtonRight.setIconName("utility:check");
                    iconButtonRight.setIconPosition(com.spoonconsulting.lightning.Button.ICON_POSITION_RIGHT);
                    const item = new com.spoonconsulting.lightning.LayoutItem("btns", "div").setPadding$com_spoonconsulting_lightning_LayoutItem_Padding(com.spoonconsulting.lightning.LayoutItem.Padding.AROUND_MEDIUM);
                    item.setSize(12);
                    layout.addChild(item);
                    const btns = new com.spoonconsulting.lightning.Layout("btns", "div");
                    const item1 = new com.spoonconsulting.lightning.LayoutItem("item1", "div").setPadding$com_spoonconsulting_lightning_LayoutItem_Padding(com.spoonconsulting.lightning.LayoutItem.Padding.AROUND_MEDIUM).setSize((12 / 6 | 0));
                    const item2 = new com.spoonconsulting.lightning.LayoutItem("item1", "div").setPadding$com_spoonconsulting_lightning_LayoutItem_Padding(com.spoonconsulting.lightning.LayoutItem.Padding.AROUND_MEDIUM).setSize((12 / 6 | 0));
                    const item3 = new com.spoonconsulting.lightning.LayoutItem("item1", "div").setPadding$com_spoonconsulting_lightning_LayoutItem_Padding(com.spoonconsulting.lightning.LayoutItem.Padding.AROUND_MEDIUM).setSize((12 / 6 | 0));
                    const item4 = new com.spoonconsulting.lightning.LayoutItem("item1", "div").setPadding$com_spoonconsulting_lightning_LayoutItem_Padding(com.spoonconsulting.lightning.LayoutItem.Padding.AROUND_MEDIUM).setSize((12 / 6 | 0));
                    const item5 = new com.spoonconsulting.lightning.LayoutItem("item1", "div").setPadding$com_spoonconsulting_lightning_LayoutItem_Padding(com.spoonconsulting.lightning.LayoutItem.Padding.AROUND_MEDIUM).setSize((12 / 6 | 0));
                    const item6 = new com.spoonconsulting.lightning.LayoutItem("item1", "div").setPadding$com_spoonconsulting_lightning_LayoutItem_Padding(com.spoonconsulting.lightning.LayoutItem.Padding.AROUND_MEDIUM).setSize((12 / 6 | 0));
                    const diablebtn = new com.spoonconsulting.lightning.Button("dis").setLabel("Click to disable");
                    diablebtn.setVariant$com_spoonconsulting_lightning_Variant(com.spoonconsulting.lightning.Variant.BRAND);
                    diablebtn.addEventListener(new Boot.Boot$0(diablebtn), "click");
                    const stf = new com.spoonconsulting.lightning.ButtonStateful("stf");
                    stf.setIconNameWhenHover("utility:download");
                    stf.setLabelWhenHover("Hover");
                    stf.setIconNameWhenOff("utility:delete");
                    stf.setLabelWhenOff("Not selected");
                    stf.setIconNameWhenOn("utility:down");
                    stf.setLabelWhenOn("Selected");
                    stf.setVariant$com_spoonconsulting_lightning_Variant(com.spoonconsulting.lightning.Variant.DESTRUCTIVE);
                    const btni = new com.spoonconsulting.lightning.ButtonIcon("btni", "utility:settings");
                    btni.setVariant$com_spoonconsulting_lightning_ButtonIcon_ButtonIconVariant(com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant.BORDER_FILLED);
                    btni.addEventListener(new Boot.Boot$1(btni), "click");
                    item1.addChild(button);
                    item2.addChild(iconButton);
                    item3.addChild(iconButtonRight);
                    item4.addChild(diablebtn);
                    item5.addChild(stf);
                    item6.addChild(btni);
                    item.addChild(btns.addChild(item1).addChild(item2).addChild(item3).addChild(item4).addChild(item5).addChild(item6));
                    box.addEventListener(new Boot.Boot$2(box, button, iconButton, iconButtonRight), "change");
                    cbsize.addEventListener(new Boot.Boot$3(cbsize, btni), "change");
                    itemsize.addChild(cbsize);
                    return layout;
                }
                /*private*/ static getSampleCOmbo() {
                    const card = new JSContainer("card", "div").addClass("slds-card").setStyle("height", "300px");
                    const box = new com.spoonconsulting.lightning.ComboBox("cb");
                    const options = (new Array());
                    for (let i = 0; i < 5; i++) {
                        {
                            const opt = {};
                            opt["value"] = i + "";
                            opt["label"] = "Label " + i;
                            options.push(opt);
                        }
                        ;
                    }
                    box.setOptions(options);
                    box.setLabel("This is a label");
                    box.setHelp("This is a help");
                    card.addChild(box);
                    return card;
                }
                /*private*/ static getPathSample() {
                    const app = new JSContainer("div");
                    const indicator = new com.spoonconsulting.lightning.ProgressIndicator("pi");
                    indicator.setType("base");
                    for (let i = 1; i <= 4; i++) {
                        {
                            indicator.addStep("Step " + i, i + "");
                        }
                        ;
                    }
                    indicator.setCurrentStep("3");
                    indicator.setHasError(true);
                    app.addChild(indicator);
                    const toggle = new com.spoonconsulting.lightning.Button("toggle").setLabel("Toggle");
                    toggle.addEventListener(new Boot.Boot$4(indicator), "click");
                    app.addChild(toggle);
                    return app;
                }
                /*private*/ static addVerticalTab(title, sample, verticalMenu) {
                    const tab = new com.spoonconsulting.lightning.Tab(title);
                    tab.setLabel(title);
                    const panel = new com.spoonconsulting.lightning.TabPanel("panel");
                    panel.setStyle("width", "100%");
                    panel.addChild(Boot.getExampleTab(sample));
                    verticalMenu.addTab(tab, panel);
                }
                static getVerticalMenu() {
                    const set = new com.spoonconsulting.lightning.TabSet("menu");
                    set.setVariant$com_spoonconsulting_lightning_TabSet_TabSetVariant(com.spoonconsulting.lightning.TabSet.TabSetVariant.VERTICAL).setStyle("height", "100vh");
                    Boot.addVerticalTab("Accordion", Boot.getAccordionSample(), set);
                    Boot.addVerticalTab("Paths", Boot.getPathSample(), set);
                    Boot.addVerticalTab("Combo box", Boot.getSampleCOmbo(), set);
                    Boot.addVerticalTab("Buttons", Boot.getButtons(), set);
                    return set;
                }
            }
            lightning.Boot = Boot;
            Boot["__class"] = "com.spoonconsulting.lightning.Boot";
            (function (Boot) {
                class Boot$0 {
                    constructor(diablebtn) {
                        this.diablebtn = diablebtn;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        this.diablebtn.setDisabled(!this.diablebtn.isDisabled());
                        this.diablebtn.setLabel("Disabled");
                    }
                }
                Boot.Boot$0 = Boot$0;
                Boot$0["__interfaces"] = ["framework.components.api.EventListener"];
                class Boot$1 {
                    constructor(btni) {
                        this.btni = btni;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        this.btni.setVariant$com_spoonconsulting_lightning_ButtonIcon_ButtonIconVariant(com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant.BRAND);
                    }
                }
                Boot.Boot$1 = Boot$1;
                Boot$1["__interfaces"] = ["framework.components.api.EventListener"];
                class Boot$2 {
                    constructor(box, button, iconButton, iconButtonRight) {
                        this.box = box;
                        this.button = button;
                        this.iconButton = iconButton;
                        this.iconButtonRight = iconButtonRight;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        const variant = this.box.getValue();
                        this.button.setVariant$java_lang_String(variant);
                        this.iconButton.setVariant$java_lang_String(variant);
                        this.iconButtonRight.setVariant$java_lang_String(variant);
                    }
                }
                Boot.Boot$2 = Boot$2;
                Boot$2["__interfaces"] = ["framework.components.api.EventListener"];
                class Boot$3 {
                    constructor(cbsize, btni) {
                        this.cbsize = cbsize;
                        this.btni = btni;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        const size = this.cbsize.getValue();
                        this.btni.setSize$java_lang_String(size);
                    }
                }
                Boot.Boot$3 = Boot$3;
                Boot$3["__interfaces"] = ["framework.components.api.EventListener"];
                class Boot$4 {
                    constructor(indicator) {
                        this.indicator = indicator;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        const type = this.indicator.getType();
                        if (type === "base") {
                            this.indicator.setType("path");
                        }
                        else {
                            this.indicator.setType("base");
                        }
                    }
                }
                Boot.Boot$4 = Boot$4;
                Boot$4["__interfaces"] = ["framework.components.api.EventListener"];
            })(Boot = lightning.Boot || (lightning.Boot = {}));
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class Breadcrumb extends JSContainer {
                constructor(name) {
                    super(name, "a");
                }
                setHref(href) {
                    this.setAttribute("href", href);
                    return this;
                }
                setLabel(label) {
                    this.setHtml(label);
                    return this;
                }
                getHref() {
                    return this.getAttribute("href");
                }
                getLabel() {
                    return this.getHtml();
                }
                focus() {
                    const a = this.getElement();
                    if (a != null)
                        a.focus();
                }
                blur() {
                    const elem = this.getElement();
                    if (elem != null)
                        elem.blur();
                }
            }
            lightning.Breadcrumb = Breadcrumb;
            Breadcrumb["__class"] = "com.spoonconsulting.lightning.Breadcrumb";
            Breadcrumb["__interfaces"] = ["framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class Breadcrumbs extends JSContainer {
                constructor(name) {
                    super(name, "ol");
                    this.addClass("slds-breadcrumb").addClass("slds-list_horizontal").addClass("slds-wrap");
                }
                addBreadcrumb(breadcrumb) {
                    const li = new JSContainer("li");
                    li.addClass("slds-breadcrumb__item");
                    this.addChild(li);
                    li.addChild(breadcrumb);
                    return this;
                }
                getBreadcrumbs() {
                    const result = (new Array());
                    {
                        let array136 = this.getChildren();
                        for (let index135 = 0; index135 < array136.length; index135++) {
                            let r = array136[index135];
                            {
                                const bc = r.getChildren()[0];
                                result.push(bc);
                            }
                        }
                    }
                    return result;
                }
                getBreadcrumb(name) {
                    {
                        let array138 = this.getChildren();
                        for (let index137 = 0; index137 < array138.length; index137++) {
                            let r = array138[index137];
                            {
                                const bc = r.getChildren()[0];
                                if (bc.getName() === name) {
                                    return bc;
                                }
                            }
                        }
                    }
                    return null;
                }
            }
            lightning.Breadcrumbs = Breadcrumbs;
            Breadcrumbs["__class"] = "com.spoonconsulting.lightning.Breadcrumbs";
            Breadcrumbs["__interfaces"] = ["framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class Card extends JSContainer {
                constructor(name, tag) {
                    super(name, tag);
                    this.header = new JSContainer("header", "div");
                    this.media = new JSContainer("media", "header");
                    this.mediaFigure = new JSContainer("media-figure", "div");
                    this.icon = new com.spoonconsulting.lightning.IconContainer("icon", "standard:account");
                    this.mediaBody = new JSContainer("media-body", "div");
                    this.mediaBodyTitle = new JSContainer("title", "h2");
                    this.title = new JSContainer("title", "span");
                    this.mediaAction = new JSContainer("actions", "div");
                    this.body = new JSContainer("body", "div");
                    this.footer = new JSContainer("footer", "div");
                    this.addClass("slds-card");
                    this.addChild(this.header.addChild(this.media.addChild(this.mediaFigure).addChild(this.mediaBody.addChild(this.mediaBodyTitle.addChild(this.title))).addChild(this.mediaAction))).addChild(this.body).addChild(this.footer);
                    this.header.addClass("slds-card__header");
                    this.media.addClass("slds-media").addClass("slds-media_center").addClass("slds-has-flexi-truncate");
                    this.mediaFigure.addClass("slds-media__figure");
                    this.icon.setSize(com.spoonconsulting.lightning.Size.SMALL);
                    this.mediaBody.addClass("slds-media__body");
                    this.mediaBodyTitle.addClass("slds-card__header-title");
                    this.title.addClass("slds-text-heading_small").addClass("slds-truncate");
                    this.mediaAction.addClass("slds-no-flex");
                    this.body.addClass("slds-card__body");
                    this.footer.addClass("slds-card__footer");
                }
                getSlot(name) {
                    if (name === "title") {
                        return this.mediaBodyTitle;
                    }
                    else if (name === "actions") {
                        return this.mediaAction;
                    }
                    else if (name === "footer") {
                        return this.footer;
                    }
                    else {
                        return this.body;
                    }
                }
                getBody() {
                    return this.body;
                }
                getHeader() {
                    return this.header;
                }
                getActions() {
                    return this.mediaAction;
                }
                getFooter() {
                    return this.footer;
                }
                setIconName(iconName) {
                    this.mediaFigure.clearChildren();
                    if (iconName != null) {
                        this.icon.setIconName(iconName);
                        this.mediaFigure.addChild(this.icon);
                    }
                    return this;
                }
                getIconName() {
                    if (this.mediaFigure.getChildren().indexOf(this.icon) >= 0) {
                        return this.icon.getIcon().getIconName();
                    }
                    else {
                        return null;
                    }
                }
                setTitle(title) {
                    this.title.setHtml(title);
                    return this;
                }
                getTitle() {
                    return this.title.getHtml();
                }
                setVariant$java_lang_String(variant) {
                    this.removeClass("slds-card_narrow");
                    if (variant === com.spoonconsulting.lightning.Card.CardVariant["_$wrappers"][Card.CardVariant.NARROW].value) {
                        this.addClass("slds-card_narrow");
                    }
                    return this;
                }
                setVariant(variant) {
                    if (((typeof variant === 'string') || variant === null)) {
                        return this.setVariant$java_lang_String(variant);
                    }
                    else if (((typeof variant === 'number') || variant === null)) {
                        return this.setVariant$com_spoonconsulting_lightning_Card_CardVariant(variant);
                    }
                    else
                        throw new Error('invalid overload');
                }
                setVariant$com_spoonconsulting_lightning_Card_CardVariant(variant) {
                    return this.setVariant$java_lang_String(variant != null ? com.spoonconsulting.lightning.Card.CardVariant["_$wrappers"][variant].value : null);
                }
                getVariant() {
                    if (this.hasClass("slds-card_narrow")) {
                        return com.spoonconsulting.lightning.Card.CardVariant["_$wrappers"][Card.CardVariant.NARROW].value;
                    }
                    else {
                        return com.spoonconsulting.lightning.Card.CardVariant["_$wrappers"][Card.CardVariant.BASE].value;
                    }
                }
            }
            lightning.Card = Card;
            Card["__class"] = "com.spoonconsulting.lightning.Card";
            Card["__interfaces"] = ["framework.components.api.Renderable"];
            (function (Card) {
                let CardVariant;
                (function (CardVariant) {
                    CardVariant[CardVariant["BASE"] = 0] = "BASE";
                    CardVariant[CardVariant["NARROW"] = 1] = "NARROW";
                })(CardVariant = Card.CardVariant || (Card.CardVariant = {}));
                /** @ignore */
                class CardVariant_$WRAPPER {
                    constructor(_$ordinal, _$name, value) {
                        this._$ordinal = _$ordinal;
                        this._$name = _$name;
                        if (this.value === undefined) {
                            this.value = null;
                        }
                        this.value = value;
                    }
                    getValue() {
                        return this.value;
                    }
                    name() { return this._$name; }
                    ordinal() { return this._$ordinal; }
                    compareTo(other) { return this._$ordinal - (isNaN(other) ? other._$ordinal : other); }
                }
                Card.CardVariant_$WRAPPER = CardVariant_$WRAPPER;
                CardVariant["__class"] = "com.spoonconsulting.lightning.Card.CardVariant";
                CardVariant["__interfaces"] = ["java.lang.constant.Constable", "java.lang.Comparable", "java.io.Serializable"];
                CardVariant["_$wrappers"] = { 0: new CardVariant_$WRAPPER(0, "BASE", "base"), 1: new CardVariant_$WRAPPER(1, "NARROW", "narrow") };
            })(Card = lightning.Card || (lightning.Card = {}));
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class Dropdown extends JSContainer {
                constructor(name) {
                    super(name, "div");
                    this.menu = new com.spoonconsulting.lightning.Menu("menu");
                    this.spinnerContainer = new JSContainer("div");
                    this.spinner = new com.spoonconsulting.lightning.Spinner("spinner");
                    this.isLoading = false;
                    this.addClass("slds-dropdown");
                    this.addClass("slds-dropdown_left");
                    this.addChild(this.menu);
                    this.spinnerContainer.addClass("slds-spinner_container");
                    this.spinnerContainer.addChild(this.spinner.setSize$com_spoonconsulting_lightning_Size(com.spoonconsulting.lightning.Size.SMALL));
                }
                getIsLoading() {
                    return this.isLoading;
                }
                setIsLoading(isLoading) {
                    this.isLoading = isLoading;
                    if (isLoading) {
                        this.clearChildren();
                        this.addChild(this.spinnerContainer);
                    }
                    else {
                        this.clearChildren();
                        this.addChild(this.menu);
                    }
                    this.setRendered(false);
                    return this;
                }
                addItem(item) {
                    this.menu.addMenuItem(item);
                    return this;
                }
                addMenuDivider() {
                    this.menu.addMenuDivider();
                    return this;
                }
                getSpinner() {
                    return this.spinner;
                }
            }
            lightning.Dropdown = Dropdown;
            Dropdown["__class"] = "com.spoonconsulting.lightning.Dropdown";
            Dropdown["__interfaces"] = ["framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class FormElement extends JSContainer {
                constructor(name, input) {
                    super(name, "div");
                    this.labelCtn = new JSContainer("label-ctn", "label");
                    this.required = new JSContainer("required", "abbr");
                    this.label = new JSContainer("label", "span");
                    this.controlCtn = new JSContainer("control-ctn", "div");
                    if (this.input === undefined) {
                        this.input = null;
                    }
                    if (this.value === undefined) {
                        this.value = null;
                    }
                    this.formElementIcon = new JSContainer("form-element-icon", "div");
                    this.fieldLevelHelp = new com.spoonconsulting.lightning.Help("fieldLevelHelp");
                    this.help = new JSContainer("help", "div");
                    this.variant = FormElement.FormElementVariant.STANDARD;
                    this.addClass("slds-form-element");
                    this.addChild(this.labelCtn);
                    this.formElementIcon.addClass("slds-form-element__icon").setStyle("display", "none");
                    this.formElementIcon.addChild(this.fieldLevelHelp);
                    this.addChild(this.formElementIcon);
                    this.labelCtn.addClass("slds-form-element__label");
                    this.required.addClass("slds-required").setAttribute("title", "required");
                    this.labelCtn.addChild(this.required);
                    this.labelCtn.addChild(this.label);
                    this.addChild(this.controlCtn);
                    this.controlCtn.addClass("slds-form-element__control");
                    this.setInput(input);
                    this.addChild(this.help);
                    this.help.addClass("slds-form-element__help");
                    this.help.setStyle("display", "none");
                    this.setRequired(false);
                }
                setRequired(b) {
                    this.required.setStyle("display", b ? null : "none");
                    return this;
                }
                setLabel(label) {
                    this.label.setHtml(label);
                    return this;
                }
                setFieldLevelHelp(help) {
                    if (help != null) {
                        this.formElementIcon.setStyle("display", null);
                        this.fieldLevelHelp.setContent(help);
                    }
                    else {
                        this.formElementIcon.setStyle("display", "none");
                    }
                    return this;
                }
                setInput(input) {
                    input.addClass("slds-input");
                    this.controlCtn.clearChildren();
                    this.controlCtn.setRendered(false);
                    this.controlCtn.addChild(input);
                    this.input = input;
                    if (this.value != null) {
                        this.setValue(this.value);
                    }
                    return this;
                }
                getRequired() {
                    return this.required;
                }
                getLabel() {
                    return this.label;
                }
                getInput() {
                    return this.input;
                }
                /**
                 *
                 * @return {*}
                 */
                getValue() {
                    return this.input.getValue();
                }
                /**
                 *
                 * @param {*} val
                 */
                setValue(val) {
                    this.value = val;
                    this.input.setValue(val);
                }
                /**
                 *
                 */
                validate() {
                    this.input.validate();
                }
                /**
                 *
                 * @return {string}
                 */
                getBinding() {
                    return this.getName();
                }
                /**
                 *
                 * @param {string} binding
                 * @return {*}
                 */
                setBinding(binding) {
                    this.setName(binding);
                    return this;
                }
                setDisabled(b) {
                    this.input.setAttribute("disabled", b ? "disabled" : null);
                    return this;
                }
                setError(error) {
                    this.addClass("slds-has-error");
                    this.help.setStyle("display", null).setHtml(error);
                    return this;
                }
                clearError() {
                    this.removeClass("slds-has-error");
                    return this;
                }
                setHelp(help) {
                    this.help.setStyle("display", null);
                    this.help.setHtml(help);
                    return this;
                }
                setShowHelp(b) {
                    this.help.setStyle("display", b ? null : "none");
                    return this;
                }
                setVariant$com_spoonconsulting_lightning_FormElement_FormElementVariant(variant) {
                    this.variant = variant;
                    this.removeClass("slds-form-element_horizontal");
                    this.removeClass("slds-form-element_stacked");
                    this.labelCtn.removeClass("slds-assistive-text");
                    if (variant === FormElement.FormElementVariant.LABEL_INLINE) {
                        this.addClass("slds-form-element_horizontal");
                    }
                    else if (variant === FormElement.FormElementVariant.LABEL_STACKED) {
                        this.addClass("slds-form-element_stacked");
                    }
                    else if (variant === FormElement.FormElementVariant.LABEL_HIDDEN) {
                        this.labelCtn.addClass("slds-assistive-text");
                    }
                    return this;
                }
                setVariant(variant) {
                    if (((typeof variant === 'number') || variant === null)) {
                        return this.setVariant$com_spoonconsulting_lightning_FormElement_FormElementVariant(variant);
                    }
                    else if (((typeof variant === 'string') || variant === null)) {
                        return this.setVariant$java_lang_String(variant);
                    }
                    else
                        throw new Error('invalid overload');
                }
                setVariant$java_lang_String(variant) {
                    if (variant != null) {
                        if (variant === com.spoonconsulting.lightning.FormElement.FormElementVariant["_$wrappers"][FormElement.FormElementVariant.LABEL_HIDDEN].value) {
                            this.setVariant$com_spoonconsulting_lightning_FormElement_FormElementVariant(FormElement.FormElementVariant.LABEL_HIDDEN);
                        }
                        else if (variant === com.spoonconsulting.lightning.FormElement.FormElementVariant["_$wrappers"][FormElement.FormElementVariant.LABEL_INLINE].value) {
                            this.setVariant$com_spoonconsulting_lightning_FormElement_FormElementVariant(FormElement.FormElementVariant.LABEL_INLINE);
                        }
                        else if (variant === com.spoonconsulting.lightning.FormElement.FormElementVariant["_$wrappers"][FormElement.FormElementVariant.LABEL_STACKED].value) {
                            this.setVariant$com_spoonconsulting_lightning_FormElement_FormElementVariant(FormElement.FormElementVariant.LABEL_STACKED);
                        }
                        else {
                            this.setVariant$com_spoonconsulting_lightning_FormElement_FormElementVariant(FormElement.FormElementVariant.STANDARD);
                        }
                    }
                    else {
                        this.setVariant$com_spoonconsulting_lightning_FormElement_FormElementVariant(FormElement.FormElementVariant.STANDARD);
                    }
                    return this;
                }
                getVariant() {
                    if (this.variant != null)
                        return com.spoonconsulting.lightning.FormElement.FormElementVariant["_$wrappers"][this.variant].value;
                    return com.spoonconsulting.lightning.FormElement.FormElementVariant["_$wrappers"][FormElement.FormElementVariant.STANDARD].value;
                }
            }
            lightning.FormElement = FormElement;
            FormElement["__class"] = "com.spoonconsulting.lightning.FormElement";
            FormElement["__interfaces"] = ["framework.components.api.InputField", "framework.components.api.Renderable"];
            (function (FormElement) {
                let FormElementVariant;
                (function (FormElementVariant) {
                    FormElementVariant[FormElementVariant["STANDARD"] = 0] = "STANDARD";
                    FormElementVariant[FormElementVariant["LABEL_HIDDEN"] = 1] = "LABEL_HIDDEN";
                    FormElementVariant[FormElementVariant["LABEL_INLINE"] = 2] = "LABEL_INLINE";
                    FormElementVariant[FormElementVariant["LABEL_STACKED"] = 3] = "LABEL_STACKED";
                })(FormElementVariant = FormElement.FormElementVariant || (FormElement.FormElementVariant = {}));
                /** @ignore */
                class FormElementVariant_$WRAPPER {
                    constructor(_$ordinal, _$name, value) {
                        this._$ordinal = _$ordinal;
                        this._$name = _$name;
                        if (this.value === undefined) {
                            this.value = null;
                        }
                        this.value = value;
                    }
                    getValue() {
                        return this.value;
                    }
                    name() { return this._$name; }
                    ordinal() { return this._$ordinal; }
                    compareTo(other) { return this._$ordinal - (isNaN(other) ? other._$ordinal : other); }
                }
                FormElement.FormElementVariant_$WRAPPER = FormElementVariant_$WRAPPER;
                FormElementVariant["__class"] = "com.spoonconsulting.lightning.FormElement.FormElementVariant";
                FormElementVariant["__interfaces"] = ["java.lang.constant.Constable", "java.lang.Comparable", "java.io.Serializable"];
                FormElementVariant["_$wrappers"] = { 0: new FormElementVariant_$WRAPPER(0, "STANDARD", "standard"), 1: new FormElementVariant_$WRAPPER(1, "LABEL_HIDDEN", "label-hidden"), 2: new FormElementVariant_$WRAPPER(2, "LABEL_INLINE", "label-inline"), 3: new FormElementVariant_$WRAPPER(3, "LABEL_STACKED", "label-stacked") };
            })(FormElement = lightning.FormElement || (lightning.FormElement = {}));
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class GlobalConfigs {
            }
            GlobalConfigs.BASE_ASSETS = "/webjars/salesforce-lightning-design-system/2.13.3";
            lightning.GlobalConfigs = GlobalConfigs;
            GlobalConfigs["__class"] = "com.spoonconsulting.lightning.GlobalConfigs";
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class Help extends JSContainer {
                constructor(name) {
                    super(name, "div");
                    this.icon = new com.spoonconsulting.lightning.ButtonIcon("icon", "utility:info");
                    this.addChild(this.icon);
                }
                setContent(content) {
                    this.setAttribute("title", content);
                    return this;
                }
            }
            lightning.Help = Help;
            Help["__class"] = "com.spoonconsulting.lightning.Help";
            Help["__interfaces"] = ["framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class Icon extends JSContainer {
                constructor(name, iconName) {
                    super(iconName, "svg");
                    if (this.iconName === undefined) {
                        this.iconName = null;
                    }
                    this.addClass("slds-icon");
                    this.setAttribute("focusable", "false");
                    this.setAttribute("aria-hidden", "true");
                    this.setIconName(iconName);
                }
                /*private*/ setIcon(group, name) {
                    let html = "<use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"$base-assets/icons/" + group + "-sprite/svg/symbols.svg#" + name + "\"></use>";
                    html = /* replace */ html.split("$base-assets").join(com.spoonconsulting.lightning.GlobalConfigs.BASE_ASSETS);
                    this.setHtml(html);
                    return this;
                }
                setIconName(iconName) {
                    this.iconName = iconName;
                    this.setIcon(iconName.split(":")[0], iconName.split(":")[1]);
                    return this;
                }
                getIconName() {
                    return this.iconName;
                }
                setSize$java_lang_String(size) {
                    {
                        let array140 = /* Enum.values */ function () { let result = []; for (let val in com.spoonconsulting.lightning.Size) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index139 = 0; index139 < array140.length; index139++) {
                            let s = array140[index139];
                            {
                                this.removeClass("slds-icon_" + com.spoonconsulting.lightning.Size["_$wrappers"][s].getValue());
                            }
                        }
                    }
                    if (size != null)
                        this.addClass("slds-icon_" + size);
                    return this;
                }
                setSize(size) {
                    if (((typeof size === 'string') || size === null)) {
                        return this.setSize$java_lang_String(size);
                    }
                    else if (((typeof size === 'number') || size === null)) {
                        return this.setSize$com_spoonconsulting_lightning_Size(size);
                    }
                    else
                        throw new Error('invalid overload');
                }
                setSize$com_spoonconsulting_lightning_Size(size) {
                    if (size != null)
                        return this.setSize$java_lang_String(com.spoonconsulting.lightning.Size["_$wrappers"][size].getValue());
                    else
                        return this.setSize$java_lang_String(null);
                }
            }
            lightning.Icon = Icon;
            Icon["__class"] = "com.spoonconsulting.lightning.Icon";
            Icon["__interfaces"] = ["framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class Layout extends JSContainer {
                constructor(name, tag) {
                    super(name, tag);
                    this.multipleRows = false;
                    this.horizontalAlign = null;
                    this.pullToBoundary = null;
                    this.verticalAlign = null;
                    this.addClass("slds-grid");
                }
                isMultipleRows() {
                    return this.multipleRows;
                }
                setMultipleRows(multipleRows) {
                    this.multipleRows = multipleRows;
                    return this.refresh();
                }
                getHorizontalAlign() {
                    return this.horizontalAlign;
                }
                setHorizontalAlign(horizontalAlign) {
                    this.horizontalAlign = horizontalAlign;
                    return this.refresh();
                }
                getPullToBoundary() {
                    return this.pullToBoundary;
                }
                setPullToBoundary(pullToBoundary) {
                    this.pullToBoundary = pullToBoundary;
                    return this.refresh();
                }
                getVerticalAlign() {
                    return this.verticalAlign;
                }
                setVerticalAlign(verticalAlign) {
                    this.verticalAlign = verticalAlign;
                    return this.refresh();
                }
                refresh() {
                    this.removeClass("slds-wrap");
                    this.removeClass("slds-grid_align-" + Layout.HORIZONTAL_ALIGN_SPACE);
                    this.removeClass("slds-grid_align-" + Layout.HORIZONTAL_ALIGN_CENTER);
                    this.removeClass("slds-grid_align-" + Layout.HORIZONTAL_ALIGN_END);
                    this.removeClass("slds-grid_align-" + Layout.HORIZONTAL_ALIGN_SPREAD);
                    this.removeClass("slds-grid_pull-padded-" + Layout.PULL_TO_BOUNDARY_LARGE);
                    this.removeClass("slds-grid_pull-padded-" + Layout.PULL_TO_BOUNDARY_MEDIUM);
                    this.removeClass("slds-grid_pull-padded-" + Layout.PULL_TO_BOUNDARY_SMALL);
                    this.removeClass("slds-grid_vertical-" + Layout.VERTICAL_ALIGN_CENTER);
                    this.removeClass("slds-grid_vertical-" + Layout.VERTICAL_ALIGN_END);
                    this.removeClass("slds-grid_vertical-" + Layout.VERTICAL_ALIGN_START);
                    this.removeClass("slds-grid_vertical-" + Layout.VERTICAL_ALIGN_STRETCH);
                    if (this.multipleRows) {
                        this.addClass("slds-wrap");
                    }
                    if (this.horizontalAlign != null) {
                        this.addClass("slds-grid_align-" + this.horizontalAlign);
                    }
                    if (this.pullToBoundary != null) {
                        this.addClass("slds-grid_pull-padded-" + this.pullToBoundary);
                    }
                    if (this.verticalAlign != null) {
                        this.addClass("slds-grid_vertical-" + this.verticalAlign);
                    }
                    return this;
                }
            }
            Layout.HORIZONTAL_ALIGN_CENTER = "center";
            Layout.HORIZONTAL_ALIGN_SPACE = "space";
            Layout.HORIZONTAL_ALIGN_SPREAD = "spread";
            Layout.HORIZONTAL_ALIGN_END = "end";
            Layout.VERTICAL_ALIGN_START = "start";
            Layout.VERTICAL_ALIGN_CENTER = "center";
            Layout.VERTICAL_ALIGN_END = "end";
            Layout.VERTICAL_ALIGN_STRETCH = "stretch";
            Layout.PULL_TO_BOUNDARY_SMALL = "small";
            Layout.PULL_TO_BOUNDARY_MEDIUM = "medium";
            Layout.PULL_TO_BOUNDARY_LARGE = "large";
            lightning.Layout = Layout;
            Layout["__class"] = "com.spoonconsulting.lightning.Layout";
            Layout["__interfaces"] = ["framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class LayoutItem extends JSContainer {
                constructor(name, tag) {
                    super(name, tag);
                    this.alignmentBumb = null;
                    this.flexibility = null;
                    this.largeDeviceSize = null;
                    this.mediumDeviceSize = null;
                    this.padding = null;
                    this.size = null;
                    this.smallDeviceSize = null;
                    this.addClass("slds-col");
                }
                getAlignmentBump() {
                    return this.alignmentBumb;
                }
                setAlignmentBump$com_spoonconsulting_lightning_LayoutItem_AlignmentBump(al) {
                    return this.setAlignmentBump$java_lang_String(al != null ? com.spoonconsulting.lightning.LayoutItem.AlignmentBump["_$wrappers"][al].value : null);
                }
                setAlignmentBump(al) {
                    if (((typeof al === 'number') || al === null)) {
                        return this.setAlignmentBump$com_spoonconsulting_lightning_LayoutItem_AlignmentBump(al);
                    }
                    else if (((typeof al === 'string') || al === null)) {
                        return this.setAlignmentBump$java_lang_String(al);
                    }
                    else
                        throw new Error('invalid overload');
                }
                setAlignmentBump$java_lang_String(alignmentBumb) {
                    this.alignmentBumb = alignmentBumb;
                    {
                        let array142 = /* Enum.values */ function () { let result = []; for (let val in com.spoonconsulting.lightning.LayoutItem.AlignmentBump) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index141 = 0; index141 < array142.length; index141++) {
                            let a = array142[index141];
                            {
                                this.removeClass("slds-col_bump-" + com.spoonconsulting.lightning.LayoutItem.AlignmentBump["_$wrappers"][a].value);
                            }
                        }
                    }
                    if (alignmentBumb != null)
                        this.addClass("slds-col_bump-" + alignmentBumb);
                    return this;
                }
                getFlexibility() {
                    return this.flexibility;
                }
                setFlexibility$com_spoonconsulting_lightning_LayoutItem_Flexibility(flexi) {
                    return this.setFlexibility$java_lang_String(flexi != null ? com.spoonconsulting.lightning.LayoutItem.Flexibility["_$wrappers"][flexi].value : null);
                }
                setFlexibility(flexi) {
                    if (((typeof flexi === 'number') || flexi === null)) {
                        return this.setFlexibility$com_spoonconsulting_lightning_LayoutItem_Flexibility(flexi);
                    }
                    else if (((typeof flexi === 'string') || flexi === null)) {
                        return this.setFlexibility$java_lang_String(flexi);
                    }
                    else
                        throw new Error('invalid overload');
                }
                setFlexibility$java_lang_String(flexibility) {
                    this.flexibility = flexibility;
                    {
                        let array144 = /* Enum.values */ function () { let result = []; for (let val in com.spoonconsulting.lightning.LayoutItem.Flexibility) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index143 = 0; index143 < array144.length; index143++) {
                            let f = array144[index143];
                            {
                                this.removeClass("slds-" + com.spoonconsulting.lightning.LayoutItem.Flexibility["_$wrappers"][f].value);
                            }
                        }
                    }
                    if (flexibility != null) {
                        const fxs = flexibility.split(",");
                        for (let index145 = 0; index145 < fxs.length; index145++) {
                            let fx = fxs[index145];
                            {
                                this.addClass("slds-" + fx);
                            }
                        }
                    }
                    return this;
                }
                getLargeDeviceSize() {
                    return this.largeDeviceSize;
                }
                setLargeDeviceSize(largeDeviceSize) {
                    this.largeDeviceSize = largeDeviceSize;
                    for (let i = 1; i <= 12; i++) {
                        {
                            this.removeClass("slds-large-size_" + i + "-of-12");
                        }
                        ;
                    }
                    if (largeDeviceSize != null)
                        this.addClass("slds-large-size_" + this.size + "-of-12");
                    return this;
                }
                getMediumDeviceSize() {
                    return this.mediumDeviceSize;
                }
                setMediumDeviceSize(mediumDeviceSize) {
                    this.mediumDeviceSize = mediumDeviceSize;
                    for (let i = 1; i <= 12; i++) {
                        {
                            this.removeClass("slds-medium-size_" + i + "-of-12");
                        }
                        ;
                    }
                    if (mediumDeviceSize != null)
                        this.addClass("slds-medium-size_" + this.size + "-of-12");
                    return this;
                }
                getPadding() {
                    return this.padding;
                }
                setPadding$com_spoonconsulting_lightning_LayoutItem_Padding(pading) {
                    return this.setPadding$java_lang_String(pading != null ? com.spoonconsulting.lightning.LayoutItem.Padding["_$wrappers"][pading].value : null);
                }
                setPadding(pading) {
                    if (((typeof pading === 'number') || pading === null)) {
                        return this.setPadding$com_spoonconsulting_lightning_LayoutItem_Padding(pading);
                    }
                    else if (((typeof pading === 'string') || pading === null)) {
                        return this.setPadding$java_lang_String(pading);
                    }
                    else
                        throw new Error('invalid overload');
                }
                setPadding$java_lang_String(padding) {
                    this.padding = padding;
                    {
                        let array147 = /* Enum.values */ function () { let result = []; for (let val in com.spoonconsulting.lightning.LayoutItem.Padding) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index146 = 0; index146 < array147.length; index146++) {
                            let p = array147[index146];
                            {
                                this.removeClass("slds-p-" + com.spoonconsulting.lightning.LayoutItem.Padding["_$wrappers"][p].value);
                            }
                        }
                    }
                    if (padding != null) {
                        this.addClass("slds-p-" + padding);
                    }
                    return this;
                }
                getSize() {
                    return this.size;
                }
                setSize(size) {
                    this.size = size;
                    for (let i = 1; i <= 12; i++) {
                        {
                            this.removeClass("slds-size_" + i + "-of-12");
                        }
                        ;
                    }
                    if (size != null)
                        this.addClass("slds-size_" + size + "-of-12");
                    return this;
                }
                getSmallDeviceSize() {
                    return this.smallDeviceSize;
                }
                setSmallDeviceSize(smallDeviceSize) {
                    this.smallDeviceSize = smallDeviceSize;
                    for (let i = 1; i <= 12; i++) {
                        {
                            this.removeClass("slds-small-size_" + i + "-of-12");
                        }
                        ;
                    }
                    if (smallDeviceSize != null)
                        this.addClass("slds-small-size_" + this.size + "-of-12");
                    return this;
                }
            }
            lightning.LayoutItem = LayoutItem;
            LayoutItem["__class"] = "com.spoonconsulting.lightning.LayoutItem";
            LayoutItem["__interfaces"] = ["framework.components.api.Renderable"];
            (function (LayoutItem) {
                let AlignmentBump;
                (function (AlignmentBump) {
                    AlignmentBump[AlignmentBump["TOP"] = 0] = "TOP";
                    AlignmentBump[AlignmentBump["LEFT"] = 1] = "LEFT";
                    AlignmentBump[AlignmentBump["RIGHT"] = 2] = "RIGHT";
                    AlignmentBump[AlignmentBump["BOTTOM"] = 3] = "BOTTOM";
                })(AlignmentBump = LayoutItem.AlignmentBump || (LayoutItem.AlignmentBump = {}));
                /** @ignore */
                class AlignmentBump_$WRAPPER {
                    constructor(_$ordinal, _$name, value) {
                        this._$ordinal = _$ordinal;
                        this._$name = _$name;
                        if (this.value === undefined) {
                            this.value = null;
                        }
                        this.value = value;
                    }
                    getValue() {
                        return this.value;
                    }
                    name() { return this._$name; }
                    ordinal() { return this._$ordinal; }
                    compareTo(other) { return this._$ordinal - (isNaN(other) ? other._$ordinal : other); }
                }
                LayoutItem.AlignmentBump_$WRAPPER = AlignmentBump_$WRAPPER;
                AlignmentBump["__class"] = "com.spoonconsulting.lightning.LayoutItem.AlignmentBump";
                AlignmentBump["__interfaces"] = ["java.lang.constant.Constable", "java.lang.Comparable", "java.io.Serializable"];
                AlignmentBump["_$wrappers"] = { 0: new AlignmentBump_$WRAPPER(0, "TOP", "top"), 1: new AlignmentBump_$WRAPPER(1, "LEFT", "left"), 2: new AlignmentBump_$WRAPPER(2, "RIGHT", "right"), 3: new AlignmentBump_$WRAPPER(3, "BOTTOM", "bottom") };
                let Flexibility;
                (function (Flexibility) {
                    Flexibility[Flexibility["AUTO"] = 0] = "AUTO";
                    Flexibility[Flexibility["SHRINK"] = 1] = "SHRINK";
                    Flexibility[Flexibility["NO_SHRINK"] = 2] = "NO_SHRINK";
                    Flexibility[Flexibility["GROW"] = 3] = "GROW";
                    Flexibility[Flexibility["NO_GROW"] = 4] = "NO_GROW";
                    Flexibility[Flexibility["NO_FLEX"] = 5] = "NO_FLEX";
                })(Flexibility = LayoutItem.Flexibility || (LayoutItem.Flexibility = {}));
                /** @ignore */
                class Flexibility_$WRAPPER {
                    constructor(_$ordinal, _$name, val) {
                        this._$ordinal = _$ordinal;
                        this._$name = _$name;
                        if (this.value === undefined) {
                            this.value = null;
                        }
                        this.value = val;
                    }
                    getValue() {
                        return this.value;
                    }
                    name() { return this._$name; }
                    ordinal() { return this._$ordinal; }
                    compareTo(other) { return this._$ordinal - (isNaN(other) ? other._$ordinal : other); }
                }
                LayoutItem.Flexibility_$WRAPPER = Flexibility_$WRAPPER;
                Flexibility["__class"] = "com.spoonconsulting.lightning.LayoutItem.Flexibility";
                Flexibility["__interfaces"] = ["java.lang.constant.Constable", "java.lang.Comparable", "java.io.Serializable"];
                Flexibility["_$wrappers"] = { 0: new Flexibility_$WRAPPER(0, "AUTO", "auto"), 1: new Flexibility_$WRAPPER(1, "SHRINK", "shrink"), 2: new Flexibility_$WRAPPER(2, "NO_SHRINK", "no-shrink"), 3: new Flexibility_$WRAPPER(3, "GROW", "grow"), 4: new Flexibility_$WRAPPER(4, "NO_GROW", "no-grow"), 5: new Flexibility_$WRAPPER(5, "NO_FLEX", "no-flex") };
                let Padding;
                (function (Padding) {
                    Padding[Padding["HORIZONTAL_SMALL"] = 0] = "HORIZONTAL_SMALL";
                    Padding[Padding["HORIZONTAL_MEDIUM"] = 1] = "HORIZONTAL_MEDIUM";
                    Padding[Padding["HORIZONTAL_LARGE"] = 2] = "HORIZONTAL_LARGE";
                    Padding[Padding["AROUND_SMALL"] = 3] = "AROUND_SMALL";
                    Padding[Padding["AROUND_MEDIUM"] = 4] = "AROUND_MEDIUM";
                    Padding[Padding["AROUND_LARGE"] = 5] = "AROUND_LARGE";
                })(Padding = LayoutItem.Padding || (LayoutItem.Padding = {}));
                /** @ignore */
                class Padding_$WRAPPER {
                    constructor(_$ordinal, _$name, val) {
                        this._$ordinal = _$ordinal;
                        this._$name = _$name;
                        if (this.value === undefined) {
                            this.value = null;
                        }
                        this.value = val;
                    }
                    getValue() {
                        return this.value;
                    }
                    name() { return this._$name; }
                    ordinal() { return this._$ordinal; }
                    compareTo(other) { return this._$ordinal - (isNaN(other) ? other._$ordinal : other); }
                }
                LayoutItem.Padding_$WRAPPER = Padding_$WRAPPER;
                Padding["__class"] = "com.spoonconsulting.lightning.LayoutItem.Padding";
                Padding["__interfaces"] = ["java.lang.constant.Constable", "java.lang.Comparable", "java.io.Serializable"];
                Padding["_$wrappers"] = { 0: new Padding_$WRAPPER(0, "HORIZONTAL_SMALL", "horizontal_small"), 1: new Padding_$WRAPPER(1, "HORIZONTAL_MEDIUM", "horizontal_medium"), 2: new Padding_$WRAPPER(2, "HORIZONTAL_LARGE", "horizontal_large"), 3: new Padding_$WRAPPER(3, "AROUND_SMALL", "around_small"), 4: new Padding_$WRAPPER(4, "AROUND_MEDIUM", "around_medium"), 5: new Padding_$WRAPPER(5, "AROUND_LARGE", "around_large") };
            })(LayoutItem = lightning.LayoutItem || (lightning.LayoutItem = {}));
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class ListBox extends JSContainer {
                constructor(name) {
                    super(name, "div");
                    this.setAttribute("data-dropdown-element", "true").setAttribute("role", "listbox").addClass("slds-listbox").addClass("slds-listbox_vertical").addClass("slds-dropdown").addClass("slds-dropdown_fluid").addClass("slds-dropdown_left");
                }
                addOption$java_lang_String$java_lang_String(value, label) {
                    this.addChild(new ListBox.ListBoxOption(this, value, label));
                    return this;
                }
                addOption(value, label) {
                    if (((typeof value === 'string') || value === null) && ((typeof label === 'string') || label === null)) {
                        return this.addOption$java_lang_String$java_lang_String(value, label);
                    }
                    else if (((value != null && value instanceof Object) || value === null) && label === undefined) {
                        return this.addOption$jsweet_lang_Object(value);
                    }
                    else
                        throw new Error('invalid overload');
                }
                addOption$jsweet_lang_Object(obj) {
                    const label = obj["label"];
                    const value = obj["value"];
                    return this.addOption$java_lang_String$java_lang_String(value, label);
                }
                setOptions(options) {
                    this.clearChildren();
                    for (let index148 = 0; index148 < options.length; index148++) {
                        let option = options[index148];
                        {
                            this.addOption$jsweet_lang_Object(option);
                        }
                    }
                    return this;
                }
                setValue(value) {
                    {
                        let array150 = this.getChildren();
                        for (let index149 = 0; index149 < array150.length; index149++) {
                            let r = array150[index149];
                            {
                                const opt = r;
                                if (opt.getValue() === value) {
                                    opt.setChecked(true);
                                }
                                else {
                                    opt.setChecked(false);
                                }
                            }
                        }
                    }
                    return this;
                }
                getValue() {
                    {
                        let array152 = this.getChildren();
                        for (let index151 = 0; index151 < array152.length; index151++) {
                            let r = array152[index151];
                            {
                                const opt = r;
                                if (opt.isChecked()) {
                                    return opt.getValue();
                                }
                            }
                        }
                    }
                    return null;
                }
            }
            lightning.ListBox = ListBox;
            ListBox["__class"] = "com.spoonconsulting.lightning.ListBox";
            ListBox["__interfaces"] = ["framework.components.api.Renderable"];
            (function (ListBox) {
                class ListBoxOption extends JSContainer {
                    constructor(__parent, value, label) {
                        super(value, "div");
                        this.__parent = __parent;
                        this.figure = new JSContainer("figure", "span");
                        this.body = new JSContainer("body", "span");
                        this.icon = new com.spoonconsulting.lightning.IconContainer("icon", "div");
                        this.label = new JSContainer("label", "span");
                        this.setAttribute("role", "option").setAttribute("aria-checked", "false").setAttribute("aria-selected", "false").addClass("slds-media").addClass("slds-listbox__option").addClass("slds-media_center").addClass("slds-media_small").addClass("slds-listbox__option_plain");
                        this.addChild(this.figure).addChild(this.body);
                        this.figure.addClass("slds-media__figure").addClass("slds-listbox__option-icon");
                        this.body.addClass("slds-media__body");
                        this.body.addChild(this.label);
                        this.label.addClass("slds-truncate");
                        this.icon.setIconName("utility:check");
                        this.icon.getIcon().setSize$com_spoonconsulting_lightning_Size(com.spoonconsulting.lightning.Size.EXTRA_SMALL);
                        this.icon.getIcon().addClass("slds-icon-text-default");
                        this.setLabel(label);
                        this.setValue(value);
                        this.addEventListener(this, "click");
                    }
                    setValue(value) {
                        this.setAttribute("data-value", value);
                        return this;
                    }
                    getValue() {
                        return this.getAttribute("data-value");
                    }
                    setLabel(label) {
                        this.label.setHtml(label);
                        this.label.setAttribute("title", label);
                        return this;
                    }
                    getLabel() {
                        return this.label.getHtml();
                    }
                    setChecked(b) {
                        if (b) {
                            this.setAttribute("aria-checked", "true");
                            this.figure.clearChildren();
                            this.figure.addChild(this.icon);
                        }
                        else {
                            this.setAttribute("aria-checked", "false");
                            this.figure.clearChildren();
                        }
                        this.setRendered(false);
                        return this;
                    }
                    isChecked() {
                        return this.getAttribute("aria-checked") === "true";
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        if (!this.isChecked()) {
                            const lb = this.getParent();
                            const oldValue = lb.getValue();
                            lb.setValue(this.getValue());
                            const onchange = new CustomEvent("change");
                            onchange["source"] = this;
                            onchange["value"] = this.getValue();
                            onchange["oldValue"] = oldValue;
                            lb.fireListener("change", evt);
                        }
                    }
                }
                ListBox.ListBoxOption = ListBoxOption;
                ListBoxOption["__class"] = "com.spoonconsulting.lightning.ListBox.ListBoxOption";
                ListBoxOption["__interfaces"] = ["framework.components.api.EventListener", "framework.components.api.Renderable"];
            })(ListBox = lightning.ListBox || (lightning.ListBox = {}));
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class MenuDivider extends JSContainer {
                constructor() {
                    super("divider", "li");
                    this.addClass("slds-has-divider_top-space");
                    this.setAttribute("role", "separator");
                }
            }
            lightning.MenuDivider = MenuDivider;
            MenuDivider["__class"] = "com.spoonconsulting.lightning.MenuDivider";
            MenuDivider["__interfaces"] = ["framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class MenuSubHeader extends JSContainer {
                constructor(name) {
                    super(name, "li");
                    this.span = new JSContainer("span");
                    this.addClass("slds-dropdown__header");
                    this.addChild(this.span.addClass("slds-truncate"));
                }
                setLabel(label) {
                    this.span.setHtml(label);
                    return this;
                }
                getLabel() {
                    return this.span.getHtml();
                }
            }
            lightning.MenuSubHeader = MenuSubHeader;
            MenuSubHeader["__class"] = "com.spoonconsulting.lightning.MenuSubHeader";
            MenuSubHeader["__interfaces"] = ["framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class PathItem extends JSContainer {
                constructor(name) {
                    super(name, "li");
                    this.link = new JSContainer("link", "a");
                    this.stage = new JSContainer("stage", "span");
                    this.icon = new com.spoonconsulting.lightning.Icon("icon", "utility:check");
                    this.title = new JSContainer("title", "span");
                    this.addClass("slds-path__item");
                    this.setAttribute("role", "presentation");
                    this.addChild(this.link);
                    this.link.addChild(this.stage);
                    this.stage.addChild(this.icon);
                    this.link.addChild(this.title);
                    this.link.addClass("slds-path__link").setAttribute("href", "javascript:void(0);").setAttribute("role", "option").setAttribute("tabindex", "-1");
                    this.stage.addClass("slds-path__stage");
                    this.icon.setSize$com_spoonconsulting_lightning_Size(com.spoonconsulting.lightning.Size.EXTRA_SMALL);
                    this.title.addClass("slds-path__title");
                }
                setLabel(label) {
                    this.setAttribute("title", label);
                    this.title.setHtml(label);
                    return this;
                }
                getLabel() {
                    return this.getAttribute("title");
                }
                setActive(b) {
                    this.removeClass("slds-has-error");
                    this.removeClass("slds-is-complete");
                    this.removeClass("slds-is-active");
                    if (b) {
                        this.setAttribute("aria-selected", "true");
                        this.setAttribute("tabindex", "0");
                        this.addClass("slds-is-active");
                    }
                    else {
                        this.setAttribute("tabindex", "-1");
                        this.setAttribute("aria-selected", "false");
                        this.removeClass("slds-is-active");
                    }
                    return this;
                }
                setCurrent(b) {
                    if (b) {
                        this.addClass("slds-is-current");
                    }
                    else {
                        this.removeClass("slds-is-current");
                    }
                    return this;
                }
                setComplete(b) {
                    this.removeClass("slds-has-error");
                    this.removeClass("slds-is-complete");
                    this.removeClass("slds-is-active");
                    if (b) {
                        this.setAttribute("tabindex", "-1");
                        this.setAttribute("aria-selected", "false");
                        this.addClass("slds-is-complete");
                    }
                    else {
                        this.removeClass("slds-is-complete");
                    }
                    return this;
                }
                setHasError(b) {
                    this.removeClass("slds-has-error");
                    if (b) {
                        this.addClass("slds-has-error");
                    }
                    return this;
                }
                getHasError() {
                    return this.hasClass("slds-has-error");
                }
                isComplete() {
                    return this.hasClass("slds-is-complete");
                }
                isCurrent() {
                    return this.hasClass("slds-is-current");
                }
                isActive() {
                    return this.hasClass("slds-is-active");
                }
                setValue(value) {
                    this.setAttribute("value", value);
                    return this;
                }
                getValue() {
                    return this.getAttribute("value");
                }
            }
            lightning.PathItem = PathItem;
            PathItem["__class"] = "com.spoonconsulting.lightning.PathItem";
            PathItem["__interfaces"] = ["com.spoonconsulting.lightning.IStep", "framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class Pill extends JSContainer {
                constructor(name) {
                    super(name, "div");
                    this.pillIconContainer = new JSContainer("pill-icon-container", "div");
                    this.pillAction = new JSContainer("pill-action", "a");
                    this.pillLabel = new JSContainer("label", "span");
                    this.closeButton = new com.spoonconsulting.lightning.ButtonIcon("closeButton", "utility:close");
                    this.addClass("slds-pill");
                    this.addClass("slds-pill_link");
                    this.pillIconContainer.addClass("slds-pill__icon_container");
                    this.addChild(this.pillAction);
                    this.pillAction.setAttribute("href", "javascript:void(0);");
                    this.pillAction.addClass("slds-pill__action");
                    this.pillLabel.addClass("slds-pill__label");
                    this.pillAction.addChild(this.pillLabel);
                    this.addChild(this.closeButton);
                    this.setVariant(Pill.VARIANT_PLAIN_LINK);
                }
                addAvatar(avatar) {
                    this.clearChildren();
                    this.pillIconContainer.clearChildren();
                    this.pillIconContainer.addChild(avatar);
                    avatar.setSize(com.spoonconsulting.lightning.Size.MEDIUM);
                    this.addChild(this.pillIconContainer).addChild(this.pillAction).addChild(this.closeButton);
                    this.setRendered(false);
                    return this;
                }
                addIcon(ctn) {
                    this.clearChildren();
                    this.pillIconContainer.clearChildren();
                    this.pillIconContainer.addChild(ctn);
                    this.addChild(this.pillIconContainer).addChild(this.pillAction).addChild(this.closeButton);
                    this.setRendered(false);
                    return this;
                }
                setAriaSelected(s) {
                    this.setAttribute("aria-selected", s);
                    return this;
                }
                getAriaSelected() {
                    return this.getAttribute("aria-selected");
                }
                setHasError(b) {
                    if (b) {
                        this.addClass("slds-has-error");
                    }
                    else {
                        this.removeClass("slds-has-error");
                    }
                    return this;
                }
                setHref(href) {
                    this.setVariant("plainLink");
                    this.pillAction.setAttribute("href", href);
                    return this;
                }
                getHref() {
                    return this.pillAction.getAttribute("href");
                }
                getHasError() {
                    return this.hasClass("slds-has-error");
                }
                setLabel(label) {
                    this.pillLabel.setHtml(label);
                    return this;
                }
                getLabel() {
                    return this.pillLabel.getHtml();
                }
                setRole(role) {
                    this.setAttribute("role", role);
                    return this;
                }
                getRole() {
                    return this.getAttribute("role");
                }
                setTabIndex(index) {
                    this.setAttribute("tabindex", index + "");
                    return this;
                }
                getTabIndex() {
                    const sindex = this.getAttribute("tabindex");
                    if (sindex != null) {
                        return /* parseInt */ parseInt(sindex);
                    }
                    else {
                        return -1;
                    }
                }
                setVariant(variant) {
                    this.setAttribute("variant", variant);
                    if (variant === "plainLink") {
                        this.addClass("slds-pill_link");
                        this.pillAction.setTag("a");
                        this.pillAction.addClass("slds-pill__action");
                    }
                    else {
                        this.removeClass("slds-pill_link");
                        this.pillAction.setTag("div");
                        this.pillAction.setAttribute("class", null);
                    }
                    return this;
                }
                getVariant() {
                    return this.getAttribute("variant");
                }
            }
            Pill.VARIANT_PLAIN_LINK = "plainLink";
            Pill.VARIANT_LINK = "link";
            Pill.VARIANT_PLAIN = "plain";
            lightning.Pill = Pill;
            Pill["__class"] = "com.spoonconsulting.lightning.Pill";
            Pill["__interfaces"] = ["framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class Popover {
            }
            lightning.Popover = Popover;
            Popover["__class"] = "com.spoonconsulting.lightning.Popover";
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class ProgressBar extends JSContainer {
                constructor(name) {
                    super(name, "div");
                    this.value = new JSContainer("value", "span");
                    this.assistiveText = new JSContainer("assistiveText", "span");
                    this.setAttribute("aria-valuemin", "0");
                    this.setAttribute("aria-valuemax", "100");
                    this.setAttribute("aria-valuenow", "50");
                    this.setAttribute("aria-busy", "true");
                    this.setAttribute("role", "progressbar");
                    this.addClass("slds-progress-bar");
                    this.addChild(this.value.addClass("slds-progress-bar__value"));
                    this.value.addChild(this.assistiveText);
                }
                setSize$com_spoonconsulting_lightning_Size(size) {
                    return this.setSize$java_lang_String(size != null ? com.spoonconsulting.lightning.Size["_$wrappers"][size].getValue() : null);
                }
                setSize(size) {
                    if (((typeof size === 'number') || size === null)) {
                        return this.setSize$com_spoonconsulting_lightning_Size(size);
                    }
                    else if (((typeof size === 'string') || size === null)) {
                        return this.setSize$java_lang_String(size);
                    }
                    else
                        throw new Error('invalid overload');
                }
                setSize$java_lang_String(size) {
                    {
                        let array154 = /* Enum.values */ function () { let result = []; for (let val in com.spoonconsulting.lightning.Size) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index153 = 0; index153 < array154.length; index153++) {
                            let s = array154[index153];
                            {
                                this.removeClass("slds-progress-bar_" + com.spoonconsulting.lightning.Size["_$wrappers"][s].getValue());
                            }
                        }
                    }
                    if (size != null) {
                        this.addClass("slds-progress-bar_" + size);
                    }
                    return this;
                }
                setValue(percent) {
                    this.value.setStyle("width", percent + "%");
                    this.setAttribute("aria-valuenow", percent + "");
                    this.assistiveText.setHtml("Progress:" + percent + "%");
                    return this;
                }
                getValue() {
                    if (this.getAttribute("aria-valuenow") != null)
                        return /* parseInt */ parseInt(this.getAttribute("aria-valuenow"));
                    return 0;
                }
                setVariant(variant) {
                    this.setAttribute("variant", variant);
                    this.removeClass("slds-progress-bar_circular");
                    if (variant === "circuler")
                        this.addClass("slds-progress-bar_" + variant);
                    return this;
                }
                getVariant() {
                    return this.getAttribute("variant");
                }
            }
            lightning.ProgressBar = ProgressBar;
            ProgressBar["__class"] = "com.spoonconsulting.lightning.ProgressBar";
            ProgressBar["__interfaces"] = ["framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class ProgressIndicator extends JSContainer {
                constructor(name) {
                    super(name, "div");
                    this.progress = new com.spoonconsulting.lightning.Progress("base");
                    this.path = new com.spoonconsulting.lightning.Path("path");
                    this.usedType = this.progress;
                    this.addChild(this.progress);
                }
                /**
                 *
                 * @param {string} value
                 * @return {*}
                 */
                setCurrentStep(value) {
                    this.progress.setCurrentStep(value);
                    this.path.setCurrentStep(value);
                    return this;
                }
                /**
                 *
                 * @return {*}
                 */
                getCurrentStep() {
                    return this.usedType.getCurrentStep();
                }
                /**
                 *
                 * @param {boolean} b
                 * @return {*}
                 */
                setHasError(b) {
                    this.progress.setHasError(b);
                    this.path.setHasError(b);
                    return this;
                }
                /**
                 *
                 * @return {boolean}
                 */
                getHasError() {
                    return this.usedType.getHasError();
                }
                /**
                 *
                 * @param {string} variant
                 * @return {*}
                 */
                setVariant(variant) {
                    this.path.setVariant(variant);
                    this.progress.setVariant(variant);
                    return this;
                }
                /**
                 *
                 * @return {string}
                 */
                getVariant() {
                    return this.usedType.getVariant();
                }
                /**
                 *
                 * @return {*[]}
                 */
                getSteps() {
                    return this.usedType.getSteps();
                }
                /**
                 *
                 * @param {string} value
                 * @return {*}
                 */
                getStep(value) {
                    return this.usedType.getStep(value);
                }
                /**
                 *
                 * @return {*}
                 */
                clearSteps() {
                    this.progress.clearChildren();
                    this.path.clearChildren();
                    return this;
                }
                /**
                 *
                 * @param {*} step
                 * @return {*}
                 */
                removeStep(step) {
                    this.usedType.removeStep(step);
                    return this;
                }
                setType(type) {
                    if (type !== this.getAttribute("type")) {
                        this.setAttribute("type", type);
                        this.clearChildren();
                        if (type === "base") {
                            this.addChild(this.progress);
                            this.usedType = this.progress;
                        }
                        else {
                            this.addChild(this.path);
                            this.usedType = this.path;
                        }
                        this.setRendered(false);
                    }
                    return this;
                }
                getType() {
                    return this.getAttribute("type");
                }
                /**
                 *
                 * @param {string} value
                 * @return {*}
                 */
                setValue(value) {
                    this.path.setValue(value);
                    this.progress.setValue(value);
                    return this;
                }
                /**
                 *
                 * @return {string}
                 */
                getValue() {
                    return this.usedType.getValue();
                }
                /**
                 *
                 * @param {string} label
                 * @param {string} value
                 * @return {*}
                 */
                addStep(label, value) {
                    this.path.addStep(label, value);
                    this.progress.addStep$java_lang_String$java_lang_String(label, value);
                    return this;
                }
            }
            lightning.ProgressIndicator = ProgressIndicator;
            ProgressIndicator["__class"] = "com.spoonconsulting.lightning.ProgressIndicator";
            ProgressIndicator["__interfaces"] = ["framework.components.api.Renderable", "com.spoonconsulting.lightning.IProgress"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class ProgressStep extends JSContainer {
                constructor(name) {
                    super(name, "li");
                    this.incomplete = new com.spoonconsulting.lightning.Button("incomplete");
                    this.complete = new com.spoonconsulting.lightning.ButtonIcon("complete", "utility:success");
                    this.addClass("slds-progress__item");
                    this.incomplete.addClass("slds-progress__marker");
                    this.incomplete.getUILabel().addClass("slds-assistive-text");
                    this.complete.addClass("slds-progress__marker").addClass("slds-progress__marker_icon");
                    this.addChild(this.incomplete);
                }
                /**
                 *
                 * @param {string} label
                 * @return {*}
                 */
                setLabel(label) {
                    this.setAttribute("title", label);
                    this.incomplete.getUILabel().setHtml(label);
                    this.complete.setLabel(label);
                    return this;
                }
                /**
                 *
                 * @return {string}
                 */
                getLabel() {
                    return this.getAttribute("title");
                }
                /**
                 *
                 * @param {boolean} b
                 * @return {*}
                 */
                setActive(b) {
                    this.removeClass("slds-has-error");
                    this.removeClass("slds-is-completed");
                    this.removeClass("slds-is-active");
                    this.clearChildren();
                    this.addChild(this.incomplete);
                    if (b) {
                        this.addClass("slds-is-active");
                    }
                    else {
                        this.removeClass("slds-is-active");
                    }
                    this.setRendered(false);
                    return this;
                }
                /**
                 *
                 * @param {boolean} b
                 * @return {*}
                 */
                setComplete(b) {
                    this.removeClass("slds-has-error");
                    this.removeClass("slds-is-completed");
                    this.removeClass("slds-is-active");
                    if (b) {
                        this.clearChildren();
                        this.addClass("slds-is-completed");
                        this.addChild(this.complete);
                        this.setRendered(false);
                    }
                    else {
                        this.removeClass("slds-is-completed");
                        this.setActive(false);
                    }
                    return this;
                }
                /**
                 *
                 * @param {boolean} b
                 * @return {*}
                 */
                setHasError(b) {
                    this.removeClass("slds-has-error");
                    if (b) {
                        this.setComplete(true);
                        this.complete.setIconName("utility:error");
                        this.addClass("slds-has-error");
                    }
                    return this;
                }
                /**
                 *
                 * @return {boolean}
                 */
                getHasError() {
                    return this.hasClass("slds-has-error");
                }
                /**
                 *
                 * @return {boolean}
                 */
                isComplete() {
                    return this.hasClass("slds-is-completed");
                }
                /**
                 *
                 * @return {boolean}
                 */
                isActive() {
                    return this.hasClass("slds-is-active");
                }
                /**
                 *
                 * @param {string} value
                 * @return {*}
                 */
                setValue(value) {
                    this.setAttribute("value", value);
                    return this;
                }
                /**
                 *
                 * @return {string}
                 */
                getValue() {
                    return this.getAttribute("value");
                }
                /**
                 *
                 * @param {boolean} b
                 * @return {*}
                 */
                setCurrent(b) {
                    this.addClass("slds-is-current");
                    return this;
                }
                /**
                 *
                 * @return {boolean}
                 */
                isCurrent() {
                    return this.hasClass("slds-is-current");
                }
            }
            lightning.ProgressStep = ProgressStep;
            ProgressStep["__class"] = "com.spoonconsulting.lightning.ProgressStep";
            ProgressStep["__interfaces"] = ["com.spoonconsulting.lightning.IStep", "framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            let Size;
            (function (Size) {
                Size[Size["EXTRA_EXTRA_SMALL"] = 0] = "EXTRA_EXTRA_SMALL";
                Size[Size["EXTRA_SMALL"] = 1] = "EXTRA_SMALL";
                Size[Size["SMALL"] = 2] = "SMALL";
                Size[Size["MEDIUM"] = 3] = "MEDIUM";
                Size[Size["LARGE"] = 4] = "LARGE";
            })(Size = lightning.Size || (lightning.Size = {}));
            /** @ignore */
            class Size_$WRAPPER {
                constructor(_$ordinal, _$name, value) {
                    this._$ordinal = _$ordinal;
                    this._$name = _$name;
                    if (this.value === undefined) {
                        this.value = null;
                    }
                    this.value = value;
                }
                getValue() {
                    return this.value;
                }
                name() { return this._$name; }
                ordinal() { return this._$ordinal; }
                compareTo(other) { return this._$ordinal - (isNaN(other) ? other._$ordinal : other); }
            }
            lightning.Size_$WRAPPER = Size_$WRAPPER;
            Size["__class"] = "com.spoonconsulting.lightning.Size";
            Size["__interfaces"] = ["java.lang.constant.Constable", "java.lang.Comparable", "java.io.Serializable"];
            Size["_$wrappers"] = { 0: new Size_$WRAPPER(0, "EXTRA_EXTRA_SMALL", "xx-small"), 1: new Size_$WRAPPER(1, "EXTRA_SMALL", "x-small"), 2: new Size_$WRAPPER(2, "SMALL", "small"), 3: new Size_$WRAPPER(3, "MEDIUM", "medium"), 4: new Size_$WRAPPER(4, "LARGE", "large") };
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class Spinner extends JSContainer {
                constructor(name) {
                    super(name, "div");
                    this.alternativeText = "Loading";
                    this.addClass("slds-spinner");
                    this.setAttribute("role", "status");
                    this.refresh();
                }
                refresh() {
                    this.setHtml("<span class=\"slds-assistive-text\">" + this.alternativeText + "</span>\r\n        <div class=\"slds-spinner__dot-a\"></div>\r\n        <div class=\"slds-spinner__dot-b\"></div>");
                }
                getAlternativeText() {
                    return this.alternativeText;
                }
                setAlternativeText(alternativeText) {
                    this.alternativeText = alternativeText;
                    this.refresh();
                }
                setSize$com_spoonconsulting_lightning_Size(size) {
                    return this.setSize$java_lang_String(size != null ? com.spoonconsulting.lightning.Size["_$wrappers"][size].getValue() : null);
                }
                setSize(size) {
                    if (((typeof size === 'number') || size === null)) {
                        return this.setSize$com_spoonconsulting_lightning_Size(size);
                    }
                    else if (((typeof size === 'string') || size === null)) {
                        return this.setSize$java_lang_String(size);
                    }
                    else
                        throw new Error('invalid overload');
                }
                setSize$java_lang_String(size) {
                    {
                        let array156 = /* Enum.values */ function () { let result = []; for (let val in com.spoonconsulting.lightning.Size) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index155 = 0; index155 < array156.length; index155++) {
                            let s = array156[index155];
                            {
                                this.removeClass("slds-spinner_" + com.spoonconsulting.lightning.Size["_$wrappers"][s].getValue());
                            }
                        }
                    }
                    if (size != null)
                        this.addClass("slds-spinner_" + size);
                    return this;
                }
                setVariant$java_lang_String(variant) {
                    {
                        let array158 = /* Enum.values */ function () { let result = []; for (let val in com.spoonconsulting.lightning.Variant) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index157 = 0; index157 < array158.length; index157++) {
                            let v = array158[index157];
                            {
                                if (v !== com.spoonconsulting.lightning.Variant.BASE)
                                    this.removeClass("slds-spinner_" + com.spoonconsulting.lightning.Variant["_$wrappers"][v].getValue());
                            }
                        }
                    }
                    if (variant !== com.spoonconsulting.lightning.Variant["_$wrappers"][com.spoonconsulting.lightning.Variant.BASE].getValue() && variant != null)
                        this.addClass("slds-spinner_" + variant);
                    return this;
                }
                setVariant(variant) {
                    if (((typeof variant === 'string') || variant === null)) {
                        return this.setVariant$java_lang_String(variant);
                    }
                    else if (((typeof variant === 'number') || variant === null)) {
                        return this.setVariant$com_spoonconsulting_lightning_Variant(variant);
                    }
                    else
                        throw new Error('invalid overload');
                }
                setVariant$com_spoonconsulting_lightning_Variant(variant) {
                    return this.setVariant$java_lang_String(variant != null ? com.spoonconsulting.lightning.Variant["_$wrappers"][variant].getValue() : null);
                }
                setInlined(b) {
                    if (b) {
                        this.addClass("slds-spinner_inline");
                    }
                    else {
                        this.removeClass("slds-spinner_inline");
                    }
                    return this;
                }
                setDelayed(b) {
                    if (b) {
                        this.addClass("slds-spinner_delayed");
                    }
                    else {
                        this.removeClass("slds-spinner_delayed");
                    }
                    return this;
                }
            }
            lightning.Spinner = Spinner;
            Spinner["__class"] = "com.spoonconsulting.lightning.Spinner";
            Spinner["__interfaces"] = ["framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class TabSet extends JSContainer {
                constructor(name) {
                    super(name, "div");
                    this.tablist = new JSContainer("tablist", "ul");
                    this.tabs = new JSContainer("tabs", "div");
                    this.addClass("TabSet");
                    this.addClass("slds-tabs_default");
                    this.addChild(this.tablist);
                    this.tablist.addClass("slds-tabs_default__nav");
                    this.addChild(this.tabs);
                }
                setActiveTabValue(val) {
                    {
                        let array160 = this.tablist.getChildren();
                        for (let index159 = 0; index159 < array160.length; index159++) {
                            let r = array160[index159];
                            {
                                const item = r;
                                if (item.tab.getValue() === val) {
                                    item.setActive(true);
                                }
                                else {
                                    item.setActive(false);
                                }
                            }
                        }
                    }
                }
                setActiveTabItem(item) {
                    {
                        let array162 = this.tablist.getChildren();
                        for (let index161 = 0; index161 < array162.length; index161++) {
                            let r = array162[index161];
                            {
                                const titem = r;
                                if (titem.getId() === item.getId()) {
                                    titem.setActive(true);
                                }
                                else {
                                    titem.setActive(false);
                                }
                            }
                        }
                    }
                }
                getActiveTabItem() {
                    {
                        let array164 = this.getTabItems();
                        for (let index163 = 0; index163 < array164.length; index163++) {
                            let item = array164[index163];
                            {
                                if (item.isActive()) {
                                    return item;
                                }
                            }
                        }
                    }
                    return null;
                }
                getTabItems() {
                    const result = this.tablist.getChildren();
                    return result;
                }
                addTab(tab, content) {
                    const name = (this.tablist.getChildren().length + 1) + "";
                    const item = new TabSet.TabItem(this, name, tab, content);
                    this.tablist.addChild(item);
                    content.setAttribute("aria-labelledby", "tab-" + name + "__item");
                    this.addChild(content);
                    const titem = this.getActiveTabItem();
                    if (titem == null) {
                        const first = this.tablist.getChildren()[0];
                        this.setActiveTabItem(first);
                    }
                    return this;
                }
                getPanel(name) {
                    {
                        let array166 = this.getChildren();
                        for (let index165 = 0; index165 < array166.length; index165++) {
                            let r = array166[index165];
                            {
                                if (r.getId() !== this.tablist.getId()) {
                                    if (r.getName() === name) {
                                        return r;
                                    }
                                }
                            }
                        }
                    }
                    return null;
                }
                setVariant$com_spoonconsulting_lightning_TabSet_TabSetVariant(variant) {
                    return this.setVariant$java_lang_String(variant != null ? com.spoonconsulting.lightning.TabSet.TabSetVariant["_$wrappers"][variant].value : "standard");
                }
                setVariant(variant) {
                    if (((typeof variant === 'number') || variant === null)) {
                        return this.setVariant$com_spoonconsulting_lightning_TabSet_TabSetVariant(variant);
                    }
                    else if (((typeof variant === 'string') || variant === null)) {
                        return this.setVariant$java_lang_String(variant);
                    }
                    else
                        throw new Error('invalid overload');
                }
                setVariant$java_lang_String(variant) {
                    this.removeClass("slds-vertical-tabs");
                    this.removeClass("slds-tabs_scoped");
                    this.removeClass("slds-tabs_default");
                    this.tablist.removeClass("slds-vertical-tabs__nav");
                    this.tablist.removeClass("slds-tabs_scoped__nav");
                    this.tablist.removeClass("slds-tabs_default__nav");
                    this.tablist.setAttribute("aria-orientation", null);
                    if (variant === "vertical") {
                        this.addClass("slds-vertical-tabs");
                        this.tablist.setAttribute("aria-orientation", "vertical");
                        this.tablist.addClass("slds-vertical-tabs__nav");
                    }
                    else if (variant === "scoped") {
                        this.addClass("slds-tabs_scoped");
                        this.tablist.addClass("slds-tabs_scoped__nav");
                    }
                    else {
                        this.addClass("slds-tabs_default");
                        this.tablist.addClass("slds-tabs_default__nav");
                    }
                    {
                        let array168 = /* Enum.values */ function () { let result = []; for (let val in com.spoonconsulting.lightning.TabSet.TabSetVariant) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index167 = 0; index167 < array168.length; index167++) {
                            let va = array168[index167];
                            {
                                this.removeClass("slds-tabs_" + com.spoonconsulting.lightning.TabSet.TabSetVariant["_$wrappers"][va].value);
                            }
                        }
                    }
                    if (variant == null) {
                        variant = "standard";
                    }
                    this.addClass("slds-tabs_" + variant);
                    return this;
                }
            }
            lightning.TabSet = TabSet;
            TabSet["__class"] = "com.spoonconsulting.lightning.TabSet";
            TabSet["__interfaces"] = ["framework.components.api.Renderable"];
            (function (TabSet) {
                let TabSetVariant;
                (function (TabSetVariant) {
                    TabSetVariant[TabSetVariant["STANDARD"] = 0] = "STANDARD";
                    TabSetVariant[TabSetVariant["SCOPED"] = 1] = "SCOPED";
                    TabSetVariant[TabSetVariant["VERTICAL"] = 2] = "VERTICAL";
                })(TabSetVariant = TabSet.TabSetVariant || (TabSet.TabSetVariant = {}));
                /** @ignore */
                class TabSetVariant_$WRAPPER {
                    constructor(_$ordinal, _$name, value) {
                        this._$ordinal = _$ordinal;
                        this._$name = _$name;
                        if (this.value === undefined) {
                            this.value = null;
                        }
                        this.value = value;
                    }
                    name() { return this._$name; }
                    ordinal() { return this._$ordinal; }
                    compareTo(other) { return this._$ordinal - (isNaN(other) ? other._$ordinal : other); }
                }
                TabSet.TabSetVariant_$WRAPPER = TabSetVariant_$WRAPPER;
                TabSetVariant["__class"] = "com.spoonconsulting.lightning.TabSet.TabSetVariant";
                TabSetVariant["__interfaces"] = ["java.lang.constant.Constable", "java.lang.Comparable", "java.io.Serializable"];
                TabSetVariant["_$wrappers"] = { 0: new TabSetVariant_$WRAPPER(0, "STANDARD", "default"), 1: new TabSetVariant_$WRAPPER(1, "SCOPED", "scoped"), 2: new TabSetVariant_$WRAPPER(2, "VERTICAL", "vertical") };
                class TabItem extends JSContainer {
                    constructor(__parent, name, tab, panel) {
                        super(name, "li");
                        this.__parent = __parent;
                        if (this.tab === undefined) {
                            this.tab = null;
                        }
                        if (this.panel === undefined) {
                            this.panel = null;
                        }
                        this.addClass("TabItem");
                        this.tab = tab;
                        this.panel = panel;
                        this.setAttribute("role", "presentation").setAttribute("data-tab", "true");
                        this.addClass("slds-tabs_default__item");
                        this.setAttribute("title", tab.getTitle());
                        this.setAttribute("data-label", tab.getTitle());
                        this.setAttribute("data-tab-value", name);
                        tab.addEventListener(new TabItem.TabItem$0(this), "click");
                        this.addChild(tab);
                    }
                    setActive(b) {
                        this.tab.setActive(b);
                        this.panel.setActive(b);
                    }
                    isActive() {
                        return this.tab.isActive() && this.panel.isActive();
                    }
                }
                TabSet.TabItem = TabItem;
                TabItem["__class"] = "com.spoonconsulting.lightning.TabSet.TabItem";
                TabItem["__interfaces"] = ["framework.components.api.Renderable"];
                (function (TabItem) {
                    class TabItem$0 {
                        constructor(__parent) {
                            this.__parent = __parent;
                        }
                        /**
                         *
                         * @param {*} source
                         * @param {Event} evt
                         */
                        performAction(source, evt) {
                            const titem = (source.getAncestorWithClass("TabItem"));
                            const tabSet = (source.getAncestorWithClass("TabSet"));
                            tabSet.setActiveTabItem(titem);
                        }
                    }
                    TabItem.TabItem$0 = TabItem$0;
                    TabItem$0["__interfaces"] = ["framework.components.api.EventListener"];
                })(TabItem = TabSet.TabItem || (TabSet.TabItem = {}));
            })(TabSet = lightning.TabSet || (lightning.TabSet = {}));
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            let Variant;
            (function (Variant) {
                Variant[Variant["BASE"] = 0] = "BASE";
                Variant[Variant["NEUTRAL"] = 1] = "NEUTRAL";
                Variant[Variant["BRAND"] = 2] = "BRAND";
                Variant[Variant["OUTLINE_BRAND"] = 3] = "OUTLINE_BRAND";
                Variant[Variant["DESTRUCTIVE"] = 4] = "DESTRUCTIVE";
                Variant[Variant["TEXT_DESTRUCTIVE"] = 5] = "TEXT_DESTRUCTIVE";
                Variant[Variant["SUCCESS"] = 6] = "SUCCESS";
                Variant[Variant["INVERSE"] = 7] = "INVERSE";
            })(Variant = lightning.Variant || (lightning.Variant = {}));
            /** @ignore */
            class Variant_$WRAPPER {
                constructor(_$ordinal, _$name, value) {
                    this._$ordinal = _$ordinal;
                    this._$name = _$name;
                    if (this.value === undefined) {
                        this.value = null;
                    }
                    this.value = value;
                }
                getValue() {
                    return this.value;
                }
                name() { return this._$name; }
                ordinal() { return this._$ordinal; }
                compareTo(other) { return this._$ordinal - (isNaN(other) ? other._$ordinal : other); }
            }
            lightning.Variant_$WRAPPER = Variant_$WRAPPER;
            Variant["__class"] = "com.spoonconsulting.lightning.Variant";
            Variant["__interfaces"] = ["java.lang.constant.Constable", "java.lang.Comparable", "java.io.Serializable"];
            Variant["_$wrappers"] = { 0: new Variant_$WRAPPER(0, "BASE", ""), 1: new Variant_$WRAPPER(1, "NEUTRAL", "neutral"), 2: new Variant_$WRAPPER(2, "BRAND", "brand"), 3: new Variant_$WRAPPER(3, "OUTLINE_BRAND", "outline-brand"), 4: new Variant_$WRAPPER(4, "DESTRUCTIVE", "destructive"), 5: new Variant_$WRAPPER(5, "TEXT_DESTRUCTIVE", "text-destructive"), 6: new Variant_$WRAPPER(6, "SUCCESS", "success"), 7: new Variant_$WRAPPER(7, "INVERSE", "inverse") };
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class Path extends com.spoonconsulting.lightning.AbstractProgress {
                constructor(name) {
                    super(name, "div");
                    this.track = new JSContainer("track", "div");
                    this.scrollerContainer = new JSContainer("scroller-container", "div");
                    this.scroller = new JSContainer("scroller", "div");
                    this.scrollerInner = new JSContainer("scroller-inner", "div");
                    this.nav = new JSContainer("nav", "ul");
                    this.addClass("slds-path");
                    this.addChild(this.track.addChild(this.scrollerContainer.addChild(this.scroller.addChild(this.scrollerInner.addChild(this.nav)))));
                    this.track.addClass("slds-grid").addClass("slds-path__track");
                    this.scrollerContainer.addClass("slds-grid").addClass("slds-path__scroller-container");
                    this.scroller.addClass("slds-path__scroller");
                    this.scrollerInner.addClass("slds-path__scroller_inner");
                    this.nav.addClass("slds-path__nav");
                    this.nav.setAttribute("role", "listbox").setAttribute("aria-orientation", "horizontal");
                    this.scroller.setAttribute("role", "application");
                }
                getSteps() {
                    const result = this.nav.getChildren();
                    return result;
                }
                /**
                 *
                 * @return {*}
                 */
                clearSteps() {
                    this.nav.clearChildren();
                    this.nav.setRendered(false);
                    return this;
                }
                /**
                 *
                 * @param {string} label
                 * @param {string} value
                 * @return {*}
                 */
                addStep(label, value) {
                    const item = new com.spoonconsulting.lightning.PathItem(label);
                    item.setValue(value);
                    item.setLabel(label);
                    this.nav.addChild(item);
                    return this;
                }
            }
            lightning.Path = Path;
            Path["__class"] = "com.spoonconsulting.lightning.Path";
            Path["__interfaces"] = ["framework.components.api.Renderable", "com.spoonconsulting.lightning.IProgress"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class Progress extends com.spoonconsulting.lightning.AbstractProgress {
                constructor(name) {
                    super(name, "div");
                    this.progressList = new JSContainer("progress-list", "ol");
                    this.progressBar = new com.spoonconsulting.lightning.ProgressBar("progressBar");
                    this.addClass("slds-progress");
                    this.addChild(this.progressList);
                    this.addChild(this.progressBar);
                    this.progressBar.setSize$com_spoonconsulting_lightning_Size(com.spoonconsulting.lightning.Size.EXTRA_SMALL);
                    this.progressList.addClass("slds-progress__list");
                    this.setVariant("base");
                }
                addStep$com_spoonconsulting_lightning_IStep(step) {
                    this.progressList.addChild(step);
                    return this;
                }
                getSteps() {
                    const result = this.progressList.getChildren();
                    return result;
                }
                /**
                 *
                 * @return {*}
                 */
                clearSteps() {
                    this.progressList.clearChildren();
                    this.progressList.setRendered(false);
                    return this;
                }
                addStep$java_lang_String$java_lang_String(label, value) {
                    const step = new com.spoonconsulting.lightning.ProgressStep(label);
                    step.setLabel(label);
                    step.setValue(value);
                    this.progressList.addChild(step);
                    return this;
                }
                /**
                 *
                 * @param {string} label
                 * @param {string} value
                 * @return {*}
                 */
                addStep(label, value) {
                    if (((typeof label === 'string') || label === null) && ((typeof value === 'string') || value === null)) {
                        return this.addStep$java_lang_String$java_lang_String(label, value);
                    }
                    else if (((label != null && (label.constructor != null && label.constructor["__interfaces"] != null && label.constructor["__interfaces"].indexOf("com.spoonconsulting.lightning.IStep") >= 0)) || label === null) && value === undefined) {
                        return this.addStep$com_spoonconsulting_lightning_IStep(label);
                    }
                    else
                        throw new Error('invalid overload');
                }
            }
            lightning.Progress = Progress;
            Progress["__class"] = "com.spoonconsulting.lightning.Progress";
            Progress["__interfaces"] = ["framework.components.api.Renderable", "com.spoonconsulting.lightning.IProgress"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class Accordion extends com.spoonconsulting.lightning.BaseLightning {
                constructor(name) {
                    super(name, "ul");
                    this.allowMultipleSectionOpen = false;
                    this.addClass("slds-accordion");
                }
                addSection(section) {
                    const li = new JSContainer("li");
                    li.addClass("slds-accordion__list-item");
                    this.addChild(li);
                    li.addChild(section);
                    return this;
                }
                addSections(...accordionSections) {
                    for (let index169 = 0; index169 < accordionSections.length; index169++) {
                        let section = accordionSections[index169];
                        {
                            this.addSection(section);
                        }
                    }
                    return this;
                }
                setActiveSectionName(name) {
                    {
                        let array171 = this.getChildren();
                        for (let index170 = 0; index170 < array171.length; index170++) {
                            let r = array171[index170];
                            {
                                const section = r.getChildren()[0];
                                if (section.getName() === name) {
                                    section.setOpen(true);
                                }
                                else {
                                    section.setOpen(false);
                                }
                            }
                        }
                    }
                    return this;
                }
                setOpen(name) {
                    {
                        let array173 = this.getChildren();
                        for (let index172 = 0; index172 < array173.length; index172++) {
                            let r = array173[index172];
                            {
                                const section = r.getChildren()[0];
                                if (section.getName() === name) {
                                    if (!section.isOpen()) {
                                        section.setOpen(true);
                                        this.fireSectionToggle();
                                    }
                                }
                                else {
                                    if (!this.allowMultipleSectionOpen) {
                                        if (section.isOpen()) {
                                            section.setOpen(false);
                                            this.fireSectionToggle();
                                        }
                                    }
                                }
                            }
                        }
                    }
                    return this;
                }
                fireSectionToggle() {
                    const sectionToggle = new CustomEvent("onsectiontoggle");
                    const openSections = (new Array());
                    {
                        let array175 = this.getSections();
                        for (let index174 = 0; index174 < array175.length; index174++) {
                            let sect = array175[index174];
                            {
                                if (sect.isOpen()) {
                                    openSections.push(sect.getName());
                                }
                            }
                        }
                    }
                    const detail = new Object();
                    detail["openSections"] = openSections;
                    sectionToggle["details"] = detail;
                    this.fireListener("onsectiontoggle", sectionToggle);
                }
                setClose(name) {
                    {
                        let array177 = this.getChildren();
                        for (let index176 = 0; index176 < array177.length; index176++) {
                            let r = array177[index176];
                            {
                                const section = r.getChildren()[0];
                                if (section.getName() === name) {
                                    section.setOpen(false);
                                }
                            }
                        }
                    }
                    return this;
                }
                isAllowMultipleSectionOpen() {
                    return this.allowMultipleSectionOpen;
                }
                setAllowMultipleSectionOpen(allowMultipleSectionOpen) {
                    this.allowMultipleSectionOpen = allowMultipleSectionOpen;
                }
                getSections() {
                    const sections = (new Array());
                    {
                        let array179 = this.getChildren();
                        for (let index178 = 0; index178 < array179.length; index178++) {
                            let r = array179[index178];
                            {
                                sections.push(r.getChildren()[0]);
                            }
                        }
                    }
                    return sections;
                }
                getSection(name) {
                    {
                        let array181 = this.getChildren();
                        for (let index180 = 0; index180 < array181.length; index180++) {
                            let r = array181[index180];
                            {
                                const section = r.getChildren()[0];
                                if (section.getName() === name) {
                                    return section;
                                }
                            }
                        }
                    }
                    return null;
                }
            }
            lightning.Accordion = Accordion;
            Accordion["__class"] = "com.spoonconsulting.lightning.Accordion";
            Accordion["__interfaces"] = ["framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class AccordionSection extends com.spoonconsulting.lightning.BaseLightning {
                constructor(name) {
                    super(name, "section");
                    this.summary = new JSContainer("summary", "div");
                    this.content = new JSContainer("content", "div");
                    this.summaryHeading = new JSContainer("summary-heading", "h2");
                    this.summaryHeadingAction = new com.spoonconsulting.lightning.Button("summary-heading-action");
                    this.summaryAction = new JSContainer("summary-action", "button");
                    this.summaryActionIcon = new com.spoonconsulting.lightning.Icon("summary-action-icon", "utility:switch");
                    this.actionsSlot = new JSContainer("actions", "span");
                    this.addClass("slds-accordion__section");
                    this.addChild(this.summary.addClass("slds-accordion__summary"));
                    this.addChild(this.content.addClass("slds-accordion__content"));
                    this.summaryHeading.addClass("slds-accordion__summary-heading");
                    this.summaryHeading.addChild(this.summaryHeadingAction);
                    this.summary.addChild(this.summaryHeading);
                    this.summary.addChild(this.actionsSlot);
                    this.summaryHeadingAction.setIconName("utility:switch").addClass("slds-button_reset").addClass("slds-accordion__summary-action");
                    this.summaryHeadingAction.getIcon().addClass("slds-accordion__summary-action-icon");
                    this.summaryHeadingAction.label.addClass("slds-accordion__summary-content");
                    this.summaryAction.addClass("slds-button").addClass("slds-button_reset").addClass("slds-accordion__summary-action");
                    this.actionsSlot.addChild(this.summaryAction);
                    this.summaryActionIcon.addClass("slds-accordion__summary-action-icon").addClass("slds-button__icon").addClass("slds-button__icon_left").setAttribute("aria-hidden", "true");
                    this.summaryAction.addChild(this.summaryActionIcon);
                    this.setOpen(false);
                    this.summary.addEventListener(new AccordionSection.AccordionSection$0(this), "click");
                }
                /**
                 *
                 * @param {string} title
                 */
                setTitle(title) {
                    super.setTitle(title);
                    this.summaryAction.setAttribute("title", title);
                    this.summaryHeadingAction.setLabel(title).setAttribute("title", title);
                }
                toggle() {
                    this.setOpen(!this.isOpen());
                }
                isOpen() {
                    return this.hasClass("slds-is-open");
                }
                setOpen(b) {
                    const accordion = (this.getAncestorWithClass("slds-accordion"));
                    if (b && !this.isOpen()) {
                        this.addClass("slds-is-open");
                        this.summaryAction.setAttribute("aria-expanded", "true");
                        if (accordion != null) {
                            accordion.setOpen(this.getName());
                        }
                    }
                    else if (this.isOpen()) {
                        this.removeClass("slds-is-open");
                        this.summaryAction.setAttribute("aria-expanded", "false");
                    }
                    return this;
                }
                getSummary() {
                    return this.summary;
                }
                getContent() {
                    return this.content;
                }
                getSummaryHeading() {
                    return this.summaryHeading;
                }
                getSummaryAction() {
                    return this.summaryAction;
                }
                getSummaryActionIcon() {
                    return this.summaryActionIcon;
                }
                getSlot(name) {
                    if (name === "actions") {
                        return this.actionsSlot;
                    }
                    else {
                        return this.content;
                    }
                }
            }
            lightning.AccordionSection = AccordionSection;
            AccordionSection["__class"] = "com.spoonconsulting.lightning.AccordionSection";
            AccordionSection["__interfaces"] = ["framework.components.api.Renderable"];
            (function (AccordionSection) {
                class AccordionSection$0 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        this.__parent.toggle();
                    }
                }
                AccordionSection.AccordionSection$0 = AccordionSection$0;
                AccordionSection$0["__interfaces"] = ["framework.components.api.EventListener"];
            })(AccordionSection = lightning.AccordionSection || (lightning.AccordionSection = {}));
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class Badge extends com.spoonconsulting.lightning.BaseLightning {
                constructor(name, tag) {
                    super(name, "span");
                    this.label = new JSContainer("label", "span");
                    this.leftIconContainer = new com.spoonconsulting.lightning.IconContainer("left-icon", "span");
                    this.leftBadgeIcon = new JSContainer("left-badge-icon", "span");
                    this.rightIconContainer = new com.spoonconsulting.lightning.IconContainer("right-icon", "span");
                    this.rightBadgeIcon = new JSContainer("right-badge-icon", "span");
                    this.addClass("slds-badge");
                    this.leftBadgeIcon.addClass("slds-badge__icon").addClass("slds-badge__icon_left").addChild(this.leftIconContainer);
                    this.addChild(this.label);
                    this.rightBadgeIcon.addClass("slds-badge__icon").addClass("slds-badge__icon_right").addChild(this.rightIconContainer);
                }
                setIconAlternativeText(altText) {
                    this.leftIconContainer.setTitle(altText);
                    this.rightIconContainer.setTitle(altText);
                    return this;
                }
                setIconName(iconName) {
                    if (iconName != null && iconName.length > 0) {
                        this.leftIconContainer.setIconName(iconName);
                        this.rightIconContainer.setIconName(iconName);
                        if (this.getChildren().length === 1) {
                            this.setIconPosition(Badge.POSITION_START);
                        }
                    }
                    else {
                        this.setIconPosition("none");
                    }
                    return this;
                }
                setIconPosition(position) {
                    this.clearChildren();
                    if (position === Badge.POSITION_START) {
                        this.addChild(this.leftBadgeIcon);
                    }
                    this.addChild(this.label);
                    if (position === Badge.POSITION_END) {
                        this.addChild(this.rightBadgeIcon);
                    }
                    this.setRendered(false);
                    return this;
                }
                setLabel(label) {
                    this.label.setHtml(label);
                    return this;
                }
            }
            Badge.POSITION_START = "start";
            Badge.POSITION_END = "end";
            lightning.Badge = Badge;
            Badge["__class"] = "com.spoonconsulting.lightning.Badge";
            Badge["__interfaces"] = ["framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class Button extends com.spoonconsulting.lightning.BaseLightning {
                constructor(name) {
                    super(name, "button");
                    this.icon = new com.spoonconsulting.lightning.Icon("icon", "utility:down");
                    this.prefixIcon = new com.spoonconsulting.lightning.Icon("prefix-icon", "utility:down");
                    this.label = new JSContainer("label", "span");
                    this.draft = new JSContainer("draft", "abbr");
                    this.iconName = null;
                    this.iconPosition = null;
                    this.isDraft = false;
                    this.draftAlternativeText = null;
                    this.prefixIconName = null;
                    this.addClass("slds-button");
                    this.addChild(this.label);
                    this.icon.removeClass("slds-icon").addClass("slds-button__icon").setAttribute("aria-hidden", "true").setAttribute("focusabled", "false");
                    this.prefixIcon.removeClass("slds-icon").addClass("slds-button__icon").setAttribute("aria-hidden", "true").setAttribute("focusabled", "false");
                    this.draft.addClass("slds-indicator_unsaved").addClass("slds-p-right_xx-small").setHtml("*");
                }
                refresh() {
                    this.clearChildren();
                    if (this.prefixIconName != null && this.prefixIconName !== "") {
                        this.addChild(this.prefixIcon);
                        this.prefixIcon.setIconName(this.prefixIconName);
                        this.icon.addClass("slds-button__icon_x-small").addClass("slds-m-left_xx-small");
                    }
                    else {
                        this.icon.removeClass("slds-button__icon_x-small").removeClass("slds-m-left_xx-small");
                    }
                    if (this.iconName != null && this.iconName !== "") {
                        this.icon.removeClass("slds-button__icon_right").removeClass("slds-button__icon_left");
                        if (this.iconPosition === Button.ICON_POSITION_LEFT || this.iconPosition == null) {
                            this.addChild(this.icon);
                            this.icon.addClass("slds-button__icon_left");
                        }
                        if (this.isDraft) {
                            this.addChild(this.draft);
                        }
                        this.addChild(this.label);
                        if (this.iconPosition === Button.ICON_POSITION_RIGHT) {
                            this.addChild(this.icon);
                            this.icon.addClass("slds-button__icon_right");
                        }
                        this.icon.setIconName(this.iconName);
                    }
                    else {
                        if (this.isDraft) {
                            this.addChild(this.draft);
                        }
                        this.addChild(this.label);
                    }
                    if (this.isDraft) {
                        this.draft.setAttribute("title", this.draftAlternativeText);
                    }
                    this.setRendered(false);
                    return this;
                }
                getPrefixIconName() {
                    return this.prefixIconName;
                }
                setPrefixIconName(prefixIconName) {
                    this.prefixIconName = prefixIconName;
                    return this.refresh();
                }
                setDisabled(b) {
                    if (b) {
                        this.setAttribute("disabled", "true");
                    }
                    else {
                        this.setAttribute("disabled", null);
                    }
                    return this;
                }
                isDisabled() {
                    return "true" === this.getAttribute("disabled");
                }
                setIconName(iconName) {
                    this.iconName = iconName;
                    return this.refresh();
                }
                getIconName() {
                    return this.iconName;
                }
                setIconPosition(position) {
                    this.iconPosition = position;
                    return this.refresh();
                }
                getIconPosition() {
                    return this.iconPosition;
                }
                getIsDraft() {
                    return this.isDraft;
                }
                setIsDraft(isDraft) {
                    this.isDraft = isDraft;
                    return this.refresh();
                }
                getDraftAlternativeText() {
                    return this.draftAlternativeText;
                }
                setDraftAlternativeText(draftAlternativeText) {
                    this.draftAlternativeText = draftAlternativeText;
                    return this.refresh();
                }
                setLabel(label) {
                    this.label.setHtml(label);
                    if (label != null && this.iconPosition == null) {
                        this.setIconPosition(Button.ICON_POSITION_LEFT);
                    }
                    return this;
                }
                getLabel() {
                    return this.label.getHtml();
                }
                setType(type) {
                    this.setAttribute("type", type);
                    return this;
                }
                setValue(value) {
                    this.setAttribute("value", value);
                    return this;
                }
                getValue() {
                    return this.getAttribute("value");
                }
                setVariant$com_spoonconsulting_lightning_Variant(variant) {
                    return this.setVariant$java_lang_String(com.spoonconsulting.lightning.Variant["_$wrappers"][variant].getValue());
                }
                setVariant(variant) {
                    if (((typeof variant === 'number') || variant === null)) {
                        return this.setVariant$com_spoonconsulting_lightning_Variant(variant);
                    }
                    else if (((typeof variant === 'string') || variant === null)) {
                        return this.setVariant$java_lang_String(variant);
                    }
                    else
                        throw new Error('invalid overload');
                }
                setVariant$java_lang_String(variant) {
                    {
                        let array183 = /* Enum.values */ function () { let result = []; for (let val in com.spoonconsulting.lightning.Variant) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index182 = 0; index182 < array183.length; index182++) {
                            let v = array183[index182];
                            {
                                this.removeClass("slds-button_" + com.spoonconsulting.lightning.Variant["_$wrappers"][v].getValue());
                            }
                        }
                    }
                    this.addClass("slds-button_" + variant);
                    return this;
                }
                getPrefixIcon() {
                    return this.prefixIcon;
                }
                click() {
                    const btn = this.getElement();
                    if (btn != null)
                        btn.click();
                }
                blur() {
                    const btn = this.getElement();
                    if (btn != null) {
                        btn.blur();
                    }
                }
                getUILabel() {
                    return this.label;
                }
                getIcon() {
                    return this.icon;
                }
            }
            Button.ICON_POSITION_LEFT = "left";
            Button.ICON_POSITION_RIGHT = "right";
            Button.TYPE_BUTTON = "button";
            Button.TYPE_SUBMIT = "submit";
            Button.TYPE_RESET = "reset";
            lightning.Button = Button;
            Button["__class"] = "com.spoonconsulting.lightning.Button";
            Button["__interfaces"] = ["framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class ButtonGroup extends com.spoonconsulting.lightning.BaseLightning {
                constructor(name) {
                    super(name, "div");
                    this.setAttribute("role", "group").addClass("slds-button-group");
                }
                addButton(btn) {
                    this.addChild(btn);
                    return this;
                }
            }
            lightning.ButtonGroup = ButtonGroup;
            ButtonGroup["__class"] = "com.spoonconsulting.lightning.ButtonGroup";
            ButtonGroup["__interfaces"] = ["framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class ButtonMenu extends com.spoonconsulting.lightning.BaseLightning {
                constructor(name, tag) {
                    super(name, tag);
                    this.button = new com.spoonconsulting.lightning.ButtonIcon("button", "utility:down");
                    this.dropdown = new com.spoonconsulting.lightning.Dropdown("dropdown");
                    this.menuAlignment = com.spoonconsulting.lightning.ButtonMenu.MenuAlignment["_$wrappers"][ButtonMenu.MenuAlignment.LEFT].value;
                    this.nubbin = false;
                    this.addClass("slds-dropdown-trigger").addClass("slds-dropdown-trigger_click").addChild(this.button).addChild(this.dropdown);
                    this.button.setVariant$com_spoonconsulting_lightning_ButtonIcon_ButtonIconVariant(com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant.BORDER_FILLED).setAttribute("aria-haspopup", "true").setAttribute("aria-expanded", "true").addEventListener(new ButtonMenu.ButtonMenu$0(this), "click");
                }
                toggle() {
                    this.setExpanded(!this.isExpanded());
                }
                open() {
                    this.setExpanded(true);
                }
                close() {
                    this.setExpanded(false);
                }
                setExpanded(b) {
                    if (b) {
                        this.button.setAttribute("aria-expanded", "true");
                        this.addClass("slds-is-open");
                    }
                    else {
                        this.button.setAttribute("aria-expanded", "false");
                        this.removeClass("slds-is-open");
                    }
                    return this;
                }
                isExpanded() {
                    return "true" === this.button.getAttribute("aria-expanded");
                }
                getIsDraft() {
                    return this.button.getIsDraft();
                }
                setIsDraft(isDraft) {
                    this.button.setIsDraft(isDraft);
                    return this;
                }
                getDraftAlternativeText() {
                    return this.button.getDraftAlternativeText();
                }
                setDraftAlternativeText(draftAlternativeText) {
                    this.button.setDraftAlternativeText(draftAlternativeText);
                    return this;
                }
                setIconName(iconName) {
                    if (iconName === "utility:down" || iconName === "utility:chevrondown") {
                        this.button.setPrefixIconName(null).setIconName(iconName);
                    }
                    else {
                        this.button.setPrefixIconName(iconName).setIconName("utility:down");
                    }
                    return this;
                }
                getIconName() {
                    if (this.button.getPrefixIconName() != null) {
                        return this.button.getPrefixIconName();
                    }
                    else {
                        return this.button.getIconName();
                    }
                }
                setDisabled(b) {
                    this.button.setDisabled(b);
                    if (!b) {
                        this.setExpanded(false);
                    }
                    return this;
                }
                setLabel(label) {
                    this.button.setLabel(label);
                    return this;
                }
                getLabel() {
                    return this.button.getLabel();
                }
                setIconSize$com_spoonconsulting_lightning_Size(size) {
                    return this.setIconSize$java_lang_String(size != null ? com.spoonconsulting.lightning.Size["_$wrappers"][size].getValue() : null);
                }
                setIconSize(size) {
                    if (((typeof size === 'number') || size === null)) {
                        return this.setIconSize$com_spoonconsulting_lightning_Size(size);
                    }
                    else if (((typeof size === 'string') || size === null)) {
                        return this.setIconSize$java_lang_String(size);
                    }
                    else
                        throw new Error('invalid overload');
                }
                setIconSize$java_lang_String(size) {
                    if (this.button.getPrefixIconName() != null) {
                        this.button.getPrefixIcon().setSize$java_lang_String(size);
                    }
                    else {
                        this.button.getIcon().setSize$java_lang_String(size);
                    }
                    return this;
                }
                setIsLoading(b) {
                    this.dropdown.setIsLoading(b);
                    return this;
                }
                getIsLoading() {
                    return this.dropdown.getIsLoading();
                }
                setLoadingStateAlternativeText(txt) {
                    this.dropdown.getSpinner().setAlternativeText(txt);
                    return this;
                }
                setMenuAlignment$com_spoonconsulting_lightning_ButtonMenu_MenuAlignment(alignment) {
                    return this.setMenuAlignment$java_lang_String(alignment != null ? com.spoonconsulting.lightning.ButtonMenu.MenuAlignment["_$wrappers"][alignment].value : com.spoonconsulting.lightning.ButtonMenu.MenuAlignment["_$wrappers"][ButtonMenu.MenuAlignment.AUTO].value);
                }
                setMenuAlignment(alignment) {
                    if (((typeof alignment === 'number') || alignment === null)) {
                        return this.setMenuAlignment$com_spoonconsulting_lightning_ButtonMenu_MenuAlignment(alignment);
                    }
                    else if (((typeof alignment === 'string') || alignment === null)) {
                        return this.setMenuAlignment$java_lang_String(alignment);
                    }
                    else
                        throw new Error('invalid overload');
                }
                setMenuAlignment$java_lang_String(alignment) {
                    this.menuAlignment = alignment;
                    return this;
                }
                getMenuAlignment() {
                    return this.menuAlignment;
                }
                isNubbin() {
                    return this.nubbin;
                }
                setNubbin(nubbin) {
                    this.nubbin = nubbin;
                    this.refresh();
                    return this;
                }
                setValue(val) {
                    this.button.setValue(val);
                    return this;
                }
                getValue() {
                    return this.button.getValue();
                }
                setVariant$com_spoonconsulting_lightning_ButtonIcon_ButtonIconVariant(variant) {
                    this.button.setVariant$com_spoonconsulting_lightning_ButtonIcon_ButtonIconVariant(variant);
                    return this;
                }
                setVariant(variant) {
                    if (((typeof variant === 'number') || variant === null)) {
                        return this.setVariant$com_spoonconsulting_lightning_ButtonIcon_ButtonIconVariant(variant);
                    }
                    else if (((typeof variant === 'string') || variant === null)) {
                        return this.setVariant$java_lang_String(variant);
                    }
                    else
                        throw new Error('invalid overload');
                }
                setVariant$java_lang_String(variant) {
                    this.button.setVariant$java_lang_String(variant);
                    return this;
                }
                refresh() {
                    const suffixes = ["bottom", "left", "right", "center", "bottom-right", "bottom-left", "top", "top-right", "top-left"];
                    for (let index184 = 0; index184 < suffixes.length; index184++) {
                        let suffix = suffixes[index184];
                        {
                            this.dropdown.removeClass("slds-dropdown_" + suffix).removeClass("slds-nubbin_" + suffix);
                        }
                    }
                    if (this.menuAlignment === com.spoonconsulting.lightning.ButtonMenu.MenuAlignment["_$wrappers"][ButtonMenu.MenuAlignment.BOTTOM_CENTER].value) {
                        this.dropdown.addClass("slds-dropdown_bottom");
                        if (this.nubbin) {
                            this.dropdown.addClass("slds-nubbin_bottom");
                        }
                    }
                    else if (this.menuAlignment === com.spoonconsulting.lightning.ButtonMenu.MenuAlignment["_$wrappers"][ButtonMenu.MenuAlignment.BOTTOM_RIGHT].value) {
                        this.dropdown.addClass("slds-dropdown_right").addClass("slds-dropdown_bottom-right");
                        if (this.nubbin) {
                            this.dropdown.addClass("slds-nubbin_bottom-right");
                        }
                    }
                    else if (this.menuAlignment === com.spoonconsulting.lightning.ButtonMenu.MenuAlignment["_$wrappers"][ButtonMenu.MenuAlignment.BOTTOM_LEFT].value) {
                        this.dropdown.addClass("slds-dropdown_left").addClass("slds-dropdown_bottom-left");
                        if (this.nubbin) {
                            this.dropdown.addClass("slds-nubbin_bottom-left");
                        }
                    }
                    else if (this.menuAlignment === com.spoonconsulting.lightning.ButtonMenu.MenuAlignment["_$wrappers"][ButtonMenu.MenuAlignment.CENTER].value) {
                        this.dropdown.addClass("slds-dropdown_center");
                        if (this.nubbin) {
                            this.dropdown.addClass("slds-nubbin_top");
                        }
                    }
                    else if (this.menuAlignment === com.spoonconsulting.lightning.ButtonMenu.MenuAlignment["_$wrappers"][ButtonMenu.MenuAlignment.RIGHT].value) {
                        this.dropdown.addClass("slds-dropdown_right");
                        if (this.nubbin) {
                            this.dropdown.addClass("slds-nubbin_top-right");
                        }
                    }
                    else if (this.menuAlignment === com.spoonconsulting.lightning.ButtonMenu.MenuAlignment["_$wrappers"][ButtonMenu.MenuAlignment.LEFT].value) {
                        this.dropdown.addClass("slds-dropdown_left");
                        if (this.nubbin) {
                            this.dropdown.addClass("slds-nubbin_top-left");
                        }
                    }
                    else {
                        this.dropdown.addClass("slds-dropdown_left");
                        if (this.nubbin) {
                            this.dropdown.addClass("slds-nubbin_top-left");
                        }
                    }
                }
            }
            lightning.ButtonMenu = ButtonMenu;
            ButtonMenu["__class"] = "com.spoonconsulting.lightning.ButtonMenu";
            ButtonMenu["__interfaces"] = ["framework.components.api.Renderable"];
            (function (ButtonMenu) {
                let MenuAlignment;
                (function (MenuAlignment) {
                    MenuAlignment[MenuAlignment["LEFT"] = 0] = "LEFT";
                    MenuAlignment[MenuAlignment["RIGHT"] = 1] = "RIGHT";
                    MenuAlignment[MenuAlignment["CENTER"] = 2] = "CENTER";
                    MenuAlignment[MenuAlignment["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
                    MenuAlignment[MenuAlignment["BOTTOM_RIGHT"] = 4] = "BOTTOM_RIGHT";
                    MenuAlignment[MenuAlignment["BOTTOM_CENTER"] = 5] = "BOTTOM_CENTER";
                    MenuAlignment[MenuAlignment["AUTO"] = 6] = "AUTO";
                })(MenuAlignment = ButtonMenu.MenuAlignment || (ButtonMenu.MenuAlignment = {}));
                /** @ignore */
                class MenuAlignment_$WRAPPER {
                    constructor(_$ordinal, _$name, val) {
                        this._$ordinal = _$ordinal;
                        this._$name = _$name;
                        if (this.value === undefined) {
                            this.value = null;
                        }
                        this.value = val;
                    }
                    name() { return this._$name; }
                    ordinal() { return this._$ordinal; }
                    compareTo(other) { return this._$ordinal - (isNaN(other) ? other._$ordinal : other); }
                }
                ButtonMenu.MenuAlignment_$WRAPPER = MenuAlignment_$WRAPPER;
                MenuAlignment["__class"] = "com.spoonconsulting.lightning.ButtonMenu.MenuAlignment";
                MenuAlignment["__interfaces"] = ["java.lang.constant.Constable", "java.lang.Comparable", "java.io.Serializable"];
                MenuAlignment["_$wrappers"] = { 0: new MenuAlignment_$WRAPPER(0, "LEFT", "top"), 1: new MenuAlignment_$WRAPPER(1, "RIGHT", "right"), 2: new MenuAlignment_$WRAPPER(2, "CENTER", "center"), 3: new MenuAlignment_$WRAPPER(3, "BOTTOM_LEFT", "bottom-left"), 4: new MenuAlignment_$WRAPPER(4, "BOTTOM_RIGHT", "bottom-right"), 5: new MenuAlignment_$WRAPPER(5, "BOTTOM_CENTER", "bottom-center"), 6: new MenuAlignment_$WRAPPER(6, "AUTO", "auto") };
                class ButtonMenu$0 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        this.__parent.toggle();
                    }
                }
                ButtonMenu.ButtonMenu$0 = ButtonMenu$0;
                ButtonMenu$0["__interfaces"] = ["framework.components.api.EventListener"];
            })(ButtonMenu = lightning.ButtonMenu || (lightning.ButtonMenu = {}));
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class ButtonStateful extends com.spoonconsulting.lightning.BaseLightning {
                constructor(name) {
                    super(name, "button");
                    this.btnNotSelected = new ButtonStateful.innerBtn(this, "not-selected");
                    this.btnSelected = new ButtonStateful.innerBtn(this, "selected");
                    this.btnSelectedFocus = new ButtonStateful.innerBtn(this, "selected-focus");
                    this.selected = false;
                    this.addClass("slds-button").addClass("slds-button_stateful").addChild(this.btnNotSelected).addChild(this.btnSelected).addChild(this.btnSelectedFocus);
                    this.addEventListener(new ButtonStateful.ButtonStateful$0(this), "click");
                    this.setSelected(false);
                }
                getIconNameWhenHover() {
                    return this.btnSelectedFocus.icon.getIconName();
                }
                setIconNameWhenHover(iconNameWhenHover) {
                    this.btnSelectedFocus.setIconName(iconNameWhenHover);
                    return this;
                }
                getIconNameWhenOff() {
                    return this.btnNotSelected.icon.getIconName();
                }
                setIconNameWhenOff(iconNameWhenOff) {
                    this.btnNotSelected.setIconName(iconNameWhenOff);
                    return this;
                }
                getIconNameWhenOn() {
                    return this.btnSelected.icon.getIconName();
                }
                setIconNameWhenOn(iconNameWhenOn) {
                    this.btnSelected.setIconName(iconNameWhenOn);
                    return this;
                }
                getLabelWhenHover() {
                    return this.btnSelectedFocus.label.getHtml();
                }
                setLabelWhenHover(labelWhenHover) {
                    this.btnSelectedFocus.setLabel(labelWhenHover);
                    return this;
                }
                getLabelWhenOff() {
                    return this.btnNotSelected.label.getHtml();
                }
                setLabelWhenOff(labelWhenOff) {
                    this.btnNotSelected.setLabel(labelWhenOff);
                    return this;
                }
                getLabelWhenOn() {
                    return this.btnSelected.label.getHtml();
                }
                setLabelWhenOn(labelWhenOn) {
                    this.btnSelected.setLabel(labelWhenOn);
                    return this;
                }
                setVariant$java_lang_String(variant) {
                    {
                        let array186 = /* Enum.values */ function () { let result = []; for (let val in com.spoonconsulting.lightning.Variant) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index185 = 0; index185 < array186.length; index185++) {
                            let v = array186[index185];
                            {
                                this.removeClass("slds-button_" + com.spoonconsulting.lightning.Variant["_$wrappers"][v].getValue());
                            }
                        }
                    }
                    if (variant != null && variant !== "")
                        this.addClass("slds-button_" + variant);
                    return this;
                }
                setVariant(variant) {
                    if (((typeof variant === 'string') || variant === null)) {
                        return this.setVariant$java_lang_String(variant);
                    }
                    else if (((typeof variant === 'number') || variant === null)) {
                        return this.setVariant$com_spoonconsulting_lightning_Variant(variant);
                    }
                    else
                        throw new Error('invalid overload');
                }
                setVariant$com_spoonconsulting_lightning_Variant(variant) {
                    return this.setVariant$java_lang_String(variant != null ? com.spoonconsulting.lightning.Variant["_$wrappers"][variant].getValue() : null);
                }
                setSelected(selected) {
                    this.selected = selected;
                    if (selected) {
                        this.addClass("slds-is-selected");
                        this.removeClass("slds-not-selected");
                    }
                    else {
                        this.addClass("slds-not-selected");
                        this.removeClass("slds-is-selected");
                    }
                    return this;
                }
                isSelected() {
                    return this.selected;
                }
                getBtnNotSelected() {
                    return this.btnNotSelected;
                }
                getBtnSelected() {
                    return this.btnSelected;
                }
                getSelectedFocus() {
                    return this.btnSelectedFocus;
                }
                focus() {
                    const elm = this.getElement();
                    if (elm != null) {
                        elm.focus();
                    }
                }
            }
            lightning.ButtonStateful = ButtonStateful;
            ButtonStateful["__class"] = "com.spoonconsulting.lightning.ButtonStateful";
            ButtonStateful["__interfaces"] = ["framework.components.api.Renderable"];
            (function (ButtonStateful) {
                class innerBtn extends JSContainer {
                    constructor(__parent, name) {
                        super(name, "span");
                        this.__parent = __parent;
                        this.icon = new com.spoonconsulting.lightning.Icon("icon", "utility:add");
                        this.label = new JSContainer("label", "span");
                        this.addClass("slds-text-" + name);
                        this.icon.removeClass("slds-icon");
                        this.addChild(this.label);
                        this.icon.addClass("slds-button__icon_stateful").addClass("slds-button__icon_left");
                    }
                    setLabel(label) {
                        this.label.setHtml(label);
                    }
                    setIconName(iconName) {
                        this.clearChildren();
                        if (iconName != null) {
                            this.addChild(this.icon.setIconName(iconName));
                        }
                        this.addChild(this.label);
                        this.setRendered(false);
                    }
                }
                ButtonStateful.innerBtn = innerBtn;
                innerBtn["__class"] = "com.spoonconsulting.lightning.ButtonStateful.innerBtn";
                innerBtn["__interfaces"] = ["framework.components.api.Renderable"];
                class ButtonStateful$0 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        this.__parent.setSelected(!this.__parent.isSelected());
                    }
                }
                ButtonStateful.ButtonStateful$0 = ButtonStateful$0;
                ButtonStateful$0["__interfaces"] = ["framework.components.api.EventListener"];
            })(ButtonStateful = lightning.ButtonStateful || (lightning.ButtonStateful = {}));
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class IconContainer extends com.spoonconsulting.lightning.BaseLightning {
                constructor(name, tag) {
                    super(name, tag);
                    this.icon = new com.spoonconsulting.lightning.Icon("icon", "utility:moneybag");
                    this.assistiveText = new JSContainer("assistive-text", "span");
                    this.addClass("slds-icon_container");
                    this.addChild(this.icon);
                    this.addChild(this.assistiveText);
                    this.assistiveText.addClass("slds-assistive-text");
                }
                setAssistiveText(txt) {
                    this.assistiveText.setHtml(txt);
                    return this;
                }
                getAssistiveText() {
                    return this.assistiveText.getHtml();
                }
                setIconName(iconName) {
                    this.icon.setIconName(iconName);
                    const parts = iconName.split(":");
                    this.setAttribute("class", "slds-icon_container " + /* replace */ /* replace */ "slds-icon-$0-$1".split("$0").join(parts[0]).split("$1").join(parts[1]));
                    return this;
                }
                getIcon() {
                    return this.icon;
                }
                setSize(size) {
                    this.icon.setSize$com_spoonconsulting_lightning_Size(size);
                    return this;
                }
            }
            lightning.IconContainer = IconContainer;
            IconContainer["__class"] = "com.spoonconsulting.lightning.IconContainer";
            IconContainer["__interfaces"] = ["framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class Menu extends com.spoonconsulting.lightning.BaseLightning {
                constructor(name) {
                    super(name, "ul");
                    this.addClass("slds-dropdown__list");
                    this.setAttribute("role", "menu");
                }
                /**
                 *
                 * @param {string} title
                 */
                setTitle(title) {
                    super.setTitle(title);
                    this.setAttribute("aria-label", title);
                }
                addMenuItem(item) {
                    const li = new JSContainer("", "li");
                    li.addClass("slds-dropdown__item").setAttribute("role", "presentation");
                    this.addChild(li);
                    li.addChild(item);
                    return this;
                }
                addMenuItems(...items) {
                    for (let index187 = 0; index187 < items.length; index187++) {
                        let item = items[index187];
                        {
                            this.addMenuItem(item);
                        }
                    }
                    return this;
                }
                addMenuDivider() {
                    this.addChild(new com.spoonconsulting.lightning.MenuDivider());
                    return this;
                }
            }
            lightning.Menu = Menu;
            Menu["__class"] = "com.spoonconsulting.lightning.Menu";
            Menu["__interfaces"] = ["framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class MenuItem extends com.spoonconsulting.lightning.BaseLightning {
                constructor(name) {
                    super(name, "a");
                    this.checked_ = new com.spoonconsulting.lightning.Icon("checked", "utility:check");
                    this.prefixIcon_ = new com.spoonconsulting.lightning.Icon("prefix-icon", "utility:table");
                    this.label = new JSContainer("label", "span");
                    this.span = new JSContainer("span");
                    this.icon_ = new com.spoonconsulting.lightning.Icon("icon", "utility:table");
                    this.draft_ = new JSContainer("draft", "abbr");
                    this.draftAlternativeText = null;
                    this.checked = false;
                    this.prefixIconName = null;
                    this.iconName = null;
                    if (this.value === undefined) {
                        this.value = null;
                    }
                    this.draft = false;
                    this.addChild(this.label);
                    this.setAttribute("role", "menuitem");
                    this.label.addChild(this.checked_);
                    this.label.addChild(this.span);
                    this.checked_.setSize$com_spoonconsulting_lightning_Size(com.spoonconsulting.lightning.Size.SMALL).addClass("slds-icon-text-default").addClass("slds-m-right_x-small").setAttribute("aria-hidden", "true").setAttribute("data-key", "check").setAttribute("focusable", "false");
                    this.span.addClass("slds-truncate");
                    this.icon_.setSize$com_spoonconsulting_lightning_Size(com.spoonconsulting.lightning.Size.SMALL);
                    this.icon_.addClass("slds-icon-text-default").addClass("slds-m-left_small").addClass("slds-shrink-none").setAttribute("aria-hidden", "true");
                    this.prefixIcon_.setSize$com_spoonconsulting_lightning_Size(com.spoonconsulting.lightning.Size.SMALL);
                    this.prefixIcon_.addClass("slds-icon-text-default").addClass("slds-m-left_small").addClass("slds-shrink-none").setAttribute("aria-hidden", "true").setAttribute("focusable", "false");
                    this.draft_.addClass("slds-indicator_unsaved").setHtml("*");
                }
                setLabel(label) {
                    this.span.setHtml(label);
                    this.label.setAttribute("title", label);
                    return this;
                }
                getLabel() {
                    return this.span.getHtml();
                }
                setChecked(b) {
                    this.checked = b;
                    return this.refresh();
                }
                getDraftAlternativeText() {
                    return this.draftAlternativeText;
                }
                setDraftAlternativeText(draftAlternativeText) {
                    this.draftAlternativeText = draftAlternativeText;
                    return this.refresh();
                }
                refresh() {
                    this.clearChildren();
                    this.label.clearChildren();
                    if (this.checked) {
                        this.label.addChild(this.checked_);
                    }
                    if (this.prefixIconName != null) {
                        this.prefixIcon_.setIconName(this.prefixIconName);
                        this.label.addChild(this.prefixIcon_);
                    }
                    if (this.draft) {
                        this.label.addChild(this.draft_);
                        this.draft_.setAttribute("title", this.draftAlternativeText);
                    }
                    this.label.addChild(this.span);
                    if (this.iconName != null && this.iconName !== "") {
                        this.addChild(this.icon_);
                        this.icon_.setIconName(this.iconName);
                    }
                    this.setRendered(false);
                    return this;
                }
                getDraft() {
                    return this.draft;
                }
                setDraft(draft) {
                    this.draft = draft;
                    return this.refresh();
                }
                isChecked() {
                    return this.checked;
                }
                /**
                 *
                 * @param {string} title
                 */
                setTitle(title) {
                    this.setLabel(title);
                }
                setDisabled(b) {
                    if (b) {
                        this.setAttribute("aria-disabled", "true");
                    }
                    else {
                        this.setAttribute("aria-disabled", null);
                    }
                    return this;
                }
                isDisabled() {
                    return "true" === this.getAttribute("aria-disabled");
                }
                setDownload(download) {
                    this.setAttribute("download", download);
                    return this;
                }
                getDownload() {
                    return this.getAttribute("download");
                }
                setHref(href) {
                    this.setAttribute("href", href);
                    return this;
                }
                getHref() {
                    return this.getAttribute("href");
                }
                setIconName(iconName) {
                    this.iconName = iconName;
                    return this.refresh();
                }
                getIconName() {
                    return this.iconName;
                }
                getPrefixIconName() {
                    return this.prefixIconName;
                }
                setPrefixIconName(prefixIconName) {
                    this.prefixIconName = prefixIconName;
                    return this.refresh();
                }
                setTabIndex(index) {
                    this.setAttribute("tabindex", index + "");
                    return this;
                }
                getTabIndex() {
                    if (this.getAttribute("tabindex") != null)
                        return /* parseInt */ parseInt(this.getAttribute("tabindex"));
                    return null;
                }
                setTarget(target) {
                    this.setAttribute("target", target);
                    return this;
                }
                getTarget() {
                    return this.getAttribute("target");
                }
                setValue(value) {
                    this.value = value;
                    return this;
                }
                getValue() {
                    return this.value;
                }
                click() {
                    const elem = this.getElement();
                    if (elem != null) {
                        elem.click();
                    }
                }
                focus() {
                    const elm = this.getElement();
                    if (elm != null) {
                        elm.focus();
                    }
                }
                blur() {
                    const elm = this.getElement();
                    if (elm != null) {
                        elm.blur();
                    }
                }
            }
            lightning.MenuItem = MenuItem;
            MenuItem["__class"] = "com.spoonconsulting.lightning.MenuItem";
            MenuItem["__interfaces"] = ["framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class Tab extends com.spoonconsulting.lightning.BaseLightning {
                constructor(name) {
                    super(name, "a");
                    this.endIconAlternariveText = null;
                    this.endIconName = null;
                    this.iconAssistiveText = null;
                    this.iconName = null;
                    this.showErrorIndicator = false;
                    if (this.value === undefined) {
                        this.value = null;
                    }
                    this.leftIconContainer = new com.spoonconsulting.lightning.IconContainer("left-icon-container", "div");
                    this.tabLeftIcon = new JSContainer("tab-left-icon", "span");
                    this.rightIconContainer = new com.spoonconsulting.lightning.IconContainer("right-icon-container", "div");
                    this.tabRightIcon = new JSContainer("tab-right-icon", "span");
                    this.errorIconContainer = new com.spoonconsulting.lightning.IconContainer("error-icon-container", "div");
                    this.tabErrorIcon = new JSContainer("tab-error-icon", "span");
                    this.label = new JSContainer("label", "span");
                    this.active = false;
                    this.addClass("slds-tabs_default__link");
                    this.setAttribute("role", "tab");
                    this.setAttribute("href", "javascript:void(0);");
                    this.addChild(this.label);
                    this.tabLeftIcon.addChild(this.leftIconContainer);
                    this.tabLeftIcon.addClass("slds-tabs__left-icon");
                    this.tabErrorIcon.addChild(this.errorIconContainer);
                    this.errorIconContainer.setIconName("utility:error");
                    this.tabErrorIcon.addClass("slds-tabs__right-icon");
                    this.tabRightIcon.addClass("slds-tabs__right-icon");
                    this.tabRightIcon.addChild(this.rightIconContainer);
                }
                getEndIconAlternariveText() {
                    return this.endIconAlternariveText;
                }
                setEndIconAlternariveText(endIconAlternariveText) {
                    this.endIconAlternariveText = endIconAlternariveText;
                    return this.refresh();
                }
                getEndIconName() {
                    return this.endIconName;
                }
                setEndIconName(endIconName) {
                    this.endIconName = endIconName;
                    return this.refresh();
                }
                getIconAssistiveText() {
                    return this.iconAssistiveText;
                }
                setIconAssistiveText(iconAssistiveText) {
                    this.iconAssistiveText = iconAssistiveText;
                    return this.refresh();
                }
                getIconName() {
                    return this.iconName;
                }
                setIconName(iconName) {
                    this.iconName = iconName;
                    return this.refresh();
                }
                getShowErrorIndicator() {
                    return this.showErrorIndicator;
                }
                setShowErrorIndicator(showErrorIndicator) {
                    this.showErrorIndicator = showErrorIndicator;
                    return this.refresh();
                }
                getValue() {
                    return this.value;
                }
                setValue(value) {
                    this.value = value;
                    return this;
                }
                getLabel() {
                    return this.label.getHtml();
                }
                setLabel(label) {
                    this.label.setHtml(label);
                    this.setAttribute("data-label", label);
                    return this;
                }
                isActive() {
                    return this.active;
                }
                setActive(active) {
                    if (this.active !== active) {
                        this.active = active;
                        if (active) {
                            if (this.getParent() != null) {
                                if (!this.getParent().hasClass("slds-is-active"))
                                    this.getParent().addClass("slds-is-active");
                            }
                            if (this.getAttribute("aria-selected") !== "true") {
                                this.setAttribute("aria-selected", "true");
                            }
                        }
                        else {
                            if (this.getParent() != null) {
                                if (this.getParent().hasClass("slds-is-active")) {
                                    this.getParent().removeClass("slds-is-active");
                                }
                            }
                            if (this.getAttribute("aria-selected") !== "false") {
                                this.setAttribute("aria-selected", "false");
                            }
                        }
                    }
                }
                refresh() {
                    this.clearChildren();
                    if (this.iconName != null && this.iconName !== "") {
                        this.addChild(this.tabLeftIcon);
                        this.leftIconContainer.setIconName(this.iconName);
                    }
                    this.addChild(this.label);
                    if (this.endIconName != null) {
                        this.addChild(this.tabRightIcon);
                        this.rightIconContainer.setIconName(this.endIconName);
                    }
                    if (this.showErrorIndicator) {
                        this.addChild(this.tabErrorIcon);
                    }
                    this.leftIconContainer.setAssistiveText(this.iconAssistiveText);
                    this.rightIconContainer.setAssistiveText(this.endIconAlternariveText);
                    return this;
                }
            }
            lightning.Tab = Tab;
            Tab["__class"] = "com.spoonconsulting.lightning.Tab";
            Tab["__interfaces"] = ["framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class TabPanel extends com.spoonconsulting.lightning.BaseLightning {
                constructor(name) {
                    super(name, "div");
                    this.addClass("slds-tabs_default__content");
                    this.setAttribute("role", "tabpanel");
                    this.addClass("slds-hide");
                }
                setActive(b) {
                    if (b && !this.isActive()) {
                        this.removeClass("slds-hide");
                        this.addClass("slds-show");
                    }
                    else if (this.isActive()) {
                        this.removeClass("slds-show");
                        this.addClass("slds-hide");
                    }
                    return this;
                }
                isActive() {
                    return this.hasClass("slds-show") && !this.hasClass("slds-hide");
                }
            }
            lightning.TabPanel = TabPanel;
            TabPanel["__class"] = "com.spoonconsulting.lightning.TabPanel";
            TabPanel["__interfaces"] = ["framework.components.api.Renderable"];
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class ComboBox extends com.spoonconsulting.lightning.FormElement {
                constructor(name) {
                    super(name, new com.spoonconsulting.lightning.BaseComboBox("combo"));
                    if (this.combo === undefined) {
                        this.combo = null;
                    }
                    this.messageWhenValueMissing = "This field is required";
                    this.combo = this.getInput();
                    this.combo.removeClass("slds-input");
                    this.combo.addEventListener(new ComboBox.ComboBox$0(this), "change");
                }
                setDisabled(b) {
                    this.combo.setDisabled(b);
                    return this;
                }
                isDisabled() {
                    return this.combo.isDisabled();
                }
                setDropdownAlignment(alignment) {
                    this.combo.setDropdownAlignment(alignment);
                    return this;
                }
                getDropdownAlignment() {
                    return this.combo.getDropdownAlignment();
                }
                getMessageWhenValueMissing() {
                    return this.messageWhenValueMissing;
                }
                setMessageWhenValueMissing(messageWhenValueMissing) {
                    this.messageWhenValueMissing = messageWhenValueMissing;
                }
                setOptions(options) {
                    this.combo.setOptions(options);
                    return this;
                }
                blur() {
                    this.combo.blur();
                }
                checkValidity() {
                    return this.combo.checkValidity();
                }
                setCustomValidity(message, type, description) {
                    this.combo.setCustomValidity(message, type, description);
                }
            }
            lightning.ComboBox = ComboBox;
            ComboBox["__class"] = "com.spoonconsulting.lightning.ComboBox";
            ComboBox["__interfaces"] = ["framework.components.api.InputField", "framework.components.api.Renderable"];
            (function (ComboBox) {
                class ComboBox$0 {
                    constructor(__parent) {
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        this.__parent.fireListener("change", evt);
                    }
                }
                ComboBox.ComboBox$0 = ComboBox$0;
                ComboBox$0["__interfaces"] = ["framework.components.api.EventListener"];
            })(ComboBox = lightning.ComboBox || (lightning.ComboBox = {}));
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class ButtonIcon extends com.spoonconsulting.lightning.Button {
                constructor(name, iconName) {
                    super(name);
                    this.setIconName(iconName);
                    this.label.addClass("slds-assistive-text");
                    this.addClass("slds-button_icon");
                }
                setAlternativeText(altText) {
                    this.setLabel(altText);
                    return this;
                }
                setIconClass(iconClass) {
                    this.icon.setAttribute("class", "slds-button__icon " + iconClass);
                    return this;
                }
                setSize$java_lang_String(size) {
                    {
                        let array189 = /* Enum.values */ function () { let result = []; for (let val in com.spoonconsulting.lightning.Size) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index188 = 0; index188 < array189.length; index188++) {
                            let s = array189[index188];
                            {
                                this.icon.removeClass("slds-button__icon_" + com.spoonconsulting.lightning.Size["_$wrappers"][s].getValue());
                            }
                        }
                    }
                    if (size != null) {
                        this.icon.addClass("slds-button__icon_" + size);
                    }
                    return this;
                }
                setSize(size) {
                    if (((typeof size === 'string') || size === null)) {
                        return this.setSize$java_lang_String(size);
                    }
                    else if (((typeof size === 'number') || size === null)) {
                        return this.setSize$com_spoonconsulting_lightning_Size(size);
                    }
                    else
                        throw new Error('invalid overload');
                }
                setSize$com_spoonconsulting_lightning_Size(size) {
                    return this.setSize$java_lang_String(size != null ? com.spoonconsulting.lightning.Size["_$wrappers"][size].getValue() : null);
                }
                setTooltip(tooltip) {
                    this.setTitle(tooltip);
                    return this;
                }
                /**
                 *
                 * @return {com.spoonconsulting.lightning.Button}
                 */
                refresh() {
                    super.refresh();
                    if (this.icon != null) {
                        this.icon.removeClass("slds-button__icon_right").removeClass("slds-button__icon_left");
                    }
                    return this;
                }
                setVariant$java_lang_String(variant) {
                    {
                        let array191 = /* Enum.values */ function () { let result = []; for (let val in com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index190 = 0; index190 < array191.length; index190++) {
                            let v = array191[index190];
                            {
                                this.removeClass("slds-button_icon-" + com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant["_$wrappers"][v].getValue());
                            }
                        }
                    }
                    this.addClass("slds-button_icon-" + variant);
                    return this;
                }
                setVariant(variant) {
                    if (((typeof variant === 'string') || variant === null)) {
                        return this.setVariant$java_lang_String(variant);
                    }
                    else if (((typeof variant === 'number') || variant === null)) {
                        return this.setVariant$com_spoonconsulting_lightning_ButtonIcon_ButtonIconVariant(variant);
                    }
                    else if (((typeof variant === 'number') || variant === null)) {
                        return super.setVariant(variant);
                    }
                    else if (((typeof variant === 'string') || variant === null)) {
                        return this.setVariant$java_lang_String(variant);
                    }
                    else
                        throw new Error('invalid overload');
                }
                setVariant$com_spoonconsulting_lightning_ButtonIcon_ButtonIconVariant(variant) {
                    return this.setVariant$java_lang_String(com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant["_$wrappers"][variant].getValue());
                }
                /**
                 *
                 * @param {string} label
                 * @return {com.spoonconsulting.lightning.Button}
                 */
                setLabel(label) {
                    this.getUILabel().setHtml(label);
                    return this;
                }
            }
            lightning.ButtonIcon = ButtonIcon;
            ButtonIcon["__class"] = "com.spoonconsulting.lightning.ButtonIcon";
            ButtonIcon["__interfaces"] = ["framework.components.api.Renderable"];
            (function (ButtonIcon) {
                let ButtonIconVariant;
                (function (ButtonIconVariant) {
                    ButtonIconVariant[ButtonIconVariant["BARE"] = 0] = "BARE";
                    ButtonIconVariant[ButtonIconVariant["CONTAINER"] = 1] = "CONTAINER";
                    ButtonIconVariant[ButtonIconVariant["BRAND"] = 2] = "BRAND";
                    ButtonIconVariant[ButtonIconVariant["BORDER"] = 3] = "BORDER";
                    ButtonIconVariant[ButtonIconVariant["BORDER_FILLED"] = 4] = "BORDER_FILLED";
                    ButtonIconVariant[ButtonIconVariant["BARE_INVERSE"] = 5] = "BARE_INVERSE";
                    ButtonIconVariant[ButtonIconVariant["BORDER_INVERSE"] = 6] = "BORDER_INVERSE";
                })(ButtonIconVariant = ButtonIcon.ButtonIconVariant || (ButtonIcon.ButtonIconVariant = {}));
                /** @ignore */
                class ButtonIconVariant_$WRAPPER {
                    constructor(_$ordinal, _$name, value) {
                        this._$ordinal = _$ordinal;
                        this._$name = _$name;
                        if (this.value === undefined) {
                            this.value = null;
                        }
                        this.value = value;
                    }
                    getValue() {
                        return this.value;
                    }
                    name() { return this._$name; }
                    ordinal() { return this._$ordinal; }
                    compareTo(other) { return this._$ordinal - (isNaN(other) ? other._$ordinal : other); }
                }
                ButtonIcon.ButtonIconVariant_$WRAPPER = ButtonIconVariant_$WRAPPER;
                ButtonIconVariant["__class"] = "com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant";
                ButtonIconVariant["__interfaces"] = ["java.lang.constant.Constable", "java.lang.Comparable", "java.io.Serializable"];
                ButtonIconVariant["_$wrappers"] = { 0: new ButtonIconVariant_$WRAPPER(0, "BARE", "bare"), 1: new ButtonIconVariant_$WRAPPER(1, "CONTAINER", "container"), 2: new ButtonIconVariant_$WRAPPER(2, "BRAND", "brand"), 3: new ButtonIconVariant_$WRAPPER(3, "BORDER", "border"), 4: new ButtonIconVariant_$WRAPPER(4, "BORDER_FILLED", "border-filled"), 5: new ButtonIconVariant_$WRAPPER(5, "BARE_INVERSE", "bare-inverse"), 6: new ButtonIconVariant_$WRAPPER(6, "BORDER_INVERSE", "border-inverse") };
            })(ButtonIcon = lightning.ButtonIcon || (lightning.ButtonIcon = {}));
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
(function (com) {
    var spoonconsulting;
    (function (spoonconsulting) {
        var lightning;
        (function (lightning) {
            class ButtonIconStateful extends com.spoonconsulting.lightning.ButtonIcon {
                constructor(name, iconName) {
                    super(name, iconName);
                }
                setSelected(b) {
                    if (b) {
                        this.addClass("slds-is-selected");
                    }
                    else {
                        this.removeClass("slds-is-selected");
                    }
                    return this;
                }
                isSelected() {
                    return this.hasClass("slds-is-selected");
                }
            }
            lightning.ButtonIconStateful = ButtonIconStateful;
            ButtonIconStateful["__class"] = "com.spoonconsulting.lightning.ButtonIconStateful";
            ButtonIconStateful["__interfaces"] = ["framework.components.api.Renderable"];
            (function (ButtonIconStateful) {
                let ButtonIconStatefulVariant;
                (function (ButtonIconStatefulVariant) {
                    ButtonIconStatefulVariant[ButtonIconStatefulVariant["BORDER"] = 0] = "BORDER";
                    ButtonIconStatefulVariant[ButtonIconStatefulVariant["BORDER_FILLED"] = 1] = "BORDER_FILLED";
                    ButtonIconStatefulVariant[ButtonIconStatefulVariant["BORDER_INVERSE"] = 2] = "BORDER_INVERSE";
                })(ButtonIconStatefulVariant = ButtonIconStateful.ButtonIconStatefulVariant || (ButtonIconStateful.ButtonIconStatefulVariant = {}));
                /** @ignore */
                class ButtonIconStatefulVariant_$WRAPPER {
                    constructor(_$ordinal, _$name, value) {
                        this._$ordinal = _$ordinal;
                        this._$name = _$name;
                        if (this.value === undefined) {
                            this.value = null;
                        }
                        this.value = value;
                    }
                    getValue() {
                        return this.value;
                    }
                    name() { return this._$name; }
                    ordinal() { return this._$ordinal; }
                    compareTo(other) { return this._$ordinal - (isNaN(other) ? other._$ordinal : other); }
                }
                ButtonIconStateful.ButtonIconStatefulVariant_$WRAPPER = ButtonIconStatefulVariant_$WRAPPER;
                ButtonIconStatefulVariant["__class"] = "com.spoonconsulting.lightning.ButtonIconStateful.ButtonIconStatefulVariant";
                ButtonIconStatefulVariant["__interfaces"] = ["java.lang.constant.Constable", "java.lang.Comparable", "java.io.Serializable"];
                ButtonIconStatefulVariant["_$wrappers"] = { 0: new ButtonIconStatefulVariant_$WRAPPER(0, "BORDER", "border"), 1: new ButtonIconStatefulVariant_$WRAPPER(1, "BORDER_FILLED", "border-filled"), 2: new ButtonIconStatefulVariant_$WRAPPER(2, "BORDER_INVERSE", "borde-inverse") };
            })(ButtonIconStateful = lightning.ButtonIconStateful || (lightning.ButtonIconStateful = {}));
        })(lightning = spoonconsulting.lightning || (spoonconsulting.lightning = {}));
    })(spoonconsulting = com.spoonconsulting || (com.spoonconsulting = {}));
})(com || (com = {}));
com.spoonconsulting.lightning.Boot.main(null);
