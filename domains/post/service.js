module.exports = {
    name: 'posts',
    actions: {
        welcome: {
            params: {
                name: "string"
            },
            handler(ctx) {
                return `Welcome, ${ctx.params.name}`;
            }
        }
    },
}
