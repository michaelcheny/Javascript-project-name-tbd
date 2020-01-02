class Harden {
  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.maxSpeed = 5;
    this.speed = 0;

    this.size = {
      x: 85,
      y: 164
    };

    this.position = {
      x: this.gameWidth / 2 - this.size.x / 2,
      y: this.gameHeight - this.size.y - 5
    };
  }

  dashLeft() {
    this.speed = -this.maxSpeed;
  }

  dashRight() {
    this.speed = +this.maxSpeed;
  }

  stop() {
    this.speed = 0;
  }

  draw(ctx) {
    let img = document.getElementById("harden-face");
    ctx.drawImage(img, this.position.x, this.position.y, this.size.x, this.size.y);
  }

  update(changeInTime) {
    if (!changeInTime) return;
    this.position.x += this.speed;
    if (this.position.x < 0) this.position.x = 0;
    if (this.position.x + this.size.x > this.gameWidth)
      this.position.x = this.gameWidth - this.size.x;
  }
}
