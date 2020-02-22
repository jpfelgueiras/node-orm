const Sequelize = require('sequelize');
const path = 'mysql://user:password@localhost:3306/db';
const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: false
});

let Note = sequelize.define('notes', {
    description: Sequelize.STRING
});

async function getRows() {

    let notes = await Note.findAll({
        offset: 2,
        limit: 3,
        attributes: ['id', 'description'],
        raw: true
    });

    console.log(notes);

    sequelize.close();
}

getRows();