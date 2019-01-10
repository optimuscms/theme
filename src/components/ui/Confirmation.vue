<template>
    <o-modal :active="isActive" @close="close">
        <div class="modal-content bg-white rounded max-w-md">
            <div class="content px-6 py-8 text-center">
                <slot v-bind="item">
                    Are you sure?
                </slot>
            </div>

            <div class="buttons">
                <a
                    class="button"
                    :class="buttonClass"
                    @click="confirm"
                >{{ buttonText }}</a>

                <a class="button" @click="close">{{ buttonCancelText }}</a>
            </div>
        </div>
    </o-modal>
</template>

<script>
    export default {
        props: {
            buttonText: {
                type: String,
                default: 'Confirm'
            },

            buttonClass: {
                type: String,
                default: 'button-green'
            },

            buttonCancelText: {
                type: String,
                default: 'Cancel'
            },
        },

        data() {
            return {
                isActive: false,
                item: null
            }
        },

        methods: {
            confirm() {
                this.$emit('confirm', this.item);
                this.close();
            },

            open(item) {
                this.item = item;
                this.isActive = true;
            },

            close() {
                this.item = null;
                this.isActive = false;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .buttons {
        display: flex;

        .button {
            flex-grow: 1;

            &:hover {
                z-index: 2
            }

            &:focus,
            &:active {
                z-index: 3;

                &:hover {
                    z-index: 4
                }
            }

            &:not(:first-child) {
                margin-left: -1px;
            }

            &:first-child {
                border-left: 0;
                border-radius: 0 0 0 config('borderRadius.default');
            }

            &:last-child {
                border-right: 0;
                border-radius: 0 0 config('borderRadius.default') 0;
            }
        }
    }
</style>
