export const formHelpersMixin = {
    methods: {
        accessItem() {
            return this.item;
        },

        itemAttributeExists(attribute) {
            const item = this.accessItem();

            return item && item.hasOwnProperty(attribute);
        },

        getItemAttribute(attribute, defaultValue = null) {
            const item = this.accessItem();

            if (this.itemAttributeExists(attribute)) {
                return item[attribute];
            }

            return defaultValue;
        },
    },
};

export default {
    mixins: [ formHelpersMixin ],

    props: {
        item: {
            type: Object,
            default: null,
        },
    },

    data() {
        return {
            errors: {},
            scrollToTop: true,
            isProcessing: false,
        };
    },

    computed: {
        anyErrors() {
            return Object.keys(this.errors).length > 0;
        },

        isEditing() {
            return !! this.item;
        },
    },

    methods: {
        submit() {
            this.errors = {};
            this.isProcessing = true;

            this.save().then(response => {
                this.onSuccess(response);
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                } else {
                    this.errors = {
                        error: ['An unexpected error occured.'],
                    };
                }

                this.onError(error);
            }).finally(() => {
                this.isProcessing = false;

                if (this.scrollToTop) {
                    this.$el.scrollIntoView({
                        block: 'start',
                        inline: 'start',
                        behavior: 'smooth',
                    });
                }

                this.onFinally();
            });
        },

        onSuccess() {
            //
        },

        onError() {
            //
        },

        onFinally() {
            //
        },
    },
};
