const DB_HOST = process.env.DB_HOST || "localhost";
const DB_USERNAME = process.env.DB_USERNAME || "root";
const DB_PASSWORD = process.env.DB_PASSWORD || "";
const DB_NAME = process.env.DB_NAME || "noteApi";
const DB_DIALECT = process.env.DB_DIALECT || "mysql";

const config = {
    "development": {
      "username": DB_USERNAME,
      "password": DB_PASSWORD,
      "database": DB_NAME,
      "host": DB_HOST,
      "dialect": DB_DIALECT
    },
    "test": {
      "username": "root",
      "password": null,
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "username": "root",
      "password": null,
      "database": "database_production",
      "host": "127.0.0.1",
      "dialect": "mysql"
    }
  }

  export default config;