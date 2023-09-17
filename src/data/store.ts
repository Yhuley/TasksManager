import { configureStore } from '@reduxjs/toolkit'
import { appReducers } from './reducers'

export const store = configureStore({
  reducer: appReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
})

export type AppDispatch = typeof store.dispatch
