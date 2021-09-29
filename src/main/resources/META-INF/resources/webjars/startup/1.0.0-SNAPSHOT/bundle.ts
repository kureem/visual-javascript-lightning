/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
namespace com.mycompany.ui {
    export class Boot {
        public static main(args: string[]) {
            const rootApp: JSContainer = new JSContainer("div");
            rootApp.addChild(new com.mycompany.ui.Example_0());
            rootApp.addChild(new com.mycompany.ui.Example_1());
            rootApp.render();
        }
    }
    Boot["__class"] = "com.mycompany.ui.Boot";

}
namespace com.mycompany.ui {
    /**
     * 
     * Simple class that extends JSContainer with tag div
     * @class
     * @extends JSContainer
     */
    export class Example_0 extends JSContainer {
        public constructor() {
            super("div");
            const h1: JSContainer = new JSContainer("h1");
            h1.setHtml("Hello World!");
            this.addChild(h1);
            const btn: input.JSButton = new input.JSButton("button", "Click Me");
            btn.addEventListener(new Example_0.Example_0$0(this, h1), "click");
            btn.addEventListener(new Example_0.Example_0$1(this, h1), "dblclick");
            this.addChild(btn);
        }
    }
    Example_0["__class"] = "com.mycompany.ui.Example_0";
    Example_0["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace Example_0 {

        export class Example_0$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.h1.setHtml("Goobye cruel world!");
            }

            constructor(__parent: any, private h1: any) {
                this.__parent = __parent;
            }
        }
        Example_0$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class Example_0$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.h1.setHtml("dbl click!!");
            }

            constructor(__parent: any, private h1: any) {
                this.__parent = __parent;
            }
        }
        Example_0$1["__interfaces"] = ["framework.components.api.EventListener"];


    }

}
namespace com.mycompany.ui {
    export class Example_1 extends JSContainer {
        public constructor() {
            super("div");
            const eventLogs: JSContainer = new JSContainer("eventLogs", "div");
            this.addChild(eventLogs);
            const cardLayout: CardLayout = new CardLayout("cards", "div");
            this.addChild(cardLayout);
            const buttons: JSContainer = new JSContainer("div");
            this.addChild(buttons);
            const first: input.JSButton = new input.JSButton("first", "<<");
            const previous: input.JSButton = new input.JSButton("previous", "<");
            const next: input.JSButton = new input.JSButton("next", ">");
            const last: input.JSButton = new input.JSButton("last", ">>");
            buttons.addChild(first).addChild(previous).addChild(next).addChild(last);
            first.addEventListener(new Example_1.Example_1$0(this, cardLayout), "click");
            previous.addEventListener(new Example_1.Example_1$1(this, cardLayout), "click");
            next.addEventListener(new Example_1.Example_1$2(this, cardLayout), "click");
            last.addEventListener(new Example_1.Example_1$3(this, cardLayout), "click");
            for(let i: number = 1; i <= 3; i++) {{
                const item: CardLayoutItem = new CardLayoutItem("item-" + i, "div");
                item.setStyle("border", "solid 1px silver").setStyle("width", "200px").setStyle("height", "200px");
                item.addChild(new JSContainer("h1").setHtml("I am Item number " + i));
                cardLayout.addItem(item);
                item.addEventListener(new Example_1.Example_1$4(this, item, eventLogs), "activate");
                item.addEventListener(new Example_1.Example_1$5(this, item, eventLogs), "deactivate");
                item.addEventListener(new Example_1.Example_1$6(this, item, eventLogs), "validate");
            };}
            cardLayout.addEventListener(new Example_1.Example_1$7(this, eventLogs), "next");
            cardLayout.addEventListener(new Example_1.Example_1$8(this, eventLogs), "previous");
            cardLayout.addEventListener(new Example_1.Example_1$9(this, eventLogs), "first");
            cardLayout.addEventListener(new Example_1.Example_1$10(this, eventLogs), "last");
            cardLayout.refresh();
        }
    }
    Example_1["__class"] = "com.mycompany.ui.Example_1";
    Example_1["__interfaces"] = ["framework.components.api.Renderable"];



    export namespace Example_1 {

        export class Example_1$0 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const param: Object = <Object>new Object();
                param["method"] = "first";
                this.cardLayout.first(param);
            }

