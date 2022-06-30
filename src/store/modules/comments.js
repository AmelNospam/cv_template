import axios from "@/plugins/axios";
import mutations from "../mutations";

const { GETTING_MESSAGES } = mutations;

const comments = {
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    [GETTING_MESSAGES](state, newlist) {
      state.list = newlist;
    },
  },
  getters: {
    getList: ({ list }) => {
      return list;
    },
  },
  actions: {
    async fetchComments({ commit, dispatch }) {
      try {
        dispatch("toggleLoader", true, { root: true });
        const response = await axios.get("?_limit=42");
        commit(GETTING_MESSAGES, response.data);
      } catch (err) {
        console.log(err);
      } finally {
        dispatch("toggleLoader", false, { root: true });
      }
    },
  },
};

export default comments;
