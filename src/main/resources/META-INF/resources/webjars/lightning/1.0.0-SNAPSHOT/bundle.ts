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
                let array122 = this.getSteps();
                for(let index121=0; index121 < array122.length; index121++) {
                    let step = array122[index121];
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
                let array124 = this.getSteps();
                for(let index123=0; index123 < array124.length; index123++) {
                    let step = array124[index123];
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
                let array126 = this.getSteps();
                for(let index125=0; index125 < array126.length; index125++) {
                    let step = array126[index125];
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
                let array128 = this.getSteps();
                for(let index127=0; index127 < array128.length; index127++) {
                    let step = array128[index127];
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
    /**
     * Constructs an avatar with the given name
     * @param {string} name - The name of the avatar
     * @class
     * @extends JSContainer
     * @author Kureem Rossaye
     */
    export class Avatar extends JSContainer {
        /*private*/ img: JSContainer;

        /*private*/ fallbackIcon: com.spoonconsulting.lightning.Icon;

        /*private*/ iconContainer: JSContainer;

        /*private*/ initial: JSContainer;

        /**
         * Static variable for image type of avatar.
         */
        public static TYPE_IMAGE: string = "image";

        /**
         * Static variable for initial image type of avatar.
         */
        public static TYPE_INITIAL: string = "initial";

        /**
         * Static variable for icon type of avatar.
         */
        public static TYPE_ICON: string = "icon";

        /**
         * Static variable for square variant of avatar
         */
        public static VARIANT_SQUARE: string = "square";

        /**
         * static variable for circle variant of avatar
         */
        public static VARIANT_CIRCLE: string = "circle";

        /*private*/ type: string;

        /*private*/ size: string;

        public constructor(name: string) {
            super(name, "span");
            this.img = new JSContainer("image", "img");
            this.fallbackIcon = new com.spoonconsulting.lightning.Icon("fallback-icon", "standard:user");
            this.iconContainer = new JSContainer("iconContainer", "span");
            this.initial = new JSContainer("initial", "abbr");
            if (this.type === undefined) { this.type = null; }
            this.size = com.spoonconsulting.lightning.Size["_$wrappers"][com.spoonconsulting.lightning.Size.MEDIUM].getValue();
            this.addClass("slds-avatar");
            this.initial.addClass("slds-avatar__initials").addClass("slds-icon-standard-user");
            this.iconContainer.addClass("slds-icon_container").addClass("slds-icon-standard-account");
            this.iconContainer.addChild(this.fallbackIcon);
            this.setType(Avatar.TYPE_IMAGE);
        }

        /**
         * Sets the type of the {@link Avatar}.
         * <p>An {@link Avatar} comes in 3 types:</p>
         * <ol>
         * <li>Initials - {@link Avatar#TYPE_INITIAL}</li>
         * <li>Icon - {@link Avatar#TYPE_ICON}</li>
         * <li>Image - {@link Avatar#TYPE_IMAGE}</li>
         * </ol>
         * <p><b>The Icon type</b></p>
         * <ul>
         * <li>The icon type will take as parameter the usual icon notation of salesforce, e.g. utility:settings.</li>
         * <li>Use the method <span>{@link Avatar#setFallbackIconName(String)} to set the name of the icon</li>
         * <li>You would usually use this type when the image is not accessible</li>
         * </ul>
         * <div><b>The initials type</b></div>
         * <p>
         * <ul>
         * <li>The initials type will display 3 characters as initials.</li>
         * <li>Use the method {@link Avatar#setInitials(String)} to set the initials</li>
         * </ul>
         * <div><b>The image type</b></div>
         * <ul>
         * <li>The image type will take the url or an image or base64 encoded image as parameter.</li>
         * <li>use the method {@link Avatar#setSrc(String)} to set the src of the image to display in the avatar</li>
         * </ul>
         * 
         * @param {string} type - The type of the the {@link Avatar} (initials, image, icon)
         * @return {com.spoonconsulting.lightning.Avatar} -The current {@link Avatar}
         * @see {@link Avatar#setSrc(String)}
         * @see {@link Avatar#setInitials(String)}
         * @see {@link Avatar#setFallbackIconName(String)}
         */
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

        /**
         * The type of the {@link Avatar}
         * <p>An {@link Avatar} comes in 3 types:</p>
         * <ol>
         * <li>Initials - {@link Avatar#TYPE_INITIAL}</li>
         * <li>Icon - {@link Avatar#TYPE_ICON}</li>
         * <li>Image - {@link Avatar#TYPE_IMAGE}</li>
         * </ol>
         * @return {string} - The type of the {@link Avatar}
         * @see {@link Avatar#setType(String)}
         */
        public getType(): string {
            return this.type;
        }

        /**
         * Sets the variant of the {@link Avatar}<br>
         * The {@link Avatar} comes with 2 variants which are circle and square</br>
         * @param {string} variant - The variant, possible values
         * <ul>
         * <li>{@link Avatar#VARIANT_CIRCLE}</li>
         * <li>{@link Avatar#VARIANT_SQUARE}</li>
         * </ul>
         * 
         * @return {com.spoonconsulting.lightning.Avatar} - The current {@link Avatar}
         */
        public setVariant(variant: string): Avatar {
            this.removeClass("slds-avatar_" + Avatar.VARIANT_CIRCLE).removeClass("slds-avatar_" + Avatar.VARIANT_SQUARE).addClass("slds-avatar_" + this.type);
            return this;
        }

        /**
         * The variant of the {@link Avatar}. Possible value are circle and square
         * <ul>
         * <li>{@link Avatar#VARIANT_CIRCLE}</li>
         * <li>{@link Avatar#VARIANT_SQUARE}</li>
         * </ul>
         * @return {string} - The variant of the {@link Avatar}
         */
        public getVariant(): string {
            if (this.hasClass("slds-avatar_" + Avatar.VARIANT_CIRCLE)){
                return Avatar.VARIANT_CIRCLE;
            } else {
                return Avatar.VARIANT_SQUARE;
            }
        }

        public setSize$com_spoonconsulting_lightning_Size(size: com.spoonconsulting.lightning.Size): Avatar {
            return this.setSize$java_lang_String(size != null ? com.spoonconsulting.lightning.Size["_$wrappers"][size].getValue() : com.spoonconsulting.lightning.Size["_$wrappers"][com.spoonconsulting.lightning.Size.MEDIUM].getValue());
        }

        /**
         * Sets the size of the {@link Avatar}. Possible values are<br>
         * <ul>
         * <li>{@link Size#X_SMALL}</li>
         * <li>{@link Size#SMALL}</li>
         * <li>{@link Size#MEDIUM}</li>
         * <li>{@link Size#LARGE}</li>
         * </ul>
         * @param {com.spoonconsulting.lightning.Size} size - The size of the {@link Avatar}
         * @return {com.spoonconsulting.lightning.Avatar} The current {@link Avatar}
         */
        public setSize(size?: any): any {
            if (((typeof size === 'number') || size === null)) {
                return <any>this.setSize$com_spoonconsulting_lightning_Size(size);
            } else if (((typeof size === 'string') || size === null)) {
                return <any>this.setSize$java_lang_String(size);
            } else throw new Error('invalid overload');
        }

        /**
         * The size of the {@link Avatar}
         * @return {string} The size of the {@link Avatar}
         */
        public getSize(): string {
            return this.size;
        }

        public setSize$java_lang_String(size: string): Avatar {
            {
                let array130 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.Size[] = []; for(let val in com.spoonconsulting.lightning.Size) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index129=0; index129 < array130.length; index129++) {
                    let s = array130[index129];
                    {
                        this.removeClass("slds-avatar_" + com.spoonconsulting.lightning.Size["_$wrappers"][s].getValue());
                    }
                }
            }
            if (size != null){
                this.addClass("slds-avatar_" + size);
                this.size = size;
            } else {
                this.size = com.spoonconsulting.lightning.Size["_$wrappers"][com.spoonconsulting.lightning.Size.MEDIUM].getValue();
            }
            return this;
        }

        /**
         * Sets the title attribute. Message that appears when hovering with the mouse
         * @param {string} title - The message that appears when hovering with the mouse
         * @return {com.spoonconsulting.lightning.Avatar} - This current instance
         */
        public setTitle(title: string): Avatar {
            this.img.setAttribute("title", title);
            this.initial.setAttribute("title", title);
            this.fallbackIcon.setAttribute("title", title);
            return this;
        }

        /**
         * The title attribute. Message that appears when hovering with the mouse
         * @return {string} - The message that appears when hovering with the mouse
         */
        public getTitle(): string {
            return this.img.getAttribute("title");
        }

        /**
         * The initials that appears when the type of the avatar is initials<br>
         * This methods works only for initial type
         * @see {@link Avatar#setType(String)}
         * @see {@link Avatar#TYPE_INITIAL}
         * @return {string} - The initial type of the avatar is initials<br>
         */
        public getInitials(): string {
            return this.initial.getHtml();
        }

        /**
         * Sets the initials that appears when the type of the avatar is initials<br>
         * This methods works only for initial type
         * @see {@link Avatar#setType(String)}
         * @see {@link Avatar#TYPE_INITIAL}
         * @param {string} initials - The initials that appears when the type of the avatar is initials<br>
         * @return {com.spoonconsulting.lightning.Avatar} - This current {@link Avatar} instance
         */
        public setInitials(initials: string): Avatar {
            this.initial.setHtml(initials);
            return this;
        }

        /**
         * The icon name of the icon that appears when the type of the avatar is icon<br>
         * This methods works only for icon type
         * @see {@link Avatar#setType(String)}
         * @see {@link Avatar#TYPE_ICON}
         * @return {string} - The icon that appears when the type of the avatar is icon<br>
         */
        public getFallbackIconName(): string {
            return this.fallbackIcon.getIconName();
        }

        /**
         * Sets the icon name of the icon that appears when the type of the avatar is icon<br>
         * This methods works only for icon type
         * @see {@link Avatar#setType(String)}
         * @see {@link Avatar#TYPE_ICON}
         * @param {string} fallbackIconName - The icon that appears when the type of the avatar is icon<br>
         * @return {com.spoonconsulting.lightning.Avatar} - This current {@link Avatar}
         */
        public setFallbackIconName(fallbackIconName: string): Avatar {
            this.fallbackIcon.setIconName(fallbackIconName);
            return this;
        }

        /**
         * Sets the image that appears when the type of the avatar is image<br>
         * This methods works only for image type
         * @see {@link Avatar#setType(String)}
         * @see {@link Avatar#TYPE_IMAGE}
         * @param {string} src - The source of the image that appears when the type of the avatar is image<br>
         * @return {com.spoonconsulting.lightning.Avatar} - This current {@link Avatar}
         */
        public setSrc(src: string): Avatar {
            this.img.setAttribute("src", src);
            return this;
        }

        /**
         * The source of the image that appears when the type of the avatar is image<br>
         * This methods works only for image type
         * @see {@link Avatar#setType(String)}
         * @see {@link Avatar#TYPE_IMAGE}
         * @return {string} The source of the image that appears when the type of the avatar is image<br>
         */
        public getSrc(): string {
            return this.img.getAttribute("src");
        }

        /**
         * The image that appears when the type of the avatar is image<br>
         * This methods works only for image type
         * @see {@link Avatar#setType(String)}
         * @see {@link Avatar#TYPE_IMAGE}
         * @return {JSContainer} - The image that appears when the type of the avatar is image<br>
         */
        public getImg(): JSContainer {
            return this.img;
        }

        /**
         * * The icon that appears when the type of the avatar is icon<br>
         * This methods works only for icon type
         * @see {@link Avatar#setType(String)}
         * @see {@link Avatar#TYPE_ICON}
         * @return {com.spoonconsulting.lightning.Icon} - The icon that appears when the type of the avatar is icon<br>
         */
        public getFallbackIcon(): com.spoonconsulting.lightning.Icon {
            return this.fallbackIcon;
        }

        /**
         * The component containing the initials that appears when the type of the avatar is initials<br>
         * This methods works only for initial type
         * @see {@link Avatar#setType(String)}
         * @see {@link Avatar#TYPE_INITIAL}
         * @return {JSContainer} - The component containing initial that appears when the type of the avatar is initials<br>
         */
        public getInitial(): JSContainer {
            return this.initial;
        }

        /**
         * An alternative text that appears when the icon cannot be displayed
         * @param {string} altText - The text to appear when the icon cannot be displayed
         * @return {com.spoonconsulting.lightning.Avatar} - This current {@link Avatar}
         */
        public setAlternativeText(altText: string): Avatar {
            this.img.setAttribute("alt", altText).setAttribute("title", altText);
            return this;
        }

        /**
         * The alternative text that appears when the icon cannot be displayed
         * @return {string} - The text that appears when the icon cannot be displayed
         */
        public getAlternativeText(): string {
            return this.img.getAttribute("alt");
        }
    }
    Avatar["__class"] = "com.spoonconsulting.lightning.Avatar";
    Avatar["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class BaseComboBox<T> extends JSContainer implements api.InputField<T> {
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
            this.addClass("slds-combobox_container").addChild(this.combobox);
            this.combobox.addClass("slds-combobox").addClass("slds-dropdown-trigger").addClass("slds-dropdown-trigger_click").setAttribute("aria-expanded", "false").setAttribute("aria-haspopup", "listbox").setAttribute("role", "combobox").addChild(this.formElement).addChild(this.dropdown);
            this.formElement.setAttribute("role", "none").addClass("slds-combobox__form-element").addClass("slds-input-has-icon").addClass("slds-input-has-icon_right").addChild(this.input).addChild(this.inputIconContainer);
            this.input.addClass("slds-input").addClass("slds-combobox__input").setAttribute("role", "textbox").setAttribute("autocomplete", "off").setAttribute("aria-autocomplete", "none").setAttribute("readonly", "true").addEventListener(new BaseComboBox.BaseComboBox$0(this), "click");
            this.inputIconContainer.addClass("slds-input__icon-group").addClass("slds-input__icon-group_right").addChild(this.inputIcon);
            this.inputIcon.setIconName("utility:down").setSize(com.spoonconsulting.lightning.Size.EXTRA_EXTRA_SMALL).addClass("slds-input__icon").addClass("slds-input__icon_right");
            this.inputIcon.getIcon().addClass("slds-icon-text-default");
            this.dropdown.addEventListener(new BaseComboBox.BaseComboBox$1(this), "change");
        }

        public setOptions(options: Array<Object>): BaseComboBox<T> {
            this.dropdown.setOptions(options);
            return this;
        }

        public toggleDropdown() {
            this.setExpand(!this.isExpanded());
        }

        public isExpanded(): boolean {
            return this.combobox.getAttribute("aria-expanded") === "true";
        }

        public setExpand(b: boolean): BaseComboBox<T> {
            if (b){
                this.combobox.setAttribute("aria-expanded", "true").addClass("slds-is-open");
                this.dropdown.addClass("slds-dropdown_length_with-icon-7");
            } else {
                this.combobox.setAttribute("aria-expanded", "false").removeClass("slds-is-open");
                this.dropdown.removeClass("slds-dropdown_length_with-icon-7");
            }
            return this;
        }

        encode(s: string): T {
            return <T><any>s;
        }

        decode(t: T): string {
            if (t == null){
                return <string>null;
            }
            return t.toString();
        }

        /**
         * 
         * @return {*}
         */
        public getValue(): T {
            return this.encode(this.input.getValue());
        }

        /**
         * 
         * @param {*} val
         */
        public setValue(val: T) {
            this.input.setValue(this.decode(val));
            this.dropdown.setValue(this.decode(val));
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
        public setBinding(binding: string): api.InputField<T> {
            this.setAttribute("binding", binding);
            return this;
        }

        /**
         * 
         * @param {boolean} b
         * @return {*}
         */
        public setRequired(b: boolean): api.InputField<T> {
            this.input.setRequired(b);
            return this;
        }

        public setDisabled(b: boolean): BaseComboBox<T> {
            this.input.setDisabled(b);
            return this;
        }

        public isDisabled(): boolean {
            return this.input.getAttribute("disabled") === "true";
        }

        public setDropdownAlignment(alignment: string): BaseComboBox<T> {
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

        public setCustomValidity(message: string, type: string, description: string): BaseComboBox<T> {
            const __in: HTMLInputElement = <HTMLInputElement>this.input.getElement();
            if (__in != null)__in.setCustomValidity(message);
            return this;
        }

        public getCombobox(): JSContainer {
            return this.combobox;
        }

        public getInput(): input.JSTextInput {
            return this.input;
        }

        public getDropdown(): com.spoonconsulting.lightning.ListBox {
            return this.dropdown;
        }

        public getInputIcon(): com.spoonconsulting.lightning.IconContainer {
            return this.inputIcon;
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
                this.__parent.toggleDropdown();
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
                const val: string = this.__parent.dropdown.getValue();
                this.__parent.input.setValue(val);
                this.__parent.setExpand(false);
                this.__parent.fireListener("change", evt);
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
            app.setStyle("height", "100vh");
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

        /*private*/ static getButtons(): JSContainer {
            const layout: com.spoonconsulting.lightning.Layout = new com.spoonconsulting.lightning.Layout("l", "div");
            layout.setMultipleRows(true);
            const head: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("head", "div").setPadding$com_spoonconsulting_lightning_LayoutItem_Padding(com.spoonconsulting.lightning.LayoutItem.Padding.AROUND_MEDIUM);
            head.setSize(12);
            layout.addChild(head);
            const box: com.spoonconsulting.lightning.ComboBox = new com.spoonconsulting.lightning.ComboBox("variants");
            const variants: Array<Object> = <any>(new Array<Object>());
            {
                let array132 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.Variant[] = []; for(let val in com.spoonconsulting.lightning.Variant) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index131=0; index131 < array132.length; index131++) {
                    let __var = array132[index131];
                    {
                        const variant: Object = <Object>new Object();
                        variant["value"] = com.spoonconsulting.lightning.Variant["_$wrappers"][__var].getValue();
                        variant["label"] = com.spoonconsulting.lightning.Variant["_$wrappers"][__var].getValue();
                        variants.push(variant);
                    }
                }
            }
            box.setOptions(variants);
            box.setLabel("Variants");
            const cbsize: com.spoonconsulting.lightning.ComboBox = new com.spoonconsulting.lightning.ComboBox("cbsize");
            cbsize.setLabel("Change Size:");
            const sizes: Array<Object> = <any>(new Array<Object>());
            {
                let array134 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.Size[] = []; for(let val in com.spoonconsulting.lightning.Size) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index133=0; index133 < array134.length; index133++) {
                    let size = array134[index133];
                    {
                        const opt: any = {};
                        opt["value"] = com.spoonconsulting.lightning.Size["_$wrappers"][size].getValue();
                        opt["label"] = com.spoonconsulting.lightning.Size["_$wrappers"][size].getValue();
                        sizes.push(opt);
                    }
                }
            }
            cbsize.setOptions(sizes);
            const itemsize: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("ss", "div").setSize(12).setPadding$com_spoonconsulting_lightning_LayoutItem_Padding(com.spoonconsulting.lightning.LayoutItem.Padding.AROUND_MEDIUM);
            layout.addChild(itemsize);
            head.addChild(box);
            const button: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("btn").setLabel("Button");
            const iconButton: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("btnIcon").setLabel("Button");
            iconButton.setIconName("utility:check");
            const iconButtonRight: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("iconBtnRight").setLabel("Button");
            iconButtonRight.setIconName("utility:check");
            iconButtonRight.setIconPosition(com.spoonconsulting.lightning.Button.ICON_POSITION_RIGHT);
            const item: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("btns", "div").setPadding$com_spoonconsulting_lightning_LayoutItem_Padding(com.spoonconsulting.lightning.LayoutItem.Padding.AROUND_MEDIUM);
            item.setSize(12);
            layout.addChild(item);
            const btns: com.spoonconsulting.lightning.Layout = new com.spoonconsulting.lightning.Layout("btns", "div");
            const item1: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("item1", "div").setPadding$com_spoonconsulting_lightning_LayoutItem_Padding(com.spoonconsulting.lightning.LayoutItem.Padding.AROUND_MEDIUM).setSize((12 / 6|0));
            const item2: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("item1", "div").setPadding$com_spoonconsulting_lightning_LayoutItem_Padding(com.spoonconsulting.lightning.LayoutItem.Padding.AROUND_MEDIUM).setSize((12 / 6|0));
            const item3: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("item1", "div").setPadding$com_spoonconsulting_lightning_LayoutItem_Padding(com.spoonconsulting.lightning.LayoutItem.Padding.AROUND_MEDIUM).setSize((12 / 6|0));
            const item4: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("item1", "div").setPadding$com_spoonconsulting_lightning_LayoutItem_Padding(com.spoonconsulting.lightning.LayoutItem.Padding.AROUND_MEDIUM).setSize((12 / 6|0));
            const item5: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("item1", "div").setPadding$com_spoonconsulting_lightning_LayoutItem_Padding(com.spoonconsulting.lightning.LayoutItem.Padding.AROUND_MEDIUM).setSize((12 / 6|0));
            const item6: com.spoonconsulting.lightning.LayoutItem = new com.spoonconsulting.lightning.LayoutItem("item1", "div").setPadding$com_spoonconsulting_lightning_LayoutItem_Padding(com.spoonconsulting.lightning.LayoutItem.Padding.AROUND_MEDIUM).setSize((12 / 6|0));
            const diablebtn: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("dis").setLabel("Click to disable");
            diablebtn.setVariant$com_spoonconsulting_lightning_Variant(com.spoonconsulting.lightning.Variant.BRAND);
            diablebtn.addEventListener(new Boot.Boot$0(diablebtn), "click");
            const stf: com.spoonconsulting.lightning.ButtonStateful = new com.spoonconsulting.lightning.ButtonStateful("stf");
            stf.setIconNameWhenHover("utility:download");
            stf.setLabelWhenHover("Hover");
            stf.setIconNameWhenOff("utility:delete");
            stf.setLabelWhenOff("Not selected");
            stf.setIconNameWhenOn("utility:down");
            stf.setLabelWhenOn("Selected");
            stf.setVariant$com_spoonconsulting_lightning_Variant(com.spoonconsulting.lightning.Variant.DESTRUCTIVE);
            const btni: com.spoonconsulting.lightning.ButtonIcon = new com.spoonconsulting.lightning.ButtonIcon("btni", "utility:settings");
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
            toggle.addEventListener(new Boot.Boot$4(indicator), "click");
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

        /*private*/ static getModal(): JSContainer {
            const container: JSContainer = new JSContainer("ctn", "div");
            const button: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("open");
            button.setVariant$com_spoonconsulting_lightning_Variant(com.spoonconsulting.lightning.Variant.BRAND);
            button.setLabel("Open");
            container.addChild(button);
            const modal: com.spoonconsulting.lightning.Modal = new com.spoonconsulting.lightning.Modal("modal");
            const firstName: com.spoonconsulting.lightning.FormElement<string> = <any>(new com.spoonconsulting.lightning.FormElement<string>("firstName", new input.JSTextInput("firstName")));
            const lastName: com.spoonconsulting.lightning.FormElement<string> = <any>(new com.spoonconsulting.lightning.FormElement<string>("lastName", new input.JSTextInput("lastName")));
            const email: com.spoonconsulting.lightning.FormElement<string> = <any>(new com.spoonconsulting.lightning.FormElement<string>("email", new input.JSTextInput("email")));
            firstName.setLabel("First Name");
            lastName.setLabel("Last Name");
            email.setLabel("Email");
            const form: input.JSForm = new input.JSForm("form");
            form.setStyle("padding", "0.5rem");
            modal.setTitle("User Registration");
            form.addChild(firstName);
            form.addChild(lastName);
            form.addChild(email);
            modal.getContent().addChild(form);
            const save: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("save");
            save.setLabel("Save");
            save.setVariant$com_spoonconsulting_lightning_Variant(com.spoonconsulting.lightning.Variant.BRAND);
            const cancel: com.spoonconsulting.lightning.Button = new com.spoonconsulting.lightning.Button("cancel");
            cancel.setLabel("Cancel");
            cancel.setVariant$com_spoonconsulting_lightning_Variant(com.spoonconsulting.lightning.Variant.NEUTRAL);
            cancel.addEventListener(new Boot.Boot$5(modal), "click");
            save.addEventListener(new Boot.Boot$6(form), "click");
            form.addEventListener(new Boot.Boot$7(form), "onSubmit");
            modal.getFooter().addChild(save);
            modal.getFooter().addChild(cancel);
            container.addChild(modal);
            const bd: com.spoonconsulting.lightning.Modal.BackDrop = new com.spoonconsulting.lightning.Modal.BackDrop("bd");
            container.addChild(bd);
            modal.setBackdrop(bd);
            button.addEventListener(new Boot.Boot$8(modal), "click");
            return container;
        }

        public static getVerticalMenu(): com.spoonconsulting.lightning.TabSet {
            const set: com.spoonconsulting.lightning.TabSet = new com.spoonconsulting.lightning.TabSet("menu");
            set.setVariant$com_spoonconsulting_lightning_TabSet_TabSetVariant(com.spoonconsulting.lightning.TabSet.TabSetVariant.VERTICAL).setStyle("height", "100vh");
            Boot.addVerticalTab("Accordion", Boot.getAccordionSample(), set);
            Boot.addVerticalTab("Paths", Boot.getPathSample(), set);
            Boot.addVerticalTab("Combo box", Boot.getSampleCOmbo(), set);
            Boot.addVerticalTab("Buttons", Boot.getButtons(), set);
            Boot.addVerticalTab("Modals", Boot.getModal(), set);
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
                this.diablebtn.setDisabled(!this.diablebtn.isDisabled());
                this.diablebtn.setLabel("Disabled");
            }

            constructor(private diablebtn: any) {
            }
        }
        Boot$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class Boot$1 implements api.EventListener {
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.btni.setVariant$com_spoonconsulting_lightning_ButtonIcon_ButtonIconVariant(com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant.BRAND);
            }

            constructor(private btni: any) {
            }
        }
        Boot$1["__interfaces"] = ["framework.components.api.EventListener"];



        export class Boot$2 implements api.EventListener {
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const variant: string = this.box.getValue();
                this.button.setVariant$java_lang_String(variant);
                this.iconButton.setVariant$java_lang_String(variant);
                this.iconButtonRight.setVariant$java_lang_String(variant);
            }

            constructor(private box: any, private button: any, private iconButton: any, private iconButtonRight: any) {
            }
        }
        Boot$2["__interfaces"] = ["framework.components.api.EventListener"];



        export class Boot$3 implements api.EventListener {
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const size: string = this.cbsize.getValue();
                this.btni.setSize$java_lang_String(size);
            }

            constructor(private cbsize: any, private btni: any) {
            }
        }
        Boot$3["__interfaces"] = ["framework.components.api.EventListener"];



        export class Boot$4 implements api.EventListener {
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
        Boot$4["__interfaces"] = ["framework.components.api.EventListener"];



        export class Boot$5 implements api.EventListener {
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.modal.close();
            }

            constructor(private modal: any) {
            }
        }
        Boot$5["__interfaces"] = ["framework.components.api.EventListener"];



        export class Boot$6 implements api.EventListener {
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.form.submit();
            }

            constructor(private form: any) {
            }
        }
        Boot$6["__interfaces"] = ["framework.components.api.EventListener"];



        export class Boot$7 implements api.EventListener {
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const data: Object = this.form.getData();
                alert(JSON.stringify(data));
            }

            constructor(private form: any) {
            }
        }
        Boot$7["__interfaces"] = ["framework.components.api.EventListener"];



        export class Boot$8 implements api.EventListener {
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.modal.open();
            }

            constructor(private modal: any) {
            }
        }
        Boot$8["__interfaces"] = ["framework.components.api.EventListener"];


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
                let array136 = this.getChildren();
                for(let index135=0; index135 < array136.length; index135++) {
                    let r = array136[index135];
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
                let array138 = this.getChildren();
                for(let index137=0; index137 < array138.length; index137++) {
                    let r = array138[index137];
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
    export class Card extends JSContainer {
        /*private*/ header: JSContainer;

        /*private*/ media: JSContainer;

        /*private*/ mediaFigure: JSContainer;

        /*private*/ icon: com.spoonconsulting.lightning.IconContainer;

        /*private*/ mediaBody: JSContainer;

        /*private*/ mediaBodyTitle: JSContainer;

        /*private*/ title: JSContainer;

        /*private*/ mediaAction: JSContainer;

        /*private*/ body: JSContainer;

        /*private*/ footer: JSContainer;

        public constructor(name: string, tag: string) {
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

        public getSlot(name: string): JSContainer {
            if (name === "title"){
                return this.mediaBodyTitle;
            } else if (name === "actions"){
                return this.mediaAction;
            } else if (name === "footer"){
                return this.footer;
            } else {
                return this.body;
            }
        }

        public getBody(): JSContainer {
            return this.body;
        }

        public getHeader(): JSContainer {
            return this.header;
        }

        public getActions(): JSContainer {
            return this.mediaAction;
        }

        public getFooter(): JSContainer {
            return this.footer;
        }

        public setIconName(iconName: string): Card {
            this.mediaFigure.clearChildren();
            if (iconName != null){
                this.icon.setIconName(iconName);
                this.mediaFigure.addChild(this.icon);
            }
            return this;
        }

        public getIconName(): string {
            if (this.mediaFigure.getChildren().indexOf(this.icon) >= 0){
                return this.icon.getIcon().getIconName();
            } else {
                return null;
            }
        }

        public setTitle(title: string): Card {
            this.title.setHtml(title);
            return this;
        }

        public getTitle(): string {
            return this.title.getHtml();
        }

        public setVariant$java_lang_String(variant: string): Card {
            this.removeClass("slds-card_narrow");
            if (variant === com.spoonconsulting.lightning.Card.CardVariant["_$wrappers"][Card.CardVariant.NARROW].value){
                this.addClass("slds-card_narrow");
            }
            return this;
        }

        public setVariant(variant?: any): any {
            if (((typeof variant === 'string') || variant === null)) {
                return <any>this.setVariant$java_lang_String(variant);
            } else if (((typeof variant === 'number') || variant === null)) {
                return <any>this.setVariant$com_spoonconsulting_lightning_Card_CardVariant(variant);
            } else throw new Error('invalid overload');
        }

        public setVariant$com_spoonconsulting_lightning_Card_CardVariant(variant: Card.CardVariant): Card {
            return this.setVariant$java_lang_String(variant != null ? com.spoonconsulting.lightning.Card.CardVariant["_$wrappers"][variant].value : <string>null);
        }

        public getVariant(): string {
            if (this.hasClass("slds-card_narrow")){
                return com.spoonconsulting.lightning.Card.CardVariant["_$wrappers"][Card.CardVariant.NARROW].value;
            } else {
                return com.spoonconsulting.lightning.Card.CardVariant["_$wrappers"][Card.CardVariant.BASE].value;
            }
        }
    }
    Card["__class"] = "com.spoonconsulting.lightning.Card";
    Card["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace Card {

        export enum CardVariant {
            BASE, NARROW
        }

        /** @ignore */
        export class CardVariant_$WRAPPER {
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
        CardVariant["__class"] = "com.spoonconsulting.lightning.Card.CardVariant";
        CardVariant["__interfaces"] = ["java.lang.constant.Constable","java.lang.Comparable","java.io.Serializable"];

        CardVariant["_$wrappers"] = {0: new CardVariant_$WRAPPER(0, "BASE", "base"), 1: new CardVariant_$WRAPPER(1, "NARROW", "narrow")};

    }

}
namespace com.spoonconsulting.lightning {
    export class CheckBox extends JSContainer implements api.InputField<boolean> {
        /*private*/ checkbox: input.JSCheckBox;

        /*private*/ checkBoxLabel: JSContainer;

        /*private*/ label: JSContainer;

        public constructor(name: string) {
            super(name, "span");
            this.checkbox = new input.JSCheckBox("input");
            this.checkBoxLabel = new JSContainer("checkbox-label", "label");
            this.label = new JSContainer("label", "span");
            this.addClass("slds-checkbox");
            this.addChild(this.checkbox);
            this.addChild(this.checkBoxLabel);
            this.checkBoxLabel.addClass("slds-checkbox__label");
            this.checkBoxLabel.addChild("faux", "span", "slds-checkbox_faux");
            this.label.addClass("slds-form-element__label");
            this.checkBoxLabel.addChild(this.label);
        }

        getCheckBoxLabel(): JSContainer {
            return this.checkBoxLabel;
        }

        public getLabel(): string {
            return this.label.getHtml();
        }

        public setLabel(label: string): CheckBox {
            this.label.setHtml(label);
            return this;
        }

        public getCheckBox(): input.JSCheckBox {
            return this.checkbox;
        }

        /**
         * 
         * @return {boolean}
         */
        public getValue(): boolean {
            return this.checkbox.getValue();
        }

        /**
         * 
         * @param {boolean} val
         */
        public setValue(val: boolean) {
            this.checkbox.setValue(val);
        }

        /**
         * 
         */
        public validate() {
            this.checkbox.validate();
        }

        /**
         * 
         * @return {string}
         */
        public getBinding(): string {
            return this.checkbox.getBinding();
        }

        /**
         * 
         * @param {string} binding
         * @return {*}
         */
        public setBinding(binding: string): api.InputField<boolean> {
            this.checkbox.setBinding(binding);
            return this;
        }

        /**
         * 
         * @param {boolean} b
         * @return {*}
         */
        public setRequired(b: boolean): api.InputField<boolean> {
            this.checkbox.setRequired(b);
            return this;
        }
    }
    CheckBox["__class"] = "com.spoonconsulting.lightning.CheckBox";
    CheckBox["__interfaces"] = ["framework.components.api.InputField","framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class CheckBoxButton extends JSContainer implements api.InputField<boolean> {
        /*private*/ checkBox: input.JSCheckBox;

        /*private*/ faux: JSContainer;

        /*private*/ label: JSContainer;

        public constructor(name: string) {
            super(name, "div");
            this.checkBox = new input.JSCheckBox("input");
            this.faux = new JSContainer("faux", "label");
            this.label = new JSContainer("label", "span");
            this.addChild(this.checkBox);
            this.addClass("slds-checkbox_add-button");
            this.checkBox.addClass("slds-assistive-text");
            this.addChild(this.faux);
            this.faux.addChild(this.label);
            this.label.addClass("slds-assistive-text");
        }

        public getLabel(): string {
            return this.label.getHtml();
        }

        public setLabel(label: string): CheckBoxButton {
            this.label.setHtml(label);
            return this;
        }

        public getCheckBox(): input.JSCheckBox {
            return this.checkBox;
        }

        /**
         * 
         * @return {boolean}
         */
        public getValue(): boolean {
            return this.checkBox.getValue();
        }

        /**
         * 
         * @param {boolean} val
         */
        public setValue(val: boolean) {
            this.checkBox.setValue(val);
        }

        /**
         * 
         */
        public validate() {
            this.checkBox.validate();
        }

        /**
         * 
         * @return {string}
         */
        public getBinding(): string {
            return this.checkBox.getBinding();
        }

        /**
         * 
         * @param {string} binding
         * @return {*}
         */
        public setBinding(binding: string): api.InputField<boolean> {
            this.checkBox.setBinding(binding);
            return this;
        }

        /**
         * 
         * @param {boolean} b
         * @return {*}
         */
        public setRequired(b: boolean): api.InputField<boolean> {
            this.checkBox.setRequired(b);
            return this;
        }
    }
    CheckBoxButton["__class"] = "com.spoonconsulting.lightning.CheckBoxButton";
    CheckBoxButton["__interfaces"] = ["framework.components.api.InputField","framework.components.api.Renderable"];


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

        public constructor(name?: any, input?: any) {
            if (((typeof name === 'string') || name === null) && ((input != null && (input.constructor != null && input.constructor["__interfaces"] != null && input.constructor["__interfaces"].indexOf("framework.components.api.InputField") >= 0)) || input === null)) {
                let __args = arguments;
                super(name, "div");
                if (this.input === undefined) { this.input = null; } 
                if (this.value === undefined) { this.value = null; } 
                this.labelCtn = new JSContainer("label-ctn", "label");
                this.required = new JSContainer("required", "abbr");
                this.label = new JSContainer("label", "span");
                this.controlCtn = new JSContainer("control-ctn", "div");
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
            } else if (((typeof name === 'string') || name === null) && input === undefined) {
                let __args = arguments;
                super(name, "div");
                if (this.input === undefined) { this.input = null; } 
                if (this.value === undefined) { this.value = null; } 
                this.labelCtn = new JSContainer("label-ctn", "label");
                this.required = new JSContainer("required", "abbr");
                this.label = new JSContainer("label", "span");
                this.controlCtn = new JSContainer("control-ctn", "div");
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
                this.addChild(this.help);
                this.help.addClass("slds-form-element__help");
                this.help.setStyle("display", "none");
                this.setRequired(false);
            } else throw new Error('invalid overload');
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
                let array140 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.Size[] = []; for(let val in com.spoonconsulting.lightning.Size) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index139=0; index139 < array140.length; index139++) {
                    let s = array140[index139];
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
    export enum InputType {
        CHECKBOX, CHECKBOX_BUTTON, DATE, DATETIME, TIME, EMAIL, FILE, PASSWORD, SEARCH, TEL, URL, NUMBER, TEXT, TOGGLE
    }

    /** @ignore */
    export class InputType_$WRAPPER {
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
    InputType["__class"] = "com.spoonconsulting.lightning.InputType";
    InputType["__interfaces"] = ["java.lang.constant.Constable","java.lang.Comparable","java.io.Serializable"];

    InputType["_$wrappers"] = {0: new InputType_$WRAPPER(0, "CHECKBOX", "checkbox"), 1: new InputType_$WRAPPER(1, "CHECKBOX_BUTTON", "checkbox-button"), 2: new InputType_$WRAPPER(2, "DATE", "date"), 3: new InputType_$WRAPPER(3, "DATETIME", "datetime"), 4: new InputType_$WRAPPER(4, "TIME", "time"), 5: new InputType_$WRAPPER(5, "EMAIL", "email"), 6: new InputType_$WRAPPER(6, "FILE", "file"), 7: new InputType_$WRAPPER(7, "PASSWORD", "password"), 8: new InputType_$WRAPPER(8, "SEARCH", "search"), 9: new InputType_$WRAPPER(9, "TEL", "tel"), 10: new InputType_$WRAPPER(10, "URL", "url"), 11: new InputType_$WRAPPER(11, "NUMBER", "number"), 12: new InputType_$WRAPPER(12, "TEXT", "text"), 13: new InputType_$WRAPPER(13, "TOGGLE", "toggle")};

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

        public getAlignmentBump(): string {
            return this.alignmentBumb;
        }

        public setAlignmentBump$com_spoonconsulting_lightning_LayoutItem_AlignmentBump(al: LayoutItem.AlignmentBump): LayoutItem {
            return this.setAlignmentBump$java_lang_String(al != null ? com.spoonconsulting.lightning.LayoutItem.AlignmentBump["_$wrappers"][al].value : <string>null);
        }

        public setAlignmentBump(al?: any): any {
            if (((typeof al === 'number') || al === null)) {
                return <any>this.setAlignmentBump$com_spoonconsulting_lightning_LayoutItem_AlignmentBump(al);
            } else if (((typeof al === 'string') || al === null)) {
                return <any>this.setAlignmentBump$java_lang_String(al);
            } else throw new Error('invalid overload');
        }

        public setAlignmentBump$java_lang_String(alignmentBumb: string): LayoutItem {
            this.alignmentBumb = alignmentBumb;
            {
                let array142 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.LayoutItem.AlignmentBump[] = []; for(let val in com.spoonconsulting.lightning.LayoutItem.AlignmentBump) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index141=0; index141 < array142.length; index141++) {
                    let a = array142[index141];
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

        public setFlexibility$com_spoonconsulting_lightning_LayoutItem_Flexibility(flexi: LayoutItem.Flexibility): LayoutItem {
            return this.setFlexibility$java_lang_String(flexi != null ? com.spoonconsulting.lightning.LayoutItem.Flexibility["_$wrappers"][flexi].value : <string>null);
        }

        public setFlexibility(flexi?: any): any {
            if (((typeof flexi === 'number') || flexi === null)) {
                return <any>this.setFlexibility$com_spoonconsulting_lightning_LayoutItem_Flexibility(flexi);
            } else if (((typeof flexi === 'string') || flexi === null)) {
                return <any>this.setFlexibility$java_lang_String(flexi);
            } else throw new Error('invalid overload');
        }

        public setFlexibility$java_lang_String(flexibility: string): LayoutItem {
            this.flexibility = flexibility;
            {
                let array144 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.LayoutItem.Flexibility[] = []; for(let val in com.spoonconsulting.lightning.LayoutItem.Flexibility) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index143=0; index143 < array144.length; index143++) {
                    let f = array144[index143];
                    {
                        this.removeClass("slds-" + com.spoonconsulting.lightning.LayoutItem.Flexibility["_$wrappers"][f].value);
                    }
                }
            }
            if (flexibility != null){
                const fxs: string[] = flexibility.split(",");
                for(let index145=0; index145 < fxs.length; index145++) {
                    let fx = fxs[index145];
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

        public setPadding$com_spoonconsulting_lightning_LayoutItem_Padding(pading: LayoutItem.Padding): LayoutItem {
            return this.setPadding$java_lang_String(pading != null ? com.spoonconsulting.lightning.LayoutItem.Padding["_$wrappers"][pading].value : <string>null);
        }

        public setPadding(pading?: any): any {
            if (((typeof pading === 'number') || pading === null)) {
                return <any>this.setPadding$com_spoonconsulting_lightning_LayoutItem_Padding(pading);
            } else if (((typeof pading === 'string') || pading === null)) {
                return <any>this.setPadding$java_lang_String(pading);
            } else throw new Error('invalid overload');
        }

        public setPadding$java_lang_String(padding: string): LayoutItem {
            this.padding = padding;
            {
                let array147 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.LayoutItem.Padding[] = []; for(let val in com.spoonconsulting.lightning.LayoutItem.Padding) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index146=0; index146 < array147.length; index146++) {
                    let p = array147[index146];
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

            public getValue(): string {
                return this.value;
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

            public getValue(): string {
                return this.value;
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

            public getValue(): string {
                return this.value;
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
            for(let index148=0; index148 < options.length; index148++) {
                let option = options[index148];
                {
                    this.addOption$jsweet_lang_Object(option);
                }
            }
            return this;
        }

        public setValue(value: string): ListBox {
            {
                let array150 = this.getChildren();
                for(let index149=0; index149 < array150.length; index149++) {
                    let r = array150[index149];
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
                let array152 = this.getChildren();
                for(let index151=0; index151 < array152.length; index151++) {
                    let r = array152[index151];
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
                    const onchange: CustomEvent = new CustomEvent("change");
                    onchange["source"] = this;
                    onchange["value"] = this.getValue();
                    onchange["oldValue"] = oldValue;
                    lb.fireListener("change", evt);
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
    export class Modal extends JSContainer {
        /*private*/ container: JSContainer;

        /*private*/ header: JSContainer;

        /*private*/ content: JSContainer;

        /*private*/ footer: JSContainer;

        /*private*/ __close: com.spoonconsulting.lightning.ButtonIcon;

        /*private*/ title: JSContainer;

        /*private*/ tagLine: JSContainer;

        /*private*/ backdrop: Modal.BackDrop;

        public constructor(name: string) {
            super(name, "section");
            this.container = new JSContainer("container", "div");
            this.header = new JSContainer("header", "div");
            this.content = new JSContainer("content", "div");
            this.footer = new JSContainer("footer", "div");
            this.__close = new com.spoonconsulting.lightning.ButtonIcon("close", "utility:close");
            this.title = new JSContainer("title", "h2");
            this.tagLine = new JSContainer("tagLine", "p");
            this.backdrop = null;
            this.setAttribute("role", "dialog");
            this.setAttribute("tabindex", "-1");
            this.setAttribute("aria-modal", "true");
            this.addClass("slds-modal");
            this.addChild(this.container);
            this.container.addChild(this.header);
            this.container.addChild(this.content);
            this.container.addChild(this.footer);
            this.container.addClass("slds-modal__container");
            this.header.addClass("slds-modal__header");
            this.content.addClass("slds-modal__content");
            this.footer.addClass("slds-modal__footer");
            this.__close.setSize$com_spoonconsulting_lightning_Size(com.spoonconsulting.lightning.Size.LARGE);
            this.__close.setVariant$com_spoonconsulting_lightning_Variant(com.spoonconsulting.lightning.Variant.INVERSE);
            this.__close.addClass("slds-modal__close");
            this.header.addChild(this.__close);
            this.title.addClass("slds-modal__title");
            this.title.addClass("slds-hyphenate");
            this.header.addChild(this.title);
            this.tagLine.addClass("slds-m-top_x-small");
            this.tagLine.setStyle("display", "none");
            this.header.addChild(this.tagLine);
            this.__close.addEventListener(new Modal.Modal$0(this), "click");
        }

        public close() {
            this.removeClass("slds-fade-in-open");
            if (this.backdrop != null){
                this.backdrop.removeClass("slds-backdrop_open");
            }
        }

        public open() {
            this.addClass("slds-fade-in-open");
            if (this.backdrop != null){
                this.backdrop.addClass("slds-backdrop_open");
            }
        }

        public getContainer(): JSContainer {
            return this.container;
        }

        public getHeader(): JSContainer {
            return this.header;
        }

        public getContent(): JSContainer {
            return this.content;
        }

        public getFooter(): JSContainer {
            return this.footer;
        }

        public getClose(): com.spoonconsulting.lightning.ButtonIcon {
            return this.__close;
        }

        public getTitle(): string {
            return this.title.getHtml();
        }

        public setTitle(title: string): Modal {
            this.title.setHtml(title);
            return this;
        }

        public getTagLine(): string {
            return this.tagLine.getHtml();
        }

        public setTagLine(tagLine: string): Modal {
            this.tagLine.setHtml(tagLine);
            return this;
        }

        public getBackdrop(): Modal.BackDrop {
            return this.backdrop;
        }

        public setBackdrop(backdrop: Modal.BackDrop) {
            this.backdrop = backdrop;
        }
    }
    Modal["__class"] = "com.spoonconsulting.lightning.Modal";
    Modal["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace Modal {

        export class BackDrop extends JSContainer {
            public constructor(name: string) {
                super(name, "div");
                this.addClass("slds-backdrop");
            }
        }
        BackDrop["__class"] = "com.spoonconsulting.lightning.Modal.BackDrop";
        BackDrop["__interfaces"] = ["framework.components.api.Renderable"];



        export class Modal$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.close();
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        Modal$0["__interfaces"] = ["framework.components.api.EventListener"];


    }

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
            this.link.addClass("slds-path__link").setAttribute("href", "javascript:void(0);").setAttribute("role", "option").setAttribute("tabindex", "-1");
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
            avatar.setSize$com_spoonconsulting_lightning_Size(com.spoonconsulting.lightning.Size.MEDIUM);
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
                let array154 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.Size[] = []; for(let val in com.spoonconsulting.lightning.Size) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index153=0; index153 < array154.length; index153++) {
                    let s = array154[index153];
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
                let array156 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.Size[] = []; for(let val in com.spoonconsulting.lightning.Size) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index155=0; index155 < array156.length; index155++) {
                    let s = array156[index155];
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
                let array158 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.Variant[] = []; for(let val in com.spoonconsulting.lightning.Variant) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index157=0; index157 < array158.length; index157++) {
                    let v = array158[index157];
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
                let array160 = this.tablist.getChildren();
                for(let index159=0; index159 < array160.length; index159++) {
                    let r = array160[index159];
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
                let array162 = this.tablist.getChildren();
                for(let index161=0; index161 < array162.length; index161++) {
                    let r = array162[index161];
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
                let array164 = this.getTabItems();
                for(let index163=0; index163 < array164.length; index163++) {
                    let item = array164[index163];
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
                let array166 = this.getChildren();
                for(let index165=0; index165 < array166.length; index165++) {
                    let r = array166[index165];
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
                let array168 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.TabSet.TabSetVariant[] = []; for(let val in com.spoonconsulting.lightning.TabSet.TabSetVariant) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index167=0; index167 < array168.length; index167++) {
                    let va = array168[index167];
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

    Variant["_$wrappers"] = {0: new Variant_$WRAPPER(0, "BASE", ""), 1: new Variant_$WRAPPER(1, "NEUTRAL", "neutral"), 2: new Variant_$WRAPPER(2, "BRAND", "brand"), 3: new Variant_$WRAPPER(3, "OUTLINE_BRAND", "outline-brand"), 4: new Variant_$WRAPPER(4, "DESTRUCTIVE", "destructive"), 5: new Variant_$WRAPPER(5, "TEXT_DESTRUCTIVE", "text-destructive"), 6: new Variant_$WRAPPER(6, "SUCCESS", "success"), 7: new Variant_$WRAPPER(7, "INVERSE", "inverse")};

}
namespace com.spoonconsulting.lightning {
    export class VerticalNavigation extends JSContainer {
        /*private*/ compact: boolean;

        /*private*/ selectedItem: string;

        /*private*/ selectedSection: string;

        /*private*/ shaded: boolean;

        public constructor(name: string) {
            super(name, "nav");
            this.compact = false;
            this.selectedItem = null;
            this.selectedSection = null;
            this.shaded = false;
            this.addClass("slds-nav-vertical__section");
        }

        public isCompact(): boolean {
            return this.compact;
        }

        public setCompact(compact: boolean): VerticalNavigation {
            this.compact = compact;
            this.removeClass("slds-nav-vertical_compact");
            if (compact){
                this.addClass("slds-nav-vertical_compact");
            }
            return this;
        }

        public addSection$com_spoonconsulting_lightning_VerticalNavigationSection(section: com.spoonconsulting.lightning.VerticalNavigationSection): VerticalNavigation {
            this.addChild(section);
            section.addEventListener(new VerticalNavigation.VerticalNavigation$0(this), "selected");
            return this;
        }

        public addSection$java_lang_String$java_lang_String(name: string, label: string): com.spoonconsulting.lightning.VerticalNavigationSection {
            const section: com.spoonconsulting.lightning.VerticalNavigationSection = new com.spoonconsulting.lightning.VerticalNavigationSection(name);
            section.setLabel(label);
            this.addSection$com_spoonconsulting_lightning_VerticalNavigationSection(section);
            return section;
        }

        public addSection(name?: any, label?: any): any {
            if (((typeof name === 'string') || name === null) && ((typeof label === 'string') || label === null)) {
                return <any>this.addSection$java_lang_String$java_lang_String(name, label);
            } else if (((name != null && name instanceof <any>com.spoonconsulting.lightning.VerticalNavigationSection) || name === null) && label === undefined) {
                return <any>this.addSection$com_spoonconsulting_lightning_VerticalNavigationSection(name);
            } else throw new Error('invalid overload');
        }

        public getSection(name: string): com.spoonconsulting.lightning.VerticalNavigationSection {
            {
                let array170 = this.getSections();
                for(let index169=0; index169 < array170.length; index169++) {
                    let section = array170[index169];
                    {
                        if (section.getName() === name){
                            return section;
                        }
                    }
                }
            }
            return null;
        }

        public getItem$java_lang_String(name: string): com.spoonconsulting.lightning.VerticalNavigationItem {
            {
                let array172 = this.getItems();
                for(let index171=0; index171 < array172.length; index171++) {
                    let item = array172[index171];
                    {
                        if (item.getName() === name){
                            return item;
                        }
                    }
                }
            }
            return null;
        }

        public getItem$java_lang_String$java_lang_String(sectionName: string, itemName: string): com.spoonconsulting.lightning.VerticalNavigationItem {
            const section: com.spoonconsulting.lightning.VerticalNavigationSection = this.getSection(sectionName);
            if (section != null){
                return section.getItem(itemName);
            }
            return null;
        }

        public getItem(sectionName?: any, itemName?: any): any {
            if (((typeof sectionName === 'string') || sectionName === null) && ((typeof itemName === 'string') || itemName === null)) {
                return <any>this.getItem$java_lang_String$java_lang_String(sectionName, itemName);
            } else if (((typeof sectionName === 'string') || sectionName === null) && itemName === undefined) {
                return <any>this.getItem$java_lang_String(sectionName);
            } else throw new Error('invalid overload');
        }

        public addSections(...sections: com.spoonconsulting.lightning.VerticalNavigationSection[]): VerticalNavigation {
            for(let index173=0; index173 < sections.length; index173++) {
                let section = sections[index173];
                {
                    this.addSection$com_spoonconsulting_lightning_VerticalNavigationSection(section);
                }
            }
            return this;
        }

        public getSections(): Array<com.spoonconsulting.lightning.VerticalNavigationSection> {
            const result: Array<any> = this.getChildren();
            return result;
        }

        public getSelectedItem(): string {
            return this.selectedItem;
        }

        public setSelectedItem$java_lang_String$java_lang_String(selectedSection: string, selectedItem: string): VerticalNavigation {
            this.selectedItem = selectedItem;
            this.selectedSection = selectedSection;
            {
                let array175 = this.getSections();
                for(let index174=0; index174 < array175.length; index174++) {
                    let section = array175[index174];
                    {
                        if (section.getName() !== selectedSection){
                            section.setSelectedItem(null);
                        }
                    }
                }
            }
            return this;
        }

        public setSelectedItem(selectedSection?: any, selectedItem?: any): any {
            if (((typeof selectedSection === 'string') || selectedSection === null) && ((typeof selectedItem === 'string') || selectedItem === null)) {
                return <any>this.setSelectedItem$java_lang_String$java_lang_String(selectedSection, selectedItem);
            } else if (((typeof selectedSection === 'string') || selectedSection === null) && selectedItem === undefined) {
                return <any>this.setSelectedItem$java_lang_String(selectedSection);
            } else throw new Error('invalid overload');
        }

        public getItems(): Array<com.spoonconsulting.lightning.VerticalNavigationItem> {
            const result: Array<com.spoonconsulting.lightning.VerticalNavigationItem> = <any>(new Array<com.spoonconsulting.lightning.VerticalNavigationItem>());
            {
                let array177 = this.getSections();
                for(let index176=0; index176 < array177.length; index176++) {
                    let section = array177[index176];
                    {
                        {
                            let array179 = section.getItems();
                            for(let index178=0; index178 < array179.length; index178++) {
                                let item = array179[index178];
                                {
                                    result.push(item);
                                }
                            }
                        }
                    }
                }
            }
            return result;
        }

        public getSelectedSection(): string {
            return this.selectedSection;
        }

        public setSelectedItem$java_lang_String(selectedItem: string): VerticalNavigation {
            this.selectedItem = selectedItem;
            {
                let array181 = this.getItems();
                for(let index180=0; index180 < array181.length; index180++) {
                    let item = array181[index180];
                    {
                        item.setSelected(item.getName() === selectedItem);
                        if (item.getName() === selectedItem){
                            this.selectedSection = item.getSection().getName();
                        }
                    }
                }
            }
            return this;
        }

        public isShaded(): boolean {
            return this.shaded;
        }

        public setShaded(shaded: boolean): VerticalNavigation {
            this.shaded = shaded;
            this.removeClass("slds-nav-vertical_shade");
            if (shaded){
                this.addClass("slds-nav-vertical_shade");
            }
            return this;
        }
    }
    VerticalNavigation["__class"] = "com.spoonconsulting.lightning.VerticalNavigation";
    VerticalNavigation["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace VerticalNavigation {

        export class VerticalNavigation$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const selected: api.Renderable = <api.Renderable><any>evt["selectedItem"];
                this.__parent.setSelectedItem(source.getName(), selected.getName());
                evt["selectedSection"] = source;
                this.__parent.fireListener("selected", evt);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        VerticalNavigation$0["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace com.spoonconsulting.lightning {
    export class VerticalNavigationItem extends JSContainer {
        /*private*/ action: JSContainer;

        /*private*/ label: JSContainer;

        /*private*/ selected: boolean;

        public constructor(name: string) {
            super(name, "div");
            this.action = new JSContainer("action", "a");
            this.label = new JSContainer("label", "span");
            this.selected = false;
            this.addClass("slds-nav-vertical__item").setAttribute("role", "listitem");
            this.addChild(this.action);
            this.action.addClass("slds-nav-vertical__action").setAttribute("href", "javascript:void(0);");
            this.action.addChild(this.label);
            this.action.addEventListener(new VerticalNavigationItem.VerticalNavigationItem$0(this), "click");
        }

        public getSection(): com.spoonconsulting.lightning.VerticalNavigationSection {
            return <any>(this.getAncestorWithClass<any>("slds-nav-vertical__section"));
        }

        public setSelected(b: boolean): VerticalNavigationItem {
            this.selected = b;
            this.removeClass("slds-is-active");
            if (b){
                this.addClass("slds-is-active");
                this.setAttribute("aria-current", "page");
            } else {
                this.setAttribute("aria-current", null);
            }
            return this;
        }

        public isSelected(): boolean {
            return this.selected;
        }

        getAction(): JSContainer {
            return this.action;
        }

        public setLabel(label: string): VerticalNavigationItem {
            this.label.setHtml(label);
            return this;
        }

        public getLabel(): string {
            return this.label.getHtml();
        }

        public setHref(href: string): VerticalNavigationItem {
            this.action.setAttribute("href", href);
            return this;
        }

        public getHref(): string {
            return this.action.getAttribute("href");
        }
    }
    VerticalNavigationItem["__class"] = "com.spoonconsulting.lightning.VerticalNavigationItem";
    VerticalNavigationItem["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace VerticalNavigationItem {

        export class VerticalNavigationItem$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.setSelected(true);
                const event: CustomEvent = new CustomEvent("selected");
                event["source"] = source.getParent();
                this.__parent.fireListener("selected", event);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        VerticalNavigationItem$0["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace com.spoonconsulting.lightning {
    export class VerticalNavigationSection extends JSContainer {
        /*private*/ label: JSContainer;

        /*private*/ list: JSContainer;

        /*private*/ selectedItem: string;

        public constructor(name: string) {
            super(name, "div");
            this.label = new JSContainer("label", "h2");
            this.list = new JSContainer("list", "div");
            this.selectedItem = null;
            this.addClass("slds-nav-vertical__section");
            this.addChild(this.label);
            this.label.addClass("slds-nav-vertical__title");
            this.addChild(this.list);
            this.list.setAttribute("role", "list");
            this.list.setAttribute("aria-describedby", this.label.getId());
            this.addEventListener(new VerticalNavigationSection.VerticalNavigationSection$0(this), "selected");
        }

        public addItem$com_spoonconsulting_lightning_VerticalNavigationItem(item: com.spoonconsulting.lightning.VerticalNavigationItem): VerticalNavigationSection {
            this.list.addChild(item);
            item.addEventListener(new VerticalNavigationSection.VerticalNavigationSection$1(this), "selected");
            return this;
        }

        public setSelectedItem(name: string): VerticalNavigationSection {
            this.selectedItem = name;
            const items: Array<com.spoonconsulting.lightning.VerticalNavigationItem> = this.getItems();
            for(let index182=0; index182 < items.length; index182++) {
                let item = items[index182];
                {
                    item.setSelected(item.getName() === name);
                }
            }
            return this;
        }

        public addItem$java_lang_String$java_lang_String(name: string, label: string): com.spoonconsulting.lightning.VerticalNavigationItem {
            const item: com.spoonconsulting.lightning.VerticalNavigationItem = new com.spoonconsulting.lightning.VerticalNavigationItem(name);
            item.setLabel(label);
            this.addItem$com_spoonconsulting_lightning_VerticalNavigationItem(item);
            return item;
        }

        public addItem$java_lang_String$java_lang_String$int(name: string, label: string, badgeCount: number): com.spoonconsulting.lightning.VerticalNavigationItemBadge {
            const item: com.spoonconsulting.lightning.VerticalNavigationItemBadge = new com.spoonconsulting.lightning.VerticalNavigationItemBadge(name);
            item.setLabel(label);
            item.setBadgeCount(badgeCount);
            this.addItem$com_spoonconsulting_lightning_VerticalNavigationItem(item);
            return item;
        }

        public addItem$java_lang_String$java_lang_String$java_lang_String(name: string, label: string, iconName: string): com.spoonconsulting.lightning.VerticalNavigationItemIcon {
            const item: com.spoonconsulting.lightning.VerticalNavigationItemIcon = new com.spoonconsulting.lightning.VerticalNavigationItemIcon(name);
            item.setLabel(label);
            item.setIconName(iconName);
            this.addItem$com_spoonconsulting_lightning_VerticalNavigationItem(item);
            return item;
        }

        public addItem(name?: any, label?: any, iconName?: any): any {
            if (((typeof name === 'string') || name === null) && ((typeof label === 'string') || label === null) && ((typeof iconName === 'string') || iconName === null)) {
                return <any>this.addItem$java_lang_String$java_lang_String$java_lang_String(name, label, iconName);
            } else if (((typeof name === 'string') || name === null) && ((typeof label === 'string') || label === null) && ((typeof iconName === 'number') || iconName === null)) {
                return <any>this.addItem$java_lang_String$java_lang_String$int(name, label, iconName);
            } else if (((typeof name === 'string') || name === null) && ((typeof label === 'string') || label === null) && iconName === undefined) {
                return <any>this.addItem$java_lang_String$java_lang_String(name, label);
            } else if (((name != null && name instanceof <any>com.spoonconsulting.lightning.VerticalNavigationItem) || name === null) && label === undefined && iconName === undefined) {
                return <any>this.addItem$com_spoonconsulting_lightning_VerticalNavigationItem(name);
            } else throw new Error('invalid overload');
        }

        public getItem(name: string): com.spoonconsulting.lightning.VerticalNavigationItem {
            {
                let array184 = this.getItems();
                for(let index183=0; index183 < array184.length; index183++) {
                    let item = array184[index183];
                    {
                        if (item.getName() === name){
                            return item;
                        }
                    }
                }
            }
            return null;
        }

        public getSelectedItem(): string {
            return this.selectedItem;
        }

        public addItems(...items: com.spoonconsulting.lightning.VerticalNavigationItem[]): VerticalNavigationSection {
            for(let index185=0; index185 < items.length; index185++) {
                let item = items[index185];
                {
                    this.addItem$com_spoonconsulting_lightning_VerticalNavigationItem(item);
                }
            }
            return this;
        }

        public getItems(): Array<com.spoonconsulting.lightning.VerticalNavigationItem> {
            const result: Array<any> = this.list.getChildren();
            return result;
        }

        public setLabel(label: string): VerticalNavigationSection {
            this.label.setHtml(label);
            return this;
        }

        public getLabel(): string {
            return this.label.getHtml();
        }
    }
    VerticalNavigationSection["__class"] = "com.spoonconsulting.lightning.VerticalNavigationSection";
    VerticalNavigationSection["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace VerticalNavigationSection {

        export class VerticalNavigationSection$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        VerticalNavigationSection$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class VerticalNavigationSection$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.setSelectedItem(source.getName());
                evt["selectedItem"] = source;
                this.__parent.fireListener("selected", evt);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        VerticalNavigationSection$1["__interfaces"] = ["framework.components.api.EventListener"];


    }

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
    export class TimeInput extends com.spoonconsulting.lightning.BaseComboBox<Date> {
        /*private*/ min: string;

        /*private*/ max: string;

        public constructor(name: string) {
            super(name);
            this.min = "00:00";
            this.max = "23:30";
            this.getInputIcon().setIconName("utility:clock");
        }

        /**
         * 
         * @param {string} s
         * @return {Date}
         */
        encode(s: string): Date {
            if (s == null){
                return null;
            }
            if (s === ""){
                return null;
            }
            const parts: string[] = s.split(":");
            const dt: Date = new Date();
            dt.setHours(/* parseInt */parseInt(parts[0]));
            dt.setMinutes(/* parseInt */parseInt(parts[1]));
            return dt;
        }

        public decode$jsweet_lang_Date(t: Date): string {
            if (t == null){
                return "";
            }
            const hrs: number = t.getHours();
            const mins: number = t.getMinutes();
            return this.to2dp(hrs) + ":" + this.to2dp(mins);
        }

        /**
         * 
         * @param {Date} t
         * @return {string}
         */
        public decode(t?: any): any {
            if (((t != null && t instanceof <any>Date) || t === null)) {
                return <any>this.decode$jsweet_lang_Date(t);
            } else if (((t != null) || t === null)) {
                return super.decode(t);
            } else throw new Error('invalid overload');
        }

        /*private*/ to2dp(i: number): string {
            return i < 10 ? "0" + i : i + "";
        }

        public refresh() {
            const start: string[] = this.min.split(":");
            const end: string[] = this.max.split(":");
            const startHr: number = /* parseInt */parseInt(start[0]);
            const startMin: number = /* parseInt */parseInt(start[1]);
            const endHr: number = /* parseInt */parseInt(end[0]);
            const endMin: number = /* parseInt */parseInt(end[1]);
            const options: Array<Object> = <any>(new Array<Object>());
            for(let i: number = startHr; i <= endHr; i++) {{
                const zero: Object = <Object>new Object();
                zero["label"] = i < 10 ? "0" + i + ":00" : i + ":00";
                zero["value"] = i < 10 ? "0" + i + ":00" : i + ":00";
                const quater: Object = <Object>new Object();
                quater["label"] = i < 10 ? "0" + i + ":15" : i + ":15";
                quater["value"] = i < 10 ? "0" + i + ":15" : i + ":15";
                const half: Object = <Object>new Object();
                half["label"] = i < 10 ? "0" + i + ":30" : i + ":30";
                half["value"] = i < 10 ? "0" + i + ":30" : i + ":30";
                const tquater: Object = <Object>new Object();
                tquater["label"] = i < 10 ? "0" + i + ":45" : i + ":45";
                tquater["value"] = i < 10 ? "0" + i + ":45" : i + ":45";
                if (i === startHr){
                    if (startMin < 15){
                        options.push(zero);
                    }
                    if (startMin < 30){
                        options.push(quater);
                    }
                    if (startMin < 45){
                        options.push(half);
                    }
                    if (startMin < 60){
                        options.push(tquater);
                    }
                } else if (i === endHr){
                    options.push(zero);
                    if (endMin >= 15){
                        options.push(quater);
                    }
                    if (endMin >= 30){
                        options.push(half);
                    }
                    if (endMin >= 45){
                        options.push(tquater);
                    }
                } else {
                    options.push(zero);
                    options.push(quater);
                    options.push(half);
                    options.push(tquater);
                }
                this.setOptions(options);
            };}
        }
    }
    TimeInput["__class"] = "com.spoonconsulting.lightning.TimeInput";
    TimeInput["__interfaces"] = ["framework.components.api.InputField","framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    /**
     * <p>
     * An {@link Accordion} displays vertically stacked sections of content that you can expand and collapse. <br>
     * Click a section's header to expand its content. Users can control how much content is visible at once, and don't need to scroll as much to see the content of a page.
     * </p>
     * 
     * <p>
     * To create an {@link AccordionSection}, add an instance of {@link AccordionSection} using the method {@link Accordion#addSection(AccordionSection)}.
     * </p>
     * 
     * <p>
     * By default, only one section can be open at a time. <br>
     * You can close a section by opening another section. <br>
     * You can configure the accordion to allow multiple sections to be open, and then the sections can be opened and closed by clicking section headers.
     * <br> To allow multiple sections to be open use the method {@link Accordion#setAllowMultipleSectionOpen(boolean)}
     * 
     * </p>
     * 
     * <p>
     * Lazy initialization can be implemented by using the onsectiontoggle event. When a section is open for the first time, its content is constructed and added.
     * </p>
     * 
     * <p>
     * <div>Supported events:</div>
     * <p>
     * <ul>
     * <li>onsectiontoggle&nbsp; &nbsp; This event is triggered whenever there is a change in the accordion. i.e any section is open or closed.</li>
     * </ul>
     * </p>
     * </p>
     * @author Kureem Rossaye
     * <a href="mailto:kureem.rossaye@spoonconsulting.com">kureem.rossaye@spoonconsulting.com</a>
     * @param {string} name
     * @class
     * @extends com.spoonconsulting.lightning.BaseLightning
     */
    export class Accordion extends com.spoonconsulting.lightning.BaseLightning {
        /*private*/ allowMultipleSectionOpen: boolean;

        public constructor(name: string) {
            super(name, "ul");
            this.allowMultipleSectionOpen = false;
            this.addClass("slds-accordion");
        }

        /**
         * Add a {@link AccordionSection} to the {@link Accordion}.
         * @param {com.spoonconsulting.lightning.AccordionSection} section - The {@link AccordionSection} to add
         * @return {com.spoonconsulting.lightning.Accordion} - The current {@link Accordion}
         */
        public addSection(section: com.spoonconsulting.lightning.AccordionSection): Accordion {
            const li: JSContainer = new JSContainer("li");
            li.addClass("slds-accordion__list-item");
            this.addChild(li);
            li.addChild(section);
            return this;
        }

        /**
         * Add {@link AccordionSection}s to the accordion
         * @param {com.spoonconsulting.lightning.AccordionSection[]} accordionSections - The sections to add to the accordion
         * @return {com.spoonconsulting.lightning.Accordion} - The current {@link Accordion}
         */
        public addSections(...accordionSections: com.spoonconsulting.lightning.AccordionSection[]): Accordion {
            for(let index186=0; index186 < accordionSections.length; index186++) {
                let section = accordionSections[index186];
                {
                    this.addSection(section);
                }
            }
            return this;
        }

        /**
         * Synonymous to {@link Accordion#setOpen(String)}
         * @param {string} name - the name of the {@link AccordionSection} to activate / open
         * @return {com.spoonconsulting.lightning.Accordion} - The current {@link Accordion}
         */
        public setActiveSectionName(name: string): Accordion {
            return this.setOpen(name);
        }

        /**
         * Opens the {@link AccordionSection} with the given name<br>
         * Also close the other {@link AccordionSection}s if necessary.<Br>
         * if the {@link Accordion#isAllowMultipleSectionOpen()} = false, then the other {@link AccordionSection}s will be closed.<br>
         * On the other hand, if {@link Accordion#isAllowMultipleSection} = true, then the other {@link AccordionSection}s that are open, will remain open.<br>
         * @param {string} name - The name of the {@link AccordionSection} to open
         * @return {com.spoonconsulting.lightning.Accordion} - The current {@link Accordion}
         */
        public setOpen(name: string): Accordion {
            {
                let array188 = this.getChildren();
                for(let index187=0; index187 < array188.length; index187++) {
                    let r = array188[index187];
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

        /*private*/ fireSectionToggle() {
            const sectionToggle: CustomEvent = new CustomEvent("onsectiontoggle");
            const openSections: Array<string> = <any>(new Array<string>());
            {
                let array190 = this.getSections();
                for(let index189=0; index189 < array190.length; index189++) {
                    let sect = array190[index189];
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

        /**
         * Close the {@link AccordionSection} with the specified name
         * @param {string} name - The name of the {@link AccordionSection} to close
         * @return {com.spoonconsulting.lightning.Accordion} - The current {@link Accordion}
         */
        public setClose(name: string): Accordion {
            {
                let array192 = this.getChildren();
                for(let index191=0; index191 < array192.length; index191++) {
                    let r = array192[index191];
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

        /**
         * If the {@link Accordion} allows multiple {@link AccordionSection} to be opened
         * @return {boolean} - Whether the {@link Accordion} allows multiple {@link AccordionSection} to be opened
         */
        public isAllowMultipleSectionOpen(): boolean {
            return this.allowMultipleSectionOpen;
        }

        /**
         * Configures the {@link Accordion}, to allow multiple {@link AccordionSection}s to be opened
         * @param {boolean} allowMultipleSectionOpen - if multiple {@link AccordionSection}s allowed to be opened
         */
        public setAllowMultipleSectionOpen(allowMultipleSectionOpen: boolean) {
            this.allowMultipleSectionOpen = allowMultipleSectionOpen;
        }

        /**
         * @return {com.spoonconsulting.lightning.AccordionSection[]} - The {@link AccordionSection}s in the {@link Accordion}
         */
        public getSections(): Array<com.spoonconsulting.lightning.AccordionSection> {
            const sections: Array<com.spoonconsulting.lightning.AccordionSection> = <any>(new Array<com.spoonconsulting.lightning.AccordionSection>());
            {
                let array194 = this.getChildren();
                for(let index193=0; index193 < array194.length; index193++) {
                    let r = array194[index193];
                    {
                        sections.push(<com.spoonconsulting.lightning.AccordionSection><any>r.getChildren()[0]);
                    }
                }
            }
            return sections;
        }

        /**
         * Returns the accordion section with the given name.
         * @param {string} name - The name of the {@link AccordionSection} to return.
         * @return
         * @return {com.spoonconsulting.lightning.AccordionSection}
         */
        public getSection(name: string): com.spoonconsulting.lightning.AccordionSection {
            {
                let array196 = this.getChildren();
                for(let index195=0; index195 < array196.length; index195++) {
                    let r = array196[index195];
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
    /**
     * Constructs a new {@link AccordionSection} with the given name
     * @param {string} name
     * @class
     * @extends com.spoonconsulting.lightning.BaseLightning
     * @author Kureem Rossaye<br>
     */
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
         * Sets the title of the {@link AccordionSection}
         * @param {string} title
         */
        public setTitle(title: string) {
            super.setTitle(title);
            this.summaryAction.setAttribute("title", title);
            this.summaryHeadingAction.setLabel(title).setAttribute("title", title);
        }

        /**
         * Toggles the {@link AccordionSection}. Closes it if it is open, and opens it if it is closed.
         */
        public toggle() {
            this.setOpen(!this.isOpen());
        }

        /**
         * Whether the {@link AccordionSection} is open
         * @return {boolean} - True if the {@link AccordionSection} is open and false if closed
         */
        public isOpen(): boolean {
            return this.hasClass("slds-is-open");
        }

        /**
         * Whether to open or close this {@link AccordionSection}
         * @param {boolean} b - Opens it if true, closes it if false
         * @return {com.spoonconsulting.lightning.AccordionSection} - The updated {@link AccordionSection}
         */
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

        /**
         * 
         * @return {JSContainer} - The summary container of the accordion section.
         */
        public getSummary(): JSContainer {
            return this.summary;
        }

        /**
         * The content slot of the {@link AccordionSection}
         * @return {JSContainer} - The content slot of the {@link AccordionSection}
         */
        public getContent(): JSContainer {
            return this.content;
        }

        /**
         * The summary heading of the {@link AccordionSection}
         * @return {JSContainer} - The summary heading of the {@link AccordionSection}
         */
        public getSummaryHeading(): JSContainer {
            return this.summaryHeading;
        }

        /**
         * The summary action of the {@link AccordionSection}
         * @return {JSContainer} - The summary action of the {@link AccordionSection}
         */
        public getSummaryAction(): JSContainer {
            return this.summaryAction;
        }

        /**
         * The summary action icon of the {@link AccordionSection}
         * @return {com.spoonconsulting.lightning.Icon} - The summary action icon of the {@link AccordionSection}
         */
        public getSummaryActionIcon(): com.spoonconsulting.lightning.Icon {
            return this.summaryActionIcon;
        }

        /**
         * The slot with the specified name
         * <ul>
         * <li>actions - the actions slot where action button can be added (ButtonIcon)</li>
         * <li>content - Will return the content slot which is the body of the</li>
         * </ul>
         * @param {string} name - The name of the slot. Possible values are: actions, &nbsp;content
         * @return
         * @return {JSContainer}
         */
        public getSlot(name: string): JSContainer {
            if (name === "actions"){
                return this.actionsSlot;
            } else {
                return this.content;
            }
        }

        /**
         * The action slot where {@link ButtonIcon} can be added
         * @return {JSContainer} - The {@link JSContainer} of the action slot
         */
        public geActionsSlot(): JSContainer {
            return this.actionsSlot;
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

        /*private*/ assistiveText: JSContainer;

        public static POSITION_START: string = "start";

        public static POSITION_END: string = "end";

        /*private*/ iconPosition: string;

        public constructor(name: string) {
            super(name, "span");
            this.label = new JSContainer("label", "span");
            this.leftIconContainer = new com.spoonconsulting.lightning.IconContainer("left-icon", "span");
            this.leftBadgeIcon = new JSContainer("left-badge-icon", "span");
            this.rightIconContainer = new com.spoonconsulting.lightning.IconContainer("right-icon", "span");
            this.rightBadgeIcon = new JSContainer("right-badge-icon", "span");
            this.assistiveText = new JSContainer("assistive-text", "span");
            this.iconPosition = null;
            this.addClass("slds-badge");
            this.leftBadgeIcon.addClass("slds-badge__icon").addClass("slds-badge__icon_left").addChild(this.leftIconContainer);
            this.addChild(this.label);
            this.addChild(this.assistiveText);
            this.rightBadgeIcon.addClass("slds-badge__icon").addClass("slds-badge__icon_right").addChild(this.rightIconContainer);
        }

        public setAssistiveText(txt: string): Badge {
            this.assistiveText.setHtml(txt);
            return this;
        }

        public getAssistiveText(): string {
            return this.assistiveText.getHtml();
        }

        public getLabel(): string {
            return this.label.getHtml();
        }

        public setIconAlternativeText(altText: string): Badge {
            this.leftIconContainer.setTitle(altText);
            this.rightIconContainer.setTitle(altText);
            return this;
        }

        public getIconAlternativeText(): string {
            return this.leftIconContainer.getTitle();
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

        public getIconName(): string {
            return this.leftIconContainer.getIcon().getIconName();
        }

        public getIconPosition(): string {
            return this.iconPosition;
        }

        public setIconPosition(position: string): Badge {
            this.clearChildren();
            this.iconPosition = position;
            if (position === Badge.POSITION_START){
                this.addChild(this.leftBadgeIcon);
            }
            this.addChild(this.label);
            this.addChild(this.assistiveText);
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
            this.icon.removeClass("slds-icon").addClass("slds-button__icon").setAttribute("aria-hidden", "true").setAttribute("focusabled", "false");
            this.prefixIcon.removeClass("slds-icon").addClass("slds-button__icon").setAttribute("aria-hidden", "true").setAttribute("focusabled", "false");
            this.draft.addClass("slds-indicator_unsaved").addClass("slds-p-right_xx-small").setHtml("*");
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
                this.icon.removeClass("slds-button__icon_right").removeClass("slds-button__icon_left");
                if (this.iconPosition === Button.ICON_POSITION_LEFT || this.iconPosition == null){
                    this.addChild(this.icon);
                    this.icon.addClass("slds-button__icon_left");
                }
                if (this.isDraft){
                    this.addChild(this.draft);
                }
                this.addChild(this.label);
                if (this.iconPosition === Button.ICON_POSITION_RIGHT){
                    this.addChild(this.icon);
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
                let array198 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.Variant[] = []; for(let val in com.spoonconsulting.lightning.Variant) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index197=0; index197 < array198.length; index197++) {
                    let v = array198[index197];
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
            this.setAttribute("role", "group").addClass("slds-button-group");
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
            this.addClass("slds-dropdown-trigger").addClass("slds-dropdown-trigger_click").addChild(this.button).addChild(this.dropdown);
            this.button.setVariant$com_spoonconsulting_lightning_ButtonIcon_ButtonIconVariant(com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant.BORDER_FILLED).setAttribute("aria-haspopup", "true").setAttribute("aria-expanded", "true").addEventListener(new ButtonMenu.ButtonMenu$0(this), "click");
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
                this.button.setPrefixIconName(null).setIconName(iconName);
            } else {
                this.button.setPrefixIconName(iconName).setIconName("utility:down");
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
            const suffixes: string[] = ["bottom", "left", "right", "center", "bottom-right", "bottom-left", "top", "top-right", "top-left"];
            for(let index199=0; index199 < suffixes.length; index199++) {
                let suffix = suffixes[index199];
                {
                    this.dropdown.removeClass("slds-dropdown_" + suffix).removeClass("slds-nubbin_" + suffix);
                }
            }
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
            this.addClass("slds-button").addClass("slds-button_stateful").addChild(this.btnNotSelected).addChild(this.btnSelected).addChild(this.btnSelectedFocus);
            this.addEventListener(new ButtonStateful.ButtonStateful$0(this), "click");
            this.setSelected(false);
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
                let array201 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.Variant[] = []; for(let val in com.spoonconsulting.lightning.Variant) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index200=0; index200 < array201.length; index200++) {
                    let v = array201[index200];
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
                this.icon.removeClass("slds-icon");
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
            for(let index202=0; index202 < items.length; index202++) {
                let item = items[index202];
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
        /*private*/ combo: com.spoonconsulting.lightning.BaseComboBox<string>;

        /*private*/ messageWhenValueMissing: string;

        public constructor(name: string) {
            super(name, <any>(new com.spoonconsulting.lightning.BaseComboBox<string>("combo")));
            if (this.combo === undefined) { this.combo = null; }
            this.messageWhenValueMissing = "This field is required";
            this.combo = <com.spoonconsulting.lightning.BaseComboBox<string>><any>this.getInput();
            this.combo.removeClass("slds-input");
            this.combo.addEventListener(new ComboBox.ComboBox$0(this), "change");
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



    export namespace ComboBox {

        export class ComboBox$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.__parent.fireListener("change", evt);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
            }
        }
        ComboBox$0["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace com.spoonconsulting.lightning {
    export class Input extends com.spoonconsulting.lightning.FormElement<any> {
        /*private*/ textInput: input.JSTextInput;

        /*private*/ dateInput: input.JSDateInput;

        /*private*/ timeInput: input.JSTimeInput;

        /*private*/ numberInput: input.JSNumberInput;

        public constructor(name: string) {
            super(name);
            this.textInput = new input.JSTextInput("input");
            this.dateInput = new input.JSDateInput("input");
            this.timeInput = new input.JSTimeInput("input");
            this.numberInput = new input.JSNumberInput("input");
            this.setInput(this.textInput);
        }
    }
    Input["__class"] = "com.spoonconsulting.lightning.Input";
    Input["__interfaces"] = ["framework.components.api.InputField","framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class VerticalNavigationItemBadge extends com.spoonconsulting.lightning.VerticalNavigationItem {
        /*private*/ badge: com.spoonconsulting.lightning.Badge;

        public constructor(name: string) {
            super(name);
            this.badge = new com.spoonconsulting.lightning.Badge("badge");
            this.getAction().addChild(this.badge);
            this.badge.addClass("slds-col_bump-left");
            this.setBadgeCount(0);
        }

        public setAssistiveText(txt: string): VerticalNavigationItemBadge {
            this.badge.setAssistiveText(txt);
            return this;
        }

        public getAssistiveText(): string {
            return this.badge.getAssistiveText();
        }

        public setBadgeCount(count: number): VerticalNavigationItemBadge {
            this.badge.setLabel(count + "");
            return this;
        }

        public getBadgeCount(): number {
            return /* parseInt */parseInt(this.badge.getLabel());
        }
    }
    VerticalNavigationItemBadge["__class"] = "com.spoonconsulting.lightning.VerticalNavigationItemBadge";
    VerticalNavigationItemBadge["__interfaces"] = ["framework.components.api.Renderable"];


}
namespace com.spoonconsulting.lightning {
    export class VerticalNavigationItemIcon extends com.spoonconsulting.lightning.VerticalNavigationItem {
        /*private*/ icon: com.spoonconsulting.lightning.IconContainer;

        public constructor(name: string) {
            super(name);
            this.icon = new com.spoonconsulting.lightning.IconContainer("icon", "div");
            this.getAction().addChild(this.icon);
            this.icon.addClass("slds-m-right_x-small").addClass("slds-line-height_reset");
        }

        public setIconName(iconName: string): VerticalNavigationItemIcon {
            this.icon.setIconName(iconName);
            return this;
        }

        public getIconName(): string {
            return this.icon.getIcon().getIconName();
        }
    }
    VerticalNavigationItemIcon["__class"] = "com.spoonconsulting.lightning.VerticalNavigationItemIcon";
    VerticalNavigationItemIcon["__interfaces"] = ["framework.components.api.Renderable"];


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

        public setSize$java_lang_String(size: string): ButtonIcon {
            {
                let array204 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.Size[] = []; for(let val in com.spoonconsulting.lightning.Size) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index203=0; index203 < array204.length; index203++) {
                    let s = array204[index203];
                    {
                        this.icon.removeClass("slds-button__icon_" + com.spoonconsulting.lightning.Size["_$wrappers"][s].getValue());
                    }
                }
            }
            if (size != null){
                this.icon.addClass("slds-button__icon_" + size);
            }
            return this;
        }

        public setSize(size?: any): any {
            if (((typeof size === 'string') || size === null)) {
                return <any>this.setSize$java_lang_String(size);
            } else if (((typeof size === 'number') || size === null)) {
                return <any>this.setSize$com_spoonconsulting_lightning_Size(size);
            } else throw new Error('invalid overload');
        }

        public setSize$com_spoonconsulting_lightning_Size(size: com.spoonconsulting.lightning.Size): ButtonIcon {
            return this.setSize$java_lang_String(size != null ? com.spoonconsulting.lightning.Size["_$wrappers"][size].getValue() : <string>null);
        }

        public setTooltip(tooltip: string): ButtonIcon {
            this.setTitle(tooltip);
            return this;
        }

        /**
         * 
         * @return {com.spoonconsulting.lightning.Button}
         */
        public refresh(): com.spoonconsulting.lightning.Button {
            super.refresh();
            if (this.icon != null){
                this.icon.removeClass("slds-button__icon_right").removeClass("slds-button__icon_left");
            }
            return this;
        }

        public setVariant$java_lang_String(variant: string): ButtonIcon {
            {
                let array206 = /* Enum.values */function() { let result: com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant[] = []; for(let val in com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant) { if (!isNaN(<any>val)) { result.push(parseInt(val,10)); } } return result; }();
                for(let index205=0; index205 < array206.length; index205++) {
                    let v = array206[index205];
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
        ButtonIconVariant["__class"] = "com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant";
        ButtonIconVariant["__interfaces"] = ["java.lang.constant.Constable","java.lang.Comparable","java.io.Serializable"];

        ButtonIconVariant["_$wrappers"] = {0: new ButtonIconVariant_$WRAPPER(0, "BARE", "bare"), 1: new ButtonIconVariant_$WRAPPER(1, "CONTAINER", "container"), 2: new ButtonIconVariant_$WRAPPER(2, "BRAND", "brand"), 3: new ButtonIconVariant_$WRAPPER(3, "BORDER", "border"), 4: new ButtonIconVariant_$WRAPPER(4, "BORDER_FILLED", "border-filled"), 5: new ButtonIconVariant_$WRAPPER(5, "BARE_INVERSE", "bare-inverse"), 6: new ButtonIconVariant_$WRAPPER(6, "BORDER_INVERSE", "border-inverse")};

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
        ButtonIconStatefulVariant["__class"] = "com.spoonconsulting.lightning.ButtonIconStateful.ButtonIconStatefulVariant";
        ButtonIconStatefulVariant["__interfaces"] = ["java.lang.constant.Constable","java.lang.Comparable","java.io.Serializable"];

        ButtonIconStatefulVariant["_$wrappers"] = {0: new ButtonIconStatefulVariant_$WRAPPER(0, "BORDER", "border"), 1: new ButtonIconStatefulVariant_$WRAPPER(1, "BORDER_FILLED", "border-filled"), 2: new ButtonIconStatefulVariant_$WRAPPER(2, "BORDER_INVERSE", "borde-inverse")};

    }

}


com.spoonconsulting.lightning.Boot.main(null);
