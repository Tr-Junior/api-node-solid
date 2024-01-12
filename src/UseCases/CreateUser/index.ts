import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { MongoUserRepository } from "../../repositories/implementations/MongoUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const mongoUserRepository = new MongoUserRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

mongoose.connect('mongodb+srv://junior:M7OopgRPAlax0NKG@cluster0.u5l8x.mongodb.net/?retryWrites=true&w=majority')

const createUserUseCase = new CreateUserUseCase(
    mongoUserRepository,
    mailtrapMailProvider
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserController, createUserUseCase}