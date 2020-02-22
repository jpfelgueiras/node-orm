const Sequelize = require('sequelize');
const path = 'mysql://user:password@localhost:3306/db';
const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: false
});

let User = sequelize.define('user', {
    name: Sequelize.STRING
});

let Task = sequelize.define('task', {
    description: Sequelize.STRING
});

User.hasMany(Task);
Task.belongsTo(User);

async function showTaskUser() {

    let task = await Task.findOne({
        include: [User]
    });

    console.log(`${task.description} belongs to ${task.user.name}`);

    sequelize.close();
}

showTaskUser();