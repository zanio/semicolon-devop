<template>
  <div :class="[placement,'select']" v-outsideClick="onSearchBlur">
    <div :class="[isUp?'up':'down','input-control arrow']">
      <span
          :style="{ background: value.iconClass==='set-business-hrs'? 'url(' + require('@/assets/set_image_hrs.svg') + ')':'',
            backgroundRepeat: value.iconClass==='set-business-hrs'? 'no-repeat':''
            }"
          :class="value.iconClass+ ' mx-3'"></span>
        <input :style="{paddingLeft: value.iconClass==='set-business-hrs'?'60px':''}"
               class="select-input" type="text" :value="getOptionLabel(value)" @focus="onSearchFocus" readonly>
    </div>
    <div class="dropMenu" v-if="isShowList">
      <ul>
        <li :class="[
           checkIfActive(item,value) && 'active',
           !checkIfActive(item,value) && 'not-active',
           !checkIfActive(item,value) && item.value===1 &&'active-first',
        ]" :style="{paddingLeft: item.iconClass==='set-business-hrs'&&'41px'}"
            v-for="(item,index) in option" :key="index" @click="select(item)"><span
            :class="item.iconClass+' ' "
           :style="{ background: item.iconClass==='set-business-hrs'? 'url(' + require('@/assets/set_image_hrs.svg') + ')':'',
            //background-repeat: no-repeat
            backgroundRepeat: item.iconClass==='set-business-hrs'? 'no-repeat':''
            }"
            ></span>{{item.label}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "ReeachVueSelect",
  props: {
    option: {
      type: Array,
      default: []
    },
    value: {
      default: ""
    },
    label: {
      type: String,
      default: "label"
    },
    val: {
      type: String,
      default: "value"
    },
    placement: {
      type: String,
      default: 'bottom'
    }
  },
  data() {
    return {
      isShowList: false,
      isUp: false
    };
  },
  methods: {
    select: function(item) {
      this.onSearchBlur();
      this.$emit("input", item);
    },
    getOptionLabel: function(option) {
      console.log(this.options);
      if (typeof option == "object") {
        if (!option.hasOwnProperty(this.label)) {
          return console.warn(
              `Label key "option.${this.label}" does not exist`
          );
        }
        if (this.label && option[this.label]) {
          return option[this.label];
        }
      }
      if (typeof option == "string") {
        let obj = this.options.filter(item => option == item[this.val]);
        if (obj.length) {
          return obj[0][this.label];
        }
        return options[0][this.label];
      }
      return option;
    },
    onSearchFocus: function() {
      this.isShowList = true;
      this.isUp = !this.isUp;
    },
    onSearchBlur: function() {
      if(this.isShowList) {
        this.isUp = !this.isUp;
        this.isShowList = false;
      }
    },
    checkIfActive(item,value){
      return this.getOptionLabel(item) === this.getOptionLabel(value);
    }
  },
  mounted(){
    console.log(this.option.value)

  },
  directives: {
    outsideClick: {
      inserted: function(el,binding) {
        function documentHandler(e){
          if(el.contains(e.target)){
            return false;
          }
          if(binding.expression){
            binding.value(e)
          }
        }
        el.__outsideClick__ = documentHandler
        document.addEventListener('click',documentHandler)

      },
      unbind: function(el,binding) {
        document.removeEventListener('click',el.__outsideClick__)
        delete el.__outsideClick__
      }
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
.active {
  background: rgba(235, 87, 87, 0.37);
  color: #ffffff;
  position: relative;
}
.active::after {
  border-bottom: 1px solid #828282;
  content: "";
  position: absolute;
  top: 97%;
  left: 5%;
  //bottom: 50%;
  margin: 0 auto;
  width: 85%;
  //right
}
li.active-first{
  position: relative;
}
li.active-first:nth-of-type(1)::after {
  border-bottom: 1px solid #ffffff;
  content: "";
  position: absolute;
  top: 98%;
  left: 5%;
  //bottom: 50%;
  margin: 0 auto;
  width: 85%;
  //right
}
.select {
  position: relative;
  display: inline-block;
  min-width: 250px;
  height: 50px;
  z-index: 9999;
  line-height: 50px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 14px;
}
.select::after{
  content: "";
  clear:both;
}
input {
  width:100%;
  box-sizing: border-box;
  //border:1px solid rgba(60, 60, 60, .26);
  outline: none;
  cursor: pointer !important;
  background-color: #fff;
  color: #000000;
}
.input-control::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
}

.arrow.input-control::after {
  border: solid black;
  border-width: 0 1.6px 1.6px 0;
  display: inline-block;
  padding: 5px;
  margin-top: -10px;
}
.down.input-control::after {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
}
.up.input-control::after {
  transform: rotate(-135deg);
  margin-bottom: 7px;
  -webkit-transform: rotate(-135deg);
}
.dropMenu {
  min-width: 250px;
  margin-Top: 14px;
  box-sizing: border-box;
  position: absolute;
  top:50px;
  background: #A6A6A6;
  z-index: 20;
  font-weight: bold;
  font-size: 12px;

}
.dropMenu ul {
  list-style: none;
  padding: 0 !important;
  margin: 0;


}
.dropMenu li:nth-of-type(2),
.dropMenu li:nth-of-type(3),
.dropMenu li:nth-of-type(4){
  padding-top: 8px !important;
 position: relative;

}
.note-active{
  position: relative;

}
.not-active::after,
{
  border-bottom: 1px solid #FFFFFF;
  content: "";
  position: absolute;
  top: 100%;
  left: 5%;
  //bottom: 50%;
  margin: 0 auto;
  width: 85%;
  //right
}
.dropMenu li
{
  cursor: pointer;
  font-size: 14px;
  padding-top: 0;
  padding-left: 17px;
  padding-right: 17px;
  color: #FFFFFF;
  white-space: nowrap;
  transition: background .2s ease-in-out;
}
.dropMenu li:hover {
  background: rgba(235, 87, 87, 0.17);
}
.always-open-for-business{
  background: #03DAC5;
  width: 10px;
  padding: 0 10px;
  height: 10px;
  margin-right: .4rem;

}
.open-for-business{
  background: #03DAC5;
  width: 12px;
  height: 12px;
  padding: 0 8px;
  //content: "";
  margin-right: .4rem;
  border-radius: 50%;

}
.closed-for-business{
  background: #EB4335;
  width: 12px;
  height: 12px;
  padding: 0 8px;
  //content: "";
  margin-right: .4rem;
  border-radius: 50%;
}
.set-business-hrs{
 //padding: 19px;
 // width: 20px;
 // height: 20px;
  line-height: 10px;
  position: absolute;
  left: 6%;
  top: 40%;
  padding: 10px;
  padding-right: 3rem !important;

  .pd-left-25{
    padding-left: 25px !important;
  }
}
</style>

<!--ReeachVueSelect-->