import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <HeaderWrapper>
      <div>
        <Link to="/">TodoSetter</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button onClick={onLogout}>
              <FaSignOutAlt />
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt />
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser />
              </Link>
            </li>
          </>
        )}
      </ul>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: solid 1px gray;
  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0 20px;
    button {
      border: none;
      outline: none;
      background-color: transparent;
    }
    svg {
      color: black;
      font-size: 20px;
    }
  }
`;

export default Header;
