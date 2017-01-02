'use strict';

import React, { PropTypes } from 'react';

import TweetList from './TweetList';

import '../styles/Main.css';

class Main extends React.Component {
	render() {
		return (
			<div className="main">
				<TweetList columnType="1" />
				<TweetList columnType="2" />
				<TweetList columnType="3" />
				<TweetList columnType="4" />
				<TweetList columnType="5" />
				<TweetList columnType="6" />
				<TweetList columnType="7" />
				<TweetList columnType="8" />
				<TweetList columnType="9" />
				<TweetList columnType="a" />
			</div>
		);
	}
}

export default Main;
