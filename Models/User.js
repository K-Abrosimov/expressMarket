const {Schema,model} = require('mongoose');

const UserModel = new Schema({

    email:{
        type:String,
        required:true,
        unique:true
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default:null
    },
    isActivated:{
        type:Boolean,
        default:false,
    },
    activationLink:{
        type:String
    },
    roles:[
        {value:String,ref:'Role'}
    ]
});



module.exports = new model('User',UserModel);