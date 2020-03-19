import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);
const bStore = {
  state: {
    count: 2222
  },
  mutations,
  actions,
  getters
};
export default new Vuex.Store({
  modules: {
    b: bStore
  }
});
export { bStore };
