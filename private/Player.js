var Position = require("./World/Position.js");

Player = function(sock, server) {
    this.sock = sock;

    this.name = "NO NAME, NO GAME";

    this.position = new Position(0, 0, 0);

    var me = this;
    this.sock.on("text", function(evt){
        server.handleInput(me, evt);
    });
    this.sock.on("error", function(evt){
        server.removePlayer(me);
    });
    this.sock.on("close", function(){
        server.removePlayer(me);
    })
}

Player.prototype = {
    send: function(data){
        this.sock.sendText(JSON.stringify(data));

    },
    setPosition: function(pos){
        this.position.copy(pos);
    }
}

module.exports = Player;