<template>
    <div
        class="dashboard"
        :class="{ 'show-side': sideIsVisible }"
    >
        <div class="side bg-blue-700">
            <a
                class="side-toggle bg-blue-700 lg:hidden"
                @click="toggleSide"
            >
                <span class="dots">
                    <i />
                </span>
            </a>

            <side-header :user="user" />

            <div class="side-content px-10 py-8">
                <side-nav>
                    <slot name="side-nav" />
                </side-nav>
            </div>
        </div>

        <div id="main" class="main ml-5 lg:ml-0">
            <main-header>
                <slot name="header" />
            </main-header>

            <router-view />
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import MainHeader from './MainHeader.vue';
import SideHeader from './SideHeader.vue';
import SideNav from './SideNav.vue';

export default {
    components: {
        MainHeader,
        SideHeader,
        SideNav,
    },

    props: {
        user: {
            type: Object,
            required: true,
        },
    },

    computed: {
        ...mapGetters({
            sideIsVisible: 'dashboard/sideIsVisible',
        }),
    },

    methods: {
        ...mapActions({
            toggleSide: 'dashboard/toggleSide',
        }),
    },
};
</script>
