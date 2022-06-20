let [mouseX, mouseY] = [0,0];

document.addEventListener("mousemove", function(event) {
  mouseX = event.pageX;
  mouseY = event.pageY;
})

class FlyingObject {
  constructor(x, y, createdWithMouse) {
    this.x = x || Math.round(Math.random() * window.innerWidth + 10);
    this.y = y || Math.round(Math.random() * window.innerHeight + 10);
    this.shape = Math.floor(Math.random() * 3);
    this.h = 3 + this.shape;
    this.x_speed =
      (Math.random() * 0.1 + 0.1) * (Math.round(Math.random()) || -1);
    this.y_speed =
      (Math.random() * 0.1 + 0.1) * (Math.round(Math.random()) || -1);
    this.noDelete = true;
    this.fill = false;
    this.deg = 0;
    this.deg_speed = Math.random() * 0.06 + 0.02;
    setTimeout(() => {
      this.move = this.lateMove;
    }, createdWithMouse ? 2000 : 0)
  }

  // move randomly
  move() {
    this.x += this.x_speed;
    this.y += this.y_speed;
    this.deg = (this.deg + this.deg_speed) % 360;
  }

  lateMove() {
    this.x += this.x_speed;
    this.y += this.y_speed;
    this.deg = (this.deg + this.deg_speed) % 360;
    // run from mouse
    if (Math.sqrt((this.x - mouseX) ** 2 + (this.y - mouseY) ** 2) < 30) {
      this.x += (this.x - mouseX) / 15
      this.y += (this.y - mouseY) / 15
      this.x_speed += (this.x - mouseX) / 150;
      this.y_speed += (this.y - mouseY) / 150;
    }
  }

  // destroy when out of screen
  destroy(screenWidth, screenHeight) {
    if (
      this.x > screenWidth + 4 ||
      this.x < -4 ||
      this.y > screenHeight + 4 ||
      this.y < -this.h - 4
    )
      this.noDelete = false;
  }
}

export default FlyingObject;
