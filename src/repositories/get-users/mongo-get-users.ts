import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/users";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Paulo",
        lastName: "Pariz",
        email: "paulo@teste.com",
        password: "123456",
      },
    ];
  }
}
