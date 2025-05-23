import React from "react";

export default function StepThreePurpose({ formData, handleChange }) {
  return (
    <>
      <label>
        Syfte med lånet:
        <input
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
        />
      </label>

      <label>
        Återbetalningstid (år):
        <input
          type="number"
          name="repaymentYears"
          value={formData.repaymentYears}
          onChange={handleChange}
        />
      </label>

      <label>
        Kommentarer:
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        />
      </label>
    </>
  );
}
