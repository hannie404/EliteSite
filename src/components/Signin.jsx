import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../images/svg/login.svg";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const rotateAnimation = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
  margin: 0;
  font-family: "Euclid Circular A";
  color: #f7f7f7;
`;

const Card = styled.div`
  width: 400px;
  padding: 60px 30px 32px;
  border-radius: 1.25rem;
  background: linear-gradient(to bottom, #ffffff6c, #ffffff24);
  font-family: "Space Grotesk", sans-serif;
  text-align: center;
  transition: 0.4s;
`;

const Heading = styled.h2`
  font-size: 36px;
  font-weight: 600;
  margin: 0 0 30px;
`;

const LogoImg = styled.img`
  width: 260px;
  padding: 5px;
  margin-bottom: 10px;
`;

const Form = styled.form`
  width: 100%;
  margin: 0;
  display: grid;
`;

const Control = styled.input`
  outline: none;
  width: 100%;
  height: 56px;
  padding: 0 16px;
  border: 0;
  background: #11112b7b;
  color: inherit;
  border-radius: 6px;
  margin: 8px 0;
  font-family: inherit;
  text-align: left;
  font-size: 18px;
  transition: 0.4s;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
`;

const PasswordControl = styled(Control).attrs({
  type: "password",
  placeholder: "Password",
})``;

const Button = styled.button`
  cursor: pointer;
  width: 100%;
  height: 56px;
  padding: 0 16px;
  background: #92deed;
  color: #11112b;
  border-radius: 10px;
  border: 0;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  letter-spacing: 2px;
  transition: all 0.375s;

  &:disabled {
    opacity: 0.25;
  }
`;

const ValidationMessage = styled.div`
  display: flex;
  align-items: center;
  height: 0;
  overflow: hidden;
  color: #db4c66;
  transition: 0.3s;

  &.invalid {
    height: 30px;
  }
`;

const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(true); // Initially set to true to prevent initial error message

  const handleChange = (e) => {
    setIsValid(true); // Reset the validation message whenever the user types something
    setIsLoading(true);
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setIsValid(true); // Reset the validation message whenever the user types something
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const users = getUserDataFromLocalStorage();
    const user = users.find((u) => u.username === username && u.password === password);
    if (user) {
      // Successful login
      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "You have successfully logged in!",
      });
    } else {
      // Invalid credentials
      Swal.fire({
        icon: "error",
        title: "Invalid Credentials",
        text: "The username or password is incorrect. Please try again.",
      });
    }
  };

  const getUserDataFromLocalStorage = () => {
    const storedData = localStorage.getItem("listOfUsers");
    return storedData ? JSON.parse(storedData) : [];
  };

  return (
    <Wrapper className="d-flex justify-content-center align-temds-center vh-100 FAQSbg">
      <Card>
        <LogoImg src={logo} alt="logo" />
        <Heading>Sign In</Heading>
        <Form className="form" onSubmit={handleFormSubmit}>
          <Control
            onChange={handleChange}
            autoComplete="off"
            spellCheck="false"
            placeholder="Username"
          />
          <PasswordControl
            name="password"
            spellCheck="false"
            className="control"
            onChange={handlePasswordChange}
          />
          <Button disabled={!isValid} type="submit" className="mt-2">
            SIGN IN
          </Button>
          <p className="mt-3">
            New member?
            <NavLink to="/Signup"> Sign up</NavLink>
          </p>
        </Form>
      </Card>
    </Wrapper>
  );
};

export default Signin;
