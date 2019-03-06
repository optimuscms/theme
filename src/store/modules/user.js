const state = {
    data: {}
};

const getters = {
    data: state => state.data
};

const mutations = {
    set(state, data) {
        state.data = data;
    },

    update(state, data) {
        state.data = { ...state.data, ...data };
    }
};

const actions = {
    fetch({ commit }) {
        return new Promise((resolve, reject) => {
            axios.get('/admin/api/user').then(response => {
                commit('set', response.data.data);

                resolve();
            });
        });
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
