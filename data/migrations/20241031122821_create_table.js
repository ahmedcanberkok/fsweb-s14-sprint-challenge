/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
      .createTable('projects',tbl =>{
        tbl.increments('project_id')
        tbl.string('project_name',32)
              .notNullable()
        tbl.string('project_description','longtext') 
        tbl.boolean('project_completed')
            .defaultTo(false)
      })
      .createTable('tasks', tbl=>{
        tbl.increments('task_id')
        tbl.string('task_description',128)
            .notNullable()
        tbl.string('task_notes', 128)
        tbl.boolean('task_completed')
            .defaultTo(false)
        tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onUpdate('CASCADE')//other option restrict
            .onDelete('CASCADE');
      })
      .createTable('project_resources',tbl=>{
          tbl.increments('project_resource_id')
          tbl.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
          tbl.integer('resource_id')
            .references('resource_id')
            .inTable('resources')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
      })
      .createTable('resources',tbl=>{
        tbl.increments('resource_id')
        tbl.string('resource_name',32)
            .notNullable()
            .unique()
        tbl.string('resource_description',128)
      })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) { 
    return knex.schema
                      .dropTableIfExists('resources')
                      .dropTableIfExists("project_resources")
                      .dropTableIfExists('tasks')
                      .dropTableIfExists('projects')  
  };