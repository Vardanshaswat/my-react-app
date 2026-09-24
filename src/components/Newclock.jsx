import { useEffect,useState } from "react";



const NewClock = () => {
    const [time,setTime] = useState(new Date());


    useEffect (() =>{
        const intervalId = setInterval(() =>{
            setTime(new Date());
        }, 1000);

        return () =>{
            clearInterval(intervalId);
        }
    }, [])

   return (

    <>

    <h2>A simple app to tell you time </h2>
    
    <h1>Heyyyyyyy - {time.toLocaleTimeString()}</h1></>
    
   );




     
};


export default NewClock

