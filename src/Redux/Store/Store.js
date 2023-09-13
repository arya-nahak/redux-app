import { combineReducers, createStore } from 'redux'
import Reducer from '../Reducer/Reducer'
import CombineReducer_ from '../Reducer/CombineReducer_'

const combine_ = combineReducers({
    counter:Reducer,
    users_data:CombineReducer_
})

const createStore_ = createStore(combine_)

export default createStore_