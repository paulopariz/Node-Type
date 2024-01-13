import { User } from "@linear/sdk";
import { HttpResponse, IController } from "../protocols";
import { IGetUsersRepository } from "./protocols";
import { ok, serverError } from "../helpers";

export class GetUsersController implements IController {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}
  async handle(): Promise<HttpResponse<User[] | string>> {
    try {
      const users = await this.getUsersRepository.getUsers();

      return ok<User[]>(users);
    } catch (error) {
      return serverError();
    }
  }
}
