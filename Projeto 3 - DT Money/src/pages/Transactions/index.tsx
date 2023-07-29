import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { Container, PriceHighlight, Table } from "./styles";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import formatNumber from "../../utils/formatNumber";
import { format } from "date-fns";
import { useContextSelector } from "use-context-selector";
import { useContext } from "react";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);
  // const transactions = useContextSelector(TransactionsContext, context => {
  //   return context.transactions;
  // });

  return (
    <div>
      <Header />
      <Summary />

      <Container>
        <SearchForm />
        <Table>
          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {formatNumber({
                        data: transaction.price,
                        type: "currency",
                      })}
                    </PriceHighlight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {format(new Date(transaction.createdAt), "dd/MM/yyyy")}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
