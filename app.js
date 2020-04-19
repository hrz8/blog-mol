const { ServiceBroker } = require('moleculer');
const config = require('./moleculer.config');

const broker = new ServiceBroker(config);

broker.loadServices('./domains', '**/*service.js');

broker
    .start()
    .then(() => broker.waitForServices())
    .then(() => broker.repl());
