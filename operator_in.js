const Sequelize = require('sequelize');
const Op = Sequelize.Op;

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
        where: {
            id: {
                [Op.in]: [3, 6]
            }
        }
    });

    notes.forEach(note => {
        console.log(`${note.id}: ${note.description}`);
    });

    sequelize.close();
}

getRows();