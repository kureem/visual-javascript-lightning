declare namespace com.spoonconsulting.lightning {
    abstract class AbstractProgress extends JSContainer implements com.spoonconsulting.lightning.IProgress {
        constructor(name: string, tag: string);
        /**
         *
         * @param {string} value
         * @return {*}
         */
        getStep(value: string): com.spoonconsulting.lightning.IStep;
        /**
         *
         * @param {string} value
         * @return {*}
         */
        setCurrentStep(value: string): com.spoonconsulting.lightning.IProgress;
        /**
         *
         * @return {*}
         */
        getCurrentStep(): com.spoonconsulting.lightning.IStep;
        /**
         *
         * @param {boolean} b
         * @return {*}
         */
        setHasError(b: boolean): com.spoonconsulting.lightning.IProgress;
        /**
         *
         * @return {boolean}
         */
        getHasError(): boolean;
        /**
         *
         * @param {string} variant
         * @return {*}
         */
        setVariant(variant: string): com.spoonconsulting.lightning.IProgress;
        /**
         *
         * @return {string}
         */
        getVariant(): string;
        /**
         *
         * @param {*} step
         * @return {*}
         */
        removeStep(step: com.spoonconsulting.lightning.IStep): com.spoonconsulting.lightning.IProgress;
        /**
         *
         * @param {string} value
         * @return {*}
         */
        setValue(value: string): com.spoonconsulting.lightning.IProgress;
        /**
         *
         * @return {string}
         */
        getValue(): string;
        abstract addStep(label?: any, value?: any): any;
        abstract clearSteps(): any;
        abstract getSteps(): any;
    }
}
declare namespace com.spoonconsulting.lightning {
    /**
     * Constructs an avatar with the given name
     * @param {string} name - The name of the avatar
     * @class
     * @extends JSContainer
     * @author Kureem Rossaye
     */
    class Avatar extends JSContainer {
        img: JSContainer;
        fallbackIcon: com.spoonconsulting.lightning.Icon;
        iconContainer: JSContainer;
        initial: JSContainer;
        /**
         * Static variable for image type of avatar.
         */
        static TYPE_IMAGE: string;
        /**
         * Static variable for initial image type of avatar.
         */
        static TYPE_INITIAL: string;
        /**
         * Static variable for icon type of avatar.
         */
        static TYPE_ICON: string;
        /**
         * Static variable for square variant of avatar
         */
        static VARIANT_SQUARE: string;
        /**
         * static variable for circle variant of avatar
         */
        static VARIANT_CIRCLE: string;
        type: string;
        size: string;
        constructor(name: string);
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
        setType(type: string): Avatar;
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
        getType(): string;
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
        setVariant(variant: string): Avatar;
        /**
         * The variant of the {@link Avatar}. Possible value are circle and square
         * <ul>
         * <li>{@link Avatar#VARIANT_CIRCLE}</li>
         * <li>{@link Avatar#VARIANT_SQUARE}</li>
         * </ul>
         * @return {string} - The variant of the {@link Avatar}
         */
        getVariant(): string;
        setSize$com_spoonconsulting_lightning_Size(size: com.spoonconsulting.lightning.Size): Avatar;
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
        setSize(size?: any): any;
        /**
         * The size of the {@link Avatar}
         * @return {string} The size of the {@link Avatar}
         */
        getSize(): string;
        setSize$java_lang_String(size: string): Avatar;
        /**
         * Sets the title attribute. Message that appears when hovering with the mouse
         * @param {string} title - The message that appears when hovering with the mouse
         * @return {com.spoonconsulting.lightning.Avatar} - This current instance
         */
        setTitle(title: string): Avatar;
        /**
         * The title attribute. Message that appears when hovering with the mouse
         * @return {string} - The message that appears when hovering with the mouse
         */
        getTitle(): string;
        /**
         * The initials that appears when the type of the avatar is initials<br>
         * This methods works only for initial type
         * @see {@link Avatar#setType(String)}
         * @see {@link Avatar#TYPE_INITIAL}
         * @return {string} - The initial type of the avatar is initials<br>
         */
        getInitials(): string;
        /**
         * Sets the initials that appears when the type of the avatar is initials<br>
         * This methods works only for initial type
         * @see {@link Avatar#setType(String)}
         * @see {@link Avatar#TYPE_INITIAL}
         * @param {string} initials - The initials that appears when the type of the avatar is initials<br>
         * @return {com.spoonconsulting.lightning.Avatar} - This current {@link Avatar} instance
         */
        setInitials(initials: string): Avatar;
        /**
         * The icon name of the icon that appears when the type of the avatar is icon<br>
         * This methods works only for icon type
         * @see {@link Avatar#setType(String)}
         * @see {@link Avatar#TYPE_ICON}
         * @return {string} - The icon that appears when the type of the avatar is icon<br>
         */
        getFallbackIconName(): string;
        /**
         * Sets the icon name of the icon that appears when the type of the avatar is icon<br>
         * This methods works only for icon type
         * @see {@link Avatar#setType(String)}
         * @see {@link Avatar#TYPE_ICON}
         * @param {string} fallbackIconName - The icon that appears when the type of the avatar is icon<br>
         * @return {com.spoonconsulting.lightning.Avatar} - This current {@link Avatar}
         */
        setFallbackIconName(fallbackIconName: string): Avatar;
        /**
         * Sets the image that appears when the type of the avatar is image<br>
         * This methods works only for image type
         * @see {@link Avatar#setType(String)}
         * @see {@link Avatar#TYPE_IMAGE}
         * @param {string} src - The source of the image that appears when the type of the avatar is image<br>
         * @return {com.spoonconsulting.lightning.Avatar} - This current {@link Avatar}
         */
        setSrc(src: string): Avatar;
        /**
         * The source of the image that appears when the type of the avatar is image<br>
         * This methods works only for image type
         * @see {@link Avatar#setType(String)}
         * @see {@link Avatar#TYPE_IMAGE}
         * @return {string} The source of the image that appears when the type of the avatar is image<br>
         */
        getSrc(): string;
        /**
         * The image that appears when the type of the avatar is image<br>
         * This methods works only for image type
         * @see {@link Avatar#setType(String)}
         * @see {@link Avatar#TYPE_IMAGE}
         * @return {JSContainer} - The image that appears when the type of the avatar is image<br>
         */
        getImg(): JSContainer;
        /**
         * * The icon that appears when the type of the avatar is icon<br>
         * This methods works only for icon type
         * @see {@link Avatar#setType(String)}
         * @see {@link Avatar#TYPE_ICON}
         * @return {com.spoonconsulting.lightning.Icon} - The icon that appears when the type of the avatar is icon<br>
         */
        getFallbackIcon(): com.spoonconsulting.lightning.Icon;
        /**
         * The component containing the initials that appears when the type of the avatar is initials<br>
         * This methods works only for initial type
         * @see {@link Avatar#setType(String)}
         * @see {@link Avatar#TYPE_INITIAL}
         * @return {JSContainer} - The component containing initial that appears when the type of the avatar is initials<br>
         */
        getInitial(): JSContainer;
        /**
         * An alternative text that appears when the icon cannot be displayed
         * @param {string} altText - The text to appear when the icon cannot be displayed
         * @return {com.spoonconsulting.lightning.Avatar} - This current {@link Avatar}
         */
        setAlternativeText(altText: string): Avatar;
        /**
         * The alternative text that appears when the icon cannot be displayed
         * @return {string} - The text that appears when the icon cannot be displayed
         */
        getAlternativeText(): string;
    }
}
declare namespace com.spoonconsulting.lightning {
    class BaseComboBox<T> extends JSContainer implements api.InputField<T> {
        combobox: JSContainer;
        formElement: JSContainer;
        input: input.JSTextInput;
        dropdown: com.spoonconsulting.lightning.ListBox;
        inputIconContainer: JSContainer;
        inputIcon: com.spoonconsulting.lightning.IconContainer;
        static DROPDOWN_ALIGNMENT_BOTTOM_LEFT: string;
        static DROPDOWN_ALIGNMENT_TOP_LEFT: string;
        constructor(name: string);
        setOptions(options: Array<Object>): BaseComboBox<T>;
        toggleDropdown(): void;
        isExpanded(): boolean;
        setExpand(b: boolean): BaseComboBox<T>;
        encode(s: string): T;
        decode(t: T): string;
        /**
         *
         * @return {*}
         */
        getValue(): T;
        /**
         *
         * @param {*} val
         */
        setValue(val: T): void;
        /**
         *
         */
        validate(): void;
        /**
         *
         * @return {string}
         */
        getBinding(): string;
        /**
         *
         * @param {string} binding
         * @return {*}
         */
        setBinding(binding: string): api.InputField<T>;
        /**
         *
         * @param {boolean} b
         * @return {*}
         */
        setRequired(b: boolean): api.InputField<T>;
        setDisabled(b: boolean): BaseComboBox<T>;
        isDisabled(): boolean;
        setDropdownAlignment(alignment: string): BaseComboBox<T>;
        getDropdownAlignment(): string;
        blur(): void;
        checkValidity(): boolean;
        setCustomValidity(message: string, type: string, description: string): BaseComboBox<T>;
        getCombobox(): JSContainer;
        getInput(): input.JSTextInput;
        getDropdown(): com.spoonconsulting.lightning.ListBox;
        getInputIcon(): com.spoonconsulting.lightning.IconContainer;
    }
    namespace BaseComboBox {
        class BaseComboBox$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class BaseComboBox$1 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace com.spoonconsulting.lightning {
    class BaseLightning extends JSContainer {
        constructor(name: string, tag: string);
        setTitle(title: string): void;
        getTitle(): string;
    }
}
declare namespace com.spoonconsulting.lightning {
    class Boot {
        static main(args: string[]): void;
        static getExampleTab(example: JSContainer): com.spoonconsulting.lightning.TabSet;
        static getAccordionSample(): JSContainer;
        static getButtons(): JSContainer;
        static getSampleCOmbo(): JSContainer;
        static getPathSample(): JSContainer;
        static addVerticalTab(title: string, sample: JSContainer, verticalMenu: com.spoonconsulting.lightning.TabSet): void;
        static getModal(): JSContainer;
        static getVerticalMenu(): com.spoonconsulting.lightning.TabSet;
    }
    namespace Boot {
        class Boot$0 implements api.EventListener {
            private diablebtn;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(diablebtn: any);
        }
        class Boot$1 implements api.EventListener {
            private btni;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(btni: any);
        }
        class Boot$2 implements api.EventListener {
            private box;
            private button;
            private iconButton;
            private iconButtonRight;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(box: any, button: any, iconButton: any, iconButtonRight: any);
        }
        class Boot$3 implements api.EventListener {
            private cbsize;
            private btni;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(cbsize: any, btni: any);
        }
        class Boot$4 implements api.EventListener {
            private indicator;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(indicator: any);
        }
        class Boot$5 implements api.EventListener {
            private modal;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(modal: any);
        }
        class Boot$6 implements api.EventListener {
            private form;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(form: any);
        }
        class Boot$7 implements api.EventListener {
            private form;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(form: any);
        }
        class Boot$8 implements api.EventListener {
            private modal;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(modal: any);
        }
    }
}
declare namespace com.spoonconsulting.lightning {
    class Breadcrumb extends JSContainer {
        constructor(name: string);
        setHref(href: string): Breadcrumb;
        setLabel(label: string): Breadcrumb;
        getHref(): string;
        getLabel(): string;
        focus(): void;
        blur(): void;
    }
}
declare namespace com.spoonconsulting.lightning {
    class Breadcrumbs extends JSContainer {
        constructor(name: string);
        addBreadcrumb(breadcrumb: com.spoonconsulting.lightning.Breadcrumb): Breadcrumbs;
        getBreadcrumbs(): Array<com.spoonconsulting.lightning.Breadcrumb>;
        getBreadcrumb(name: string): com.spoonconsulting.lightning.Breadcrumb;
    }
}
declare namespace com.spoonconsulting.lightning {
    class Card extends JSContainer {
        header: JSContainer;
        media: JSContainer;
        mediaFigure: JSContainer;
        icon: com.spoonconsulting.lightning.IconContainer;
        mediaBody: JSContainer;
        mediaBodyTitle: JSContainer;
        title: JSContainer;
        mediaAction: JSContainer;
        body: JSContainer;
        footer: JSContainer;
        constructor(name: string, tag: string);
        getSlot(name: string): JSContainer;
        getBody(): JSContainer;
        getHeader(): JSContainer;
        getActions(): JSContainer;
        getFooter(): JSContainer;
        setIconName(iconName: string): Card;
        getIconName(): string;
        setTitle(title: string): Card;
        getTitle(): string;
        setVariant$java_lang_String(variant: string): Card;
        setVariant(variant?: any): any;
        setVariant$com_spoonconsulting_lightning_Card_CardVariant(variant: Card.CardVariant): Card;
        getVariant(): string;
    }
    namespace Card {
        enum CardVariant {
            BASE = 0,
            NARROW = 1
        }
        /** @ignore */
        class CardVariant_$WRAPPER {
            protected _$ordinal: number;
            protected _$name: string;
            value: any;
            constructor(_$ordinal: number, _$name: string, value: any);
            getValue(): string;
            name(): string;
            ordinal(): number;
            compareTo(other: any): number;
        }
    }
}
declare namespace com.spoonconsulting.lightning {
    class CheckBox extends JSContainer implements api.InputField<boolean> {
        checkbox: input.JSCheckBox;
        checkBoxLabel: JSContainer;
        label: JSContainer;
        constructor(name: string);
        getCheckBoxLabel(): JSContainer;
        getLabel(): string;
        setLabel(label: string): CheckBox;
        getCheckBox(): input.JSCheckBox;
        /**
         *
         * @return {boolean}
         */
        getValue(): boolean;
        /**
         *
         * @param {boolean} val
         */
        setValue(val: boolean): void;
        /**
         *
         */
        validate(): void;
        /**
         *
         * @return {string}
         */
        getBinding(): string;
        /**
         *
         * @param {string} binding
         * @return {*}
         */
        setBinding(binding: string): api.InputField<boolean>;
        /**
         *
         * @param {boolean} b
         * @return {*}
         */
        setRequired(b: boolean): api.InputField<boolean>;
    }
}
declare namespace com.spoonconsulting.lightning {
    class CheckBoxButton extends JSContainer implements api.InputField<boolean> {
        checkBox: input.JSCheckBox;
        faux: JSContainer;
        label: JSContainer;
        constructor(name: string);
        getLabel(): string;
        setLabel(label: string): CheckBoxButton;
        getCheckBox(): input.JSCheckBox;
        /**
         *
         * @return {boolean}
         */
        getValue(): boolean;
        /**
         *
         * @param {boolean} val
         */
        setValue(val: boolean): void;
        /**
         *
         */
        validate(): void;
        /**
         *
         * @return {string}
         */
        getBinding(): string;
        /**
         *
         * @param {string} binding
         * @return {*}
         */
        setBinding(binding: string): api.InputField<boolean>;
        /**
         *
         * @param {boolean} b
         * @return {*}
         */
        setRequired(b: boolean): api.InputField<boolean>;
    }
}
declare namespace com.spoonconsulting.lightning {
    class Dropdown extends JSContainer {
        menu: com.spoonconsulting.lightning.Menu;
        spinnerContainer: JSContainer;
        spinner: com.spoonconsulting.lightning.Spinner;
        isLoading: boolean;
        constructor(name: string);
        getIsLoading(): boolean;
        setIsLoading(isLoading: boolean): Dropdown;
        addItem(item: com.spoonconsulting.lightning.MenuItem): Dropdown;
        addMenuDivider(): Dropdown;
        getSpinner(): com.spoonconsulting.lightning.Spinner;
    }
}
declare namespace com.spoonconsulting.lightning {
    class FormElement<T> extends JSContainer implements api.InputField<T> {
        labelCtn: JSContainer;
        required: JSContainer;
        label: JSContainer;
        controlCtn: JSContainer;
        input: api.InputField<T>;
        value: T;
        formElementIcon: JSContainer;
        fieldLevelHelp: com.spoonconsulting.lightning.Help;
        help: JSContainer;
        variant: FormElement.FormElementVariant;
        constructor(name?: any, input?: any);
        setRequired(b: boolean): FormElement<T>;
        setLabel(label: string): FormElement<T>;
        setFieldLevelHelp(help: string): FormElement<T>;
        setInput(input: api.InputField<T>): FormElement<T>;
        getRequired(): JSContainer;
        getLabel(): JSContainer;
        getInput(): api.InputField<T>;
        /**
         *
         * @return {*}
         */
        getValue(): T;
        /**
         *
         * @param {*} val
         */
        setValue(val: T): void;
        /**
         *
         */
        validate(): void;
        /**
         *
         * @return {string}
         */
        getBinding(): string;
        /**
         *
         * @param {string} binding
         * @return {*}
         */
        setBinding(binding: string): api.InputField<T>;
        setDisabled(b: boolean): FormElement<T>;
        setError(error: string): FormElement<T>;
        clearError(): FormElement<T>;
        setHelp(help: string): FormElement<T>;
        setShowHelp(b: boolean): FormElement<T>;
        setVariant$com_spoonconsulting_lightning_FormElement_FormElementVariant(variant: FormElement.FormElementVariant): FormElement<T>;
        setVariant(variant?: any): any;
        setVariant$java_lang_String(variant: string): FormElement<T>;
        getVariant(): string;
    }
    namespace FormElement {
        enum FormElementVariant {
            STANDARD = 0,
            LABEL_HIDDEN = 1,
            LABEL_INLINE = 2,
            LABEL_STACKED = 3
        }
        /** @ignore */
        class FormElementVariant_$WRAPPER {
            protected _$ordinal: number;
            protected _$name: string;
            value: any;
            constructor(_$ordinal: number, _$name: string, value: any);
            getValue(): string;
            name(): string;
            ordinal(): number;
            compareTo(other: any): number;
        }
    }
}
declare namespace com.spoonconsulting.lightning {
    class GlobalConfigs {
        static BASE_ASSETS: string;
    }
}
declare namespace com.spoonconsulting.lightning {
    class Help extends JSContainer {
        icon: com.spoonconsulting.lightning.ButtonIcon;
        constructor(name: string);
        setContent(content: string): Help;
    }
}
declare namespace com.spoonconsulting.lightning {
    class Icon extends JSContainer {
        iconName: string;
        constructor(name: string, iconName: string);
        setIcon(group: string, name: string): Icon;
        setIconName(iconName: string): Icon;
        getIconName(): string;
        setSize$java_lang_String(size: string): Icon;
        setSize(size?: any): any;
        setSize$com_spoonconsulting_lightning_Size(size: com.spoonconsulting.lightning.Size): Icon;
    }
}
declare namespace com.spoonconsulting.lightning {
    enum InputType {
        CHECKBOX = 0,
        CHECKBOX_BUTTON = 1,
        DATE = 2,
        DATETIME = 3,
        TIME = 4,
        EMAIL = 5,
        FILE = 6,
        PASSWORD = 7,
        SEARCH = 8,
        TEL = 9,
        URL = 10,
        NUMBER = 11,
        TEXT = 12,
        TOGGLE = 13
    }
    /** @ignore */
    class InputType_$WRAPPER {
        protected _$ordinal: number;
        protected _$name: string;
        value: any;
        constructor(_$ordinal: number, _$name: string, value: any);
        getValue(): string;
        name(): string;
        ordinal(): number;
        compareTo(other: any): number;
    }
}
declare namespace com.spoonconsulting.lightning {
    interface IProgress extends api.Renderable {
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
declare namespace com.spoonconsulting.lightning {
    interface IStep extends api.Renderable {
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
declare namespace com.spoonconsulting.lightning {
    class Layout extends JSContainer {
        static HORIZONTAL_ALIGN_CENTER: string;
        static HORIZONTAL_ALIGN_SPACE: string;
        static HORIZONTAL_ALIGN_SPREAD: string;
        static HORIZONTAL_ALIGN_END: string;
        static VERTICAL_ALIGN_START: string;
        static VERTICAL_ALIGN_CENTER: string;
        static VERTICAL_ALIGN_END: string;
        static VERTICAL_ALIGN_STRETCH: string;
        static PULL_TO_BOUNDARY_SMALL: string;
        static PULL_TO_BOUNDARY_MEDIUM: string;
        static PULL_TO_BOUNDARY_LARGE: string;
        multipleRows: boolean;
        horizontalAlign: string;
        pullToBoundary: string;
        verticalAlign: string;
        constructor(name: string, tag: string);
        isMultipleRows(): boolean;
        setMultipleRows(multipleRows: boolean): Layout;
        getHorizontalAlign(): string;
        setHorizontalAlign(horizontalAlign: string): Layout;
        getPullToBoundary(): string;
        setPullToBoundary(pullToBoundary: string): Layout;
        getVerticalAlign(): string;
        setVerticalAlign(verticalAlign: string): Layout;
        refresh(): Layout;
    }
}
declare namespace com.spoonconsulting.lightning {
    class LayoutItem extends JSContainer {
        alignmentBumb: string;
        flexibility: string;
        largeDeviceSize: number;
        mediumDeviceSize: number;
        padding: string;
        size: number;
        smallDeviceSize: number;
        constructor(name: string, tag: string);
        getAlignmentBump(): string;
        setAlignmentBump$com_spoonconsulting_lightning_LayoutItem_AlignmentBump(al: LayoutItem.AlignmentBump): LayoutItem;
        setAlignmentBump(al?: any): any;
        setAlignmentBump$java_lang_String(alignmentBumb: string): LayoutItem;
        getFlexibility(): string;
        setFlexibility$com_spoonconsulting_lightning_LayoutItem_Flexibility(flexi: LayoutItem.Flexibility): LayoutItem;
        setFlexibility(flexi?: any): any;
        setFlexibility$java_lang_String(flexibility: string): LayoutItem;
        getLargeDeviceSize(): number;
        setLargeDeviceSize(largeDeviceSize: number): LayoutItem;
        getMediumDeviceSize(): number;
        setMediumDeviceSize(mediumDeviceSize: number): LayoutItem;
        getPadding(): string;
        setPadding$com_spoonconsulting_lightning_LayoutItem_Padding(pading: LayoutItem.Padding): LayoutItem;
        setPadding(pading?: any): any;
        setPadding$java_lang_String(padding: string): LayoutItem;
        getSize(): number;
        setSize(size: number): LayoutItem;
        getSmallDeviceSize(): number;
        setSmallDeviceSize(smallDeviceSize: number): LayoutItem;
    }
    namespace LayoutItem {
        enum AlignmentBump {
            TOP = 0,
            LEFT = 1,
            RIGHT = 2,
            BOTTOM = 3
        }
        /** @ignore */
        class AlignmentBump_$WRAPPER {
            protected _$ordinal: number;
            protected _$name: string;
            value: any;
            constructor(_$ordinal: number, _$name: string, value: any);
            getValue(): string;
            name(): string;
            ordinal(): number;
            compareTo(other: any): number;
        }
        enum Flexibility {
            AUTO = 0,
            SHRINK = 1,
            NO_SHRINK = 2,
            GROW = 3,
            NO_GROW = 4,
            NO_FLEX = 5
        }
        /** @ignore */
        class Flexibility_$WRAPPER {
            protected _$ordinal: number;
            protected _$name: string;
            value: any;
            constructor(_$ordinal: number, _$name: string, val: any);
            getValue(): string;
            name(): string;
            ordinal(): number;
            compareTo(other: any): number;
        }
        enum Padding {
            HORIZONTAL_SMALL = 0,
            HORIZONTAL_MEDIUM = 1,
            HORIZONTAL_LARGE = 2,
            AROUND_SMALL = 3,
            AROUND_MEDIUM = 4,
            AROUND_LARGE = 5
        }
        /** @ignore */
        class Padding_$WRAPPER {
            protected _$ordinal: number;
            protected _$name: string;
            value: any;
            constructor(_$ordinal: number, _$name: string, val: any);
            getValue(): string;
            name(): string;
            ordinal(): number;
            compareTo(other: any): number;
        }
    }
}
declare namespace com.spoonconsulting.lightning {
    class ListBox extends JSContainer {
        constructor(name: string);
        addOption$java_lang_String$java_lang_String(value: string, label: string): ListBox;
        addOption(value?: any, label?: any): any;
        addOption$jsweet_lang_Object(obj: Object): ListBox;
        setOptions(options: Array<Object>): ListBox;
        setValue(value: string): ListBox;
        getValue(): string;
    }
    namespace ListBox {
        class ListBoxOption extends JSContainer implements api.EventListener {
            __parent: any;
            figure: JSContainer;
            body: JSContainer;
            icon: com.spoonconsulting.lightning.IconContainer;
            label: JSContainer;
            constructor(__parent: any, value: string, label: string);
            setValue(value: string): ListBox.ListBoxOption;
            getValue(): string;
            setLabel(label: string): ListBox.ListBoxOption;
            getLabel(): string;
            setChecked(b: boolean): ListBox.ListBoxOption;
            isChecked(): boolean;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
        }
    }
}
declare namespace com.spoonconsulting.lightning {
    class MenuDivider extends JSContainer {
        constructor();
    }
}
declare namespace com.spoonconsulting.lightning {
    class MenuSubHeader extends JSContainer {
        span: JSContainer;
        constructor(name: string);
        setLabel(label: string): MenuSubHeader;
        getLabel(): string;
    }
}
declare namespace com.spoonconsulting.lightning {
    class Modal extends JSContainer {
        container: JSContainer;
        header: JSContainer;
        content: JSContainer;
        footer: JSContainer;
        __close: com.spoonconsulting.lightning.ButtonIcon;
        title: JSContainer;
        tagLine: JSContainer;
        backdrop: Modal.BackDrop;
        constructor(name: string);
        close(): void;
        open(): void;
        getContainer(): JSContainer;
        getHeader(): JSContainer;
        getContent(): JSContainer;
        getFooter(): JSContainer;
        getClose(): com.spoonconsulting.lightning.ButtonIcon;
        getTitle(): string;
        setTitle(title: string): Modal;
        getTagLine(): string;
        setTagLine(tagLine: string): Modal;
        getBackdrop(): Modal.BackDrop;
        setBackdrop(backdrop: Modal.BackDrop): void;
    }
    namespace Modal {
        class BackDrop extends JSContainer {
            constructor(name: string);
        }
        class Modal$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace com.spoonconsulting.lightning {
    class PathItem extends JSContainer implements com.spoonconsulting.lightning.IStep {
        link: JSContainer;
        stage: JSContainer;
        icon: com.spoonconsulting.lightning.Icon;
        title: JSContainer;
        constructor(name: string);
        setLabel(label: string): PathItem;
        getLabel(): string;
        setActive(b: boolean): PathItem;
        setCurrent(b: boolean): PathItem;
        setComplete(b: boolean): PathItem;
        setHasError(b: boolean): PathItem;
        getHasError(): boolean;
        isComplete(): boolean;
        isCurrent(): boolean;
        isActive(): boolean;
        setValue(value: string): PathItem;
        getValue(): string;
    }
}
declare namespace com.spoonconsulting.lightning {
    class Pill extends JSContainer {
        pillIconContainer: JSContainer;
        pillAction: JSContainer;
        pillLabel: JSContainer;
        closeButton: com.spoonconsulting.lightning.ButtonIcon;
        static VARIANT_PLAIN_LINK: string;
        static VARIANT_LINK: string;
        static VARIANT_PLAIN: string;
        constructor(name: string);
        addAvatar(avatar: com.spoonconsulting.lightning.Avatar): Pill;
        addIcon(ctn: com.spoonconsulting.lightning.IconContainer): Pill;
        setAriaSelected(s: string): Pill;
        getAriaSelected(): string;
        setHasError(b: boolean): Pill;
        setHref(href: string): Pill;
        getHref(): string;
        getHasError(): boolean;
        setLabel(label: string): Pill;
        getLabel(): string;
        setRole(role: string): Pill;
        getRole(): string;
        setTabIndex(index: number): Pill;
        getTabIndex(): number;
        setVariant(variant: string): Pill;
        getVariant(): string;
    }
}
declare namespace com.spoonconsulting.lightning {
    class Popover {
    }
}
declare namespace com.spoonconsulting.lightning {
    class ProgressBar extends JSContainer {
        value: JSContainer;
        assistiveText: JSContainer;
        constructor(name: string);
        setSize$com_spoonconsulting_lightning_Size(size: com.spoonconsulting.lightning.Size): ProgressBar;
        setSize(size?: any): any;
        setSize$java_lang_String(size: string): ProgressBar;
        setValue(percent: number): ProgressBar;
        getValue(): number;
        setVariant(variant: string): ProgressBar;
        getVariant(): string;
    }
}
declare namespace com.spoonconsulting.lightning {
    class ProgressIndicator extends JSContainer implements com.spoonconsulting.lightning.IProgress {
        progress: com.spoonconsulting.lightning.Progress;
        path: com.spoonconsulting.lightning.Path;
        usedType: com.spoonconsulting.lightning.IProgress;
        constructor(name: string);
        /**
         *
         * @param {string} value
         * @return {*}
         */
        setCurrentStep(value: string): com.spoonconsulting.lightning.IProgress;
        /**
         *
         * @return {*}
         */
        getCurrentStep(): com.spoonconsulting.lightning.IStep;
        /**
         *
         * @param {boolean} b
         * @return {*}
         */
        setHasError(b: boolean): com.spoonconsulting.lightning.IProgress;
        /**
         *
         * @return {boolean}
         */
        getHasError(): boolean;
        /**
         *
         * @param {string} variant
         * @return {*}
         */
        setVariant(variant: string): com.spoonconsulting.lightning.IProgress;
        /**
         *
         * @return {string}
         */
        getVariant(): string;
        /**
         *
         * @return {*[]}
         */
        getSteps(): Array<com.spoonconsulting.lightning.IStep>;
        /**
         *
         * @param {string} value
         * @return {*}
         */
        getStep(value: string): com.spoonconsulting.lightning.IStep;
        /**
         *
         * @return {*}
         */
        clearSteps(): com.spoonconsulting.lightning.IProgress;
        /**
         *
         * @param {*} step
         * @return {*}
         */
        removeStep(step: com.spoonconsulting.lightning.IStep): com.spoonconsulting.lightning.IProgress;
        setType(type: string): com.spoonconsulting.lightning.IProgress;
        getType(): string;
        /**
         *
         * @param {string} value
         * @return {*}
         */
        setValue(value: string): com.spoonconsulting.lightning.IProgress;
        /**
         *
         * @return {string}
         */
        getValue(): string;
        /**
         *
         * @param {string} label
         * @param {string} value
         * @return {*}
         */
        addStep(label: string, value: string): com.spoonconsulting.lightning.IProgress;
    }
}
declare namespace com.spoonconsulting.lightning {
    class ProgressStep extends JSContainer implements com.spoonconsulting.lightning.IStep {
        incomplete: com.spoonconsulting.lightning.Button;
        complete: com.spoonconsulting.lightning.ButtonIcon;
        constructor(name: string);
        /**
         *
         * @param {string} label
         * @return {*}
         */
        setLabel(label: string): com.spoonconsulting.lightning.IStep;
        /**
         *
         * @return {string}
         */
        getLabel(): string;
        /**
         *
         * @param {boolean} b
         * @return {*}
         */
        setActive(b: boolean): com.spoonconsulting.lightning.IStep;
        /**
         *
         * @param {boolean} b
         * @return {*}
         */
        setComplete(b: boolean): com.spoonconsulting.lightning.IStep;
        /**
         *
         * @param {boolean} b
         * @return {*}
         */
        setHasError(b: boolean): com.spoonconsulting.lightning.IStep;
        /**
         *
         * @return {boolean}
         */
        getHasError(): boolean;
        /**
         *
         * @return {boolean}
         */
        isComplete(): boolean;
        /**
         *
         * @return {boolean}
         */
        isActive(): boolean;
        /**
         *
         * @param {string} value
         * @return {*}
         */
        setValue(value: string): com.spoonconsulting.lightning.IStep;
        /**
         *
         * @return {string}
         */
        getValue(): string;
        /**
         *
         * @param {boolean} b
         * @return {*}
         */
        setCurrent(b: boolean): com.spoonconsulting.lightning.IStep;
        /**
         *
         * @return {boolean}
         */
        isCurrent(): boolean;
    }
}
declare namespace com.spoonconsulting.lightning {
    enum Size {
        EXTRA_EXTRA_SMALL = 0,
        EXTRA_SMALL = 1,
        SMALL = 2,
        MEDIUM = 3,
        LARGE = 4
    }
    /** @ignore */
    class Size_$WRAPPER {
        protected _$ordinal: number;
        protected _$name: string;
        value: any;
        constructor(_$ordinal: number, _$name: string, value: any);
        getValue(): string;
        name(): string;
        ordinal(): number;
        compareTo(other: any): number;
    }
}
declare namespace com.spoonconsulting.lightning {
    class Spinner extends JSContainer {
        alternativeText: string;
        constructor(name: string);
        refresh(): void;
        getAlternativeText(): string;
        setAlternativeText(alternativeText: string): void;
        setSize$com_spoonconsulting_lightning_Size(size: com.spoonconsulting.lightning.Size): Spinner;
        setSize(size?: any): any;
        setSize$java_lang_String(size: string): Spinner;
        setVariant$java_lang_String(variant: string): Spinner;
        setVariant(variant?: any): any;
        setVariant$com_spoonconsulting_lightning_Variant(variant: com.spoonconsulting.lightning.Variant): Spinner;
        setInlined(b: boolean): Spinner;
        setDelayed(b: boolean): Spinner;
    }
}
declare namespace com.spoonconsulting.lightning {
    class TabSet extends JSContainer {
        tablist: JSContainer;
        tabs: JSContainer;
        constructor(name: string);
        setActiveTabValue(val: string): void;
        setActiveTabItem(item: TabSet.TabItem): void;
        getActiveTabItem(): TabSet.TabItem;
        getTabItems(): Array<TabSet.TabItem>;
        addTab(tab: com.spoonconsulting.lightning.Tab, content: com.spoonconsulting.lightning.TabPanel): TabSet;
        getPanel(name: string): com.spoonconsulting.lightning.TabPanel;
        setVariant$com_spoonconsulting_lightning_TabSet_TabSetVariant(variant: TabSet.TabSetVariant): TabSet;
        setVariant(variant?: any): any;
        setVariant$java_lang_String(variant: string): TabSet;
    }
    namespace TabSet {
        enum TabSetVariant {
            STANDARD = 0,
            SCOPED = 1,
            VERTICAL = 2
        }
        /** @ignore */
        class TabSetVariant_$WRAPPER {
            protected _$ordinal: number;
            protected _$name: string;
            constructor(_$ordinal: number, _$name: string, value: any);
            value: any;
            name(): string;
            ordinal(): number;
            compareTo(other: any): number;
        }
        class TabItem extends JSContainer {
            __parent: any;
            tab: com.spoonconsulting.lightning.Tab;
            panel: com.spoonconsulting.lightning.TabPanel;
            constructor(__parent: any, name: string, tab: com.spoonconsulting.lightning.Tab, panel: com.spoonconsulting.lightning.TabPanel);
            setActive(b: boolean): void;
            isActive(): boolean;
        }
        namespace TabItem {
            class TabItem$0 implements api.EventListener {
                __parent: any;
                /**
                 *
                 * @param {*} source
                 * @param {Event} evt
                 */
                performAction(source: api.Renderable, evt: Event): void;
                constructor(__parent: any);
            }
        }
    }
}
declare namespace com.spoonconsulting.lightning {
    enum Variant {
        BASE = 0,
        NEUTRAL = 1,
        BRAND = 2,
        OUTLINE_BRAND = 3,
        DESTRUCTIVE = 4,
        TEXT_DESTRUCTIVE = 5,
        SUCCESS = 6,
        INVERSE = 7
    }
    /** @ignore */
    class Variant_$WRAPPER {
        protected _$ordinal: number;
        protected _$name: string;
        value: any;
        constructor(_$ordinal: number, _$name: string, value: any);
        getValue(): string;
        name(): string;
        ordinal(): number;
        compareTo(other: any): number;
    }
}
declare namespace com.spoonconsulting.lightning {
    class VerticalNavigation extends JSContainer {
        compact: boolean;
        selectedItem: string;
        selectedSection: string;
        shaded: boolean;
        constructor(name: string);
        isCompact(): boolean;
        setCompact(compact: boolean): VerticalNavigation;
        addSection$com_spoonconsulting_lightning_VerticalNavigationSection(section: com.spoonconsulting.lightning.VerticalNavigationSection): VerticalNavigation;
        addSection$java_lang_String$java_lang_String(name: string, label: string): com.spoonconsulting.lightning.VerticalNavigationSection;
        addSection(name?: any, label?: any): any;
        getSection(name: string): com.spoonconsulting.lightning.VerticalNavigationSection;
        getItem$java_lang_String(name: string): com.spoonconsulting.lightning.VerticalNavigationItem;
        getItem$java_lang_String$java_lang_String(sectionName: string, itemName: string): com.spoonconsulting.lightning.VerticalNavigationItem;
        getItem(sectionName?: any, itemName?: any): any;
        addSections(...sections: com.spoonconsulting.lightning.VerticalNavigationSection[]): VerticalNavigation;
        getSections(): Array<com.spoonconsulting.lightning.VerticalNavigationSection>;
        getSelectedItem(): string;
        setSelectedItem$java_lang_String$java_lang_String(selectedSection: string, selectedItem: string): VerticalNavigation;
        setSelectedItem(selectedSection?: any, selectedItem?: any): any;
        getItems(): Array<com.spoonconsulting.lightning.VerticalNavigationItem>;
        getSelectedSection(): string;
        setSelectedItem$java_lang_String(selectedItem: string): VerticalNavigation;
        isShaded(): boolean;
        setShaded(shaded: boolean): VerticalNavigation;
    }
    namespace VerticalNavigation {
        class VerticalNavigation$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace com.spoonconsulting.lightning {
    class VerticalNavigationItem extends JSContainer {
        action: JSContainer;
        label: JSContainer;
        selected: boolean;
        constructor(name: string);
        getSection(): com.spoonconsulting.lightning.VerticalNavigationSection;
        setSelected(b: boolean): VerticalNavigationItem;
        isSelected(): boolean;
        getAction(): JSContainer;
        setLabel(label: string): VerticalNavigationItem;
        getLabel(): string;
        setHref(href: string): VerticalNavigationItem;
        getHref(): string;
    }
    namespace VerticalNavigationItem {
        class VerticalNavigationItem$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace com.spoonconsulting.lightning {
    class VerticalNavigationSection extends JSContainer {
        label: JSContainer;
        list: JSContainer;
        selectedItem: string;
        constructor(name: string);
        addItem$com_spoonconsulting_lightning_VerticalNavigationItem(item: com.spoonconsulting.lightning.VerticalNavigationItem): VerticalNavigationSection;
        setSelectedItem(name: string): VerticalNavigationSection;
        addItem$java_lang_String$java_lang_String(name: string, label: string): com.spoonconsulting.lightning.VerticalNavigationItem;
        addItem$java_lang_String$java_lang_String$int(name: string, label: string, badgeCount: number): com.spoonconsulting.lightning.VerticalNavigationItemBadge;
        addItem$java_lang_String$java_lang_String$java_lang_String(name: string, label: string, iconName: string): com.spoonconsulting.lightning.VerticalNavigationItemIcon;
        addItem(name?: any, label?: any, iconName?: any): any;
        getItem(name: string): com.spoonconsulting.lightning.VerticalNavigationItem;
        getSelectedItem(): string;
        addItems(...items: com.spoonconsulting.lightning.VerticalNavigationItem[]): VerticalNavigationSection;
        getItems(): Array<com.spoonconsulting.lightning.VerticalNavigationItem>;
        setLabel(label: string): VerticalNavigationSection;
        getLabel(): string;
    }
    namespace VerticalNavigationSection {
        class VerticalNavigationSection$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
        class VerticalNavigationSection$1 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace com.spoonconsulting.lightning {
    class Path extends com.spoonconsulting.lightning.AbstractProgress implements com.spoonconsulting.lightning.IProgress {
        track: JSContainer;
        scrollerContainer: JSContainer;
        scroller: JSContainer;
        scrollerInner: JSContainer;
        nav: JSContainer;
        constructor(name: string);
        getSteps(): Array<com.spoonconsulting.lightning.IStep>;
        /**
         *
         * @return {*}
         */
        clearSteps(): com.spoonconsulting.lightning.IProgress;
        /**
         *
         * @param {string} label
         * @param {string} value
         * @return {*}
         */
        addStep(label: string, value: string): com.spoonconsulting.lightning.IProgress;
    }
}
declare namespace com.spoonconsulting.lightning {
    class Progress extends com.spoonconsulting.lightning.AbstractProgress implements com.spoonconsulting.lightning.IProgress {
        progressList: JSContainer;
        progressBar: com.spoonconsulting.lightning.ProgressBar;
        constructor(name: string);
        addStep$com_spoonconsulting_lightning_IStep(step: com.spoonconsulting.lightning.IStep): Progress;
        getSteps(): Array<com.spoonconsulting.lightning.IStep>;
        /**
         *
         * @return {*}
         */
        clearSteps(): com.spoonconsulting.lightning.IProgress;
        addStep$java_lang_String$java_lang_String(label: string, value: string): com.spoonconsulting.lightning.IProgress;
        /**
         *
         * @param {string} label
         * @param {string} value
         * @return {*}
         */
        addStep(label?: any, value?: any): any;
    }
}
declare namespace com.spoonconsulting.lightning {
    class TimeInput extends com.spoonconsulting.lightning.BaseComboBox<Date> {
        min: string;
        max: string;
        constructor(name: string);
        /**
         *
         * @param {string} s
         * @return {Date}
         */
        encode(s: string): Date;
        decode$jsweet_lang_Date(t: Date): string;
        /**
         *
         * @param {Date} t
         * @return {string}
         */
        decode(t?: any): any;
        to2dp(i: number): string;
        refresh(): void;
    }
}
declare namespace com.spoonconsulting.lightning {
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
    class Accordion extends com.spoonconsulting.lightning.BaseLightning {
        allowMultipleSectionOpen: boolean;
        constructor(name: string);
        /**
         * Add a {@link AccordionSection} to the {@link Accordion}.
         * @param {com.spoonconsulting.lightning.AccordionSection} section - The {@link AccordionSection} to add
         * @return {com.spoonconsulting.lightning.Accordion} - The current {@link Accordion}
         */
        addSection(section: com.spoonconsulting.lightning.AccordionSection): Accordion;
        /**
         * Add {@link AccordionSection}s to the accordion
         * @param {com.spoonconsulting.lightning.AccordionSection[]} accordionSections - The sections to add to the accordion
         * @return {com.spoonconsulting.lightning.Accordion} - The current {@link Accordion}
         */
        addSections(...accordionSections: com.spoonconsulting.lightning.AccordionSection[]): Accordion;
        /**
         * Synonymous to {@link Accordion#setOpen(String)}
         * @param {string} name - the name of the {@link AccordionSection} to activate / open
         * @return {com.spoonconsulting.lightning.Accordion} - The current {@link Accordion}
         */
        setActiveSectionName(name: string): Accordion;
        /**
         * Opens the {@link AccordionSection} with the given name<br>
         * Also close the other {@link AccordionSection}s if necessary.<Br>
         * if the {@link Accordion#isAllowMultipleSectionOpen()} = false, then the other {@link AccordionSection}s will be closed.<br>
         * On the other hand, if {@link Accordion#isAllowMultipleSection} = true, then the other {@link AccordionSection}s that are open, will remain open.<br>
         * @param {string} name - The name of the {@link AccordionSection} to open
         * @return {com.spoonconsulting.lightning.Accordion} - The current {@link Accordion}
         */
        setOpen(name: string): Accordion;
        fireSectionToggle(): void;
        /**
         * Close the {@link AccordionSection} with the specified name
         * @param {string} name - The name of the {@link AccordionSection} to close
         * @return {com.spoonconsulting.lightning.Accordion} - The current {@link Accordion}
         */
        setClose(name: string): Accordion;
        /**
         * If the {@link Accordion} allows multiple {@link AccordionSection} to be opened
         * @return {boolean} - Whether the {@link Accordion} allows multiple {@link AccordionSection} to be opened
         */
        isAllowMultipleSectionOpen(): boolean;
        /**
         * Configures the {@link Accordion}, to allow multiple {@link AccordionSection}s to be opened
         * @param {boolean} allowMultipleSectionOpen - if multiple {@link AccordionSection}s allowed to be opened
         */
        setAllowMultipleSectionOpen(allowMultipleSectionOpen: boolean): void;
        /**
         * @return {com.spoonconsulting.lightning.AccordionSection[]} - The {@link AccordionSection}s in the {@link Accordion}
         */
        getSections(): Array<com.spoonconsulting.lightning.AccordionSection>;
        /**
         * Returns the accordion section with the given name.
         * @param {string} name - The name of the {@link AccordionSection} to return.
         * @return
         * @return {com.spoonconsulting.lightning.AccordionSection}
         */
        getSection(name: string): com.spoonconsulting.lightning.AccordionSection;
    }
}
declare namespace com.spoonconsulting.lightning {
    /**
     * Constructs a new {@link AccordionSection} with the given name
     * @param {string} name
     * @class
     * @extends com.spoonconsulting.lightning.BaseLightning
     * @author Kureem Rossaye<br>
     */
    class AccordionSection extends com.spoonconsulting.lightning.BaseLightning {
        summary: JSContainer;
        content: JSContainer;
        summaryHeading: JSContainer;
        summaryHeadingAction: com.spoonconsulting.lightning.Button;
        summaryAction: JSContainer;
        summaryActionIcon: com.spoonconsulting.lightning.Icon;
        actionsSlot: JSContainer;
        constructor(name: string);
        /**
         * Sets the title of the {@link AccordionSection}
         * @param {string} title
         */
        setTitle(title: string): void;
        /**
         * Toggles the {@link AccordionSection}. Closes it if it is open, and opens it if it is closed.
         */
        toggle(): void;
        /**
         * Whether the {@link AccordionSection} is open
         * @return {boolean} - True if the {@link AccordionSection} is open and false if closed
         */
        isOpen(): boolean;
        /**
         * Whether to open or close this {@link AccordionSection}
         * @param {boolean} b - Opens it if true, closes it if false
         * @return {com.spoonconsulting.lightning.AccordionSection} - The updated {@link AccordionSection}
         */
        setOpen(b: boolean): AccordionSection;
        /**
         *
         * @return {JSContainer} - The summary container of the accordion section.
         */
        getSummary(): JSContainer;
        /**
         * The content slot of the {@link AccordionSection}
         * @return {JSContainer} - The content slot of the {@link AccordionSection}
         */
        getContent(): JSContainer;
        /**
         * The summary heading of the {@link AccordionSection}
         * @return {JSContainer} - The summary heading of the {@link AccordionSection}
         */
        getSummaryHeading(): JSContainer;
        /**
         * The summary action of the {@link AccordionSection}
         * @return {JSContainer} - The summary action of the {@link AccordionSection}
         */
        getSummaryAction(): JSContainer;
        /**
         * The summary action icon of the {@link AccordionSection}
         * @return {com.spoonconsulting.lightning.Icon} - The summary action icon of the {@link AccordionSection}
         */
        getSummaryActionIcon(): com.spoonconsulting.lightning.Icon;
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
        getSlot(name: string): JSContainer;
        /**
         * The action slot where {@link ButtonIcon} can be added
         * @return {JSContainer} - The {@link JSContainer} of the action slot
         */
        geActionsSlot(): JSContainer;
    }
    namespace AccordionSection {
        class AccordionSection$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace com.spoonconsulting.lightning {
    class Badge extends com.spoonconsulting.lightning.BaseLightning {
        label: JSContainer;
        leftIconContainer: com.spoonconsulting.lightning.IconContainer;
        leftBadgeIcon: JSContainer;
        rightIconContainer: com.spoonconsulting.lightning.IconContainer;
        rightBadgeIcon: JSContainer;
        assistiveText: JSContainer;
        static POSITION_START: string;
        static POSITION_END: string;
        iconPosition: string;
        constructor(name: string);
        setAssistiveText(txt: string): Badge;
        getAssistiveText(): string;
        getLabel(): string;
        setIconAlternativeText(altText: string): Badge;
        getIconAlternativeText(): string;
        setIconName(iconName: string): Badge;
        getIconName(): string;
        getIconPosition(): string;
        setIconPosition(position: string): Badge;
        setLabel(label: string): Badge;
    }
}
declare namespace com.spoonconsulting.lightning {
    class Button extends com.spoonconsulting.lightning.BaseLightning {
        icon: com.spoonconsulting.lightning.Icon;
        prefixIcon: com.spoonconsulting.lightning.Icon;
        label: JSContainer;
        draft: JSContainer;
        static ICON_POSITION_LEFT: string;
        static ICON_POSITION_RIGHT: string;
        static TYPE_BUTTON: string;
        static TYPE_SUBMIT: string;
        static TYPE_RESET: string;
        iconName: string;
        iconPosition: string;
        isDraft: boolean;
        draftAlternativeText: string;
        prefixIconName: string;
        constructor(name: string);
        refresh(): Button;
        getPrefixIconName(): string;
        setPrefixIconName(prefixIconName: string): Button;
        setDisabled(b: boolean): Button;
        isDisabled(): boolean;
        setIconName(iconName: string): Button;
        getIconName(): string;
        setIconPosition(position: string): Button;
        getIconPosition(): string;
        getIsDraft(): boolean;
        setIsDraft(isDraft: boolean): Button;
        getDraftAlternativeText(): string;
        setDraftAlternativeText(draftAlternativeText: string): Button;
        setLabel(label: string): Button;
        getLabel(): string;
        setType(type: string): Button;
        setValue(value: string): Button;
        getValue(): string;
        setVariant$com_spoonconsulting_lightning_Variant(variant: com.spoonconsulting.lightning.Variant): Button;
        setVariant(variant?: any): any;
        setVariant$java_lang_String(variant: string): Button;
        getPrefixIcon(): com.spoonconsulting.lightning.Icon;
        click(): void;
        blur(): void;
        getUILabel(): JSContainer;
        getIcon(): com.spoonconsulting.lightning.Icon;
    }
}
declare namespace com.spoonconsulting.lightning {
    class ButtonGroup extends com.spoonconsulting.lightning.BaseLightning {
        constructor(name: string);
        addButton(btn: com.spoonconsulting.lightning.Button): ButtonGroup;
    }
}
declare namespace com.spoonconsulting.lightning {
    class ButtonMenu extends com.spoonconsulting.lightning.BaseLightning {
        button: com.spoonconsulting.lightning.ButtonIcon;
        dropdown: com.spoonconsulting.lightning.Dropdown;
        menuAlignment: string;
        nubbin: boolean;
        constructor(name: string, tag: string);
        toggle(): void;
        open(): void;
        close(): void;
        setExpanded(b: boolean): ButtonMenu;
        isExpanded(): boolean;
        getIsDraft(): boolean;
        setIsDraft(isDraft: boolean): ButtonMenu;
        getDraftAlternativeText(): string;
        setDraftAlternativeText(draftAlternativeText: string): ButtonMenu;
        setIconName(iconName: string): ButtonMenu;
        getIconName(): string;
        setDisabled(b: boolean): ButtonMenu;
        setLabel(label: string): ButtonMenu;
        getLabel(): string;
        setIconSize$com_spoonconsulting_lightning_Size(size: com.spoonconsulting.lightning.Size): ButtonMenu;
        setIconSize(size?: any): any;
        setIconSize$java_lang_String(size: string): ButtonMenu;
        setIsLoading(b: boolean): ButtonMenu;
        getIsLoading(): boolean;
        setLoadingStateAlternativeText(txt: string): ButtonMenu;
        setMenuAlignment$com_spoonconsulting_lightning_ButtonMenu_MenuAlignment(alignment: ButtonMenu.MenuAlignment): ButtonMenu;
        setMenuAlignment(alignment?: any): any;
        setMenuAlignment$java_lang_String(alignment: string): ButtonMenu;
        getMenuAlignment(): string;
        isNubbin(): boolean;
        setNubbin(nubbin: boolean): ButtonMenu;
        setValue(val: string): ButtonMenu;
        getValue(): string;
        setVariant$com_spoonconsulting_lightning_ButtonIcon_ButtonIconVariant(variant: com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant): ButtonMenu;
        setVariant(variant?: any): any;
        setVariant$java_lang_String(variant: string): ButtonMenu;
        refresh(): void;
    }
    namespace ButtonMenu {
        enum MenuAlignment {
            LEFT = 0,
            RIGHT = 1,
            CENTER = 2,
            BOTTOM_LEFT = 3,
            BOTTOM_RIGHT = 4,
            BOTTOM_CENTER = 5,
            AUTO = 6
        }
        /** @ignore */
        class MenuAlignment_$WRAPPER {
            protected _$ordinal: number;
            protected _$name: string;
            value: any;
            constructor(_$ordinal: number, _$name: string, val: any);
            name(): string;
            ordinal(): number;
            compareTo(other: any): number;
        }
        class ButtonMenu$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace com.spoonconsulting.lightning {
    class ButtonStateful extends com.spoonconsulting.lightning.BaseLightning {
        btnNotSelected: ButtonStateful.innerBtn;
        btnSelected: ButtonStateful.innerBtn;
        btnSelectedFocus: ButtonStateful.innerBtn;
        selected: boolean;
        constructor(name: string);
        getIconNameWhenHover(): string;
        setIconNameWhenHover(iconNameWhenHover: string): ButtonStateful;
        getIconNameWhenOff(): string;
        setIconNameWhenOff(iconNameWhenOff: string): ButtonStateful;
        getIconNameWhenOn(): string;
        setIconNameWhenOn(iconNameWhenOn: string): ButtonStateful;
        getLabelWhenHover(): string;
        setLabelWhenHover(labelWhenHover: string): ButtonStateful;
        getLabelWhenOff(): string;
        setLabelWhenOff(labelWhenOff: string): ButtonStateful;
        getLabelWhenOn(): string;
        setLabelWhenOn(labelWhenOn: string): ButtonStateful;
        setVariant$java_lang_String(variant: string): ButtonStateful;
        setVariant(variant?: any): any;
        setVariant$com_spoonconsulting_lightning_Variant(variant: com.spoonconsulting.lightning.Variant): ButtonStateful;
        setSelected(selected: boolean): ButtonStateful;
        isSelected(): boolean;
        getBtnNotSelected(): ButtonStateful.innerBtn;
        getBtnSelected(): ButtonStateful.innerBtn;
        getSelectedFocus(): ButtonStateful.innerBtn;
        focus(): void;
    }
    namespace ButtonStateful {
        class innerBtn extends JSContainer {
            __parent: any;
            icon: com.spoonconsulting.lightning.Icon;
            label: JSContainer;
            constructor(__parent: any, name: string);
            setLabel(label: string): void;
            setIconName(iconName: string): void;
        }
        class ButtonStateful$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace com.spoonconsulting.lightning {
    class IconContainer extends com.spoonconsulting.lightning.BaseLightning {
        icon: com.spoonconsulting.lightning.Icon;
        assistiveText: JSContainer;
        constructor(name: string, tag: string);
        setAssistiveText(txt: string): IconContainer;
        getAssistiveText(): string;
        setIconName(iconName: string): IconContainer;
        getIcon(): com.spoonconsulting.lightning.Icon;
        setSize(size: com.spoonconsulting.lightning.Size): IconContainer;
    }
}
declare namespace com.spoonconsulting.lightning {
    class Menu extends com.spoonconsulting.lightning.BaseLightning {
        constructor(name: string);
        /**
         *
         * @param {string} title
         */
        setTitle(title: string): void;
        addMenuItem(item: com.spoonconsulting.lightning.MenuItem): Menu;
        addMenuItems(...items: com.spoonconsulting.lightning.MenuItem[]): Menu;
        addMenuDivider(): Menu;
    }
}
declare namespace com.spoonconsulting.lightning {
    class MenuItem extends com.spoonconsulting.lightning.BaseLightning {
        checked_: com.spoonconsulting.lightning.Icon;
        prefixIcon_: com.spoonconsulting.lightning.Icon;
        label: JSContainer;
        span: JSContainer;
        icon_: com.spoonconsulting.lightning.Icon;
        draft_: JSContainer;
        draftAlternativeText: string;
        checked: boolean;
        prefixIconName: string;
        iconName: string;
        value: any;
        draft: boolean;
        constructor(name: string);
        setLabel(label: string): MenuItem;
        getLabel(): string;
        setChecked(b: boolean): MenuItem;
        getDraftAlternativeText(): string;
        setDraftAlternativeText(draftAlternativeText: string): MenuItem;
        refresh(): MenuItem;
        getDraft(): boolean;
        setDraft(draft: boolean): MenuItem;
        isChecked(): boolean;
        /**
         *
         * @param {string} title
         */
        setTitle(title: string): void;
        setDisabled(b: boolean): MenuItem;
        isDisabled(): boolean;
        setDownload(download: string): MenuItem;
        getDownload(): string;
        setHref(href: string): MenuItem;
        getHref(): string;
        setIconName(iconName: string): MenuItem;
        getIconName(): string;
        getPrefixIconName(): string;
        setPrefixIconName(prefixIconName: string): MenuItem;
        setTabIndex(index: number): MenuItem;
        getTabIndex(): number;
        setTarget(target: string): MenuItem;
        getTarget(): string;
        setValue(value: any): MenuItem;
        getValue(): any;
        click(): void;
        focus(): void;
        blur(): void;
    }
}
declare namespace com.spoonconsulting.lightning {
    class Tab extends com.spoonconsulting.lightning.BaseLightning {
        endIconAlternariveText: string;
        endIconName: string;
        iconAssistiveText: string;
        iconName: string;
        showErrorIndicator: boolean;
        value: string;
        leftIconContainer: com.spoonconsulting.lightning.IconContainer;
        tabLeftIcon: JSContainer;
        rightIconContainer: com.spoonconsulting.lightning.IconContainer;
        tabRightIcon: JSContainer;
        errorIconContainer: com.spoonconsulting.lightning.IconContainer;
        tabErrorIcon: JSContainer;
        label: JSContainer;
        active: boolean;
        constructor(name: string);
        getEndIconAlternariveText(): string;
        setEndIconAlternariveText(endIconAlternariveText: string): Tab;
        getEndIconName(): string;
        setEndIconName(endIconName: string): Tab;
        getIconAssistiveText(): string;
        setIconAssistiveText(iconAssistiveText: string): Tab;
        getIconName(): string;
        setIconName(iconName: string): Tab;
        getShowErrorIndicator(): boolean;
        setShowErrorIndicator(showErrorIndicator: boolean): Tab;
        getValue(): string;
        setValue(value: string): Tab;
        getLabel(): string;
        setLabel(label: string): Tab;
        isActive(): boolean;
        setActive(active: boolean): void;
        refresh(): Tab;
    }
}
declare namespace com.spoonconsulting.lightning {
    class TabPanel extends com.spoonconsulting.lightning.BaseLightning {
        constructor(name: string);
        setActive(b: boolean): TabPanel;
        isActive(): boolean;
    }
}
declare namespace com.spoonconsulting.lightning {
    class ComboBox extends com.spoonconsulting.lightning.FormElement<string> {
        combo: com.spoonconsulting.lightning.BaseComboBox<string>;
        messageWhenValueMissing: string;
        constructor(name: string);
        setDisabled(b: boolean): ComboBox;
        isDisabled(): boolean;
        setDropdownAlignment(alignment: string): ComboBox;
        getDropdownAlignment(): string;
        getMessageWhenValueMissing(): string;
        setMessageWhenValueMissing(messageWhenValueMissing: string): void;
        setOptions(options: Array<Object>): ComboBox;
        blur(): void;
        checkValidity(): boolean;
        setCustomValidity(message: string, type: string, description: string): void;
    }
    namespace ComboBox {
        class ComboBox$0 implements api.EventListener {
            __parent: any;
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor(__parent: any);
        }
    }
}
declare namespace com.spoonconsulting.lightning {
    class Input extends com.spoonconsulting.lightning.FormElement<any> {
        textInput: input.JSTextInput;
        dateInput: input.JSDateInput;
        timeInput: input.JSTimeInput;
        numberInput: input.JSNumberInput;
        constructor(name: string);
    }
}
declare namespace com.spoonconsulting.lightning {
    class VerticalNavigationItemBadge extends com.spoonconsulting.lightning.VerticalNavigationItem {
        badge: com.spoonconsulting.lightning.Badge;
        constructor(name: string);
        setAssistiveText(txt: string): VerticalNavigationItemBadge;
        getAssistiveText(): string;
        setBadgeCount(count: number): VerticalNavigationItemBadge;
        getBadgeCount(): number;
    }
}
declare namespace com.spoonconsulting.lightning {
    class VerticalNavigationItemIcon extends com.spoonconsulting.lightning.VerticalNavigationItem {
        icon: com.spoonconsulting.lightning.IconContainer;
        constructor(name: string);
        setIconName(iconName: string): VerticalNavigationItemIcon;
        getIconName(): string;
    }
}
declare namespace com.spoonconsulting.lightning {
    class ButtonIcon extends com.spoonconsulting.lightning.Button {
        constructor(name: string, iconName: string);
        setAlternativeText(altText: string): ButtonIcon;
        setIconClass(iconClass: string): ButtonIcon;
        setSize$java_lang_String(size: string): ButtonIcon;
        setSize(size?: any): any;
        setSize$com_spoonconsulting_lightning_Size(size: com.spoonconsulting.lightning.Size): ButtonIcon;
        setTooltip(tooltip: string): ButtonIcon;
        /**
         *
         * @return {com.spoonconsulting.lightning.Button}
         */
        refresh(): com.spoonconsulting.lightning.Button;
        setVariant$java_lang_String(variant: string): ButtonIcon;
        setVariant(variant?: any): any;
        setVariant$com_spoonconsulting_lightning_ButtonIcon_ButtonIconVariant(variant: ButtonIcon.ButtonIconVariant): ButtonIcon;
        /**
         *
         * @param {string} label
         * @return {com.spoonconsulting.lightning.Button}
         */
        setLabel(label: string): com.spoonconsulting.lightning.Button;
    }
    namespace ButtonIcon {
        enum ButtonIconVariant {
            BARE = 0,
            CONTAINER = 1,
            BRAND = 2,
            BORDER = 3,
            BORDER_FILLED = 4,
            BARE_INVERSE = 5,
            BORDER_INVERSE = 6
        }
        /** @ignore */
        class ButtonIconVariant_$WRAPPER {
            protected _$ordinal: number;
            protected _$name: string;
            value: any;
            constructor(_$ordinal: number, _$name: string, value: any);
            getValue(): string;
            name(): string;
            ordinal(): number;
            compareTo(other: any): number;
        }
    }
}
declare namespace com.spoonconsulting.lightning {
    class ButtonIconStateful extends com.spoonconsulting.lightning.ButtonIcon {
        constructor(name: string, iconName: string);
        setSelected(b: boolean): ButtonIconStateful;
        isSelected(): boolean;
    }
    namespace ButtonIconStateful {
        enum ButtonIconStatefulVariant {
            BORDER = 0,
            BORDER_FILLED = 1,
            BORDER_INVERSE = 2
        }
        /** @ignore */
        class ButtonIconStatefulVariant_$WRAPPER {
            protected _$ordinal: number;
            protected _$name: string;
            value: any;
            constructor(_$ordinal: number, _$name: string, value: any);
            getValue(): string;
            name(): string;
            ordinal(): number;
            compareTo(other: any): number;
        }
    }
}
