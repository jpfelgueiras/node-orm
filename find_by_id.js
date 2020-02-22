const Sequelize = require('sequelize');
const path = 'mysql://user:password@localhost:3306/db';

const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: false
});

let Note = sequelize.define('notes', {
    description: Sequelize.STRING
});

Note.findByPk(2).then((note) => {
    console.log(note.get({
        plain: true
    }));
    console.log('********************')
    console.log(`id: ${note.id}, description: ${note.description}`);
}).finally(() => {
    sequelize.close();
});