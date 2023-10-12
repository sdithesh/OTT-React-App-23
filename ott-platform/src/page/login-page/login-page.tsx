import React from "react";
import Button from "../../components/Button/Button";
import "./login-page.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const onSignInClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/register");
  };
  return (
    <div>
      <Button
        className="login-button"
        type="secondary"
        onclick={onSignInClickHandler}
      >
        SignIn
      </Button>
    </div>
  );
}

export default Login;
