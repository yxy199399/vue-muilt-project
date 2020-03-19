import * as ALL from "./mutation-types";
const mutations = {
  [ALL.COUNT](state, userInfo) {
    state.count = userInfo;
  }
};
export default mutations;
