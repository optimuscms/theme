<template>
    <div class="side-header px-10 h-24">
        <div class="flex items-center" v-if="userIsSet">
            <div class="flex-no-shrink mr-4">
                <figure class="image image-45x45">
                    <img :src="imageSrc" :alt="user.name" class="rounded-full">
                </figure>
            </div>

            <div class="flex-grow">
                <div class="font-medium text-white mb-1">
                    {{ user.name }}
                </div>

                <router-link
                    :to="{
                        name: 'users.edit',
                        params: { id: user.id }
                    }"
                    class="flex items-center text-grey hover:text-grey-lighter"
                >
                    <span class="icon icon-small mr-1">
                        <icon icon="cog" size="sm"></icon>
                    </span>

                    <span class="text-xs">Your details</span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            authedUser: {
                type: Object,
                default: () => {},
                required: true
            },

            placeholderImage: String
        },

        data() {
            return {
                user: this.authedUser
            }
        },

        computed: {
            userIsSet() {
                return !! Object.keys(this.user).length;
            },

            imageSrc() {
                return this.user.hasOwnProperty('avatar') && this.user.avatar
                    ? this.user.avatar
                    : this.placeholderImage;
            }
        },

        watch: {
            authedUser(user) {
                this.user = user;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .side-header {
        background: linear-gradient(
            to top,
            config('colors.blue-darker') 0%,
            config('colors.blue-dark') 30%,
            config('colors.blue-dark') 100%,
        );

        // border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
</style>
