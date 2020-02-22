const Sequelize = require('sequelize');
const path = 'mysql://user:password@localhost:3306/db';

const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: false
});

let Note = sequelize.define('notes', {
    description: Sequelize.STRING
});

async function getOneNote() {

    let user = await Note.findOne();

    console.log(user.get('description'));
    sequelize.close();
}

getOneNote();