const express = require('express');
const router = express.Router();
const verify = require('../../middleware/authjwt');
const upload = require('../../config/multerSetup')

const createPost = require('../../controllers/post/createPost')

router.post('/', verify, upload.single('postMedia'), createPost)

module.exports = router;