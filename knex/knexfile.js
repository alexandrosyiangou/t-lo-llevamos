// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      ssl: true,
      port: 5432,
      host: 'ec2-184-72-236-3.compute-1.amazonaws.com',
      database: 'd8ljh1resqtb3k',
      user:     'wkyshuyaavbthu',
      password: '6b82e82cc62e2e7030423277f1071644ad2557b12f46ad292a22fbe8ce50ade5'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}
