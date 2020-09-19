import {shallowMount} from "@vue/test-utils";
import ArrowDownVue from "@/components/customIcon/arrow_down";

describe("arrow_down Component", () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallowMount(ArrowDownVue);
    });
    test("Check if component is a vue instance", () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    test("It should have a created hook of undefined because component is yet to be defined", () => {
        expect(typeof ArrowDownVue.created).toBe("undefined");
    });

    test("It should have a name of arrow_down", () => {
        expect( wrapper.name()).toBe("arrow_down");
    });

    test("It should not have a name of Analytics", () => {
        expect( wrapper.name()).not.toBe("arrow_downssd");
    });

    test("It should be an svg tag ", () => {
        const svgElementExist = wrapper.contains('svg')
        expect(svgElementExist).toBe(true)
    });

});