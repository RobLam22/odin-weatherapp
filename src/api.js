export async function callWeatherAPI(location) {
    try {
        const res = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=22XLCQDMMWYY83KKBKWPJBZA5`,
            { mode: 'cors' }
        );
        const data = await res.json();
        return data;
    } catch {
        console.log('error');
    }
}

export async function callGiphy(text) {
    try {
        const res = await fetch(
            `https://api.giphy.com/v1/gifs/translate?api_key=a3aFoYQVmOBQJgwd5lY1Qr60dmOoWlIJ&s=${text}`,
            { mode: 'cors' }
        );
        const gif = await res.json();
        return gif;
    } catch {
        console.log('gif not found');
    }
}
