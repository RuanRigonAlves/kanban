export const taskFilters = {
  applyDateSort(tasks, sortDate) {
    if (sortDate === "desc") {
      return [...tasks].sort(
        (a, b) => new Date(b.dueDate) - new Date(a.dueDate),
      );
    }

    if (sortDate === "asc") {
      return [...tasks].sort(
        (a, b) => new Date(a.dueDate) - new Date(b.dueDate),
      );
    }

    return tasks;
  },
};
