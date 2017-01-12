import { expect } from "chai";
import jsdom from "jsdom-global";
import Element from "./element";

describe("Base element component",() => {
    let element, wrapper;

    beforeEach(function() {
        this.jsdom = jsdom();

        element = new Element();
        wrapper = document.createElement("div");
        wrapper.className = "wrapper";
        document.body.appendChild(wrapper);
    });

    afterEach(function() {
        this.jsdom();
    });

    it("properly transforms tag argument and creates element", () => {
        expect(element.element.nodeType).to.equal(Node.ELEMENT_NODE);
        expect(element.element).to.be.an.instanceof(window.HTMLElement);
    });

    it("has render method, which renders element and returns this", () => {
        expect(element.render).to.be.a("function");

        expect(wrapper.querySelectorAll("div")).to.have.length(0);
        element = new Element();
        let renderedElement = element.render(wrapper);
        expect(wrapper.querySelectorAll("div")).to.have.length(1);
        expect(renderedElement).to.equal(element);

        element = new Element("div");
        renderedElement = element.render(wrapper);
        expect(wrapper.querySelectorAll("div")).to.have.length(2);
        expect(renderedElement).to.equal(element);

        element = new Element("span");
        expect(wrapper.querySelectorAll("span")).to.have.length(0);
        renderedElement = element.render(wrapper);
        expect(wrapper.querySelectorAll("span")).to.have.length(1);
        expect(renderedElement).to.equal(element);

        element = new Element("a");
        expect(wrapper.querySelectorAll("a")).to.have.length(0);
        renderedElement = element.render(wrapper);
        expect(wrapper.querySelectorAll("a")).to.have.length(1);
        expect(renderedElement).to.equal(element);

        element = new Element("input");
        renderedElement = element.render(wrapper);
        expect(wrapper.querySelectorAll("input")).to.have.length(1);
        expect(renderedElement).to.equal(element);
    });

    it("bla", () => {
        console.log(document.body.innerHTML);
    });

    it("has render method, which throws Error if parent node are not passed", () => {
        expect(() => {new Element().render()}).to.throw("Parent node are not passed.");
    });
});