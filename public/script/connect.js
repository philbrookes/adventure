var sock = new WebSocket("ws://adventure.phil.daft.ie.dev:8801");

sock.onmessage = function(evt){
    var data = JSON.parse(evt.data);
    process(data);
}

function send(msg){
    console.log("msg:", msg);
    var data = {};
    data.value = msg;
    sock.send(JSON.stringify(data));
    console.log("sent:", JSON.stringify(data));
}

function process(data){
    $("#main-output").append(data, "\n");
}

$("document").ready(function(){
    $("#console").submit(function(evt){
        send($("#main-input").val());
        $("#main-input").select();
        return false;
    });
})
