import React from "react";

export default function Problems(props) {
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
            <h1>Enter Your Problems</h1>
            <div className="input-field">
                <label htmlFor="problem">Chief Complaints</label>
                <input
                    type="text"
                    id="problem"
                    placeholder="Enter your problems..."
                    onChange={handleChange("ChiefComplaints")}
                    defaultValue={values.ChiefComplaints}
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
