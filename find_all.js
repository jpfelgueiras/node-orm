const Sequelize = require('sequelize');
const path = 'mysql://user:password@localhost:3306/db';
const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: false
});

let Note = sequelize.define('notes', {
    description: Sequelize.STRING
});

async function findAllRows() {

    let notes = await Note.findAll({
        raw: true
    });
    console.log(notes);

    sequelize.close();
}

findAllRows();