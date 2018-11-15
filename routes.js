var express = require('express');
var app = express();
var router = express.Router();
var cors = require('cors');


var group_controller = require('/home/naajyothi/javascriptexamples/mean-stack-problem/controllers/group.controller')
router.post('/creategroup',cors() , group_controller.group_create)
router.get('/groupdetails',cors(), group_controller.group_details)
router.get('/:id', cors(), group_controller.group_details_by_id)
router.patch('/groupupdate/:id',cors(), group_controller.group_update)
router.delete('/delete/:id',cors(), group_controller.group_delete)
module.exports = router
