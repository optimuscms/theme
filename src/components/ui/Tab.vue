<template>
    <section v-show="isActive" :id="computedId">
        <slot></slot>
    </section>
</template>

<script>
    export default {
        props: {
            id: {
                default: null
            },

            name: {
                required: true
            }
        },
        
        data() {
            return {
                isActive: false,
                isVisible: true
            }
        },

        computed: {
            computedId() {
                return this.id ? this.id : this.name.toLowerCase().replace(/ /g, '-');
            },

            hash() {
                return '#' + this.computedId;
            }
        }
    }
</script>
