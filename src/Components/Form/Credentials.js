import React from "react";

export default function Credentials(props) {
  // console.log("PROPS: ",props);
  const next = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  const { values, handleChange } = props;
  // console.log("#1 ", values);

  return (
    <>
      <h1>Book an Appointment</h1>
      <div className="input-field">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name..."
          onChange={handleChange("Name")}
          defaultValue={values.Name}
          required
        />
      </div>
      <div className="input-field">
        <label htmlFor="phone">Contact Number</label>
        <input
          type="tel"
          id="phone"
          placeholder="9876543210" 
          pattern="[0-9]{10}"
          onChange={handleChange("PhoneNumber")}
          defaultValue={values.PhoneNumber}
          required
        />
      </div>
      <button className="btn" onClick={next}>
        Next
      </button>
    </>
  );
}
