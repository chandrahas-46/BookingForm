import React from "react";
import { useState, useEffect } from 'react';
import { doctors } from "../../Assets/doctorsData";

export default function Personal(props) {
    const [uniqueCities, setUniqueCities] = useState([]);

    useEffect(() => {
        // Extracting unique cities from the doctors array
        const cities = [...new Set(doctors.map(doctor => doctor.City))];
        setUniqueCities(cities);
    }, []); 

    const next = (e) => {
        e.preventDefault();
        props.nextStep();
    };

    const back = (e) => {
        e.preventDefault();
        props.prevStep();
    };

    const { values, handleChange } = props;

    
    return (
        <>
            <h1>Enter personal details</h1>
            <div className="input-field">
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    id="age"
                    min="1" max="100"
                    placeholder="Enter your age..."
                    onChange={handleChange("Age")}
                    defaultValue={values.Age}
                />
            </div>
            <div className="input-field">
                <label htmlFor="city">City Name</label>
                <select className="dropdown"
                    id="city"
                    onChange={handleChange("City")}
                    defaultValue={values.City}
                    >
                    <option value="" disabled>
                        Select city
                    </option>
                    {uniqueCities.map((city) => (
                        <option key={city} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
            </div>
            <div className="input-field">
                <label htmlFor="company">Company Name</label>
                <input
                    type="text"
                    id="company"
                    placeholder="Enter your company..."
                    onChange={handleChange("Company")}
                    defaultValue={values.Company}
                />
            </div>

            <div>
                <button className="btn" onClick={back}>
                    Back
                </button>
                <button className="btn" onClick={next}>
                    Next
                </button>
            </div>
        </>
    );
}
