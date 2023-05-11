const Role = require('./models/role')
const user = require('./models/user')
const User = require('./models/user')

class authController {
  async registration(req, res) {
   try {

   } catch(e){

   }
  }
  async login(req, res){
  try {

  } catch(e){

  }
  }
  async getUsers(req, res){
  try {
      const userRole = new Role()
      const adminRole = new Role({value:"ADMIN"})
      await userRole.save()
      await adminRole.save()
      res.json("server work")
  } catch(e){

  }
  }
}

module.exports = new authController()