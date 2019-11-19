export const task = [
  {
    item: "Graduate from Lambda",
    completed: false,
    id: Date.now()
  }
];

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log(ADD_TODO, "does it work");
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ];
    case TOGGLE_COMPLETED:
      return state.map(task => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });
    case CLEAR_COMPLETED:
      return state.filter(task => !task.completed);
    default:
      return state;
  }
};

export const ADD_TODO = "ADD_TODO";
export const TOGGLE_COMPLETED = "TOGGLE_COMPLETED";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
