var express = require('express');
var router = express.Router();
const UC = require("../controller/user")
const multer  = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
  

/* GET users listing. */
router.post('/signup',upload.single('profileImage'), UC.userSignup);

router.post('/login', UC.userLogin);

router.get('/alldata', UC.sequre, UC.userFindAllData);

router.get('/:id', UC.sequre, UC.userFindId);

router.patch('/:id', UC.sequre, UC.userUpdateId);

router.delete('/:id', UC.sequre, UC.userDeleteId);

module.exports = router;
