// `/api/resources` router buraya

//Imports
const router = require('express').Router();
const resourceModel = require('./model');
const mw = require('./middleware');

//Middlewares

//Routers
router.get('/resources',async (req,res,next)=>{
  try {
    const resourceData = await resourceModel.get()
    res.json(resourceData)
  } catch (error) {
    next(error)
  } 
})

router.get('/resources/:id',async (req,res,next)=>{
  try {
    const resourceIdData = await resourceModel.getByID(req.params.id)
    res.json(resourceIdData)
  } catch (error) {
    next(error)
  } 
})

router.post('/resources',mw.validateName,async (req,res,next)=>{
  try {
    const insertedResourceData ={
      resource_name: req.body.resource_name ,
      resource_description: req.body.resource_description,
    }
    const insertedData = await resourceModel.insert(insertedResourceData)
    res.status(201).json(insertedData)
  } catch (error) {
    next(error)
  } 
})

//Errors


//Exports
module.exports = router;