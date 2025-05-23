import React from "react";

export default function StepOnePersonalInfo({
  formData,
  handleChange,
  errors,
}) {
  return (
    <>
      <label>
        Namn:
        <input name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}
      </label>

      <label>
        Telefon:
        <input name="phone" value={formData.phone} onChange={handleChange} />
        {errors.phone && <span className="error">{errors.phone}</span>}
      </label>

      <label>
        Ålder:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <span className="error">{errors.age}</span>}
      </label>
    </>
  );
}
