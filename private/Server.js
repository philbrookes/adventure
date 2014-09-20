var ws             = require('nodejs-websocket');
var Player         = require("./Player.js");
var CommandHandler = require("./Command/Handler.js");

var config = require('config.json')('./config.json');

Server = function(){
    var me = this;
    this.players = [];
    this.handler = new CommandHandler();
    //listen for connections
    var server = ws.createServer(function(sock){
        var player = new Player(sock, me);
        me.addPlayer(player);
    }).listen(config.connection.port);
    console.log("Listening on: ", config.connection.port)
}

Server.prototype = {
    handleInput: function(player, data){
        data = JSON.parse(data);
        this.handler.process(data.value, player, this);
    },

    removePlayer: function(player){
        var i = this.players.indexOf(player);
        if(i > -1){
            this.players.splice(i, 1);
        }
    },

    addPlayer: function(player){
        this.players.push(player);
    },

    sendToOthersInRoom: function(msg, player){
        var playerI = this.players.indexOf(player);
        for(var i=0, len = this.players.length; i < len; i++){
            if(i === playerI){
                continue;
            }
            if(player.position.equals(this.players[i].position)){
                this.players[i].send(msg);
            }
        }
    }
}

module.exports = Server;