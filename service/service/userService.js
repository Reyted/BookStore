const userdb=require('../db/userdb.js');

function login(username,pwd,cb){
    userdb.selectByloginAndPwd(username,pwd,function(results){
         if(results.length){
             cb(results);
         }else{
             cb(false);
         }
    });
}

function vertifyUsername(username,cb){
    userdb.selectByloginname(username,function(results){
        if(results.length){
            cb('username_exit');
        }else{
            cb('true');
        }
    });
}

function reg(username,pwd,cb){
    userdb.selectByloginname(username,function(results){
        if(results.length){
            cb('username_exit');
        }else{
            userdb.insert(username,pwd,function(result){
                if(result=='erro'){
                    cb('erro');
                }else{
                    cb('success');
                }
            });
        }
    });
}

function insertBook(data,cb){
	userdb.insertBook(data,function(res){
		cb(res);
	})
}

exports.login=login;
exports.reg=reg;
exports.vertifyUsername=vertifyUsername;
exports.insertBook=insertBook;