import { MainLayout } from "../components/layout/MainLayout";
import { Row } from "react-bootstrap";
import { TransactionForm } from "../components/form/TransactionForm";
import { TransactionTable } from "../components/transaction-table/TransactionTable";

export const Dashboard = ({ isLoggedIn }) => {
  return (
    <div>
      <MainLayout isLoggedIn={isLoggedIn}>
        <Row>
          <h3 className="text-center mt-4">Dashboard</h3>

          <hr />

          {/* form section */}
          <TransactionForm />
          <hr className="mt-5" />

          {/* table section */}
          <TransactionTable />
        </Row>
      </MainLayout>
    </div>
  );
};
