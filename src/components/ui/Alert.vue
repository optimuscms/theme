<template>
    <o-modal :active="isActive" @close="close">
        <div class="modal-content bg-white rounded max-w-sm">
            <div class="content px-6 pt-8 text-center">
                <slot></slot>
            </div>

            <div class="p-6 text-center">
                <a
                    class="button button-green w-full sm:w-1/2"
                    @click="close"
                >{{ buttonText }}</a>
            </div>
        </div>
    </o-modal>
</template>

<script>
    export default {
        props: {
            buttonText: {
                type: String,
                default: 'Ok'
            }
        },

        data() {
            return {
                isActive: false
            }
        },

        methods: {
            open() {
                this.isActive = true;
            },

            close() {
                this.$emit('close');
                this.isActive = false;
            }
        }
    }
</script>
