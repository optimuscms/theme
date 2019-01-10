<template>
    <transition name="fade">
        <div class="modal active" v-if="active">
            <div class="modal-background" @click="$emit('close')"></div>
            
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        props: {
            active: {
                type: Boolean,
                required: true
            }
        }
    }
</script>
