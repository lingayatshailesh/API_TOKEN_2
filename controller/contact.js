const CONTACT = require("../model/contact")


exports.contactCreate = async function(req, res, next) {
    try{
      let contactCreate = await CONTACT.create(req.body)
      res.status(201).json({
        status : "Success",
        message : "Contact Create Successfull",
        data : contactCreate
      })
    }
    catch(error){
      res.status(404).json({
        status : "Fail",
        message : error.message
      })
    }
  }

  exports.contactFindAllData = async function(req, res, next) {
    try{
      let contactFindAllData = await CONTACT.find()
      res.status(200).json({
        status : "Success",
        message : "Contact Find All Data Successfull",
        data : contactFindAllData
      })
    }
    catch(error){
      res.status(404).json({
        status : "Fail",
        message : error.message
      })
    }
  }

  exports.contactFindId = async function(req, res, next) {
    try{
      let contactFindId = await CONTACT.findById(req.params.id)
      res.status(200).json({
        status : "Success",
        message : "Contact Find Single ID Successfull",
        data : contactFindId
      })
    }
    catch(error){
      res.status(404).json({
        status : "Fail",
        message : error.message
      })
    }
  }

  exports.contactUpdateId = async function(req, res, next) {
    try{
      let contactUpdateId = await CONTACT.findByIdAndUpdate(req.params.id,req.body,{new : true})
      res.status(200).json({
        status : "Success",
        message : "Contact ID Update Successfull",
        data : contactUpdateId
      })
    }
    catch(error){
      res.status(404).json({
        status : "Fail",
        message : error.message
      })
    }
  }

  
  exports.contactDeleteId = async function(req, res, next) {
    try{
      await CONTACT.findByIdAndDelete(req.params.id)
      res.status(200).json({
        status : "Success",
        message : "Contact ID Delete Successfull"
      })
    }
    catch(error){
      res.status(404).json({
        status : "Fail",
        message : error.message
      })
    }
  }