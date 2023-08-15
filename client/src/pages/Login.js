import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./user/userAction";

export const Login = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    user._id && navigate("/dashboard");
  }, [user]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    dispatch(loginAction({ email, password }));
  };

  return (
    <MainLayout>
      <div className="loginPage d-flex justify-content-center mt-5">
        <div className="loginForm border shadow p-5 mb-5 bg-body-tertiary rounded">
          <h3>Login</h3>
          <hr />

          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                ref={emailRef}
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                ref={passwordRef}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Login
            </Button>
            <div className="text-end">
              Dont have account? <Link to="/register">Register</Link>
            </div>
          </Form>
        </div>
      </div>
    </MainLayout>
  );
};
