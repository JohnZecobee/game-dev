var init = function () {

    var header = document.getElementById("header")
    header.textContent = "Hello Javascript!"

    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d")
    context.font = "20px Arial";
    context.textAlign = "center"
    context.fillText("Hello Canvas!", 150, 50);

    canvas.addEventListener('click', click_handler);
};

var click_handler = function (event) {
    position = getRelativeCoords(event);
    console.log(position.x, position.y)
}

var getRelativeCoords = function (event) {
    return { x: event.offsetX, y: event.offsetY };
}
