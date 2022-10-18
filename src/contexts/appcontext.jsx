import { createContext, useContext, useState, useCallback } from 'react';

const AppContext = createContext({
    cartItems: [],
    setCartItems: () => { },

});

export function AppWrapper({ children }) {
    const [cartItems, setCartItems] = useState([]);


    const state = {
        cartItems,
        setCartItems
    };

    return (
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    return useContext(AppContext);
}
// обертка для доступа к одному общему стейту