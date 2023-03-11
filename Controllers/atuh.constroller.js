const AuthService = require('../Services/auth.service')


class AuthController {

    async registration(req, res, next) {
        try {


      const image = await AuthService.registration(req.file)


      

            return res.json(JSON.parse(req.body.user))
        } catch (error) {

        }
    }




}


module.exports = new AuthController();