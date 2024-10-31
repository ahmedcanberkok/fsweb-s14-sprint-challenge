// `Proje` modeli buraya
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// `Resource` modeli buraya
const db = require('../../data/dbConfig')


async function get (){

  const rawProjectsData = await db('projects')

  let mappedData = rawProjectsData.map(item => {
   return { ...item,
        project_completed : item.project_completed ===1
   }
  })
   return mappedData;  
} 

async function getByID (project_id){

  const rawProjectsIdData = await db('projects')
                                    .where("project_id",project_id)
                                    .first()
  rawProjectsIdData.project_completed = rawProjectsIdData.project_completed ===1;
            
  return rawProjectsIdData;  
} 

async function insert(project){

  let [project_id] = await db("projects").insert(project)

  return getByID(project_id);
}


module.exports = {get,getByID,insert};