// path: ./config/server.js

module.exports = ({ env }) => ({
  host: env('HOST', '81.169.152.211'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
 