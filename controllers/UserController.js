class UserController{
    static register(req,res){
        res.send('hello')
    }

    static login(req,res){
        res.send('login')
    }
}

module.exports = UserController