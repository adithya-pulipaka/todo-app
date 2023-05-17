export const TODO_OPS = {
  INIT: "INIT",
  ADD: "ADD",
  DELETE: "DELETE",
  EDIT: "EDIT",
  COMPLETED: "COMPLETED",
};

function reducer(state, action) {
  switch (action.type) {
    case TODO_OPS.INIT:
      return action ? [...action?.payload] : [];
    case TODO_OPS.ADD:
      return [action.payload, ...state];
    case TODO_OPS.DELETE:
      const data = state.filter((todo) => {
        return todo.id !== action.payload;
      });
      return data;
    case TODO_OPS.COMPLETED: {
      const data = state.filter((todo) => {
        if (todo.id === action.payload) {
          todo.completed = true;
        }
        return todo;
      });
      return data;
    }
  }
}

export default reducer;
