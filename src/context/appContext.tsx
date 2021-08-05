import { createContext, useContext } from 'react';
import { initialState, IState } from './state';

export type AppContextType = {
    globalState: IState;
    setGlobalState: (state: IState) => void;
};

export const AppContext = createContext<AppContextType>({
    globalState: initialState,
    setGlobalState: () => {},
});

export const useAppContext = () => useContext(AppContext);
