import { PrismaClient } from "@prisma/client";
import { SqliteUsersRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const sqliteUsersRepository = new SqliteUsersRepository()
const createUserUseCase = new CreateUserUseCase(sqliteUsersRepository)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController, createUserUseCase }