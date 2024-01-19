import React, { useState } from "react";
// import Testimonial from "../../Carousel/Testimonials";

import Credentials from "./Credentials";
import Personal from "./Personal";
import Problems from "./Problems";
import PhysiotherapyExperience from "./physiotherapyExperience";
import ChooseDoctor from "./ChooseDoctor";
import Confirm from "./Confirm";
import Success from "./Success";

import styles from "./form.module.css";


export default function PatientForm() {
    const [step, setStep] = useState(1);
    const [patientInfo, setPatientInfo] = useState({
        Name: "", 
        PhoneNumber: "",
        Age: "",
        City: "",
        Company: "",
        ChiefComplaints: "",
        PreviousExperience: "",
        MyDoctor: "",
    });

    const nextStep = () => {
        setStep(step + 1);
        console.log("STEP+: ", step);
    } 

    const prevStep = () => {
        if(parseInt(patientInfo.Age) < 40 && step===5){
            setStep(step - 2);
        }
        else{
            setStep(step - 1);
        }
        console.log("STEP-: ", step);
    } 
    const handleChange = (input) => (e) => {
        // setPatientInfo({ ...patientInfo, [input]: e.target.value });
        setPatientInfo((prevInfo) => ({
            ...prevInfo,
            [input]: e.target.value,
          }));
    }

    const switchStep = () => {
        switch (step) {
            case 1:
                return (
                    <Credentials
                        nextStep={nextStep}
                        handleChange={handleChange}
                        values={patientInfo}
                    />
                );
            case 2:
                return (
                    <Personal
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChange}
                        values={patientInfo}
                    />
                );
            case 3:
                return (
                    <Problems
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChange}
                        values={patientInfo}
                    />
                );
            case 4:
                // Check age before showing PhysiotherapyExperience step
                if(parseInt(patientInfo.Age) < 40) {
                    // Skip the PhysiotherapyExperience step
                    setStep(step + 1);
                    return null;
                } else {
                    return (
                        <PhysiotherapyExperience
                            nextStep={nextStep}
                            prevStep={prevStep}
                            handleChange={handleChange}
                            values={patientInfo}
                        />
                    );
                }
            case 5:
                return (
                    <ChooseDoctor
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChange}
                        values={patientInfo}
                    />
                );
            case 6:
                return (
                    <Confirm nextStep={nextStep} prevStep={prevStep} values={patientInfo} />
                );
            case 7:
                return <Success />;
            default:
                return null;
        }
    };

    return (
        <>
            <div className={styles.backgroundHeader}>
                <div className={styles.form_card}>
                    {switchStep()}
                </div>
            </div>
            {/* <Testimonial /> */}
        </>
    );
}