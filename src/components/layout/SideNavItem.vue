<template>
    <li :class="{ 'active': sectionIsActive }">
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

        <ul v-if="hasSubNav && subNavIsVisible" class="side-sub-nav list-reset">
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

            section: String,

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
            currentSection() {
                let meta = this.$route.matched[this.$route.matched.length - 1].meta;

                return meta.hasOwnProperty('section')
                    ? meta.section
                    : this.$route.matched[0].meta.section;
            },

            sectionIsActive() {
                return this.section === this.currentSection;
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
            if (this.currentSection === this.section) {
                this.subNavIsVisible = true;
            }
        },

        watch: {
            currentSection(section) {
                if (section === this.section) {
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
