const state = {
    isOpen: false,
    item: null
};

const getters = {
    isOpen: state => state.isOpen,

    getItem: state => state.item
};

const mutations = {
    setItem(state, item) {
        state.item = item;
    },

    open(state) {
        state.isOpen = true;
    },

    close(state) {
        state.isOpen = false;
    }
};

const actions = {
    open({ commit}, item = null) {
        commit('setItem', item);
        commit('open');
    },

    close({ commit }) {
        commit('setItem', null);
        commit('close');
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
