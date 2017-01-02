'use strict';

import {
	REQUEST_TWEETS,
	RECEIVE_TWEETS
} from '../actions';

const tweets = (state = {
	tweets: []
}, action) => {
	switch(action.type) {
		case REQUEST_TWEETS:
		return state;
		case RECEIVE_TWEETS:
		return Object.assign({}, state, {
			columnType: action.tweets.columnType,
			tweets: action.tweets
		});
		default:
		return state;
	}
}

export default tweets;
