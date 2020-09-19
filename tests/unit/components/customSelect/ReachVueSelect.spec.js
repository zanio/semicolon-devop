import {shallowMount} from "@vue/test-utils";
import ReeachVueSelect from "@/components/CustomSelect/ReeachVueSelect";


const options = [{
    value:1,
    label:'Always open for Business',
    iconClass:"always-open-for-business"
},
    {
        value:2,
        label:'Open for business',
        iconClass:"open-for-business"

    },

    {
        label: "Closed for business",
        value: 4,
        iconClass:"closed-for-business"

    },
    {
        label: "set business hours",
        value: 3,
        iconClass:"set-business-hrs"


    }
]
    const selected={
    value:1,
        label:'Always open for Business',
        iconClass:"always-open-for-business"

}
const placement ='up'

describe("ReeachVueSelect Component", () => {
    // let wrapper;
    // beforeAll(() => {
    //     wrapper = shallowMount(ReeachVueSelect,{
    //         propsData: {
    //             options,
    //             selected,
    //             placement
    //         },
    //     });
    // });
    test("Check if component is a vue instance", () => {
        console.log("hello")

        // expect(wrapper.isVueInstance).toBeTruthy();
    });


    // test("It should have a name of ReeachVueSelect", () => {
    //     wrapper.vm.getOptionLabel();
    //
    //     expect( wrapper.name()).toBe("ReeachVueSelect");
    // });
    //
    // test("It should have a matching prop ", () => {
    //     console.log(wrapper.props().value)
    //     expect(wrapper.props().value).toBe('baz')
    // });

});