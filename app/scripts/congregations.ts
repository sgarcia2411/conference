import { getManager } from "typeorm";
import Congregation from "../models/mysql/congregations/Congregation";

export const arrayCongregations: Array<Congregation> = [
  {
    id: 1,
    name: 'Admin',
    createDate: new Date(),
    updateDate: new Date(),
    deleted: false,
    direction: 'Admin',
    information: 'Admin'
  }
];

getManager('mysqlConnection').getRepository(Congregation).count().then(async (cant) => {
  console.log(`cantidad de usuarios: ${cant}`);
  if(cant !== arrayCongregations.length) {
    getManager('mysqlConnection').getRepository(Congregation).clear();
    getManager('mysqlConnection').getRepository(Congregation).save(arrayCongregations);
  }
});
