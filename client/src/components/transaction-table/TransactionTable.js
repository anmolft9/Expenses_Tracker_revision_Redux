import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

export const TransactionTable = ({ transactions, handleOnDelete }) => {
  const total = transactions.reduce((acc, { transactionType, amounts }) => {
    return transactionType === "Income" ? acc + amounts : acc - amounts;
  }, 0);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>title</th>
            <th>Incomes</th>
            <th>Expenses</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 &&
            transactions.map((item, i) => (
              <tr key={i}>
                <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                <td>{item.title}</td>
                <td className="text-success">
                  {item.transactionType === "Income" && item.amounts}
                </td>
                <td className="text-danger">
                  {item.transactionType === "Expense" && item.amounts}
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleOnDelete(item._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      <div className="text-end fw-bold text-success">
        Total Balance : ${total}
      </div>
    </>
  );
};
