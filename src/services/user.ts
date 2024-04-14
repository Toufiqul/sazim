import { prismaClient } from "../lib/db";
import JWT from "jsonwebtoken";

const JWT_SECRET = "sazim2";

export interface CreateUserPayload {
  firstName: string;
  email: string;
  password: string;
}

export interface GetUserTokenPayload {
  email: string;
  password: string;
}

class UserService {
  public static createUser(payload: CreateUserPayload) {
    const { firstName, email, password } = payload;

    return prismaClient.user.create({
      data: {
        firstName,
        email,
        password,
      },
    });
  }

  private static getUserByEmail(email: string) {
    return prismaClient.user.findUnique({ where: { email } });
  }

  public static async getUserToken(payload: GetUserTokenPayload) {
    const { email, password } = payload;

    const user = await UserService.getUserByEmail(email);

    if (!user) throw new Error("user not found");

    if (password !== user.password) throw new Error("Incorrect Password");

    const token = JWT.sign({ id: user.id, email: user.email }, JWT_SECRET);
    return token;
  }
}

export default UserService;
