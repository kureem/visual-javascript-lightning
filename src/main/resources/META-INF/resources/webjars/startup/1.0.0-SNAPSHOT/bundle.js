/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
var com;
(function (com) {
    var mycompany;
    (function (mycompany) {
        var ui;
        (function (ui) {
            class Boot {
                static main(args) {
                    const rootApp = new JSContainer("div");
                    rootApp.addChild(new com.mycompany.ui.Example_0());
                    rootApp.addChild(new com.mycompany.ui.Example_1());
                    rootApp.render();
                }
            }
            ui.Boot = Boot;
            Boot["__class"] = "com.mycompany.ui.Boot";
        })(ui = mycompany.ui || (mycompany.ui = {}));
    })(mycompany = com.mycompany || (com.mycompany = {}));
})(com || (com = {}));
(function (com) {
    var mycompany;
    (function (mycompany) {
        var ui;
        (function (ui) {
            /**
             *
             * Simple class that extends JSContainer with tag div
             * @class
             * @extends JSContainer
             */
            class Example_0 extends JSContainer {
                constructor() {
                    super("div");
                    const h1 = new JSContainer("h1");
                    h1.setHtml("Hello World!");
                    this.addChild(h1);
                    const btn = new input.JSButton("button", "Click Me");
                    btn.addEventListener(new Example_0.Example_0$0(this, h1), "click");
                    btn.addEventListener(new Example_0.Example_0$1(this, h1), "dblclick");
                    this.addChild(btn);
                }
            }
            ui.Example_0 = Example_0;
            Example_0["__class"] = "com.mycompany.ui.Example_0";
            Example_0["__interfaces"] = ["framework.components.api.Renderable"];
            (function (Example_0) {
                class Example_0$0 {
                    constructor(__parent, h1) {
                        this.h1 = h1;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        this.h1.setHtml("Goobye cruel world!");
                    }
                }
                Example_0.Example_0$0 = Example_0$0;
                Example_0$0["__interfaces"] = ["framework.components.api.EventListener"];
                class Example_0$1 {
                    constructor(__parent, h1) {
                        this.h1 = h1;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        this.h1.setHtml("dbl click!!");
                    }
                }
                Example_0.Example_0$1 = Example_0$1;
                Example_0$1["__interfaces"] = ["framework.components.api.EventListener"];
            })(Example_0 = ui.Example_0 || (ui.Example_0 = {}));
        })(ui = mycompany.ui || (mycompany.ui = {}));
    })(mycompany = com.mycompany || (com.mycompany = {}));
})(com || (com = {}));
(function (com) {
    var mycompany;
    (function (mycompany) {
        var ui;
        (function (ui) {
            class Example_1 extends JSContainer {
                constructor() {
                    super("div");
                    const eventLogs = new JSContainer("eventLogs", "div");
                    this.addChild(eventLogs);
                    const cardLayout = new CardLayout("cards", "div");
                    this.addChild(cardLayout);
                    const buttons = new JSContainer("div");
                    this.addChild(buttons);
                    const first = new input.JSButton("first", "<<");
                    const previous = new input.JSButton("previous", "<");
                    const next = new input.JSButton("next", ">");
                    const last = new input.JSButton("last", ">>");
                    buttons.addChild(first).addChild(previous).addChild(next).addChild(last);
                    first.addEventListener(new Example_1.Example_1$0(this, cardLayout), "click");
                    previous.addEventListener(new Example_1.Example_1$1(this, cardLayout), "click");
                    next.addEventListener(new Example_1.Example_1$2(this, cardLayout), "click");
                    last.addEventListener(new Example_1.Example_1$3(this, cardLayout), "click");
                    for (let i = 1; i <= 3; i++) {
                        {
                            const item = new CardLayoutItem("item-" + i, "div");
                            item.setStyle("border", "solid 1px silver").setStyle("width", "200px").setStyle("height", "200px");
                            item.addChild(new JSContainer("h1").setHtml("I am Item number " + i));
                            cardLayout.addItem(item);
                            item.addEventListener(new Example_1.Example_1$4(this, item, eventLogs), "activate");
                            item.addEventListener(new Example_1.Example_1$5(this, item, eventLogs), "deactivate");
                            item.addEventListener(new Example_1.Example_1$6(this, item, eventLogs), "validate");
                        }
                        ;
                    }
                    cardLayout.addEventListener(new Example_1.Example_1$7(this, eventLogs), "next");
                    cardLayout.addEventListener(new Example_1.Example_1$8(this, eventLogs), "previous");
                    cardLayout.addEventListener(new Example_1.Example_1$9(this, eventLogs), "first");
                    cardLayout.addEventListener(new Example_1.Example_1$10(this, eventLogs), "last");
                    cardLayout.refresh();
                }
            }
            ui.Example_1 = Example_1;
            Example_1["__class"] = "com.mycompany.ui.Example_1";
            Example_1["__interfaces"] = ["framework.components.api.Renderable"];
            (function (Example_1) {
                class Example_1$0 {
                    constructor(__parent, cardLayout) {
                        this.cardLayout = cardLayout;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        const param = new Object();
                        param["method"] = "first";
                        this.cardLayout.first(param);
                    }
                }
                Example_1.Example_1$0 = Example_1$0;
                Example_1$0["__interfaces"] = ["framework.components.api.EventListener"];
                class Example_1$1 {
                    constructor(__parent, cardLayout) {
                        this.cardLayout = cardLayout;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        const param = new Object();
                        param["method"] = "previous";
                        this.cardLayout.previous(param);
                    }
                }
                Example_1.Example_1$1 = Example_1$1;
                Example_1$1["__interfaces"] = ["framework.components.api.EventListener"];
                class Example_1$2 {
                    constructor(__parent, cardLayout) {
                        this.cardLayout = cardLayout;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        const param = new Object();
                        param["method"] = "next";
                        this.cardLayout.next(param);
                    }
                }
                Example_1.Example_1$2 = Example_1$2;
                Example_1$2["__interfaces"] = ["framework.components.api.EventListener"];
                class Example_1$3 {
                    constructor(__parent, cardLayout) {
                        this.cardLayout = cardLayout;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        const param = new Object();
                        param["method"] = "last";
                        this.cardLayout.last(param);
                    }
                }
                Example_1.Example_1$3 = Example_1$3;
                Example_1$3["__interfaces"] = ["framework.components.api.EventListener"];
                class Example_1$4 {
                    constructor(__parent, item, eventLogs) {
                        this.item = item;
                        this.eventLogs = eventLogs;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        this.item.addChild(new JSContainer("p").setHtml("I am being activated"));
                        this.eventLogs.addChild(new JSContainer("p").setHtml(source.getName() + " is being activated"));
                    }
                }
                Example_1.Example_1$4 = Example_1$4;
                Example_1$4["__interfaces"] = ["framework.components.api.EventListener"];
                class Example_1$5 {
                    constructor(__parent, item, eventLogs) {
                        this.item = item;
                        this.eventLogs = eventLogs;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        this.item.addChild(new JSContainer("p").setHtml("I am being deactivated"));
                        this.eventLogs.addChild(new JSContainer("p").setHtml(source.getName() + " is being deactivated"));
                    }
                }
                Example_1.Example_1$5 = Example_1$5;
                Example_1$5["__interfaces"] = ["framework.components.api.EventListener"];
                class Example_1$6 {
                    constructor(__parent, item, eventLogs) {
                        this.item = item;
                        this.eventLogs = eventLogs;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        this.item.addChild(new JSContainer("p").setHtml("I am being validated"));
                        this.eventLogs.addChild(new JSContainer("p").setHtml(source.getName() + " is being validated"));
                    }
                }
                Example_1.Example_1$6 = Example_1$6;
                Example_1$6["__interfaces"] = ["framework.components.api.EventListener"];
                class Example_1$7 {
                    constructor(__parent, eventLogs) {
                        this.eventLogs = eventLogs;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        console.log(evt["from"]);
                        console.log(evt["to"]);
                        console.log(evt["source"]);
                        console.log(evt["dest"]);
                        this.eventLogs.addChild(new JSContainer("p").setHtml("next is being triggered on " + source.getName()));
                    }
                }
                Example_1.Example_1$7 = Example_1$7;
                Example_1$7["__interfaces"] = ["framework.components.api.EventListener"];
                class Example_1$8 {
                    constructor(__parent, eventLogs) {
                        this.eventLogs = eventLogs;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        console.log(evt["from"]);
                        console.log(evt["to"]);
                        console.log(evt["source"]);
                        console.log(evt["dest"]);
                        this.eventLogs.addChild(new JSContainer("p").setHtml("previous is being triggered on " + source.getName()));
                    }
                }
                Example_1.Example_1$8 = Example_1$8;
                Example_1$8["__interfaces"] = ["framework.components.api.EventListener"];
                class Example_1$9 {
                    constructor(__parent, eventLogs) {
                        this.eventLogs = eventLogs;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        console.log(evt["from"]);
                        console.log(evt["to"]);
                        console.log(evt["source"]);
                        console.log(evt["dest"]);
                        this.eventLogs.addChild(new JSContainer("p").setHtml("first is being triggered on " + source.getName()));
                    }
                }
                Example_1.Example_1$9 = Example_1$9;
                Example_1$9["__interfaces"] = ["framework.components.api.EventListener"];
                class Example_1$10 {
                    constructor(__parent, eventLogs) {
                        this.eventLogs = eventLogs;
                        this.__parent = __parent;
                    }
                    /**
                     *
                     * @param {*} source
                     * @param {Event} evt
                     */
                    performAction(source, evt) {
                        console.log(evt["from"]);
                        console.log(evt["to"]);
                        console.log(evt["source"]);
                        console.log(evt["dest"]);
                        this.eventLogs.addChild(new JSContainer("p").setHtml("last is being triggered on " + source.getName()));
                    }
                }
                Example_1.Example_1$10 = Example_1$10;
                Example_1$10["__interfaces"] = ["framework.components.api.EventListener"];
            })(Example_1 = ui.Example_1 || (ui.Example_1 = {}));
        })(ui = mycompany.ui || (mycompany.ui = {}));
    })(mycompany = com.mycompany || (com.mycompany = {}));
})(com || (com = {}));
com.mycompany.ui.Boot.main(null);
