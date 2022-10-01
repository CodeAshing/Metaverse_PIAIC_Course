const city_country = (city, country = 'Pakistan') =>
    `${city}, ${country} `


console.log(city_country(`Karachi`, `Pakistan`))
console.log(city_country(`Islamabad`, `Pakistan`))
console.log(city_country(`Lahore`))