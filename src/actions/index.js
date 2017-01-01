'use strict';

const HOSTNAME = 'http://localhost:8070';

export const REQUEST_TWEETS = 'REQUEST_TWEETS';
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS';

export function requestTweets() {
	return {
		type: REQUEST_TWEETS
	};
}

export function receiveTweets(tweets) {
	return {
		type: RECEIVE_TWEETS,
		tweets
	};
}

export function fetchTweets() {
	return (dispatch) => {
		dispatch(requestTweets());

		return fetch(`${HOSTNAME}/tweets`)
		.then(res => res.json())
		.then((json) => {
			dispatch(receiveTweets(json));
		});
	};
};
