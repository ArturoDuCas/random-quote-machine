import {data} from './data'; 
import * as Redux from 'redux';

const appReducer = (state = data, action) => {
    switch(action.type) {
        default: 
            return state; 
    }
}

export const store = Redux.createStore(appReducer);