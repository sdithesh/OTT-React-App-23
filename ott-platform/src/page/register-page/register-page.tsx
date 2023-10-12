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
        <span className="register-container__blur-effect__header">
          Movie OTT
        </span>
      </h3>
      <Card className="register-container__form">
        <div className="register-container__form__wrapper">
          <p className="register-container__form__wrapper__header">Register</p>
          <FormInput
            label="Full Name"
            type="text"
            placeholder="Full Name"
            className="register-container__form__wrapper__input-bg"
          ></FormInput>
          <FormInput
            label="Email"
            type="mail"
            placeholder="Email"
            className="register-container__form__wrapper__input-bg"
          ></FormInput>
          <FormInput
            label="Password"
            type="password"
            placeholder="Password"
            className="register-container__form__wrapper__input-bg"
          ></FormInput>
          <FormInput
            label="Confirm Password"
            type="password"
            placeholder="Confirm password"
            className="register-container__form__wrapper__input-bg"
          ></FormInput>
          <Button
            className="register-container__form__wrapper__button"
            type="primary"
            onclick={onRegisterClickHandler}
          >
            Register
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Register;
