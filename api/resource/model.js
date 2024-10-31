/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

// `Resource` modeli buraya
const db = require('../../data/dbConfig')



async function get (){

  const rawResourcesData = await db('resources')              

    return rawResourcesData;  
} 

async function getByID (resource_id){

  const rawResourcesIDData = await db('resources')
                                    .where("resource_id",resource_id)
                                    .first()
    return rawResourcesIDData;  
} 

async function getByResourceName (resource_name){

  const rawResourcesIDData = await db('resources')
                                    .where("resource_name",resource_name)
                                    .first()
    return rawResourcesIDData;  
}

async function insert(resources){

  const [id] = await db("resources").insert(resources)
  return getByID(id);
}


module.exports = {get,getByID,insert,getByResourceName};