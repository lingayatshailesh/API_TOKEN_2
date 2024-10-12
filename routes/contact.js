var express = require('express');
var router = express.Router();
const CC = require("../controller/contact")
const UC = require("../controller/user")

/* GET users listing. */
router.post('/create', UC.sequre, CC.contactCreate);

router.get('/alldata', UC.sequre, CC.contactFindAllData);

router.get('/:id', UC.sequre, CC.contactFindId);

router.patch('/:id', UC.sequre, CC.contactUpdateId);

router.delete('/:id', UC.sequre, CC.contactDeleteId);

module.exports = router;
