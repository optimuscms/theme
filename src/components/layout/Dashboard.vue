<template>
    <transition-group
        tag="div"
        mode="out-in"
        name="dashboard"
        class="min-h-screen bg-grey-100"
    >
        <div
            key="loader"
            v-if="loadingApp"
            class="flex min-h-screen items-center justify-center bg-grey-100"
        >
            <div class="text-center pulse">
                <logo class="w-16"></logo>

                <div class="title text-3xl uppercase">
                    <strong>Optimus</strong>
                </div>

                <div class="subtitle text-coral-500">
                    <i>loading...</i>
                </div>
            </div>
        </div>

        <div
            key="dashboard"
            class="dashboard"
            v-show="! loadingApp"
            :class="{ 'show-side': sideIsVisible }"
        >
            <transition name="side">
                <div class="side bg-blue-700" v-show="! loadingApp">
                    <a class="side-toggle bg-blue-700 lg:hidden" @click="toggleSide">
                        <span class="dots">
                            <i></i>
                        </span>
                    </a>

                    <side-header
                        :avatar="avatar"
                    ></side-header>

                    <div class="side-content px-10 py-8">
                        <side-nav>
                            <slot name="side-nav"></slot>
                        </side-nav>
                    </div>
                </div>
            </transition>

            <transition name="main">
                <div id="main" class="main ml-5 lg:ml-0" v-show="! loadingApp">
                    <main-header>
                        <slot name="header"></slot>
                    </main-header>

                    <loader :loading="loadingRoute">
                        <router-view></router-view>
                    </loader>
                </div>
            </transition>
        </div>
    </transition-group>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex';

    import Loader from '../ui/Loader';
    import Logo from './OptimusLogo';
    import MainHeader from './MainHeader';
    import SideHeader from './SideHeader';
    import SideNav from './SideNav';
    
    export default {
        components: {
            Loader,
            Logo,
            MainHeader,
            SideHeader,
            SideNav
        },

        props: {
            loadingApp: {
                type: Boolean,
                default: false
            },

            loadingRoute: {
                type: Boolean,
                default: false
            },
            
            avatar: String
        },

        computed: {
            ...mapGetters({
                sideIsVisible: 'dashboard/sideIsVisible'
            })
        },

        methods: {
            ...mapMutations({
                toggleSide: 'dashboard/toggleSide'
            })
        }
    }
</script>
