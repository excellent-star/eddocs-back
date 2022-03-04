module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0502bf85531df19d1e261fa7d2208c34'),
  },
});
