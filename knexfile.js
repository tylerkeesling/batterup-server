require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/sluggers'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=ture'
    }
};
