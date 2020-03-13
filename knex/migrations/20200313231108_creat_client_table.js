const tableName = "Client"
exports.up = async function(knex) {
    await knex.schema.createTable(tableName, async (table) => {
        table.increments('id').primary()
        table.string('name',30).notNullable().unique()
        table.string('email',30).notNullable().unique()
        table.string('address',50).notNullable().unique()
        table.string('phoneNumber',20).notNullable().unique()
        table.string('DirectionMap',100).notNullable().unique()
        table.string('valueOfServices',10).notNullable().unique()
        table.string('assignedMessages',100).notNullable().unique()
      })
     };

exports.down = async function(knex) {
    await knex.schema.dropTable(tableName)
};
