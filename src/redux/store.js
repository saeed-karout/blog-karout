import { configureStore  ,combineReducers } from '@reduxjs/toolkit'
import userReducer from './user/user.slice'
import themeReducer from './theme/themeSlice'
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist'
const rootReducer = combineReducers({
    user : userReducer,
    theme : themeReducer,
})

const persistConfig ={
    key : 'root',
    storage,
    version :1,

};
const persistedReducer = persistReducer(persistConfig,rootReducer)


export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  
});



export  const persistor = persistStore(store)

