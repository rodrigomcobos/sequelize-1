import { DataTypes, Model } from 'sequelize';
import connectToDB from './db.js';
import url from 'url';
import util from 'util';

const db = await connectToDB('postgresql:///employees'); // <= dbURI as argument

//creating table
//Model is a class for creating a table
//Department is the name of the table
class Department extends Model {} //declaring new class, empty object
//Object1 = Columns
//Object2 = Table name and Calling db function to plug into db
Department.init(
  {
    deptCode: {
      type: DataTypes.STRING(4),
      primaryKey: true,
    },
    deptName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    phone: DataTypes.STRING,
  },
  {
    modelName: 'department', //table name
    sequelize: db, //calling the function up top
  }
);

//Employees is the name of the table
class Employee extends Model {} //declaring new class, empty object
//Object1 = Columns
//Object2 = Table name and Calling db function to plug into db
Employee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(30),
      primaryKey: true,
      allowNull: false, //name is required
    },
    state: {
      type: DataTypes.STRING(2),
      allowNull: false, //state is required
      defaultValue: 'CA', //placeholder
    },
    salary: DataTypes.INTEGER,
    deptCode: {
      type: DataTypes.STRING(4),
      allowNull: false, //deptCode is required
    },
  },
  {
    modelName: 'employee', //table name, sequelize pluralizes the name
    sequelize: db, //calling the function up top
  }
);

//To sync to database after checking condition
if (process.argv[1] === url.fileURLToPath(import.meta.url)) {
  console.log('Syncing database...');
  await db.sync();
  console.log('Database synced');
}

export { Department, Employee };
