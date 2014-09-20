var S = require("string");
var Echo = require("./Echo.js");
var What = require("./What.js");

Handler = function(){
}

Handler.prototype = {
    process: function(command, player, server){
        var cmdType = command.split(" ")[0];
        var handler;
        var instructions = command.substr(command.indexOf(" ")).trimLeft();
        console.log("got:", cmdType);
        switch(cmdType)
        {
            case "echo":
                handler = new Echo(instructions, player, server);
                break;
            default:
                handler = new What(instructions, player, server);
                break;
        }
        handler.process();
        return true;
    }
}

module.exports = Handler;