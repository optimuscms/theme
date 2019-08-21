<template>
    <div class="field addons">
        <div class="control">
            <span class="button static">
                <span class="icon">
                    <icon icon="calendar-alt" />
                </span>
            </span>
        </div>

        <div class="control flex-grow">
            <input
                :id="id"
                ref="picker"
                v-model="newValue"
                type="text"
                class="input"
                :required="required"
            >
        </div>
    </div>
</template>

<script>
import flatpickr from 'flatpickr';
require('flatpickr/dist/flatpickr.css');

import inputMixin from '../../mixins/input';

export default {
    mixins: [ inputMixin ],

    props: {
        time: {
            type: Boolean,
            default: true,
        },

        format: {
            type: String,
            default: null,
        },
    },

    data() {
        return  {
            flatpickr: null,
        };
    },

    computed: {
        altFormat() {
            if (this.format) {
                return this.format;
            }

            return this.time ? 'F j, Y - h:i K' : 'F j, Y';
        },
    },

    watch: {
        value(value) {
            this.newValue = value;

            this.flatpickr.setDate(value, true, 'Y-m-d H:i:S');
        },
    },

    mounted() {
        this.flatpickr = flatpickr(this.$refs.picker, {
            altInput: true,
            enableTime: this.time,
            altFormat: this.altFormat,
            dateFormat: 'Y-m-d H:i:S',
        });
    },

    beforeDestroy() {
        this.flatpickr.destroy();
    },
};
</script>
