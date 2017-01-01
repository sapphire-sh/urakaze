'use strict';

import React, { PropTypes } from 'react';

import twitterText from 'twitter-text';

import '../styles/Tweet.css';

class Tweet extends React.Component {
	render() {
		const {
			text,
			entities
		} = this.props.tweet;

		return (
			<div className="tweet">
				<span dangerouslySetInnerHTML={{ __html: twitterText.autoLink(text, {
						urlEntities: entities.urls
					})
				}} />
				</div>
			);
		}
	};

	Tweet.propTypes = {
		tweet: PropTypes.object.isRequired
	};

	export default Tweet;
