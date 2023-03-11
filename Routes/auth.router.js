const {Router} = require('express');
const AuthController = require('../Controllers/atuh.constroller');
const upload = require('../middlewares/upload.middleware');


const router = Router();


router.post('/registration',upload.single('avatar'),AuthController.registration)



module.exports = router;