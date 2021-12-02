export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ARTICLE":
      return [
        ...state,
        {
          id: Math.random(),
          title: action.payload.title,
          body: action.payload.body,
        },
      ];

    default:
      return state;
  }
};
