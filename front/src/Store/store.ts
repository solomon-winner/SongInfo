import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import  SongSlice, { setSongs }  from "./SongSlice";
import rootSaga from '../sagas/rootSaga';
import  DisplaySlice from "./DisplaySlice";
import { statSlice } from "./statSlice";
import { useEffect } from "react";

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

useEffect(() => {
    store.dispatch(setSongs([]))
})

// useEffect(() =>{
//     dispatch(setSongs([]))
// },[dispatch])

export default store;
