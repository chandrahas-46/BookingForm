import React from "react";

export default function Confirm(props) {
	const next = (e) => {
		e.preventDefault();
		props.nextStep();
	};

	const back = (e) => {
		e.preventDefault();
		props.prevStep();
	};

	const {
		values: { Name, PhoneNumber, Age, City, Company, ChiefComplaints, PreviousExperience, MyDoctor },
	} = props;
	return (
		<>
			<h1>Confirm your details</h1>
			<span>Name: {Name}</span>
			<span>Phone Number: {PhoneNumber}</span>
			<span>Age: {Age}</span>
			<span>City: {City}</span>
			<span>Company: {Company}</span>
			<span>ChiefComplaints: {ChiefComplaints}</span>
			{parseInt(Age) >= 40 && <span>PreviousExperience: {PreviousExperience}</span>}
			<span>MyDoctor: {MyDoctor}</span>
			<div>
				<button className="btn" onClick={back}>
					Back
				</button>
				<button className="btn" onClick={next}>
					Submit
				</button>
			</div>
		</>
	);
}
