'use strict';

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tweets from './tweets';

const reducers = combineReducers({
	tweets,
	routing: routerReducer
});

export default reducers;
