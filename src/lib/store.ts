import { configureStore } from '@reduxjs/toolkit'
import { api } from './features/api'
import authReducer from './features/authSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      Auth: authReducer,
      [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultmiddleware) => getDefaultmiddleware().concat(api.middleware)
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']