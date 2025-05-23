import React from "react";

export default function StepFourSummary({ formData }) {
  return (
    <>
      <h3>Sammanfattning</h3>
      <p>
        <strong>Namn:</strong> {formData.name}
      </p>
      <p>
        <strong>Telefon:</strong> {formData.phone}
      </p>
      <p>
        <strong>Ålder:</strong> {formData.age}
      </p>
      <p>
        <strong>Anställd:</strong> {formData.employed ? "Ja" : "Nej"}
      </p>
      <p>
        <strong>Lön:</strong> {formData.salary}
      </p>
      <p>
        <strong>Lånebelopp:</strong> {formData.loanAmount}
      </p>
      <p>
        <strong>Syfte:</strong> {formData.purpose}
      </p>
      <p>
        <strong>Återbetalningstid:</strong> {formData.repaymentYears} år
      </p>
      <p>
        <strong>Kommentarer:</strong> {formData.comments}
      </p>
    </>
  );
}
