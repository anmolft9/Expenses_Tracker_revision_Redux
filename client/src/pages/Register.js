import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { MainLayout } from "../components/layout/MainLayout";
import { useState } from "react";
import { postNewUser } from "../helpers/axiosHelper.js";
import { toast } from "react-toastify";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const Register = () => {
  const [form, setForm] = useState(initialState);
  const [resp, setResp] = useState({});
  const handleOnChange = (e) => {
    const { value, name } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return alert("Password doesnot match");
    }
    const { status, message } = await postNewUser(rest);
    setResp({ status, message });

    toast[status](message);
    status === "success" && setForm(initialState);
  };
  return (
    <MainLayout>
      <div className="RegisterPage d-flex justify-content-center mt-5">
        <div className="RegisterForm border shadow p-5 mb-5 bg-body-tertiary rounded">
          <h3>Register</h3>
          <hr />

          <Form onSubmit={handleOnSubmit}>
            {resp.message && (
              <Alert variant={resp.status === "success" ? "success" : "danger"}>
                {resp.message}
              </Alert>
            )}

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                type="string"
                placeholder="Enter First Name"
                name="firstName"
                value={form.firstName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                type="string"
                placeholder="Enter Last Name"
                name="lastName"
                value={form.lastName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                type="email"
                placeholder="Enter email"
                name="email"
                value={form.email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                type="password"
                placeholder="Password"
                name="password"
                value={form.password}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Retype Password</Form.Label>
              <Form.Control
                onChange={handleOnChange}
                type="password"
                placeholder="Retype Password"
                name="confirmPassword"
                value={form.confirmPassword}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
            <div className="text-end">
              Already have account? <Link to="/login">login</Link>
            </div>
          </Form>
        </div>
      </div>
    </MainLayout>
  );
};
