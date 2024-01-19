import React from "react";
import { doctors } from "../../Assets/doctorsData";

export default function ChooseDoctor(props) {
    const next = (e) => {
        e.preventDefault();
        props.nextStep();
    };

    const back = (e) => {
        e.preventDefault();
        props.prevStep();
    };

    const { values, handleChange } = props;
    const city = values.City;
    const doctorsInCity = doctors.filter((doctor) => doctor.City === city);


    return (
        <>
            <h1>List of available doctors in {city} </h1>
            <div className="input-field">
                <label htmlFor="myDoctor">Select Doctor</label>
                <select className="dropdown"
                    id="myDoctor"
                    onChange={handleChange("MyDoctor")}
                    defaultValue={values.MyDoctor}
                    >
                    <option value="" disabled>
                        Select a doctor
                    </option>
                    {doctorsInCity.map((doctor) => (
                        <option key={doctor.id} value={doctor.Name}>
                            {doctor.Name} - {doctor.Expertise}
                        </option>
                    ))}
                </select>
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
