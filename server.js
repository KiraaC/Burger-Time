const express = require('express');
const exphds = require('express-handlebars');

const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());

app.set('view engine', 'handlebars');
app.engine('handlebars', exphds({defaultLayout: 'main'}));

let routes = require('./controllers/burgers_controllers');
app.use('/', routes);

app.listen(port, function(){
    console.log('listening to server PORT');
});