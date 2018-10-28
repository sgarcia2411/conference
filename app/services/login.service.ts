import { encriptPassword } from "../utils/security";
import User from "../models/mysql/users/User";
import { getManager } from "typeorm";

export default class LoginService {

  async login(credential: any) {
    if(!credential) {
      return;
    }

    const password = encriptPassword(credential.password);
    const user = await getManager('mysqlConnection')
                          .getRepository(User)
                          .createQueryBuilder('user')
                          .leftJoinAndSelect('user.congregation', 'congregation')
                          .where('user.username = :username', { username: credential.username })
                          .getOne();
    if(user.password === password) {
        return {
          username: user.username,
          congregation: user.congregation
        }
    }

    return false;
  }
}
