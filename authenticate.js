const Sequelize = require('sequelize');

const path = 'mysql://user:password@localhost:3306/db';
const sequelize = new Sequelize(path, { operatorsAliases: false });

sequelize.authenticate().then(() => {
    console.log('Connection established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
}).finally(() => {
    sequelize.close();
});