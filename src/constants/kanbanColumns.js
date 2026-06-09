import { TASK_STATUS } from "@/constants/taskStatus.js";

export const kanbanColumns = [
  {
    id: TASK_STATUS.TODO,
    title: "Nao Iniciado",
    color: "colunaToDo",
  },

  {
    id: TASK_STATUS.PENDING,
    title: "Pendente",
    color: "colunaPendente",
  },

  {
    id: TASK_STATUS.IN_PROGRESS,
    title: "Em Andamento",
    color: "colunaEmAndamento",
  },

  {
    id: TASK_STATUS.REVIEW,
    title: "Em Revisão",
    color: "colunaRevisao",
  },

  {
    id: TASK_STATUS.DONE,
    title: "Concluído",
    color: "colunaConcluido",
  },

  {
    id: TASK_STATUS.CANCELED,
    title: "Cancelado",
    color: "colunaCancelado",
  },
];
