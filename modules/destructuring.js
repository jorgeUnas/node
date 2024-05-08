/* celsius-to-fahrenheit.js */
const { celsiusToFahrenheit } = require('./module-exports.js');

const celsiusInput = process.argv[2]; 
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);

console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`);