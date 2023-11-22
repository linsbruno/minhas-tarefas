import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../models/Tarefa'

import * as enums from '../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar Javascript',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      '',
      1
    ),
    new Tarefa(
      'Estudar TS',
      enums.Prioridade.URGENTE,
      enums.Status.CONCLUIDA,
      'Rever aula 2 do modulo',
      2
    ),
    new Tarefa(
      'Estudar React',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'Praticar o useEffect',
      3
    )
  ],
  reducers: {
    remorver: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remorver } = tarefasSlice.actions

export default tarefasSlice.reducer
