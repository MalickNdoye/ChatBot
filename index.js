const express = require('express')
const app = express();
const fs = require('fs');
const Bot = require('./bot');
const Database = require('./database');
const DiscordBot = require('./botdiscord');
const GestionnaireDiscord = require('./gestionnaireDiscord')
var bodyParser = require('body-parser');
var urlencodedparser = bodyParser.urlencoded({ extended: false });


app.use(bodyParser.json());

app.get('/bots/',function(req,res){
    });

app.post('/bots', urlencodedparser, function(req,res){
    let receivedBrain = req.body.brain;
    let receivedChannel = req.body.channel;
    if (receivedBrain != undefined)
    {
        let newBot = new Bot(Database.getCurrentId(), receivedBrain, '');
        Database.incrCurrentId();
        Database.addBot(newBot);
    }
    else
    {
        console.log("Le body de la requete doit contenir un élément 'brain'.");
    }
    if (receivedChannel != undefined)
    {
        Database.updateBotChannel(Database.getCurrentId-1, receivedChannel);
    }
});

app.listen(8080,function(){
    console.log('Ca tourne.');
    let bot = new Bot(0,"basicBrain","chatbot")
    bot.start();
    let  promisedAnswer = bot.ask("Hi");
    promisedAnswer.then(function(answer){console.log(answer)});
    promisedAnswer = bot.ask("Bite");
    promisedAnswer.then(function(answer){console.log(answer)});
});