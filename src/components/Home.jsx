import Footer from "./footer";
import "../css/Home.css"
import resultSet from "../data/data.json"
import React, { useState } from 'react';
import MyNav from "./NavBar";
import Location from './Location'
import call from '../hinh/1.3.jpg'
const Home = () => {
    const [state, setState] = useState(resultSet);
    /*
     * It filters the list of vehicles by ICU type and distance less than 3 km.
     * If any vehicle is found, it alerts the user with the price and distance of the nearest one.
     * If no vehicle is found, it alerts the user with a message.
     */
    const handleICUCall = () => {
        const icuVehicles = state.filter(vehicle => vehicle.type === "ICU" && vehicle.distance <= 3);

        // If there are any ICU vehicles within 3 km
        if (icuVehicles.length > 0) {
            const nearestICU = icuVehicles[0]; // Assume the first one is the nearest
            alert(`Nearest ICU vehicle price: ${nearestICU.price}$, distance: ${nearestICU.distance}km`);
        } else {
            // If no ICU vehicle is found within 3 km
            alert("No ICU vehicle available within 3 km; however, we will make every effort to find the nearest available vehicle for you.")
        }
    };

    return (
        <>
            <div>
                <MyNav />
            </div>
            
        </>
    );
}

export default Home;