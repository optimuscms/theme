<template>
    <li :class="{ 'active': areaIsActive }">
        <router-link :to="to" v-if="isRouterLink">
            <span>{{ label }}</span>

            <span class="icon icon-large" @click="toggleSubNav">
                <icon :icon="icon" size="sm"></icon>
            </span>
        </router-link>

        <a @click="$emit('click')" v-else>
            <span>{{ label }}</span>

            <span class="icon icon-large">
                <icon icon="angle-right" size="sm"></icon>
            </span>
        </a>

        <ul class="side-sub-nav list-reset" v-if="hasSubNav && subNavIsVisible">
            <slot></slot>
        </ul>
    </li>
</template>

<script>
    export default {
        props: {
            to: {
                type: Object,
                default: null
            },

            area: String,

            label: {
                type: String,
                required: true
            }
        },

        data() {
            return {
                subNavIsVisible: false
            }
        },

        computed: {
            currentArea() {
                let meta = this.$route.matched[this.$route.matched.length - 1].meta;

                return meta.hasOwnProperty('area')
                    ? meta.area
                    : this.$route.matched[0].meta.area;
            },

            areaIsActive() {
                return this.area === this.currentArea;
            },

            isRouterLink() {
                return !! this.to;
            },

            hasSubNav() {
                return !! this.$slots.default;
            },

            icon() {
                if (this.hasSubNav) {
                    return this.subNavIsVisible ? 'angle-up' : 'angle-down';
                }

                return 'angle-right';
            }
        },

        created() {
            if (this.currentArea === this.area) {
                this.subNavIsVisible = true;
            }
        },

        watch: {
            currentArea(area) {
                if (area === this.area) {
                    this.subNavIsVisible = true;
                } else {
                    this.subNavIsVisible = false;
                }
            }
        },

        methods: {
            toggleSubNav(e) {
                if (this.hasSubNav) {
                    this.subNavIsVisible = ! this.subNavIsVisible;

                    e.preventDefault();
                }
            }
        }
    }
</script>
