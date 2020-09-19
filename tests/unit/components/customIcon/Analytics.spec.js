import {shallowMount} from "@vue/test-utils";
import Analytics from "@/components/customIcon/Analytics";

describe("Analytics Component", () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallowMount(Analytics);
    });
    test("Check if component is a vue instance", () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    test("It should have a created hook of undefined because component is yet to be defined", () => {
        expect(typeof Analytics.created).toBe("undefined");
    });

    test("It should have a name of Analytics", () => {
        expect( wrapper.name()).toBe("Analytics");
    });

    test("It should be an svg tag ", () => {
        const svgElementExist = wrapper.contains('svg')
        expect(svgElementExist).toBe(true)
    });

});