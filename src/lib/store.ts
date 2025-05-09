import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './features/authApi'
import authReducer from './features/authSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      Auth: authReducer,
      [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultmiddleware) => getDefaultmiddleware().concat(authApi.middleware)
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']