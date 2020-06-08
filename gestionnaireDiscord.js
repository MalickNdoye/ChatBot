const {
    Worker, MessageChannel, MessagePort, isMainThread, parentPort
} = require('worker_threads');
const BotDiscord = require("./botdiscord")
const invitetoserv = "https://discord.com/api/oauth2/authorize?client_id=719355770629652500&permissions=1608514801&scope=bot"


module.exports = class gestionnaireDiscord{
    static inviteBotToServ(){
        console.log("lien: d'invitation" + invitetoserv);
    }

    static connect(){
        this.inviteBotToServ();
        this.bot = new BotDiscord();
        console.log("bon, jusquici pas de soucis");
    }

    static addBot(id, brain, channel){
        this.worker.postMessage([id, brain, channel]);
        console.log("j'ai ajouté le bot!");
    }

    static lauchBot(){
        this.worker = new Worker('./discordWorker.js');
    }
}