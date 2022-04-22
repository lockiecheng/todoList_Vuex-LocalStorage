// 官网上的store，===》引入vuex
// 创建vuex中的核心store
import Vue from "vue";
import Vuex from "vuex";
import { nanoid } from "nanoid";

Vue.use(Vuex); // 在创建store之前引入vuex

// 准备actions--用于相应组件中的动作
const actions = {
  // 逻辑判断
  addTodo: function (context, value) {
    if (value.trim() !== "") {
      context.commit("ADDTODO", value);
    } else {
      alert("输入不可以为空");
    }
  },
  saveTodo: function (context, value) {
    if (value.newStr.trim() !== "") {
      context.commit("SAVETODO", value);
    } else {
      alert("输入不可以为空");
    }
  },
  delDoneList: function (context) {
    // 判断是否有要清除的
    let countNumber = 0;
    for (var i = 0; i < state.itemData.length; i++) {
      if (state.itemData[i].done) countNumber++;
    }
    if (countNumber > 0) {
      context.commit("DELDONELIST");
    } else {
      alert("没有需要清除的已完成事项");
    }
  },
};

const mutations = {
  // 动作执行，添加itemData,value就是input框的值
  ADDTODO: function (state, value) {
    const newObj = {
      id: nanoid(),
      title: value,
      done: false,
      edit: false,
    };
    state.itemData.unshift(newObj);
    // 保存数据到localstorage
    localStorage.setItem("itemData", JSON.stringify(state.itemData));
  },
  DELTODO: function (state, value) {
    // value是id
    state.itemData = state.itemData.filter((element) => {
      return element.id !== value;
    });
    // 保存数据到localstorage
    localStorage.setItem("itemData", JSON.stringify(state.itemData));
  },
  UPDATEDONE: function (state, value) {
    state.itemData.forEach((element) => {
      if (element.id === value.id) element.done = value.status;
    });
    // 保存数据到localstorage
    localStorage.setItem("itemData", JSON.stringify(state.itemData));
  },
  EDITTODO: function (state, value) {
    state.itemData.forEach((element) => {
      if (element.id === value) {
        element.edit = !element.edit;
      }
    });
    // 保存数据到localstorage
    localStorage.setItem("itemData", JSON.stringify(state.itemData));
  },
  SAVETODO: function (state, value) {
    state.itemData.forEach((element) => {
      if (element.id === value.id) {
        element.title = value.newStr;
        element.edit = false; // 一旦失去焦点，就让其置为false
      }
    });
    // 保存数据到localstorage
    localStorage.setItem("itemData", JSON.stringify(state.itemData));
  },
  TOGGLELIST: function (state, value) {
    state.itemData = JSON.parse(localStorage.getItem("itemData")) || [];
    if (value === 1) {
      state.itemData = state.itemData.filter((element) => {
        return !element.done;
      });
    } else if (value === 2) {
      state.itemData = state.itemData.filter((element) => {
        return element.done;
      });
    }
    // 改变按钮颜色，排它算法
    for (var i = 0; i < state.buttonType.length; i++) {
      state.buttonType[i].btnStyle = "";
    }
    state.buttonType[value].btnStyle = "primary";
  },

  DELDONELIST: function (state) {
    state.itemData = JSON.parse(localStorage.getItem("itemData")) || [];
    state.itemData = state.itemData.filter((element) => {
      return !element.done;
    });
    localStorage.setItem("itemData", JSON.stringify(state.itemData));
  },
};

// todoList数据
const state = {
  itemData: JSON.parse(localStorage.getItem("itemData")) || [], // 一开始要从localstorage中提取
  buttonType: [
    {
      btnStyle: "primary",
      title: "全部",
    },
    {
      btnStyle: "",
      title: "未完成",
    },
    {
      btnStyle: "",
      title: "已完成",
    },
  ],
};

const getters = {};

// 创建store
const store = new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
});

export default store;
