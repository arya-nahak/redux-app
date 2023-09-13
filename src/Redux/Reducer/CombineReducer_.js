const initialState = {
  data: [],
  error: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "succ":
      return { ...state, data:payload };

    case "err":
      return { ...state, error:payload };

    default:
      return state;
  }
};
