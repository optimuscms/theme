<template>
    <transition name="loader" mode="out-in">
        <div v-if="loading" key="loader" class="flex items-center justify-center p-8">
            <transition name="fade">
                <div v-if="showLoader" class="icon">
                    <icon icon="spinner" spin size="lg" />
                </div>
            </transition>
        </div>

        <div v-else key="content">
            <slot />
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        loading: {
            type: Boolean,
            default: false,
        },

        delay: {
            type: Number,
            default: 350,
        },
    },

    data() {
        return {
            timeout: null,
            showLoader: false,
        };
    },

    watch: {
        loading: {
            handler(isLoading) {
                if (isLoading) {
                    this.timeout = setTimeout(() => {
                        this.showLoader = true;
                    }, this.delay);
                } else {
                    clearTimeout(this.timeout);
                }
            },
            immediate: true,
        },
    },
};
</script>
