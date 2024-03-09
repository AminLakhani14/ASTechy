import React from 'react';
import { Link } from 'react-router-dom';
import './button.css';

function Button() {
  return (
    <div to="sign-up">
      <button className="btn-dark">Sign Up</button>
    </div>
  );
}
export default Button;
