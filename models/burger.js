const orm = require('../config/orm');

console.log('in the model/burger folder');

const burger ={

    // this should get all the burgers
    selectAll: function() {
        
    },
    createOne:function(name, cb) {
        orm.create("burgers",['burger_name', 'devoured'],[name, false], cb) 
    }
}

// insert the burger


// update the burger


module.exports = burger;