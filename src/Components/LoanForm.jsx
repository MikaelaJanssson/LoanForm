import React, { useState } from "react";
import "../Styles/LoanForm.css";

import Logo from "./Logo";

import StepOnePersonalInfo from "./StepOnePersonalInfo";
import StepTwoEmployment from "./StepTwoEmployment";
import StepThreePurpose from "./StepThreePurpose";
import StepFourSummary from "./StepFourSummary";

export default function LoanForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    employed: false,
    salary: "",
    loanAmount: "",
    purpose: "",
    repaymentYears: "",
    comments: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function validateStep() {
    const newErrors = {};
    if (step === 1) {
      if (!formData.name) newErrors.name = "Skriv ditt namn";
      if (!formData.phone) newErrors.phone = "Skriv ditt telefonnummer";
      if (!formData.age) newErrors.age = "Skriv din ålder";
    }
    if (step === 2) {
      if (formData.employed !== true && formData.employed !== false)
        newErrors.employed = "Välj Ja eller Nej";
      if (!formData.salary) newErrors.salary = "Välj din lön";
      if (!formData.loanAmount) newErrors.loanAmount = "Ange lånebelopp";
    }
    if (step === 3) {
      if (!formData.purpose) newErrors.purpose = "Ange syfte med lånet";
      if (!formData.repaymentYears)
        newErrors.repaymentYears = "Ange återbetalningstid";
      if (!formData.comments) newErrors.comments = "Lämna gärna en kommentar";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleNext() {
    if (validateStep()) {
      setStep(step + 1);
    }
  }

  function handleBack() {
    setStep(step - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateStep()) {
      setIsSubmitted(true);
      console.log("Ansökan skickad:", formData);
    }
  }

  if (isSubmitted) {
    return (
      <div className="thank-you">
        <h2>Tack!</h2>
        <p>Vi har fått din ansökan och kontaktar dig snart.</p>
      </div>
    );
  }

  return (
    <form className="loan-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <Logo />
        <h2>Låneansökan</h2>
      </div>
      <p>Steg {step} av 4</p>

      {step === 1 && (
        <StepOnePersonalInfo
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
      )}
      {step === 2 && (
        <StepTwoEmployment
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
      )}
      {step === 3 && (
        <StepThreePurpose
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />
      )}
      {step === 4 && <StepFourSummary formData={formData} />}

      <div className="buttons">
        {step > 1 && (
          <button type="button" onClick={handleBack}>
            Tillbaka
          </button>
        )}
        {step < 4 && (
          <button type="button" onClick={handleNext}>
            Nästa
          </button>
        )}
        {step === 4 && <button type="submit">Skicka</button>}
      </div>
    </form>
  );
}
