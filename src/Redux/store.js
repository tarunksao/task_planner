import {applyMiddleware,combineReducers,legacy_createStore} from 'redux';
import thunk from 'redux-thunk';
import { taskReducer } from './tasks/task.reducer';

const rootReducer = combineReducers({
    tasks:taskReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));