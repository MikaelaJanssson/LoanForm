import React from "react";

export default function StepTwoEmployment({ formData, handleChange }) {
  return (
    <>
      <label>
        Är du anställd?
        <input
          type="checkbox"
          name="employed"
          checked={formData.employed}
          onChange={handleChange}
        />
      </label>

      <label>
        Din lön:
        <select name="salary" value={formData.salary} onChange={handleChange}>
          <option value="">-- Välj --</option>
          <option value="<500">Mindre än $500</option>
          <option value="500-1000">$500 - $1000</option>
          <option value="1000-2000">$1000 - $2000</option>
          <option value=">2000">Över $2000</option>
        </select>
      </label>

      <label>
        Lånebelopp:
        <input
          type="number"
          name="loanAmount"
          value={formData.loanAmount}
          onChange={handleChange}
        />
      </label>
    </>
  );
}
