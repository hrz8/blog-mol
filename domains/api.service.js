const ApiGateway = require('moleculer-web');

module.exports = {
    name: 'api',

    mixins: [ApiGateway],

    settings: {
        port: 3028,
        routes: [
            {
                path: '/api/posts',
                aliases: {
                    'GET ': 'posts.list',
                }
            }
        ]
    }
};