            constructor(__parent: any, private cardLayout: any) {
                this.__parent = __parent;
            }
        }
        Example_1$0["__interfaces"] = ["framework.components.api.EventListener"];



        export class Example_1$1 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const param: Object = <Object>new Object();
                param["method"] = "previous";
                this.cardLayout.previous(param);
            }

            constructor(__parent: any, private cardLayout: any) {
                this.__parent = __parent;
            }
        }
        Example_1$1["__interfaces"] = ["framework.components.api.EventListener"];



        export class Example_1$2 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const param: Object = <Object>new Object();
                param["method"] = "next";
                this.cardLayout.next(param);
            }

            constructor(__parent: any, private cardLayout: any) {
                this.__parent = __parent;
            }
        }
        Example_1$2["__interfaces"] = ["framework.components.api.EventListener"];



        export class Example_1$3 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                const param: Object = <Object>new Object();
                param["method"] = "last";
                this.cardLayout.last(param);
            }

            constructor(__parent: any, private cardLayout: any) {
                this.__parent = __parent;
            }
        }
        Example_1$3["__interfaces"] = ["framework.components.api.EventListener"];



        export class Example_1$4 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.item.addChild(new JSContainer("p").setHtml("I am being activated"));
                this.eventLogs.addChild(new JSContainer("p").setHtml(source.getName() + " is being activated"));
            }

            constructor(__parent: any, private item: any, private eventLogs: any) {
                this.__parent = __parent;
            }
        }
        Example_1$4["__interfaces"] = ["framework.components.api.EventListener"];



        export class Example_1$5 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.item.addChild(new JSContainer("p").setHtml("I am being deactivated"));
                this.eventLogs.addChild(new JSContainer("p").setHtml(source.getName() + " is being deactivated"));
            }

            constructor(__parent: any, private item: any, private eventLogs: any) {
                this.__parent = __parent;
            }
        }
        Example_1$5["__interfaces"] = ["framework.components.api.EventListener"];



        export class Example_1$6 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                this.item.addChild(new JSContainer("p").setHtml("I am being validated"));
                this.eventLogs.addChild(new JSContainer("p").setHtml(source.getName() + " is being validated"));
            }

            constructor(__parent: any, private item: any, private eventLogs: any) {
                this.__parent = __parent;
            }
        }
        Example_1$6["__interfaces"] = ["framework.components.api.EventListener"];



        export class Example_1$7 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                console.log(evt["from"]);
                console.log(evt["to"]);
                console.log(evt["source"]);
                console.log(evt["dest"]);
                this.eventLogs.addChild(new JSContainer("p").setHtml("next is being triggered on " + source.getName()));
            }

            constructor(__parent: any, private eventLogs: any) {
                this.__parent = __parent;
            }
        }
        Example_1$7["__interfaces"] = ["framework.components.api.EventListener"];



        export class Example_1$8 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                console.log(evt["from"]);
                console.log(evt["to"]);
                console.log(evt["source"]);
                console.log(evt["dest"]);
                this.eventLogs.addChild(new JSContainer("p").setHtml("previous is being triggered on " + source.getName()));
            }

            constructor(__parent: any, private eventLogs: any) {
                this.__parent = __parent;
            }
        }
        Example_1$8["__interfaces"] = ["framework.components.api.EventListener"];



        export class Example_1$9 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                console.log(evt["from"]);
                console.log(evt["to"]);
                console.log(evt["source"]);
                console.log(evt["dest"]);
                this.eventLogs.addChild(new JSContainer("p").setHtml("first is being triggered on " + source.getName()));
            }

            constructor(__parent: any, private eventLogs: any) {
                this.__parent = __parent;
            }
        }
        Example_1$9["__interfaces"] = ["framework.components.api.EventListener"];



        export class Example_1$10 implements api.EventListener {
            public __parent: any;
            /**
             * 
             * @param {*} source
             * @param {Event} evt
             */
            public performAction(source: api.Renderable, evt: Event) {
                console.log(evt["from"]);
                console.log(evt["to"]);
                console.log(evt["source"]);
                console.log(evt["dest"]);
                this.eventLogs.addChild(new JSContainer("p").setHtml("last is being triggered on " + source.getName()));
            }

            constructor(__parent: any, private eventLogs: any) {
                this.__parent = __parent;
            }
        }
        Example_1$10["__interfaces"] = ["framework.components.api.EventListener"];


    }

}


com.mycompany.ui.Boot.main(null);
