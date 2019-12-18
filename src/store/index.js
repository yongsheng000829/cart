import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

function getItem(arr, id) {
  return arr.find(val => val.id == id);
}


export default new Vuex.Store({
  state: {
    tabData: [],
    tabIndex: 0,
    cartData: []
  },
  mutations: {
    setData(state, data) {
      state.tabData = data;
    },
    changeIndex(state, index) {
      state.tabIndex = index;
    },
    addCart(state, item) {
      let opt = getItem(state.cartData, item.id);
      if (opt) {
        alert('已经存在');
      } else {
        item.count++;
        state.cartData.push(item);
      }
    },
    changeCount(state, value) {
      let opt = getItem(state.cartData, value.id);
      if (value.type === 'add') {
        opt.count++;
      } else {
        if (opt.count < 1) {
          state.cartData = state.cartData.filter(val => val.id != value.id);
        } else {
          opt.count--;
        }
      }
    }
  },
  getters: {

  },
  actions: {
    getList({ commit }) {
      axios.get('/getData').then(res => {
        commit('setData', res.data);
      })
    }
  },
  modules: {
  }
})
