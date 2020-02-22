const Sequelize = require('sequelize');
const path = 'mysql://user:password@localhost:3306/db';
const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: false
});

let Note = sequelize.define('notes', {
    description: Sequelize.STRING
});

async function deleteRow() {

    let n = await Note.destroy({
        where: {
            id: 2
        }
    });
    console.log(`number of deleted rows: ${n}`);

    sequelize.close();
}

deleteRow();