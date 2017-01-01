'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import Tweet from '../components/Tweet';

import '../styles/TweetList.css';

class TweetList extends React.Component {
	render() {
		const { tweets } = this.props.tweets;

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
	tweets: PropTypes.object.isRequired,
	dispatch: PropTypes.func.isRequired
};

export default connect((state) => {
	const { tweets } = state;

	if(tweets === undefined) {
		return {
			tweets: []
		}
	}
	return {
		tweets
	};
})(TweetList);
