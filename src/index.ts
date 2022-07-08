import { config } from 'dotenv';
import { Bot } from './bot';

config({
    override: true
});

let TOKEN = process.env.BOT_TOKEN;
if (!TOKEN) {
    console.error("Please assign your bot token with the key 'BOT_TOKEN' in your .env file");
    process.exit(9);
}

const start = async (token: string) => {
    const bot = new Bot(token);
}

start(TOKEN);