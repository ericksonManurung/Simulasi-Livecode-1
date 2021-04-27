const {User} = require('../models')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

class UserController{
    static register(req,res,next){
        const {email,password} = req.body
        User.create({email,password})
        .then((user) => {
            res.status(201).json({success:true, data:user})
        }).catch((err) => {
            next(err)
        });
    }

    static login(req,res,next){
        const {email,password} = req.body
        User.findOne({where:{email}})
        .then((user) => {
            // console.log(user)
            if(user && bcrypt.compareSync(password, user.password)){
                const access_token = jwt.sign({ id:user.id, email:user.email  },process.env.JWT_SECREATE);
                res.status(200).json({success:true, access_token})
            }else{
                throw{name:'LOGIN_ERROR'}
            }
        }).catch((err) => {
            next(err)
        });
    }


    static photos(req,res){
        res.send('photos')
    }
}

module.exports = UserController