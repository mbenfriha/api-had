'user strict';
var sql = require('../db.js');

//Task object constructor
var Had = function(had){
    this.title = had.title;
    this.classification_id = had.classification_id;
    this.text = had.text;
    this.arabe = had.arabe;
};
Had.createHad = function createUser(newHad, result) {
    sql.query("INSERT INTO had set ?", newHad, function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Had.getHadById = function createUser(hadId, result) {
    sql.query("Select title from had where id = ? ", hadId, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);

        }
    });
};
Had.getAllHad = function getAllHad(result) {
    sql.query("SELECT * FROM had inner join category_had on had.id = category_had.had_id inner join (select name as category, id from category) c on c.id=category_had.category_id", function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('had : ', res);

            result(null, res);
        }
    });
};
Had.updateById = function(id, title, classification_id, text, arabe, result){
    sql.query("UPDATE had SET title = ? AND SET classification_id = ? AND SET text = ? AND SET arabe = ?  WHERE id = ?", [had.name, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};
Had.remove = function(id, result){
    sql.query("DELETE FROM had WHERE id = ?", [id], function (err, res) {

        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{

            result(null, res);
        }
    });
};

module.exports= Had;