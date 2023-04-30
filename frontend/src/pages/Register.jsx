import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaUser } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <FormWrapper>
      <section>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            placeholder="enter your name"
            onChange={onChange}
          />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="enter your email"
            onChange={onChange}
          />
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="enter your password"
            onChange={onChange}
          />
          <input
            type="password"
            id="password2"
            name="password2"
            value={password2}
            placeholder="confirm password"
            onChange={onChange}
          />

          <button type="submit">Submit</button>
        </form>
      </section>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  gap: 30px 0;
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    form {
      width: 100%;
    }
    input {
      width: 100%;
      padding: 15px;
    }
    button {
      width: 100%;
      padding: 15px;
      color: #fff;
      background-color: #000;
      transition: all 0.5s ease;
      border: none;
      outline: none;
      :hover {
        cursor: pointer;
        background-color: #000000a3;
      }
    }
  }
`;

export default Register;
