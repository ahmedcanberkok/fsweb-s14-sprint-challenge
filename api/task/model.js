// bu`Task` modeli buraya
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// `Resource` modeli buraya
const db = require('../../data/dbConfig')


async function get (){

// SELECT t.task_id,t.task_description,t.task_notes,t.task_completed,p.project_name,p.project_description
// FROM tasks as t
// JOIN projects as p
//     ON t.project_id=p.project_id
// ORDER BY t.task_id ASC

  const rawTaskProjectData = await db('tasks as t')
                                  .leftJoin('projects as p','t.project_id','p.project_id')
                                  .select('t.task_id','t.task_description','t.task_notes','t.task_completed','p.project_name','p.project_description') 
  let mappedData = rawTaskProjectData.map(item => {
    return { ...item,
          task_completed : item.task_completed ===1
    }
    })
    return mappedData;                
} 

async function getByID (task_id){

  const rawTaskIdData = await db('tasks')
                                    .where("task_id",task_id)
                                    .first()
               
 rawTaskIdData.task_completed = rawTaskIdData.task_completed ===1;
  return rawTaskIdData;  
} 

async function insert(data){
  const [task_id] = await db("tasks").insert(data)
  return getByID(task_id);
}




module.exports={get,insert}


