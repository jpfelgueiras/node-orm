const Sequelize = require('sequelize');
const path = 'mysql://user:password@localhost:3306/db';

const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: false
});

let Note = sequelize.define('notes', {
    description: Sequelize.STRING
});

Note.findOne({
    where: {
        id: 1
    }
}).then(note => {
    console.log(note.get({
        plain: true
    }));
}).finally(() => {
    sequelize.close();
});