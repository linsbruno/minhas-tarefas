import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

import * as enums from '../../utils/enums/Tarefa'

type TarefastState = {
  itens: Tarefa[]
}

const initialState: TarefastState = {
  itens: [
    {
      id: 1,
      descricao: 'Estudar canvas',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.CONCLUIDA,
      titulo: 'Canvas'
    },
    {
      id: 2,
      descricao: 'Estudar JS',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Status.PENDENTE,
      titulo: 'JS'
    },
    {
      id: 3,
      descricao: 'Estudar CSS',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      titulo: 'CSS'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remorver: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remorver } = tarefasSlice.actions

export default tarefasSlice.reducer
