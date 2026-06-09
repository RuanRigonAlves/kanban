export const taskRules = {
  required: (value) => !!value || "Campo obrigatório",

  minTitle: (value) =>
    value?.length >= 3 || "O título deve ter pelo menos 3 caracteres",

  minDescription: (value) =>
    value?.length >= 10 || "A descrição deve ter pelo menos 10 caracteres",
};
