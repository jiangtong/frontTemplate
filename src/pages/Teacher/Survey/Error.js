/** @format */
import React from 'react';
import * as Sentry from '@sentry/browser';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo
        });

        Sentry.withScope(scope => {
            scope.setExtras(errorInfo);
            Sentry.captureException(error);
        });
    }

    render() {
        if (this.state.errorInfo) {
            return (
                <div>
                    <button
                        onClick={() =>
                            Sentry.showReportDialog({
                                eventId: this.state.eventId
                            })
                        }
                    >
                        Report feedback
                    </button>

                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        return this.props.children;
    }
}

// eslint-disable-next-line react/no-multi-comp
class BuggyCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(
            ({ counter }) => ({
                counter: counter + 1
            }),
            () => {
                throw new Error('I crashed!');
            }
        );
    }

    render() {
        if (this.state.counter === 5) {
            throw new Error('I crashed!');
        }
        return <div onClick={this.handleClick}>{this.state.counter}</div>;
    }
}

// eslint-disable-next-line react/no-multi-comp
class BuggyCounterTWO extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(
            ({ counter }) => ({
                counter: counter + 1
            }),
            () => {
                throw new Error('CUO CUO CUO');
            }
        );
    }

    render() {
        if (this.state.counter === 5) {
            throw new Error('I crashed!');
        }
        return (
            <div>
                <button onClick={this.handleClick.bind(this)}>jiangtong</button>
            </div>
        );
    }
}

// eslint-disable-next-line react/no-multi-comp
function App() {
    return (
        <ErrorBoundary>
            <BuggyCounter />
            <BuggyCounterTWO />
        </ErrorBoundary>
    );
}

export default App;
