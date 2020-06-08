const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "+";
const Bot = require('./bot')
const DISCORD_BOT_TOKEN = NzE5MzU1NzcwNjI5NjUyNTAw.Xt4OhQ.jzmbsx2SvCuequmjl1Ym-BdQuMs;
module.exports = class BotDiscord{
    constructor(){
        client.login(DISCORD_BOT_TOKEN);
        this.bots = [];
    }

    static addChatBot(id, brain, channel){
        let newbot = new Bot(id, brain, channel);
        this.bots.push(newbot);
    }
}