import { getTransaction, postNewTransaction } from "../../helpers/axiosHelper";
import { setTransactions } from "./transactionSlice";

export const fetchDataAction = () => async (dispatch) => {
  const { status, message, trans } = await getTransaction();
  status === "success" && trans.length && dispatch(setTransactions(trans));
};

const postDataAction = () => async (dispatch) => {
  const user = JSON.parse(sessionStorage.getItem("user"));

  const userId = user._id;
  const { status, message } = await postNewTransaction({
    ...transaction,
    userId,
  });

  // status === "success" && fetchData();
};
