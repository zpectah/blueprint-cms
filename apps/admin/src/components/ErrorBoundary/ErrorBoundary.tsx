import React, { Component, ReactNode, ErrorInfo } from 'react';

class ErrorBoundary extends Component<
  { children: ReactNode; errorRender?: (error: Error) => ReactNode },
  { hasError: boolean; error: Error | undefined }
> {
  state = { hasError: false, error: undefined };

  static egtDerivedStateFromError(error: Error) {
    // TODO
    // Create log ???
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn(error, errorInfo);
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return this.props?.errorRender ? (
        this.props.errorRender(this.state.error)
      ) : (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'white',
            color: 'black',
          }}
        >
          Error message
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
