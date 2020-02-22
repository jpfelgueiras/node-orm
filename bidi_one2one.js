const Sequelize = require('sequelize');

const path = 'mysql://user:password@localhost:3306/db';
const sequelize = new Sequelize(path, {
    operatorsAliases: false,
    logging: false
});

let Employee = sequelize.define('employees', {
    name: Sequelize.STRING
});

let Project = sequelize.define('projects', {
    name: Sequelize.STRING
});

Employee.belongsTo(Project);
Project.hasOne(Employee);

Project.findAll({
    include: [Employee]
}).then(projects => {

    projects.forEach(project => {
        console.log(`${project.name} belongs to user ${project.employee.name}`);
    });
}).finally(() => {
    sequelize.close();
});