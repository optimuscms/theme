<template>
    <div class="select w-full">
        <select :id="id" v-model="newValue" :required="required">
            <slot></slot>
        </select>
    </div>
</template>

<script>
    import inputMixin from '../../mixins/input';

    export default {
        mixins: [ inputMixin ]
    }
</script>
