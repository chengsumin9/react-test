import { ADD, ADD_TYPE, LESSEN, LESSEN_TYPE } from "./const";

export interface ADDAction {
  type: ADD_TYPE;
}
export interface LESSENAction {
  type: LESSEN_TYPE;
}

export type ModifyAction = ADDAction | LESSENAction;

export const Add = () => ({
  type: ADD,
});

export const Lessen = () => ({
  type: LESSEN,
});
