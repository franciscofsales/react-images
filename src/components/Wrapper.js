import React, { Component, PropTypes } from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';

import defaults from '../theme';
import { deepMerge } from '../utils';

class Wrapper extends Component {
	render () {
		const classes = StyleSheet.create(deepMerge(defaultStyles, this.context.theme));

		return (
			<div
				className={css(classes.wrapper)}
				{...this.props}
			/>
		);
	}
};

Wrapper.contextTypes = {
	theme: PropTypes.object.isRequired,
};

const defaultStyles = {
	wrapper: {
		alignItems: 'center',
		backgroundColor: defaults.wrapper.background,
		boxSizing: 'border-box',
		display: 'flex',
		height: '100%',
		justifyContent: 'center',
		left: 0,
		paddingBottom: defaults.wrapper.gutter.vertical,
		paddingLeft: defaults.wrapper.gutter.horizontal,
		paddingRight: defaults.wrapper.gutter.horizontal,
		paddingTop: defaults.wrapper.gutter.vertical,
		position: 'fixed',
		top: 0,
		width: '100%',
		zIndex: defaults.wrapper.zIndex,
	},
};

module.exports = Wrapper;
