What = function(cmd, player, server){
    this.cmd = cmd;
    this.player = player;
}

What.prototype = {
    process: function(){
        this.player.send("What?");
    }
}

module.exports = What;