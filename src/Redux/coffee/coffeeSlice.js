import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    data: {},
    basket: [],
    error: "",
    total: 0,
    comments: [],
    totalComments: 0
};
export const loadData = (basketData) => {
    return {
        type: 'coffee/loadData',
        payload: basketData,
    };
};
export const saveBasketToLocalStorage = () => {
    return (dispatch, getState) => {
        const { basket } = getState().coffee;
        localStorage.setItem('basket', JSON.stringify(basket));
    };
};

export const loadBasketFromLocalStorage = () => {
    return (dispatch) => {
        const storedBasket = localStorage.getItem('basket');
        if (storedBasket) {
            const parsedBasket = JSON.parse(storedBasket);
            dispatch(loadData(parsedBasket));
        }
    };
};

export const fetchData = createAsyncThunk(
    'coffee/fetchData',
    async (userId, thunkAPI) => {
        try {
            const resp = await fetch('http://localhost:3000/coffeeSite');
            const json = await resp.json();
            return json;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const fetchAllComments = createAsyncThunk(
    'comments/fetchAllComments',
    async (userId, thunkAPI) => {
        try {
            const resp = await fetch(`http://localhost:3000/comments`);
            const json = await resp.json();
            return json;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const addComment = createAsyncThunk(
    'comments/addComment',
    async (commentData, thunkAPI) => {
        try {
            const resp = await fetch(`http://localhost:3000/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(commentData),
            });
            const json = await resp.json();
            return json;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const submitOrder = createAsyncThunk(
    'coffee/submitOrder',
    async (orderData, thunkAPI) => {
        try {
            const resp = await fetch(`http://localhost:3000/orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });
            const json = await resp.json();
            return json;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const coffeeSlice = createSlice({
    name: 'coffee',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            const newCoffee = action.payload;
            const existingCoffee = state.basket.find((el) => el.keyword === newCoffee.keyword);

            if (!existingCoffee) {
                state.basket.push(newCoffee);
            } else {
                existingCoffee.count += newCoffee.count;
            }
            state.total = state.basket.reduce((acc, item) => acc + item.cost * item.count, 0)
        },
        handleDeleteItem: (state, action) => {
            state.basket = state.basket.filter(el => el.id !== action.payload)
            state.total = state.basket.reduce((acc, item) => acc + item.cost * item.count, 0)
            localStorage.setItem('basket', JSON.stringify(state.basket));
        },
        handleQuantityChange: (state, action) => {
            const updatedBasketItems = [...state.basket];
            const updateCount = action.payload.count
            const index = action.payload.index
            updatedBasketItems[index].count = updateCount;

            if (updateCount === 0) {
                state.basket = updatedBasketItems.filter((el, i) => i !== index);
            } else {
                state.basket = updatedBasketItems;
            }
            state.total = state.basket.reduce((acc, item) => acc + item.cost * item.count, 0)
            localStorage.setItem('basket', JSON.stringify(state.basket))
        },
        clearBasket: (state) => {
            state.basket = [];
            state.total = 0;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.fulfilled, (state, action) => {
                state.data = action.payload
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.error = `${action.payload}`
            })
            .addCase(fetchAllComments.fulfilled, (state, action) => {
                state.comments = action.payload;
                state.totalComments = action.payload.length;
            })
            .addCase(fetchAllComments.rejected, (state, action) => {
                state.error = `${action.payload}`
            })
    },
});

export const { addToBasket, calculateTotal, handleDeleteItem, handleQuantityChange, clearBasket } = coffeeSlice.actions;
export default coffeeSlice.reducer;