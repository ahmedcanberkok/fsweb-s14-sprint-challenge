/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('resources').truncate()
  await knex('resources').insert([
    {resource_id: 1, resource_name: 'hackerrand',resource_description:""},
    {resource_id: 2, resource_name: 'Github',resource_description:"Github resource page"},
    {resource_id: 3, resource_name: 'Local Folder',resource_description:"VSC3 and data in local folder"},
  ]);
};