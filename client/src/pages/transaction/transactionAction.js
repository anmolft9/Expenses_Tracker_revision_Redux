import { toast } from "react-toastify";
import {
  deleteTransaction,
  getTransaction,
  postNewTransaction,
} from "../../helpers/axiosHelper";
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

export const handleOnDeleteAction = (_id) => async (dispatch) => {
  if (!window.confirm("Are you sure you want to delete this transaction")) {
    return;
  }

  const { status, message } = await deleteTransaction(_id);
  status === "success" && dispatch(fetchDataAction());

  toast[status](message);
};
