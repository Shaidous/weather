window.addEventListener('load', () => {
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={long}&appid={3d00fc7bcfcb031219c16ff2d1232b2c}`
            console.log(api)
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data =>{
                console.log(data);
            })
        });
        
    }else{
        alert("Ничего не сработает :( вы не разрешили мне отследить вашу локацию");
    }
});