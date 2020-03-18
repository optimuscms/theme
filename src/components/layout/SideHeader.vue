<template>
    <div class="side-header px-10 h-24">
        <div class="flex items-center">
            <div class="flex-no-shrink mr-4">
                <figure class="image w-12 h-12">
                    <img
                        :src="user.avatar"
                        :alt="user.name"
                        class="rounded-full"
                    >
                </figure>
            </div>

            <div class="flex-grow">
                <div class="font-medium text-white mb-1">
                    {{ user.name }}
                </div>

                <router-link
                    :to="{
                        name: 'admin-users.edit',
                        params: { id: user.id },
                    }"
                    class="flex items-center text-grey-500 hover:text-grey-400"
                >
                    <span class="icon small mr-1">
                        <icon
                            icon="cog"
                            size="sm"
                        />
                    </span>

                    <span class="text-xs">
                        Your details
                    </span>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true,
        },
    },
};
</script>
