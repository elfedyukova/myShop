import { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext({
    cartItems: [],
    setCartItems: () => { },
    addToCart: () => { },
    categories: [],
    setCategories: () => { }
});

export function AppWrapper({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [categories, setCategories] = useState([]);

    const addToCart = (product) => {
        console.log('adding to cart');
        setCartItems(items => [...items, product])
    }

    useEffect(() => {
        const categoriesLength = categories.length
        if (!categoriesLength) {
            fetch('https://dummyjson.com/products/categories').then(res => res.json().then(json => setCategories(json)))
        }
    }, [categories])

    const state = {
        cartItems,
        setCartItems,
        addToCart,
        categories,
        setCategories
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