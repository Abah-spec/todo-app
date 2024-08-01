const express = require('express')
const {createContent, getAllContent, updateContent, getOne, deleteContent} = require('../controller/todoController')
const {authenticator} = require('../middleware/auth1')
const router = express.Router();

// get all user route
router.post('/create-content', authenticator, createContent);

router.get('/one-content/:todoId', authenticator, getOne);

router.get('/all-content',authenticator, getAllContent);

router.patch('/update-content/:todoId',authenticator, updateContent);

router.delete('/delete-content/:todoId', authenticator, deleteContent);

module.exports = router;



