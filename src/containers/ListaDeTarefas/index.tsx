import Tarefa from '../../components/Tarefa'
import { Container } from './styles'

const tarefas = [
  {
    titulo: 'Estudar TS',
    descricao: 'Ver a aula 3',
    prioridade: 'importante',
    status: ' Pendente'
  },
  {
    titulo: 'Pagar a net',
    descricao: 'Baixar fatura no email',
    prioridade: 'urgente',
    status: ' concluida'
  },
  {
    titulo: 'ir para academia',
    descricao: 'fazer treino B',
    prioridade: 'importante',
    status: ' Pendente'
  }
]

const ListaDetarefas = () => (
  <Container>
    <ul>
      {tarefas.map((t) => (
        <li key={t.titulo}>
          <Tarefa
            descricao={t.descricao}
            titulo={t.titulo}
            status={t.status}
            prioridade={t.prioridade}
          />
        </li>
      ))}
    </ul>
  </Container>
)

export default ListaDetarefas
