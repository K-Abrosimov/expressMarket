const cloudImage = require('../Services/cloud.service')




class AuthService {
    async registration(file,user){

       const image = await cloudImage(file);

        return image.url




    }
}


module.exports = new AuthService();