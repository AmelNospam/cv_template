import { createStore } from "vuex";
import resume from "./modules/resume";
import comments from "./modules/comments";
import loader from "./modules/loader";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    resume,
    comments,
    loader,
  },
});
