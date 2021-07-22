// Update with your config settings.

export = {
  development: {
    client: "pg",
    connection: {
      database: "kopt",
      user: "postgres",
      password: "root",
    },
    migrations: {
      directory: "./migrations",
    },
  },
};
