const orm = require('../config/orm');

console.log('in the model/burger folder');

let burger = {

    // this should get all the burgers
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
        });
    },
    createOne: function (name, cb) {
        orm.create('burgers', ['burger_name', 'devoured'], [name, false], cb);
    },

    // insert the burger


    // update the burger
    update: function (id, cb) {
        let condition = "id=" + id;
        orm.update("burgers", {
            devoured: true
        }, condition, cb);
    }
};
module.exports = burger;