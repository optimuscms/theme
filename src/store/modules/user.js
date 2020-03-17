const state = {
    data: null,
    // isLoading: false,
};

const getters = {
    data: state => state.data,
};

const mutations = {
    // startLoading(state) {
    //     state.isLoading = true;
    // },

    // stopLoading(state) {
    //     state.isLoading = false;
    // },

    setUserData(state, data) {
        state.data = data;
    },

    updateUserData(state, data) {
        state.data = {
            ...state.data,
            ...data,
        };
    },
};

const actions = {
    setUserData({ commit }, data) {
        commit('setUserData', data);
    },

    // fetch({ commit, state }) {
    //     if (! state.data && ! state.isLoading) {
    //         commit('startLoading');

    //         return axios.get('/admin/api/user').then(response => {
    //             commit('set', response.data.data);

    //             commit('stopLoading');
    //         });
    //     }
    // },

    update({ commit }, data) {
        commit('updateUserData', data);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
