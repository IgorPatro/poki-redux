import {
  configureStore,
  combineReducers,
  PreloadedState,
} from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import { pokeApi } from "features/pokeApi"

const rootReducer = combineReducers({
  [pokeApi.reducerPath]: pokeApi.reducer,
})

export const setupStore = (options?: PreloadedState<RootState>) =>
  configureStore({
    reducer: {
      [pokeApi.reducerPath]: pokeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(pokeApi.middleware),
    ...options,
  })

export const store = setupStore()
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export const useAppSelector: TypedUseSelectorHook<AppStore> = useSelector
