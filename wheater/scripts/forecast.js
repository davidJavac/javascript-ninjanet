class Forecast{

    constructor(){

        this.key ='v1se6wHrr43BURrysbTJ3vOqP3aulgAY';
        this.weatherUrl = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityUrl = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(city){

        const cityDets = await this.getCity(city);

        const weather  = await this.getWeather(cityDets.Key);

        return {

            cityDets : cityDets,
            weather : weather
        };
    }

    async getCity(city){

        const query = `?apikey=${this.key}&q=${city}`;
        
        const response = await fetch(this.cityUrl + query);
        
        const data = await response.json();
        
        return data[0];
    }

    async getWeather(id){

        const query = `${id}?apikey=${this.key}`;
        
        const response = await fetch(this.weatherUrl + query);
        
        const data = await response.json();
        
        return data[0];

    }
}





