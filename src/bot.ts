import TelegramBot from "node-telegram-bot-api";

export class Bot {
    private mTelegramBot: TelegramBot;

    constructor(token: string) {
        this.mTelegramBot = new TelegramBot(token, {
            polling: true
        });
        this.mTelegramBot.on('message', (message: TelegramBot.Message) => {
            const date = new Date();
            console.log(`[${this.getDigestDate()}]: ${message.text}`);
        });
    }

    private getDigestDate(): string {
        const date = new Date();
        let disgestDate = "";
        //
        disgestDate += `${date.getFullYear()}/`;
        const month = date.getMonth() + 1;
        disgestDate += `${month < 10 ? ('0' + month) : month}/`;
        const day = date.getDate();
        disgestDate += `${day < 10 ? ('0' + day) : day} `;
        const hour = date.getHours();
        disgestDate += `${hour < 10 ? ('0' + hour) : hour}:`;
        const minutes = date.getMinutes();
        disgestDate += `${minutes < 10 ? ('0' + minutes) : minutes}:`;
        const seconds = date.getSeconds();
        disgestDate += `${seconds < 10 ? ('0' + seconds) : seconds}`;
        //
        return disgestDate;
    }


}