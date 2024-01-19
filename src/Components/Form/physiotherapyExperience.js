import React from "react";

export default function PhysiotherapyExperience(props) {
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
            <h1>Any previous experience with physiotherapy</h1>
            <div className="input-field">
                <label htmlFor="exp">Previous Experience</label>
                <input
                    type="text"
                    id="exp"
                    placeholder="Write your experience..."
                    onChange={handleChange("PreviousExperience")}
                    defaultValue={values.PreviousExperience}
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
