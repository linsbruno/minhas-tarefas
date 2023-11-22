import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'

import * as enums from '../../utils/enums/Tarefa'

import { remorver } from '../../store/reducers/tarefas'
import TarefaClass from '../../models/Tarefa'

type Props = TarefaClass

const Tarefa = ({ descricao, prioridade, status, titulo, id }: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)

  return (
    <S.Card>
      <S.Titulo>{titulo}</S.Titulo>
      <S.Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </S.Tag>
      <S.Tag parametro="status" status={status}>
        {status}
      </S.Tag>
      <S.Descricao value={descricao} />
      <S.BarraAcoes>
        {editando ? (
          <>
            <S.botaoSalvar>Salvar</S.botaoSalvar>
            <S.botaoCancelar onClick={() => setEditando(false)}>
              Cancelar
            </S.botaoCancelar>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEditando(true)}>Editar</S.Botao>
            <S.botaoCancelar onClick={() => dispatch(remorver(id))}>
              Remover
            </S.botaoCancelar>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Tarefa
