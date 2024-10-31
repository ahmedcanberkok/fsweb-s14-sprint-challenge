/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('projects').truncate()
  await knex('projects').insert([
    {project_id: 1, project_name: 'hackerrank algoritma 4 yildiz', project_description:"hacker rankdeki sorulari çözüp puan artır", project_completed:false},
    {project_id: 2, project_name: 'kişisel websiteni geliştirme', project_description:"kişisel websiteninde sununlan projeleri iyileştirme", project_completed:false},
  ]);
};