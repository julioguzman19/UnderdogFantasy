import React from 'react';
import "./LoginButton.css";

function LoginButton({ isEnabled, onClick, styles }) {
  return (
    <button
      style={styles}
      onClick={onClick}
      disabled={!isEnabled}
    >
      Log In
    </button>
  );
}

export default LoginButton;
