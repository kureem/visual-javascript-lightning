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
        setSize$com_spoonconsulting_lightning_enums_Size(size: com.spoonconsulting.lightning.enums.Size): Avatar;
        /**
         * Sets the size of the {@link Avatar}. Possible values are<br>
         * <ul>
         * <li>{@link Size#X_SMALL}</li>
         * <li>{@link Size#SMALL}</li>
         * <li>{@link Size#MEDIUM}</li>
         * <li>{@link Size#LARGE}</li>
         * </ul>
         * @param {com.spoonconsulting.lightning.enums.Size} size - The size of the {@link Avatar}
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
            /**
             *
             * @param {*} source
             * @param {Event} evt
             */
            performAction(source: api.Renderable, evt: Event): void;
            constructor();
        }
        class Boot$7 implements api.EventListener {
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
    /**
     * <p>A {@link Breadcrumb} component displays the path of a page relative to a parent page.&nbsp;</p>
     * <p>&nbsp;{@link Breadcrumb} are nested in a {@link Breadcrumbs} component.</p>
     * <p>Each {@link Breadcrumb} is actionable and separated by a greater-than sign.&nbsp;</p>
     * <p>&nbsp;The order the {@link Breadcrumb}s appear depends on the order they added in the {@link Breadcrumbs} component.<br />
     * </p>
     * @author Kureem Rossaye<br>
     * <a href="mailto:kureem.rossaye@spoonconsulting.com">kureem.rossaye@spoonconsulting.com</a>
     * @param {string} name
     * @class
     * @extends JSContainer
     */
    class Breadcrumb extends JSContainer {
        constructor(name: string);
        /**
         * sets The URL of the page that the breadcrumb goes to.
         * @param {string} href - The URL of the page that the breadcrumb goes to.
         * @return {com.spoonconsulting.lightning.Breadcrumb} current instance of the Breadcrumb
         */
        setHref(href: string): Breadcrumb;
        /**
         * sets The text label for the breadcrumb.
         * @param {string} label - The text label for the breadcrumb.
         * @return {com.spoonconsulting.lightning.Breadcrumb} current instance of the Breadcrumb
         */
        setLabel(label: string): Breadcrumb;
        /**
         * @return {string} The URL of the page that the breadcrumb goes to
         */
        getHref(): string;
        /**
         * @return {string} the text label for the breadcrumb.
         */
        getLabel(): string;
        /**
         * sets focus to the Breadcrumb
         */
        focus(): void;
        /**
         * removes focus from the link
         */
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
        setVariant$com_spoonconsulting_lightning_enums_Variants_CardVariant(variant: com.spoonconsulting.lightning.enums.Variants.CardVariant): Card;
        getVariant(): string;
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
declare namespace com.spoonconsulting.lightning.enums {
    enum Color {
        DEFAULT = 0,
        SUCCESS = 1,
        WEAK = 2,
        ERROR = 3,
        DESTRUCTIVE = 4,
        INVERSE = 5,
        INVERSE_WEAK = 6
    }
    /** @ignore */
    class Color_$WRAPPER {
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
declare namespace com.spoonconsulting.lightning.enums {
    enum Direction {
        TOP = 0,
        RIGHT = 1,
        BOTTOM = 2,
        LEFT = 3,
        HORIZONTAL = 4,
        VERTICAL = 5,
        AROUND = 6
    }
    /** @ignore */
    class Direction_$WRAPPER {
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
declare namespace com.spoonconsulting.lightning.enums {
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
}
declare namespace com.spoonconsulting.lightning.enums {
    enum IconName {
        ACTION_ADD_CONTACT = 0,
        ACTION_ADD_FILE = 1,
        ACTION_ADD_PHOTO_VIDEO = 2,
        ACTION_ADD_RELATIONSHIP = 3,
        ACTION_ADJUST_VALUE = 4,
        ACTION_ANNOUNCEMENT = 5,
        ACTION_APEX = 6,
        ACTION_APPROVAL = 7,
        ACTION_BACK = 8,
        ACTION_BUG = 9,
        ACTION_CALL = 10,
        ACTION_CANVAS = 11,
        ACTION_CHANGE_OWNER = 12,
        ACTION_CHANGE_RECORD_TYPE = 13,
        ACTION_CHECK = 14,
        ACTION_CLONE = 15,
        ACTION_CLOSE = 16,
        ACTION_DEFER = 17,
        ACTION_DELETE = 18,
        ACTION_DESCRIPTION = 19,
        ACTION_DIAL_IN = 20,
        ACTION_DOWNLOAD = 21,
        ACTION_EDIT = 22,
        ACTION_EDIT_GROUPS = 23,
        ACTION_EDIT_RELATIONSHIP = 24,
        ACTION_EMAIL = 25,
        ACTION_FALLBACK = 26,
        ACTION_FILTER = 27,
        ACTION_FLOW = 28,
        ACTION_FOLLOW = 29,
        ACTION_FOLLOWING = 30,
        ACTION_FREEZE_USER = 31,
        ACTION_GOAL = 32,
        ACTION_GOOGLE_NEWS = 33,
        ACTION_INFO = 34,
        ACTION_JOIN_GROUP = 35,
        ACTION_LEAD_CONVERT = 36,
        ACTION_LEAVE_GROUP = 37,
        ACTION_LOG_A_CALL = 38,
        ACTION_LOG_EVENT = 39,
        ACTION_MANAGE_PERM_SETS = 40,
        ACTION_MAP = 41,
        ACTION_MORE = 42,
        ACTION_NEW = 43,
        ACTION_NEW_ACCOUNT = 44,
        ACTION_NEW_CAMPAIGN = 45,
        ACTION_NEW_CASE = 46,
        ACTION_NEW_CHILD_CASE = 47,
        ACTION_NEW_CONTACT = 48,
        ACTION_NEW_CUSTOM1 = 49,
        ACTION_NEW_CUSTOM10 = 50,
        ACTION_NEW_CUSTOM100 = 51,
        ACTION_NEW_CUSTOM11 = 52,
        ACTION_NEW_CUSTOM12 = 53,
        ACTION_NEW_CUSTOM13 = 54,
        ACTION_NEW_CUSTOM14 = 55,
        ACTION_NEW_CUSTOM15 = 56,
        ACTION_NEW_CUSTOM16 = 57,
        ACTION_NEW_CUSTOM17 = 58,
        ACTION_NEW_CUSTOM18 = 59,
        ACTION_NEW_CUSTOM19 = 60,
        ACTION_NEW_CUSTOM2 = 61,
        ACTION_NEW_CUSTOM20 = 62,
        ACTION_NEW_CUSTOM21 = 63,
        ACTION_NEW_CUSTOM22 = 64,
        ACTION_NEW_CUSTOM23 = 65,
        ACTION_NEW_CUSTOM24 = 66,
        ACTION_NEW_CUSTOM25 = 67,
        ACTION_NEW_CUSTOM26 = 68,
        ACTION_NEW_CUSTOM27 = 69,
        ACTION_NEW_CUSTOM28 = 70,
        ACTION_NEW_CUSTOM29 = 71,
        ACTION_NEW_CUSTOM3 = 72,
        ACTION_NEW_CUSTOM30 = 73,
        ACTION_NEW_CUSTOM31 = 74,
        ACTION_NEW_CUSTOM32 = 75,
        ACTION_NEW_CUSTOM33 = 76,
        ACTION_NEW_CUSTOM34 = 77,
        ACTION_NEW_CUSTOM35 = 78,
        ACTION_NEW_CUSTOM36 = 79,
        ACTION_NEW_CUSTOM37 = 80,
        ACTION_NEW_CUSTOM38 = 81,
        ACTION_NEW_CUSTOM39 = 82,
        ACTION_NEW_CUSTOM4 = 83,
        ACTION_NEW_CUSTOM40 = 84,
        ACTION_NEW_CUSTOM41 = 85,
        ACTION_NEW_CUSTOM42 = 86,
        ACTION_NEW_CUSTOM43 = 87,
        ACTION_NEW_CUSTOM44 = 88,
        ACTION_NEW_CUSTOM45 = 89,
        ACTION_NEW_CUSTOM46 = 90,
        ACTION_NEW_CUSTOM47 = 91,
        ACTION_NEW_CUSTOM48 = 92,
        ACTION_NEW_CUSTOM49 = 93,
        ACTION_NEW_CUSTOM5 = 94,
        ACTION_NEW_CUSTOM50 = 95,
        ACTION_NEW_CUSTOM51 = 96,
        ACTION_NEW_CUSTOM52 = 97,
        ACTION_NEW_CUSTOM53 = 98,
        ACTION_NEW_CUSTOM54 = 99,
        ACTION_NEW_CUSTOM55 = 100,
        ACTION_NEW_CUSTOM56 = 101,
        ACTION_NEW_CUSTOM57 = 102,
        ACTION_NEW_CUSTOM58 = 103,
        ACTION_NEW_CUSTOM59 = 104,
        ACTION_NEW_CUSTOM6 = 105,
        ACTION_NEW_CUSTOM60 = 106,
        ACTION_NEW_CUSTOM61 = 107,
        ACTION_NEW_CUSTOM62 = 108,
        ACTION_NEW_CUSTOM63 = 109,
        ACTION_NEW_CUSTOM64 = 110,
        ACTION_NEW_CUSTOM65 = 111,
        ACTION_NEW_CUSTOM66 = 112,
        ACTION_NEW_CUSTOM67 = 113,
        ACTION_NEW_CUSTOM68 = 114,
        ACTION_NEW_CUSTOM69 = 115,
        ACTION_NEW_CUSTOM7 = 116,
        ACTION_NEW_CUSTOM70 = 117,
        ACTION_NEW_CUSTOM71 = 118,
        ACTION_NEW_CUSTOM72 = 119,
        ACTION_NEW_CUSTOM73 = 120,
        ACTION_NEW_CUSTOM74 = 121,
        ACTION_NEW_CUSTOM75 = 122,
        ACTION_NEW_CUSTOM76 = 123,
        ACTION_NEW_CUSTOM77 = 124,
        ACTION_NEW_CUSTOM78 = 125,
        ACTION_NEW_CUSTOM79 = 126,
        ACTION_NEW_CUSTOM8 = 127,
        ACTION_NEW_CUSTOM80 = 128,
        ACTION_NEW_CUSTOM81 = 129,
        ACTION_NEW_CUSTOM82 = 130,
        ACTION_NEW_CUSTOM83 = 131,
        ACTION_NEW_CUSTOM84 = 132,
        ACTION_NEW_CUSTOM85 = 133,
        ACTION_NEW_CUSTOM86 = 134,
        ACTION_NEW_CUSTOM87 = 135,
        ACTION_NEW_CUSTOM88 = 136,
        ACTION_NEW_CUSTOM89 = 137,
        ACTION_NEW_CUSTOM9 = 138,
        ACTION_NEW_CUSTOM90 = 139,
        ACTION_NEW_CUSTOM91 = 140,
        ACTION_NEW_CUSTOM92 = 141,
        ACTION_NEW_CUSTOM93 = 142,
        ACTION_NEW_CUSTOM94 = 143,
        ACTION_NEW_CUSTOM95 = 144,
        ACTION_NEW_CUSTOM96 = 145,
        ACTION_NEW_CUSTOM97 = 146,
        ACTION_NEW_CUSTOM98 = 147,
        ACTION_NEW_CUSTOM99 = 148,
        ACTION_NEW_EVENT = 149,
        ACTION_NEW_GROUP = 150,
        ACTION_NEW_LEAD = 151,
        ACTION_NEW_NOTE = 152,
        ACTION_NEW_NOTEBOOK = 153,
        ACTION_NEW_OPPORTUNITY = 154,
        ACTION_NEW_PERSON_ACCOUNT = 155,
        ACTION_NEW_TASK = 156,
        ACTION_PASSWORD_UNLOCK = 157,
        ACTION_PREVIEW = 158,
        ACTION_PRIORITY = 159,
        ACTION_QUESTION_POST_ACTION = 160,
        ACTION_QUOTE = 161,
        ACTION_RECALL = 162,
        ACTION_RECORD = 163,
        ACTION_REFRESH = 164,
        ACTION_REJECT = 165,
        ACTION_REMOVE = 166,
        ACTION_REMOVE_RELATIONSHIP = 167,
        ACTION_RESET_PASSWORD = 168,
        ACTION_SCRIPT = 169,
        ACTION_SHARE = 170,
        ACTION_SHARE_FILE = 171,
        ACTION_SHARE_LINK = 172,
        ACTION_SHARE_POLL = 173,
        ACTION_SHARE_POST = 174,
        ACTION_SHARE_THANKS = 175,
        ACTION_SORT = 176,
        ACTION_SUBMIT_FOR_APPROVAL = 177,
        ACTION_UPDATE = 178,
        ACTION_UPDATE_STATUS = 179,
        ACTION_UPLOAD = 180,
        ACTION_USER = 181,
        ACTION_USER_ACTIVATION = 182,
        ACTION_VIEW_RELATIONSHIP = 183,
        ACTION_WEB_LINK = 184,
        CUSTOM_CUSTOM1 = 185,
        CUSTOM_CUSTOM10 = 186,
        CUSTOM_CUSTOM100 = 187,
        CUSTOM_CUSTOM101 = 188,
        CUSTOM_CUSTOM102 = 189,
        CUSTOM_CUSTOM103 = 190,
        CUSTOM_CUSTOM104 = 191,
        CUSTOM_CUSTOM105 = 192,
        CUSTOM_CUSTOM106 = 193,
        CUSTOM_CUSTOM107 = 194,
        CUSTOM_CUSTOM108 = 195,
        CUSTOM_CUSTOM109 = 196,
        CUSTOM_CUSTOM11 = 197,
        CUSTOM_CUSTOM110 = 198,
        CUSTOM_CUSTOM111 = 199,
        CUSTOM_CUSTOM112 = 200,
        CUSTOM_CUSTOM113 = 201,
        CUSTOM_CUSTOM12 = 202,
        CUSTOM_CUSTOM13 = 203,
        CUSTOM_CUSTOM14 = 204,
        CUSTOM_CUSTOM15 = 205,
        CUSTOM_CUSTOM16 = 206,
        CUSTOM_CUSTOM17 = 207,
        CUSTOM_CUSTOM18 = 208,
        CUSTOM_CUSTOM19 = 209,
        CUSTOM_CUSTOM2 = 210,
        CUSTOM_CUSTOM20 = 211,
        CUSTOM_CUSTOM21 = 212,
        CUSTOM_CUSTOM22 = 213,
        CUSTOM_CUSTOM23 = 214,
        CUSTOM_CUSTOM24 = 215,
        CUSTOM_CUSTOM25 = 216,
        CUSTOM_CUSTOM26 = 217,
        CUSTOM_CUSTOM27 = 218,
        CUSTOM_CUSTOM28 = 219,
        CUSTOM_CUSTOM29 = 220,
        CUSTOM_CUSTOM3 = 221,
        CUSTOM_CUSTOM30 = 222,
        CUSTOM_CUSTOM31 = 223,
        CUSTOM_CUSTOM32 = 224,
        CUSTOM_CUSTOM33 = 225,
        CUSTOM_CUSTOM34 = 226,
        CUSTOM_CUSTOM35 = 227,
        CUSTOM_CUSTOM36 = 228,
        CUSTOM_CUSTOM37 = 229,
        CUSTOM_CUSTOM38 = 230,
        CUSTOM_CUSTOM39 = 231,
        CUSTOM_CUSTOM4 = 232,
        CUSTOM_CUSTOM40 = 233,
        CUSTOM_CUSTOM41 = 234,
        CUSTOM_CUSTOM42 = 235,
        CUSTOM_CUSTOM43 = 236,
        CUSTOM_CUSTOM44 = 237,
        CUSTOM_CUSTOM45 = 238,
        CUSTOM_CUSTOM46 = 239,
        CUSTOM_CUSTOM47 = 240,
        CUSTOM_CUSTOM48 = 241,
        CUSTOM_CUSTOM49 = 242,
        CUSTOM_CUSTOM5 = 243,
        CUSTOM_CUSTOM50 = 244,
        CUSTOM_CUSTOM51 = 245,
        CUSTOM_CUSTOM52 = 246,
        CUSTOM_CUSTOM53 = 247,
        CUSTOM_CUSTOM54 = 248,
        CUSTOM_CUSTOM55 = 249,
        CUSTOM_CUSTOM56 = 250,
        CUSTOM_CUSTOM57 = 251,
        CUSTOM_CUSTOM58 = 252,
        CUSTOM_CUSTOM59 = 253,
        CUSTOM_CUSTOM6 = 254,
        CUSTOM_CUSTOM60 = 255,
        CUSTOM_CUSTOM61 = 256,
        CUSTOM_CUSTOM62 = 257,
        CUSTOM_CUSTOM63 = 258,
        CUSTOM_CUSTOM64 = 259,
        CUSTOM_CUSTOM65 = 260,
        CUSTOM_CUSTOM66 = 261,
        CUSTOM_CUSTOM67 = 262,
        CUSTOM_CUSTOM68 = 263,
        CUSTOM_CUSTOM69 = 264,
        CUSTOM_CUSTOM7 = 265,
        CUSTOM_CUSTOM70 = 266,
        CUSTOM_CUSTOM71 = 267,
        CUSTOM_CUSTOM72 = 268,
        CUSTOM_CUSTOM73 = 269,
        CUSTOM_CUSTOM74 = 270,
        CUSTOM_CUSTOM75 = 271,
        CUSTOM_CUSTOM76 = 272,
        CUSTOM_CUSTOM77 = 273,
        CUSTOM_CUSTOM78 = 274,
        CUSTOM_CUSTOM79 = 275,
        CUSTOM_CUSTOM8 = 276,
        CUSTOM_CUSTOM80 = 277,
        CUSTOM_CUSTOM81 = 278,
        CUSTOM_CUSTOM82 = 279,
        CUSTOM_CUSTOM83 = 280,
        CUSTOM_CUSTOM84 = 281,
        CUSTOM_CUSTOM85 = 282,
        CUSTOM_CUSTOM86 = 283,
        CUSTOM_CUSTOM87 = 284,
        CUSTOM_CUSTOM88 = 285,
        CUSTOM_CUSTOM89 = 286,
        CUSTOM_CUSTOM9 = 287,
        CUSTOM_CUSTOM90 = 288,
        CUSTOM_CUSTOM91 = 289,
        CUSTOM_CUSTOM92 = 290,
        CUSTOM_CUSTOM93 = 291,
        CUSTOM_CUSTOM94 = 292,
        CUSTOM_CUSTOM95 = 293,
        CUSTOM_CUSTOM96 = 294,
        CUSTOM_CUSTOM97 = 295,
        CUSTOM_CUSTOM98 = 296,
        CUSTOM_CUSTOM99 = 297,
        DOCTYPE_AI = 298,
        DOCTYPE_ATTACHMENT = 299,
        DOCTYPE_AUDIO = 300,
        DOCTYPE_BOX_NOTES = 301,
        DOCTYPE_CSV = 302,
        DOCTYPE_EPS = 303,
        DOCTYPE_EXCEL = 304,
        DOCTYPE_EXE = 305,
        DOCTYPE_FLASH = 306,
        DOCTYPE_FOLDER = 307,
        DOCTYPE_GDOC = 308,
        DOCTYPE_GDOCS = 309,
        DOCTYPE_GFORM = 310,
        DOCTYPE_GPRES = 311,
        DOCTYPE_GSHEET = 312,
        DOCTYPE_HTML = 313,
        DOCTYPE_IMAGE = 314,
        DOCTYPE_KEYNOTE = 315,
        DOCTYPE_LIBRARY_FOLDER = 316,
        DOCTYPE_LINK = 317,
        DOCTYPE_MP4 = 318,
        DOCTYPE_OVERLAY = 319,
        DOCTYPE_PACK = 320,
        DOCTYPE_PAGES = 321,
        DOCTYPE_PDF = 322,
        DOCTYPE_PPT = 323,
        DOCTYPE_PSD = 324,
        DOCTYPE_QUIP_DOC = 325,
        DOCTYPE_QUIP_SHEET = 326,
        DOCTYPE_QUIP_SLIDE = 327,
        DOCTYPE_RTF = 328,
        DOCTYPE_SLIDE = 329,
        DOCTYPE_STYPI = 330,
        DOCTYPE_TXT = 331,
        DOCTYPE_UNKNOWN = 332,
        DOCTYPE_VIDEO = 333,
        DOCTYPE_VISIO = 334,
        DOCTYPE_WEBEX = 335,
        DOCTYPE_WORD = 336,
        DOCTYPE_XML = 337,
        DOCTYPE_ZIP = 338,
        STANDARD_ACCOUNT = 339,
        STANDARD_ACCOUNT_INFO = 340,
        STANDARD_ACTION_LIST_COMPONENT = 341,
        STANDARD_ACTIONS_AND_BUTTONS = 342,
        STANDARD_ACTIVATION_TARGET = 343,
        STANDARD_ACTIVATIONS = 344,
        STANDARD_ADDRESS = 345,
        STANDARD_AGENT_HOME = 346,
        STANDARD_AGENT_SESSION = 347,
        STANDARD_AGGREGATION_POLICY = 348,
        STANDARD_ALL = 349,
        STANDARD_ANNOUNCEMENT = 350,
        STANDARD_ANSWER_BEST = 351,
        STANDARD_ANSWER_PRIVATE = 352,
        STANDARD_ANSWER_PUBLIC = 353,
        STANDARD_APEX = 354,
        STANDARD_APEX_PLUGIN = 355,
        STANDARD_APP = 356,
        STANDARD_APPROVAL = 357,
        STANDARD_APPS = 358,
        STANDARD_APPS_ADMIN = 359,
        STANDARD_ARTICLE = 360,
        STANDARD_ASSET_ACTION = 361,
        STANDARD_ASSET_ACTION_SOURCE = 362,
        STANDARD_ASSET_DOWNTIME_PERIOD = 363,
        STANDARD_ASSET_OBJECT = 364,
        STANDARD_ASSET_RELATIONSHIP = 365,
        STANDARD_ASSET_STATE_PERIOD = 366,
        STANDARD_ASSET_WARRANTY = 367,
        STANDARD_ASSIGNED_RESOURCE = 368,
        STANDARD_ASSIGNMENT = 369,
        STANDARD_AVATAR = 370,
        STANDARD_AVATAR_LOADING = 371,
        STANDARD_BOT = 372,
        STANDARD_BOT_TRAINING = 373,
        STANDARD_BRANCH_MERGE = 374,
        STANDARD_BRAND = 375,
        STANDARD_BUDGET = 376,
        STANDARD_BUDGET_ALLOCATION = 377,
        STANDARD_BUNDLE_CONFIG = 378,
        STANDARD_BUNDLE_POLICY = 379,
        STANDARD_BUSINESS_HOURS = 380,
        STANDARD_BUYER_ACCOUNT = 381,
        STANDARD_BUYER_GROUP = 382,
        STANDARD_CALCULATED_INSIGHTS = 383,
        STANDARD_CALIBRATION = 384,
        STANDARD_CALL = 385,
        STANDARD_CALL_COACHING = 386,
        STANDARD_CALL_HISTORY = 387,
        STANDARD_CAMPAIGN = 388,
        STANDARD_CAMPAIGN_MEMBERS = 389,
        STANDARD_CANCEL_CHECKOUT = 390,
        STANDARD_CANVAS = 391,
        STANDARD_CAPACITY_PLAN = 392,
        STANDARD_CARE_REQUEST_REVIEWER = 393,
        STANDARD_CAROUSEL = 394,
        STANDARD_CASE = 395,
        STANDARD_CASE_CHANGE_STATUS = 396,
        STANDARD_CASE_COMMENT = 397,
        STANDARD_CASE_EMAIL = 398,
        STANDARD_CASE_LOG_A_CALL = 399,
        STANDARD_CASE_MILESTONE = 400,
        STANDARD_CASE_TRANSCRIPT = 401,
        STANDARD_CASE_WRAP_UP = 402,
        STANDARD_CATALOG = 403,
        STANDARD_CATEGORY = 404,
        STANDARD_CHANGE_REQUEST = 405,
        STANDARD_CHANNEL_PROGRAM_HISTORY = 406,
        STANDARD_CHANNEL_PROGRAM_LEVELS = 407,
        STANDARD_CHANNEL_PROGRAM_MEMBERS = 408,
        STANDARD_CHANNEL_PROGRAMS = 409,
        STANDARD_CHART = 410,
        STANDARD_CHECKOUT = 411,
        STANDARD_CHOICE = 412,
        STANDARD_CLIENT = 413,
        STANDARD_CMS = 414,
        STANDARD_COACHING = 415,
        STANDARD_CODE_PLAYGROUND = 416,
        STANDARD_CODE_SET = 417,
        STANDARD_CODE_SET_BUNDLE = 418,
        STANDARD_COLLECTION = 419,
        STANDARD_COLLECTION_VARIABLE = 420,
        STANDARD_CONNECTED_APPS = 421,
        STANDARD_CONSTANT = 422,
        STANDARD_CONTACT = 423,
        STANDARD_CONTACT_LIST = 424,
        STANDARD_CONTACT_REQUEST = 425,
        STANDARD_CONTRACT = 426,
        STANDARD_CONTRACT_LINE_ITEM = 427,
        STANDARD_COUPON_CODES = 428,
        STANDARD_CURRENCY = 429,
        STANDARD_CURRENCY_INPUT = 430,
        STANDARD_CUSTOM = 431,
        STANDARD_CUSTOM_COMPONENT_TASK = 432,
        STANDARD_CUSTOM_NOTIFICATION = 433,
        STANDARD_CUSTOMER_360 = 434,
        STANDARD_CUSTOMER_LIFECYCLE_ANALYTICS = 435,
        STANDARD_CUSTOMER_PORTAL_USERS = 436,
        STANDARD_CUSTOMERS = 437,
        STANDARD_DASHBOARD = 438,
        STANDARD_DASHBOARD_EA = 439,
        STANDARD_DATA_INTEGRATION_HUB = 440,
        STANDARD_DATA_MAPPING = 441,
        STANDARD_DATA_MODEL = 442,
        STANDARD_DATA_STREAMS = 443,
        STANDARD_DATADOTCOM = 444,
        STANDARD_DATASET = 445,
        STANDARD_DATE_INPUT = 446,
        STANDARD_DATE_TIME = 447,
        STANDARD_DECISION = 448,
        STANDARD_DEFAULT = 449,
        STANDARD_DELEGATED_ACCOUNT = 450,
        STANDARD_DEVICE = 451,
        STANDARD_DISCOUNTS = 452,
        STANDARD_DISPLAY_RICH_TEXT = 453,
        STANDARD_DISPLAY_TEXT = 454,
        STANDARD_DOCUMENT = 455,
        STANDARD_DOCUMENT_REFERENCE = 456,
        STANDARD_DRAFTS = 457,
        STANDARD_DURATION_DOWNSCALE = 458,
        STANDARD_DYNAMIC_RECORD_CHOICE = 459,
        STANDARD_EDUCATION = 460,
        STANDARD_EINSTEIN_REPLIES = 461,
        STANDARD_EMAIL = 462,
        STANDARD_EMAIL_CHATTER = 463,
        STANDARD_EMPLOYEE = 464,
        STANDARD_EMPLOYEE_ASSET = 465,
        STANDARD_EMPLOYEE_CONTACT = 466,
        STANDARD_EMPLOYEE_JOB = 467,
        STANDARD_EMPLOYEE_JOB_POSITION = 468,
        STANDARD_EMPLOYEE_ORGANIZATION = 469,
        STANDARD_EMPTY = 470,
        STANDARD_ENDORSEMENT = 471,
        STANDARD_ENTITLEMENT = 472,
        STANDARD_ENTITLEMENT_POLICY = 473,
        STANDARD_ENTITLEMENT_PROCESS = 474,
        STANDARD_ENTITLEMENT_TEMPLATE = 475,
        STANDARD_ENTITY = 476,
        STANDARD_ENTITY_MILESTONE = 477,
        STANDARD_ENVIRONMENT_HUB = 478,
        STANDARD_EVENT = 479,
        STANDARD_EVENTS = 480,
        STANDARD_EXPENSE = 481,
        STANDARD_EXPENSE_REPORT = 482,
        STANDARD_EXPENSE_REPORT_ENTRY = 483,
        STANDARD_FEED = 484,
        STANDARD_FEEDBACK = 485,
        STANDARD_FILE = 486,
        STANDARD_FILTER = 487,
        STANDARD_FILTER_CRITERIA = 488,
        STANDARD_FILTER_CRITERIA_RULE = 489,
        STANDARD_FIRST_NON_EMPTY = 490,
        STANDARD_FLOW = 491,
        STANDARD_FOLDER = 492,
        STANDARD_FORECASTS = 493,
        STANDARD_FORM = 494,
        STANDARD_FORMULA = 495,
        STANDARD_FULFILLMENT_ORDER = 496,
        STANDARD_GENERIC_LOADING = 497,
        STANDARD_GLOBAL_CONSTANT = 498,
        STANDARD_GOALS = 499,
        STANDARD_GROUP_LOADING = 500,
        STANDARD_GROUPS = 501,
        STANDARD_GUIDANCE_CENTER = 502,
        STANDARD_HIERARCHY = 503,
        STANDARD_HIGH_VELOCITY_SALES = 504,
        STANDARD_HOLIDAY_OPERATING_HOURS = 505,
        STANDARD_HOME = 506,
        STANDARD_HOUSEHOLD = 507,
        STANDARD_IDENTIFIER = 508,
        STANDARD_IMMUNIZATION = 509,
        STANDARD_INCIDENT = 510,
        STANDARD_INDIVIDUAL = 511,
        STANDARD_INSIGHTS = 512,
        STANDARD_INSTORE_LOCATIONS = 513,
        STANDARD_INVESTMENT_ACCOUNT = 514,
        STANDARD_INVOCABLE_ACTION = 515,
        STANDARD_IOT_CONTEXT = 516,
        STANDARD_IOT_ORCHESTRATIONS = 517,
        STANDARD_JAVASCRIPT_BUTTON = 518,
        STANDARD_JOB_FAMILY = 519,
        STANDARD_JOB_POSITION = 520,
        STANDARD_JOB_PROFILE = 521,
        STANDARD_KANBAN = 522,
        STANDARD_KEY_DATES = 523,
        STANDARD_KNOWLEDGE = 524,
        STANDARD_LEAD = 525,
        STANDARD_LEAD_INSIGHTS = 526,
        STANDARD_LEAD_LIST = 527,
        STANDARD_LETTERHEAD = 528,
        STANDARD_LIGHTNING_COMPONENT = 529,
        STANDARD_LIGHTNING_USAGE = 530,
        STANDARD_LINK = 531,
        STANDARD_LIST_EMAIL = 532,
        STANDARD_LIVE_CHAT = 533,
        STANDARD_LIVE_CHAT_VISITOR = 534,
        STANDARD_LOCATION = 535,
        STANDARD_LOCATION_PERMIT = 536,
        STANDARD_LOG_A_CALL = 537,
        STANDARD_LOGGING = 538,
        STANDARD_LOOP = 539,
        STANDARD_MACROS = 540,
        STANDARD_MAINTENANCE_ASSET = 541,
        STANDARD_MAINTENANCE_PLAN = 542,
        STANDARD_MAINTENANCE_WORK_RULE = 543,
        STANDARD_MARKETING_ACTIONS = 544,
        STANDARD_MEDICATION = 545,
        STANDARD_MEDICATION_INGREDIENT = 546,
        STANDARD_MEDICATION_STATEMENT = 547,
        STANDARD_MERGE = 548,
        STANDARD_MESSAGING_CONVERSATION = 549,
        STANDARD_MESSAGING_SESSION = 550,
        STANDARD_MESSAGING_USER = 551,
        STANDARD_METRICS = 552,
        STANDARD_MULTI_PICKLIST = 553,
        STANDARD_MULTI_SELECT_CHECKBOX = 554,
        STANDARD_NETWORK_CONTRACT = 555,
        STANDARD_NEWS = 556,
        STANDARD_NOTE = 557,
        STANDARD_NUMBER_INPUT = 558,
        STANDARD_OBSERVATION_COMPONENT = 559,
        STANDARD_OMNI_SUPERVISOR = 560,
        STANDARD_OPERATING_HOURS = 561,
        STANDARD_OPPORTUNITY = 562,
        STANDARD_OPPORTUNITY_CONTACT_ROLE = 563,
        STANDARD_OPPORTUNITY_SPLITS = 564,
        STANDARD_ORCHESTRATOR = 565,
        STANDARD_ORDER_ITEM = 566,
        STANDARD_ORDERS = 567,
        STANDARD_OUTCOME = 568,
        STANDARD_OUTPUT = 569,
        STANDARD_PARTNER_FUND_ALLOCATION = 570,
        STANDARD_PARTNER_FUND_CLAIM = 571,
        STANDARD_PARTNER_FUND_REQUEST = 572,
        STANDARD_PARTNER_MARKETING_BUDGET = 573,
        STANDARD_PARTNERS = 574,
        STANDARD_PASSWORD = 575,
        STANDARD_PAST_CHAT = 576,
        STANDARD_PATIENT_MEDICATION_DOSAGE = 577,
        STANDARD_PAYMENT_GATEWAY = 578,
        STANDARD_PEOPLE = 579,
        STANDARD_PERFORMANCE = 580,
        STANDARD_PERSON_ACCOUNT = 581,
        STANDARD_PERSON_LANGUAGE = 582,
        STANDARD_PERSON_NAME = 583,
        STANDARD_PHOTO = 584,
        STANDARD_PICKLIST_CHOICE = 585,
        STANDARD_PICKLIST_TYPE = 586,
        STANDARD_PLANOGRAM = 587,
        STANDARD_POLL = 588,
        STANDARD_PORTAL = 589,
        STANDARD_PORTAL_ROLES = 590,
        STANDARD_PORTAL_ROLES_AND_SUBORDINATES = 591,
        STANDARD_POST = 592,
        STANDARD_PRACTITIONER_ROLE = 593,
        STANDARD_PRICE_BOOK_ENTRIES = 594,
        STANDARD_PRICE_BOOKS = 595,
        STANDARD_PRICEBOOK = 596,
        STANDARD_PRICING_WORKSPACE = 597,
        STANDARD_PROBLEM = 598,
        STANDARD_PROCEDURE = 599,
        STANDARD_PROCEDURE_DETAIL = 600,
        STANDARD_PROCESS = 601,
        STANDARD_PROCESS_EXCEPTION = 602,
        STANDARD_PRODUCT = 603,
        STANDARD_PRODUCT_CONSUMED = 604,
        STANDARD_PRODUCT_CONSUMED_STATE = 605,
        STANDARD_PRODUCT_ITEM = 606,
        STANDARD_PRODUCT_ITEM_TRANSACTION = 607,
        STANDARD_PRODUCT_QUANTITY_RULES = 608,
        STANDARD_PRODUCT_REQUEST = 609,
        STANDARD_PRODUCT_REQUEST_LINE_ITEM = 610,
        STANDARD_PRODUCT_REQUIRED = 611,
        STANDARD_PRODUCT_SERVICE_CAMPAIGN = 612,
        STANDARD_PRODUCT_SERVICE_CAMPAIGN_ITEM = 613,
        STANDARD_PRODUCT_TRANSFER = 614,
        STANDARD_PRODUCT_TRANSFER_STATE = 615,
        STANDARD_PRODUCT_WARRANTY_TERM = 616,
        STANDARD_PRODUCT_WORKSPACE = 617,
        STANDARD_PRODUCTS = 618,
        STANDARD_PROMOTION_SEGMENTS = 619,
        STANDARD_PROMOTIONS = 620,
        STANDARD_PROMOTIONS_WORKSPACE = 621,
        STANDARD_PROPAGATION_POLICY = 622,
        STANDARD_PROPOSITION = 623,
        STANDARD_QUALIFICATIONS = 624,
        STANDARD_QUESTION_BEST = 625,
        STANDARD_QUESTION_FEED = 626,
        STANDARD_QUEUE = 627,
        STANDARD_QUICK_TEXT = 628,
        STANDARD_QUIP = 629,
        STANDARD_QUIP_SHEET = 630,
        STANDARD_QUOTES = 631,
        STANDARD_RADIO_BUTTON = 632,
        STANDARD_READ_RECEIPTS = 633,
        STANDARD_RECENT = 634,
        STANDARD_RECIPE = 635,
        STANDARD_RECORD = 636,
        STANDARD_RECORD_CREATE = 637,
        STANDARD_RECORD_DELETE = 638,
        STANDARD_RECORD_LOOKUP = 639,
        STANDARD_RECORD_SIGNATURE_TASK = 640,
        STANDARD_RECORD_UPDATE = 641,
        STANDARD_RECYCLE_BIN = 642,
        STANDARD_RELATED_LIST = 643,
        STANDARD_RELATIONSHIP = 644,
        STANDARD_REPLY_TEXT = 645,
        STANDARD_REPORT = 646,
        STANDARD_RESOURCE_ABSENCE = 647,
        STANDARD_RESOURCE_CAPACITY = 648,
        STANDARD_RESOURCE_PREFERENCE = 649,
        STANDARD_RESOURCE_SKILL = 650,
        STANDARD_RESTRICTION_POLICY = 651,
        STANDARD_RETURN_ORDER = 652,
        STANDARD_RETURN_ORDER_LINE_ITEM = 653,
        STANDARD_REWARD = 654,
        STANDARD_RTC_PRESENCE = 655,
        STANDARD_SALES_CADENCE = 656,
        STANDARD_SALES_CADENCE_TARGET = 657,
        STANDARD_SALES_CHANNEL = 658,
        STANDARD_SALES_PATH = 659,
        STANDARD_SALES_VALUE = 660,
        STANDARD_SALESFORCE_CMS = 661,
        STANDARD_SCAN_CARD = 662,
        STANDARD_SCHEDULE_OBJECTIVE = 663,
        STANDARD_SCHEDULING_CONSTRAINT = 664,
        STANDARD_SCHEDULING_POLICY = 665,
        STANDARD_SCREEN = 666,
        STANDARD_SEARCH = 667,
        STANDARD_SECTION = 668,
        STANDARD_SEGMENTS = 669,
        STANDARD_SELLING_MODEL = 670,
        STANDARD_SERIALIZED_PRODUCT = 671,
        STANDARD_SERIALIZED_PRODUCT_TRANSACTION = 672,
        STANDARD_SERVICE_APPOINTMENT = 673,
        STANDARD_SERVICE_APPOINTMENT_CAPACITY_USAGE = 674,
        STANDARD_SERVICE_CONTRACT = 675,
        STANDARD_SERVICE_CREW = 676,
        STANDARD_SERVICE_CREW_MEMBER = 677,
        STANDARD_SERVICE_REPORT = 678,
        STANDARD_SERVICE_REQUEST = 679,
        STANDARD_SERVICE_REQUEST_DETAIL = 680,
        STANDARD_SERVICE_RESOURCE = 681,
        STANDARD_SERVICE_TERRITORY = 682,
        STANDARD_SERVICE_TERRITORY_LOCATION = 683,
        STANDARD_SERVICE_TERRITORY_MEMBER = 684,
        STANDARD_SERVICE_TERRITORY_POLICY = 685,
        STANDARD_SETTINGS = 686,
        STANDARD_SHIFT = 687,
        STANDARD_SHIFT_PATTERN = 688,
        STANDARD_SHIFT_PATTERN_ENTRY = 689,
        STANDARD_SHIFT_PREFERENCE = 690,
        STANDARD_SHIFT_SCHEDULING_OPERATION = 691,
        STANDARD_SHIFT_TEMPLATE = 692,
        STANDARD_SHIFT_TYPE = 693,
        STANDARD_SHIPMENT = 694,
        STANDARD_SKILL = 695,
        STANDARD_SKILL_ENTITY = 696,
        STANDARD_SKILL_REQUIREMENT = 697,
        STANDARD_SLIDER = 698,
        STANDARD_SMS = 699,
        STANDARD_SNIPPET = 700,
        STANDARD_SNIPPETS = 701,
        STANDARD_SOBJECT = 702,
        STANDARD_SOBJECT_COLLECTION = 703,
        STANDARD_SOCIAL = 704,
        STANDARD_SOLUTION = 705,
        STANDARD_SORT = 706,
        STANDARD_SORT_POLICY = 707,
        STANDARD_SOSSESSION = 708,
        STANDARD_STAGE = 709,
        STANDARD_STAGE_COLLECTION = 710,
        STANDARD_STEPS = 711,
        STANDARD_STORE = 712,
        STANDARD_STORE_GROUP = 713,
        STANDARD_STORY = 714,
        STANDARD_STRATEGY = 715,
        STANDARD_SURVEY = 716,
        STANDARD_SWARM_REQUEST = 717,
        STANDARD_SWARM_SESSION = 718,
        STANDARD_SYSTEM_AND_GLOBAL_VARIABLE = 719,
        STANDARD_TASK = 720,
        STANDARD_TASK2 = 721,
        STANDARD_TEAM_MEMBER = 722,
        STANDARD_TEMPLATE = 723,
        STANDARD_TEXT = 724,
        STANDARD_TEXT_TEMPLATE = 725,
        STANDARD_TEXTAREA = 726,
        STANDARD_TEXTBOX = 727,
        STANDARD_THANKS = 728,
        STANDARD_THANKS_LOADING = 729,
        STANDARD_TIMESHEET = 730,
        STANDARD_TIMESHEET_ENTRY = 731,
        STANDARD_TIMESLOT = 732,
        STANDARD_TODAY = 733,
        STANDARD_TOGGLE = 734,
        STANDARD_TOPIC = 735,
        STANDARD_TOPIC2 = 736,
        STANDARD_TRAILHEAD = 737,
        STANDARD_TRAILHEAD_ALT = 738,
        STANDARD_TRAVEL_MODE = 739,
        STANDARD_UNMATCHED = 740,
        STANDARD_USER = 741,
        STANDARD_USER_ROLE = 742,
        STANDARD_VARIABLE = 743,
        STANDARD_VARIATION_ATTRIBUTE_SETUP = 744,
        STANDARD_VARIATION_PRODUCTS = 745,
        STANDARD_VIDEO = 746,
        STANDARD_VISIT_TEMPLATES = 747,
        STANDARD_VISITS = 748,
        STANDARD_VISUALFORCE_PAGE = 749,
        STANDARD_VOICE_CALL = 750,
        STANDARD_WAITS = 751,
        STANDARD_WARRANTY_TERM = 752,
        STANDARD_WEBCART = 753,
        STANDARD_WORK_CAPACITY_LIMIT = 754,
        STANDARD_WORK_CAPACITY_USAGE = 755,
        STANDARD_WORK_CONTRACT = 756,
        STANDARD_WORK_FORECAST = 757,
        STANDARD_WORK_ORDER = 758,
        STANDARD_WORK_ORDER_ITEM = 759,
        STANDARD_WORK_PLAN = 760,
        STANDARD_WORK_PLAN_RULE = 761,
        STANDARD_WORK_PLAN_TEMPLATE = 762,
        STANDARD_WORK_PLAN_TEMPLATE_ENTRY = 763,
        STANDARD_WORK_QUEUE = 764,
        STANDARD_WORK_STEP = 765,
        STANDARD_WORK_STEP_TEMPLATE = 766,
        STANDARD_WORK_TYPE = 767,
        STANDARD_WORK_TYPE_GROUP = 768,
        UTILITY_ACTIVITY = 769,
        UTILITY_AD_SET = 770,
        UTILITY_ADD = 771,
        UTILITY_ADDUSER = 772,
        UTILITY_ADJUST_VALUE = 773,
        UTILITY_ADVANCED_FUNCTION = 774,
        UTILITY_ADVERTISING = 775,
        UTILITY_AGENT_HOME = 776,
        UTILITY_AGENT_SESSION = 777,
        UTILITY_AGGREGATION_POLICY = 778,
        UTILITY_ALERT = 779,
        UTILITY_ALL = 780,
        UTILITY_ANCHOR = 781,
        UTILITY_ANIMAL_AND_NATURE = 782,
        UTILITY_ANNOUNCEMENT = 783,
        UTILITY_ANSWER = 784,
        UTILITY_ANSWERED_TWICE = 785,
        UTILITY_ANYWHERE_ALERT = 786,
        UTILITY_ANYWHERE_CHAT = 787,
        UTILITY_APEX = 788,
        UTILITY_APEX_PLUGIN = 789,
        UTILITY_APPROVAL = 790,
        UTILITY_APPS = 791,
        UTILITY_ARCHIVE = 792,
        UTILITY_ARROW_BOTTOM = 793,
        UTILITY_ARROW_LEFT = 794,
        UTILITY_ARROW_RIGHT = 795,
        UTILITY_ARROW_TOP = 796,
        UTILITY_ARROWDOWN = 797,
        UTILITY_ARROWUP = 798,
        UTILITY_ASSET_WARRANTY = 799,
        UTILITY_ASSIGNMENT = 800,
        UTILITY_ATTACH = 801,
        UTILITY_AUTOMATE = 802,
        UTILITY_AWAY = 803,
        UTILITY_BACK = 804,
        UTILITY_BAN = 805,
        UTILITY_BLOCK_VISITOR = 806,
        UTILITY_BOLD = 807,
        UTILITY_BOOKMARK = 808,
        UTILITY_BOOKMARK_ALT = 809,
        UTILITY_BOTTOM_ALIGN = 810,
        UTILITY_BREADCRUMBS = 811,
        UTILITY_BROADCAST = 812,
        UTILITY_BRUSH = 813,
        UTILITY_BUCKET = 814,
        UTILITY_BUG = 815,
        UTILITY_BUILDER = 816,
        UTILITY_BUNDLE_CONFIG = 817,
        UTILITY_BUNDLE_POLICY = 818,
        UTILITY_BUTTON_CHOICE = 819,
        UTILITY_CALCULATED_INSIGHTS = 820,
        UTILITY_CALL = 821,
        UTILITY_CAMPAIGN = 822,
        UTILITY_CANCEL_FILE_REQUEST = 823,
        UTILITY_CANCEL_TRANSFER = 824,
        UTILITY_CAPACITY_PLAN = 825,
        UTILITY_CAPSLOCK = 826,
        UTILITY_CART = 827,
        UTILITY_CASE = 828,
        UTILITY_CASES = 829,
        UTILITY_CENTER_ALIGN = 830,
        UTILITY_CENTER_ALIGN_TEXT = 831,
        UTILITY_CHANGE_OWNER = 832,
        UTILITY_CHANGE_RECORD_TYPE = 833,
        UTILITY_CHANGE_REQUEST = 834,
        UTILITY_CHART = 835,
        UTILITY_CHAT = 836,
        UTILITY_CHECK = 837,
        UTILITY_CHECKIN = 838,
        UTILITY_CHECKOUT = 839,
        UTILITY_CHEVRONDOWN = 840,
        UTILITY_CHEVRONLEFT = 841,
        UTILITY_CHEVRONRIGHT = 842,
        UTILITY_CHEVRONUP = 843,
        UTILITY_CHOICE = 844,
        UTILITY_CLASSIC_INTERFACE = 845,
        UTILITY_CLEAR = 846,
        UTILITY_CLOCK = 847,
        UTILITY_CLOSE = 848,
        UTILITY_COLLAPSE_ALL = 849,
        UTILITY_COLLECTION = 850,
        UTILITY_COLLECTION_VARIABLE = 851,
        UTILITY_COLOR_SWATCH = 852,
        UTILITY_COMMENTS = 853,
        UTILITY_COMPANY = 854,
        UTILITY_COMPONENT_CUSTOMIZATION = 855,
        UTILITY_CONNECTED_APPS = 856,
        UTILITY_CONSTANT = 857,
        UTILITY_CONTACT_REQUEST = 858,
        UTILITY_CONTRACT = 859,
        UTILITY_CONTRACT_ALT = 860,
        UTILITY_COPY = 861,
        UTILITY_COPY_TO_CLIPBOARD = 862,
        UTILITY_COUPON_CODES = 863,
        UTILITY_CROSSFILTER = 864,
        UTILITY_CURRENCY = 865,
        UTILITY_CURRENCY_INPUT = 866,
        UTILITY_CUSTOM_APPS = 867,
        UTILITY_CUT = 868,
        UTILITY_DASH = 869,
        UTILITY_DATA_MAPPING = 870,
        UTILITY_DATABASE = 871,
        UTILITY_DATADOTCOM = 872,
        UTILITY_DATE_INPUT = 873,
        UTILITY_DATE_TIME = 874,
        UTILITY_DAYVIEW = 875,
        UTILITY_DELETE = 876,
        UTILITY_DEPRECATE = 877,
        UTILITY_DESCRIPTION = 878,
        UTILITY_DESKTOP = 879,
        UTILITY_DESKTOP_AND_PHONE = 880,
        UTILITY_DESKTOP_CONSOLE = 881,
        UTILITY_DIALING = 882,
        UTILITY_DIAMOND = 883,
        UTILITY_DISCOUNTS = 884,
        UTILITY_DISLIKE = 885,
        UTILITY_DISPLAY_RICH_TEXT = 886,
        UTILITY_DISPLAY_TEXT = 887,
        UTILITY_DOCK_PANEL = 888,
        UTILITY_DOWN = 889,
        UTILITY_DOWNLOAD = 890,
        UTILITY_DRAG = 891,
        UTILITY_DRAG_AND_DROP = 892,
        UTILITY_DURATION_DOWNSCALE = 893,
        UTILITY_DYNAMIC_RECORD_CHOICE = 894,
        UTILITY_EDIT = 895,
        UTILITY_EDIT_FORM = 896,
        UTILITY_EDUCATION = 897,
        UTILITY_EINSTEIN = 898,
        UTILITY_EMAIL = 899,
        UTILITY_EMAIL_OPEN = 900,
        UTILITY_EMOJI = 901,
        UTILITY_END_CALL = 902,
        UTILITY_END_CHAT = 903,
        UTILITY_END_MESSAGING_SESSION = 904,
        UTILITY_ENGAGE = 905,
        UTILITY_ENTER = 906,
        UTILITY_ERECT_WINDOW = 907,
        UTILITY_ERROR = 908,
        UTILITY_EVENT = 909,
        UTILITY_EVENT_EXT = 910,
        UTILITY_EVENTS = 911,
        UTILITY_EXPAND = 912,
        UTILITY_EXPAND_ALL = 913,
        UTILITY_EXPAND_ALT = 914,
        UTILITY_FALLBACK = 915,
        UTILITY_FAVORITE = 916,
        UTILITY_FEED = 917,
        UTILITY_FILE = 918,
        UTILITY_FILTER = 919,
        UTILITY_FILTERLIST = 920,
        UTILITY_FILTER_CRITERIA = 921,
        UTILITY_FILTER_CRITERIA_RULE = 922,
        UTILITY_FLOW = 923,
        UTILITY_FLOW_ALT = 924,
        UTILITY_FOOD_AND_DRINK = 925,
        UTILITY_FORM = 926,
        UTILITY_FORMULA = 927,
        UTILITY_FORWARD = 928,
        UTILITY_FORWARD_UP = 929,
        UTILITY_FREEZE_COLUMN = 930,
        UTILITY_FROZEN = 931,
        UTILITY_FULFILLMENT_ORDER = 932,
        UTILITY_FULL_WIDTH_VIEW = 933,
        UTILITY_GLOBAL_CONSTANT = 934,
        UTILITY_GRAPH = 935,
        UTILITY_GROUPS = 936,
        UTILITY_HELP = 937,
        UTILITY_HELP_CENTER = 938,
        UTILITY_HELP_DOC_EXT = 939,
        UTILITY_HIDE = 940,
        UTILITY_HIDE_MOBILE = 941,
        UTILITY_HIERARCHY = 942,
        UTILITY_HIGH_VELOCITY_SALES = 943,
        UTILITY_HOLIDAY_OPERATING_HOURS = 944,
        UTILITY_HOME = 945,
        UTILITY_IDENTITY = 946,
        UTILITY_IMAGE = 947,
        UTILITY_IN_APP_ASSISTANT = 948,
        UTILITY_INBOX = 949,
        UTILITY_INCIDENT = 950,
        UTILITY_INCOMING_CALL = 951,
        UTILITY_INFO = 952,
        UTILITY_INFO_ALT = 953,
        UTILITY_INSERT_TAG_FIELD = 954,
        UTILITY_INSERT_TEMPLATE = 955,
        UTILITY_INSPECTOR_PANEL = 956,
        UTILITY_INTERNAL_SHARE = 957,
        UTILITY_ITALIC = 958,
        UTILITY_JUMP_TO_BOTTOM = 959,
        UTILITY_JUMP_TO_LEFT = 960,
        UTILITY_JUMP_TO_RIGHT = 961,
        UTILITY_JUMP_TO_TOP = 962,
        UTILITY_JUSTIFY_TEXT = 963,
        UTILITY_KANBAN = 964,
        UTILITY_KEY = 965,
        UTILITY_KEY_DATES = 966,
        UTILITY_KEYBOARD_DISMISS = 967,
        UTILITY_KEYPAD = 968,
        UTILITY_KNOWLEDGE_BASE = 969,
        UTILITY_LAYERS = 970,
        UTILITY_LAYOUT = 971,
        UTILITY_LAYOUT_BANNER = 972,
        UTILITY_LAYOUT_CARD = 973,
        UTILITY_LAYOUT_OVERLAP = 974,
        UTILITY_LAYOUT_TILE = 975,
        UTILITY_LEAVE_CONFERENCE = 976,
        UTILITY_LEFT = 977,
        UTILITY_LEFT_ALIGN = 978,
        UTILITY_LEFT_ALIGN_TEXT = 979,
        UTILITY_LEVEL_DOWN = 980,
        UTILITY_LEVEL_UP = 981,
        UTILITY_LIGHT_BULB = 982,
        UTILITY_LIGHTNING_EXTENSION = 983,
        UTILITY_LIGHTNING_INSPECTOR = 984,
        UTILITY_LIKE = 985,
        UTILITY_LINK = 986,
        UTILITY_LINKED = 987,
        UTILITY_LIST = 988,
        UTILITY_LISTEN = 989,
        UTILITY_LIVE_MESSAGE = 990,
        UTILITY_LOCATION = 991,
        UTILITY_LOCATION_PERMIT = 992,
        UTILITY_LOCK = 993,
        UTILITY_LOCKER_SERVICE_API_VIEWER = 994,
        UTILITY_LOCKER_SERVICE_CONSOLE = 995,
        UTILITY_LOG_A_CALL = 996,
        UTILITY_LOGOUT = 997,
        UTILITY_LOOP = 998,
        UTILITY_LOWER_FLAG = 999,
        UTILITY_MACROS = 1000,
        UTILITY_MAGICWAND = 1001,
        UTILITY_MARK_ALL_AS_READ = 1002,
        UTILITY_MATRIX = 1003,
        UTILITY_MEET_CONTENT_SOURCE = 1004,
        UTILITY_MEET_FOCUS_CONTENT = 1005,
        UTILITY_MEET_FOCUS_EQUAL = 1006,
        UTILITY_MEET_FOCUS_PRESENTER = 1007,
        UTILITY_MEET_PRESENT_PANEL = 1008,
        UTILITY_MERGE = 1009,
        UTILITY_MERGE_FIELD = 1010,
        UTILITY_METRICS = 1011,
        UTILITY_MIDDLE_ALIGN = 1012,
        UTILITY_MINIMIZE_WINDOW = 1013,
        UTILITY_MISSED_CALL = 1014,
        UTILITY_MONEY = 1015,
        UTILITY_MONEYBAG = 1016,
        UTILITY_MONTHLYVIEW = 1017,
        UTILITY_MOVE = 1018,
        UTILITY_MULTI_PICKLIST = 1019,
        UTILITY_MULTI_SELECT_CHECKBOX = 1020,
        UTILITY_MUTED = 1021,
        UTILITY_NEW = 1022,
        UTILITY_NEW_DIRECT_MESSAGE = 1023,
        UTILITY_NEW_WINDOW = 1024,
        UTILITY_NEWS = 1025,
        UTILITY_NOTE = 1026,
        UTILITY_NOTEBOOK = 1027,
        UTILITY_NOTIFICATION = 1028,
        UTILITY_NUMBER_INPUT = 1029,
        UTILITY_OFFICE365 = 1030,
        UTILITY_OFFLINE = 1031,
        UTILITY_OFFLINE_BRIEFCASE = 1032,
        UTILITY_OFFLINE_CACHED = 1033,
        UTILITY_OMNI_CHANNEL = 1034,
        UTILITY_OPEN = 1035,
        UTILITY_OPEN_FOLDER = 1036,
        UTILITY_OPENED_FOLDER = 1037,
        UTILITY_ORCHESTRATOR = 1038,
        UTILITY_ORG_CHART = 1039,
        UTILITY_OUTBOUND_CALL = 1040,
        UTILITY_OUTCOME = 1041,
        UTILITY_OVERFLOW = 1042,
        UTILITY_PACKAGE = 1043,
        UTILITY_PACKAGE_ORG = 1044,
        UTILITY_PACKAGE_ORG_BETA = 1045,
        UTILITY_PAGE = 1046,
        UTILITY_PALETTE = 1047,
        UTILITY_PASSWORD = 1048,
        UTILITY_PASTE = 1049,
        UTILITY_PAUSE = 1050,
        UTILITY_PAUSE_ALT = 1051,
        UTILITY_PAYMENT_GATEWAY = 1052,
        UTILITY_PDF_EXT = 1053,
        UTILITY_PEOPLE = 1054,
        UTILITY_PERCENT = 1055,
        UTILITY_PHONE_LANDSCAPE = 1056,
        UTILITY_PHONE_PORTRAIT = 1057,
        UTILITY_PHOTO = 1058,
        UTILITY_PICKLIST = 1059,
        UTILITY_PICKLIST_CHOICE = 1060,
        UTILITY_PICKLIST_TYPE = 1061,
        UTILITY_PIN = 1062,
        UTILITY_PINNED = 1063,
        UTILITY_PLANNING_POKER = 1064,
        UTILITY_PLAY = 1065,
        UTILITY_PODCAST_WEBINAR = 1066,
        UTILITY_POP_IN = 1067,
        UTILITY_POWER = 1068,
        UTILITY_PREVIEW = 1069,
        UTILITY_PRICE_BOOK_ENTRIES = 1070,
        UTILITY_PRICE_BOOKS = 1071,
        UTILITY_PRICING_WORKSPACE = 1072,
        UTILITY_PRINT = 1073,
        UTILITY_PRIORITY = 1074,
        UTILITY_PRIVATELY_SHARED = 1075,
        UTILITY_PROBLEM = 1076,
        UTILITY_PROCESS = 1077,
        UTILITY_PRODUCT_CONSUMED_STATE = 1078,
        UTILITY_PRODUCT_QUANTITY_RULES = 1079,
        UTILITY_PRODUCT_SERVICE_CAMPAIGN = 1080,
        UTILITY_PRODUCT_SERVICE_CAMPAIGN_ITEM = 1081,
        UTILITY_PRODUCT_TRANSFER = 1082,
        UTILITY_PRODUCT_TRANSFER_STATE = 1083,
        UTILITY_PRODUCT_WARRANTY_TERM = 1084,
        UTILITY_PRODUCT_WORKSPACE = 1085,
        UTILITY_PRODUCTS = 1086,
        UTILITY_PROFILE = 1087,
        UTILITY_PROMOTION_SEGMENTS = 1088,
        UTILITY_PROMOTIONS = 1089,
        UTILITY_PROMOTIONS_WORKSPACE = 1090,
        UTILITY_PROMPT = 1091,
        UTILITY_PROMPT_EDIT = 1092,
        UTILITY_PROPAGATION_POLICY = 1093,
        UTILITY_PUSH = 1094,
        UTILITY_PUZZLE = 1095,
        UTILITY_QUALIFICATIONS = 1096,
        UTILITY_QUESTION = 1097,
        UTILITY_QUESTION_MARK = 1098,
        UTILITY_QUESTIONS_AND_ANSWERS = 1099,
        UTILITY_QUICK_TEXT = 1100,
        UTILITY_QUIP = 1101,
        UTILITY_QUOTATION_MARKS = 1102,
        UTILITY_QUOTE = 1103,
        UTILITY_RADIO_BUTTON = 1104,
        UTILITY_RATING = 1105,
        UTILITY_REASSIGN = 1106,
        UTILITY_RECIPE = 1107,
        UTILITY_RECORD = 1108,
        UTILITY_RECORD_CREATE = 1109,
        UTILITY_RECORD_DELETE = 1110,
        UTILITY_RECORD_LOOKUP = 1111,
        UTILITY_RECORD_UPDATE = 1112,
        UTILITY_RECURRING_EXCEPTION = 1113,
        UTILITY_RECYCLE_BIN_EMPTY = 1114,
        UTILITY_RECYCLE_BIN_FULL = 1115,
        UTILITY_REDO = 1116,
        UTILITY_REFRESH = 1117,
        UTILITY_RELATE = 1118,
        UTILITY_REMINDER = 1119,
        UTILITY_REMOVE_FORMATTING = 1120,
        UTILITY_REMOVE_LINK = 1121,
        UTILITY_REPLACE = 1122,
        UTILITY_REPLY = 1123,
        UTILITY_REPLY_ALL = 1124,
        UTILITY_REPORT_ISSUE = 1125,
        UTILITY_RESET_PASSWORD = 1126,
        UTILITY_RESOURCE_ABSENCE = 1127,
        UTILITY_RESOURCE_CAPACITY = 1128,
        UTILITY_RESOURCE_TERRITORY = 1129,
        UTILITY_RESTRICTION_POLICY = 1130,
        UTILITY_RETAIL_EXECUTION = 1131,
        UTILITY_RETWEET = 1132,
        UTILITY_RIBBON = 1133,
        UTILITY_RICHTEXTBULLETEDLIST = 1134,
        UTILITY_RICHTEXTINDENT = 1135,
        UTILITY_RICHTEXTNUMBEREDLIST = 1136,
        UTILITY_RICHTEXTOUTDENT = 1137,
        UTILITY_RIGHT = 1138,
        UTILITY_RIGHT_ALIGN = 1139,
        UTILITY_RIGHT_ALIGN_TEXT = 1140,
        UTILITY_ROTATE = 1141,
        UTILITY_ROUTING_OFFLINE = 1142,
        UTILITY_ROWS = 1143,
        UTILITY_RULES = 1144,
        UTILITY_SALESFORCE1 = 1145,
        UTILITY_SALESFORCE_PAGE = 1146,
        UTILITY_SAVE = 1147,
        UTILITY_SCAN = 1148,
        UTILITY_SCREEN = 1149,
        UTILITY_SEARCH = 1150,
        UTILITY_SECTION = 1151,
        UTILITY_SEND = 1152,
        UTILITY_SENTIMENT_NEGATIVE = 1153,
        UTILITY_SENTIMENT_NEUTRAL = 1154,
        UTILITY_SERIALIZED_PRODUCT = 1155,
        UTILITY_SERIALIZED_PRODUCT_TRANSACTION = 1156,
        UTILITY_SERVICE_TERRITORY_POLICY = 1157,
        UTILITY_SETTINGS = 1158,
        UTILITY_SETUP = 1159,
        UTILITY_SETUP_ASSISTANT_GUIDE = 1160,
        UTILITY_SETUP_MODAL = 1161,
        UTILITY_SHARE = 1162,
        UTILITY_SHARE_FILE = 1163,
        UTILITY_SHARE_MOBILE = 1164,
        UTILITY_SHARE_POST = 1165,
        UTILITY_SHIELD = 1166,
        UTILITY_SHIFT_PATTERN = 1167,
        UTILITY_SHIFT_PATTERN_ENTRY = 1168,
        UTILITY_SHIFT_SCHEDULING_OPERATION = 1169,
        UTILITY_SHIFT_UI = 1170,
        UTILITY_SHOPPING_BAG = 1171,
        UTILITY_SHORTCUTS = 1172,
        UTILITY_SIDE_LIST = 1173,
        UTILITY_SIGNPOST = 1174,
        UTILITY_SKIP = 1175,
        UTILITY_SKIP_BACK = 1176,
        UTILITY_SKIP_FORWARD = 1177,
        UTILITY_SLIDER = 1178,
        UTILITY_SMILEY_AND_PEOPLE = 1179,
        UTILITY_SMS = 1180,
        UTILITY_SNIPPET = 1181,
        UTILITY_SOBJECT = 1182,
        UTILITY_SOBJECT_COLLECTION = 1183,
        UTILITY_SOCIALSHARE = 1184,
        UTILITY_SORT = 1185,
        UTILITY_SORT_POLICY = 1186,
        UTILITY_SPACER = 1187,
        UTILITY_SPINNER = 1188,
        UTILITY_STAGE = 1189,
        UTILITY_STAGE_COLLECTION = 1190,
        UTILITY_STANDARD_OBJECTS = 1191,
        UTILITY_STEPS = 1192,
        UTILITY_STOP = 1193,
        UTILITY_STORE = 1194,
        UTILITY_STRATEGY = 1195,
        UTILITY_STRIKETHROUGH = 1196,
        UTILITY_SUCCESS = 1197,
        UTILITY_SUMMARY = 1198,
        UTILITY_SUMMARYDETAIL = 1199,
        UTILITY_SURVEY = 1200,
        UTILITY_SWARM_REQUEST = 1201,
        UTILITY_SWARM_SESSION = 1202,
        UTILITY_SWITCH = 1203,
        UTILITY_SYMBOLS = 1204,
        UTILITY_SYNC = 1205,
        UTILITY_SYSTEM_AND_GLOBAL_VARIABLE = 1206,
        UTILITY_TABLE = 1207,
        UTILITY_TABLE_SETTINGS = 1208,
        UTILITY_TABLET_LANDSCAPE = 1209,
        UTILITY_TABLET_PORTRAIT = 1210,
        UTILITY_TABSET = 1211,
        UTILITY_TALENT_DEVELOPMENT = 1212,
        UTILITY_TARGET = 1213,
        UTILITY_TARGET_MODE = 1214,
        UTILITY_TASK = 1215,
        UTILITY_TEXT = 1216,
        UTILITY_TEXT_BACKGROUND_COLOR = 1217,
        UTILITY_TEXT_COLOR = 1218,
        UTILITY_TEXT_TEMPLATE = 1219,
        UTILITY_TEXTAREA = 1220,
        UTILITY_TEXTBOX = 1221,
        UTILITY_THREEDOTS = 1222,
        UTILITY_THREEDOTS_VERTICAL = 1223,
        UTILITY_THUNDER = 1224,
        UTILITY_TILE_CARD_LIST = 1225,
        UTILITY_TOGGLE = 1226,
        UTILITY_TOGGLE_PANEL_BOTTOM = 1227,
        UTILITY_TOGGLE_PANEL_LEFT = 1228,
        UTILITY_TOGGLE_PANEL_RIGHT = 1229,
        UTILITY_TOGGLE_PANEL_TOP = 1230,
        UTILITY_TOP_ALIGN = 1231,
        UTILITY_TOPIC = 1232,
        UTILITY_TOPIC2 = 1233,
        UTILITY_TOUCH_ACTION = 1234,
        UTILITY_TRACKER = 1235,
        UTILITY_TRAIL = 1236,
        UTILITY_TRAILBLAZER_EXT = 1237,
        UTILITY_TRAILHEAD = 1238,
        UTILITY_TRAILHEAD_ALT = 1239,
        UTILITY_TRAILHEAD_EXT = 1240,
        UTILITY_TRANSPARENT = 1241,
        UTILITY_TRAVEL_AND_PLACES = 1242,
        UTILITY_TRENDING = 1243,
        UTILITY_TURN_OFF_NOTIFICATIONS = 1244,
        UTILITY_TYPE = 1245,
        UTILITY_TYPE_TOOL = 1246,
        UTILITY_UNDELETE = 1247,
        UTILITY_UNDEPRECATE = 1248,
        UTILITY_UNDERLINE = 1249,
        UTILITY_UNDO = 1250,
        UTILITY_UNLINKED = 1251,
        UTILITY_UNLOCK = 1252,
        UTILITY_UNMUTED = 1253,
        UTILITY_UP = 1254,
        UTILITY_UPLOAD = 1255,
        UTILITY_USER = 1256,
        UTILITY_USER_ROLE = 1257,
        UTILITY_VARIABLE = 1258,
        UTILITY_VARIATION_ATTRIBUTE_SETUP = 1259,
        UTILITY_VARIATION_PRODUCTS = 1260,
        UTILITY_VIDEO = 1261,
        UTILITY_VOICEMAIL_DROP = 1262,
        UTILITY_VOLUME_HIGH = 1263,
        UTILITY_VOLUME_LOW = 1264,
        UTILITY_VOLUME_OFF = 1265,
        UTILITY_WAITS = 1266,
        UTILITY_WARNING = 1267,
        UTILITY_WARRANTY_TERM = 1268,
        UTILITY_WATCHLIST = 1269,
        UTILITY_WEEKLYVIEW = 1270,
        UTILITY_WELLNESS = 1271,
        UTILITY_WIFI = 1272,
        UTILITY_WORK_FORECAST = 1273,
        UTILITY_WORK_ORDER_TYPE = 1274,
        UTILITY_WORLD = 1275,
        UTILITY_YUBI_KEY = 1276,
        UTILITY_ZOOMIN = 1277,
        UTILITY_ZOOMOUT = 1278
    }
    /** @ignore */
    class IconName_$WRAPPER {
        protected _$ordinal: number;
        protected _$name: string;
        group: any;
        __name: any;
        constructor(_$ordinal: number, _$name: string, name: any, group: any);
        getName(): string;
        getGroup(): string;
        getValue(): string;
        name(): string;
        ordinal(): number;
        compareTo(other: any): number;
    }
}
declare namespace com.spoonconsulting.lightning.enums {
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
        group: any;
        constructor(_$ordinal: number, _$name: string, value?: any, group?: any);
        getValue(): string;
        getGroup(): string;
        name(): string;
        ordinal(): number;
        compareTo(other: any): number;
    }
}
declare namespace com.spoonconsulting.lightning.enums {
    enum LayoutItemPadding {
        HORIZONTAL_SMALL = 0,
        HORIZONTAL_MEDIUM = 1,
        HORIZONTAL_LARGE = 2,
        AROUND_SMALL = 3,
        AROUND_MEDIUM = 4,
        AROUND_LARGE = 5
    }
    /** @ignore */
    class LayoutItemPadding_$WRAPPER {
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
declare namespace com.spoonconsulting.lightning.enums {
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
        getValue(): string;
        name(): string;
        ordinal(): number;
        compareTo(other: any): number;
    }
}
declare namespace com.spoonconsulting.lightning.enums {
    enum Position {
        STATIC = 0,
        FIXED = 1,
        ABSOLUTE = 2,
        RELATIVE = 3
    }
    /** @ignore */
    class Position_$WRAPPER {
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
declare namespace com.spoonconsulting.lightning.enums {
    enum Size {
        EXTRA_EXTRA_EXTRA_SMALL = 0,
        EXTRA_EXTRA_SMALL = 1,
        EXTRA_SMALL = 2,
        SMALL = 3,
        MEDIUM = 4,
        LARGE = 5,
        EXTRA_LARGE = 6,
        EXTRA_EXTRA_LARGE = 7,
        NONE = 8
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
declare namespace com.spoonconsulting.lightning.enums {
    enum Theme {
        DEFAULT = 0,
        SHADE = 1,
        INVERSE = 2,
        ALT_INVERSE = 3,
        SUCCESS = 4,
        INFO = 5,
        WARNING = 6,
        ERROR = 7,
        OFFLINE = 8,
        ALERT_TEXTURE = 9
    }
    /** @ignore */
    class Theme_$WRAPPER {
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
declare namespace com.spoonconsulting.lightning.enums {
    class Variants {
    }
    namespace Variants {
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
            getValue(): string;
            value: any;
            name(): string;
            ordinal(): number;
            compareTo(other: any): number;
        }
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
}
declare namespace com.spoonconsulting.lightning {
    class Form extends JSContainer {
        fields: Object;
        constructor(name: string);
        getFormElement(name: string): com.spoonconsulting.lightning.FormElement<any>;
        addRow(): Form.FormRow;
        row(index: number): Form.FormRow;
        getFields(): Object;
    }
    namespace Form {
        class FormRow extends JSContainer {
            __parent: any;
            constructor(__parent: any, name: string);
            addItem(): FormRow.FormItem;
            item(index: number): FormRow.FormItem;
            getForm(): com.spoonconsulting.lightning.Form;
            form(): com.spoonconsulting.lightning.Form;
        }
        namespace FormRow {
            class FormItem extends JSContainer {
                __parent: any;
                constructor(__parent: any, name: string);
                addElement$java_lang_String$java_lang_String$java_lang_String(name: string, label: string, type: string): FormRow.FormItem;
                addElement(name?: any, label?: any, type?: any): any;
                addElement$java_lang_String$java_lang_String(name: string, label: string): FormRow.FormItem;
                addElement$java_lang_String(name: string): FormRow.FormItem;
                addElement$com_spoonconsulting_lightning_FormElement(element: com.spoonconsulting.lightning.FormElement<any>): FormRow.FormItem;
                row(): Form.FormRow;
                getRow(): Form.FormRow;
                getForm(): com.spoonconsulting.lightning.Form;
                form(): com.spoonconsulting.lightning.Form;
            }
        }
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
        variant: com.spoonconsulting.lightning.enums.Variants.FormElementVariant;
        constructor(name?: any, input?: any);
        setRequired(b: boolean): FormElement<T>;
        setLabel(label: string): FormElement<T>;
        setFieldLevelHelp(help: string): FormElement<T>;
        setInput(input: api.InputField<T>): FormElement<T>;
        getControlCtn(): JSContainer;
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
        setVariant$com_spoonconsulting_lightning_enums_Variants_FormElementVariant(variant: com.spoonconsulting.lightning.enums.Variants.FormElementVariant): FormElement<T>;
        setVariant(variant?: any): any;
        setVariant$java_lang_String(variant: string): FormElement<T>;
        getVariant(): string;
    }
    namespace FormElement {
        class FormElement$0 implements api.EventListener {
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
        setIconName$com_spoonconsulting_lightning_enums_IconName(iconName: com.spoonconsulting.lightning.enums.IconName): Icon;
        setIconName(iconName?: any): any;
        setIconName$java_lang_String(iconName: string): Icon;
        getIconName(): string;
        setSize$java_lang_String(size: string): Icon;
        setSize(size?: any): any;
        setSize$com_spoonconsulting_lightning_enums_Size(size: com.spoonconsulting.lightning.enums.Size): Icon;
    }
}
declare namespace com.spoonconsulting.lightning {
    class IconData {
        static DATA_: Object;
        static getIcon(html: string, viewBox: string): Object;
        static getIconData(): Object;
        static getIconGroup_action(): Object;
        static getIconGroup_custom(): Object;
        static getIconGroup_doctype(): Object;
        static getIconGroup_standard(): Object;
        static getIconGroup_utility(): Object;
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
        setAlignmentBump$com_spoonconsulting_lightning_enums_Direction(al: com.spoonconsulting.lightning.enums.Direction): LayoutItem;
        setAlignmentBump(al?: any): any;
        setAlignmentBump$java_lang_String(alignmentBumb: string): LayoutItem;
        getFlexibility(): string;
        setFlexibility$com_spoonconsulting_lightning_enums_Flexibility(flexi: com.spoonconsulting.lightning.enums.Flexibility): LayoutItem;
        setFlexibility(flexi?: any): any;
        setFlexibility$java_lang_String(flexibility: string): LayoutItem;
        getLargeDeviceSize(): number;
        setLargeDeviceSize(largeDeviceSize: number): LayoutItem;
        getMediumDeviceSize(): number;
        setMediumDeviceSize(mediumDeviceSize: number): LayoutItem;
        getPadding(): string;
        setPadding$com_spoonconsulting_lightning_enums_LayoutItemPadding(pading: com.spoonconsulting.lightning.enums.LayoutItemPadding): LayoutItem;
        setPadding(pading?: any): any;
        setPadding$java_lang_String(padding: string): LayoutItem;
        getSize(): number;
        setSize(size: number): LayoutItem;
        getSmallDeviceSize(): number;
        setSmallDeviceSize(smallDeviceSize: number): LayoutItem;
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
    class ProgressBar extends JSContainer {
        value: JSContainer;
        assistiveText: JSContainer;
        constructor(name: string);
        setSize$com_spoonconsulting_lightning_enums_Size(size: com.spoonconsulting.lightning.enums.Size): ProgressBar;
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
    class Section extends JSContainer {
        sectionTitle: JSContainer;
        icon: com.spoonconsulting.lightning.Button;
        content: JSContainer;
        constructor(name: string);
        toggle(): Section;
        setOpen(b: boolean): Section;
        isOpen(): boolean;
        getTitle(): string;
        setTitle(title: string): Section;
        setLabel(label: string): Section;
        getLabel(): string;
        getIcon(): com.spoonconsulting.lightning.Button;
        getContent(): JSContainer;
    }
    namespace Section {
        class Section$0 implements api.EventListener {
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
    class Spinner extends JSContainer {
        alternativeText: string;
        constructor(name: string);
        refresh(): void;
        getAlternativeText(): string;
        setAlternativeText(alternativeText: string): void;
        setSize$com_spoonconsulting_lightning_enums_Size(size: com.spoonconsulting.lightning.enums.Size): Spinner;
        setSize(size?: any): any;
        setSize$java_lang_String(size: string): Spinner;
        setVariant$java_lang_String(variant: string): Spinner;
        setVariant(variant?: any): any;
        setVariant$com_spoonconsulting_lightning_enums_Variants_Variant(variant: com.spoonconsulting.lightning.enums.Variants.Variant): Spinner;
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
        setVariant$com_spoonconsulting_lightning_enums_Variants_TabSetVariant(variant: com.spoonconsulting.lightning.enums.Variants.TabSetVariant): TabSet;
        setVariant(variant?: any): any;
        setVariant$java_lang_String(variant: string): TabSet;
    }
    namespace TabSet {
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
    class Toggle extends JSContainer implements api.InputField<boolean> {
        label: JSContainer;
        checkBox: input.JSCheckBox;
        fauxContainer: JSContainer;
        faux: JSContainer;
        __on: JSContainer;
        off: JSContainer;
        constructor(name: string);
        setMessageToggleActive(message: string): Toggle;
        getMessageToggleActive(): string;
        setMessageToggleInActive(message: string): Toggle;
        getMessageToggleInActive(): string;
        setLabel(label: string): Toggle;
        getLabel(): string;
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
    class Utils {
        static camelCaseToLabel(sname: string): string;
        static setPadding$framework_components_api_Renderable$com_spoonconsulting_lightning_enums_Direction(r: api.Renderable, direction: com.spoonconsulting.lightning.enums.Direction): void;
        static setPadding$framework_components_api_Renderable$com_spoonconsulting_lightning_enums_Direction$com_spoonconsulting_lightning_enums_Size(r: api.Renderable, direction: com.spoonconsulting.lightning.enums.Direction, size: com.spoonconsulting.lightning.enums.Size): void;
        static setPadding(r?: any, direction?: any, size?: any): any;
        static setMargin(r: api.Renderable, direction: com.spoonconsulting.lightning.enums.Direction, size: com.spoonconsulting.lightning.enums.Size): void;
        static setStyle(r: api.Renderable, prefix: string, direction: com.spoonconsulting.lightning.enums.Direction, size: com.spoonconsulting.lightning.enums.Size): void;
        static setAbsoluteCenter(r: api.Renderable): void;
        static setBorders(r: api.Renderable, dir: com.spoonconsulting.lightning.enums.Direction): void;
        static setBox$framework_components_api_Renderable$com_spoonconsulting_lightning_enums_Size(r: api.Renderable, size: com.spoonconsulting.lightning.enums.Size): void;
        static setBox(r?: any, size?: any): any;
        static setBox$framework_components_api_Renderable(r: api.Renderable): void;
        getDescriptionList(...strings: string[]): api.Renderable;
        getNameValueList(...strings: string[]): api.Renderable;
        static setHorizontalList$framework_components_api_Renderable(ul: api.Renderable): void;
        static setHorizontalList$framework_components_api_Renderable$boolean(ul: api.Renderable, hasBlock: boolean): void;
        static setHorizontalList$framework_components_api_Renderable$boolean$boolean(ul: api.Renderable, hasBlock: boolean, hasLink: boolean): void;
        static setHorizontalList$framework_components_api_Renderable$boolean$boolean$boolean(ul: api.Renderable, hasBlock: boolean, hasLink: boolean, hasSpace: boolean): void;
        static setHorizontalList$framework_components_api_Renderable$boolean$boolean$boolean$boolean(ul: api.Renderable, hasBlock: boolean, hasLink: boolean, hasSpace: boolean, isInline: boolean): void;
        static setHorizontalList$framework_components_api_Renderable$boolean$boolean$boolean$boolean$boolean(ul: api.Renderable, hasBlock: boolean, hasLink: boolean, hasSpace: boolean, isInline: boolean, hasLeftDivider: boolean): void;
        static setHorizontalList$framework_components_api_Renderable$boolean$boolean$boolean$boolean$boolean$boolean(ul: api.Renderable, hasBlock: boolean, hasLink: boolean, hasSpace: boolean, isInline: boolean, hasLeftDivider: boolean, hasRightDivider: boolean): void;
        static setHorizontalList(ul?: any, hasBlock?: any, hasLink?: any, hasSpace?: any, isInline?: any, hasLeftDivider?: any, hasRightDivider?: any): any;
        static hyphenate(r: api.Renderable): void;
        static setResetLink(r: api.Renderable): void;
        static setFauxLink(r: api.Renderable): void;
        static setLink(r: api.Renderable): void;
        static setHasBlurFocus(r: api.Renderable): void;
        static setLineClamp$framework_components_api_Renderable$com_spoonconsulting_lightning_enums_Size(r: api.Renderable, s: com.spoonconsulting.lightning.enums.Size): void;
        static setLineClamp(r?: any, s?: any): any;
        static setLineClamp$framework_components_api_Renderable(r: api.Renderable): void;
        static setPosition(r: api.Renderable, position: com.spoonconsulting.lightning.enums.Position): void;
        static setNoPrint(r: api.Renderable): void;
        static setScrollable(r: api.Renderable, x: boolean, y: boolean): void;
        static setTextBodyRegular(r: api.Renderable): void;
        static setTextBodySmall(r: api.Renderable): void;
        static setTextHeadingLarge(r: api.Renderable): void;
        static setTextHeadingMedium(r: api.Renderable): void;
        static setTextHeadingSmall(r: api.Renderable): void;
        static setTextTitle(r: api.Renderable): void;
        static setTextTitleCaps(r: api.Renderable): void;
        static setTextLongform(r: api.Renderable): void;
        static setTextAlignLeft(r: api.Renderable): void;
        static setTextAlignRight(r: api.Renderable): void;
        static setTextAlignCenter(r: api.Renderable): void;
        static setTextColor(r: api.Renderable, color: com.spoonconsulting.lightning.enums.Color): void;
        static setTextFontMonospace(r: api.Renderable): void;
        static setTheme(r: api.Renderable, theme: com.spoonconsulting.lightning.enums.Theme): void;
        static setTextTruncate(r: api.Renderable): void;
        static setHasFlexiTruncate(r: api.Renderable, hasFlexiTruncate: boolean): void;
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
    /**
     * <p>The badge is a component to display a small amount of information.</p>
     * <p>The badge can contain :</p>
     * <p>
     * <ul>
     * <li>label - {@link #setLabel(String)}, {@link #getLabel()}</li>
     * <li>icon - {@link #setIconName(String)}, {@link #getIconName()}</li>
     * <li>assistive text - {@link #setAssistiveText(String)}, {@link #getAssistiveText()}</li>
     * <li>icon alternative text - {@link #setIconAlternativeText(String)} {@link #getIconAlternativeText()}</li>
     * </ul>
     * <div>the icon can be positioned at start or end of the badge. i.e before or after the label.</div>
     * <p>The icon is the standard salesforce icon</p>
     * {@link #setIconPosition(String)}
     * {@link #POSITION_START}
     * {@link #POSITION_END}
     * </p>
     * Constructs a Badge with the specified name
     * @param {string} name - The name of the badge
     * @class
     * @extends com.spoonconsulting.lightning.BaseLightning
     * @author Kureem Rossaye<br>
     */
    class Badge extends com.spoonconsulting.lightning.BaseLightning {
        label: JSContainer;
        leftIconContainer: com.spoonconsulting.lightning.IconContainer;
        leftBadgeIcon: JSContainer;
        rightIconContainer: com.spoonconsulting.lightning.IconContainer;
        rightBadgeIcon: JSContainer;
        assistiveText: JSContainer;
        /**
         * static variable to set the icon position to start
         * @see {@link #setIconPosition(String)
         */
        static POSITION_START: string;
        /**
         * static variable to set the icon position to end
         * @see {@link #setIconPosition(String)
         */
        static POSITION_END: string;
        iconPosition: string;
        constructor(name: string);
        /**
         * sets the assistive text for the badge<br>
         * The text is hidden
         * @param {string} txt - The assistive text
         * @return {com.spoonconsulting.lightning.Badge} - The current instance of the badge
         */
        setAssistiveText(txt: string): Badge;
        /**
         *
         * @return {string} - The assistive text
         */
        getAssistiveText(): string;
        /**
         * The label for the badge<br>
         * @return {string} - The label for the badge
         */
        getLabel(): string;
        /**
         * sets the icon alternative text when the icon is not rendered
         * @param {string} altText - The alternative text when the icon is not rendered
         * @return {com.spoonconsulting.lightning.Badge} - The current instance of the badge
         */
        setIconAlternativeText(altText: string): Badge;
        /**
         *
         * @return {string} - The icon alternative text
         */
        getIconAlternativeText(): string;
        /**
         * sets the icon name for the badge<br>
         * takes the standard salesforce icon notation. e.g. utility:settings
         * @param {string} iconName - The icon name of the badge
         * @return {com.spoonconsulting.lightning.Badge} - The current instance of the badge
         */
        setIconName(iconName: string): Badge;
        /**
         *
         * @return {string} - The icon name of the badge
         */
        getIconName(): string;
        /**
         * @see {@link #POSITION_START}
         * @see {@link #POSITION_END}
         * @return {string} - The icon position of the badge
         */
        getIconPosition(): string;
        /**
         * sets the icon position of the badge
         * @param {string} position - The icon position of the badge
         * @return  {com.spoonconsulting.lightning.Badge} The current instance of the badge
         * @see {@link #POSITION_START}
         * @see {@link #POSITION_END}
         *
         */
        setIconPosition(position: string): Badge;
        /**
         * sets the label for the badge
         * @param {string} label - The label for the badge
         * @return {com.spoonconsulting.lightning.Badge} - The current instance of the badge
         */
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
        setVariant$com_spoonconsulting_lightning_enums_Variants_Variant(variant: com.spoonconsulting.lightning.enums.Variants.Variant): Button;
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
        setIconSize$com_spoonconsulting_lightning_enums_Size(size: com.spoonconsulting.lightning.enums.Size): ButtonMenu;
        setIconSize(size?: any): any;
        setIconSize$java_lang_String(size: string): ButtonMenu;
        setIsLoading(b: boolean): ButtonMenu;
        getIsLoading(): boolean;
        setLoadingStateAlternativeText(txt: string): ButtonMenu;
        setMenuAlignment$com_spoonconsulting_lightning_enums_MenuAlignment(alignment: com.spoonconsulting.lightning.enums.MenuAlignment): ButtonMenu;
        setMenuAlignment(alignment?: any): any;
        setMenuAlignment$java_lang_String(alignment: string): ButtonMenu;
        getMenuAlignment(): string;
        isNubbin(): boolean;
        setNubbin(nubbin: boolean): ButtonMenu;
        setValue(val: string): ButtonMenu;
        getValue(): string;
        setVariant$com_spoonconsulting_lightning_enums_Variants_ButtonIconVariant(variant: com.spoonconsulting.lightning.enums.Variants.ButtonIconVariant): ButtonMenu;
        setVariant(variant?: any): any;
        setVariant$java_lang_String(variant: string): ButtonMenu;
        refresh(): void;
    }
    namespace ButtonMenu {
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
        setVariant$com_spoonconsulting_lightning_enums_Variants_Variant(variant: com.spoonconsulting.lightning.enums.Variants.Variant): ButtonStateful;
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
        setSize(size: com.spoonconsulting.lightning.enums.Size): IconContainer;
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
        numberInput: input.JSNumberInput;
        checkBox: com.spoonconsulting.lightning.CheckBox;
        checkBoxButton: com.spoonconsulting.lightning.CheckBoxButton;
        toggle: com.spoonconsulting.lightning.Toggle;
        type: string;
        constructor(name: string);
        getInputType(stype: string): com.spoonconsulting.lightning.enums.InputType;
        setType$java_lang_String(stype: string): Input;
        setType(stype?: any): any;
        setType$com_spoonconsulting_lightning_enums_InputType(type: com.spoonconsulting.lightning.enums.InputType): Input;
        setMessageToggleActive(message: string): Input;
        getMessageToggleActive(): string;
        setMessageToggleInActive(message: string): Input;
        setAutoComplete(b: boolean): Input;
        setChecked(b: boolean): Input;
        getMessageToggleInActive(): string;
        /**
         *
         * @param {string} label
         * @return {com.spoonconsulting.lightning.FormElement}
         */
        setLabel(label: string): com.spoonconsulting.lightning.FormElement<any>;
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
        setSize$com_spoonconsulting_lightning_enums_Size(size: com.spoonconsulting.lightning.enums.Size): ButtonIcon;
        setTooltip(tooltip: string): ButtonIcon;
        /**
         *
         * @return {com.spoonconsulting.lightning.Button}
         */
        refresh(): com.spoonconsulting.lightning.Button;
        setVariant$java_lang_String(variant: string): ButtonIcon;
        setVariant(variant?: any): any;
        setVariant$com_spoonconsulting_lightning_enums_Variants_ButtonIconVariant(variant: com.spoonconsulting.lightning.enums.Variants.ButtonIconVariant): ButtonIcon;
        /**
         *
         * @param {string} label
         * @return {com.spoonconsulting.lightning.Button}
         */
        setLabel(label: string): com.spoonconsulting.lightning.Button;
    }
}
declare namespace com.spoonconsulting.lightning {
    class ButtonIconStateful extends com.spoonconsulting.lightning.ButtonIcon {
        constructor(name: string, iconName: string);
        setSelected(b: boolean): ButtonIconStateful;
        isSelected(): boolean;
    }
}
