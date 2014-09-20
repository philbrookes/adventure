Echo = function(cmd, player, server){
    this.cmd = cmd;
    this.player = player;
    this.server = server;
}

Echo.prototype = {
    process: function(){
        this.player.send("you echoed: " + this.cmd);
        this.server.sendToOthersInRoom(this.player.name + " echoed: " + this.cmd, this.player);
    }
}

module.exports = Echo;