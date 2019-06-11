'use strict';
module.exports = function(app) {
    var had = require('../controller/appController');

    // todoList Routes
    app.route('/hads')
        .get(had.list)
        .post(had.create);

    app.route('/had/:hadId')
        .get(had.read)
        .put(had.update)
        .delete(had.delete);
};