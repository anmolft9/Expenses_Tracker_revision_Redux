import { toast } from "react-toastify";
import { getTransaction, postNewTransaction } from "../../helpers/axiosHelper";
import { setTransactions } from "./transactionSlice";

export const fetchDataAction = () => async (dispatch) => {
  const { status, message, trans } = await getTransaction();
  status === "success" && trans.length && dispatch(setTransactions(trans));
};

export const postDataAction = (form) => async (dispatch) => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const userId = user._id;
  const { status, message } = await postNewTransaction({
    ...form,
    userId,
  });
  toast[status](message);
  status === "success" && dispatch(fetchDataAction());
};
