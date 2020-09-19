import {shallowMount} from "@vue/test-utils";
import channel_management from "@/components/customIcon/channel_management";

describe("channel_management Component", () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallowMount(channel_management);
    });
    test("Check if component is a vue instance", () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    test("It should have a created hook of undefined because component is yet to be defined", () => {
        expect(typeof channel_management.created).toBe("undefined");
    });

    test("It should have a name of channel_management", () => {
        expect( wrapper.name()).toBe("channel_management");
    });

    test("It should not have a name of Analytics", () => {
        expect( wrapper.name()).not.toBe("some_gibberish");
    });

    test("It should be an svg tag ", () => {
        const svgElementExist = wrapper.contains('svg')
        expect(svgElementExist).toBe(true)
    });

});