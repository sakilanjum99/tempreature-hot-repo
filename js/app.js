const API_KEY = `30dbb1e907188b239c50df38f677ae95`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data));
}

const displayTemperature = temperature => {
    console.log(temperature);
}