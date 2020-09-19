import {shallowMount} from "@vue/test-utils";
import MultipleOutlet from "@/components/customIcon/MultipleOutlet";

describe("MultipleOutlet Component", () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallowMount(MultipleOutlet);
    });
    test("Check if component is a vue instance", () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    test("It should have a created hook of undefined because component is yet to be defined", () => {
        expect(typeof MultipleOutlet.created).toBe("undefined");
    });

    test("It should have a name of MultipleOutlet", () => {
        expect( wrapper.name()).toBe("MultipleOutlet");
    });

    test("It should not have a name of MultipleOutlet", () => {
        expect( wrapper.name()).not.toBe("some_gibberish");
    });

    test("It should be an svg tag ", () => {
        const svgElementExist = wrapper.contains('svg')
        expect(svgElementExist).toBe(true)
    });

});