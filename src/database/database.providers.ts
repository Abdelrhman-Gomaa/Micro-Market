import { Sequelize } from "sequelize-typescript";
import { User } from "../user/entity/userEntity";
import { Busket } from "../busket/entities/busketEntity";
import { Category } from "../Products/entities/categoriesEntity";
import { Product } from "../Products/entities/productEntity";

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () =>{
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.DATABASE_HOST,
        port: +process.env.DATABASE_PORT,
        username: process.env.DATABASE_USER, // 'postgres'
        password: process.env.DATABASE_PASSWORD, //'pass123' 
        database: process.env.DATABASE_NAME,
        define: {
          timestamps: false
        }
      });
      sequelize.addModels([Product, Category, Busket, User])
      //await sequlize.sync();

      // Check dataBase Connection
      sequelize.authenticate()
      .then(() => {
        console.log('DataBase Connected Successfully');
      }).catch((err) => {
        console.log(`Oobs Database Can't Connected : ${err.message}`)
      })
/*
      Category.sync({alter: true})
        .then(() =>{
          console.log(`Category synchronization In DB Successfully------------------------------`)
        }).catch((err) => {
          console.log(`Can't synchronization Category In BD ------------------------------ ${err.message}`)
        });

      Product.sync({alter: true})
        .then(() =>{
          console.log(`Product synchronization In DB Successfully------------------------------`)
        }).catch((err) => {
          console.log(`Can't synchronization Product In BD ------------------------------ ${err.message}`)
        });

      Busket.sync({alter: true})
        .then(() =>{
          console.log(`Busket synchronization In DB Successfully------------------------------`)
        }).catch((err) => {
          console.log(`Can't synchronization Busket In BD ------------------------------ ${err.message}`)
        });

      User.sync({alter: true})
        .then(() =>{
          console.log(`User synchronization In DB Successfully------------------------------`)
        }).catch((err) => {
          console.log(`Can't synchronization User In BD ------------------------------ ${err.message}`)
        });
*/
      sequelize.sync({alter: true})
        .then(() =>{
          console.log(`Models and relation synchronization In DB Successfully------------------------------`)
        }).catch((err) => {
          console.log(`Can't synchronization Models and relation In BD ------------------------------ ${err.message}`)
        });
      
      return sequelize;
    },
  },
];