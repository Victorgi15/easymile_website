'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

// Composant de chargement
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-background text-text flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#37b0a6] mx-auto mb-4"></div>
        <p className="text-gray-400">Chargement...</p>
      </div>
    </div>
  );
}

// Composant de fallback en cas d'erreur
function ErrorFallback({ error, resetError }: { error: Error; resetError: () => void }) {
  return (
    <div className="min-h-screen bg-background text-text flex items-center justify-center p-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Une erreur s'est produite</h2>
        <p className="text-gray-400 mb-4">Veuillez rafraîchir la page</p>
        <button
          onClick={resetError}
          className="bg-[#37b0a6] text-white px-6 py-3 rounded-md hover:bg-[#2a8a82] transition-colors duration-300"
        >
          Rafraîchir
        </button>
      </div>
    </div>
  );
}

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class AppErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error!} resetError={this.resetError} />;
    }

    return this.props.children;
  }
}

export { LoadingFallback }; 