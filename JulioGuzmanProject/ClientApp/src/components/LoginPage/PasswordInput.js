import React, { useState } from "react";
import "./PasswordInput.css";

function PasswordInput({ onPasswordChange }) {
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleBlur = () => {
    const passwordValue = password.trim();
    // Trigger the callback with the validation result
    onPasswordChange(passwordValue.length > 0);
  };

  const togglePasswordVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div class="input-group">
      <input
        type={isVisible ? "text" : "password"}
        class="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={handleBlur}
      />
      <span class="input-group-text" onClick={togglePasswordVisibility}>
        <i className={`bi ${isVisible ? "bi-eye-slash" : "bi-eye-fill"}`} />
      </span>
    </div>
  );
}
export default PasswordInput;
