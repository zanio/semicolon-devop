import {shallowMount} from "@vue/test-utils";
import Help from "@/components/customIcon/Help";

describe("Help Component", () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallowMount(Help);
    });
    test("Check if component is a vue instance", () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    test("It should have a created hook of undefined because component is yet to be defined", () => {
        expect(typeof Help.created).toBe("undefined");
    });

    test("It should have a name of Help", () => {
        expect( wrapper.name()).toBe("Help");
    });

    test("It should not have a name of Help", () => {
        expect( wrapper.name()).not.toBe("some_gibberish");
    });

    test("It should be an svg tag ", () => {
        const svgElementExist = wrapper.contains('svg')
        expect(svgElementExist).toBe(true)
    });

});