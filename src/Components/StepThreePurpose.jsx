import React from "react";

export default function StepThreePurpose({ formData, handleChange, errors }) {
  return (
    <>
      <label>
        Syfte med lånet:
        <input
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
        />
        {errors.purpose && <span className="error">{errors.purpose}</span>}
      </label>

      <label>
        Återbetalningstid (år):
        <input
          type="number"
          name="repaymentYears"
          value={formData.repaymentYears}
          onChange={handleChange}
        />
        {errors.repaymentYears && (
          <span className="error">{errors.repaymentYears}</span>
        )}
      </label>

      <label>
        Kommentarer:
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
        />
        {errors.comments && <span className="error">{errors.comments}</span>}
      </label>
    </>
  );
}
