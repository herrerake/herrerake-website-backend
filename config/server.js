module.exports = ({ env }) => ({
  host: env("APP_HOST", "0.0.0.0"),
  port: env.int("NODE_PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "9aaef0d8e01998d8a99bd636ec287a9c"),
    },
  },
});
