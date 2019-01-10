<template>
    <transition-group
        tag="div"
        name="dashboard"
        mode="out-in"
        class="min-h-screen bg-grey-lightest"
    >
        <div
            key="loader"
            v-if="loadingApp"
            class="flex min-h-screen items-center justify-center bg-grey-lightest"
        >
            <div class="text-center pulse">
                <logo class="w-16"></logo>

                <div class="title text-3xl uppercase">
                    <strong>Optimus</strong>
                </div>

                <div class="subtitle text-primary">
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
                <div class="side bg-blue-dark" v-show="! loadingApp">
                    <a class="side-toggle bg-blue-dark lg:hidden" @click="toggleSide">
                        <span class="dots">
                            <i></i>
                        </span>
                    </a>

                    <side-header
                        :authed-user="authedUser"
                        :placeholder-image="placeholderImage"
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

                    <loader :loading="loading">
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
            authedUser: {
                type: Object,
                required: true
            },

            loadingApp: {
                type: Boolean,
                default: false
            },

            loading: {
                type: Boolean,
                default: false
            },
            
            placeholderImage: {
                type: String,
                required: true
            }
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

<style lang="scss" scoped>
    .dashboard {
        display: flex;
        min-height: 100vh;
        position: relative;

        &.show-side {
            .side {
                transform: translate3d(0, 0, 0);
            }
        }
    }

    .side {
        top: 0;
        left: 0;
        bottom: 0;
        width: 85%;
        z-index: 10;
        display: flex;
        max-width: 22rem;
        position: absolute;
        flex-direction: column;
        transition: all 180ms 0ms ease-out;
        transform: translate3d(calc(-100% + 1.5rem), 0, 0);

        .side-header {
            z-index: 20;
            display: flex;
            flex-shrink: 0;
            position: relative;
            align-items: center;
            justify-content: space-between;
        }

        .side-content {
            flex-grow: 1;
            overflow: scroll;
            flex-direction: column;
        }

        @screen lg {
            transform: translate3d(0, 0, 0);
        }

        .side-toggle {
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 10;
            width: 1.5rem;
            position: absolute;
            box-shadow: 6px 0 6px 3px rgba(0, 0, 0, 0.2);
    
            .dots {
                top: 50%;
                left: 50%;
                position: absolute;
                transform: translate(-50%, -50%);
    
                i,
                i:before,
                i:after {
                    width: 4px;
                    height: 4px;
                    display: block;
                    border-radius: 4px;
                    background-color: config('colors.blue-lighter');
                }
    
                i {
                    position: relative;
    
                    &:before,
                    &:after {
                        content: '';
                        position: absolute;
                    }
    
                    &:before {
                        transform: translateY(-10px);
                    }
    
                    &:after {
                        transform: translateY(10px);
                    }
                }
            }
        }
    }

    .main {
        flex-grow: 1;
        transition: all 180ms 0ms ease-out;

        @screen lg {
            padding-left: 22rem;
        }
    }

    .dashboard-enter-active,
    .dashboard-leave-active {
        transition: opacity 300ms;
    }
    
    .dashboard-enter,
    .dashboard-leave-to {
        opacity: 0;
    }

    .side-enter-active,
    .main-enter-active {
        transition: all 500ms 300ms ease;
    }

    .side-enter {
        opacity: 0;
        transform: translateX(-10%);
    }

    .main-enter {
        opacity: 0;
        transform: translateY(-10%);
    }

    .pulse {
        opacity: 0.6;
        animation: pulse 3000ms ease-out infinite; 
    }

    @keyframes pulse {
        0% { opacity: 0.6; }
        50% { opacity: 1.0; }
        100% { opacity: 0.6; }
    }
</style>
