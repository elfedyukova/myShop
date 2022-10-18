import { createContext, useContext, useState } from 'react';

const AppContext = createContext({
    cartItems: [],
    setCartItems: () => { },
    addToCart: () => { }
});

export function AppWrapper({ children }) {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        console.log('adding to cart');
        setCartItems(items => [...items, product])
    }

    const state = {
        cartItems,
        setCartItems,
        addToCart
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