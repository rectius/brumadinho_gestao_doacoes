
exports.up = function(knex) {
  return knex.schema.hasTable('distribution_center').then(exists => {
    if (!exists) {
      return knex.schema.createTable('distribution_center', table => {
        table.increments('id').primary()
        table.string('address')
        table.string('city')
        table.string('name')
        table.string('contact')
        table.boolean('active').defaultTo(true)
        table.timestamps(true, true)
      })
    }
  })
};

exports.down = function(knex) { };