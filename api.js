export async function musum() {
    let [karachiData, lahoreData] = await Promise.all([
        fetch("https://api.open-meteo.com/v1/forecast?latitude=24.86&longitude=67.01&current=weather_code").then(r => r.json()),
        fetch("https://api.open-meteo.com/v1/forecast?latitude=31.55&longitude=74.34&current=weather_code").then(r => r.json())
    ]);
    return {
      karachi: karachiData.current.weather_code,
        lahore: lahoreData.current.weather_code
    };
}