require('dotenv').config();
//const {faker} = require('@faker-js/faker');

const app = require('./app');
require('./database');

//Promesa para correr mi servidor
async function main(){
    await app.listen(app.get('port'));
    console.log('Server run port ' + app.get('port'));
}

main();