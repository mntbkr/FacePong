var canvasContext = null;
var canvasWidth = 400;

function Paddle(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.x_speed = 0;
}
Paddle.prototype.render = function () {
	canvasContext.fillStyle = "#FFF";
	canvasContext.fillRect(this.x, this.y, this.width, this.height);
};
Paddle.prototype.move = function (x) {
	this.x += x;
	this.x_speed = x;
	if (this.x < 0) {
		this.x = 0;
		this.x_speed = 0;
	} else if (this.x + this.width > canvasWidth) {
		this.x = canvasWidth - this.width;
		this.x_speed = 0;
	}
};
