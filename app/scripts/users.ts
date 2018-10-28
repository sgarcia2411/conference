import { getManager } from "typeorm";
import User from "../models/mysql/users/User";
import { encriptPassword } from "../utils/security";
import { arrayCongregations } from "./congregations";

export const arrayUsers: Array<User> = [
  {
    id: 1,
    username: 'admin',
    password: encriptPassword('admin'),
    tokenid: '',
    fullname: 'Usuario Administrador',
    phone: '',
    email: '',
    congregation: arrayCongregations[0],
    createDate: new Date(),
    updateDate: new Date(),
    deleted: false,
  }
];

getManager('mysqlConnection').getRepository(User).count().then(async (cant) => {
  console.log(`cantidad de usuarios: ${cant}`);
  if(cant !== arrayUsers.length) {
    getManager('mysqlConnection').getRepository(User).clear();
    getManager('mysqlConnection').getRepository(User).save(arrayUsers);
  }
});
