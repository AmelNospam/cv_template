import mutations from "../mutations";

const { ADD_BLOCK } = mutations;

const resume = {
  namespaced: true,
  state: {
    blocks: [],
  },
  getters: {
    getBlocks: ({ blocks }) => blocks,
    isEmptyList: ({ blocks }) => blocks.lenght === 0,
    listLenght: ({ blocks }) => blocks.lenght,
  },
  mutations: {
    [ADD_BLOCK](state, block) {
      state.blocks.push(block);
    },
  },
  actions: {
    addBlock({ commit }, block) {
      commit("ADD_BLOCK", block);
    },
  },
};
export default resume;
