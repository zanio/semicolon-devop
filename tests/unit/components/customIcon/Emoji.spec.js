import {shallowMount} from "@vue/test-utils";
import Emoji from "@/components/customIcon/Emoji";

describe("Emoji Component", () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallowMount(Emoji);
    });
    test("Check if component is a vue instance", () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    test("It should have a created hook of undefined because component is yet to be defined", () => {
        expect(typeof Emoji.created).toBe("undefined");
    });

    test("It should have a name of Emoji", () => {
        expect( wrapper.name()).toBe("Emoji");
    });

    test("It should not have a name of ChatIcon", () => {
        expect( wrapper.name()).not.toBe("some_gibberish");
    });

    test("It should be an svg tag ", () => {
        const svgElementExist = wrapper.contains('svg')
        expect(svgElementExist).toBe(true)
    });

});