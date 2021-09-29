/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
var com;
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
                        let array122 = /* Enum.values */ function () { let result = []; for (let val in com.spoonconsulting.lightning.Size) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index121 = 0; index121 < array122.length; index121++) {
                            let s = array122[index121];
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
                    this.img.setAttribute("alt", altText);
                    this.img.setAttribute("title", altText);
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
                        let array124 = this.getChildren();
                        for (let index123 = 0; index123 < array124.length; index123++) {
                            let r = array124[index123];
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
                        let array126 = this.getChildren();
                        for (let index125 = 0; index125 < array126.length; index125++) {
                            let r = array126[index125];
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
                    this.help = new JSContainer("help", "div");
                    this.addClass("slds-form-element");
                    this.addChild(this.labelCtn);
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
            }
            lightning.FormElement = FormElement;
            FormElement["__class"] = "com.spoonconsulting.lightning.FormElement";
            FormElement["__interfaces"] = ["framework.components.api.InputField", "framework.components.api.Renderable"];
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
                    this.setHtml("<use xlink:href=\"/assets/icons/" + group + "-sprite/svg/symbols.svg#" + name + "\"></use>");
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
                        let array128 = /* Enum.values */ function () { let result = []; for (let val in com.spoonconsulting.lightning.Size) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index127 = 0; index127 < array128.length; index127++) {
                            let s = array128[index127];
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
            class MenuSubheader extends JSContainer {
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
            lightning.MenuSubheader = MenuSubheader;
            MenuSubheader["__class"] = "com.spoonconsulting.lightning.MenuSubheader";
            MenuSubheader["__interfaces"] = ["framework.components.api.Renderable"];
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
            Size["_$wrappers"] = { 0: new Size_$WRAPPER(0, "EXTRA_EXTRA_SMALL", "xx_small"), 1: new Size_$WRAPPER(1, "EXTRA_SMALL", "x_small"), 2: new Size_$WRAPPER(2, "SMALL", "small"), 3: new Size_$WRAPPER(3, "MEDIUM", "medium"), 4: new Size_$WRAPPER(4, "LARGE", "large") };
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
                        let array130 = /* Enum.values */ function () { let result = []; for (let val in com.spoonconsulting.lightning.Size) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index129 = 0; index129 < array130.length; index129++) {
                            let s = array130[index129];
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
                        let array132 = /* Enum.values */ function () { let result = []; for (let val in com.spoonconsulting.lightning.Variant) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index131 = 0; index131 < array132.length; index131++) {
                            let v = array132[index131];
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
            Variant["_$wrappers"] = { 0: new Variant_$WRAPPER(0, "BASE", ""), 1: new Variant_$WRAPPER(1, "NEUTRAL", "neutral"), 2: new Variant_$WRAPPER(2, "BRAND", "brand"), 3: new Variant_$WRAPPER(3, "OUTLINE_BRAND", "outline_brand"), 4: new Variant_$WRAPPER(4, "DESTRUCTIVE", "destructive"), 5: new Variant_$WRAPPER(5, "TEXT_DESTRUCTIVE", "text_destructive"), 6: new Variant_$WRAPPER(6, "SUCCESS", "success"), 7: new Variant_$WRAPPER(7, "INVERSE", "inverse") };
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
                    for (let index133 = 0; index133 < accordionSections.length; index133++) {
                        let section = accordionSections[index133];
                        {
                            this.addSection(section);
                        }
                    }
                    return this;
                }
                setActiveSectionName(name) {
                    {
                        let array135 = this.getChildren();
                        for (let index134 = 0; index134 < array135.length; index134++) {
                            let r = array135[index134];
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
                        let array137 = this.getChildren();
                        for (let index136 = 0; index136 < array137.length; index136++) {
                            let r = array137[index136];
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
                        let array139 = this.getSections();
                        for (let index138 = 0; index138 < array139.length; index138++) {
                            let sect = array139[index138];
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
                        let array141 = this.getChildren();
                        for (let index140 = 0; index140 < array141.length; index140++) {
                            let r = array141[index140];
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
                        let array143 = this.getChildren();
                        for (let index142 = 0; index142 < array143.length; index142++) {
                            let r = array143[index142];
                            {
                                sections.push(r.getChildren()[0]);
                            }
                        }
                    }
                    return sections;
                }
                getSection(name) {
                    {
                        let array145 = this.getChildren();
                        for (let index144 = 0; index144 < array145.length; index144++) {
                            let r = array145[index144];
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
                    this.summaryAction = new JSContainer("summary-action", "button");
                    this.summaryActionIcon = new com.spoonconsulting.lightning.Icon("summary-action-icon", "utility:switch");
                    this.summaryContent = new JSContainer("summaryContent", "span");
                    this.actionsSlot = new JSContainer("actions", "span");
                    this.addClass("slds-accordion__section");
                    this.addChild(this.summary.addClass("slds-accordion__summary"));
                    this.addChild(this.content.addClass("slds-accordion__content"));
                    this.summaryHeading.addClass("slds-accordion__summary-heading");
                    this.summary.addChild(this.summaryHeading);
                    this.summary.addChild(this.actionsSlot);
                    this.summaryAction.addClass("slds-button").addClass("slds-button_reset").addClass("slds-accordion__summary-action");
                    this.actionsSlot.addChild(this.summaryAction);
                    this.summaryActionIcon.addClass("slds-accordion__summary-action-icon").addClass("slds-button__icon").addClass("slds-button__icon_left");
                    this.summaryActionIcon.setAttribute("aria-hidden", "true");
                    this.summaryAction.addChild(this.summaryActionIcon);
                    this.summaryContent.addClass("slds-accordion__summary-content");
                    this.summary.addChild(this.summaryContent);
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
                    this.summaryContent.setAttribute("title", title);
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
                getSummaryContent() {
                    return this.summaryContent;
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
                    this.leftBadgeIcon.addClass("slds-badge__icon").addClass("slds-badge__icon_left");
                    this.leftBadgeIcon.addChild(this.leftIconContainer);
                    this.addChild(this.label);
                    this.rightBadgeIcon.addClass("slds-badge__icon").addClass("slds-badge__icon_right");
                    this.rightBadgeIcon.addChild(this.rightIconContainer);
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
                    this.iconPosition = Button.ICON_POSITION_LEFT;
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
                        if (this.iconPosition === Button.ICON_POSITION_LEFT) {
                            this.icon.removeClass("slds-button__icon_right").addClass("slds-button__icon_left");
                            this.addChild(this.icon);
                        }
                        if (this.isDraft) {
                            this.addChild(this.draft);
                        }
                        this.addChild(this.label);
                        if (this.iconPosition === Button.ICON_POSITION_RIGHT) {
                            this.icon.removeClass("slds-button__icon_left").addClass("slds-button__icon_right");
                        }
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
                        let array147 = /* Enum.values */ function () { let result = []; for (let val in com.spoonconsulting.lightning.Variant) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index146 = 0; index146 < array147.length; index146++) {
                            let v = array147[index146];
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
                    this.setAttribute("role", "group");
                    this.addClass("slds-button-group");
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
                    this.addClass("slds-dropdown-trigger").addClass("slds-dropdown-trigger_click");
                    this.button.setVariant$com_spoonconsulting_lightning_ButtonIcon_ButtonIconVariant(com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant.BORDER_FILLED);
                    this.button.setAttribute("aria-haspopup", "true");
                    this.button.setAttribute("aria-expanded", "true");
                    this.addChild(this.button);
                    this.addChild(this.dropdown);
                    this.button.addEventListener(new ButtonMenu.ButtonMenu$0(this), "click");
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
                        this.button.setPrefixIconName(null);
                        this.button.setIconName(iconName);
                    }
                    else {
                        this.button.setPrefixIconName(iconName);
                        this.button.setIconName("utility:down");
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
                    this.dropdown.removeClass("slds-dropdown_bottom").removeClass("slds-dropdown_left").removeClass("slds-dropdown_right").removeClass("slds-dropdown_center").removeClass("slds-dropdown_bottom-right").removeClass("slds-dropdown_bottom-left").removeClass("slds-nubbin_left").removeClass("slds-nubbin_right").removeClass("slds-nubbin_center").removeClass("slds-nubbin_bottom-right").removeClass("slds-nubbin_bottom-left").removeClass("slds-nubbin_bottom").removeClass("slds-nubbin_top").removeClass("slds-nubbin_top-right").removeClass("slds-nubbin_top-left");
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
                    this.addClass("slds-button");
                    this.addClass("slds-button_stateful");
                    this.addChild(this.btnNotSelected).addChild(this.btnSelected).addChild(this.btnSelectedFocus);
                    this.addEventListener(new ButtonStateful.ButtonStateful$0(this), "click");
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
                        let array149 = /* Enum.values */ function () { let result = []; for (let val in com.spoonconsulting.lightning.Variant) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index148 = 0; index148 < array149.length; index148++) {
                            let v = array149[index148];
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
                    this.addClass("slds-icon_container");
                    this.addChild(this.icon);
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
                    for (let index150 = 0; index150 < items.length; index150++) {
                        let item = items[index150];
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
            class ButtonIcon extends com.spoonconsulting.lightning.Button {
                constructor(name, iconName) {
                    super(name);
                    this.setIconName(iconName);
                    this.getChildren()[1].addClass("slds-assistive-text");
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
                setSize(size) {
                    {
                        let array152 = /* Enum.values */ function () { let result = []; for (let val in com.spoonconsulting.lightning.Size) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index151 = 0; index151 < array152.length; index151++) {
                            let s = array152[index151];
                            {
                                this.removeClass("slds-button_icon-" + com.spoonconsulting.lightning.Size["_$wrappers"][s].getValue());
                            }
                        }
                    }
                    this.addClass("slds-button_icon-" + com.spoonconsulting.lightning.Size["_$wrappers"][size].getValue());
                    return this;
                }
                setTooltip(tooltip) {
                    this.setTitle(tooltip);
                    return this;
                }
                setVariant$java_lang_String(variant) {
                    {
                        let array154 = /* Enum.values */ function () { let result = []; for (let val in com.spoonconsulting.lightning.ButtonIcon.ButtonIconVariant) {
                            if (!isNaN(val)) {
                                result.push(parseInt(val, 10));
                            }
                        } return result; }();
                        for (let index153 = 0; index153 < array154.length; index153++) {
                            let v = array154[index153];
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
                ButtonIconVariant["_$wrappers"] = { 0: new ButtonIconVariant_$WRAPPER(0, "BARE", "bare"), 1: new ButtonIconVariant_$WRAPPER(1, "CONTAINER", "container"), 2: new ButtonIconVariant_$WRAPPER(2, "BRAND", "brand"), 3: new ButtonIconVariant_$WRAPPER(3, "BORDER", "border"), 4: new ButtonIconVariant_$WRAPPER(4, "BORDER_FILLED", "border-filled"), 5: new ButtonIconVariant_$WRAPPER(5, "BARE_INVERSE", "bare-inverse"), 6: new ButtonIconVariant_$WRAPPER(6, "BORDER_INVERSE", "borde-inverse") };
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
