import { Request, Response } from 'express';

import nodemailer from 'nodemailer';

export const contato = async (req: Request, res: Response) => {

    let transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "787c0ef51d315d",
            pass: "ddf0519a71f621"
        }
    });

    let menssage = {
        from: 'OFNET <naoresponda@ofnet.com.br>',
        to: 'suporte@ofnet.com.br',
        replyTo: req.body.to,
        subject: req.body.subject,
        html: req.body.email,
        text: req.body.email
    };

    let envio = await transport.sendMail(menssage);

    console.log({ envio });

    res.json({ success: true });
}