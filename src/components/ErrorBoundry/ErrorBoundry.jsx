import React from "react";
import ErrorFallback from "../ErrorFallback/ErrorFallback";

export default class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, info) {
        console.error("Uncaught error:", error, info);
    }

    handleReset = () => {
        // Basit ve güvenli reset
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <ErrorFallback
                    error={this.state.error}
                    onReset={this.handleReset}
                />
            );
        }

        return this.props.children;
    }
}
