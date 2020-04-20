const moment = require('moment');

module.exports = {
    development: {
        client: 'mysql2',
        debug: false,
        connection: {
            host: process.env.DB_HOST || '127.0.0.1',
            port: 3306,
            user: process.env.DB_USERNAME || 'root',
            password: process.env.DB_PASSWORD || 'toor',
            database: 'blog_mol',
            timezone: '+00:00',
            typeCast: (field, next) => {
                if (field.type === 'DATETIME' || field.type === 'TIMESTAMP') {
                    try {
                        const dt = moment(field.string());
                        if (!dt._isValid) return null;
                        return dt.format('YYYY-MM-DDTHH:mm:ss+00:00');
                    } 
                    catch (error) {
                        return null;
                    }
                }
                return next();
            }
        },
        pool: {
            max: 64,
            min: 32
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: './db/migrations'
        },
        seeds: {
            directory: './db/seeders'
        }
    }
}
