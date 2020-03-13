const tableName = 'messengers'

exports.up = async function(knex) {
  await knex.schema.createTable(tableName, async (table) => {
    table.increments('id').primary()
    table.string('name', 30).notNullable().unique()
    table.string('address', 50).notNullable().unique()
    table.string('closeEndDay', 10).notNullable().unique()
    table.string('phoneNumber', 20).notNullable().unique()
    table.string('courierRating', 10).notNullable().unique()
    table.string('dailyMoneyHandled', 10).notNullable().unique()
    table.string('earningsPercentage', 10).notNullable().unique()
    table.string('identificationCard', 30).notNullable().unique()
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTable(tableName)
};
