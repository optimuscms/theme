<template>
    <transition name="notification">
        <div class="p-6">
            <a class="delete" v-if="closeable" @click="$emit('close')"></a>

            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
            closeable: {
                type: Boolean,
                default: true
            }
        }
    }
</script>
