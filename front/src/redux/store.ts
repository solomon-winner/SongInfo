import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import { SongSlice } from "./SongSlice";
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        songs: SongSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});
sagaMiddleware.run(rootSaga);

export default store;
