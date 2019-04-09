const mysqlPool = require('../utiles/mysqlPool.js');

function selectByloginAndPwd(loginname, pwd, cb) {
    mysqlPool.pool.getConnection(function (erro, connection) {
        if (erro) {
            console.log(erro);
        } else {
            let sql = `select mid,username,pwd from user where username='${loginname}' and pwd='${pwd}'`;
            connection.query(sql, function (err2, results) {
                cb(results);
            });
        }
        connection.release();
    });
}

function selectByloginname(loginname, cb) {
    mysqlPool.pool.getConnection(function (erro, connection) {
        if (erro) {
            console.log(erro);
        } else {
            let sql = `select mid,username,pwd from user where username='${loginname}'`;
            connection.query(sql, (erro, results) => {
                cb(results);
            });
        }
        connection.release();
    });
}

function insert(username, pwd, cb) {
    mysqlPool.pool.getConnection(function (erro, connection) {
        if (erro) {
            console.log(erro);
        } else {
            let sql = `insert into user(username,pwd) values ('${username}','${pwd}')`;
            connection.query(sql, (erro, results) => {
                if (erro) {
                    cb('erro');
                } else {
                    cb('success');
                }
            });
        }
        connection.release();
    });
}

function search(cb) {
    mysqlPool.pool.getConnection(function (erro, connection) {
        if (erro) {
            console.log(erro);
        } else {
            let sql = `select * from music`;
            connection.query(sql, (erro, results) => {
                if (erro) {
                    cb('erro');
                } else {
                    cb(results);
                }
            });
        }
        connection.release();
    });
}

function selectBook(data, cb) {
    mysqlPool.pool.getConnection(function (erro, connection) {
        if (erro) {
            console.log(erro);
        } else {
            let sql = `select * from bookmenu where bookname=? and author=? and press=?`;
            console.log(data);
            connection.query(sql,[data.bookname,data.author,data.press] ,(erro, results) => {
                if (erro) {
                    cb('erro');
                } else {
                    cb(results);
                }
            });
        }
        connection.release();
    });
}

function insertBook(data,cb){
	mysqlPool.pool.getConnection(function (erro, connection) {
        if (erro) {
            console.log(erro);
        } else {
            selectBook(data,function(res){
            	if(res.length){
            		let inven=parseInt(res[0].inventory)+parseInt(data.num);
            		let sql=`update bookmenu set inventory=${inven} where id=${res[0].id}`;
            		connection.query(sql,(erro, results) => {
		                if (erro) {
		                    cb(erro);
		                } else {
		                    console.log(results)
		                }
            		});
            	}else{
            		let sqll=`insert into bookmenu(bookname,author,press,presstime,mainurl,smurlo,smurlt,price,oldprice,inventory,discount,introduce,introd,cid) 
            		values (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            		connection.query(sqll,[data.bookname,data.author,data.press,data.presstime,data.mainurl,data.smurlo,data.smurlt,data.price,data.oldprice,1,data.discount,data.introduce,data.introd,data.cid],(erro, results) => {
		                console.log(sqll);
		                if (erro) {
		                    cb(erro);
		                } else {
		                    console.log(results)
		                }
            		});
            	}
            })
        }
        connection.release();
    });
}


exports.selectByloginAndPwd = selectByloginAndPwd;
exports.selectByloginname = selectByloginname;
exports.insert = insert;
exports.search = search;
exports.selectBook = selectBook;
exports.insertBook = insertBook;