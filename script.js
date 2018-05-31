var init = function () {

    var header = document.getElementById("header")
    header.textContent = "Hello Javascript!"

    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d")
    context.font = "20px Arial";
    context.textAlign = "center"
    context.fillText("Hello Canvas!", 150, 50);

};
