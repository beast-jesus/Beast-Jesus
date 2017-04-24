// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/beast-jesus'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};

