import React, { useState } from "react";
import "./EmailInput.css";

function EmailInput({ onValidChange }) {
  const [email, setEmail] = useState("");
  const [isEmailErrorMessageVisible, setIsEmailErrorMessageVisible] =
    useState(false);
  const [emailInputStyle, setEmailInputStyle] = useState({
    borderColor: "#d8d8d8",
  });

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailBlur = (event) => {
    const emailValue = event.target.value.trim();
    const isValid = isValidEmail(emailValue) && emailValue !== "";

    setIsEmailErrorMessageVisible(!isValid);
    setEmailInputStyle({ borderColor: isValid ? "#d8d8d8" : "#c02419" });

    // Notify parent component about the validation status
    if (onValidChange) {
        onValidChange(isValid);
  };
}

  return (
    <div>
      <input
        type="email"
        name="Email"
        required
        style={emailInputStyle}
        onBlur={handleEmailBlur}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {isEmailErrorMessageVisible && (
        <div className="emailErrorMessage" >Please enter a valid email.</div>
      )}
    </div>
  );
}
export default EmailInput;
