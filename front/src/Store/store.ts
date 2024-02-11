import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import { SongSlice } from "./SongSlice";
import rootSaga from '../sagas/rootSaga';
import  DisplaySlice from "./DisplaySlice";
import { statSlice } from "./statSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        songs: SongSlice.reducer,
        display: DisplaySlice.reducer,
        stat: statSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});
sagaMiddleware.run(rootSaga);

export default store;
