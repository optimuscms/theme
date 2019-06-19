<template>
    <notification class="bg-red-500 text-white" :closeable="false">
        <ul class="list-reset">
            <template v-for="errorGroup in errors">
                <li :key="index" v-for="(error, index) in errorGroup">
                    {{ error }}
                </li>
            </template>
        </ul>
    </notification>
</template>

<script>
    import Notification from '../ui/Notification';

    export default {
        components: {
            Notification
        },

        props: {
            errors: {
                type: Object,
                default: () => {}
            }
        }
    }
</script>
