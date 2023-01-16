import React from "react";
import styles from "../styles/hero.module.css";

const Select = ({ value, defaultValue, onChange, options }) => {
  return (
    <div className={styles.order}>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option disabled value="">{defaultValue}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
