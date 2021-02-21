module.exports = ({ env }) => ({
  url: env("STRAPI_URL"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env(
        "ADMIN_JWT_SECRET",
        "44hHlcgSC2GS89dIsPI/5xbbzOXQ9BFOh5dAeo9UbxdyfFMiqLgk/TNaWJavZQDtzsv3bIVTyiG+QA4VWAAuYQ"
      ),
    },
  },
});
