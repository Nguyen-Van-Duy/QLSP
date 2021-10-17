import {configureStore} from '@reduxjs/toolkit';


const store = configureStore({
    reducer: {ui: '', cart: ''}
})

export default store;