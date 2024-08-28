import { Department, Employee } from './src/model.js';

//Inserting data into Department
// const legal = await Department.create({
//   deptCode: 'legal',
//   deptName: 'Legal',
//   phone: '000-000-0000',
// });

// console.log(legal);

//Inserting data into Employee
// const leonard = await Employee.create({
//   name: 'Leonard',
//   state: 'UT',
//   salary: 50000,
//   deptCode: 'legal',
// });

// const leonard = await Employee.findOne();

// console.log(leonard);

// leonard.salary = 100000;
// await leonard.save();
// console.log(leonard);

// Adding new employee Sarah
// await Employee.create({
//   name: 'Sarah',
//   state: 'CA',
//   salary: 200000,
//   deptCode: 'legal',
// });

// Adding new employee John
// await Employee.create({
//   name: 'John',
//   state: 'CA',
//   salary: 300000,
//   deptCode: 'legal',
// });

//Log all employees on the table
// const employees = await Employee.findAll();
// console.log(employees);

//Find employee by name
// const sarah = await Employee.findOne({ where: { name: 'Sarah' } });
// console.log(sarah);

//Find employee by primary key
// const leonard = await Employee.findByPk(1);
// console.log(leonard);

// await Employee.update(
//   { state: 'CA' },
//   {
//     where: { id: 1 },
//   }
// );

const sarah = await Employee.findByPk(3);
console.log(await sarah.getDepartment());
