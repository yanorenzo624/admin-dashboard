import { Component } from "react";

class ErrorBoundary extends Component {
	state = { hasError: false };

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.error(error, info);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="h-screen flex items-center justify-center">
					<p className="text-red-500 text-lg">
						Something went wrong.
					</p>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
