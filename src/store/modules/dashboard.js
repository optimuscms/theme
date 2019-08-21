const state = {
    title: '',
    sideIsVisible: false,
};

const getters = {
    title: state => state.title,

    sideIsVisible: state => state.sideIsVisible,
};

const mutations = {
    setTitle(state, title) {
        state.title = title;
    },

    openSide(state) {
        state.sideIsVisible = true;
    },

    closeSide(state) {
        state.sideIsVisible = false;
    },
};

const actions = {
    setTitle({ commit }, title) {
        commit('setTitle', title);
    },

    toggleSide({ commit, state }) {
        if (state.sideIsVisible) {
            return commit('closeSide');
        }

        return commit('openSide');
    },

    closeSide({ commit }) {
        commit('closeSide');
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
