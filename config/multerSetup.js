const multer = require('multer');

const storage = multer.diskStorage({
    filename: function (req, file, callback) {
        callback(null, Date.now() + file.originalname);
    }
});

const imageFilter = function (req, file, cb) {
    if(![file.originalname.match(/\.(jpg|jpeg|gif|png)$/i)]){
        return cb(new Error('Only image files are allowed!'), false)
    }

    cb(null, true)
}

const upload = multer({
    storage,
    imageFilter
})

module.exports = upload;