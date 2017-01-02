'use strict';

const HOSTNAME = 'http://localhost:8070';

export const REQUEST_TWEETS = 'REQUEST_TWEETS';
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

export function requestTweets() {
	return {
		type: REQUEST_TWEETS
	};
}

export function receiveTweets(columnType, tweets) {
	return {
		type: RECEIVE_TWEETS,
		tweets: {
			columnType: columnType,
			[columnType]: tweets
		}
	};
}

export function fetchTweets(columnType) {
	return (dispatch) => {
		dispatch(requestTweets());

		return fetch(`${HOSTNAME}/tweets`)
		.then(res => res.json())
		.then((json) => {
			dispatch(receiveTweets(columnType, json));
		});
	};
};
