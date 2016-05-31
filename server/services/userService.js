/**
 * Created by jbush_000 on 5/31/2016.
 */
var bcrypt = require('bcrypt');

class UserService {
  constructor() {

  }
  static getHashedPassword(password) {
    bcrypt.hash(password, 8, function(err, hash){
      if(err)
      {
        console.log(err);
      }
      return hash;
    })
  }
  }

module.exports = UserService;