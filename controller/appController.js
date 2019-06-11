'use strict';

var Had = require('../model/appModel.js');

exports.list = function(req, res) {
    Had.getAllHad(function(err, had) {

        console.log('controller');
        if (err)
            res.send(err);
        console.log('res', had);
        res.send(had);
    });
};



exports.create = function(req, res) {
    var new_had = new Had(req.body);

    //handles null error
    if(!new_had.title || !new_had.classification_id || !new_had.text || !new_had.arabe){
        console.log(!new_had.title, !new_had.classification_id, !new_had.text, !new_had.arabe, new_had);
        res.status(400).send({ error:true, message: 'Please provide all fields' });

    }
    else{

        Had.createHad(new_had, function(err, had) {

            if (err)
                res.send(err);
            res.json(had);
        });
    }
};


exports.read = function(req, res) {
    Had.getHadById(req.params.hadId, function(err, had) {
        if (err)
            res.send(err);
        res.json(had);
    });
};


exports.update = function(req, res) {
    Had.updateById(req.params.hadId, new Had(req.body), function(err, had) {
        if (err)
            res.send(err);
        res.json(had);
    });
};


exports.delete = function(req, res) {


    Had.remove( req.params.hadId, function(err, had) {
        if (err)
            res.send(err);
        res.json({ message: 'Had successfully deleted' });
    });
};