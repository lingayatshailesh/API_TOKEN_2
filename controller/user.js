const USER = require("../model/user")
const bcrypt = require("bcrypt")
var jwt = require('jsonwebtoken');

exports.sequre = async function(req, res, next) {
  try{
    let token = req.headers.authorization
    if(!token) throw new Error("Please Enter a Token")
      let verify = jwt.verify(token,'SURAT')
    let userVerify = await USER.findById(verify.id)
    if(!userVerify) throw new Error("User Not Found")
      next()
  }
  catch(error){
    res.status(404).json({
      status : "Fail",
      message : error.message
    })
  }
}

exports.userSignup = async function(req, res, next) {
    try{
      
      req.body.profileImage = req.file.filename
      req.body.password = await bcrypt.hash(req.body.password,10)
      let dataCreate = await USER.create(req.body)
      res.status(201).json({
        status : "Success",
        message : "User Signup Successfull",
        data : dataCreate
      })
    }
    catch(error){
      res.status(404).json({
        status : "Fail",
        message : error.message
      })
    }
  }

  exports.userLogin = async function(req, res, next) {
    try{
      let userLogin = await USER.findOne({email : req.body.email})
      if(!userLogin) throw new Error("User Not Found")
      let paasswordCompare = await bcrypt.compare(req.body.password,userLogin.password)
      if(!paasswordCompare) throw new Error("Invalid Password")
        var token = jwt.sign({ id : userLogin._id }, 'SURAT');
      res.status(200).json({
        status : "Success",
        message : "User Login Successfull",
        data : userLogin,token
      })
    }
    catch(error){
      res.status(404).json({
        status : "Fail",
        message : error.message
      })
    }
  }

  exports.userFindAllData = async function(req, res, next) {
    try{
      let userFindAllData = await USER.find()
      res.status(200).json({
        status : "Success",
        message : "User Find All Data Successfull",
        data : userFindAllData
      })
    }
    catch(error){
      res.status(404).json({
        status : "Fail",
        message : error.message
      })
    }
  }

  exports.userFindId = async function(req, res, next) {
    try{
      let userFindId = await USER.findById(req.params.id)
      res.status(200).json({
        status : "Success",
        message : "User Find Single ID Successfull",
        data : userFindId
      })
    }
    catch(error){
      res.status(404).json({
        status : "Fail",
        message : error.message
      })
    }
  }

  exports.userUpdateId = async function(req, res, next) {
    try{
      req.body.password = await bcrypt.hash(req.body.password,10)
      let userUpdateId = await USER.findByIdAndUpdate(req.params.id,req.body,{new : true})
      res.status(200).json({
        status : "Success",
        message : "User ID Update Successfull",
        data : userUpdateId
      })
    }
    catch(error){
      res.status(404).json({
        status : "Fail",
        message : error.message
      })
    }
  }

  exports.userDeleteId = async function(req, res, next) {
    try{
      await USER.findByIdAndDelete(req.params.id)
      res.status(200).json({
        status : "Success",
        message : "User ID Delete Successfull"
      })
    }
    catch(error){
      res.status(404).json({
        status : "Fail",
        message : error.message
      })
    }
  }