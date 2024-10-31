/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()
  await knex('tasks').insert([
    {task_id:1, task_description:"solve 15 alghorithm questions a week",task_notes:"focus on the easy level first",task_completed:false, project_id:1},  
    {task_id:2, task_description:"solve 10 sql questions a week",task_notes:"focus on the easy level first",task_completed:false, project_id:1}  ,
    {task_id:3, task_description:"Pizza main gage responsive",task_notes:"Mainly done but couple of adjustments needed",task_completed:false, project_id:2},  
    {task_id:4, task_description:"friends page",task_notes:"responsiveness and password part",task_completed:false, project_id:2}  
  ]);
};