import React, { Component } from 'react'

const WithLogging = (WrappedComponent) => {
	class WithLogging extends Component {}
	WithLogging.displayName = `WithLogging(${getDisplayName(WrappedComponent)})`

	return class extends Component {
		constructor(props) { super(props); }

		componentDidMount() {
			console.log(`Component ${WithLogging.displayName} is mounted`)
		}

		componentWillUnmount() {
			console.log(`Component ${WithLogging.displayName} is going to unmount`)
		}

		render() {
			return <WrappedComponent {...this.props}/>
		}
	}
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default WithLogging
