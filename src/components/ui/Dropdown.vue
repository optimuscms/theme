<template>
    <div ref="dropdown" class="dropdown" :class="{ 'open': isOpen }">
        <div class="cursor-pointer" @click="isOpen = ! isOpen">
            <slot name="button" :is-open="isOpen">
                <span class="button" :class="buttonClass">
                    <span>{{ buttonText }}</span>

                    <span class="icon">
                        <icon :icon="icon"></icon>
                    </span>
                </span>
            </slot>
        </div>
        
        <div class="dropdown-menu max-w-xs" @click="isOpen = false">
            <div class="dropdown-scroll">
                <div class="dropdown-content">
                    <slot>
                        <a
                            class="dropdown-item"
                            v-if="defaultOption"
                            @click="newValue = null"
                            :class="{ 'active': ! value }"
                        >{{ placeholder }}</a>
                        
                        <template v-for="option in options">
                            <slot name="option" :option="option">
                                <a
                                    :key="option.value"
                                    class="dropdown-item"
                                    @click="newValue = option.value"
                                    :class="{ 'active': option.value == value }"
                                >{{ option.label }}</a>
                            </slot>
                        </template>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                default: null
            },

            options: {
                type: Array,
                default: () => []
            },

            defaultOption: {
                type: Boolean,
                default: true
            },

            placeholder: {
                type: String,
                default: 'Please select'
            },

            buttonClass: {
                type: String,
                default: ''
            },

            icon: {
                type: [ String, Object ],
                default: 'angle-down'
            }
        },

        data() {
            return {
                isOpen: false,
                newValue: this.value
            }
        },

        computed: {
            buttonText() {
                return this.value
                    ? this.options.find(({ value }) => value === this.value).label
                    : this.placeholder;
            }
        },

        watch: {
            newValue(value) {
                this.$emit('input', value);
            },

            isOpen(isOpen) {
                if (! isOpen) {
                    this.$emit('close');
                }
            }
        },

        created() {
            ['click', 'touchstart'].forEach(action => {
                document.addEventListener(action, this.close);
            });
        },

        destroyed() {
            ['click', 'touchstart'].forEach(action => {
                document.removeEventListener(action, this.close);
            });
        },

        methods: {
            close(event) {
                if (
                    this.isOpen
                    && (this.$refs.dropdown !== event.target)
                    && ! this.$refs.dropdown.contains(event.target)
                ) {
                    this.isOpen = false;
                }
            }
        }
    }
</script>
