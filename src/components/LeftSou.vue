<template>
  <div style="border-bottom: 1px solid rgba(255, 255, 255, 0.1)">
    <input
      type="text"
      v-model="souvalue"
      class="sou_inp"
      placeholder="search"
      @keyup="soufun"
    />
    <ul>
      <li :class="index == 0 ? 'li_active' : ''" @click="onefun(0)">
        <b v-show="index == 0"></b>
        <a>
          <svg
            t="1692259747339"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="13895"
            width="14"
            height="14s"
          >
            <path
              d="M32 32v960h960V32H32z m64 64h384v384H96V96z m0 832V544h384v384H96z m832 0H544V544h384v384z m0-448H544V96h384v384z"
              fill="#a7acb1"
              p-id="13896"
            ></path></svg
          >`
        </a>
        <span>所有</span>
        <p>{{ all }}</p>
      </li>
      <li :class="index == 1 ? 'li_active' : ''" @click="onefun(1)">
        <b v-show="index == 1"></b>
        <a>
          <svg
            t="1692260760802"
            class="icon"
            viewBox="0 0 1109 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="15006"
            width="14"
            height="14"
          >
            <path
              d="M912.810667 0a192 192 0 0 1 192 192v640a192 192 0 0 1-192 192h-640a192 192 0 0 1-192-192v-640A192 192 0 0 1 272.810667 0h640z m0 96h-640a96 96 0 0 0-96 94.464V832c0 52.48 42.154667 95.146667 94.464 96h641.536a96 96 0 0 0 96-94.464V192a96 96 0 0 0-94.378667-96h-1.621333zM392.789333 256h400.042667c7.338667 0 13.312 5.973333 13.312 13.312v58.709333c0 7.338667-5.973333 13.312-13.312 13.312H392.789333a13.312 13.312 0 0 1-13.312-13.312v-58.709333c0-7.338667 5.973333-13.312 13.397334-13.312z m0 426.666667h400.042667c7.338667 0 13.312 5.973333 13.312 13.312v58.709333c0 7.338667-5.973333 13.312-13.312 13.312H392.789333a13.312 13.312 0 0 1-13.312-13.312v-58.709333c0-7.338667 5.973333-13.312 13.397334-13.312z m242.688-413.354667v314.709333c0 7.338667-5.973333 13.312-13.312 13.312h-58.709333a13.312 13.312 0 0 1-13.312-13.397333V269.312c0-7.338667 5.973333-13.312 13.397333-13.312h58.624c7.338667 0 13.312 5.973333 13.312 13.312z"
              fill="#a7acb1"
              p-id="15007"
            ></path>
          </svg>
        </a>
        <span>今天</span>
        <p>0</p>
      </li>
      <li :class="index == 2 ? 'li_active' : ''" @click="onefun(2)">
        <b v-show="index == 2"></b>
        <a>
          <svg
            t="1692259747339"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="13895"
            width="14"
            height="16"
          >
            <path
              d="M32 32v960h960V32H32z m64 64h384v384H96V96z m0 832V544h384v384H96z m832 0H544V544h384v384z m0-448H544V96h384v384z"
              fill="#a7acb1"
              p-id="13896"
            ></path>
          </svg>
        </a>
        <span>近七天</span>
        <p>0</p>
      </li>
    </ul>
  </div>
</template>

<script>
import arr from "../assets/app.json";
export default {
  data() {
    return {
      index: 0,
      arr: [],
      souvalue: "",
      twoarr: [],
    };
  },
  watch: {
    arr(newValue) {
      this.arr = newValue;
      // console.log(newValue);
    },
    index(newValue) {
      if (newValue == 0) {
        let arr = [];
        this.arr.forEach((item) => {
          for (let i = 0; i < item.data.length; i++) {
            if (item.data[i].flag == false) {
              arr.push(item.data[i]);
            }
          }
        });
        this.$bus.$emit("index", arr);
      }
    },
  },
  computed: {
    all() {
      let num = 0;
      this.arr.forEach((item) => {
        for (let i = 0; i < item.data.length; i++) {
          if (item.data[i].flag == false) {
            num++;
          }
        }
      });
      return num;
    },
  },
  methods: {
    soufun() {
      let data = [];
      this.twoarr.forEach((item) => {
        for (let i = 0; i < item.data.length; i++) {
          if (item.data[i].content.includes(this.souvalue)) {
            data.push(item.data[i]);
            this.$bus.$emit("souarr", data);
          }
        }
      });
      this.arr = data;
    },
    onefun(num) {
      this.index = num;
      this.$bus.$emit("onefun", false);

      if (num == 1) {
        let data = [];
        //获取当前日期
        const today = new Date();

        const year = today.getFullYear();
        const month = today.getMonth() + 1; // 注意月份从 0 开始，所以需要加 1
        const day = today.getDate();

        this.twoarr.forEach((item) => {
          for (let i = 0; i < item.data.length; i++) {
            if (item.data[i].time == `${year}-0${month}-${day}`) {
              data.push(item.data[i]);
              this.$bus.$emit("jintian", data);
            }
          }
        });
      }
    },
    flags() {
      this.index = -1;
    },
  },
  mounted() {
    this.twoarr = arr;
    this.arr = arr;
    this.$bus.$on("flag", this.flags);
  },
};
</script>

<style lang="scss" scoped>
.sou_inp {
  width: 99.3%;
  height: 32px;
  border-radius: 9px;
  text-indent: 10px;
  background: #25252c;
  border: none;
  border: 1px solid rgba(0, 0, 0, 0);
  transition: all 0.2s ease;
}
.sou_inp:hover {
  border: 1px solid #6c6e72 !important;
}
ul {
  padding: 5px 0;
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
      position: absolute;
      right: 10px;
      color: #acbfa8;
      font-size: 15px;
      cursor: pointer;
      font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
        sans-serif;
    }
  }
  li:hover {
    background: #1b2835 !important;
  }
}
</style>
