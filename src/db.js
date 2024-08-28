import { Sequelize } from './sequelize';

//dbURI is used to find database (Uniform Resource Identifier)
const connectToDB = async (dbURI) => {
  //initializing DB
  console.log('Connecting to DB: ${dbURI}');

  //connecting to DB, creating an object to connect
  const sequelize = new Sequelize(dbURI, {
    logging: console.log,
    dialect: 'postgres',
    define: {
      timestamps: false,
      underscored: true,
    },
    password: 'admin',
  });
  try {
    await sequelize.authenticate();
    console.log('Connected to DB successfully');
  } catch (error) {
    console.error('Unable to connect to DB: ', error);
  }
  return sequelize;
};

export default connectToDB;
