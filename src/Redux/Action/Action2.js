export const success = (payload) => ({
  type: "succ",
  payload,
});

export const error = (payload) => ({
  type: "err",
  payload,
});
