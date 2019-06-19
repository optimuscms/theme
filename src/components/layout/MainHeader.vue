<template>
    <header class="flex justify-between items-center bg-white border-b border-grey-500 px-8 h-24">
        <div>
            <h1 class="title" v-if="title">{{ title }}</h1>
        </div>

        <div>
            <slot></slot>
        </div>
    </header>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                title: 'dashboard/title'
            })
        }
    }
</script>
