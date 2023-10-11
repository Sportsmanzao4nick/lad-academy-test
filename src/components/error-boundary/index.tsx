import React, { Component, ErrorInfo } from "react";
import { Props, State } from "./types";

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
    };

    static getDerivedStateFromError(): State {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Error</h1>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
