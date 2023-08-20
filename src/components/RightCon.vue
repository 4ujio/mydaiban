<template>
  <div class="right_box">
    <h2>
      <b>{{ obj.title }}</b>

      <el-dropdown class="rightTop" trigger="click">
        <span class="el-dropdown-link">
          <svg
            t="1692346712012"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4915"
            width="18"
            height="18"
          >
            <path
              d="M221 592c-44.183 0-80-35.817-80-80s35.817-80 80-80 80 35.817 80 80-35.817 80-80 80z m291 0c-44.183 0-80-35.817-80-80s35.817-80 80-80 80 35.817 80 80-35.817 80-80 80z m291 0c-44.183 0-80-35.817-80-80s35.817-80 80-80 80 35.817 80 80-35.817 80-80 80z"
              fill="#dfdddd"
              p-id="4916"
            ></path>
          </svg>
        </span>
        <el-dropdown-menu class="dayy" slot="dropdown">
          <el-dropdown-item class="yy">隐藏已完成</el-dropdown-item>
          <el-dropdown-item class="yy">清理已完成</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </h2>
    <audio ref="audioPlayer">
      <source src="../assets/complete.mp3" type="audio/mpeg" />
    </audio>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        <p>
          <el-checkbox
            v-model="item.flag"
            @change="playSound(index)"
          ></el-checkbox>
          <textarea
            v-model="item.content"
            :class="item.flag ? 'active' : ''"
          ></textarea>
          <svg
            @click="delfun(index)"
            t="1692348677759"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="5980"
            width="16"
            height="16"
          >
            <path
              d="M847.743 223.953H640.639c-3.132-68.921-60.177-124.029-129.858-124.029s-126.726 55.108-129.858 124.029H173.256c-17.673 0-32 14.327-32 32s14.327 32 32 32h674.487c17.673 0 32-14.327 32-32s-14.327-32-32-32z m-336.962-60.03c34.379 0 62.689 26.426 65.718 60.029H445.064c3.029-33.603 31.338-60.029 65.717-60.029zM767.743 351.79c-17.673 0-32 14.327-32 32v478.173H288.256V383.79c0-17.673-14.327-32-32-32s-32 14.327-32 32v510.173c0 17.673 14.327 32 32 32h511.487c17.673 0 32-14.327 32-32V383.79c0-17.673-14.327-32-32-32z"
              fill="#7a7a7b"
              p-id="5981"
            ></path>
            <path
              d="M449.306 732.802V448.208c0-17.673-14.327-32-32-32s-32 14.327-32 32v284.593c0 17.673 14.327 32 32 32s32-14.326 32-31.999zM640.84 732.802V448.208c0-17.673-14.327-32-32-32s-32 14.327-32 32v284.593c0 17.673 14.327 32 32 32s32-14.326 32-31.999z"
              fill="#7a7a7b"
              p-id="5982"
            ></path>
          </svg>
        </p>
        <p>
          <el-date-picker
            id="dateinp"
            v-model="item.time"
            type="date"
            placeholder="-"
          >
          </el-date-picker>
        </p>
      </li>
    </ul>
    <div class="foo_add">
      <span>+</span>
      <input
        @keyup.enter="addfun"
        type="text"
        placeholder="添加任务"
        @focus="showScrollbar"
        @blur="elseScrollbar"
        v-model="inpval"
      />
      <b style="background: #1681ff; width: 0%" :class="scrflag ? 'er' : ''">
      </b>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrflag: false,
      datevalue: "-",
      isChecked: false,
      arr: [],
      obj: {},
      inpval: "",
      yyarr: [],
    };
  },
  methods: {
    delfun(index) {
      this.$confirm("此操作将永久删除该选项, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
          this.arr.splice(index, 1);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    showScrollbar() {
      this.scrflag = true;
    },
    elseScrollbar() {
      this.scrflag = false;
    },
    playSound(index) {
      // console.log(index);
      if (this.arr[index].flag) {
        this.$refs.audioPlayer.play();
      }
      this.arr[index].flag = !this.arr[index].flag;

      //进度
      let num = {
        alllength: this.yyarr.length,
        truelength: 0,
      };
      this.yyarr.forEach((item) => {
        if (item.flag) {
          num.truelength++;
        }
      });
      this.$bus.$emit("ylength", num);

      // this.$bus.$emit('length')
    },
    yyfun(data) {
      this.obj = data;
      this.arr = this.obj.data;
    },
    //所有
    allfun(data) {
      this.obj = {
        title: "所有",
        flag: true,
        state: false,
      };
      this.arr = data;
    },
    addindex(data) {
      this.index == data;
    },
    //添加
    addfun() {
      let obj = {
        content: this.inpval,
        flag: false,
        time: "2023-08-20",
      };
      this.arr.push(obj);
      this.inpval = "";
    },
    arrfun(data) {
      this.arr = data;
      this.yyarr = data;
    },
    souarr(data) {
      this.arr = data;
    },
    jintianfun(data) {
      this.arr = data;
    },
  },
  mounted() {
    this.$bus.$on("lifun", this.yyfun);
    //
    this.$bus.$on("index", this.allfun);
    this.$bus.$on("allarr", this.arrfun);
    this.$bus.$on("souarr", this.souarr);
    //今天
    this.$bus.$on("jintian", this.jintianfun);
  },
};
</script>

<style lang="scss" scoped>
.active {
  text-decoration: line-through !important;
  text-decoration-color: white !important;
}

.el-popper[x-placement^="bottom"] .popper__arrow::after {
  top: 1px;
  margin-left: -6px;
  border-top-width: 0;
  border-bottom-color: #3e3f40;
}
.dayy {
  background: #1d1e1f;
  width: 120px;
  border: none;
  box-shadow: 2px 2px 10px 3px rgba(0, 0, 0, 1);
}
.yy {
  height: 30px;
  line-height: 30px;
  color: #babdc4;
}
.yy:hover {
  background: rgba(0, 0, 0, 0);
  color: #395ec7;
}
.er {
  width: 100% !important;
}
.right_box {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  flex-flow: column;
  // align-items: center;
  ul {
    width: 94%;
    height: 84%;
    // background: skyblue;
    overflow: auto;
    li {
      padding: 0 12px;
      background: #1c1c1e;
      display: flex;
      flex-direction: column;
      border-radius: 6px;
      margin-bottom: 8px;
      p {
        display: block;
        padding: 3px 0;
        height: 30px;
        display: flex;
        align-items: center;
        textarea {
          width: 92%;
          height: 30px;
          color: #999999;
          background-color: transparent;
          font-size: 14px;
          resize: inherit;
          margin-left: 10px;
          border: none;
          outline-style: none;
          line-height: 30px;
        }
        svg {
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
      }
      p:last-child {
        height: 20px;
        padding-left: 20px;
      }
    }
  }
  /* 定制滚动条样式 */
  ul::-webkit-scrollbar {
    width: 4px;
    height: 30px;
  }

  ul::-webkit-scrollbar-thumb {
    background-color: gray; /* 滚动条颜色 */
  }

  ul::-webkit-scrollbar-track {
    background-color: transparent; /* 轨道背景颜色 */
  }
  h2 {
    width: 94%;
    height: 50px;
    background: #16161a;
    color: white;
    display: flex;
    align-items: center;
    font-size: 20px;
    position: relative;
    .rightTop {
      position: absolute;
      right: 100px;
    }
  }
  .foo_add {
    position: relative;
    position: absolute;
    bottom: 3%;
    background: #1c1c1e;
    // background: red;
    color: #7d7c7d;
    // background: red;
    display: flex;
    align-items: center;
    height: 46px;
    width: 94%;
    border-radius: 8px 8px 2px 2px;
    font-size: 30px;

    span {
      display: block;
      height: 40px;
      line-height: 32px;
      margin-left: 10px;
      margin-right: 5px;
    }
    input {
      width: 80%;
      height: 40px;
      outline-style: none;
      border: none;
      background: rgba(0, 0, 0, 0);
      color: #7d7c7d;
    }
    b {
      display: block;
      width: 100%;
      height: 1px;
      overflow: hidden;
      position: absolute;
      bottom: 0;
      transition: all 0.2s ease-in-out;
      // margin-top: 120px;
    }
  }
}
textarea {
  font-family: Arial, sans-serif !important;
  font-weight: bold;
}
</style>
