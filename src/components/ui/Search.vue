<template>
    <form @submit.prevent="submit">
        <label for="search" class="hidden">Search</label>
        
        <div class="field addons">
            <div class="control flex-grow">
                <o-input
                    id="search"
                    type="search"
                    v-model="newValue"
                    :placeholder="placeholder"
                ></o-input>
            </div>

            <div class="control">
                <button class="button">
                    <span class="icon">
                        <icon icon="search"></icon>
                    </span>
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        props: {
            placeholder: {
                type: String,
                default: 'Search'
            },

            value: {
                default: null
            }
        },

        data() {
            return {
                newValue: this.value 
            }
        },

        methods: {
            submit() {
                this.$emit('submit', this.newValue);
            }
        }
    }
</script>
