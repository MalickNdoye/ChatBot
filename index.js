const express = require('express')
const app = express();
const Bot = require('./bot');
const Database = require('./database');
const DiscordBot = require('./botdiscord');
const GestionnaireDiscord = require('./gestionnaireDiscord')
var bodyParser = require('body-parser');
var urlencodedparser = bodyParser.urlencoded({ extended: false });


app.get('/bots/',function(req,res){
    let id = req.query.id;
    if (id != undefined)
    {
        id = parseInt(id);
        let botAsked = Database.getBot(id);
        if (botAsked != undefined)
        {
            res.send(botAsked);
            console.log('Fichier envoyé');
        }
        else
        {
            res.send('basicBrain');
            console.log("Le bot " + parseInt(id) + " n'existe pas");
        }
    }
    else
    {
        console.log("le paramètre 'id' ne peut pas être à 'undefined'");
    }
});

app.post('/bots', urlencodedparser, function(req,res){
    let sentBody = req.body;
    console.log(sentBody);
});

app.listen(8080,function(){
    GestionnaireDiscord.addBot(1,'basiBrain','Chatbot');
    console.log('Ca tourne.');
});