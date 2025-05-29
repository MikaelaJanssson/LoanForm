import React from "react";

export default function StepTwoEmployment({ formData, handleChange, errors }) {
  return (
    <>
      <fieldset>
        <legend>Är du anställd?</legend>
        <div className="radio-group">
          <label className="radio-option">
            <input
              type="radio"
              name="employed"
              value="true"
              checked={formData.employed === true}
              onChange={() =>
                handleChange({
                  target: { name: "employed", value: true, type: "radio" },
                })
              }
            />
            Ja
          </label>

          <label className="radio-option">
            <input
              type="radio"
              name="employed"
              value="false"
              checked={formData.employed === false}
              onChange={() =>
                handleChange({
                  target: { name: "employed", value: false, type: "radio" },
                })
              }
            />
            Nej
          </label>
        </div>
      </fieldset>

      <label>
        Din lön:
        <select name="salary" value={formData.salary} onChange={handleChange}>
          <option value="">-- Välj --</option>
          <option value="<500">Mindre än $500</option>
          <option value="500-1000">$500 - $1000</option>
          <option value="1000-2000">$1000 - $2000</option>
          <option value=">2000">Över $2000</option>
        </select>
        {errors.salary && <span className="error">{errors.salary}</span>}
      </label>

      <label>
        Lånebelopp:
        <input
          type="number"
          name="loanAmount"
          value={formData.loanAmount}
          onChange={handleChange}
        />
        {errors.loanAmount && (
          <span className="error">{errors.loanAmount}</span>
        )}
      </label>
    </>
  );
}
