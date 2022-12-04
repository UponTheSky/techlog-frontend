import { createContext, Reducer, Dispatch } from 'react';

export const tokenReducer: Reducer<string | null, string> = (_, action) => action;

export const TokenContext = createContext<string | null>(null);
export const TokenDispatchContext = createContext<Dispatch<string>>(() => {});
