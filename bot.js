FileReader = require('./fileReader.js')

module.exports = class Bot{
    constructor(id, brain, channel){
        this.id = id;
        this.brain = FileReader.textFromPath(brain);
        this.channel = channel;
    }

    setBrain(brainFile) {
        this.brain = FileReader.textFromPath(brain);
    }

    setChannel(channel) {
        this.chanel = channel ;
    }

    async start()
    {
        this.chatBot = new RiveScript();
        fs.writeFile('uselessFile.rive', this.brain, function (err) {
            if (err) return console.log(err);
        });
        let transmitionDeThisALInterieurDeLaFonctionLoadFileQuiArriveJusteApres = this;
        this.chatBot.loadFile('uselessFile.rive').then(function(){
            transmitionDeThisALInterieurDeLaFonctionLoadFileQuiArriveJusteApres.chatBot.sortReplies();
        }).catch(function(error) {
            console.log("Erreur lors de l'ouverture du brain : " + error);
        });

    }

    async ask(question) {
        let reply = this.chatBot.reply('local-user', question);
        return reply;
    }

}
