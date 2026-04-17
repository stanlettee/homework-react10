import { nanoid } from "nanoid";
import { ACTION_TYPES, FILTER_TYPES } from "./constants";


export const addContact= (name, number) => {
  return {
    type: ACTION_TYPES.add,
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const removeContact = id => {
  return {
    type: ACTION_TYPES.remove,
    payload: id
  };
};


export const filterContacts = filterText => {
  return {
    type: FILTER_TYPES.filter,
    payload: filterText
  };
}