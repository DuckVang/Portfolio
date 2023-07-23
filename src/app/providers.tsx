"use client";

import React, {
  Dispatch,
  Reducer,
  ReducerAction,
  createContext,
  useReducer,
  useState,
} from "react";

enum actions {
  ADD = "ADD_TODO_ITEM",
  REMOVE = "REMOVE_TODO_ITEM",
}

type Action = {
  type: actions;
  payload: string;
};

type initialStateType = {
  history: string[];
};

const reducer: Reducer<initialStateType, Action> = (state, action) => {
  switch (action.type) {
    case actions.ADD:
      return { history: [...state.history, action.payload] };
    default:
      return state;
  }
};
export const HistoryContext = createContext<{
  state: initialStateType;
  dispatch: React.Dispatch<Action>;
}>({ state: { history: [] }, dispatch: () => undefined });

export default function Providers({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { history: [] });

  return (
    <HistoryContext.Provider value={{state,dispatch}}>
      {children}
    </HistoryContext.Provider>
  );
}
