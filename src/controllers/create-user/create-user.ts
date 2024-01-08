import validator from "validator";

import {
  CreateUserParams,
  ICreateUserController,
  ICreateUserRepository,
} from "./protocols";
import { HttpRequest, HttpResponse } from "../protocols";
import { User } from "../../models/user";

export class CreateUserController implements ICreateUserController {
  constructor(private readonly createUserRepository: ICreateUserRepository) {}

  async handle(
    httpRequest: HttpRequest<CreateUserParams>
  ): Promise<HttpResponse<User>> {
    try {
      const requiredFields = ["firstName", "lastName", "email", "password"];

      //validação
      for (const field of requiredFields) {
        if (!httpRequest.body?.[field as keyof CreateUserParams]?.length) {
          return {
            statusCode: 400,
            body: `Fields ${field} is required `,
          };
        }
      }

      //verifica se o email é valido
      const emailIsValid = validator.isEmail(httpRequest.body.email);
      if (!emailIsValid) {
        return {
          statusCode: 400,
          body: "E-mail is not valid",
        };
      }

      const user = await this.createUserRepository.createUser(
        httpRequest.body!
      );

      return {
        statusCode: 201,
        body: user,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Error creating user",
      };
    }
  }
}
