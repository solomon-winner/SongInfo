import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import  SongSlice, { songLoading }  from "./SongSlice";
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


store.dispatch(songLoading())

export default store;
