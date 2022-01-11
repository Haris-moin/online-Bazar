import React from 'react';
import './style.css';
import { Box, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
function AuthForm({ inputFields, title, authButtons, authLink }) {
  return (
    <div className="auth-container">
      <div className="form-Container">
        <h2>{title}</h2>
        <Box component="form" autoComplete="off">
          {inputFields.map(({ label, required, name, type, onvalidation }) => {
            return (
              <div className="field-container">
                <TextField
                  className="field"
                  required={required}
                  id={name}
                  label={label}
                  placeholder={name}
                  type={type}
                  onChange={(e) => {
                    console.log(e.target.value);
                    onvalidation(e.target.value);
                  }}
                />
              </div>
            );
          })}
          {authButtons.map((button) => {
            return (
              <button className="auth-button" onClick={button.clickHandler}>
                {button.name}
              </button>
            );
          })}

          <div className="auth-link">
            <Link to={authLink.path}>{authLink.name}</Link>
          </div>
        </Box>
      </div>
    </div>
  );
}

export default AuthForm;
