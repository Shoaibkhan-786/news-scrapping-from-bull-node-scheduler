const Arena = require('bull-arena');
const Bull = require('bull');
const { RedisConfig } = require('../processor/index');

exports.arenaConfig = Arena({
    Bull,
    queues: [
        {
            type: 'bull',

            // Name of the bull queue, this name must match up exactly with what you've defined in bull.
            name: "newsQueue",

            // Hostname or queue prefix, you can put whatever you want.
            hostId: "newsQueue",

            // Redis auth.
            RedisConfig
        }
    ],

    // Make the arena dashboard become available at {my-site.com}/arena.
    basePath: '/arena',

    // Let express handle the listening.
    // disableListen: true,
});


