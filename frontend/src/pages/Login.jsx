import { useState, useEffect } from "react";
import styled from "styled-components";
import { FaSignInAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import { Spinner } from "../components/Spinner";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch, navigate]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <FormWrapper>
      <section>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting todos</p>
      </section>

      <section>
        <form onSubmit={onSubmit}>
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

export default Login;
