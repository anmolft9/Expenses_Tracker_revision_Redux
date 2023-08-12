import { loginUser } from "../../helpers/axiosHelper";
import { toast } from "react-toastify";

export const loginAction = (obj) => async (dispatch) => {
  ///first call axios amd get data from the server
  const { status, message, user } = await loginUser(obj);

  toast[status](message);
  if (status === "success") {
    window.sessionStorage.setItem("user", JSON.stringify(user));
  }
};
