import { loginUser } from "../../helpers/axiosHelper";

export const loginAction = (obj) => async (dispatch) => {
  ///first call axios amd get data from the server
  const { status, message, user } = await loginUser({ email, password });

  toast[status](message);
  if (status === "success") {
    window.sessionStorage.setItem("user", JSON.stringify(user));
    setLoggedIn(true);
    navigate("/dashboard");
  }
};
