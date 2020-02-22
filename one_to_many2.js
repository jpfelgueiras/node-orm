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
    description: Sequelize.STRING,
});

User.hasMany(Task);

let mytasks1 = [{
    description: 'write memo'
}, {
    description: 'check accounts'
}];

let mytasks2 = [{
        description: 'make two phone calls'
    },
    {
        description: 'read new emails'
    },
    {
        description: 'arrange meeting'
    }
];

async function addUsersTasks() {

    let user1 = await User.create({
        name: 'John Doe'
    });
    let tasks1 = await Task.bulkCreate(mytasks1);

    await user1.setTasks(tasks1);

    let user2 = await User.create({
        name: 'Debbie Griffin'
    });
    let tasks2 = await Task.bulkCreate(mytasks2);

    await user2.setTasks(tasks2);

    console.log('done');
    sequelize.close();
}

addUsersTasks();