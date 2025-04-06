const API_KEY = '7e7b477aec5ba9abbee9c06677a9fea5';


    export const getWeather =async  (location) => {
        console.log(location)
 
      
        const response = await fetch( 
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        ).then(response => response.json());
       
        
        
        return response;
    };
        
   