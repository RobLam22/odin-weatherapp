console.log('working');

import { callGiphy, callWeatherAPI } from './api.js';

const input = document.getElementById('location');
const submit = document.getElementById('submit');
const content = document.getElementById('content');

submit.addEventListener('click', async () => {
    console.log(input.value);
    const weatherData = await callWeatherAPI(input.value);
    const giphy = await callGiphy(
        weatherData.currentConditions.icon.split('-').join(' ')
    );
    const gifLink = giphy.data.images.original.url;
    console.log(gifLink);
    content.innerHTML = `
    <h1>${weatherData.resolvedAddress}</h1
    <p>Summary - ${weatherData.description}</p>
    <p>Today's Forecast - ${weatherData.currentConditions.conditions}</p>
    <p>The weather is ${Math.floor((((weatherData.currentConditions.temp - 32) * 5) / 9) * 100) / 100} C.</p>
    <img src=${gifLink}>
    `;
});
