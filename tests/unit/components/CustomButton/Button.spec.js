import { shallowMount } from "@vue/test-utils";
import Button from "../../../../src/components/CustomButton/Button";

describe("Button Component", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallowMount(Button, {
      propsData: {
        btnLink: "http://localhost:8091",
      },
    });
  });
  test("is a Vue instance", () => {
    expect(wrapper.isVueInstance).toBeTruthy();
  });

  test("It should not have a created hook of undefined", () => {
    expect(typeof Button.created).toBe("undefined");
  });

  test("It has a name type of string ", () => {
    expect(typeof Button.name).toBe("string");
  });

  test("It has a does not have a props property", () => {
    expect(typeof Button.props).toBe("object");
  });

  // Mount an instance and inspect the render output
  it("renders the correct message", () => {
    expect(wrapper.text()).toBe("");
  });
});
