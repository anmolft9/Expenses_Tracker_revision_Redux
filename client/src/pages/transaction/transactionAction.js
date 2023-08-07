import { getTransaction } from "../../helpers/axiosHelper";
import { setTransactions } from "./transactionSlice";

export const fetchDataAction = () => async (dispatch) => {
  const { status, message, trans } = await getTransaction();
  status === "success" && trans.length && dispatch(setTransactions(trans));
};
