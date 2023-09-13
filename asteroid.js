// Asteroid.js
class Asteroid {
  constructor(x, y, size, speed, shape, rotationAngle) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.shape = shape;
    this.rotationAngle = rotationAngle;
  }

  move() {
    // Update the position of the asteroid based on its speed and angle
    const deltaX = this.speed * Math.cos(this.rotationAngle);
    const deltaY = this.speed * Math.sin(this.rotationAngle);
    this.x += deltaX;
    this.y += deltaY;
  }
}