const projectModel = require('../project/model')

 function validatePayload (req,res,next){
  try {
    let {task_description,project_id} = req.body
    !task_description || !project_id ? res.status(400).json({message : "Eksik alan bulunmaktadir"}):next()
  } catch (error) {
   next(error)  
  }
}

async function validateId (req,res,next){
  try {
    let{project_id} = req.body
    const isExistProject = await projectModel.getByID(project_id);
    !isExistProject ? res.status(404).json({message : "Belirttiginiz proje bulunmamaktadir"}):next()
  } catch (error) {
    next(error)
  }
}


module.exports={validatePayload,validateId}