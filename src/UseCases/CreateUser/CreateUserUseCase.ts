import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProviders";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider,
    ){}

    async execute(data: ICreateUserRequestDTO){
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
    if(userAlreadyExists){
        throw new Error("User already exists");
    }
    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
        to: {
            name: data.name,
            email: data.email,
        },
        from: {
            // Ajuste para atender à expectativa de 'from' do tipo 'IMessage'
            email: 'solidApi@mail.com',
            name: 'equipe do solidApi',
        },
        subject: 'Bem-vindo ao solidApi',
        body: '<p>Olá, sua conta foi criada com sucesso!</p>',
    });
    
    }
}