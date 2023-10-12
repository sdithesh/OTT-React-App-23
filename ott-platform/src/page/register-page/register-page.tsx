import React from "react";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import "./register-page.scss";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const onRegisterClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="register-container">
      <h3 className="register-container__blur-effect">
        <span className="register-container__header">Movie OTT</span>
      </h3>
      <Card className="register-form">
        <div className="register-form-wrapper">
          <p className="register-header">Register</p>
          <FormInput
            label="Full Name"
            type="text"
            placeholder="Full Name"
            className="register-input__bg"
          ></FormInput>
          <FormInput
            label="Email"
            type="mail"
            placeholder="Email"
            className="register-input__bg"
          ></FormInput>
          <FormInput
            label="Password"
            type="password"
            placeholder="Password"
            className="register-input__bg"
          ></FormInput>
          <FormInput
            label="Confirm Password"
            type="password"
            placeholder="Confirm password"
            className="register-input__bg"
          ></FormInput>
          <Button
            className="register-button"
            value="Register"
            onclick={onRegisterClickHandler}
          ></Button>
        </div>
      </Card>
    </div>
  );
}

export default Register;
