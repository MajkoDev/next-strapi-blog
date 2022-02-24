module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6f5eb36f705c189ba52ac8f4fceb8b58'),
  },
});
