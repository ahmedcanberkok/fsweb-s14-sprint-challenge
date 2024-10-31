const projectModel = require('./model')

async function validatePayload (req,res,next){
try {
  let {project_name}= req.body
  !project_name ? res.status(400).json({message : "Proje ismi giriniz"}):next()
} catch (error) {
 next(error) 
}
}

module.exports={validatePayload}