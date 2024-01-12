import Mail from "nodemailer/lib/mailer";
import { IMailProvider, IMessage } from "../IMailProviders";
import nodemailer from "nodemailer";

export class MailtrapMailProvider implements IMailProvider{
    private transporter: Mail;
    constructor(

    ){
        this.transporter = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "f745bb516a67c9",
    pass: "34d5acbc29c7dd"
  }
        });
    }
   async sendMail(message: IMessage): Promise<void> {
await this.transporter.sendMail({
    to:{
        name: message.to.name,
        address: message.to.email 
    },
    from:{
        name: message.from.name,
        address: message.from.email 
    },
    subject: message.subject,
    html: message.body
})    }
}