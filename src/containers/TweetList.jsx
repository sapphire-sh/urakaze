'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchTweets } from '../actions';

import Tweet from '../components/Tweet';

import '../styles/TweetList.css';

class TweetList extends React.Component {
	componentWillMount() {
		const {
			dispatch,
			columnType
		} = this.props;

		dispatch(fetchTweets(columnType));
		setInterval(() => {
			dispatch(fetchTweets(columnType));
		}, 5000);
	}

	render() {
		const { tweets } = this.props;

		return (
			<div className="tweet_list">
				{
					tweets.map((tweet) => {
						return (
							<Tweet key={Math.random()} tweet={tweet} />
						);
					})
				}
			</div>
		);
	}
}

TweetList.propTypes = {
	tweets: PropTypes.array.isRequired,
	dispatch: PropTypes.func.isRequired
};

export default connect((state) => {
	const columnType = state.tweets.columnType;
	const tweets = state.tweets.tweets[columnType];

	if(tweets === undefined) {
		return {
			tweets: []
		};
	}
	return {
		tweets
	};
})(TweetList);
