const {User} = require('../models')

class UserController{
    static register(req,res,next){
        const {email,password} = req.body
        User.create({email,password})
        .then((user) => {
            res.status
        }).catch((err) => {
            next(err)
        });
    }

    static login(req,res){
        res.send('login')
    }


    static photos(req,res){
        res.send('photos')
    }
}

module.exports = UserController