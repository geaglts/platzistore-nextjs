const withPwa = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

/** @type {import('next').NextConfig} */
module.exports = withPwa({
    pwa: {
        dest: 'public',
        mode: 'production',
        register: true,
        disable: false,
        runtimeCaching,
        buildExcludes: [/middleware-manifest\.json$/],
    },
    reactStrictMode: true,
});
