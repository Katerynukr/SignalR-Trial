"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/paintHub").build();

connection.start();

connection.on("GetCoordinates", function (x, y) {
    drawCircle(x, y);
});

var el = document.getElementById("dots");
var two = new Two({
    fullscreen: true
});
two.appendTo(el);
var drawCircle = function (x, y) {
    var circle = two.makeCircle(x, y, 5);
    circle.fill = "green";

    connection.invoke("SendCoordinates", x, y);

    two.update();
}
$("#dots").click(function (e) {
    drawCircle(e.pageX, e.pageY);
});