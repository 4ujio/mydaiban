<template>
  <div :id="!bigflag ? 'xiao' : 'da'" class="box">
    <span class="icons" style="z-index: 99999999">
      <b @click="bigflag = !bigflag">
        <svg
          v-show="!bigflag"
          t="1691743488525"
          class="icon"
          viewBox="0 0 1026 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="8451"
          width="16"
          height="16"
        >
          <path
            d="M163.2 94.08a48 48 0 0 0-67.84 0 48 48 0 0 0 0 67.84l67.84-67.84z m145.28 279.04a48 48 0 0 0 67.84 0 48 48 0 0 0 0-67.84L308.48 373.12z m-213.12-211.2l213.12 211.2 67.84-67.84-213.12-211.2-67.84 67.84zM95.36 859.52a48 48 0 0 0 67.84 68.48l-67.84-68.48z m280.96-142.72a48 48 0 0 0-67.84-68.48l67.84 68.48z m-213.12 211.2l213.12-211.2-67.84-68.48-213.12 211.2 67.84 68.48zM863.36 928a48 48 0 0 0 67.84-67.84l-67.84 67.84z m-143.36-279.04a47.36 47.36 0 0 0-67.84 0 48 48 0 0 0 0 67.84l67.84-67.84z m211.2 211.2l-211.2-211.2-67.84 67.84 211.2 211.2 67.84-67.84zM929.28 161.92a48 48 0 0 0 0-67.84 49.28 49.28 0 0 0-68.48 0l68.48 67.84z m-279.68 143.36a48 48 0 0 0 0 67.84 49.28 49.28 0 0 0 68.48 0l-68.48-67.84z m211.2-211.2l-211.2 211.2 68.48 67.84 211.2-211.2-68.48-67.84z"
            fill="#e6e6e6"
            p-id="8452"
          ></path>
          <path
            d="M704 80a48 48 0 0 0 0 96v-96zM896 128h48a48.64 48.64 0 0 0-48-48V128z m-48 192a48 48 0 0 0 96 0zM704 176h192v-96h-192v96zM849.28 128v192h96V128zM945.28 704a48 48 0 0 0-96 0zM896 896v48a48.64 48.64 0 0 0 48-48z m-192-48a48 48 0 0 0 0 96v-96zM849.28 704v192h96v-192z m46.72 144h-192v96h192v-96zM320 944a48 48 0 0 0 0-96v96zM128 896h-46.72a48 48 0 0 0 48 48V896z m48-192a48 48 0 0 0-96 0zM320 848H128v96h192v-96zM177.28 896v-192h-96v192zM81.28 320a48 48 0 0 0 96 0zM128 128v-48a48 48 0 0 0-46.72 48z m192 48a48 48 0 0 0 0-96v96zM177.28 320V128h-96v192zM128 176h192v-96H128v96z"
            fill="#e6e6e6"
            p-id="8453"
          ></path>
        </svg>
        <svg
          v-show="bigflag"
          t="1691744717898"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="10597"
          width="16"
          height="16"
        >
          <path
            d="M887.44 583.9H136.56c-39.71 0-71.9-32.19-71.9-71.9s32.19-71.9 71.9-71.9h750.87c39.71 0 71.9 32.19 71.9 71.9s-32.19 71.9-71.89 71.9z"
            fill="#dbdbdb"
            p-id="10598"
          ></path>
        </svg>
      </b>
      <b>
        <svg
          t="1691743735517"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="9558"
          width="16"
          height="16"
        >
          <path
            d="M567.168 512l189.184 188.352a40.064 40.064 0 0 1 0.768 55.68 37.76 37.76 0 0 1-54.4 0.832L512 566.912l-190.72 189.952a37.76 37.76 0 0 1-54.4-0.768 40.064 40.064 0 0 1 0.768-55.68L456.832 512 267.648 323.648a40.064 40.064 0 0 1-0.768-55.68 37.76 37.76 0 0 1 54.4-0.832L512 457.088l190.72-189.952a37.76 37.76 0 0 1 54.4 0.768 40.064 40.064 0 0 1-0.768 55.68L567.168 512z"
            fill="#dbdbdb"
            p-id="9559"
          ></path>
        </svg>
      </b>
    </span>
    <div :class="!bigflag ? 'box_left_xiao' : 'box_left_da'">
      <LeftNav />
    </div>
    <div
      style="position: relative"
      :class="!bigflag ? 'box_right_xiao' : 'box_right_da'"
    >
      <RightCon />
    </div>
    <div style="width: 100%" class="foo">
      <el-progress
        :percentage="num"
        :show-text="false"
        define-back-color="rgba(0,0,0,0)"
      ></el-progress>
    </div>
  </div>
</template>

<script>
//a：分子，b：分母

function calcPercent(a, b) {
  var c = (a / b) * 100;

  return Math.min(100, Math.max(1, c));
}
//左侧导航
import LeftNav from "../components/LeftNav.vue";
//右侧]
import RightCon from "../components/RightCon.vue";

import arr from "../assets/app.json";
export default {
  data() {
    return {
      bigflag: false,
      arr: [],
      num: 0,
    };
  },
  methods: {
    alllength(obj) {
      if (obj.truelength == 0) {
        this.num = 0;
      } else {
        this.num = calcPercent(obj.truelength, obj.alllength);
      }
    },
  },
  mounted() {
    this.lenght = 0;
    this.arr = arr;
    let newarr = [];
    let allnum = 0,
      truenum = 0;
    this.arr.forEach((item) => {
      for (let i = 0; i < item.data.length; i++) {
        allnum++;
        if (item.data[i].flag) {
          truenum++;
        }
        this.num = calcPercent(truenum, allnum);
        newarr.push(item.data[i]);
      }
    });
    this.$bus.$emit("allarr", newarr);
    this.$bus.$on("ylength", this.alllength);
  },
  watch: {
    // arr: {
    //   handler(news, odl) {
    //     console.log(news, odl);
    //   },
    // },
  },
  components: {
    LeftNav,
    RightCon,
  },
};
</script>

<style lang="scss" scoped>
.foo {
  width: 100%;
  position: absolute;
  bottom: 0;
}
.box_left_xiao {
  width: 20%;
  height: 100%;
  background: #1c1c1e;
}
.box_left_da {
  width: 12%;
  height: 100%;
  background: #1c1c1e;
}
.box_right_xiao {
  width: 80%;
  height: 100%;
}
.box_right_da {
  width: 88%;
  height: 100%;
}
//头部
#box {
  width: 96%;
  height: 32px;
  margin: auto;
  padding-top: 50px;
  position: relative;
  z-index: -1;
  border-bottom: 3px solid #414243;
  color: white;
  overflow: hidden;
}
#xiao {
  width: 1100px !important;
  height: 650px !important;
  border-radius: 6px !important;
}
#da {
  width: 100vw !important;
  height: 100vh !important;
}
.box {
  background: #16161a;
  position: relative;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.2s;
  display: flex;
  overflow: hidden;

  .icons {
    display: block;
    display: flex;
    flex-direction: row;
    width: 55px;
    justify-content: space-between;
    position: absolute;
    right: 5px;
    top: 8px;
    b {
      display: block;
      width: 25px;
      height: 25px;
      background: #49494b;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s;
      svg {
        width: 14px;
        height: 14px;
      }
    }
    b:nth-child(1):hover {
      background: #a4a4a5 !important;
    }
    b:nth-child(2):hover {
      background: #e81123 !important;
    }
  }
}
</style>
