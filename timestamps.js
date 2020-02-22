const Sequelize = require('sequelize');
const path = 'mysql://user:password@localhost:3306/db';
const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: false,
    define: {
        timestamps: false
    }
});

let Dummy = sequelize.define('dummy', {
    description: Sequelize.STRING
});

sequelize.sync({
    force: true
}).then(() => {

    Dummy.create({
        description: 'test 1'
    }).then(() => {
        console.log('table created');
    }).finally(() => {
        sequelize.close();
    });
});