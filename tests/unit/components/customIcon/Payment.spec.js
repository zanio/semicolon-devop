import {shallowMount} from "@vue/test-utils";
import Payment from "@/components/customIcon/Payment";

describe("Payment Component", () => {
    let wrapper;
    beforeAll(() => {
        wrapper = shallowMount(Payment);
    });
    test("Check if component is a vue instance", () => {
        expect(wrapper.isVueInstance).toBeTruthy();
    });

    test("It should have a created hook of undefined because component is yet to be defined", () => {
        expect(typeof Payment.created).toBe("undefined");
    });

    test("It should have a name of Payment", () => {
        expect( wrapper.name()).toBe("Payment");
    });

    test("It should not have a name of Payment", () => {
        expect( wrapper.name()).not.toBe("some_gibberish");
    });

    test("It should be an svg tag ", () => {
        const svgElementExist = wrapper.contains('svg')
        expect(svgElementExist).toBe(true)
    });

});