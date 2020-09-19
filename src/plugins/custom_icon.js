import Bell from "../components/icons/Bell";
import Chevron from "../components/icons/chevron-down";
import DropDownIcon from "@/components/customIcon/DropDownIcon";
import ChatIcon from "@/components/customIcon/ChatIcon";
import PhoneCall from "@/components/customIcon/PhoneCall.vue";
import Emoji from "@/components/customIcon/Emoji.vue";
import VOIP from "@/components/customIcon/VOIP.vue";
import arrow_down from "@/components/customIcon/arrow_down";
import Analytics from "@/components/customIcon/Analytics";
import channel_management from "@/components/customIcon/channel_management";
import editProduct from "@/components/customIcon/EditProduct";
import Help from "@/components/customIcon/Help";
import MultipleOutlet from "@/components/customIcon/MultipleOutlet";
import Payment from "@/components/customIcon/Payment";
import Settings from "@/components/customIcon/Settings";
import TeamManagement from "@/components/customIcon/TeamManagement";
import ShareWithMobile from "@/components/customIcon/ShareWithMobile";
import ExpandLess from "@/components/customIcon/ExpandLess";

const  values= {
    emojiCustom: {
        component:Emoji
    },
    phoneCall:{
        component:PhoneCall
    },
    bell: {
        // name of our custom icon
        component: Bell // our custom component
    },
    dropdown: {
        // name of our custom icon
        component: Chevron, // our custom component
    },
    "dropdown_arrow": {
        component: DropDownIcon
    },
    chat:{
        component:ChatIcon
    },
    arrow_down:{
        component:arrow_down
    },
    voip: {
        component:VOIP
    },
    analytic: {
        component:Analytics
    },
    editProduct:{
        component: editProduct
    },

    channel_management:{
        component: channel_management
    },

    help:{
        component: Help
    },
    multiple_outlet:{
        component: MultipleOutlet
    },
    payment:{
        component: Payment
    },
    settings:{
        component: Settings
    },
    team_management:{
        component:TeamManagement
    },
    share_with_mobile_view:{
        component:ShareWithMobile
    },
    expanded_less_arrow:{
        component:ExpandLess
    },

}

export default values;
