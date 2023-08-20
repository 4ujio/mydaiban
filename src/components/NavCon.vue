<template>
  <div class="nav_con">
    <ul>
      <li
        @click="lifun(item)"
        :class="!item.flag ? '' : 'li_active'"
        v-for="item in arr"
        :key="item.id"
      >
        <b v-show="item.flag"></b>
        <a>
          <svg
            t="1692262606730"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="22201"
            width="14"
            height="14"
          >
            <path
              d="M861.090909 256H337.454545a34.909091 34.909091 0 0 1 0-69.818182H861.090909a34.909091 34.909091 0 0 1 0 69.818182z m0 290.909091H337.454545a34.909091 34.909091 0 0 1 0-69.818182H861.090909a34.909091 34.909091 0 0 1 0 69.818182zM861.090909 837.818182H337.454545a34.909091 34.909091 0 0 1 0-69.818182H861.090909a34.909091 34.909091 0 0 1 0 69.818182zM209.454545 221.090909a34.909091 34.909091 0 1 1-69.841454-0.023273A34.909091 34.909091 0 0 1 209.454545 221.090909zM209.454545 512a34.909091 34.909091 0 1 1-69.841454-0.023273A34.909091 34.909091 0 0 1 209.454545 512z m0 290.909091a34.909091 34.909091 0 1 1-69.841454-0.023273A34.909091 34.909091 0 0 1 209.454545 802.909091z"
              fill="#a7acb1"
              p-id="22202"
            ></path>
          </svg>
        </a>
        <span
          v-show="!item.state"
          style="width: 70%"
          @dblclick="xiutitle(item)"
          >{{ item.title }}</span
        >
        <input
          v-show="item.state"
          @blur="xiugaifun(item)"
          type="text"
          v-model="inpval"
          style="
            background-color: rgba(0, 0, 0, 0);
            border: none;
            outline-style: none;
            color: black;
            margin-left: 10px;
          "
        />

        <p>
          <i style="font-style: normal">{{ ffun(item) }}</i>
          <svg
            @click="delli(item.id)"
            t="1692264914926"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="26735"
            width="16"
            height="16"
          >
            <path
              d="M713.1 914.3H309.9c-51.5 0-93.4-41.7-93.4-92.7V262.1c0-17.2 13.9-31.1 31.1-31.1h527.9c17.2 0 31.1 13.9 31.1 31.1v559.4c-0.1 51.2-41.9 92.8-93.5 92.8z m-434.4-621v528.3c0 16.9 13.9 30.5 31.1 30.5h403.3c17.2 0 31.1-13.7 31.1-30.5V293.3H278.7z m0 0"
              p-id="26736"
              fill="#a7acb1"
            ></path>
            <path
              d="M864.3 293.3H158.6c-17.2 0-31.1-13.9-31.1-31.1s13.9-31.1 31.1-31.1h705.7c17.2 0 31.1 13.9 31.1 31.1 0.1 17-13.9 31.1-31.1 31.1z m0 0"
              p-id="26737"
              fill="#a7acb1"
            ></path>
            <path
              d="M667.1 293.3H355.8c-9.9 0-19.2-4.7-25-12.7-5.9-8-7.6-18.2-4.7-27.6l38.8-126.2c4.1-13.1 16.1-22 29.7-22h233.5c13.7 0 25.7 8.9 29.7 22l39 126.2c2.9 9.4 1.2 19.7-4.7 27.6-5.8 8-15 12.7-25 12.7zM398 231h227l-19.7-64H417.7L398 231z m30.5 538.9c-17.2 0-31.1-13.9-31.1-31.1V406.5c0-17.2 13.9-31.1 31.1-31.1 17.2 0 31.1 13.9 31.1 31.1v332.1c-0.1 17.2-14 31.3-31.1 31.3z m166 0c-17.2 0-31.1-13.9-31.1-31.1V406.5c0-17.2 13.9-31.1 31.1-31.1 17.2 0 31.1 13.9 31.1 31.1v332.1c0.1 17.2-14 31.3-31.1 31.3z m0 0"
              p-id="26738"
              fill="#a7acb1"
            ></path>
          </svg>
        </p>
      </li>
    </ul>
    <div class="addbtn"><button @click="addfun">＋新建列表</button></div>
  </div>
</template>

<script>
import arr from "../assets/app.json";
export default {
  data() {
    return {
      arr: [],
      inpval: "",
      flags: true,
    };
  },
  mounted() {
    this.arr = arr;
    this.$bus.$on("onefun", this.flag);
  },
  methods: {
    ffun(data) {
      let num = 0;
      data.data.forEach((item) => {
        if (item.flag == false) {
          num++;
        }
      });
      return num;
    },
    flag(data) {
      this.arr.forEach((item) => {
        item.flag = data;
      });
    },
    //修改事件名
    xiutitle(data) {
      console.log(data);
      data.state = true;
      this.inpval = data.title;
    },
    //失去焦点修改
    xiugaifun(data) {
      data.state = false;
      data.title = this.inpval;
    },
    //tab切换
    lifun(data) {
      //添加数字组的下标
      this.$bus.$emit("flag", false);
      this.$bus.$emit("lifun", data);
      this.arr.forEach((item, index) => {
        if (data.id == index) {
          item.flag = true;
        } else {
          item.flag = false;
        }
      });
    },
    //添加任务列表
    addfun() {
      let obj = {
        id: this.arr[this.arr.length - 1].id + 1,
        title: "待办事件",
        flag: false,
        state: false,
        data: [],
      };
      this.arr.push(obj);
    },
    delli(index) {
      this.arr.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
/* 定制滚动条样式 */
.nav_con::-webkit-scrollbar {
  width: 3px;
  height: 30px;
}

.nav_con::-webkit-scrollbar-thumb {
  background-color: gray; /* 滚动条颜色 */
}

.nav_con::-webkit-scrollbar-track {
  background-color: transparent; /* 轨道背景颜色 */
}
.addbtn:hover {
  color: #e9e9e9 !important;
}
.nav_con {
  position: relative;
  height: 68%;
  overflow: auto;
  /* 滚动条的轨道 */

  .addbtn {
    padding-bottom: 15px;
    // position: absolute;
    position: fixed;
    bottom: 0;
    button {
      color: #bbbbbc;
      font-size: 15px;
      cursor: pointer;
      background: none;
      border: none;
    }
  }
  ul {
    width: 100%;
    list-style: none;
    .li_active {
      background: #1b2835 !important;
    }

    li {
      width: 100%;
      height: 25px;
      padding: 5px 0;
      border-radius: 9px;
      transition: all 0s ease;
      margin-top: 5px;
      display: flex;
      align-items: center;
      position: relative;
      b {
        position: absolute;
        left: 0;
        display: block;
        height: 16px;
        width: 3px;
        border-radius: 3px;
        background: #1890ff;
      }
      a {
        margin-left: 10px;
      }

      span {
        color: #545454;
        font-size: 15px;
        margin-left: 10px;
      }
      p {
        position: relative;
        position: absolute;
        right: 10px;
        color: #acbfa8;
        font-size: 15px;
        cursor: pointer;

        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
        svg {
          position: absolute;
          left: -16px;
          top: -7px;
          display: none;
        }
      }
    }
    li:hover {
      background: #1b2835 !important;
      p {
        i {
          display: none;
        }
        svg {
          display: block;
        }
      }
    }
  }
}
</style>
