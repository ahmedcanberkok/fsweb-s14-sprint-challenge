//  `/api/projects` router buraya
//Imports
const router = require('express').Router();
const projectModel = require('./model');
const mw= require('./middleware')

//Middlewares

//Routers
router.get('/projects',async (req,res,next)=>{
  try {
    const projectsData = await projectModel.get()
    res.json(projectsData)
  } catch (error) {
    next(error)
  } 
})

router.get('/projects/:id',async (req,res,next)=>{
  try {
    const projectIDData = await projectModel.getByID(req.params.id)
    res.json(projectIDData)
  } catch (error) {
    next(error)
  } 
})

router.post('/projects',mw.validatePayload, async (req,res,next)=>{
  try {
    const insertedProjectData ={
      project_name:req.body.project_name,
      project_description:req.body.project_description,
      project_completed:req.body.project_completed,
    }
    const insertedProject = await projectModel.insert(insertedProjectData)
    res.status(201).json(insertedProject)
  } catch (error) {
    next(error)
  } 
})

//Errors


//Exports
module.exports = router;