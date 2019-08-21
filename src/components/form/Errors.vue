<template>
    <notification is-error>
        <template v-for="errorGroup in errors">
            <p v-for="(error, index) in errorGroup" :key="index">
                {{ error }}
            </p>
        </template>
    </notification>
</template>

<script>
import Notification from '../ui/Notification';

export default {
    components: {
        Notification,
    },

    props: {
        errors: {
            type: Object,
            default: () => {},
        },
    },
};
</script>
