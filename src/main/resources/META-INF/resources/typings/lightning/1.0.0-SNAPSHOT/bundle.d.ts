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
    class Avatar extends JSContainer {
        img: JSContainer;
        fallbackIcon: com.spoonconsulting.lightning.Icon;
        iconContainer: JSContainer;
        initial: JSContainer;
        static TYPE_IMAGE: string;
        static TYPE_INITIAL: string;
        static TYPE_ICON: string;
        static VARIANT_SQUARE: string;
        static VARIANT_CIRCLE: string;
        type: string;
        constructor(name: string);
        setType(type: string): Avatar;
        getType(): string;
        setVariant(type: string): Avatar;
        getVariant(): string;
        setSize(size: com.spoonconsulting.lightning.Size): Avatar;
        setTitle(title: string): Avatar;
        getInitials(): string;
        setInitials(initials: string): Avatar;
        getFallbackIconName(): string;
        setFallbackIconName(fallbackIconName: string): Avatar;
        setSrc(src: string): Avatar;
        getSrc(): string;
        getImg(): JSContainer;
        getFallbackIcon(): com.spoonconsulting.lightning.Icon;
        getInitial(): JSContainer;
        setAlternativeText(altText: string): Avatar;
        getAlternativeText(): string;
    }
}
declare namespace com.spoonconsulting.lightning {
    class BaseComboBox extends JSContainer implements api.InputField<string> {
        combobox: JSContainer;
        formElement: JSContainer;
        input: input.JSTextInput;
        dropdown: com.spoonconsulting.lightning.ListBox;
        inputIconContainer: JSContainer;
        inputIcon: com.spoonconsulting.lightning.IconContainer;
        static DROPDOWN_ALIGNMENT_BOTTOM_LEFT: string;
        static DROPDOWN_ALIGNMENT_TOP_LEFT: string;
        constructor(name: string);
        setOptions(options: Array<Object>): BaseComboBox;
        toggleDropdown(): void;
        isExpanded(): boolean;
        setExpand(b: boolean): BaseComboBox;
        /**
         *
         * @return {string}
         */
        getValue(): string;
        /**
         *
         * @param {string} val
         */
        setValue(val: string): void;
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
        setBinding(binding: string): api.InputField<string>;
        /**
         *
         * @param {boolean} b
         * @return {*}
         */
        setRequired(b: boolean): api.InputField<string>;
        setDisabled(b: boolean): BaseComboBox;
        isDisabled(): boolean;
        setDropdownAlignment(alignment: string): BaseComboBox;
        getDropdownAlignment(): string;
        blur(): void;
        checkValidity(): boolean;
        setCustomValidity(message: string, type: string, description: string): BaseComboBox;
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
        constructor(name: string, input: api.InputField<T>);
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
    class Accordion extends com.spoonconsulting.lightning.BaseLightning {
        allowMultipleSectionOpen: boolean;
        constructor(name: string);
        addSection(section: com.spoonconsulting.lightning.AccordionSection): Accordion;
        addSections(...accordionSections: com.spoonconsulting.lightning.AccordionSection[]): Accordion;
        setActiveSectionName(name: string): Accordion;
        setOpen(name: string): Accordion;
        fireSectionToggle(): void;
        setClose(name: string): Accordion;
        isAllowMultipleSectionOpen(): boolean;
        setAllowMultipleSectionOpen(allowMultipleSectionOpen: boolean): void;
        getSections(): Array<com.spoonconsulting.lightning.AccordionSection>;
        getSection(name: string): com.spoonconsulting.lightning.AccordionSection;
    }
}
declare namespace com.spoonconsulting.lightning {
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
         *
         * @param {string} title
         */
        setTitle(title: string): void;
        toggle(): void;
        isOpen(): boolean;
        setOpen(b: boolean): AccordionSection;
        getSummary(): JSContainer;
        getContent(): JSContainer;
        getSummaryHeading(): JSContainer;
        getSummaryAction(): JSContainer;
        getSummaryActionIcon(): com.spoonconsulting.lightning.Icon;
        getSlot(name: string): JSContainer;
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
        static POSITION_START: string;
        static POSITION_END: string;
        constructor(name: string, tag: string);
        setIconAlternativeText(altText: string): Badge;
        setIconName(iconName: string): Badge;
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
        combo: com.spoonconsulting.lightning.BaseComboBox;
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
            constructor(_$ordinal: number, _$name: string, value: any);
            value: any;
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
            constructor(_$ordinal: number, _$name: string, value: any);
            value: any;
            getValue(): string;
            name(): string;
            ordinal(): number;
            compareTo(other: any): number;
        }
    }
}
