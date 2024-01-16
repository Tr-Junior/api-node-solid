seimport { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { MongoUserRepository } from "../../repositories/implementations/MongoUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const mongoUserRepository = new MongoUserRepository();
const mailtrapMailProvider = new MailtrapMailProvider();


const createUserUseCase = new CreateUserUseCase(
    mongoUserRepository,
    mailtrapMailProvider
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserController, createUserUseCase}
