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

  applyPrioritySort(tasks, sortPriority) {
    const priorityOrder = {
      high: 3,
      medium: 2,
      low: 1,
    };

    if (sortPriority === "desc") {
      return [...tasks].sort(
        (a, b) => priorityOrder[b.priority] - priorityOrder[a.priority],
      );
    }

    if (sortPriority === "asc") {
      return [...tasks].sort(
        (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority],
      );
    }

    return tasks;
  },
};
