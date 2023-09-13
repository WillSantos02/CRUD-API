import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRespository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Wirlley",
        lastName: "Santos",
        email: "wirlley.santos@icloud.com",
        password: "abc123",
      },
    ];
  }
}
