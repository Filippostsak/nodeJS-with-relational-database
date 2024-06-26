const typeorm = require("typeorm");
// require("dotenv").config();

const CategoryEntity = require("./model/Category").CategoryEntity;
const PostEntity = require("./model/Post").PostEntity;

const dataSource = new typeorm.DataSource({
  type: "mariadb",
  host: process.env.HOST,
  port: 3306,
  username: process.env.DBUSER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: true, // Caution with this in production
  entities: [CategoryEntity, PostEntity],
});
// console.log(
//   process.env.DBUSER,
//   process.env.PASSWORD,
//   process.env.DATABASE,
//   process.env.HOST
// );

dataSource
  .initialize()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.log("Problem in connecting to database", error);
  });

module.exports = { dataSource };
