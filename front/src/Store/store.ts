import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import  SongSlice, { songLoading }  from "./SongSlice";
import rootSaga from '../sagas/rootSaga';
import  DisplaySlice from "./DisplaySlice";
import { statSlice } from "./statSlice";
import selectedSlice from "./SelectedSongSlice";
import FilterSlice from "./FilterSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        songs: SongSlice.reducer,
        display: DisplaySlice.reducer,
        stat: statSlice.reducer,
        selected: selectedSlice.reducer,
        filter:FilterSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});
sagaMiddleware.run(rootSaga);


store.dispatch(songLoading())

export default store;
