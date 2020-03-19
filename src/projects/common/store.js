import Vue from "vue";
import Vuex from "vuex";
import { aStore } from "@/projects/Aproject/store";
import { bStore } from "@/projects/Bproject/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    a: aStore,
    b: bStore
  }
});
