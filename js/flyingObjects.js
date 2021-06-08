class FlyingObject {
  constructor() {
    this.x = Math.round(Math.random() * window.innerWidth + 10);
    this.y = Math.round(Math.random() * window.innerHeight + 10);
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
  }

  move() {
    this.x += this.x_speed;
    this.y += this.y_speed;
    this.deg = (this.deg + this.deg_speed) % 360;
  }

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
