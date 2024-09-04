import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";


function Country() {

    const API_ENDPOINTS = "https://xcountries-backend.azurewebsites.net/all";

    const [flags, setFlags] = useState([]);

    useEffect(()=>{
        fetch(API_ENDPOINTS)
        .then((res)=>res.json())
        .then((data)=>setFlags(data))
        .catch((error)=>console.error("Error fetching data: ", error));
    }, [])
    return (<div
    style={{
        display:"flex",
        flexWrap:"wrap",
    }}
    >
        {
            flags.map((flag)=>(

        <CountryCard key={flag.abbr} name={flag.name} flagImg={flag.flag} flagAltText={flag.abbr}/>
            ))
        }
    </div>
    );
}

export default Country;