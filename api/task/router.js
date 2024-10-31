// `/api/tasks` router buraya
//Imports
const router = require('express').Router();
const taskModel = require('./model');

//Middlewares
const mw = require('./middlware');

//Routers
router.get('/tasks',async (req,res,next)=>{
  try {
    const tasksProjectsData = await taskModel.get()
    res.json(tasksProjectsData)
  } catch (error) {
    next(error)
  } 
})
router.post('/tasks',mw.validatePayload,mw.validateId,async (req,res,next)=>{
  try {
    const insertedTasksProjectData ={
      task_description: req.body.task_description,
      task_notes:  req.body.task_notes,
      task_completed: req.body.task_completed,
      project_id : req.body.project_id
    }
    const insertedData = await taskModel.insert(insertedTasksProjectData)
    res.status(201).json(insertedData)
  } catch (error) {
    next(error)
  } 
})

//Errors

//exports

module.exports=router;