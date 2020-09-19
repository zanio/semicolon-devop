import {shallowMount} from "@vue/test-utils";
import TeamManagement from "@/components/customIcon/TeamManagement";

describe("TeamManagement Component", () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallowMount(TeamManagement);
    });
    test("Check if component is a vue instance", () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    test("It should have a created hook of undefined because component is yet to be defined", () => {
        expect(typeof TeamManagement.created).toBe("undefined");
    });

    test("It should have a name of TeamManagement", () => {
        expect( wrapper.name()).toBe("TeamManagement");
    });

    test("It should not have a name of TeamManagement", () => {
        expect( wrapper.name()).not.toBe("some_gibberish");
    });

    test("It should be an svg tag ", () => {
        const svgElementExist = wrapper.contains('svg')
        expect(svgElementExist).toBe(true)
    });

});