import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartReducer'

const reducer = {cartReducer}
const store = configureStore({reducer});

export default store