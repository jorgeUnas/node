/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below
module.exports.circleArea = (radius) => {
  return PI * radius * radius; 
}

module.exports.squareArea = (side) => {
  return side * side; 
}