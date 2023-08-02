import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../images/svg/login.svg";
import { NavLink, useNavigate } from "react-router-dom";
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
  font-family: 'Space Grotesk', sans-serif;
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

const PasswordControl = styled(Control).attrs({ type: "password", placeholder: "Password" })``;

const Button = styled.button`
  cursor: pointer;
  width: 100%;
  height: 56px;
  padding: 0 16px;
  background: #92DEED;
  color: #11112B;
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

const UsernameContainer = styled.div`
  position: relative;
`;

const spinnerAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  position: absolute;
  top: 30%;
  right: 20px;
  width: 30px;
  height: 30px;
  visibility: hidden;
  opacity: 0;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.1);
  border-top-color: #68e1fd;
  animation: ${spinnerAnimation} 0.6s infinite linear;
  transition: 0.3s;

  &.loading {
    visibility: visible;
    opacity: 1;
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

// const usernames = ["joe", "joe1", "joe2"];

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

const Username = ({ isValid, isLoading, handleChange }) => {
  return (
    <>
      <UsernameContainer>
        <Control onChange={handleChange} autoComplete="off" spellCheck="false" placeholder="Username" />
        <Spinner className={`spinner ${isLoading ? "loading" : ""}`} />
      </UsernameContainer>
      <ValidationMessage className={`validation ${!isValid ? "invalid" : ""}`}>
        Username already taken
      </ValidationMessage>
    </>
  );
};

const getUserDataFromLocalStorage = () => {
  const storedData = localStorage.getItem("listOfUsers");
  return storedData ? JSON.parse(storedData) : [];
};

const Signup = () => {  
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isValid, setIsValid] = useState(true); // Initially set to true to prevent initial error message

  const debouncedUsername = useDebounce(username, 500);
  const storedUsers = getUserDataFromLocalStorage(); // Fetch users data from localStorage

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

    if (storedUsers.some((user) => user.username === username)) {
      Swal.fire({
        icon: "error",
        title: "Username is Already Taken",
        text: "Please choose a different username.",
      });
      return;
    }

    // Save the username and password to localStorage with the key 'listOfUsers'
    const currentTime = new Date().toISOString();
    const userData = {
      id: currentTime,
      username,
      password,
    };
    localStorage.setItem("listOfUsers", JSON.stringify([...storedUsers, userData]));

    Swal.fire({
      icon: "success",
      title: "Registration Successful",
      text: "You have successfully registered!",
    }).then((result) => {
      // Check if the user clicked the "OK" button
      if (result.isConfirmed) {
        // Navigate to the '/Service' route using useNavigate
        navigate("/Services");
      }
    });
  };

  useEffect(() => {
    const storedUsers = getUserDataFromLocalStorage();
    setIsValid(username === "" || !storedUsers.some((user) => user.username === debouncedUsername));
    setIsLoading(false);
  }, [debouncedUsername, username]);
  
  return (
    <Wrapper className="d-flex justify-content-center align-temds-center vh-100 FAQSbg">
      <Card>
        <LogoImg src={logo} alt="logo" />
        <Heading>Sign Up</Heading>
        <Form className="form" onSubmit={handleFormSubmit}>
          <Username isLoading={isLoading} isValid={isValid} handleChange={handleChange} />
          <PasswordControl
            name="password"
            spellCheck="false"
            className="control"
            onChange={handlePasswordChange}
          />
          <Button disabled={!isValid} type="submit" className="mt-2">
            JOIN NOW
          </Button>
          <p className="mt-3">
            New member?
            <NavLink to="/Signin"> Sign in</NavLink>
          </p>
        </Form>
      </Card>
    </Wrapper>
  );
};

export default Signup;






