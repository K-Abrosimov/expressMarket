const multer = require('multer');

const storage = multer.memoryStorage();

function fileFilter (req, file, cb) {

    if(file.mimetype == 'image/jpg' || file.mimetype == 'image/png' || file.mimetype == 'image/jpeg'){
        cb(null, true)
    }
    else{
        cb(null, false)
        return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }   
  }


module.exports = multer({ storage: storage,fileFilter, limits: { fileSize: 50000 } });