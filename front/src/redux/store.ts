import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import { SongSlice } from "./SongSlice";
import rootSaga from '../sagas/rootSaga';

const saga = createSagaMiddleware();

const store = configureStore({
    reducer: {
        Song: SongSlice.reducer,
        middleware: [saga]
    }
})
saga.run(rootSaga);

export default store;