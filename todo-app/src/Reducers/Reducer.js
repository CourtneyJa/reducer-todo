export const initialState = [
  {
    item: "Graduate from Lambda",
    completed: false,
    id: Date.now()
  }
];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          item: action.payload.item,
          completed: false,
          id: Date.now()
        }
      ];
    case TOGGLE_COMPLETED:
      return state.map(todo => {
        if (todo.id === action.payload.item.id) {
          return { item: todo.item, completed: !todo.completed, id: todo.id };
        }
        return todo;
      });
    case CLEAR_COMPLETED:
      return state.filter(todo => {
        if (todo.completed === false) {
          return todo;
        }
        return null;
      });
    default:
      return state;
  }
};

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
