import {shallowMount} from "@vue/test-utils";
import VOIP from "@/components/customIcon/VOIP";

describe("VOIP Component", () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallowMount(VOIP);
    });
    test("Check if component is a vue instance", () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    test("It should have a created hook of undefined because component is yet to be defined", () => {
        expect(typeof VOIP.created).toBe("undefined");
    });

    test("It should have a name of VOIP", () => {
        expect( wrapper.name()).toBe("VOIP");
    });

    test("It should not have a name of VOIP", () => {
        expect( wrapper.name()).not.toBe("some_gibberish");
    });

    test("It should be an svg tag ", () => {
        const svgElementExist = wrapper.contains('svg');
        expect(svgElementExist).toBe(true);
    });

});