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
    class BaseLightning extends JSContainer {
        constructor(name: string, tag: string);
        setTitle(title: string): void;
        getTitle(): string;
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
        help: JSContainer;
        constructor(name: string, input: api.InputField<T>);
        setRequired(b: boolean): FormElement<T>;
        setLabel(label: string): FormElement<T>;
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
    class MenuDivider extends JSContainer {
        constructor();
    }
}
declare namespace com.spoonconsulting.lightning {
    class MenuSubheader extends JSContainer {
        span: JSContainer;
        constructor(name: string);
        setLabel(label: string): MenuSubheader;
        getLabel(): string;
    }
}
declare namespace com.spoonconsulting.lightning {
    class Popover {
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
        summaryAction: JSContainer;
        summaryActionIcon: com.spoonconsulting.lightning.Icon;
        summaryContent: JSContainer;
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
        getSummaryContent(): JSContainer;
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
        constructor(name: string, tag: string);
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
    class ButtonIcon extends com.spoonconsulting.lightning.Button {
        constructor(name: string, iconName: string);
        setAlternativeText(altText: string): ButtonIcon;
        setIconClass(iconClass: string): ButtonIcon;
        setSize(size: com.spoonconsulting.lightning.Size): ButtonIcon;
        setTooltip(tooltip: string): ButtonIcon;
        setVariant$java_lang_String(variant: string): ButtonIcon;
        setVariant(variant?: any): any;
        setVariant$com_spoonconsulting_lightning_ButtonIcon_ButtonIconVariant(variant: ButtonIcon.ButtonIconVariant): ButtonIcon;
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
