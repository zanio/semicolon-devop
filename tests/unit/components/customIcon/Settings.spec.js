import {shallowMount} from "@vue/test-utils";
import Settings from "@/components/customIcon/Settings";

describe("Settings Component", () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallowMount(Settings);
    });
    test("Check if component is a vue instance", () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    test("It should have a created hook of undefined because component is yet to be defined", () => {
        expect(typeof Settings.created).toBe("undefined");
    });

    test("It should have a name of Settings", () => {
        expect( wrapper.name()).toBe("Settings");
    });

    test("It should not have a name of Settings", () => {
        expect( wrapper.name()).not.toBe("some_gibberish");
    });

    test("It should be an svg tag ", () => {
        const svgElementExist = wrapper.contains('svg')
        expect(svgElementExist).toBe(true)
    });

});