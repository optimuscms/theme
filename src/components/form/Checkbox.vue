<template>
    <div class="control">
        <input
            :id="id"
            v-model="newValue"
            :name="id"
            :type="type"
            class="checkbox"
            :value="checkedValue"
        >

        <label :for="id">{{ label }}</label>
    </div>
</template>

<script>
import inputMixin from '../../mixins/input';

export default {
    mixins: [ inputMixin ],

    props: {
        checkedValue: {
            type: null,
            default: true,
        },

        label: {
            type: String,
            required: true,
        },

        type: {
            type: String,
            default: 'checkbox',
        },
    },
};
</script>
