import { IsAuath } from "./actions";

const init = {};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case IsAuath:
      return {}
    default:
      return store;
  }
};
