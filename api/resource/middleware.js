const resourceModel = require('./model')


async function validateName (req,res,next){
try {
  const {resource_name} = req.body;
  if (!resource_name){
    res.status(400).json({message : "Isim kismini kontrol ediniz"})
  } else{
    const isExist = await resourceModel.getByResourceName(resource_name);
    isExist ? res.status(400).json({message : "Girdiğiniz isim bulunmaktadır"}):next()
  }
} catch (error) {
  next(error)
  
}

}


module.exports={validateName}