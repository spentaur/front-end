import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const FormStyling = styled.form`
  display: block;
  align-content: center;
  padding-bottom: 10px;
  margin: 8%;
`;

const InputStyling = styled.input`
  width: 30%;
  margin: 1% 12%;
`;

const ButtonStyling = styled.button`
  border-radius: 6px;
  border: none;
  width: 20%;
  height: 30px;
  margin: 3% 25%;
  color: white;
  background-color: #19bd60;
`;

const AnchorStyling = styled.a`
  text-decoration: none;
  color: #1fa9ab;
`;

const HeaderStyling = styled.h1`
  font-size: 18px;
  line-height: 0.8;
`;

export default function SignUpForm() {
  return (
    <div>
      <Navigation />
      <FormStyling>
        <HeaderStyling>
          <h1>Create an account and</h1>
          <h1> start pricing today.</h1>
        </HeaderStyling>
        <InputStyling
          placeholder="Email"
          id="email"
          type="text"
          name="email"
        />
        <InputStyling
          placeholder="Password"
          id="password"
          type="password"
          name="password"
        />
        <InputStyling
          placeholder="ZipCode"
          id="zipcode"
          type="text"
          name="zipcode"
        />
        <ButtonStyling type="submit">Create Account</ButtonStyling>
        <div>
          <span>Already have an account?</span>
          <AnchorStyling href=""> Login here</AnchorStyling>
        </div>
      </FormStyling>
    </div>
  );
}
