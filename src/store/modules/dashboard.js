const state = {
    title: '',
    sideIsVisible: false
}

const getters = {
    title: state => state.title,

    sideIsVisible: state => state.sideIsVisible
}

const mutations = {
    setTitle(state, title) {
        state.title = title;
    },

    toggleSide(state) {
        state.sideIsVisible = ! state.sideIsVisible;
    },

    closeSide(state) {
        state.sideIsVisible = false;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations
}
