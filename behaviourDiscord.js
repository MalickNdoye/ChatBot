const {
    Worker, MessageChannel, MessagePort, isMainThread, parentPort
} = require('worker_threads');

const Discord = require('discord.js');
const client = new Discord.Client();
const DISCORD_BOT_TOKEN = 'NzE5MzU1NzcwNjI5NjUyNTAw.Xt4OhQ.jzmbsx2SvCuequmjl1Ym-BdQuMs' ;
const Bot = require('./bot')
const bots = []
client.login(DISCORD_BOT_TOKEN);

parentPort.on("message", (message) => {
    let bot = new Bot(message[0], message[1], message[2]);
    bot.start();
    bots.push(bot);
})


client.on("message", (message) => {
    let chan = message.channel.id
    let answer = '';
    for(let i = 0; i < bots.length; i++){
        if(bots[i].channel == chan){
            answer = bots[i].ask(message.content);
        }
    }
    answer.then(function(reply){if(reply != ''){message.channel.send(reply);}})

})