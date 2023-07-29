import { Card, Container } from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import formatNumber from "../../utils/formatNumber";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {
  const summary = useSummary();

  return (
    <Container>
      <Card>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color="#00b37e" />
        </header>

        <strong>
          {formatNumber({ data: summary.income, type: "currency" })}
        </strong>
      </Card>
      <Card>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color="#f75a68" />
        </header>

        <strong>
          {formatNumber({ data: summary.outcome, type: "currency" })}
        </strong>
      </Card>
      <Card variant="green">
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color="#FFF" />
        </header>

        <strong>
          {formatNumber({ data: summary.total, type: "currency" })}
        </strong>
      </Card>
    </Container>
  );
}
