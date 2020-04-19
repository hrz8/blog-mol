module.exports = {
    name: 'posts',
    actions: {
        list: {
            params: {
                name: 'string'
            },
            handler: ctx => {
                return `Welcome, ${ctx.params.name}`;
            }
        }
    },

    /**
     * Events
     */
    events: {},

    /**
     * Methods
     */
    methods: {},

    /**
     * Service created lifecycle event handler
     */
    created() {},

    /**
     * Service started lifecycle event handler
     */
    started() {},

    /**
     * Service stopped lifecycle event handler
     */
    stopped() {}
}
