/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.spoonconsulting.lightning {
    export abstract class AbstractProgress extends JSContainer implements com.spoonconsulting.lightning.IProgress {
        public constructor(name: string, tag: string) {
            super(name, tag);
        }

        /**
         * 
         * @param {string} value
         * @return {*}
         */
        public getStep(value: string): com.spoonconsulting.lightning.IStep {
            {
                let array8637 = this.getSteps();
                for(let index8636=0; index8636 < array8637.length; index8636++) {
                    let step = array8637[index8636];
                    {
                        if (step.getValue() === value){
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
        public setCurrentStep(value: string): com.spoonconsulting.lightning.IProgress {
            let passedCurrent: boolean = false;
            {
                let array8639 = this.getSteps();
                for(let index8638=0; index8638 < array8639.length; index8638++) {
                    let step = array8639[index8638];
                    {
                        if (step.getValue() === value){
                            step.setCurrent(true);
                            passedCurrent = true;
                        } else {
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
        public getCurrentStep(): com.spoonconsulting.lightning.IStep {
            {
                let array8641 = this.getSteps();
                for(let index8640=0; index8640 < array8641.length; index8640++) {
                    let step = array8641[index8640];
                    {
                        if (step.isCurrent()){
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
        public setHasError(b: boolean): com.spoonconsulting.lightning.IProgress {
            const step: com.spoonconsulting.lightning.IStep = this.getCurrentStep();
            step.setHasError(b);
            return this;
        }

        /**
         * 
         * @return {boolean}
         */
        public getHasError(): boolean {
            {
                let array8643 = this.getSteps();
                for(let index8642=0; index8642 < array8643.length; index8642++) {
                    let step = array8643[index8642];
                    {
                        if (step.getHasError()){
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
        public setVariant(variant: string): com.spoonconsulting.lightning.IProgress {
            this.setAttribute("variant", variant);
            return this;
        }

        /**
         * 
         * @return {string}
         */
        public getVariant(): string {
            return this.getAttribute("variant");
        }

        /**
         * 
         * @param {*} step
         * @return {*}
         */
        public removeStep(step: com.spoonconsulting.lightning.IStep): com.spoonconsulting.lightning.IProgress {
            const parent: api.Renderable = step.getParent();
            parent.removeChild(step);
            parent.setRendered(false);
            return this;
        }

        /**
         * 
         * @param {string} value
         * @return {*}
         */
        public setValue(value: string): com.spoonconsulting.lightning.IProgress {
            this.setCurrentStep(value);
            return this;
        }

        /**
         * 
         * @return {string}
         */
        public getValue(): string {
            const current: com.spoonconsulting.lightning.IStep = this.getCurrentStep();
            if (current != null){
                return current.getValue();
            } else {
                return null;
            }
        }

        public abstract addStep(label?: any, value?: any): any;
        public abstract clearSteps(): any;
        public abstract getSteps(): any;    }
    AbstractProgress["__class"] = "com.spoonconsulting.lightning.AbstractProgress";
    AbstractProgress["__interfaces"] = ["framework.components.api.Renderable","com.spoonconsulting.lightning.IProgress"];


}
namespace com.spoonconsulting.lightning {
    export class Avatar extends JSContainer {
        /*private*/ img: JSContainer;

        /*private*/ fallbackIcon: com.spoonconsulting.lightning.Icon;

        /*private*/ iconContainer: JSContainer;

        /*private*/ initial: JSContainer;

        public static TYPE_IMAGE: string = "image";

        public static TYPE_INITIAL: string = "initial";

        public static TYPE_ICON: string = "icon";

        public static VARIANT_SQUARE: string = "square";

        public static VARIANT_CIRCLE: string = "circle";

        /*private*/ type: string;

        public constructor(name: string) {
            super(name, "span");
            this.img = new JSContainer("image", "img");
            this.fallbackIcon = new com.spoonconsulting.lightning.Icon("fallback-icon", "standard:user");
            this.iconContainer = new JSContainer("iconContainer", "span");
            this.initial = new JSContainer("initial", "abbr");
            if (this.type === undefined) { this.type = null; }
            this.addClass("slds-avatar");
            this.initial.addClass("slds-avatar__initials").addClass("slds-icon-standard-user");
            this.iconContainer.addClass("slds-icon_container").addClass("slds-icon-standard-account");
            this.iconContainer.addChild(this.fallbackIcon);
            this.setType(Avatar.TYPE_IMAGE);
        }

        public setType(type: string): Avatar {
            this.clearChildren();
            if (type === Avatar.TYPE_IMAGE){
                this.addChild(this.img);
            } else if (type === Avatar.TYPE_ICON){
                this.addChild(this.iconContainer);
            } else if (type === Avatar.TYPE_INITIAL){
                this.addChild(this.initial);
            }
            this.setRendered(false);
            return this;
        }

        public getType(): string {
            return this.type;
        }

        public setVariant(type: string): Avatar {
            this.removeClass("slds-avatar_" + Avatar.VARIANT_CIRCLE).removeClass("slds-avatar_" + Avatar.VARIANT_SQUARE).addClass("slds-avatar_" + type);
            return this;
        }

        public getVariant(): string {
            if (this.hasClass("slds-avatar_" + Avatar.VARIANT_CIRCLE)){
                return Avatar.VARIANT_CIRCLE;
            } else {
                return Avatar.VARIANT_SQUARE;
            }
        }

        public setSize(size: com.spoonconsulting.lightning.Size): Avatar {
            {
                let array8645 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.Size[] = []; for(let val in com.spoonconsulting.lightning.Size) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index8644=0; index8644 < array8645.length; index8644++) {
                    let s = array8645[index8644];
                    {
                        this.removeClass("slds-avatar_" + com.spoonconsulting.lightning.Size["_$wrappers"][s].getValue());
                    }
                }
            }
            this.addClass("slds-avatar_" + com.spoonconsulting.lightning.Size["_$wrappers"][size].getValue());
            return this;
        }

        public setTitle(title: string): Avatar {
            this.img.setAttribute("title", title);
            this.initial.setAttribute("title", title);
            this.fallbackIcon.setAttribute("title", title);
            return this;
        }

        public getInitials(): string {
            return this.initial.getHtml();
        }

        public setInitials(initials: string): Avatar {
            this.initial.setHtml(initials);
            return this;
        }

        public getFallbackIconName(): string {
            return this.fallbackIcon.getIconName();
        }

        public setFallbackIconName(fallbackIconName: string): Avatar {
            this.fallbackIcon.setIconName(fallbackIconName);
            return this;
        }

        public setSrc(src: string): Avatar {
            this.img.setAttribute("src", src);
            return this;
        }

        public getSrc(): string {
            return this.img.getAttribute("src");
        }

        public getImg(): JSContainer {
            return this.img;
        }

        public getFallbackIcon(): com.spoonconsulting.lightning.Icon {
            return this.fallbackIcon;
        }

        public getInitial(): JSContainer {
            return this.initial;
        }

        public setAlternativeText(altText: string): Avatar {
            this.img.setAttribute("alt", altText);
            this.img.setAttribute("title", altText);
            return this;
        }

        public getAlternativeText(): string {
            return this.img.getAttribute("alt");
        }
    }
    Avatar["__class"] = "com.spoonconsulting.lightning.Avatar";
    Avatar["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class BaseComboBox extends JSContainer implements api.InputField<string> {
        /*private*/ combobox: JSContainer;

        /*private*/ formElement: JSContainer;

        /*private*/ input: input.JSTextInput;

        /*private*/ dropdown: com.spoonconsulting.lightning.ListBox;

        /*private*/ inputIconContainer: JSContainer;

        /*private*/ inputIcon: com.spoonconsulting.lightning.IconContainer;

        public static DROPDOWN_ALIGNMENT_BOTTOM_LEFT: string = "bottom-left";

        public static DROPDOWN_ALIGNMENT_TOP_LEFT: string = "top-left";

        public constructor(name: string) {
            super(name, "div");
            this.combobox = new JSContainer("combobox", "div");
            this.formElement = new JSContainer("formElement", "div");
            this.input = new input.JSTextInput("input");
            this.dropdown = new com.spoonconsulting.lightning.ListBox("dropdown");
            this.inputIconContainer = new JSContainer("input-icon-container", "div");
            this.inputIcon = new com.spoonconsulting.lightning.IconContainer("input-icon", "div");
            this.addClass("slds-combobox_container");
            this.addChild(this.combobox);
            this.combobox.addClass("slds-combobox").addClass("slds-dropdown-trigger").addClass("slds-dropdown-trigger_click").setAttribute("aria-expanded", "false").setAttribute("aria-haspopup", "listbox").setAttribute("role", "combobox");
            this.combobox.addChild(this.formElement);
            this.formElement.setAttribute("role", "none").addClass("slds-combobox__form-element").addClass("slds-input-has-icon").addClass("slds-input-has-icon_right");
            this.input.addClass("slds-input").addClass("slds-combobox__input").setAttribute("role", "textbox").setAttribute("autocomplete", "off").setAttribute("aria-autocomplete", "none").setAttribute("readonly", "true");
            this.formElement.addChild(this.input);
            this.inputIconContainer.addClass("slds-input__icon-group").addClass("slds-input__icon-group_right");
            this.inputIcon.setIconName("utility:down");
            this.inputIcon.addClass("slds-input__icon").addClass("slds-input__icon_right");
            this.inputIcon.setSize(com.spoonconsulting.lightning.Size.EXTRA_EXTRA_SMALL);
            this.inputIcon.getIcon().addClass("slds-icon-text-default");
            this.inputIconContainer.addChild(this.inputIcon);
            this.formElement.addChild(this.inputIconContainer);
            this.combobox.addChild(this.dropdown);
            this.dropdown.addEventListener(new BaseComboBox.BaseComboBox$0(this), "onchange");
            this.input.addEventListener(new BaseComboBox.BaseComboBox$1(this), "click");
        }

        public setOptions(options: Array<Object>): BaseComboBox {
            this.dropdown.setOptions(options);
            return this;
        }

        public toggleDropdown() {
            this.setExpand(!this.isExpanded());
        }

        public isExpanded(): boolean {
            return this.combobox.getAttribute("aria-expanded") === "true";
        }

        public setExpand(b: boolean): BaseComboBox {
            if (b){
                this.combobox.setAttribute("aria-expanded", "true");
                this.combobox.addClass("slds-is-open");
                this.dropdown.addClass("slds-dropdown_length_with-icon-7");
            } else {
                this.combobox.setAttribute("aria-expanded", "false");
                this.combobox.removeClass("slds-is-open");
                this.dropdown.removeClass("slds-dropdown_length_with-icon-7");
            }
            return this;
        }

        /**
         * 
         * @return {string}
         */
        public getValue(): string {
            return this.input.getValue();
        }

        /**
         * 
         * @param {string} val
         */
        public setValue(val: string) {
            this.input.setValue(val);
            this.dropdown.setValue(val);
        }

        /**
         * 
         */
        public validate() {
            this.input.validate();
        }

        /**
         * 
         * @return {string}
         */
        public getBinding(): string {
            return this.getAttribute("binding");
        }

        /**
         * 
         * @param {string} binding
         * @return {*}
         */
        public setBinding(binding: string): api.InputField<string> {
            this.setAttribute("binding", binding);
            return this;
        }

        /**
         * 
         * @param {boolean} b
         * @return {*}
         */
        public setRequired(b: boolean): api.InputField<string> {
            this.input.setRequired(b);
            return this;
        }

        public setDisabled(b: boolean): BaseComboBox {
            this.input.setDisabled(b);
            return this;
        }

        public isDisabled(): boolean {
            return this.input.getAttribute("disabled") === "true";
        }

        public setDropdownAlignment(alignment: string): BaseComboBox {
            if (alignment === BaseComboBox.DROPDOWN_ALIGNMENT_BOTTOM_LEFT){
                this.dropdown.addClass("slds-dropdown_bottom").addClass("slds-dropdown_bottom-left");
            } else {
                this.dropdown.removeClass("slds-dropdown_bottom").removeClass("slds-dropdown_bottom-left");
            }
            return this;
        }

        public getDropdownAlignment(): string {
            return this.dropdown.hasClass("slds-dropdown_bottom") ? BaseComboBox.DROPDOWN_ALIGNMENT_BOTTOM_LEFT : BaseComboBox.DROPDOWN_ALIGNMENT_TOP_LEFT;
        }

        public blur() {
            const __in: HTMLInputElement = <HTMLInputElement>this.input.getElement();
            if (__in != null)__in.blur();
        }

        public checkValidity(): boolean {
            const __in: HTMLInputElement = <HTMLInputElement>this.input.getElement();
            if (__in != null){
                return __in.checkValidity();
            }
            return null;
        }

        public setCustomValidity(message: string, type: string, description: string): BaseComboBox {
            const __in: HTMLInputElement = <HTMLInputElement>this.input.getElement();
            if (__in != null)__in.setCustomValidity(message);
            return this;
        }
    }
    BaseComboBox["__class"] = "com.spoonconsulting.lightning.BaseComboBox";
    BaseComboBox["__interfaces"] = ["framework.components.api.InputField","framework.components.api.Renderable"];



    export namespace BaseComboBox {

        export class BaseComboBox$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.fireListener("onchange", evt);
                const val: string = this.__parent.dropdown.getValue();
                this.__parent.input.setValue(val);
                this.__parent.setExpand(false);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        BaseComboBox$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class BaseComboBox$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.toggleDropdown();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        BaseComboBox$1["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace com.spoonconsulting.lightning {
    export class BaseLightning extends JSContainer {
        public constructor(name: string, tag: string) {
            super(name, tag);
        }

        public setTitle(title: string) {
            this.setAttribute("title", title);
        }

        public getTitle(): string {
            return this.getAttribute("title");
        }
    }
    BaseLightning["__class"] = "com.spoonconsulting.lightning.BaseLightning";
    BaseLightning["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class Boot {
        public static main(args: string[]) {
            const app: JSContainer = new JSContainer("app", "div");
            app.addClass("slds-card");
            app.addChild(Boot.getVerticalMenu());
            app.render();
        }

        /*private*/ static getExampleTab(example: JSContainer): com.spoonconsulting.lightning.TabSet {
            const ts: com.spoonconsulting.lightning.TabSet = new com.spoonconsulting.lightning.TabSet("ts");
            const tab: com.spoonconsulting.lightning.Tab = new com.spoonconsulting.lightning.Tab("example");
            tab.setLabel("Example");
            const content: com.spoonconsulting.lightning.TabPanel = new com.spoonconsulting.lightning.TabPanel("content");
            content.addChild(example);
            const source: com.spoonconsulting.lightning.Tab = new com.spoonconsulting.lightning.Tab("source");
            source.setLabel("Source");
            const pnSource: com.spoonconsulting.lightning.TabPanel = new com.spoonconsulting.lightning.TabPanel("source");
            pnSource.addChild(new JSContainer("ss", "h3").setHtml("Source comes here"));
            ts.addTab(tab, content).addTab(source, pnSource);
            return ts;
        }

        /*private*/ static getAccordionSample(): JSContainer {
            const accordion: com.spoonconsulting.lightning.Accordion = new com.spoonconsulting.lightning.Accordion("acc");
            const section1: com.spoonconsulting.lightning.AccordionSection = new com.spoonconsulting.lightning.AccordionSection("section1");
            const section2: com.spoonconsulting.lightning.AccordionSection = new com.spoonconsulting.lightning.AccordionSection("section2");
            accordion.addSections(section1, section2);
            section1.setTitle("Section 1");
            section2.setTitle("Section 2");
            section1.getContent().addChild(new JSContainer("h1").setHtml("Section 1 in accordion"));
            section2.getContent().addChild(new JSContainer("h1").setHtml("Section 2 in accordion"));
            accordion.setAllowMultipleSectionOpen(true);
            accordion.setActiveSectionName("section2");
            return accordion;
        }

        /*private*/ static getSampleCOmbo(): JSContainer {
            const card: JSContainer = new JSContainer("card", "div").addClass("slds-card").setStyle("height", "300px");
            const box: com.spoonconsulting.lightning.ComboBox = new com.spoonconsulting.lightning.ComboBox("cb");
            const options: Array<Object> = <any>(new Array<Object>());
            for(let i: number = 0; i < 5; i++) {{
                const opt: Object = {};
                opt["value"] = i + "";
                opt["label"] = "Label " + i;
                options.push(opt);
            };}
            box.setOptions(options);
            box.setLabel("This is a label");
            box.setHelp("This is a help");
            card.addChild(box);
            return card;
        }

        /*private*/ static getPathSample(): JSContainer {
            const app: JSContainer = new JSContainer("div");
            const indicator: com.spoonconsulting.lightning.ProgressIndicator = new com.spoonconsulting.lightning.ProgressIndicator("pi");
            indicator.setType("base");
            for(let i: number = 1; i <= 4; i++) {{
                indicator.addStep("Step " + i, i + "");
            };}
            indicator.setCurrentStep("3");
            indicator.setHasError(true);
            app.addChild(indicator);
            const toggle: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("toggle").setLabel("Toggle");
            toggle.addEventListener(new Boot.Boot$0(indicator), "click");
            app.addChild(toggle);
            return app;
        }

        /*private*/ static addVerticalTab(title: string, sample: JSContainer, verticalMenu: com.spoonconsulting.lightning.TabSet) {
            const tab: com.spoonconsulting.lightning.Tab = new com.spoonconsulting.lightning.Tab(title);
            tab.setLabel(title);
            const panel: com.spoonconsulting.lightning.TabPanel = new com.spoonconsulting.lightning.TabPanel("panel");
            panel.setStyle("width", "100%");
            panel.addChild(Boot.getExampleTab(sample));
            verticalMenu.addTab(tab, panel);
        }

        public static getVerticalMenu(): com.spoonconsulting.lightning.TabSet {
            const set: com.spoonconsulting.lightning.TabSet = new com.spoonconsulting.lightning.TabSet("menu");
            set.setVariant$com_spoonconsulting_lightning_TabSet_TabSetVariant(com.spoonconsulting.lightning.TabSet.TabSetVariant.VERTICAL);
            Boot.addVerticalTab("Accordion", Boot.getAccordionSample(), set);
            Boot.addVerticalTab("Paths", Boot.getPathSample(), set);
            Boot.addVerticalTab("Combo box", Boot.getSampleCOmbo(), set);
            return set;
        }
    }
    Boot["__class"] = "com.spoonconsulting.lightning.Boot";


    export namespace Boot {

        export class Boot$0 implements api.EventListener {
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const type: string = this.indicator.getType();
                if (type === "base"){
                    this.indicator.setType("path");
                } else {
                    this.indicator.setType("base");
                }
            }

            constructor(private indicator: any) {
            }
        }
        Boot$0["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace com.spoonconsulting.lightning {
    export class Breadcrumb extends JSContainer {
        public constructor(name: string) {
            super(name, "a");
        }

        public setHref(href: string): Breadcrumb {
            this.setAttribute("href", href);
            return this;
        }

        public setLabel(label: string): Breadcrumb {
            this.setHtml(label);
            return this;
        }

        public getHref(): string {
            return this.getAttribute("href");
        }

        public getLabel(): string {
            return this.getHtml();
        }

        public focus() {
            const a: HTMLElement = this.getElement();
            if (a != null)a.focus();
        }

        public blur() {
            const elem: HTMLElement = this.getElement();
            if (elem != null)elem.blur();
        }
    }
    Breadcrumb["__class"] = "com.spoonconsulting.lightning.Breadcrumb";
    Breadcrumb["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class Breadcrumbs extends JSContainer {
        public constructor(name: string) {
            super(name, "ol");
            this.addClass("slds-breadcrumb").addClass("slds-list_horizontal").addClass("slds-wrap");
        }

        public addBreadcrumb(breadcrumb: com.spoonconsulting.lightning.Breadcrumb): Breadcrumbs {
            const li: JSContainer = new JSContainer("li");
            li.addClass("slds-breadcrumb__item");
            this.addChild(li);
            li.addChild(breadcrumb);
            return this;
        }

        public getBreadcrumbs(): Array<com.spoonconsulting.lightning.Breadcrumb> {
            const result: Array<com.spoonconsulting.lightning.Breadcrumb> = <any>(new Array<com.spoonconsulting.lightning.Breadcrumb>());
            {
                let array8647 = this.getChildren();
                for(let index8646=0; index8646 < array8647.length; index8646++) {
                    let r = array8647[index8646];
                    {
                        const bc: com.spoonconsulting.lightning.Breadcrumb = <com.spoonconsulting.lightning.Breadcrumb><any>r.getChildren()[0];
                        result.push(bc);
                    }
                }
            }
            return result;
        }

        public getBreadcrumb(name: string): com.spoonconsulting.lightning.Breadcrumb {
            {
                let array8649 = this.getChildren();
                for(let index8648=0; index8648 < array8649.length; index8648++) {
                    let r = array8649[index8648];
                    {
                        const bc: com.spoonconsulting.lightning.Breadcrumb = <com.spoonconsulting.lightning.Breadcrumb><any>r.getChildren()[0];
                        if (bc.getName() === name){
                            return bc;
                        }
                    }
                }
            }
            return null;
        }
    }
    Breadcrumbs["__class"] = "com.spoonconsulting.lightning.Breadcrumbs";
    Breadcrumbs["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class Dropdown extends JSContainer {
        /*private*/ menu: com.spoonconsulting.lightning.Menu;

        /*private*/ spinnerContainer: JSContainer;

        /*private*/ spinner: com.spoonconsulting.lightning.Spinner;

        /*private*/ isLoading: boolean;

        public constructor(name: string) {
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

        public getIsLoading(): boolean {
            return this.isLoading;
        }

        public setIsLoading(isLoading: boolean): Dropdown {
            this.isLoading = isLoading;
            if (isLoading){
                this.clearChildren();
                this.addChild(this.spinnerContainer);
            } else {
                this.clearChildren();
                this.addChild(this.menu);
            }
            this.setRendered(false);
            return this;
        }

        public addItem(item: com.spoonconsulting.lightning.MenuItem): Dropdown {
            this.menu.addMenuItem(item);
            return this;
        }

        public addMenuDivider(): Dropdown {
            this.menu.addMenuDivider();
            return this;
        }

        public getSpinner(): com.spoonconsulting.lightning.Spinner {
            return this.spinner;
        }
    }
    Dropdown["__class"] = "com.spoonconsulting.lightning.Dropdown";
    Dropdown["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class FormElement<T> extends JSContainer implements api.InputField<T> {
        /*private*/ labelCtn: JSContainer;

        /*private*/ required: JSContainer;

        /*private*/ label: JSContainer;

        /*private*/ controlCtn: JSContainer;

        /*private*/ input: api.InputField<T>;

        /*private*/ value: T;

        /*private*/ formElementIcon: JSContainer;

        /*private*/ fieldLevelHelp: com.spoonconsulting.lightning.Help;

        /*private*/ help: JSContainer;

        /*private*/ variant: FormElement.FormElementVariant;

        public constructor(name: string, input: api.InputField<T>) {
            super(name, "div");
            this.labelCtn = new JSContainer("label-ctn", "label");
            this.required = new JSContainer("required", "abbr");
            this.label = new JSContainer("label", "span");
            this.controlCtn = new JSContainer("control-ctn", "div");
            if (this.input === undefined) { this.input = null; }
            if (this.value === undefined) { this.value = null; }
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

        public setRequired(b: boolean): FormElement<T> {
            this.required.setStyle("display", b ? null : "none");
            return this;
        }

        public setLabel(label: string): FormElement<T> {
            this.label.setHtml(label);
            return this;
        }

        public setFieldLevelHelp(help: string): FormElement<T> {
            if (help != null){
                this.formElementIcon.setStyle("display", null);
                this.fieldLevelHelp.setContent(help);
            } else {
                this.formElementIcon.setStyle("display", "none");
            }
            return this;
        }

        public setInput(input: api.InputField<T>): FormElement<T> {
            input.addClass("slds-input");
            this.controlCtn.clearChildren();
            this.controlCtn.setRendered(false);
            this.controlCtn.addChild(input);
            this.input = input;
            if (this.value != null){
                this.setValue(this.value);
            }
            return this;
        }

        getRequired(): JSContainer {
            return this.required;
        }

        public getLabel(): JSContainer {
            return this.label;
        }

        getInput(): api.InputField<T> {
            return this.input;
        }

        /**
         * 
         * @return {*}
         */
        public getValue(): T {
            return this.input.getValue();
        }

        /**
         * 
         * @param {*} val
         */
        public setValue(val: T) {
            this.value = val;
            this.input.setValue(val);
        }

        /**
         * 
         */
        public validate() {
            this.input.validate();
        }

        /**
         * 
         * @return {string}
         */
        public getBinding(): string {
            return this.getName();
        }

        /**
         * 
         * @param {string} binding
         * @return {*}
         */
        public setBinding(binding: string): api.InputField<T> {
            this.setName(binding);
            return this;
        }

        public setDisabled(b: boolean): FormElement<T> {
            this.input.setAttribute("disabled", b ? "disabled" : null);
            return this;
        }

        public setError(error: string): FormElement<T> {
            this.addClass("slds-has-error");
            this.help.setStyle("display", null).setHtml(error);
            return this;
        }

        public clearError(): FormElement<T> {
            this.removeClass("slds-has-error");
            return this;
        }

        public setHelp(help: string): FormElement<T> {
            this.help.setStyle("display", null);
            this.help.setHtml(help);
            return this;
        }

        public setShowHelp(b: boolean): FormElement<T> {
            this.help.setStyle("display", b ? null : "none");
            return this;
        }

        public setVariant$com_spoonconsulting_lightning_FormElement_FormElementVariant(variant: FormElement.FormElementVariant): FormElement<T> {
            this.variant = variant;
            this.removeClass("slds-form-element_horizontal");
            this.removeClass("slds-form-element_stacked");
            this.labelCtn.removeClass("slds-assistive-text");
            if (variant === FormElement.FormElementVariant.LABEL_INLINE){
                this.addClass("slds-form-element_horizontal");
            } else if (variant === FormElement.FormElementVariant.LABEL_STACKED){
                this.addClass("slds-form-element_stacked");
            } else if (variant === FormElement.FormElementVariant.LABEL_HIDDEN){
                this.labelCtn.addClass("slds-assistive-text");
            }
            return this;
        }

        public setVariant(variant?: any): any {
            if (((typeof variant === 'number') || variant === null)) {
                return <any>this.setVariant$com_spoonconsulting_lightning_FormElement_FormElementVariant(variant);
            } else if (((typeof variant === 'string') || variant === null)) {
                return <any>this.setVariant$java_lang_String(variant);
            } else throw new Error('invalid overload');
        }

        public setVariant$java_lang_String(variant: string): FormElement<T> {
            if (variant != null){
                if (variant === com.spoonconsulting.lightning.FormElement.FormElementVariant["_$wrappers"][FormElement.FormElementVariant.LABEL_HIDDEN].value){
                    this.setVariant$com_spoonconsulting_lightning_FormElement_FormElementVariant(FormElement.FormElementVariant.LABEL_HIDDEN);
                } else if (variant === com.spoonconsulting.lightning.FormElement.FormElementVariant["_$wrappers"][FormElement.FormElementVariant.LABEL_INLINE].value){
                    this.setVariant$com_spoonconsulting_lightning_FormElement_FormElementVariant(FormElement.FormElementVariant.LABEL_INLINE);
                } else if (variant === com.spoonconsulting.lightning.FormElement.FormElementVariant["_$wrappers"][FormElement.FormElementVariant.LABEL_STACKED].value){
                    this.setVariant$com_spoonconsulting_lightning_FormElement_FormElementVariant(FormElement.FormElementVariant.LABEL_STACKED);
                } else {
                    this.setVariant$com_spoonconsulting_lightning_FormElement_FormElementVariant(FormElement.FormElementVariant.STANDARD);
                }
            } else {
                this.setVariant$com_spoonconsulting_lightning_FormElement_FormElementVariant(FormElement.FormElementVariant.STANDARD);
            }
            return this;
        }

        public getVariant(): string {
            if (this.variant != null)return com.spoonconsulting.lightning.FormElement.FormElementVariant["_$wrappers"][this.variant].value;
            return com.spoonconsulting.lightning.FormElement.FormElementVariant["_$wrappers"][FormElement.FormElementVariant.STANDARD].value;
        }
    }
    FormElement["__class"] = "com.spoonconsulting.lightning.FormElement";
    FormElement["__interfaces"] = ["framework.components.api.InputField","framework.components.api.Renderable"];



    export namespace FormElement {

        export enum FormElementVariant {
            STANDARD, LABEL_HIDDEN, LABEL_INLINE, LABEL_STACKED
        }

        /** @ignore */
        export class FormElementVariant_$WRAPPER {
            value;

            constructor(protected _$ordinal: number, protected _$name: string, value) {
                if (this.value === undefined) { this.value = null; }
                this.value = value;
            }

            public getValue(): string {
                return this.value;
            }
            public name(): string { return this._$name; }
            public ordinal(): number { return this._$ordinal; }
            public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
        }
        FormElementVariant["__class"] = "com.spoonconsulting.lightning.FormElement.FormElementVariant";
        FormElementVariant["__interfaces"] = ["java.lang.constant.Constable","java.lang.Comparable","java.io.Serializable"];

        FormElementVariant["_$wrappers"] = {0: new FormElementVariant_$WRAPPER(0, "STANDARD", "standard"), 1: new FormElementVariant_$WRAPPER(1, "LABEL_HIDDEN", "label-hidden"), 2: new FormElementVariant_$WRAPPER(2, "LABEL_INLINE", "label-inline"), 3: new FormElementVariant_$WRAPPER(3, "LABEL_STACKED", "label-stacked")};

    }

}
namespace com.spoonconsulting.lightning {
    export class GlobalConfigs {
        public static BASE_ASSETS: string = "/webjars/salesforce-lightning-design-system/2.13.3";
    }
    GlobalConfigs["__class"] = "com.spoonconsulting.lightning.GlobalConfigs";

}
namespace com.spoonconsulting.lightning {
    export class Help extends JSContainer {
        /*private*/ icon: com.spoonconsulting.lightning.ButtonIcon;

        public constructor(name: string) {
            super(name, "div");
            this.icon = new com.spoonconsulting.lightning.ButtonIcon("icon", "utility:info");
            this.addChild(this.icon);
        }

        public setContent(content: string): Help {
            this.setAttribute("title", content);
            return this;
        }
    }
    Help["__class"] = "com.spoonconsulting.lightning.Help";
    Help["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class Icon extends JSContainer {
        /*private*/ iconName: string;

        public constructor(name: string, iconName: string) {
            super(iconName, "svg");
            if (this.iconName === undefined) { this.iconName = null; }
            this.addClass("slds-icon");
            this.setAttribute("focusable", "false");
            this.setAttribute("aria-hidden", "true");
            this.setIconName(iconName);
        }

        /*private*/ setIcon(group: string, name: string): Icon {
            let html: string = "<use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"$base-assets/icons/" + group + "-sprite/svg/symbols.svg#" + name + "\"></use>";
            html = /* replace */html.split("$base-assets").join(com.spoonconsulting.lightning.GlobalConfigs.BASE_ASSETS);
            this.setHtml(html);
            return this;
        }

        public setIconName(iconName: string): Icon {
            this.iconName = iconName;
            this.setIcon(iconName.split(":")[0], iconName.split(":")[1]);
            return this;
        }

        public getIconName(): string {
            return this.iconName;
        }

        public setSize$java_lang_String(size: string): Icon {
            {
                let array8651 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.Size[] = []; for(let val in com.spoonconsulting.lightning.Size) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index8650=0; index8650 < array8651.length; index8650++) {
                    let s = array8651[index8650];
                    {
                        this.removeClass("slds-icon_" + com.spoonconsulting.lightning.Size["_$wrappers"][s].getValue());
                    }
                }
            }
            if (size != null)this.addClass("slds-icon_" + size);
            return this;
        }

        public setSize(size?: any): any {
            if (((typeof size === 'string') || size === null)) {
                return <any>this.setSize$java_lang_String(size);
            } else if (((typeof size === 'number') || size === null)) {
                return <any>this.setSize$com_spoonconsulting_lightning_Size(size);
            } else throw new Error('invalid overload');
        }

        public setSize$com_spoonconsulting_lightning_Size(size: com.spoonconsulting.lightning.Size): Icon {
            if (size != null)return this.setSize$java_lang_String(com.spoonconsulting.lightning.Size["_$wrappers"][size].getValue()); else return this.setSize$java_lang_String(<string>null);
        }
    }
    Icon["__class"] = "com.spoonconsulting.lightning.Icon";
    Icon["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export interface IProgress extends api.Renderable {
        setCurrentStep(value: string): IProgress;

        getCurrentStep(): com.spoonconsulting.lightning.IStep;

        setHasError(b: boolean): IProgress;

        getHasError(): boolean;

        setVariant(variant: string): IProgress;

        getVariant(): string;

        addStep(label: string, value: string): IProgress;

        getSteps(): Array<com.spoonconsulting.lightning.IStep>;

        getStep(value: string): com.spoonconsulting.lightning.IStep;

        clearSteps(): IProgress;

        removeStep(step: com.spoonconsulting.lightning.IStep): IProgress;

        setValue(value: string): IProgress;

        getValue(): string;
    }
}
namespace com.spoonconsulting.lightning {
    export interface IStep extends api.Renderable {
        setLabel(label: string): IStep;

        getLabel(): string;

        setActive(b: boolean): IStep;

        setComplete(b: boolean): IStep;

        setCurrent(b: boolean): IStep;

        isCurrent(): boolean;

        setHasError(b: boolean): IStep;

        getHasError(): boolean;

        isComplete(): boolean;

        isActive(): boolean;

        setValue(value: string): IStep;

        getValue(): string;
    }
}
namespace com.spoonconsulting.lightning {
    export class Layout extends JSContainer {
        public static HORIZONTAL_ALIGN_CENTER: string = "center";

        public static HORIZONTAL_ALIGN_SPACE: string = "space";

        public static HORIZONTAL_ALIGN_SPREAD: string = "spread";

        public static HORIZONTAL_ALIGN_END: string = "end";

        public static VERTICAL_ALIGN_START: string = "start";

        public static VERTICAL_ALIGN_CENTER: string = "center";

        public static VERTICAL_ALIGN_END: string = "end";

        public static VERTICAL_ALIGN_STRETCH: string = "stretch";

        public static PULL_TO_BOUNDARY_SMALL: string = "small";

        public static PULL_TO_BOUNDARY_MEDIUM: string = "medium";

        public static PULL_TO_BOUNDARY_LARGE: string = "large";

        /*private*/ multipleRows: boolean;

        /*private*/ horizontalAlign: string;

        /*private*/ pullToBoundary: string;

        /*private*/ verticalAlign: string;

        public constructor(name: string, tag: string) {
            super(name, tag);
            this.multipleRows = false;
            this.horizontalAlign = null;
            this.pullToBoundary = null;
            this.verticalAlign = null;
            this.addClass("slds-grid");
        }

        public isMultipleRows(): boolean {
            return this.multipleRows;
        }

        public setMultipleRows(multipleRows: boolean): Layout {
            this.multipleRows = multipleRows;
            return this.refresh();
        }

        public getHorizontalAlign(): string {
            return this.horizontalAlign;
        }

        public setHorizontalAlign(horizontalAlign: string): Layout {
            this.horizontalAlign = horizontalAlign;
            return this.refresh();
        }

        public getPullToBoundary(): string {
            return this.pullToBoundary;
        }

        public setPullToBoundary(pullToBoundary: string): Layout {
            this.pullToBoundary = pullToBoundary;
            return this.refresh();
        }

        public getVerticalAlign(): string {
            return this.verticalAlign;
        }

        public setVerticalAlign(verticalAlign: string): Layout {
            this.verticalAlign = verticalAlign;
            return this.refresh();
        }

        public refresh(): Layout {
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
            if (this.multipleRows){
                this.addClass("slds-wrap");
            }
            if (this.horizontalAlign != null){
                this.addClass("slds-grid_align-" + this.horizontalAlign);
            }
            if (this.pullToBoundary != null){
                this.addClass("slds-grid_pull-padded-" + this.pullToBoundary);
            }
            if (this.verticalAlign != null){
                this.addClass("slds-grid_vertical-" + this.verticalAlign);
            }
            return this;
        }
    }
    Layout["__class"] = "com.spoonconsulting.lightning.Layout";
    Layout["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class LayoutItem extends JSContainer {
        /*private*/ alignmentBumb: string;

        /*private*/ flexibility: string;

        /*private*/ largeDeviceSize: number;

        /*private*/ mediumDeviceSize: number;

        /*private*/ padding: string;

        /*private*/ size: number;

        /*private*/ smallDeviceSize: number;

        public constructor(name: string, tag: string) {
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

        public getAlignmentBumb(): string {
            return this.alignmentBumb;
        }

        public setAlignmentBumb(alignmentBumb: string): LayoutItem {
            this.alignmentBumb = alignmentBumb;
            {
                let array8653 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.LayoutItem.AlignmentBump[] = []; for(let val in com.spoonconsulting.lightning.LayoutItem.AlignmentBump) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index8652=0; index8652 < array8653.length; index8652++) {
                    let a = array8653[index8652];
                    {
                        this.removeClass("slds-col_bump-" + com.spoonconsulting.lightning.LayoutItem.AlignmentBump["_$wrappers"][a].value);
                    }
                }
            }
            if (alignmentBumb != null)this.addClass("slds-col_bump-" + alignmentBumb);
            return this;
        }

        public getFlexibility(): string {
            return this.flexibility;
        }

        public setFlexibility(flexibility: string): LayoutItem {
            this.flexibility = flexibility;
            {
                let array8655 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.LayoutItem.Flexibility[] = []; for(let val in com.spoonconsulting.lightning.LayoutItem.Flexibility) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index8654=0; index8654 < array8655.length; index8654++) {
                    let f = array8655[index8654];
                    {
                        this.removeClass("slds-" + com.spoonconsulting.lightning.LayoutItem.Flexibility["_$wrappers"][f].value);
                    }
                }
            }
            if (flexibility != null){
                const fxs: string[] = flexibility.split(",");
                for(let index8656=0; index8656 < fxs.length; index8656++) {
                    let fx = fxs[index8656];
                    {
                        this.addClass("slds-" + fx);
                    }
                }
            }
            return this;
        }

        public getLargeDeviceSize(): number {
            return this.largeDeviceSize;
        }

        public setLargeDeviceSize(largeDeviceSize: number): LayoutItem {
            this.largeDeviceSize = largeDeviceSize;
            for(let i: number = 1; i <= 12; i++) {{
                this.removeClass("slds-large-size_" + i + "-of-12");
            };}
            if (largeDeviceSize != null)this.addClass("slds-large-size_" + this.size + "-of-12");
            return this;
        }

        public getMediumDeviceSize(): number {
            return this.mediumDeviceSize;
        }

        public setMediumDeviceSize(mediumDeviceSize: number): LayoutItem {
            this.mediumDeviceSize = mediumDeviceSize;
            for(let i: number = 1; i <= 12; i++) {{
                this.removeClass("slds-medium-size_" + i + "-of-12");
            };}
            if (mediumDeviceSize != null)this.addClass("slds-medium-size_" + this.size + "-of-12");
            return this;
        }

        public getPadding(): string {
            return this.padding;
        }

        public setPadding(padding: string): LayoutItem {
            this.padding = padding;
            {
                let array8658 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.LayoutItem.Padding[] = []; for(let val in com.spoonconsulting.lightning.LayoutItem.Padding) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index8657=0; index8657 < array8658.length; index8657++) {
                    let p = array8658[index8657];
                    {
                        this.removeClass("slds-p-" + com.spoonconsulting.lightning.LayoutItem.Padding["_$wrappers"][p].value);
                    }
                }
            }
            if (padding != null){
                this.addClass("slds-p-" + padding);
            }
            return this;
        }

        public getSize(): number {
            return this.size;
        }

        public setSize(size: number): LayoutItem {
            this.size = size;
            for(let i: number = 1; i <= 12; i++) {{
                this.removeClass("slds-size_" + i + "-of-12");
            };}
            if (size != null)this.addClass("slds-size_" + size + "-of-12");
            return this;
        }

        public getSmallDeviceSize(): number {
            return this.smallDeviceSize;
        }

        public setSmallDeviceSize(smallDeviceSize: number): LayoutItem {
            this.smallDeviceSize = smallDeviceSize;
            for(let i: number = 1; i <= 12; i++) {{
                this.removeClass("slds-small-size_" + i + "-of-12");
            };}
            if (smallDeviceSize != null)this.addClass("slds-small-size_" + this.size + "-of-12");
            return this;
        }
    }
    LayoutItem["__class"] = "com.spoonconsulting.lightning.LayoutItem";
    LayoutItem["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace LayoutItem {

        export enum AlignmentBump {
            TOP, LEFT, RIGHT, BOTTOM
        }

        /** @ignore */
        export class AlignmentBump_$WRAPPER {
            value;

            constructor(protected _$ordinal: number, protected _$name: string, value) {
                if (this.value === undefined) { this.value = null; }
                this.value = value;
            }
            public name(): string { return this._$name; }
            public ordinal(): number { return this._$ordinal; }
            public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
        }
        AlignmentBump["__class"] = "com.spoonconsulting.lightning.LayoutItem.AlignmentBump";
        AlignmentBump["__interfaces"] = ["java.lang.constant.Constable","java.lang.Comparable","java.io.Serializable"];

        AlignmentBump["_$wrappers"] = {0: new AlignmentBump_$WRAPPER(0, "TOP", "top"), 1: new AlignmentBump_$WRAPPER(1, "LEFT", "left"), 2: new AlignmentBump_$WRAPPER(2, "RIGHT", "right"), 3: new AlignmentBump_$WRAPPER(3, "BOTTOM", "bottom")};


        export enum Flexibility {
            AUTO, SHRINK, NO_SHRINK, GROW, NO_GROW, NO_FLEX
        }

        /** @ignore */
        export class Flexibility_$WRAPPER {
            value;

            constructor(protected _$ordinal: number, protected _$name: string, val) {
                if (this.value === undefined) { this.value = null; }
                this.value = val;
            }
            public name(): string { return this._$name; }
            public ordinal(): number { return this._$ordinal; }
            public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
        }
        Flexibility["__class"] = "com.spoonconsulting.lightning.LayoutItem.Flexibility";
        Flexibility["__interfaces"] = ["java.lang.constant.Constable","java.lang.Comparable","java.io.Serializable"];

        Flexibility["_$wrappers"] = {0: new Flexibility_$WRAPPER(0, "AUTO", "auto"), 1: new Flexibility_$WRAPPER(1, "SHRINK", "shrink"), 2: new Flexibility_$WRAPPER(2, "NO_SHRINK", "no-shrink"), 3: new Flexibility_$WRAPPER(3, "GROW", "grow"), 4: new Flexibility_$WRAPPER(4, "NO_GROW", "no-grow"), 5: new Flexibility_$WRAPPER(5, "NO_FLEX", "no-flex")};


        export enum Padding {
            HORIZONTAL_SMALL, HORIZONTAL_MEDIUM, HORIZONTAL_LARGE, AROUND_SMALL, AROUND_MEDIUM, AROUND_LARGE
        }

        /** @ignore */
        export class Padding_$WRAPPER {
            value;

            constructor(protected _$ordinal: number, protected _$name: string, val) {
                if (this.value === undefined) { this.value = null; }
                this.value = val;
            }
            public name(): string { return this._$name; }
            public ordinal(): number { return this._$ordinal; }
            public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
        }
        Padding["__class"] = "com.spoonconsulting.lightning.LayoutItem.Padding";
        Padding["__interfaces"] = ["java.lang.constant.Constable","java.lang.Comparable","java.io.Serializable"];

        Padding["_$wrappers"] = {0: new Padding_$WRAPPER(0, "HORIZONTAL_SMALL", "horizontal_small"), 1: new Padding_$WRAPPER(1, "HORIZONTAL_MEDIUM", "horizontal_medium"), 2: new Padding_$WRAPPER(2, "HORIZONTAL_LARGE", "horizontal_large"), 3: new Padding_$WRAPPER(3, "AROUND_SMALL", "around_small"), 4: new Padding_$WRAPPER(4, "AROUND_MEDIUM", "around_medium"), 5: new Padding_$WRAPPER(5, "AROUND_LARGE", "around_large")};

    }

}
namespace com.spoonconsulting.lightning {
    export class ListBox extends JSContainer {
        public constructor(name: string) {
            super(name, "div");
            this.setAttribute("data-dropdown-element", "true").setAttribute("role", "listbox").addClass("slds-listbox").addClass("slds-listbox_vertical").addClass("slds-dropdown").addClass("slds-dropdown_fluid").addClass("slds-dropdown_left");
        }

        public addOption$java_lang_String$java_lang_String(value: string, label: string): ListBox {
            this.addChild(new ListBox.ListBoxOption(this, value, label));
            return this;
        }

        public addOption(value?: any, label?: any): any {
            if (((typeof value === 'string') || value === null) && ((typeof label === 'string') || label === null)) {
                return <any>this.addOption$java_lang_String$java_lang_String(value, label);
            } else if (((value != null && value instanceof <any>Object) || value === null) && label === undefined) {
                return <any>this.addOption$jsweet_lang_Object(value);
            } else throw new Error('invalid overload');
        }

        public addOption$jsweet_lang_Object(obj: Object): ListBox {
            const label: string = <string>obj["label"];
            const value: string = <string>obj["value"];
            return this.addOption$java_lang_String$java_lang_String(value, label);
        }

        public setOptions(options: Array<Object>): ListBox {
            this.clearChildren();
            for(let index8659=0; index8659 < options.length; index8659++) {
                let option = options[index8659];
                {
                    this.addOption$jsweet_lang_Object(option);
                }
            }
            return this;
        }

        public setValue(value: string): ListBox {
            {
                let array8661 = this.getChildren();
                for(let index8660=0; index8660 < array8661.length; index8660++) {
                    let r = array8661[index8660];
                    {
                        const opt: ListBox.ListBoxOption = <ListBox.ListBoxOption><any>r;
                        if (opt.getValue() === value){
                            opt.setChecked(true);
                        } else {
                            opt.setChecked(false);
                        }
                    }
                }
            }
            return this;
        }

        public getValue(): string {
            {
                let array8663 = this.getChildren();
                for(let index8662=0; index8662 < array8663.length; index8662++) {
                    let r = array8663[index8662];
                    {
                        const opt: ListBox.ListBoxOption = <ListBox.ListBoxOption><any>r;
                        if (opt.isChecked()){
                            return opt.getValue();
                        }
                    }
                }
            }
            return null;
        }
    }
    ListBox["__class"] = "com.spoonconsulting.lightning.ListBox";
    ListBox["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace ListBox {

        export class ListBoxOption extends JSContainer implements api.EventListener {
            public __parent: any;
            figure: JSContainer;

            body: JSContainer;

            icon: com.spoonconsulting.lightning.IconContainer;

            label: JSContainer;

            public constructor(__parent: any, value: string, label: string) {
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

            public setValue(value: string): ListBox.ListBoxOption {
                this.setAttribute("data-value", value);
                return this;
            }

            public getValue(): string {
                return this.getAttribute("data-value");
            }

            public setLabel(label: string): ListBox.ListBoxOption {
                this.label.setHtml(label);
                this.label.setAttribute("title", label);
                return this;
            }

            public getLabel(): string {
                return this.label.getHtml();
            }

            public setChecked(b: boolean): ListBox.ListBoxOption {
                if (b){
                    this.setAttribute("aria-checked", "true");
                    this.figure.clearChildren();
                    this.figure.addChild(this.icon);
                } else {
                    this.setAttribute("aria-checked", "false");
                    this.figure.clearChildren();
                }
                this.setRendered(false);
                return this;
            }

            public isChecked(): boolean {
                return this.getAttribute("aria-checked") === "true";
            }

            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                if (!this.isChecked()){
                    const lb: com.spoonconsulting.lightning.ListBox = <com.spoonconsulting.lightning.ListBox>this.getParent();
                    const oldValue: string = lb.getValue();
                    lb.setValue(this.getValue());
                    const onchange: CustomEvent = new CustomEvent("onchange");
                    onchange["source"] = this;
                    onchange["value"] = this.getValue();
                    onchange["oldValue"] = oldValue;
                    lb.fireListener("onchange", evt);
                }
            }
        }
        ListBoxOption["__class"] = "com.spoonconsulting.lightning.ListBox.ListBoxOption";
        ListBoxOption["__interfaces"] = ["framework.components.api.EventListener","framework.components.api.Renderable"];


    }

}
namespace com.spoonconsulting.lightning {
    export class MenuDivider extends JSContainer {
        public constructor() {
            super("divider", "li");
            this.addClass("slds-has-divider_top-space");
            this.setAttribute("role", "separator");
        }
    }
    MenuDivider["__class"] = "com.spoonconsulting.lightning.MenuDivider";
    MenuDivider["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class MenuSubHeader extends JSContainer {
        /*private*/ span: JSContainer;

        public constructor(name: string) {
            super(name, "li");
            this.span = new JSContainer("span");
            this.addClass("slds-dropdown__header");
            this.addChild(this.span.addClass("slds-truncate"));
        }

        public setLabel(label: string): MenuSubHeader {
            this.span.setHtml(label);
            return this;
        }

        public getLabel(): string {
            return this.span.getHtml();
        }
    }
    MenuSubHeader["__class"] = "com.spoonconsulting.lightning.MenuSubHeader";
    MenuSubHeader["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class PathItem extends JSContainer implements com.spoonconsulting.lightning.IStep {
        /*private*/ link: JSContainer;

        /*private*/ stage: JSContainer;

        /*private*/ icon: com.spoonconsulting.lightning.Icon;

        /*private*/ title: JSContainer;

        public constructor(name: string) {
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
            this.link.addClass("slds-path__link");
            this.link.setAttribute("href", "javascript:void(0);");
            this.link.setAttribute("role", "option");
            this.link.setAttribute("tabindex", "-1");
            this.stage.addClass("slds-path__stage");
            this.icon.setSize$com_spoonconsulting_lightning_Size(com.spoonconsulting.lightning.Size.EXTRA_SMALL);
            this.title.addClass("slds-path__title");
        }

        public setLabel(label: string): PathItem {
            this.setAttribute("title", label);
            this.title.setHtml(label);
            return this;
        }

        public getLabel(): string {
            return this.getAttribute("title");
        }

        public setActive(b: boolean): PathItem {
            this.removeClass("slds-has-error");
            this.removeClass("slds-is-complete");
            this.removeClass("slds-is-active");
            if (b){
                this.setAttribute("aria-selected", "true");
                this.setAttribute("tabindex", "0");
                this.addClass("slds-is-active");
            } else {
                this.setAttribute("tabindex", "-1");
                this.setAttribute("aria-selected", "false");
                this.removeClass("slds-is-active");
            }
            return this;
        }

        public setCurrent(b: boolean): PathItem {
            if (b){
                this.addClass("slds-is-current");
            } else {
                this.removeClass("slds-is-current");
            }
            return this;
        }

        public setComplete(b: boolean): PathItem {
            this.removeClass("slds-has-error");
            this.removeClass("slds-is-complete");
            this.removeClass("slds-is-active");
            if (b){
                this.setAttribute("tabindex", "-1");
                this.setAttribute("aria-selected", "false");
                this.addClass("slds-is-complete");
            } else {
                this.removeClass("slds-is-complete");
            }
            return this;
        }

        public setHasError(b: boolean): PathItem {
            this.removeClass("slds-has-error");
            if (b){
                this.addClass("slds-has-error");
            }
            return this;
        }

        public getHasError(): boolean {
            return this.hasClass("slds-has-error");
        }

        public isComplete(): boolean {
            return this.hasClass("slds-is-complete");
        }

        public isCurrent(): boolean {
            return this.hasClass("slds-is-current");
        }

        public isActive(): boolean {
            return this.hasClass("slds-is-active");
        }

        public setValue(value: string): PathItem {
            this.setAttribute("value", value);
            return this;
        }

        public getValue(): string {
            return this.getAttribute("value");
        }
    }
    PathItem["__class"] = "com.spoonconsulting.lightning.PathItem";
    PathItem["__interfaces"] = ["com.spoonconsulting.lightning.IStep","framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class Pill extends JSContainer {
        /*private*/ pillIconContainer: JSContainer;

        /*private*/ pillAction: JSContainer;

        /*private*/ pillLabel: JSContainer;

        /*private*/ closeButton: com.spoonconsulting.lightning.ButtonIcon;

        public static VARIANT_PLAIN_LINK: string = "plainLink";

        public static VARIANT_LINK: string = "link";

        public static VARIANT_PLAIN: string = "plain";

        public constructor(name: string) {
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

        public addAvatar(avatar: com.spoonconsulting.lightning.Avatar): Pill {
            this.clearChildren();
            this.pillIconContainer.clearChildren();
            this.pillIconContainer.addChild(avatar);
            avatar.setSize(com.spoonconsulting.lightning.Size.MEDIUM);
            this.addChild(this.pillIconContainer).addChild(this.pillAction).addChild(this.closeButton);
            this.setRendered(false);
            return this;
        }

        public addIcon(ctn: com.spoonconsulting.lightning.IconContainer): Pill {
            this.clearChildren();
            this.pillIconContainer.clearChildren();
            this.pillIconContainer.addChild(ctn);
            this.addChild(this.pillIconContainer).addChild(this.pillAction).addChild(this.closeButton);
            this.setRendered(false);
            return this;
        }

        public setAriaSelected(s: string): Pill {
            this.setAttribute("aria-selected", s);
            return this;
        }

        public getAriaSelected(): string {
            return this.getAttribute("aria-selected");
        }

        public setHasError(b: boolean): Pill {
            if (b){
                this.addClass("slds-has-error");
            } else {
                this.removeClass("slds-has-error");
            }
            return this;
        }

        public setHref(href: string): Pill {
            this.setVariant("plainLink");
            this.pillAction.setAttribute("href", href);
            return this;
        }

        public getHref(): string {
            return this.pillAction.getAttribute("href");
        }

        public getHasError(): boolean {
            return this.hasClass("slds-has-error");
        }

        public setLabel(label: string): Pill {
            this.pillLabel.setHtml(label);
            return this;
        }

        public getLabel(): string {
            return this.pillLabel.getHtml();
        }

        public setRole(role: string): Pill {
            this.setAttribute("role", role);
            return this;
        }

        public getRole(): string {
            return this.getAttribute("role");
        }

        public setTabIndex(index: number): Pill {
            this.setAttribute("tabindex", index + "");
            return this;
        }

        public getTabIndex(): number {
            const sindex: string = this.getAttribute("tabindex");
            if (sindex != null){
                return /* parseInt */parseInt(sindex);
            } else {
                return -1;
            }
        }

        public setVariant(variant: string): Pill {
            this.setAttribute("variant", variant);
            if (variant === "plainLink"){
                this.addClass("slds-pill_link");
                this.pillAction.setTag("a");
                this.pillAction.addClass("slds-pill__action");
            } else {
                this.removeClass("slds-pill_link");
                this.pillAction.setTag("div");
                this.pillAction.setAttribute("class", null);
            }
            return this;
        }

        public getVariant(): string {
            return this.getAttribute("variant");
        }
    }
    Pill["__class"] = "com.spoonconsulting.lightning.Pill";
    Pill["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class Popover {    }
    Popover["__class"] = "com.spoonconsulting.lightning.Popover";

}
namespace com.spoonconsulting.lightning {
    export class ProgressBar extends JSContainer {
        /*private*/ value: JSContainer;

        /*private*/ assistiveText: JSContainer;

        public constructor(name: string) {
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

        public setSize$com_spoonconsulting_lightning_Size(size: com.spoonconsulting.lightning.Size): ProgressBar {
            return this.setSize$java_lang_String(size != null ? com.spoonconsulting.lightning.Size["_$wrappers"][size].getValue() : <string>null);
        }

        public setSize(size?: any): any {
            if (((typeof size === 'number') || size === null)) {
                return <any>this.setSize$com_spoonconsulting_lightning_Size(size);
            } else if (((typeof size === 'string') || size === null)) {
                return <any>this.setSize$java_lang_String(size);
            } else throw new Error('invalid overload');
        }

        public setSize$java_lang_String(size: string): ProgressBar {
            {
                let array8665 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.Size[] = []; for(let val in com.spoonconsulting.lightning.Size) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index8664=0; index8664 < array8665.length; index8664++) {
                    let s = array8665[index8664];
                    {
                        this.removeClass("slds-progress-bar_" + com.spoonconsulting.lightning.Size["_$wrappers"][s].getValue());
                    }
                }
            }
            if (size != null){
                this.addClass("slds-progress-bar_" + size);
            }
            return this;
        }

        public setValue(percent: number): ProgressBar {
            this.value.setStyle("width", percent + "%");
            this.setAttribute("aria-valuenow", percent + "");
            this.assistiveText.setHtml("Progress:" + percent + "%");
            return this;
        }

        public getValue(): number {
            if (this.getAttribute("aria-valuenow") != null)return /* parseInt */parseInt(this.getAttribute("aria-valuenow"));
            return 0;
        }

        public setVariant(variant: string): ProgressBar {
            this.setAttribute("variant", variant);
            this.removeClass("slds-progress-bar_circular");
            if (variant === "circuler")this.addClass("slds-progress-bar_" + variant);
            return this;
        }

        public getVariant(): string {
            return this.getAttribute("variant");
        }
    }
    ProgressBar["__class"] = "com.spoonconsulting.lightning.ProgressBar";
    ProgressBar["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class ProgressIndicator extends JSContainer implements com.spoonconsulting.lightning.IProgress {
        /*private*/ progress: com.spoonconsulting.lightning.Progress;

        /*private*/ path: com.spoonconsulting.lightning.Path;

        /*private*/ usedType: com.spoonconsulting.lightning.IProgress;

        public constructor(name: string) {
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
        public setCurrentStep(value: string): com.spoonconsulting.lightning.IProgress {
            this.progress.setCurrentStep(value);
            this.path.setCurrentStep(value);
            return this;
        }

        /**
         * 
         * @return {*}
         */
        public getCurrentStep(): com.spoonconsulting.lightning.IStep {
            return this.usedType.getCurrentStep();
        }

        /**
         * 
         * @param {boolean} b
         * @return {*}
         */
        public setHasError(b: boolean): com.spoonconsulting.lightning.IProgress {
            this.progress.setHasError(b);
            this.path.setHasError(b);
            return this;
        }

        /**
         * 
         * @return {boolean}
         */
        public getHasError(): boolean {
            return this.usedType.getHasError();
        }

        /**
         * 
         * @param {string} variant
         * @return {*}
         */
        public setVariant(variant: string): com.spoonconsulting.lightning.IProgress {
            this.path.setVariant(variant);
            this.progress.setVariant(variant);
            return this;
        }

        /**
         * 
         * @return {string}
         */
        public getVariant(): string {
            return this.usedType.getVariant();
        }

        /**
         * 
         * @return {*[]}
         */
        public getSteps(): Array<com.spoonconsulting.lightning.IStep> {
            return this.usedType.getSteps();
        }

        /**
         * 
         * @param {string} value
         * @return {*}
         */
        public getStep(value: string): com.spoonconsulting.lightning.IStep {
            return this.usedType.getStep(value);
        }

        /**
         * 
         * @return {*}
         */
        public clearSteps(): com.spoonconsulting.lightning.IProgress {
            this.progress.clearChildren();
            this.path.clearChildren();
            return this;
        }

        /**
         * 
         * @param {*} step
         * @return {*}
         */
        public removeStep(step: com.spoonconsulting.lightning.IStep): com.spoonconsulting.lightning.IProgress {
            this.usedType.removeStep(step);
            return this;
        }

        public setType(type: string): com.spoonconsulting.lightning.IProgress {
            if (type !== this.getAttribute("type")){
                this.setAttribute("type", type);
                this.clearChildren();
                if (type === "base"){
                    this.addChild(this.progress);
                    this.usedType = this.progress;
                } else {
                    this.addChild(this.path);
                    this.usedType = this.path;
                }
                this.setRendered(false);
            }
            return this;
        }

        public getType(): string {
            return this.getAttribute("type");
        }

        /**
         * 
         * @param {string} value
         * @return {*}
         */
        public setValue(value: string): com.spoonconsulting.lightning.IProgress {
            this.path.setValue(value);
            this.progress.setValue(value);
            return this;
        }

        /**
         * 
         * @return {string}
         */
        public getValue(): string {
            return this.usedType.getValue();
        }

        /**
         * 
         * @param {string} label
         * @param {string} value
         * @return {*}
         */
        public addStep(label: string, value: string): com.spoonconsulting.lightning.IProgress {
            this.path.addStep(label, value);
            this.progress.addStep$java_lang_String$java_lang_String(label, value);
            return this;
        }
    }
    ProgressIndicator["__class"] = "com.spoonconsulting.lightning.ProgressIndicator";
    ProgressIndicator["__interfaces"] = ["framework.components.api.Renderable","com.spoonconsulting.lightning.IProgress"];


}
namespace com.spoonconsulting.lightning {
    export class ProgressStep extends JSContainer implements com.spoonconsulting.lightning.IStep {
        /*private*/ incomplete: com.spoonconsulting.lightning.Button;

        /*private*/ complete: com.spoonconsulting.lightning.ButtonIcon;

        public constructor(name: string) {
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
        public setLabel(label: string): com.spoonconsulting.lightning.IStep {
            this.setAttribute("title", label);
            this.incomplete.getUILabel().setHtml(label);
            this.complete.setLabel(label);
            return this;
        }

        /**
         * 
         * @return {string}
         */
        public getLabel(): string {
            return this.getAttribute("title");
        }

        /**
         * 
         * @param {boolean} b
         * @return {*}
         */
        public setActive(b: boolean): com.spoonconsulting.lightning.IStep {
            this.removeClass("slds-has-error");
            this.removeClass("slds-is-completed");
            this.removeClass("slds-is-active");
            this.clearChildren();
            this.addChild(this.incomplete);
            if (b){
                this.addClass("slds-is-active");
            } else {
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
        public setComplete(b: boolean): com.spoonconsulting.lightning.IStep {
            this.removeClass("slds-has-error");
            this.removeClass("slds-is-completed");
            this.removeClass("slds-is-active");
            if (b){
                this.clearChildren();
                this.addClass("slds-is-completed");
                this.addChild(this.complete);
                this.setRendered(false);
            } else {
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
        public setHasError(b: boolean): com.spoonconsulting.lightning.IStep {
            this.removeClass("slds-has-error");
            if (b){
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
        public getHasError(): boolean {
            return this.hasClass("slds-has-error");
        }

        /**
         * 
         * @return {boolean}
         */
        public isComplete(): boolean {
            return this.hasClass("slds-is-completed");
        }

        /**
         * 
         * @return {boolean}
         */
        public isActive(): boolean {
            return this.hasClass("slds-is-active");
        }

        /**
         * 
         * @param {string} value
         * @return {*}
         */
        public setValue(value: string): com.spoonconsulting.lightning.IStep {
            this.setAttribute("value", value);
            return this;
        }

        /**
         * 
         * @return {string}
         */
        public getValue(): string {
            return this.getAttribute("value");
        }

        /**
         * 
         * @param {boolean} b
         * @return {*}
         */
        public setCurrent(b: boolean): com.spoonconsulting.lightning.IStep {
            this.addClass("slds-is-current");
            return this;
        }

        /**
         * 
         * @return {boolean}
         */
        public isCurrent(): boolean {
            return this.hasClass("slds-is-current");
        }
    }
    ProgressStep["__class"] = "com.spoonconsulting.lightning.ProgressStep";
    ProgressStep["__interfaces"] = ["com.spoonconsulting.lightning.IStep","framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export enum Size {
        EXTRA_EXTRA_SMALL, EXTRA_SMALL, SMALL, MEDIUM, LARGE
    }

    /** @ignore */
    export class Size_$WRAPPER {
        /*private*/ value;

        constructor(protected _$ordinal: number, protected _$name: string, value) {
            if (this.value === undefined) { this.value = null; }
            this.value = value;
        }

        public getValue(): string {
            return this.value;
        }
        public name(): string { return this._$name; }
        public ordinal(): number { return this._$ordinal; }
        public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
    }
    Size["__class"] = "com.spoonconsulting.lightning.Size";
    Size["__interfaces"] = ["java.lang.constant.Constable","java.lang.Comparable","java.io.Serializable"];

    Size["_$wrappers"] = {0: new Size_$WRAPPER(0, "EXTRA_EXTRA_SMALL", "xx-small"), 1: new Size_$WRAPPER(1, "EXTRA_SMALL", "x-small"), 2: new Size_$WRAPPER(2, "SMALL", "small"), 3: new Size_$WRAPPER(3, "MEDIUM", "medium"), 4: new Size_$WRAPPER(4, "LARGE", "large")};

}
namespace com.spoonconsulting.lightning {
    export class Spinner extends JSContainer {
        /*private*/ alternativeText: string;

        public constructor(name: string) {
            super(name, "div");
            this.alternativeText = "Loading";
            this.addClass("slds-spinner");
            this.setAttribute("role", "status");
            this.refresh();
        }

        public refresh() {
            this.setHtml("<span class=\"slds-assistive-text\">" + this.alternativeText + "</span>\r\n        <div class=\"slds-spinner__dot-a\"></div>\r\n        <div class=\"slds-spinner__dot-b\"></div>");
        }

        public getAlternativeText(): string {
            return this.alternativeText;
        }

        public setAlternativeText(alternativeText: string) {
            this.alternativeText = alternativeText;
            this.refresh();
        }

        public setSize$com_spoonconsulting_lightning_Size(size: com.spoonconsulting.lightning.Size): Spinner {
            return this.setSize$java_lang_String(size != null ? com.spoonconsulting.lightning.Size["_$wrappers"][size].getValue() : <string>null);
        }

        public setSize(size?: any): any {
            if (((typeof size === 'number') || size === null)) {
                return <any>this.setSize$com_spoonconsulting_lightning_Size(size);
            } else if (((typeof size === 'string') || size === null)) {
                return <any>this.setSize$java_lang_String(size);
            } else throw new Error('invalid overload');
        }

        public setSize$java_lang_String(size: string): Spinner {
            {
                let array8667 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.Size[] = []; for(let val in com.spoonconsulting.lightning.Size) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index8666=0; index8666 < array8667.length; index8666++) {
                    let s = array8667[index8666];
                    {
                        this.removeClass("slds-spinner_" + com.spoonconsulting.lightning.Size["_$wrappers"][s].getValue());
                    }
                }
            }
            if (size != null)this.addClass("slds-spinner_" + size);
            return this;
        }

        public setVariant$java_lang_String(variant: string): Spinner {
            {
                let array8669 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.Variant[] = []; for(let val in com.spoonconsulting.lightning.Variant) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index8668=0; index8668 < array8669.length; index8668++) {
                    let v = array8669[index8668];
                    {
                        if (v !== com.spoonconsulting.lightning.Variant.BASE)this.removeClass("slds-spinner_" + com.spoonconsulting.lightning.Variant["_$wrappers"][v].getValue());
                    }
                }
            }
            if (variant !== com.spoonconsulting.lightning.Variant["_$wrappers"][com.spoonconsulting.lightning.Variant.BASE].getValue() && variant != null)this.addClass("slds-spinner_" + variant);
            return this;
        }

        public setVariant(variant?: any): any {
            if (((typeof variant === 'string') || variant === null)) {
                return <any>this.setVariant$java_lang_String(variant);
            } else if (((typeof variant === 'number') || variant === null)) {
                return <any>this.setVariant$com_spoonconsulting_lightning_Variant(variant);
            } else throw new Error('invalid overload');
        }

        public setVariant$com_spoonconsulting_lightning_Variant(variant: com.spoonconsulting.lightning.Variant): Spinner {
            return this.setVariant$java_lang_String(variant != null ? com.spoonconsulting.lightning.Variant["_$wrappers"][variant].getValue() : <string>null);
        }

        public setInlined(b: boolean): Spinner {
            if (b){
                this.addClass("slds-spinner_inline");
            } else {
                this.removeClass("slds-spinner_inline");
            }
            return this;
        }

        public setDelayed(b: boolean): Spinner {
            if (b){
                this.addClass("slds-spinner_delayed");
            } else {
                this.removeClass("slds-spinner_delayed");
            }
            return this;
        }
    }
    Spinner["__class"] = "com.spoonconsulting.lightning.Spinner";
    Spinner["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class TabSet extends JSContainer {
        /*private*/ tablist: JSContainer;

        /*private*/ tabs: JSContainer;

        public constructor(name: string) {
            super(name, "div");
            this.tablist = new JSContainer("tablist", "ul");
            this.tabs = new JSContainer("tabs", "div");
            this.addClass("TabSet");
            this.addClass("slds-tabs_default");
            this.addChild(this.tablist);
            this.tablist.addClass("slds-tabs_default__nav");
            this.addChild(this.tabs);
        }

        public setActiveTabValue(val: string) {
            {
                let array8671 = this.tablist.getChildren();
                for(let index8670=0; index8670 < array8671.length; index8670++) {
                    let r = array8671[index8670];
                    {
                        const item: TabSet.TabItem = <TabSet.TabItem><any>r;
                        if (item.tab.getValue() === val){
                            item.setActive(true);
                        } else {
                            item.setActive(false);
                        }
                    }
                }
            }
        }

        public setActiveTabItem(item: TabSet.TabItem) {
            {
                let array8673 = this.tablist.getChildren();
                for(let index8672=0; index8672 < array8673.length; index8672++) {
                    let r = array8673[index8672];
                    {
                        const titem: TabSet.TabItem = <TabSet.TabItem><any>r;
                        if (titem.getId() === item.getId()){
                            titem.setActive(true);
                        } else {
                            titem.setActive(false);
                        }
                    }
                }
            }
        }

        public getActiveTabItem(): TabSet.TabItem {
            {
                let array8675 = this.getTabItems();
                for(let index8674=0; index8674 < array8675.length; index8674++) {
                    let item = array8675[index8674];
                    {
                        if (item.isActive()){
                            return item;
                        }
                    }
                }
            }
            return null;
        }

        public getTabItems(): Array<TabSet.TabItem> {
            const result: Array<any> = this.tablist.getChildren();
            return result;
        }

        public addTab(tab: com.spoonconsulting.lightning.Tab, content: com.spoonconsulting.lightning.TabPanel): TabSet {
            const name: string = (this.tablist.getChildren().length + 1) + "";
            const item: TabSet.TabItem = new TabSet.TabItem(this, name, tab, content);
            this.tablist.addChild(item);
            content.setAttribute("aria-labelledby", "tab-" + name + "__item");
            this.addChild(content);
            const titem: TabSet.TabItem = this.getActiveTabItem();
            if (titem == null){
                const first: TabSet.TabItem = <TabSet.TabItem><any>this.tablist.getChildren()[0];
                this.setActiveTabItem(first);
            }
            return this;
        }

        public getPanel(name: string): com.spoonconsulting.lightning.TabPanel {
            {
                let array8677 = this.getChildren();
                for(let index8676=0; index8676 < array8677.length; index8676++) {
                    let r = array8677[index8676];
                    {
                        if (r.getId() !== this.tablist.getId()){
                            if (r.getName() === name){
                                return <com.spoonconsulting.lightning.TabPanel><any>r;
                            }
                        }
                    }
                }
            }
            return null;
        }

        public setVariant$com_spoonconsulting_lightning_TabSet_TabSetVariant(variant: TabSet.TabSetVariant): TabSet {
            return this.setVariant$java_lang_String(variant != null ? com.spoonconsulting.lightning.TabSet.TabSetVariant["_$wrappers"][variant].value : "standard");
        }

        public setVariant(variant?: any): any {
            if (((typeof variant === 'number') || variant === null)) {
                return <any>this.setVariant$com_spoonconsulting_lightning_TabSet_TabSetVariant(variant);
            } else if (((typeof variant === 'string') || variant === null)) {
                return <any>this.setVariant$java_lang_String(variant);
            } else throw new Error('invalid overload');
        }

        public setVariant$java_lang_String(variant: string): TabSet {
            this.removeClass("slds-vertical-tabs");
            this.removeClass("slds-tabs_scoped");
            this.removeClass("slds-tabs_default");
            this.tablist.removeClass("slds-vertical-tabs__nav");
            this.tablist.removeClass("slds-tabs_scoped__nav");
            this.tablist.removeClass("slds-tabs_default__nav");
            this.tablist.setAttribute("aria-orientation", null);
            if (variant === "vertical"){
                this.addClass("slds-vertical-tabs");
                this.tablist.setAttribute("aria-orientation", "vertical");
                this.tablist.addClass("slds-vertical-tabs__nav");
            } else if (variant === "scoped"){
                this.addClass("slds-tabs_scoped");
                this.tablist.addClass("slds-tabs_scoped__nav");
            } else {
                this.addClass("slds-tabs_default");
                this.tablist.addClass("slds-tabs_default__nav");
            }
            {
                let array8679 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.TabSet.TabSetVariant[] = []; for(let val in com.spoonconsulting.lightning.TabSet.TabSetVariant) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index8678=0; index8678 < array8679.length; index8678++) {
                    let va = array8679[index8678];
                    {
                        this.removeClass("slds-tabs_" + com.spoonconsulting.lightning.TabSet.TabSetVariant["_$wrappers"][va].value);
                    }
                }
            }
            if (variant == null){
                variant = "standard";
            }
            this.addClass("slds-tabs_" + variant);
            return this;
        }
    }
    TabSet["__class"] = "com.spoonconsulting.lightning.TabSet";
    TabSet["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace TabSet {

        export enum TabSetVariant {
            STANDARD, SCOPED, VERTICAL
        }

        /** @ignore */
        export class TabSetVariant_$WRAPPER {
            constructor(protected _$ordinal: number, protected _$name: string, value) {
                if (this.value === undefined) { this.value = null; }
                this.value = value;
            }

            value;
            public name(): string { return this._$name; }
            public ordinal(): number { return this._$ordinal; }
            public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
        }
        TabSetVariant["__class"] = "com.spoonconsulting.lightning.TabSet.TabSetVariant";
        TabSetVariant["__interfaces"] = ["java.lang.constant.Constable","java.lang.Comparable","java.io.Serializable"];

        TabSetVariant["_$wrappers"] = {0: new TabSetVariant_$WRAPPER(0, "STANDARD", "default"), 1: new TabSetVariant_$WRAPPER(1, "SCOPED", "scoped"), 2: new TabSetVariant_$WRAPPER(2, "VERTICAL", "vertical")};


        export class TabItem extends JSContainer {
            public __parent: any;
            tab: com.spoonconsulting.lightning.Tab;

            panel: com.spoonconsulting.lightning.TabPanel;

            public constructor(__parent: any, name: string, tab: com.spoonconsulting.lightning.Tab, panel: com.spoonconsulting.lightning.TabPanel) {
                super(name, "li");
                this.__parent = __parent;
                if (this.tab === undefined) { this.tab = null; }
                if (this.panel === undefined) { this.panel = null; }
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

            public setActive(b: boolean) {
                this.tab.setActive(b);
                this.panel.setActive(b);
            }

            public isActive(): boolean {
                return this.tab.isActive() && this.panel.isActive();
            }
        }
        TabItem["__class"] = "com.spoonconsulting.lightning.TabSet.TabItem";
        TabItem["__interfaces"] = ["framework.components.api.Renderable"];



        export namespace TabItem {

            export class TabItem$0 implements api.EventListener {
                public __parent: any;
                /**
                 * 
                 * @param {*} source
                 * @param {Event} evt
                 */
                public performAction(source: api.Renderable, evt: Event) {
                    const titem: TabSet.TabItem = <any>(source.getAncestorWithClass<any>("TabItem"));
                    const tabSet: com.spoonconsulting.lightning.TabSet = <any>(source.getAncestorWithClass<any>("TabSet"));
                    tabSet.setActiveTabItem(titem);
                }

                constructor(__parent: any) {
                    this.__parent = __parent;
                }
            }
            TabItem$0["__interfaces"] = ["framework.components.api.EventListener"];


        }

    }

}
namespace com.spoonconsulting.lightning {
    export enum Variant {
        BASE, NEUTRAL, BRAND, OUTLINE_BRAND, DESTRUCTIVE, TEXT_DESTRUCTIVE, SUCCESS, INVERSE
    }

    /** @ignore */
    export class Variant_$WRAPPER {
        /*private*/ value;

        constructor(protected _$ordinal: number, protected _$name: string, value) {
            if (this.value === undefined) { this.value = null; }
            this.value = value;
        }

        public getValue(): string {
            return this.value;
        }
        public name(): string { return this._$name; }
        public ordinal(): number { return this._$ordinal; }
        public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
    }
    Variant["__class"] = "com.spoonconsulting.lightning.Variant";
    Variant["__interfaces"] = ["java.lang.constant.Constable","java.lang.Comparable","java.io.Serializable"];

    Variant["_$wrappers"] = {0: new Variant_$WRAPPER(0, "BASE", ""), 1: new Variant_$WRAPPER(1, "NEUTRAL", "neutral"), 2: new Variant_$WRAPPER(2, "BRAND", "brand"), 3: new Variant_$WRAPPER(3, "OUTLINE_BRAND", "outline_brand"), 4: new Variant_$WRAPPER(4, "DESTRUCTIVE", "destructive"), 5: new Variant_$WRAPPER(5, "TEXT_DESTRUCTIVE", "text_destructive"), 6: new Variant_$WRAPPER(6, "SUCCESS", "success"), 7: new Variant_$WRAPPER(7, "INVERSE", "inverse")};

}
namespace com.spoonconsulting.lightning {
    export class Path extends com.spoonconsulting.lightning.AbstractProgress implements com.spoonconsulting.lightning.IProgress {
        /*private*/ track: JSContainer;

        /*private*/ scrollerContainer: JSContainer;

        /*private*/ scroller: JSContainer;

        /*private*/ scrollerInner: JSContainer;

        /*private*/ nav: JSContainer;

        public constructor(name: string) {
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

        public getSteps(): Array<com.spoonconsulting.lightning.IStep> {
            const result: Array<any> = this.nav.getChildren();
            return result;
        }

        /**
         * 
         * @return {*}
         */
        public clearSteps(): com.spoonconsulting.lightning.IProgress {
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
        public addStep(label: string, value: string): com.spoonconsulting.lightning.IProgress {
            const item: com.spoonconsulting.lightning.PathItem = new com.spoonconsulting.lightning.PathItem(label);
            item.setValue(value);
            item.setLabel(label);
            this.nav.addChild(item);
            return this;
        }
    }
    Path["__class"] = "com.spoonconsulting.lightning.Path";
    Path["__interfaces"] = ["framework.components.api.Renderable","com.spoonconsulting.lightning.IProgress"];


}
namespace com.spoonconsulting.lightning {
    export class Progress extends com.spoonconsulting.lightning.AbstractProgress implements com.spoonconsulting.lightning.IProgress {
        /*private*/ progressList: JSContainer;

        /*private*/ progressBar: com.spoonconsulting.lightning.ProgressBar;

        public constructor(name: string) {
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

        public addStep$com_spoonconsulting_lightning_IStep(step: com.spoonconsulting.lightning.IStep): Progress {
            this.progressList.addChild(step);
            return this;
        }

        public getSteps(): Array<com.spoonconsulting.lightning.IStep> {
            const result: Array<any> = this.progressList.getChildren();
            return result;
        }

        /**
         * 
         * @return {*}
         */
        public clearSteps(): com.spoonconsulting.lightning.IProgress {
            this.progressList.clearChildren();
            this.progressList.setRendered(false);
            return this;
        }

        public addStep$java_lang_String$java_lang_String(label: string, value: string): com.spoonconsulting.lightning.IProgress {
            const step: com.spoonconsulting.lightning.ProgressStep = new com.spoonconsulting.lightning.ProgressStep(label);
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
        public addStep(label?: any, value?: any): any {
            if (((typeof label === 'string') || label === null) && ((typeof value === 'string') || value === null)) {
                return <any>this.addStep$java_lang_String$java_lang_String(label, value);
            } else if (((label != null && (label.constructor != null && label.constructor["__interfaces"] != null && label.constructor["__interfaces"].indexOf("com.spoonconsulting.lightning.IStep") >= 0)) || label === null) && value === undefined) {
                return <any>this.addStep$com_spoonconsulting_lightning_IStep(label);
            } else throw new Error('invalid overload');
        }
    }
    Progress["__class"] = "com.spoonconsulting.lightning.Progress";
    Progress["__interfaces"] = ["framework.components.api.Renderable","com.spoonconsulting.lightning.IProgress"];


}
namespace com.spoonconsulting.lightning {
    export class Accordion extends com.spoonconsulting.lightning.BaseLightning {
        /*private*/ allowMultipleSectionOpen: boolean;

        public constructor(name: string) {
            super(name, "ul");
            this.allowMultipleSectionOpen = false;
            this.addClass("slds-accordion");
        }

        public addSection(section: com.spoonconsulting.lightning.AccordionSection): Accordion {
            const li: JSContainer = new JSContainer("li");
            li.addClass("slds-accordion__list-item");
            this.addChild(li);
            li.addChild(section);
            return this;
        }

        public addSections(...accordionSections: com.spoonconsulting.lightning.AccordionSection[]): Accordion {
            for(let index8680=0; index8680 < accordionSections.length; index8680++) {
                let section = accordionSections[index8680];
                {
                    this.addSection(section);
                }
            }
            return this;
        }

        public setActiveSectionName(name: string): Accordion {
            {
                let array8682 = this.getChildren();
                for(let index8681=0; index8681 < array8682.length; index8681++) {
                    let r = array8682[index8681];
                    {
                        const section: com.spoonconsulting.lightning.AccordionSection = <com.spoonconsulting.lightning.AccordionSection><any>r.getChildren()[0];
                        if (section.getName() === name){
                            section.setOpen(true);
                        } else {
                            section.setOpen(false);
                        }
                    }
                }
            }
            return this;
        }

        public setOpen(name: string): Accordion {
            {
                let array8684 = this.getChildren();
                for(let index8683=0; index8683 < array8684.length; index8683++) {
                    let r = array8684[index8683];
                    {
                        const section: com.spoonconsulting.lightning.AccordionSection = <com.spoonconsulting.lightning.AccordionSection><any>r.getChildren()[0];
                        if (section.getName() === name){
                            if (!section.isOpen()){
                                section.setOpen(true);
                                this.fireSectionToggle();
                            }
                        } else {
                            if (!this.allowMultipleSectionOpen){
                                if (section.isOpen()){
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

        public fireSectionToggle() {
            const sectionToggle: CustomEvent = new CustomEvent("onsectiontoggle");
            const openSections: Array<string> = <any>(new Array<string>());
            {
                let array8686 = this.getSections();
                for(let index8685=0; index8685 < array8686.length; index8685++) {
                    let sect = array8686[index8685];
                    {
                        if (sect.isOpen()){
                            openSections.push(sect.getName());
                        }
                    }
                }
            }
            const detail: Object = <Object>new Object();
            detail["openSections"] = openSections;
            sectionToggle["details"] = detail;
            this.fireListener("onsectiontoggle", sectionToggle);
        }

        public setClose(name: string): Accordion {
            {
                let array8688 = this.getChildren();
                for(let index8687=0; index8687 < array8688.length; index8687++) {
                    let r = array8688[index8687];
                    {
                        const section: com.spoonconsulting.lightning.AccordionSection = <com.spoonconsulting.lightning.AccordionSection><any>r.getChildren()[0];
                        if (section.getName() === name){
                            section.setOpen(false);
                        }
                    }
                }
            }
            return this;
        }

        public isAllowMultipleSectionOpen(): boolean {
            return this.allowMultipleSectionOpen;
        }

        public setAllowMultipleSectionOpen(allowMultipleSectionOpen: boolean) {
            this.allowMultipleSectionOpen = allowMultipleSectionOpen;
        }

        public getSections(): Array<com.spoonconsulting.lightning.AccordionSection> {
            const sections: Array<com.spoonconsulting.lightning.AccordionSection> = <any>(new Array<com.spoonconsulting.lightning.AccordionSection>());
            {
                let array8690 = this.getChildren();
                for(let index8689=0; index8689 < array8690.length; index8689++) {
                    let r = array8690[index8689];
                    {
                        sections.push(<com.spoonconsulting.lightning.AccordionSection><any>r.getChildren()[0]);
                    }
                }
            }
            return sections;
        }

        public getSection(name: string): com.spoonconsulting.lightning.AccordionSection {
            {
                let array8692 = this.getChildren();
                for(let index8691=0; index8691 < array8692.length; index8691++) {
                    let r = array8692[index8691];
                    {
                        const section: com.spoonconsulting.lightning.AccordionSection = <com.spoonconsulting.lightning.AccordionSection><any>r.getChildren()[0];
                        if (section.getName() === name){
                            return section;
                        }
                    }
                }
            }
            return null;
        }
    }
    Accordion["__class"] = "com.spoonconsulting.lightning.Accordion";
    Accordion["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class AccordionSection extends com.spoonconsulting.lightning.BaseLightning {
        /*private*/ summary: JSContainer;

        /*private*/ content: JSContainer;

        /*private*/ summaryHeading: JSContainer;

        /*private*/ summaryHeadingAction: com.spoonconsulting.lightning.Button;

        /*private*/ summaryAction: JSContainer;

        /*private*/ summaryActionIcon: com.spoonconsulting.lightning.Icon;

        /*private*/ actionsSlot: JSContainer;

        public constructor(name: string) {
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
            this.summary.addChild(this.summaryHeading);
            this.summaryHeading.addChild(this.summaryHeadingAction);
            this.summaryHeadingAction.setIconName("utility:switch");
            this.summaryHeadingAction.addClass("slds-button_reset").addClass("slds-accordion__summary-action");
            this.summaryHeadingAction.getIcon().addClass("slds-accordion__summary-action-icon");
            this.summaryHeadingAction.label.addClass("slds-accordion__summary-content");
            this.summary.addChild(this.actionsSlot);
            this.summaryAction.addClass("slds-button").addClass("slds-button_reset").addClass("slds-accordion__summary-action");
            this.actionsSlot.addChild(this.summaryAction);
            this.summaryActionIcon.addClass("slds-accordion__summary-action-icon").addClass("slds-button__icon").addClass("slds-button__icon_left");
            this.summaryActionIcon.setAttribute("aria-hidden", "true");
            this.summaryAction.addChild(this.summaryActionIcon);
            this.setOpen(false);
            this.summary.addEventListener(new AccordionSection.AccordionSection$0(this), "click");
        }

        /**
         * 
         * @param {string} title
         */
        public setTitle(title: string) {
            super.setTitle(title);
            this.summaryAction.setAttribute("title", title);
            this.summaryHeadingAction.setLabel(title).setAttribute("title", title);
        }

        public toggle() {
            this.setOpen(!this.isOpen());
        }

        public isOpen(): boolean {
            return this.hasClass("slds-is-open");
        }

        public setOpen(b: boolean): AccordionSection {
            const accordion: com.spoonconsulting.lightning.Accordion = <any>(this.getAncestorWithClass<any>("slds-accordion"));
            if (b && !this.isOpen()){
                this.addClass("slds-is-open");
                this.summaryAction.setAttribute("aria-expanded", "true");
                if (accordion != null){
                    accordion.setOpen(this.getName());
                }
            } else if (this.isOpen()){
                this.removeClass("slds-is-open");
                this.summaryAction.setAttribute("aria-expanded", "false");
            }
            return this;
        }

        public getSummary(): JSContainer {
            return this.summary;
        }

        public getContent(): JSContainer {
            return this.content;
        }

        public getSummaryHeading(): JSContainer {
            return this.summaryHeading;
        }

        public getSummaryAction(): JSContainer {
            return this.summaryAction;
        }

        public getSummaryActionIcon(): com.spoonconsulting.lightning.Icon {
            return this.summaryActionIcon;
        }

        public getSlot(name: string): JSContainer {
            if (name === "actions"){
                return this.actionsSlot;
            } else {
                return this.content;
            }
        }
    }
    AccordionSection["__class"] = "com.spoonconsulting.lightning.AccordionSection";
    AccordionSection["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace AccordionSection {

        export class AccordionSection$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.toggle();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        AccordionSection$0["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace com.spoonconsulting.lightning {
    export class Badge extends com.spoonconsulting.lightning.BaseLightning {
        /*private*/ label: JSContainer;

        /*private*/ leftIconContainer: com.spoonconsulting.lightning.IconContainer;

        /*private*/ leftBadgeIcon: JSContainer;

        /*private*/ rightIconContainer: com.spoonconsulting.lightning.IconContainer;

        /*private*/ rightBadgeIcon: JSContainer;

        public static POSITION_START: string = "start";

        public static POSITION_END: string = "end";

        public constructor(name: string, tag: string) {
            super(name, "span");
            this.label = new JSContainer("label", "span");
            this.leftIconContainer = new com.spoonconsulting.lightning.IconContainer("left-icon", "span");
            this.leftBadgeIcon = new JSContainer("left-badge-icon", "span");
            this.rightIconContainer = new com.spoonconsulting.lightning.IconContainer("right-icon", "span");
            this.rightBadgeIcon = new JSContainer("right-badge-icon", "span");
            this.addClass("slds-badge");
            this.leftBadgeIcon.addClass("slds-badge__icon").addClass("slds-badge__icon_left");
            this.leftBadgeIcon.addChild(this.leftIconContainer);
            this.addChild(this.label);
            this.rightBadgeIcon.addClass("slds-badge__icon").addClass("slds-badge__icon_right");
            this.rightBadgeIcon.addChild(this.rightIconContainer);
        }

        public setIconAlternativeText(altText: string): Badge {
            this.leftIconContainer.setTitle(altText);
            this.rightIconContainer.setTitle(altText);
            return this;
        }

        public setIconName(iconName: string): Badge {
            if (iconName != null && iconName.length > 0){
                this.leftIconContainer.setIconName(iconName);
                this.rightIconContainer.setIconName(iconName);
                if (this.getChildren().length === 1){
                    this.setIconPosition(Badge.POSITION_START);
                }
            } else {
                this.setIconPosition("none");
            }
            return this;
        }

        public setIconPosition(position: string): Badge {
            this.clearChildren();
            if (position === Badge.POSITION_START){
                this.addChild(this.leftBadgeIcon);
            }
            this.addChild(this.label);
            if (position === Badge.POSITION_END){
                this.addChild(this.rightBadgeIcon);
            }
            this.setRendered(false);
            return this;
        }

        public setLabel(label: string): Badge {
            this.label.setHtml(label);
            return this;
        }
    }
    Badge["__class"] = "com.spoonconsulting.lightning.Badge";
    Badge["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class Button extends com.spoonconsulting.lightning.BaseLightning {
        icon: com.spoonconsulting.lightning.Icon;

        /*private*/ prefixIcon: com.spoonconsulting.lightning.Icon;

        label: JSContainer;

        /*private*/ draft: JSContainer;

        public static ICON_POSITION_LEFT: string = "left";

        public static ICON_POSITION_RIGHT: string = "right";

        public static TYPE_BUTTON: string = "button";

        public static TYPE_SUBMIT: string = "submit";

        public static TYPE_RESET: string = "reset";

        /*private*/ iconName: string;

        /*private*/ iconPosition: string;

        /*private*/ isDraft: boolean;

        /*private*/ draftAlternativeText: string;

        /*private*/ prefixIconName: string;

        public constructor(name: string) {
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
            this.icon.removeClass("slds-icon");
            this.icon.addClass("slds-button__icon");
            this.icon.setAttribute("aria-hidden", "true");
            this.icon.setAttribute("focusabled", "false");
            this.prefixIcon.removeClass("slds-icon");
            this.prefixIcon.addClass("slds-button__icon");
            this.prefixIcon.setAttribute("aria-hidden", "true");
            this.prefixIcon.setAttribute("focusabled", "false");
            this.draft.addClass("slds-indicator_unsaved").addClass("slds-p-right_xx-small");
            this.draft.setHtml("*");
        }

        public refresh(): Button {
            this.clearChildren();
            if (this.prefixIconName != null && this.prefixIconName !== ""){
                this.addChild(this.prefixIcon);
                this.prefixIcon.setIconName(this.prefixIconName);
                this.icon.addClass("slds-button__icon_x-small").addClass("slds-m-left_xx-small");
            } else {
                this.icon.removeClass("slds-button__icon_x-small").removeClass("slds-m-left_xx-small");
            }
            if (this.iconName != null && this.iconName !== ""){
                this.addChild(this.icon);
                this.icon.removeClass("slds-button__icon_right").removeClass("slds-button__icon_left");
                if (this.iconPosition === Button.ICON_POSITION_LEFT){
                    this.icon.addClass("slds-button__icon_left");
                }
                if (this.isDraft){
                    this.addChild(this.draft);
                }
                this.addChild(this.label);
                if (this.iconPosition === Button.ICON_POSITION_RIGHT){
                    this.icon.addClass("slds-button__icon_right");
                }
                this.icon.setIconName(this.iconName);
            } else {
                if (this.isDraft){
                    this.addChild(this.draft);
                }
                this.addChild(this.label);
            }
            if (this.isDraft){
                this.draft.setAttribute("title", this.draftAlternativeText);
            }
            this.setRendered(false);
            return this;
        }

        public getPrefixIconName(): string {
            return this.prefixIconName;
        }

        public setPrefixIconName(prefixIconName: string): Button {
            this.prefixIconName = prefixIconName;
            return this.refresh();
        }

        public setDisabled(b: boolean): Button {
            if (b){
                this.setAttribute("disabled", "true");
            } else {
                this.setAttribute("disabled", null);
            }
            return this;
        }

        public isDisabled(): boolean {
            return "true" === this.getAttribute("disabled");
        }

        public setIconName(iconName: string): Button {
            this.iconName = iconName;
            return this.refresh();
        }

        public getIconName(): string {
            return this.iconName;
        }

        public setIconPosition(position: string): Button {
            this.iconPosition = position;
            return this.refresh();
        }

        public getIconPosition(): string {
            return this.iconPosition;
        }

        public getIsDraft(): boolean {
            return this.isDraft;
        }

        public setIsDraft(isDraft: boolean): Button {
            this.isDraft = isDraft;
            return this.refresh();
        }

        public getDraftAlternativeText(): string {
            return this.draftAlternativeText;
        }

        public setDraftAlternativeText(draftAlternativeText: string): Button {
            this.draftAlternativeText = draftAlternativeText;
            return this.refresh();
        }

        public setLabel(label: string): Button {
            this.label.setHtml(label);
            if (label != null && this.iconPosition == null){
                this.setIconPosition(Button.ICON_POSITION_LEFT);
            }
            return this;
        }

        public getLabel(): string {
            return this.label.getHtml();
        }

        public setType(type: string): Button {
            this.setAttribute("type", type);
            return this;
        }

        public setValue(value: string): Button {
            this.setAttribute("value", value);
            return this;
        }

        public getValue(): string {
            return this.getAttribute("value");
        }

        public setVariant$com_spoonconsulting_lightning_Variant(variant: com.spoonconsulting.lightning.Variant): Button {
            return this.setVariant$java_lang_String(com.spoonconsulting.lightning.Variant["_$wrappers"][variant].getValue());
        }

        public setVariant(variant?: any): any {
            if (((typeof variant === 'number') || variant === null)) {
                return <any>this.setVariant$com_spoonconsulting_lightning_Variant(variant);
            } else if (((typeof variant === 'string') || variant === null)) {
                return <any>this.setVariant$java_lang_String(variant);
            } else throw new Error('invalid overload');
        }

        public setVariant$java_lang_String(variant: string): Button {
            {
                let array8694 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.Variant[] = []; for(let val in com.spoonconsulting.lightning.Variant) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index8693=0; index8693 < array8694.length; index8693++) {
                    let v = array8694[index8693];
                    {
                        this.removeClass("slds-button_" + com.spoonconsulting.lightning.Variant["_$wrappers"][v].getValue());
                    }
                }
            }
            this.addClass("slds-button_" + variant);
            return this;
        }

        public getPrefixIcon(): com.spoonconsulting.lightning.Icon {
            return this.prefixIcon;
        }

        public click() {
            const btn: HTMLElement = this.getElement();
            if (btn != null)btn.click();
        }

        public blur() {
            const btn: HTMLElement = this.getElement();
            if (btn != null){
                btn.blur();
            }
        }

        public getUILabel(): JSContainer {
            return this.label;
        }

        public getIcon(): com.spoonconsulting.lightning.Icon {
            return this.icon;
        }
    }
    Button["__class"] = "com.spoonconsulting.lightning.Button";
    Button["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class ButtonGroup extends com.spoonconsulting.lightning.BaseLightning {
        public constructor(name: string) {
            super(name, "div");
            this.setAttribute("role", "group");
            this.addClass("slds-button-group");
        }

        public addButton(btn: com.spoonconsulting.lightning.Button): ButtonGroup {
            this.addChild(btn);
            return this;
        }
    }
    ButtonGroup["__class"] = "com.spoonconsulting.lightning.ButtonGroup";
    ButtonGroup["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class ButtonMenu extends com.spoonconsulting.lightning.BaseLightning {
        /*private*/ button: com.spoonconsulting.lightning.ButtonIcon;

        /*private*/ dropdown: com.spoonconsulting.lightning.Dropdown;

        /*private*/ menuAlignment: string;

        /*private*/ nubbin: boolean;

        public constructor(name: string, tag: string) {
            super(name, tag);
            this.button = new com.spoonconsulting.lightning.ButtonIcon("button", "utility:down");
            this.dropdown = new com.spoonconsulting.lightning.Dropdown("dropdown");
            this.menuAlignment = com.spoonconsulting.lightning.ButtonMenu.MenuAlignment["_$wrappers"][ButtonMenu.MenuAlignment.LEFT].value;
            this.nubbin = false;
            this.addClass("slds-dropdown-trigger").addClass("slds-dropdown-trigger_click");
            this.button.setVariant$com_spoonconsulting_lightning_ButtonIcon_ButtonIconVariant(com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant.BORDER_FILLED);
            this.button.setAttribute("aria-haspopup", "true");
            this.button.setAttribute("aria-expanded", "true");
            this.addChild(this.button);
            this.addChild(this.dropdown);
            this.button.addEventListener(new ButtonMenu.ButtonMenu$0(this), "click");
        }

        public toggle() {
            this.setExpanded(!this.isExpanded());
        }

        public open() {
            this.setExpanded(true);
        }

        public close() {
            this.setExpanded(false);
        }

        public setExpanded(b: boolean): ButtonMenu {
            if (b){
                this.button.setAttribute("aria-expanded", "true");
                this.addClass("slds-is-open");
            } else {
                this.button.setAttribute("aria-expanded", "false");
                this.removeClass("slds-is-open");
            }
            return this;
        }

        public isExpanded(): boolean {
            return "true" === this.button.getAttribute("aria-expanded");
        }

        public getIsDraft(): boolean {
            return this.button.getIsDraft();
        }

        public setIsDraft(isDraft: boolean): ButtonMenu {
            this.button.setIsDraft(isDraft);
            return this;
        }

        public getDraftAlternativeText(): string {
            return this.button.getDraftAlternativeText();
        }

        public setDraftAlternativeText(draftAlternativeText: string): ButtonMenu {
            this.button.setDraftAlternativeText(draftAlternativeText);
            return this;
        }

        public setIconName(iconName: string): ButtonMenu {
            if (iconName === "utility:down" || iconName === "utility:chevrondown"){
                this.button.setPrefixIconName(null);
                this.button.setIconName(iconName);
            } else {
                this.button.setPrefixIconName(iconName);
                this.button.setIconName("utility:down");
            }
            return this;
        }

        public getIconName(): string {
            if (this.button.getPrefixIconName() != null){
                return this.button.getPrefixIconName();
            } else {
                return this.button.getIconName();
            }
        }

        public setDisabled(b: boolean): ButtonMenu {
            this.button.setDisabled(b);
            if (!b){
                this.setExpanded(false);
            }
            return this;
        }

        public setLabel(label: string): ButtonMenu {
            this.button.setLabel(label);
            return this;
        }

        public getLabel(): string {
            return this.button.getLabel();
        }

        public setIconSize$com_spoonconsulting_lightning_Size(size: com.spoonconsulting.lightning.Size): ButtonMenu {
            return this.setIconSize$java_lang_String(size != null ? com.spoonconsulting.lightning.Size["_$wrappers"][size].getValue() : <string>null);
        }

        public setIconSize(size?: any): any {
            if (((typeof size === 'number') || size === null)) {
                return <any>this.setIconSize$com_spoonconsulting_lightning_Size(size);
            } else if (((typeof size === 'string') || size === null)) {
                return <any>this.setIconSize$java_lang_String(size);
            } else throw new Error('invalid overload');
        }

        public setIconSize$java_lang_String(size: string): ButtonMenu {
            if (this.button.getPrefixIconName() != null){
                this.button.getPrefixIcon().setSize$java_lang_String(size);
            } else {
                this.button.getIcon().setSize$java_lang_String(size);
            }
            return this;
        }

        public setIsLoading(b: boolean): ButtonMenu {
            this.dropdown.setIsLoading(b);
            return this;
        }

        public getIsLoading(): boolean {
            return this.dropdown.getIsLoading();
        }

        public setLoadingStateAlternativeText(txt: string): ButtonMenu {
            this.dropdown.getSpinner().setAlternativeText(txt);
            return this;
        }

        public setMenuAlignment$com_spoonconsulting_lightning_ButtonMenu_MenuAlignment(alignment: ButtonMenu.MenuAlignment): ButtonMenu {
            return this.setMenuAlignment$java_lang_String(alignment != null ? com.spoonconsulting.lightning.ButtonMenu.MenuAlignment["_$wrappers"][alignment].value : com.spoonconsulting.lightning.ButtonMenu.MenuAlignment["_$wrappers"][ButtonMenu.MenuAlignment.AUTO].value);
        }

        public setMenuAlignment(alignment?: any): any {
            if (((typeof alignment === 'number') || alignment === null)) {
                return <any>this.setMenuAlignment$com_spoonconsulting_lightning_ButtonMenu_MenuAlignment(alignment);
            } else if (((typeof alignment === 'string') || alignment === null)) {
                return <any>this.setMenuAlignment$java_lang_String(alignment);
            } else throw new Error('invalid overload');
        }

        public setMenuAlignment$java_lang_String(alignment: string): ButtonMenu {
            this.menuAlignment = alignment;
            return this;
        }

        public getMenuAlignment(): string {
            return this.menuAlignment;
        }

        public isNubbin(): boolean {
            return this.nubbin;
        }

        public setNubbin(nubbin: boolean): ButtonMenu {
            this.nubbin = nubbin;
            this.refresh();
            return this;
        }

        public setValue(val: string): ButtonMenu {
            this.button.setValue(val);
            return this;
        }

        public getValue(): string {
            return this.button.getValue();
        }

        public setVariant$com_spoonconsulting_lightning_ButtonIcon_ButtonIconVariant(variant: com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant): ButtonMenu {
            this.button.setVariant$com_spoonconsulting_lightning_ButtonIcon_ButtonIconVariant(variant);
            return this;
        }

        public setVariant(variant?: any): any {
            if (((typeof variant === 'number') || variant === null)) {
                return <any>this.setVariant$com_spoonconsulting_lightning_ButtonIcon_ButtonIconVariant(variant);
            } else if (((typeof variant === 'string') || variant === null)) {
                return <any>this.setVariant$java_lang_String(variant);
            } else throw new Error('invalid overload');
        }

        public setVariant$java_lang_String(variant: string): ButtonMenu {
            this.button.setVariant$java_lang_String(variant);
            return this;
        }

        public refresh() {
            this.dropdown.removeClass("slds-dropdown_bottom").removeClass("slds-dropdown_left").removeClass("slds-dropdown_right").removeClass("slds-dropdown_center").removeClass("slds-dropdown_bottom-right").removeClass("slds-dropdown_bottom-left").removeClass("slds-nubbin_left").removeClass("slds-nubbin_right").removeClass("slds-nubbin_center").removeClass("slds-nubbin_bottom-right").removeClass("slds-nubbin_bottom-left").removeClass("slds-nubbin_bottom").removeClass("slds-nubbin_top").removeClass("slds-nubbin_top-right").removeClass("slds-nubbin_top-left");
            if (this.menuAlignment === com.spoonconsulting.lightning.ButtonMenu.MenuAlignment["_$wrappers"][ButtonMenu.MenuAlignment.BOTTOM_CENTER].value){
                this.dropdown.addClass("slds-dropdown_bottom");
                if (this.nubbin){
                    this.dropdown.addClass("slds-nubbin_bottom");
                }
            } else if (this.menuAlignment === com.spoonconsulting.lightning.ButtonMenu.MenuAlignment["_$wrappers"][ButtonMenu.MenuAlignment.BOTTOM_RIGHT].value){
                this.dropdown.addClass("slds-dropdown_right").addClass("slds-dropdown_bottom-right");
                if (this.nubbin){
                    this.dropdown.addClass("slds-nubbin_bottom-right");
                }
            } else if (this.menuAlignment === com.spoonconsulting.lightning.ButtonMenu.MenuAlignment["_$wrappers"][ButtonMenu.MenuAlignment.BOTTOM_LEFT].value){
                this.dropdown.addClass("slds-dropdown_left").addClass("slds-dropdown_bottom-left");
                if (this.nubbin){
                    this.dropdown.addClass("slds-nubbin_bottom-left");
                }
            } else if (this.menuAlignment === com.spoonconsulting.lightning.ButtonMenu.MenuAlignment["_$wrappers"][ButtonMenu.MenuAlignment.CENTER].value){
                this.dropdown.addClass("slds-dropdown_center");
                if (this.nubbin){
                    this.dropdown.addClass("slds-nubbin_top");
                }
            } else if (this.menuAlignment === com.spoonconsulting.lightning.ButtonMenu.MenuAlignment["_$wrappers"][ButtonMenu.MenuAlignment.RIGHT].value){
                this.dropdown.addClass("slds-dropdown_right");
                if (this.nubbin){
                    this.dropdown.addClass("slds-nubbin_top-right");
                }
            } else if (this.menuAlignment === com.spoonconsulting.lightning.ButtonMenu.MenuAlignment["_$wrappers"][ButtonMenu.MenuAlignment.LEFT].value){
                this.dropdown.addClass("slds-dropdown_left");
                if (this.nubbin){
                    this.dropdown.addClass("slds-nubbin_top-left");
                }
            } else {
                this.dropdown.addClass("slds-dropdown_left");
                if (this.nubbin){
                    this.dropdown.addClass("slds-nubbin_top-left");
                }
            }
        }
    }
    ButtonMenu["__class"] = "com.spoonconsulting.lightning.ButtonMenu";
    ButtonMenu["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace ButtonMenu {

        export enum MenuAlignment {
            LEFT, RIGHT, CENTER, BOTTOM_LEFT, BOTTOM_RIGHT, BOTTOM_CENTER, AUTO
        }

        /** @ignore */
        export class MenuAlignment_$WRAPPER {
            value;

            constructor(protected _$ordinal: number, protected _$name: string, val) {
                if (this.value === undefined) { this.value = null; }
                this.value = val;
            }
            public name(): string { return this._$name; }
            public ordinal(): number { return this._$ordinal; }
            public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
        }
        MenuAlignment["__class"] = "com.spoonconsulting.lightning.ButtonMenu.MenuAlignment";
        MenuAlignment["__interfaces"] = ["java.lang.constant.Constable","java.lang.Comparable","java.io.Serializable"];

        MenuAlignment["_$wrappers"] = {0: new MenuAlignment_$WRAPPER(0, "LEFT", "top"), 1: new MenuAlignment_$WRAPPER(1, "RIGHT", "right"), 2: new MenuAlignment_$WRAPPER(2, "CENTER", "center"), 3: new MenuAlignment_$WRAPPER(3, "BOTTOM_LEFT", "bottom-left"), 4: new MenuAlignment_$WRAPPER(4, "BOTTOM_RIGHT", "bottom-right"), 5: new MenuAlignment_$WRAPPER(5, "BOTTOM_CENTER", "bottom-center"), 6: new MenuAlignment_$WRAPPER(6, "AUTO", "auto")};


        export class ButtonMenu$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.toggle();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        ButtonMenu$0["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace com.spoonconsulting.lightning {
    export class ButtonStateful extends com.spoonconsulting.lightning.BaseLightning {
        /*private*/ btnNotSelected: ButtonStateful.innerBtn;

        /*private*/ btnSelected: ButtonStateful.innerBtn;

        /*private*/ btnSelectedFocus: ButtonStateful.innerBtn;

        /*private*/ selected: boolean;

        public constructor(name: string) {
            super(name, "button");
            this.btnNotSelected = new ButtonStateful.innerBtn(this, "not-selected");
            this.btnSelected = new ButtonStateful.innerBtn(this, "selected");
            this.btnSelectedFocus = new ButtonStateful.innerBtn(this, "selected-focus");
            this.selected = false;
            this.addClass("slds-button");
            this.addClass("slds-button_stateful");
            this.addChild(this.btnNotSelected).addChild(this.btnSelected).addChild(this.btnSelectedFocus);
            this.addEventListener(new ButtonStateful.ButtonStateful$0(this), "click");
        }

        public getIconNameWhenHover(): string {
            return this.btnSelectedFocus.icon.getIconName();
        }

        public setIconNameWhenHover(iconNameWhenHover: string): ButtonStateful {
            this.btnSelectedFocus.setIconName(iconNameWhenHover);
            return this;
        }

        public getIconNameWhenOff(): string {
            return this.btnNotSelected.icon.getIconName();
        }

        public setIconNameWhenOff(iconNameWhenOff: string): ButtonStateful {
            this.btnNotSelected.setIconName(iconNameWhenOff);
            return this;
        }

        public getIconNameWhenOn(): string {
            return this.btnSelected.icon.getIconName();
        }

        public setIconNameWhenOn(iconNameWhenOn: string): ButtonStateful {
            this.btnSelected.setIconName(iconNameWhenOn);
            return this;
        }

        public getLabelWhenHover(): string {
            return this.btnSelectedFocus.label.getHtml();
        }

        public setLabelWhenHover(labelWhenHover: string): ButtonStateful {
            this.btnSelectedFocus.setLabel(labelWhenHover);
            return this;
        }

        public getLabelWhenOff(): string {
            return this.btnNotSelected.label.getHtml();
        }

        public setLabelWhenOff(labelWhenOff: string): ButtonStateful {
            this.btnNotSelected.setLabel(labelWhenOff);
            return this;
        }

        public getLabelWhenOn(): string {
            return this.btnSelected.label.getHtml();
        }

        public setLabelWhenOn(labelWhenOn: string): ButtonStateful {
            this.btnSelected.setLabel(labelWhenOn);
            return this;
        }

        public setVariant$java_lang_String(variant: string): ButtonStateful {
            {
                let array8696 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.Variant[] = []; for(let val in com.spoonconsulting.lightning.Variant) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index8695=0; index8695 < array8696.length; index8695++) {
                    let v = array8696[index8695];
                    {
                        this.removeClass("slds-button_" + com.spoonconsulting.lightning.Variant["_$wrappers"][v].getValue());
                    }
                }
            }
            if (variant != null && variant !== "")this.addClass("slds-button_" + variant);
            return this;
        }

        public setVariant(variant?: any): any {
            if (((typeof variant === 'string') || variant === null)) {
                return <any>this.setVariant$java_lang_String(variant);
            } else if (((typeof variant === 'number') || variant === null)) {
                return <any>this.setVariant$com_spoonconsulting_lightning_Variant(variant);
            } else throw new Error('invalid overload');
        }

        public setVariant$com_spoonconsulting_lightning_Variant(variant: com.spoonconsulting.lightning.Variant): ButtonStateful {
            return this.setVariant$java_lang_String(variant != null ? com.spoonconsulting.lightning.Variant["_$wrappers"][variant].getValue() : <string>null);
        }

        public setSelected(selected: boolean): ButtonStateful {
            this.selected = selected;
            if (selected){
                this.addClass("slds-is-selected");
                this.removeClass("slds-not-selected");
            } else {
                this.addClass("slds-not-selected");
                this.removeClass("slds-is-selected");
            }
            return this;
        }

        public isSelected(): boolean {
            return this.selected;
        }

        public getBtnNotSelected(): ButtonStateful.innerBtn {
            return this.btnNotSelected;
        }

        public getBtnSelected(): ButtonStateful.innerBtn {
            return this.btnSelected;
        }

        public getSelectedFocus(): ButtonStateful.innerBtn {
            return this.btnSelectedFocus;
        }

        public focus() {
            const elm: HTMLElement = this.getElement();
            if (elm != null){
                elm.focus();
            }
        }
    }
    ButtonStateful["__class"] = "com.spoonconsulting.lightning.ButtonStateful";
    ButtonStateful["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace ButtonStateful {

        export class innerBtn extends JSContainer {
            public __parent: any;
            icon: com.spoonconsulting.lightning.Icon;

            label: JSContainer;

            public constructor(__parent: any, name: string) {
                super(name, "span");
                this.__parent = __parent;
                this.icon = new com.spoonconsulting.lightning.Icon("icon", "utility:add");
                this.label = new JSContainer("label", "span");
                this.addClass("slds-text-" + name);
                this.addChild(this.label);
                this.icon.addClass("slds-button__icon_stateful").addClass("slds-button__icon_left");
            }

            public setLabel(label: string) {
                this.label.setHtml(label);
            }

            public setIconName(iconName: string) {
                this.clearChildren();
                if (iconName != null){
                    this.addChild(this.icon.setIconName(iconName));
                }
                this.addChild(this.label);
                this.setRendered(false);
            }
        }
        innerBtn["__class"] = "com.spoonconsulting.lightning.ButtonStateful.innerBtn";
        innerBtn["__interfaces"] = ["framework.components.api.Renderable"];



        export class ButtonStateful$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.setSelected(!this.__parent.isSelected());
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        ButtonStateful$0["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace com.spoonconsulting.lightning {
    export class IconContainer extends com.spoonconsulting.lightning.BaseLightning {
        /*private*/ icon: com.spoonconsulting.lightning.Icon;

        /*private*/ assistiveText: JSContainer;

        public constructor(name: string, tag: string) {
            super(name, tag);
            this.icon = new com.spoonconsulting.lightning.Icon("icon", "utility:moneybag");
            this.assistiveText = new JSContainer("assistive-text", "span");
            this.addClass("slds-icon_container");
            this.addChild(this.icon);
            this.addChild(this.assistiveText);
            this.assistiveText.addClass("slds-assistive-text");
        }

        public setAssistiveText(txt: string): IconContainer {
            this.assistiveText.setHtml(txt);
            return this;
        }

        public getAssistiveText(): string {
            return this.assistiveText.getHtml();
        }

        public setIconName(iconName: string): IconContainer {
            this.icon.setIconName(iconName);
            const parts: string[] = iconName.split(":");
            this.setAttribute("class", "slds-icon_container " + /* replace *//* replace */"slds-icon-$0-$1".split("$0").join(parts[0]).split("$1").join(parts[1]));
            return this;
        }

        public getIcon(): com.spoonconsulting.lightning.Icon {
            return this.icon;
        }

        public setSize(size: com.spoonconsulting.lightning.Size): IconContainer {
            this.icon.setSize$com_spoonconsulting_lightning_Size(size);
            return this;
        }
    }
    IconContainer["__class"] = "com.spoonconsulting.lightning.IconContainer";
    IconContainer["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class Menu extends com.spoonconsulting.lightning.BaseLightning {
        public constructor(name: string) {
            super(name, "ul");
            this.addClass("slds-dropdown__list");
            this.setAttribute("role", "menu");
        }

        /**
         * 
         * @param {string} title
         */
        public setTitle(title: string) {
            super.setTitle(title);
            this.setAttribute("aria-label", title);
        }

        public addMenuItem(item: com.spoonconsulting.lightning.MenuItem): Menu {
            const li: JSContainer = new JSContainer("", "li");
            li.addClass("slds-dropdown__item").setAttribute("role", "presentation");
            this.addChild(li);
            li.addChild(item);
            return this;
        }

        public addMenuItems(...items: com.spoonconsulting.lightning.MenuItem[]): Menu {
            for(let index8697=0; index8697 < items.length; index8697++) {
                let item = items[index8697];
                {
                    this.addMenuItem(item);
                }
            }
            return this;
        }

        public addMenuDivider(): Menu {
            this.addChild(new com.spoonconsulting.lightning.MenuDivider());
            return this;
        }
    }
    Menu["__class"] = "com.spoonconsulting.lightning.Menu";
    Menu["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class MenuItem extends com.spoonconsulting.lightning.BaseLightning {
        /*private*/ checked_: com.spoonconsulting.lightning.Icon;

        /*private*/ prefixIcon_: com.spoonconsulting.lightning.Icon;

        /*private*/ label: JSContainer;

        /*private*/ span: JSContainer;

        /*private*/ icon_: com.spoonconsulting.lightning.Icon;

        /*private*/ draft_: JSContainer;

        /*private*/ draftAlternativeText: string;

        /*private*/ checked: boolean;

        /*private*/ prefixIconName: string;

        /*private*/ iconName: string;

        /*private*/ value: any;

        /*private*/ draft: boolean;

        public constructor(name: string) {
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
            if (this.value === undefined) { this.value = null; }
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

        public setLabel(label: string): MenuItem {
            this.span.setHtml(label);
            this.label.setAttribute("title", label);
            return this;
        }

        public getLabel(): string {
            return this.span.getHtml();
        }

        public setChecked(b: boolean): MenuItem {
            this.checked = b;
            return this.refresh();
        }

        public getDraftAlternativeText(): string {
            return this.draftAlternativeText;
        }

        public setDraftAlternativeText(draftAlternativeText: string): MenuItem {
            this.draftAlternativeText = draftAlternativeText;
            return this.refresh();
        }

        public refresh(): MenuItem {
            this.clearChildren();
            this.label.clearChildren();
            if (this.checked){
                this.label.addChild(this.checked_);
            }
            if (this.prefixIconName != null){
                this.prefixIcon_.setIconName(this.prefixIconName);
                this.label.addChild(this.prefixIcon_);
            }
            if (this.draft){
                this.label.addChild(this.draft_);
                this.draft_.setAttribute("title", this.draftAlternativeText);
            }
            this.label.addChild(this.span);
            if (this.iconName != null && this.iconName !== ""){
                this.addChild(this.icon_);
                this.icon_.setIconName(this.iconName);
            }
            this.setRendered(false);
            return this;
        }

        public getDraft(): boolean {
            return this.draft;
        }

        public setDraft(draft: boolean): MenuItem {
            this.draft = draft;
            return this.refresh();
        }

        public isChecked(): boolean {
            return this.checked;
        }

        /**
         * 
         * @param {string} title
         */
        public setTitle(title: string) {
            this.setLabel(title);
        }

        public setDisabled(b: boolean): MenuItem {
            if (b){
                this.setAttribute("aria-disabled", "true");
            } else {
                this.setAttribute("aria-disabled", null);
            }
            return this;
        }

        public isDisabled(): boolean {
            return "true" === this.getAttribute("aria-disabled");
        }

        public setDownload(download: string): MenuItem {
            this.setAttribute("download", download);
            return this;
        }

        public getDownload(): string {
            return this.getAttribute("download");
        }

        public setHref(href: string): MenuItem {
            this.setAttribute("href", href);
            return this;
        }

        public getHref(): string {
            return this.getAttribute("href");
        }

        public setIconName(iconName: string): MenuItem {
            this.iconName = iconName;
            return this.refresh();
        }

        public getIconName(): string {
            return this.iconName;
        }

        public getPrefixIconName(): string {
            return this.prefixIconName;
        }

        public setPrefixIconName(prefixIconName: string): MenuItem {
            this.prefixIconName = prefixIconName;
            return this.refresh();
        }

        public setTabIndex(index: number): MenuItem {
            this.setAttribute("tabindex", index + "");
            return this;
        }

        public getTabIndex(): number {
            if (this.getAttribute("tabindex") != null)return /* parseInt */parseInt(this.getAttribute("tabindex"));
            return null;
        }

        public setTarget(target: string): MenuItem {
            this.setAttribute("target", target);
            return this;
        }

        public getTarget(): string {
            return this.getAttribute("target");
        }

        public setValue(value: any): MenuItem {
            this.value = value;
            return this;
        }

        public getValue(): any {
            return this.value;
        }

        public click() {
            const elem: HTMLElement = this.getElement();
            if (elem != null){
                elem.click();
            }
        }

        public focus() {
            const elm: HTMLElement = this.getElement();
            if (elm != null){
                elm.focus();
            }
        }

        public blur() {
            const elm: HTMLElement = this.getElement();
            if (elm != null){
                elm.blur();
            }
        }
    }
    MenuItem["__class"] = "com.spoonconsulting.lightning.MenuItem";
    MenuItem["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class Tab extends com.spoonconsulting.lightning.BaseLightning {
        /*private*/ endIconAlternariveText: string;

        /*private*/ endIconName: string;

        /*private*/ iconAssistiveText: string;

        /*private*/ iconName: string;

        /*private*/ showErrorIndicator: boolean;

        /*private*/ value: string;

        /*private*/ leftIconContainer: com.spoonconsulting.lightning.IconContainer;

        /*private*/ tabLeftIcon: JSContainer;

        /*private*/ rightIconContainer: com.spoonconsulting.lightning.IconContainer;

        /*private*/ tabRightIcon: JSContainer;

        /*private*/ errorIconContainer: com.spoonconsulting.lightning.IconContainer;

        /*private*/ tabErrorIcon: JSContainer;

        /*private*/ label: JSContainer;

        /*private*/ active: boolean;

        public constructor(name: string) {
            super(name, "a");
            this.endIconAlternariveText = null;
            this.endIconName = null;
            this.iconAssistiveText = null;
            this.iconName = null;
            this.showErrorIndicator = false;
            if (this.value === undefined) { this.value = null; }
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

        public getEndIconAlternariveText(): string {
            return this.endIconAlternariveText;
        }

        public setEndIconAlternariveText(endIconAlternariveText: string): Tab {
            this.endIconAlternariveText = endIconAlternariveText;
            return this.refresh();
        }

        public getEndIconName(): string {
            return this.endIconName;
        }

        public setEndIconName(endIconName: string): Tab {
            this.endIconName = endIconName;
            return this.refresh();
        }

        public getIconAssistiveText(): string {
            return this.iconAssistiveText;
        }

        public setIconAssistiveText(iconAssistiveText: string): Tab {
            this.iconAssistiveText = iconAssistiveText;
            return this.refresh();
        }

        public getIconName(): string {
            return this.iconName;
        }

        public setIconName(iconName: string): Tab {
            this.iconName = iconName;
            return this.refresh();
        }

        public getShowErrorIndicator(): boolean {
            return this.showErrorIndicator;
        }

        public setShowErrorIndicator(showErrorIndicator: boolean): Tab {
            this.showErrorIndicator = showErrorIndicator;
            return this.refresh();
        }

        public getValue(): string {
            return this.value;
        }

        public setValue(value: string): Tab {
            this.value = value;
            return this;
        }

        public getLabel(): string {
            return this.label.getHtml();
        }

        public setLabel(label: string): Tab {
            this.label.setHtml(label);
            this.setAttribute("data-label", label);
            return this;
        }

        public isActive(): boolean {
            return this.active;
        }

        public setActive(active: boolean) {
            if (this.active !== active){
                this.active = active;
                if (active){
                    if (this.getParent() != null){
                        if (!this.getParent().hasClass("slds-is-active"))this.getParent().addClass("slds-is-active");
                    }
                    if (this.getAttribute("aria-selected") !== "true"){
                        this.setAttribute("aria-selected", "true");
                    }
                } else {
                    if (this.getParent() != null){
                        if (this.getParent().hasClass("slds-is-active")){
                            this.getParent().removeClass("slds-is-active");
                        }
                    }
                    if (this.getAttribute("aria-selected") !== "false"){
                        this.setAttribute("aria-selected", "false");
                    }
                }
            }
        }

        public refresh(): Tab {
            this.clearChildren();
            if (this.iconName != null && this.iconName !== ""){
                this.addChild(this.tabLeftIcon);
                this.leftIconContainer.setIconName(this.iconName);
            }
            this.addChild(this.label);
            if (this.endIconName != null){
                this.addChild(this.tabRightIcon);
                this.rightIconContainer.setIconName(this.endIconName);
            }
            if (this.showErrorIndicator){
                this.addChild(this.tabErrorIcon);
            }
            this.leftIconContainer.setAssistiveText(this.iconAssistiveText);
            this.rightIconContainer.setAssistiveText(this.endIconAlternariveText);
            return this;
        }
    }
    Tab["__class"] = "com.spoonconsulting.lightning.Tab";
    Tab["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class TabPanel extends com.spoonconsulting.lightning.BaseLightning {
        public constructor(name: string) {
            super(name, "div");
            this.addClass("slds-tabs_default__content");
            this.setAttribute("role", "tabpanel");
            this.addClass("slds-hide");
        }

        public setActive(b: boolean): TabPanel {
            if (b && !this.isActive()){
                this.removeClass("slds-hide");
                this.addClass("slds-show");
            } else if (this.isActive()){
                this.removeClass("slds-show");
                this.addClass("slds-hide");
            }
            return this;
        }

        public isActive(): boolean {
            return this.hasClass("slds-show") && !this.hasClass("slds-hide");
        }
    }
    TabPanel["__class"] = "com.spoonconsulting.lightning.TabPanel";
    TabPanel["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class ComboBox extends com.spoonconsulting.lightning.FormElement<string> {
        /*private*/ combo: com.spoonconsulting.lightning.BaseComboBox;

        /*private*/ messageWhenValueMissing: string;

        public constructor(name: string) {
            super(name, new com.spoonconsulting.lightning.BaseComboBox("combo"));
            if (this.combo === undefined) { this.combo = null; }
            this.messageWhenValueMissing = "This field is required";
            this.combo = <com.spoonconsulting.lightning.BaseComboBox><any>this.getInput();
            this.combo.removeClass("slds-input");
        }

        public setDisabled(b: boolean): ComboBox {
            this.combo.setDisabled(b);
            return this;
        }

        public isDisabled(): boolean {
            return this.combo.isDisabled();
        }

        public setDropdownAlignment(alignment: string): ComboBox {
            this.combo.setDropdownAlignment(alignment);
            return this;
        }

        public getDropdownAlignment(): string {
            return this.combo.getDropdownAlignment();
        }

        public getMessageWhenValueMissing(): string {
            return this.messageWhenValueMissing;
        }

        public setMessageWhenValueMissing(messageWhenValueMissing: string) {
            this.messageWhenValueMissing = messageWhenValueMissing;
        }

        public setOptions(options: Array<Object>): ComboBox {
            this.combo.setOptions(options);
            return this;
        }

        public blur() {
            this.combo.blur();
        }

        public checkValidity(): boolean {
            return this.combo.checkValidity();
        }

        public setCustomValidity(message: string, type: string, description: string) {
            this.combo.setCustomValidity(message, type, description);
        }
    }
    ComboBox["__class"] = "com.spoonconsulting.lightning.ComboBox";
    ComboBox["__interfaces"] = ["framework.components.api.InputField","framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class ButtonIcon extends com.spoonconsulting.lightning.Button {
        public constructor(name: string, iconName: string) {
            super(name);
            this.setIconName(iconName);
            this.label.addClass("slds-assistive-text");
            this.addClass("slds-button_icon");
        }

        public setAlternativeText(altText: string): ButtonIcon {
            this.setLabel(altText);
            return this;
        }

        public setIconClass(iconClass: string): ButtonIcon {
            this.icon.setAttribute("class", "slds-button__icon " + iconClass);
            return this;
        }

        public setSize(size: com.spoonconsulting.lightning.Size): ButtonIcon {
            {
                let array8699 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.Size[] = []; for(let val in com.spoonconsulting.lightning.Size) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index8698=0; index8698 < array8699.length; index8698++) {
                    let s = array8699[index8698];
                    {
                        this.removeClass("slds-button_icon-" + com.spoonconsulting.lightning.Size["_$wrappers"][s].getValue());
                    }
                }
            }
            this.addClass("slds-button_icon-" + com.spoonconsulting.lightning.Size["_$wrappers"][size].getValue());
            return this;
        }

        public setTooltip(tooltip: string): ButtonIcon {
            this.setTitle(tooltip);
            return this;
        }

        public setVariant$java_lang_String(variant: string): ButtonIcon {
            {
                let array8701 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant[] = []; for(let val in com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index8700=0; index8700 < array8701.length; index8700++) {
                    let v = array8701[index8700];
                    {
                        this.removeClass("slds-button_icon-" + com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant["_$wrappers"][v].getValue());
                    }
                }
            }
            this.addClass("slds-button_icon-" + variant);
            return this;
        }

        public setVariant(variant?: any): any {
            if (((typeof variant === 'string') || variant === null)) {
                return <any>this.setVariant$java_lang_String(variant);
            } else if (((typeof variant === 'number') || variant === null)) {
                return <any>this.setVariant$com_spoonconsulting_lightning_ButtonIcon_ButtonIconVariant(variant);
            } else if (((typeof variant === 'number') || variant === null)) {
                return super.setVariant(variant);
            } else if (((typeof variant === 'string') || variant === null)) {
                return <any>this.setVariant$java_lang_String(variant);
            } else throw new Error('invalid overload');
        }

        public setVariant$com_spoonconsulting_lightning_ButtonIcon_ButtonIconVariant(variant: ButtonIcon.ButtonIconVariant): ButtonIcon {
            return this.setVariant$java_lang_String(com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant["_$wrappers"][variant].getValue());
        }

        /**
         * 
         * @param {string} label
         * @return {com.spoonconsulting.lightning.Button}
         */
        public setLabel(label: string): com.spoonconsulting.lightning.Button {
            this.getUILabel().setHtml(label);
            return this;
        }
    }
    ButtonIcon["__class"] = "com.spoonconsulting.lightning.ButtonIcon";
    ButtonIcon["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace ButtonIcon {

        export enum ButtonIconVariant {
            BARE, CONTAINER, BRAND, BORDER, BORDER_FILLED, BARE_INVERSE, BORDER_INVERSE
        }

        /** @ignore */
        export class ButtonIconVariant_$WRAPPER {
            constructor(protected _$ordinal: number, protected _$name: string, value) {
                if (this.value === undefined) { this.value = null; }
                this.value = value;
            }

            value;

            public getValue(): string {
                return this.value;
            }
            public name(): string { return this._$name; }
            public ordinal(): number { return this._$ordinal; }
            public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
        }
        ButtonIconVariant["__class"] = "com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant";
        ButtonIconVariant["__interfaces"] = ["java.lang.constant.Constable","java.lang.Comparable","java.io.Serializable"];

        ButtonIconVariant["_$wrappers"] = {0: new ButtonIconVariant_$WRAPPER(0, "BARE", "bare"), 1: new ButtonIconVariant_$WRAPPER(1, "CONTAINER", "container"), 2: new ButtonIconVariant_$WRAPPER(2, "BRAND", "brand"), 3: new ButtonIconVariant_$WRAPPER(3, "BORDER", "border"), 4: new ButtonIconVariant_$WRAPPER(4, "BORDER_FILLED", "border-filled"), 5: new ButtonIconVariant_$WRAPPER(5, "BARE_INVERSE", "bare-inverse"), 6: new ButtonIconVariant_$WRAPPER(6, "BORDER_INVERSE", "borde-inverse")};

    }

}
namespace com.spoonconsulting.lightning {
    export class ButtonIconStateful extends com.spoonconsulting.lightning.ButtonIcon {
        public constructor(name: string, iconName: string) {
            super(name, iconName);
        }

        public setSelected(b: boolean): ButtonIconStateful {
            if (b){
                this.addClass("slds-is-selected");
            } else {
                this.removeClass("slds-is-selected");
            }
            return this;
        }

        public isSelected(): boolean {
            return this.hasClass("slds-is-selected");
        }
    }
    ButtonIconStateful["__class"] = "com.spoonconsulting.lightning.ButtonIconStateful";
    ButtonIconStateful["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace ButtonIconStateful {

        export enum ButtonIconStatefulVariant {
            BORDER, BORDER_FILLED, BORDER_INVERSE
        }

        /** @ignore */
        export class ButtonIconStatefulVariant_$WRAPPER {
            constructor(protected _$ordinal: number, protected _$name: string, value) {
                if (this.value === undefined) { this.value = null; }
                this.value = value;
            }

            value;

            public getValue(): string {
                return this.value;
            }
            public name(): string { return this._$name; }
            public ordinal(): number { return this._$ordinal; }
            public compareTo(other: any): number { return this._$ordinal - (isNaN(other)?other._$ordinal:other); }
        }
        ButtonIconStatefulVariant["__class"] = "com.spoonconsulting.lightning.ButtonIconStateful.ButtonIconStatefulVariant";
        ButtonIconStatefulVariant["__interfaces"] = ["java.lang.constant.Constable","java.lang.Comparable","java.io.Serializable"];

        ButtonIconStatefulVariant["_$wrappers"] = {0: new ButtonIconStatefulVariant_$WRAPPER(0, "BORDER", "border"), 1: new ButtonIconStatefulVariant_$WRAPPER(1, "BORDER_FILLED", "border-filled"), 2: new ButtonIconStatefulVariant_$WRAPPER(2, "BORDER_INVERSE", "borde-inverse")};

    }

}


com.spoonconsulting.lightning.Boot.main(null);
