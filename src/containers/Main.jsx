'use strict';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchTweets } from '../actions';

import TweetList from './TweetList';

import '../styles/Main.css';

class Main extends React.Component {
	componentWillMount() {
		const { dispatch } = this.props;

		dispatch(fetchTweets());
	}

	render() {
		const { tweets } = this.props;

		return (
			<div className="main">
				<TweetList tweets={tweets} />
				<TweetList tweets={tweets} />
				<TweetList tweets={tweets} />
				<TweetList tweets={tweets} />
				<TweetList tweets={tweets} />
				<TweetList tweets={tweets} />
				<TweetList tweets={tweets} />
				<TweetList tweets={tweets} />
				<TweetList tweets={tweets} />
				<TweetList tweets={tweets} />
				<TweetList tweets={tweets} />
				<TweetList tweets={tweets} />
			</div>
		);
	}
}

export default connect()(Main);
