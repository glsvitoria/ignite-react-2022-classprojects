import { useContext } from "react";
import { Container, HistoryList, Status } from "./styles";
import { CyclesContext } from "../../contexts/CyclesContext";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
export default function History() {
  const { cycles } = useContext(CyclesContext);

  return (
    <Container>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map(cycle => (
              <tr key={cycle.id}>
                <td>{cycle.task}</td>
                <td>{cycle.minutesAmount} minutos</td>
                <td>
                  {formatDistanceToNow(new Date(cycle.startDate), {
                    addSuffix: true,
                    locale: ptBR,
                  })}
                </td>
                <td>
                  {cycle.finishedDate && (
                    <Status status="concluded">Concluído</Status>
                  )}
                  {cycle.interruptedDate && (
                    <Status status="interrupted">Interrompido</Status>
                  )}
                  {!cycle.interruptedDate && !cycle.finishedDate && (
                    <Status status="progress">Em andamento</Status>
                  )}
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </HistoryList>
    </Container>
  );
}
