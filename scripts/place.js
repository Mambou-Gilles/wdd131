
const temperature = -5; // °C
const windSpeed = 10;  // km/h

function calculateWindChill(temp, wind) {
   return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
}


if (temperature <= 10 && windSpeed > 4.8) {
  const windchill = calculateWindChill(temperature, windSpeed).toFixed(2);
 
  document.querySelector(".value").innerHTML += `${windchill} °C`;  // Adjust selector as needed
} else {
  document.getElementById(".value").innerHTML += ` N/A`; // Adjust selector as needed
}
