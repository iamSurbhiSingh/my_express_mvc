var config = {
    local: {
        mode: 'Local',
        port: 1337
    },
    testing: {
        mode: 'Testing',
        port: 5000
    },
    production: {
        mode: 'Production',
        port: 8080
    }
}
module.exports = function(mode) {
    return config[mode || process.argv[2] || 'local'] || config.local;
}