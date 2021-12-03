// import axios from "axios";
// import {useEffect, useState,  } from "react";
// const FlightsDisplay = ()=>{

//   const [flight, setFlight] = useState([])
  
//   const GetFlights=()=>{
//     const options = {
//       method: 'GET',
//       url: 'https://google-flights-search.p.rapidapi.com/search',
//       params: {
//         departure_airport_code: 'SFO',
//         arrival_airport_code: 'LAX',
//         flight_class: 'Economy'
//       },
//       headers: {
//         'x-rapidapi-host': 'google-flights-search.p.rapidapi.com',
//         'x-rapidapi-key': '0c18d023f6msh9c30019dcc8027fp16dbf5jsn0579a78df469'
//       }
//     };
    
//     axios.request(options).then(function (res) {
//       console.log(res);
//       setFlight(res.data)
//     }).catch(function (error) {
//       console.error(error);
//     });
//     console.log(flight)
//   useEffect(()=>{
//     GetFlights()
//   },[])

// }

//     return (
//         <div>
        
//            <h1>Search for Flights pls!</h1>
//            {flight.map((display)=>{
//              <div>{display.data}</div>
//            })}
          
//         </div>
//         );
// }
// export default FlightsDisplay