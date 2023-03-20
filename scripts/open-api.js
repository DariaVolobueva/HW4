async function openApi(){
    let api = await fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&lat=49.9901&lon=36.2384&appid=549940a0e899bf09232a84ca830b6efa");
    let apismth = await api.json();
    let div = document.querySelector(".footer__logo");
    
    div.insertAdjacentHTML("beforeend", `
            <div class="footer__weather">
                <p>Weather in ${apismth.name} :</p>
                <p>${apismth.weather[0].main} (${apismth.weather[0].description})</p>
                <p>Temperature in Celsium: ${Math.round(apismth.main.temp)}</p>
            </div>
            `);
}

openApi();