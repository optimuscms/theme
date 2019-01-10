<template>
    <div class="field" :class="{ 'required': required }">
        <label :for="input" class="label" v-if="label">{{ label }}</label>

        <div class="control">
            <slot></slot>
        </div>

        <div class="help" v-if="$slots.hasOwnProperty('help')">
            <slot name="help"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            label: String,
            input: String,

            required: {
                type: Boolean,
                default: false
            }
        }
    }
</script>
