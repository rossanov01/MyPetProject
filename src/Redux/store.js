import { configureStore } from '@reduxjs/toolkit';
import coffee, { loadBasketFromLocalStorage, saveBasketToLocalStorage } from './coffee/coffeeSlice';

const store = configureStore({
    reducer: {
        coffee: coffee,
    }
});


store.dispatch(loadBasketFromLocalStorage());

store.subscribe(() => {
    store.dispatch(saveBasketToLocalStorage());
});
export default store;
