import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

Vue.use(Vuex);
const aStore = {
  state: {
    count: 1111111
  },
  mutations,
  actions,
  getters
};
export default new Vuex.Store({
  modules: {
    a: aStore
  }
});
export { aStore };
