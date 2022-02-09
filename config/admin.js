module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '23524c63adbd4c1ae6fd3659ae8caf62'),
  },
});
