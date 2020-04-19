const { ServiceBroker } = require('moleculer');
const config = require('./moleculer.config');

const broker = new ServiceBroker(config);

broker.loadService('./domains/api.service.js');

broker
    .start()
    .then(() => broker.waitForServices())
    .then(() => broker.repl());
