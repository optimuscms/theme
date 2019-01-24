<template>
    <transition :css="false" @before-enter="beforeEnter" @enter="enter">
        <div v-show="! loading">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    import Velocity from 'velocity-animate';

    export default {
        props: {
            loading: {
                type: Boolean,
                required: true
            }
        },

        watch: {
            loading(value) {
                if (value) {
                    progress.start();
                } else {
                    progress.done();
                }
            }
        },

        mounted() {
            if (this.loading) {
                progress.start();
            }
        },

        methods: {
            beforeEnter(el) {
                el.style.opacity = 0;
            },

            enter(el, done) {
                Velocity(el, { opacity: 1 }, {
                    duration: 150
                });
            },
        }
    }
</script>
