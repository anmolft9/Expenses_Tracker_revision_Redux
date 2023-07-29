import React, { useEffect, useState } from "react";
// import { Login } from "./Login";
// import { Register } from "./Register";
import { MainLayout } from "../components/layout/MainLayout";
import { Row, Toast } from "react-bootstrap";
import { TransactionForm } from "../components/form/TransactionForm";
import { TransactionTable } from "../components/transaction-table/TransactionTable";
import {
  deleteTransaction,
  getTransaction,
  postNewTransaction,
} from "../helpers/axiosHelper.js";
import { toast } from "react-toastify";

export const Dashboard = ({ isLoggedIn }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { status, message, trans } = await getTransaction();
    status === "success" && trans.length && setTransactions(trans);
  };

  const postData = async (transaction) => {
    const user = JSON.parse(sessionStorage.getItem("user"));

    const userId = user._id;
    const { status, message } = await postNewTransaction({
      ...transaction,
      userId,
    });
    toast[status](message);
    status === "success" && fetchData();
  };
  // console.log(transactions);

  const handleOnDelete = async (_id) => {
    if (!window.confirm("Are you sure you want to delete this transaction")) {
      return;
    }

    const { status, message } = await deleteTransaction(_id);
    status === "success" && fetchData();
    toast[status](message);
  };

  return (
    <div>
      <MainLayout isLoggedIn={isLoggedIn}>
        <Row>
          <h3 className="text-center mt-4">Dashboard</h3>

          <hr />

          {/* form section */}
          <TransactionForm postData={postData} />
          <hr className="mt-5" />

          {/* table section */}
          <TransactionTable
            transactions={transactions}
            handleOnDelete={handleOnDelete}
          />
        </Row>
      </MainLayout>
    </div>
  );
};
